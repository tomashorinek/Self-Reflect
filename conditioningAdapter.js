// conditioningAdapter.js — FINAL

// --- utils ---
function toText(x) {
  if (x == null) return "";
  if (typeof x === "string") return x.trim();
  if (typeof x === "number") return String(x);
  if (Array.isArray(x)) return x.map(toText).filter(Boolean).join(" • ");
  if (typeof x === "object") {
    // typické {name, reps} apod.
    const parts = [x.name, x.reps || x.sets, x.description].map(toText).filter(Boolean);
    return parts.join(" – ");
  }
  return String(x);
}

function arrOfStrings(xs) {
  if (!Array.isArray(xs)) return [];
  return xs.map(toText).filter(Boolean);
}

export function validateExercises(exs, ctx = "") {
  if (!Array.isArray(exs)) throw new Error(`Expected exercises array in ${ctx}`);
  exs.forEach((ex, i) => {
    if (!ex || typeof ex !== "object") throw new Error(`Exercise ${i} in ${ctx} is not an object`);
    if (!ex.name) throw new Error(`Exercise ${i} in ${ctx} missing name`);
  });
}

// vezme {name,reps/sets,alt/alternatives} -> normalizovaný záznam
function normalizeExercise(ex, opt = {}) {
  const alt =
    Array.isArray(ex.alternatives) ? ex.alternatives
    : Array.isArray(ex.alt) ? ex.alt
    : [];

  const reps = ex.reps || ex.sets || "";
  const rounds = opt.rounds ? ` (${opt.rounds} rounds)` : "";
  const typePrefix = opt.type ? `${opt.type}: ` : "";

  return {
    name: `${typePrefix}${ex.name}`,
    sets: [toText(reps), rounds].filter(Boolean).join(" · "),
    alt: arrOfStrings(alt),
    type: opt.slotType || "workout"
  };
}

export function adaptConditioningDayToList(dayObj, dayName = "") {
  // pokud už je den pole cviků (legacy), jen přemapuj
  if (Array.isArray(dayObj)) {
    return dayObj.map(ex => normalizeExercise(
      typeof ex === "string" ? { name: ex, reps: "" } : ex,
      { slotType: "workout" }
    ));
  }

  if (!dayObj || typeof dayObj !== "object") {
    return [{
      name: `ERROR: Day "${dayName}" has invalid structure`,
      sets: "Expected an object or an array",
      alt: [],
      type: "error"
    }];
  }

  const list = [];

  // WARM-UP (stringy nebo objekty)
  if (dayObj.warmup) {
    const wu = Array.isArray(dayObj.warmup)
      ? dayObj.warmup.map(toText).filter(Boolean)
      : [toText(dayObj.warmup)].filter(Boolean);

    if (wu.length) {
      list.push({
        name: "Warm-up",
        sets: wu.join(" • "),
        alt: [],
        type: "warmup"
      });
    }
  }

  // WORKOUT
  if (dayObj.workout) {
    const { type, rounds, exercises } = dayObj.workout;
    if (Array.isArray(exercises)) {
      validateExercises(exercises, `workout for ${dayName}`);
      exercises.forEach(ex =>
        list.push(
          normalizeExercise(ex, {
            type,                                            // např. EMOM / Strength Block
            rounds: rounds ? toText(rounds) : "",            // 3 nebo "2–3"
            slotType: "workout"
          })
        )
      );
    }
  }

  // FINISHER (stringy/objekty)
  if (dayObj.finisher) {
    const f = dayObj.finisher;
    const title = f.type ? `Finisher: ${toText(f.type)}` : "Finisher";
    const fRounds = f.rounds ? ` (${toText(f.rounds)} rounds)` : "";

    let fBody = "";
    if (Array.isArray(f.exercises)) {
      fBody = f.exercises.map(toText).filter(Boolean).join(" • ");
    } else if (f.exercises) {
      fBody = toText(f.exercises);
    } else if (f.description) {
      fBody = toText(f.description);
    }

    if (fBody || fRounds) {
      list.push({
        name: title,
        sets: `${fBody}${fRounds}`,
        alt: [],
        type: "finisher"
      });
    }
  }

  // RUNNING / CARDIO
  if (dayObj.running) {
    const r = dayObj.running;
    const parts = [];
    if (r.duration) parts.push(toText(r.duration));
    if (Array.isArray(r.structure) && r.structure.length) parts.push(r.structure.map(toText).join(" / "));
    if (r.description) parts.push(toText(r.description));

    const alt = [];
    if (r.alternative) {
      if (Array.isArray(r.alternative)) alt.push(...arrOfStrings(r.alternative));
      else alt.push(toText(r.alternative));
    }

    list.push({
      name: r.type ? `Cardio: ${toText(r.type)}` : "Cardio",
      sets: parts.filter(Boolean).join(" • ") || "as prescribed",
      alt,
      type: "cardio"
    });
  }

  // CORE (mimo finisher)
  if (dayObj.core) {
    const c = dayObj.core;
    const cRounds = c.rounds ? ` (${toText(c.rounds)} rounds)` : "";
    const desc = Array.isArray(c.exercises)
      ? c.exercises.map(toText).filter(Boolean).join(" • ")
      : (c.description ? toText(c.description) : "");

    if (desc || cRounds) {
      list.push({
        name: c.type ? `Core: ${toText(c.type)}` : "Core",
        sets: [desc, cRounds].filter(Boolean).join(" "),
        alt: [],
        type: "core"
      });
    }
  }

  // pokud se nic nenašlo, dej info
  if (!list.length) {
    list.push({
      name: `NOTE: Day "${dayName}" has no sections`,
      sets: "Check warmup/workout/finisher/cardio/core presence",
      alt: [],
      type: "note"
    });
  }

  return list;
}

export function adaptConditioningPlan(plan) {
  if (!plan || typeof plan !== "object") {
    throw new Error("Cannot adapt undefined/invalid plan");
  }
  const out = {};
  for (const [dayName, dayObj] of Object.entries(plan)) {
    try {
      out[dayName] = adaptConditioningDayToList(dayObj, dayName);
    } catch (e) {
      console.error(`Failed to adapt day ${dayName}:`, e);
      out[dayName] = [{
        name: `ERROR: Could not load day ${dayName}`,
        sets: "Please check console for details",
        alt: [],
        type: "error"
      }];
    }
  }
  return out;
}
