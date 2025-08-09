// conditioningAdapter.js
export function validateExercises(exs, ctx = '') {
  if (!Array.isArray(exs)) throw new Error(`Expected exercises array in ${ctx}`);
  exs.forEach((ex, i) => {
    if (!ex || typeof ex !== 'object') throw new Error(`Exercise ${i} in ${ctx} is not an object`);
    if (!ex.name) throw new Error(`Exercise ${i} in ${ctx} missing name`);
    // reps/sets nejsou povinné, render si poradí
  });
}

export function adaptConditioningDayToList(dayObj, dayName = '') {
  const list = [];

  // Warm-up
  if (Array.isArray(dayObj.warmup) && dayObj.warmup.length) {
    list.push({
      name: "Warm-up",
      sets: dayObj.warmup.join(" • "),
      alt: [],
      type: 'warmup'
    });
  }

  // Workout
  if (dayObj.workout && Array.isArray(dayObj.workout.exercises)) {
    validateExercises(dayObj.workout.exercises, `workout for ${dayName}`);
    const rounds = dayObj.workout.rounds ? ` (${dayObj.workout.rounds} rounds)` : '';
    const typePrefix = dayObj.workout.type ? `${dayObj.workout.type}: ` : '';
    dayObj.workout.exercises.forEach(ex => {
      const alt = Array.isArray(ex.alternatives) ? ex.alternatives : (Array.isArray(ex.alt) ? ex.alt : []);
      list.push({
        name: `${typePrefix}${ex.name}`,
        sets: [ex.reps || ex.sets || '', rounds].filter(Boolean).join(' · '),
        alt,
        type: 'workout'
      });
    });
  }

  // Finisher
  if (dayObj.finisher && Array.isArray(dayObj.finisher.exercises)) {
    const rounds = dayObj.finisher.rounds ? ` (${dayObj.finisher.rounds} rounds)` : '';
    list.push({
      name: dayObj.finisher.type ? `Finisher: ${dayObj.finisher.type}` : "Finisher",
      sets: dayObj.finisher.exercises.join(" • ") + rounds,
      alt: [],
      type: 'finisher'
    });
  }

  // Running / Cardio
  if (dayObj.running) {
    const parts = [];
    if (dayObj.running.duration) parts.push(dayObj.running.duration);
    if (Array.isArray(dayObj.running.structure)) parts.push(dayObj.running.structure.join(" / "));
    if (dayObj.running.description) parts.push(dayObj.running.description);
    list.push({
      name: dayObj.running.type ? `Cardio: ${dayObj.running.type}` : "Cardio",
      sets: parts.join(" • ") || "as prescribed",
      alt: dayObj.running.alternative ? [dayObj.running.alternative] : [],
      type: 'cardio'
    });
  }

  // Core (mimo finisher)
  if (dayObj.core) {
    const rounds = dayObj.core.rounds ? ` (${dayObj.core.rounds} rounds)` : '';
    const desc = Array.isArray(dayObj.core.exercises) ? dayObj.core.exercises.join(" • ") : (dayObj.core.description || "");
    list.push({
      name: dayObj.core.type ? `Core: ${dayObj.core.type}` : "Core",
      sets: [desc, rounds].filter(Boolean).join(' '),
      alt: [],
      type: 'core'
    });
  }

  // Kdyby byl den už rovnou pole cviků
  if (Array.isArray(dayObj)) {
    return dayObj.map(ex => ({
      name: ex.name,
      sets: ex.sets || ex.reps || "",
      alt: ex.alt || ex.alternatives || [],
      type: 'workout'
    }));
  }

  return list;
}

export function adaptConditioningPlan(plan) {
  if (!plan || typeof plan !== 'object') {
    throw new Error('Cannot adapt undefined/invalid plan');
  }
  const adapted = {};
  for (const [dayName, dayObj] of Object.entries(plan)) {
    try {
      adapted[dayName] = adaptConditioningDayToList(dayObj, dayName);
    } catch (e) {
      console.error(`Failed to adapt day ${dayName}:`, e);
      adapted[dayName] = [{
        name: `ERROR: Could not load day ${dayName}`,
        sets: 'Please check console for details',
        alt: [],
        type: 'error'
      }];
    }
  }
  return adapted;
}
