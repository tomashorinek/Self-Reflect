// planLogic.js — clean ES module (with machine-first bias)
// -------------------------------------------------------
import { adaptConditioningPlan } from "./conditioningAdapter.js";

let currentPlan = null;

/* ===========================
   Conditioning data loader
   =========================== */
async function loadConditioningData() {
  if (window.conditioningFrequencies) return;

  const CF_VERSION = "gym_v2_2025-08-09_02";
  const url = `https://www.webbyfe.com/conditioningFrequencies.js?v=${encodeURIComponent(CF_VERSION)}`;

  console.log("[CF] loading", url);

  const script = document.createElement("script");
  script.src = url;

  const onloadPromise = new Promise((resolve, reject) => {
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("network or CORS error"));
  });

  document.head.appendChild(script);

  try {
    await onloadPromise;
  } catch (e) {
    console.error("[CF] onerror:", e);
    return tryLocalFallback(e);
  }

  const ok = await waitFor(() => !!window.conditioningFrequencies || !!window.loadConditioningData, 2000, 50);

  if (!window.conditioningFrequencies && typeof window.loadConditioningData === "function") {
    try {
      await window.loadConditioningData();
    } catch (e) {
      console.warn("[CF] loadConditioningData() threw:", e);
    }
  }

  if (!window.conditioningFrequencies) {
    console.warn("[CF] still missing after script load. Trying local fallback…");
    return tryLocalFallback(new Error("Conditioning data not found after script load"));
  }

  console.log(
    "[CF] ready. ver:",
    window.__COND_VER__ || "unknown",
    "branches:",
    Object.keys(window.conditioningFrequencies || {})
  );
}

// util: polling
function waitFor(fn, timeoutMs = 1000, stepMs = 50) {
  return new Promise(resolve => {
    const t0 = Date.now();
    const tick = () => {
      if (fn()) return resolve(true);
      if (Date.now() - t0 >= timeoutMs) return resolve(false);
      setTimeout(tick, stepMs);
    };
    tick();
  });
}

// fallback to local
async function tryLocalFallback(reason) {
  console.warn("[CF] fallback to ./conditioningLocal.js because:", reason?.message || reason);

  const tryCheck = (label) => {
    if (window.conditioningFrequencies && typeof window.conditioningFrequencies === "object") {
      console.log(`[CF] ${label}: using window.conditioningFrequencies. branches:`,
        Object.keys(window.conditioningFrequencies || {}));
      return true;
    }
    return false;
  };

  if (tryCheck("pre-existing")) return;

  try {
    const mod = await import("./conditioningLocal.js");
    if (tryCheck("after ESM import")) return;
    const data = mod?.default || mod?.conditioningFrequencies;
    if (data && typeof data === "object") {
      window.conditioningFrequencies = data;
      console.log("[CF] loaded from ESM export. branches:", Object.keys(data));
      return;
    }
  } catch (e) {
    console.warn("[CF] ESM import failed, will try classic script:", e);
  }

  try {
    await new Promise((res, rej) => {
      const s = document.createElement("script");
      s.src = "./conditioningLocal.js";
      s.onload = () => res();
      s.onerror = () => rej(new Error("classic script load error"));
      document.head.appendChild(s);
    });
    if (tryCheck("after classic script")) return;
  } catch (e) {
    console.warn("[CF] classic script load failed:", e);
  }

  throw new Error("Conditioning data could not be loaded from remote or local source.");
}

/* ===========================
   Training data loader
   =========================== */
function loadTrainingData(goal, equipment) {
  return new Promise((resolve, reject) => {
    let globalName, src, modulePath, useScript = true;

    if (equipment === "home") {
      useScript = false;
      if (goal === "Get stronger") {
        globalName = "trainingDataStrongHome";
        modulePath = "./trainingDataStrongHome.js";
      } else {
        globalName = "trainingDataCalisthenics";
        modulePath = "./trainingDataCalisthenics.js";
      }
    } else if (goal === "Get stronger") {
      globalName = "trainingDataStrong";
      src = "https://www.webbyfe.com/trainingData_strong.js";
      useScript = true;
    } else {
      globalName = "trainingDataGym";
      modulePath = "./trainingData.js";
      useScript = false;
    }

    if (window[globalName]) return resolve();

    if (!useScript) {
      import(modulePath)
        .then(mod => {
          window[globalName] = mod.default || mod[globalName] || mod.trainingData || mod;
          resolve();
        })
        .catch(err => reject(`trainingData import error: ${err?.message || err}`));
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      const candidates = [
        window[globalName],
        window.trainingData,
        window.trainingDataStrong,
        window.trainingData_strong,
        window.trainingDataGym
      ].filter(Boolean);
      if (candidates.length) {
        window[globalName] = candidates[0];
        resolve();
      } else {
        reject("trainingData not found");
      }
    };
    script.onerror = () => reject("trainingData load error");
    document.head.appendChild(script);
  });
}

