// conditioningAdapter.js - new file to keep code organized
export function adaptConditioningDayToList(dayObj, dayName = '') {
  const list = [];
  const context = `day ${dayName}`;

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
  if (dayObj.workout) {
    try {
      validateExercises(dayObj.workout.exercises, `workout for ${dayName}`);
      
      const rounds = dayObj.workout.rounds ? ` (${dayObj.workout.rounds} rounds)` : '';
      const typePrefix = dayObj.workout.type ? `${dayObj.workout.type}: ` : '';
      
      dayObj.workout.exercises.forEach(ex => {
        list.push({
          name: `${typePrefix}${ex.name}`,
          sets: (ex.reps || '') + rounds,
          alt: Array.isArray(ex.alternatives) ? ex.alternatives : [],
          description: ex.description || '',
          type: 'workout'
        });
      });
    } catch (e) {
      console.error(`Skipping workout for ${dayName} due to error:`, e.message);
    }
  }

  // Finisher
  if (dayObj.finisher) {
    try {
      validateExercises(dayObj.finisher.exercises, `finisher for ${dayName}`);
      
      const rounds = dayObj.finisher.rounds ? ` (${dayObj.finisher.rounds} rounds)` : '';
      list.push({
        name: dayObj.finisher.type ? `Finisher: ${dayObj.finisher.type}` : "Finisher",
        sets: dayObj.finisher.exercises.join(" • ") + rounds,
        alt: [],
        type: 'finisher'
      });
    } catch (e) {
      console.error(`Skipping finisher for ${dayName} due to error:`, e.message);
    }
  }

  // Running/Cardio
  if (dayObj.running) {
    let sets = '';
    if (dayObj.running.duration) sets += dayObj.running.duration;
    if (Array.isArray(dayObj.running.structure)) {
      sets += (sets ? " • " : "") + dayObj.running.structure.join(" / ");
    }
    if (dayObj.running.description) {
      sets += (sets ? " • " : "") + dayObj.running.description;
    }
    
    list.push({
      name: dayObj.running.type ? `Cardio: ${dayObj.running.type}` : "Cardio",
      sets: sets || "See description",
      alt: dayObj.running.alternative ? [dayObj.running.alternative] : [],
      type: 'cardio'
    });
  }

  console.log(`Adapted ${dayName} to ${list.length} items`);
  return list;
}

export function adaptConditioningPlan(plan) {
  if (!plan) {
    console.error('❌ No plan provided to adapter');
    throw new Error('Cannot adapt undefined plan');
  }

  const adaptedPlan = {};
  
  for (const [dayName, dayObj] of Object.entries(plan)) {
    try {
      adaptedPlan[dayName] = adaptConditioningDayToList(dayObj, dayName);
    } catch (e) {
      console.error(`Failed to adapt day ${dayName}:`, e);
      adaptedPlan[dayName] = [{
        name: `ERROR: Could not load day ${dayName}`,
        sets: 'Please check console for details',
        alt: [],
        type: 'error'
      }];
    }
  }

  return adaptedPlan;
}
