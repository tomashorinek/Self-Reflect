// planLogic.js  — ES module

// ============ Conditioning loader ============
let currentPlan = null;

function loadConditioningData() {
  return new Promise((resolve, reject) => {
    if (window.conditioningFrequencies) return resolve();

    const script = document.createElement('script');
    script.src = 'https://www.webbyfe.com/conditioningFrequencies.js';
    script.onload = async () => {
      try {
        if (window.conditioningFrequencies) return resolve();
        if (window.loadConditioningData) {
          await window.loadConditioningData();
          if (window.conditioningFrequencies) return resolve();
        }
        console.error("❌ Conditioning data not available after script load");
        reject("Conditioning data not found after script load");
      } catch (err) {
        console.error("❌ Error initializing conditioning data", err);
        reject(err);
      }
    };
    script.onerror = () => reject("❌ Failed to load conditioning data script");
    document.head.appendChild(script);
  });
}

// ============ Conditioning helpers ============
function extendConditioningAlternatives(plan) {
  const extraArray = [
    { name: "Core Circuit Finisher", sets: "3x40s plank + 10 crunches", alt: ["Plank to Push-up", "Mountain Climbers"] },
    { name: "Air Bike Burnout", sets: "4x20s all-out / 40s rest", alt: ["Jump Rope", "Burpees"] },
    { name: "Bear Crawl Shuttle", sets: "4x10m", alt: ["Mountain Climbers", "Plank Shoulder Taps"] },
    { name: "Jumping Jacks Finisher", sets: "3x30s", alt: ["Mountain Climbers", "Skater Jumps"] },
    { name: "Burpees to Box", sets: "3x12", alt: ["Jump Squats", "Step Ups"] },
    { name: "Wall Sit Hold", sets: "3x45s", alt: ["Bodyweight Squat Hold", "Lunge Hold"] },
    { name: "Jumping Jacks Finisher", sets: "3x30s", alt: ["Mountain Climbers", "Jump Squats"] }
  ];

  const extras = { mon: extraArray[0], tue: extraArray[1], wed: extraArray[2], thu: extraArray[3], fri: extraArray[4], sat: extraArray[5], sun: extraArray[6] };

  Object.entries(plan).forEach(([day, exercises], idx) => {
    const seqKey = ["mon","tue","wed","thu","fri","sat","sun"][idx % 7];
    while (Array.isArray(exercises) && exercises.length < 3 && extras[seqKey]) {
      exercises.push(JSON.parse(JSON.stringify(extras[seqKey])));
    }
  });

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

  // two-way
  Object.entries(baseAltMap).forEach(([main, alts]) => {
    alts.forEach(alt => {
      if (!baseAltMap[alt]) baseAltMap[alt] = alts.filter(a => a !== alt).concat(main);
    });
  });

  Object.values(plan).forEach(exercises => {
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
    const chosen = [];
    dayExercises.forEach(ex => {
      const unique = getUniqueExercise(chosen, ex);
      chosen.push(unique);
      ex.name = unique;
    });
  });
}

// ============ trainingData loader ============
function loadTrainingData(goal, equipment) {
  return new Promise((resolve, reject) => {
    let globalName, src, modulePath, useScript = true;

    if (equipment === 'home') {
      useScript = false;
      if (goal === 'Get stronger') {
        globalName = 'trainingDataStrongHome';
        modulePath = './trainingDataStrongHome.js';
      } else {
        globalName = 'trainingDataCalisthenics';
        modulePath = './trainingDataCalisthenics.js';
      }
    } else if (goal === 'Get stronger') {
      globalName = 'trainingDataStrong';
      src = 'https://www.webbyfe.com/trainingData_strong.js';
      useScript = true;
    } else {
      globalName = 'trainingDataGym';
      modulePath = './trainingData.js';
      useScript = false;
    }

    if (window[globalName]) return resolve();

    if (!useScript) {
      import(modulePath)
        .then(mod => {
          window[globalName] = mod.default || mod[globalName] || mod.trainingData || mod;
          console.log(`✅ Imported ${globalName} from ${modulePath}`);
          resolve();
        })
        .catch(err => {
          console.error(`❌ Failed to import ${modulePath}`, err);
          reject('trainingData import error');
        });
      return;
    }

    const script = document.createElement('script');
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
        console.log(`✅ Loaded and mapped to ${globalName}`);
        resolve();
      } else {
        console.error("❌ trainingData missing after script load");
        reject("trainingData not found");
      }
    };
    script.onerror = (e) => {
      console.error("❌ Failed to load training data", e);
      reject("trainingData load error");
    };
    document.head.appendChild(script);
  });
}