/* ===========================
   Helpers (general)
   =========================== */
function pickFreq(obj, key) {
  return obj?.[key] || obj?.gym?.[key] || obj?.home?.[key] || null;
}

function extendConditioningAlternatives(plan) {
  const baseAltMap = {
    "Push-ups": ["Incline Push-ups", "Kneeling Push-ups"],
    "Air Bike Burnout": ["Mountain Climbers", "Jumping Jacks"],
    "Core Circuit Finisher": ["V-Ups", "Hollow Hold"],
    "Bear Crawl Shuttle": ["Crab Walks", "Lateral Bear Crawls"],
    "Burpees": ["Jump Squats", "Sprawl to Jump"],
    "Wall Sit Hold": ["Isometric Lunge Hold", "Chair Hold"],
    "Plank Series": ["Side Plank", "Bird Dog"],
    "Jump Rope": ["High Knees", "Jumping Jacks"]
  };
  Object.entries(baseAltMap).forEach(([main, alts]) => {
    alts.forEach(alt => {
      if (!baseAltMap[alt]) baseAltMap[alt] = alts.filter(a => a !== alt).concat(main);
    });
  });

  Object.values(plan).forEach(exercises => {
    if (!Array.isArray(exercises)) return;
    exercises.forEach(ex => {
      if (!ex.alt) ex.alt = [];
      if (baseAltMap[ex.name]) {
        baseAltMap[ex.name].forEach(a => { if (!ex.alt.includes(a)) ex.alt.push(a); });
      }
    });
  });
}

function getUniqueExercise(existing, exercise) {
  const options = [exercise.name, ...(exercise.alt || [])];
  for (const opt of options) if (!existing.includes(opt)) return opt;
  return exercise.name;
}

function enforceUniqueExercises(plan) {
  Object.values(plan).forEach(dayExercises => {
    if (!Array.isArray(dayExercises)) return;
    const chosen = [];
    dayExercises.forEach(ex => {
      const unique = getUniqueExercise(chosen, ex);
      chosen.push(unique);
      ex.name = unique;
    });
  });
}

/* ===========================
   Machine-first bias helpers
   =========================== */
function isMachineLikeName(name) {
  if (!name) return false;
  return /\b(machine|smith|cable|pulldown|lat pull|leg press|hack|pec deck|assisted|hammer strength|selectorized|plate[- ]loaded|lever)\b/i
    .test(String(name));
}

function findMachineAltFromList(alts) {
  if (!Array.isArray(alts)) return null;
  return alts.find(isMachineLikeName) || null;
}

const _machineFallbacks = [
  { re: /\bfront|back\b.*\bsquat\b|\bsquat\b/i, to: "Leg Press" },
  { re: /\bbench\b|\bchest\b.*\bpress\b/i, to: "Chest Press Machine" },
  { re: /\bohp\b|\boverhead\b.*\bpress\b|\bshoulder\b.*\bpress\b/i, to: "Shoulder Press Machine" },
  { re: /\b(row|pendlay)\b/i, to: "Seated Row Machine" },
  { re: /\bpull-?up\b|\bchin-?up\b/i, to: "Lat Pulldown" },
  { re: /\bdeadlift\b|\bromanian\b|\brdl\b/i, to: "Hamstring Curl Machine" },
  { re: /\blunge\b/i, to: "Smith Machine Lunge" },
  { re: /\blateral raise\b|\bside delt\b/i, to: "Machine Lateral Raise" },
  { re: /\brear delt\b|\breverse fly\b/i, to: "Reverse Pec Deck" },
  { re: /\bcurl\b/i, to: "Cable Curl" },
  { re: /\btriceps\b|\bskullcrusher\b|\bextension\b/i, to: "Cable Pressdown" },
];