// helper pro bezpečné vyzobnutí frekvence (někdo má vrstvu {gym:{...}})
function pickFreq(obj, key) {
  return obj?.[key] || obj?.gym?.[key] || obj?.home?.[key] || null;
}

// ============ render ============
function renderPlan(plan, freq, formData) {
  const container = document.getElementById('training-container');
  if (!container) {
    console.error("❌ Container #training-container not found in DOM.");
    return;
  }
  const outputBox = document.getElementById("outputBox");
  if (outputBox) outputBox.style.display = "block";
  container.innerHTML = '';

  for (const [day, exercises] of Object.entries(plan)) {
    if (!Array.isArray(exercises)) {
      console.warn("⚠️ Day does not contain an array of exercises:", day, exercises);
      continue;
    }
    exercises.forEach(ex => { if (!ex.alt) ex.alt = []; });

    const dayDiv = document.createElement('div');
    dayDiv.className = 'day';
    dayDiv.innerHTML = `<h3>${day}</h3>`;

    const list = document.createElement('div');
    list.className = 'exercise-list';

    exercises.forEach((exercise, index) => {
      const item = document.createElement('div');
      item.className = 'exercise';
      item.setAttribute('draggable', true);
      item.innerHTML = `
        <div>
          <strong>${exercise.name}</strong> – ${exercise.sets}<br><br>
          <span class="alt-list">Alt: ${exercise.alt?.join(", ") || "None"}</span><br>
        </div>
        <span class="alt-button" data-day="${day}" data-index="${index}">🔁</span>
      `;
      item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', `${day}|${index}`);
      });
      list.appendChild(item);
    });

    if (typeof Sortable === 'function') {
      new Sortable(list, {
        animation: 150,
        ghostClass: 'sortable-ghost',
        onEnd: (evt) => {
          const [removed] = plan[day].splice(evt.oldIndex, 1);
          plan[day].splice(evt.newIndex, 0, removed);
          renderPlan(plan, freq, formData);
        }
      });
    } else {
      console.warn("⚠️ Sortable.js not loaded – drag&drop disabled.");
    }

    dayDiv.appendChild(list);
    container.appendChild(dayDiv);
  }

  // alt switch
  document.querySelectorAll('.alt-button').forEach(btn => {
    btn.setAttribute('title', 'switch for alternative');
    btn.addEventListener('click', () => {
      const day = btn.getAttribute('data-day');
      const index = parseInt(btn.getAttribute('data-index'), 10);
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

  // refresh textarea, pokud existuje globální updater (HTML ho vystavuje na window)
  if (typeof window.updateTrainingPlanContentInTextarea === 'function') {
    window.updateTrainingPlanContentInTextarea();
  }
}

// ============ hlavní router ============
export async function generateTrainingPlan(formData) {
  // normalizace klíče frekvence
  const frequencyKey = formData.frequency === "5plus" ? "5+" : formData.frequency;

  // ===== Conditioning =====
  if (formData.goal === "Improve conditioning") {
    await loadConditioningData();

    // mapuj home→bodyweight, „other“ už mapuje HTML na gym
    const equipKey = (formData.equipment === 'home') ? 'bodyweight' : 'gym';

    let basePlan = window.conditioningFrequencies?.[equipKey]?.[frequencyKey]
                || window.conditioningFrequencies?.[formData.equipment]?.[frequencyKey]
                || null;

    // single-day array -> wrap
    if (Array.isArray(basePlan)) basePlan = { "Full Body": basePlan };

    if (!basePlan) {
      console.warn("⚠️ Conditioning plan undefined", { equipKey, frequencyKey, cf: !!window.conditioningFrequencies });
      alert("⚠️ Conditioning plan not found");
      return;
    }

    currentPlan = JSON.parse(JSON.stringify(basePlan));
    extendConditioningAlternatives(currentPlan);
    enforceUniqueExercises(currentPlan);
    renderPlan(currentPlan, frequencyKey, formData);
    return;
  }

  // ===== Strength / Build / Lose – gym/home =====
  await loadTrainingData(formData.goal, formData.equipment);
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
    return;
  }

  currentPlan = JSON.parse(JSON.stringify(basePlan));

  // ===== Decorace pro Lose fat =====
  if (formData.goal === "Lose fat") {
    Object.entries(currentPlan).forEach(([day, exercises]) => {
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