function getFallbackMachine(name) {
  if (!name) return null;
  for (const { re, to } of _machineFallbacks) {
    if (re.test(String(name))) return to;
  }
  return null;
}

/**
 * Mutates `plan`: if meta.preferMachinesFirstBlock && equipment === 'gym',
 * prefer machine-based variants:
 *  1) swap to a machine-like `alt` if present
 *  2) otherwise use a reasonable fallback (push original into `alt`)
 */
function applyMachineBias(plan, meta, equipment) {
  if (!meta || !meta.preferMachinesFirstBlock) return;
  if (equipment === "home") return;

  Object.values(plan).forEach((dayExercises) => {
    if (!Array.isArray(dayExercises)) return;
    dayExercises.forEach((ex) => {
      if (!ex || !ex.name) return;

      if (isMachineLikeName(ex.name)) return;

      const mAlt = findMachineAltFromList(ex.alt);
      if (mAlt) {
        ex.alt = (ex.alt || []).filter(a => a !== mAlt);
        ex.alt.push(ex.name);
        ex.name = mAlt;
        return;
      }

      const fallback = getFallbackMachine(ex.name);
      if (fallback) {
        ex.alt = ex.alt || [];
        ex.alt.push(ex.name);
        ex.name = fallback;
      }
    });
  });
}

/* ===========================
   Render
   =========================== */
function renderPlan(plan, freq, formData) {
  const container = document.getElementById("training-container");
  if (!container) return console.error("Container #training-container not found");

  const outputBox = document.getElementById("outputBox");
  if (outputBox) outputBox.style.display = "block";
  container.innerHTML = "";

  for (const [day, exercises] of Object.entries(plan)) {
    if (!Array.isArray(exercises)) {
      console.warn("Day is not an array:", day, exercises);
      continue;
    }
    exercises.forEach(ex => { if (!ex.alt) ex.alt = []; });

    const dayDiv = document.createElement("div");
    dayDiv.className = "day";
    dayDiv.innerHTML = `<h3>${day}</h3>`;

    const list = document.createElement("div");
    list.className = "exercise-list";

    exercises.forEach((exercise, index) => {
      const item = document.createElement("div");
      item.className = "exercise";
      item.setAttribute("draggable", true);
      item.innerHTML = `
        <div>
          <strong>${exercise.name}</strong> – ${exercise.sets}<br><br>
          <span class="alt-list">Alt: ${exercise.alt?.join(", ") || "None"}</span><br>
        </div>
        <span class="alt-button" data-day="${day}" data-index="${index}">🔁</span>
      `;
      item.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", `${day}|${index}`);
      });
      list.appendChild(item);
    });

    if (typeof Sortable === "function") {
      new Sortable(list, {
        animation: 150,
        ghostClass: "sortable-ghost",
        onEnd: (evt) => {
          const [removed] = plan[day].splice(evt.oldIndex, 1);
          plan[day].splice(evt.newIndex, 0, removed);
          renderPlan(plan, freq, formData);
        }
      });
    }

    dayDiv.appendChild(list);
    container.appendChild(dayDiv);
  }

  document.querySelectorAll(".alt-button").forEach(btn => {
    btn.title = "switch for alternative";
    btn.addEventListener("click", () => {
      const day = btn.getAttribute("data-day");
      const index = parseInt(btn.getAttribute("data-index"), 10);
      const exercises = plan[day];
      const current = exercises[index];
      if (current.alt && current.alt.length > 0) {
        const next = current.alt.shift();
        current.alt.push(current.name);
        current.name = next;
        renderPlan(plan, freq, formData);
      }
    });
  });

  if (typeof window.updateTrainingPlanContentInTextarea === "function") {
    window.updateTrainingPlanContentInTextarea();
  }

  // persist
  try {
    window.currentPlanJSON = JSON.stringify(plan);
    localStorage.setItem("lastPlan", window.currentPlanJSON);
    if (window.formData) localStorage.setItem("lastFormData", JSON.stringify(window.formData));
  } catch {}
}

/* ===========================
   Main router
   =========================== */
export async function generateTrainingPlan(formData) {
  console.clear();
  console.log("generateTrainingPlan()", JSON.parse(JSON.stringify(formData)));

  const frequencyKey = formData.frequency === "5plus" ? "5+" : formData.frequency;

  // ---- Improve conditioning ----
  if (formData.goal === "Improve conditioning") {
    await loadConditioningData();

    const equipKey = (formData.equipment === "home") ? "bodyweight" : "gym";
    let basePlanRaw =
      window.conditioningFrequencies?.[equipKey]?.[frequencyKey] ??
      window.conditioningFrequencies?.[formData.equipment]?.[frequencyKey] ??
      null;

    if (Array.isArray(basePlanRaw)) basePlanRaw = { "Full Body": basePlanRaw };
    if (!basePlanRaw) {
      alert("⚠️ Conditioning plan not found");
      return;
    }

    const normalized = adaptConditioningPlan(basePlanRaw);

    currentPlan = JSON.parse(JSON.stringify(normalized));
    extendConditioningAlternatives(currentPlan);
    enforceUniqueExercises(currentPlan);
    renderPlan(currentPlan, frequencyKey, formData);
    return;
  }

  // ---- Strength / Build / Lose ----
  await loadTrainingData(formData.goal, formData.equipment);
  console.log("training data present:", {
    trainingDataGym: !!window.trainingDataGym,
    trainingDataStrong: !!window.trainingDataStrong,
    trainingDataStrongHome: !!window.trainingDataStrongHome,
    trainingDataCalisthenics: !!window.trainingDataCalisthenics
  });

  const adjustedFreq = frequencyKey;

  let basePlan = null;
  if (formData.equipment === "home") {
    if (formData.goal === "Get stronger") {
      basePlan = pickFreq(window.trainingDataStrongHome?.strong, adjustedFreq);
    } else {
      basePlan = pickFreq(window.trainingDataCalisthenics, adjustedFreq);
    }
  } else if (formData.goal === "Get stronger") {
    basePlan = pickFreq(window.trainingDataStrong, adjustedFreq);
  } else {
    basePlan = pickFreq(window.trainingDataGym, adjustedFreq);
  }

  if (!basePlan) {
    alert("❌ Training plan not found for frequency: " + adjustedFreq);
    console.error("No basePlan for", { goal: formData.goal, equipment: formData.equipment, adjustedFreq });
    return;
  }

  currentPlan = JSON.parse(JSON.stringify(basePlan));

  // ---- Prefer machines first block (Gym only; controlled by training.html meta) ----
  if (formData?.meta?.preferMachinesFirstBlock) {
    applyMachineBias(currentPlan, formData.meta, formData.equipment);
    // (optional mini-tag in sets to visualize mode)
    // Object.values(currentPlan).forEach(day => Array.isArray(day) && day.forEach(ex => {
    //   if (ex?.sets && !/machine-first/i.test(ex.sets)) ex.sets = `${ex.sets} · machine-first`;
    // }));
  }

  // ---- Decor for Lose fat ----
  if (formData.goal === "Lose fat") {
    Object.entries(currentPlan).forEach(([day, exercises]) => {
      if (!Array.isArray(exercises)) return;
      if (formData.equipment === "home") {
        exercises.unshift({
          name: "fast walking 10-15minutes",
          sets: "light effort (still comfortable, can talk)",
          alt: ["uphill walking 5minutes", "cycling 10-15 minutes"]
        });
        const isLegDay = day.toLowerCase().includes("leg") || day.toLowerCase().includes("lower");
        if (!isLegDay) {
          exercises.push({
            name: "uphill walking",
            sets: "20-30 minutes moderate intensity",
            alt: ["fast walking", "Shadow boxing", "walking up the stairs"]
          });
        }
      } else {
        exercises.unshift({
          name: "Treadmill Warm-up",
          sets: "10 min",
          alt: ["Bike", "Rowing", "Walk uphill"]
        });
        const isLegDay = day.toLowerCase().includes("leg") || day.toLowerCase().includes("lower");
        if (!isLegDay) {
          exercises.push({
            name: "Post-Workout Cardio",
            sets: "3x (5 min 120–140 bpm, 1 min >160 bpm)",
            alt: ["Bike intervals", "Rowing sprints", "Shadow boxing"]
          });
        }
      }
    });
  }

  enforceUniqueExercises(currentPlan);
  renderPlan(currentPlan, adjustedFreq, formData);
}
