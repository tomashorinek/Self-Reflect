// === conditioningFrequencies.js loader ===
function validateExercises(exercises, context = '') {
  if (!exercises) {
    console.error(`❌ Exercises missing in ${context}`);
    throw new Error(`Missing exercises array in ${context}`);
  }
  
  if (!Array.isArray(exercises)) {
    console.error(`❌ Exercises is not an array in ${context}. Got:`, exercises);
    throw new Error(`Invalid exercises format - expected array in ${context}`);
  }
  
  console.log(`✓ Valid exercises array found in ${context} with ${exercises.length} items`);
  return true;
}
let currentPlan = null;
// === Core Functions ===
let currentPlan = null;

async function loadConditioningData() {
  if (window.conditioningFrequencies) return;
  
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://www.webbyfe.com/conditioningFrequencies.js';
    script.onload = () => resolve();
    script.onerror = () => reject('Failed to load conditioning data');
    document.head.appendChild(script);
  });
}
function loadConditioningData() {
  return new Promise((resolve, reject) => {
    if (window.conditioningFrequencies) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://www.webbyfe.com/conditioningFrequencies.js';
    script.onload = async () => {
      try {
        if (window.conditioningFrequencies) {
          console.log("✅ Conditioning loaded", window.conditioningFrequencies);
          resolve();
          return;
        }
        if (window.loadConditioningData) {
          await window.loadConditioningData();
          console.log("✅ Conditioning loaded", window.conditioningFrequencies);
          resolve();
        } else {
          console.error("❌ Conditioning data not available after script load");
          reject("Conditioning data not found after script load");
        }
      } catch (err) {
        console.error("❌ Error initializing conditioning data", err);
        reject(err);
      }
    };
    script.onerror = () => reject("❌ Failed to load conditioning data script");
    document.head.appendChild(script);
  });
}

// === Full Conditioning Data Adapter ===
function adaptConditioningExercise(exercise, type = '', rounds = '') {
  if (!exercise) return null;
  
  const adapted = {
    name: exercise.name || 'Unnamed Exercise',
    sets: (exercise.reps || '') + (rounds ? ` ${rounds}` : ''),
    alt: Array.isArray(exercise.alternatives) ? exercise.alternatives : [],
    description: exercise.description || '',
    type: type || 'exercise'
  };
  
  if (exercise.type) {
    adapted.name = `${exercise.type}: ${adapted.name}`;
  }
  
  return adapted;
}
export async function generateTrainingPlan(formData) {
  try {
    const frequencyKey = formData.frequency === "5plus" ? "5+" : formData.frequency;
    
    // Handle all goal types
    switch(formData.goal) {
      case "Improve conditioning":
        await handleConditioningPlan(formData, frequencyKey);
        break;
        
      case "Build muscle":
      case "Lose fat":
      case "Get stronger":
        await handleStandardPlan(formData, frequencyKey);
        break;
        
      default:
        throw new Error("Unsupported goal type");
    }
    
    return currentPlan;
  } catch (error) {
    console.error("Plan generation failed:", error);
    alert(`Error: ${error.message}`);
    return null;
  }
}

async function handleConditioningPlan(formData, frequencyKey) {
  await loadConditioningData();
  
  const equipmentMap = {
    gym: "gym",
    home: "bodyweight",
    other: "gym"
  };
  
  const eq = equipmentMap[formData.equipment] || formData.equipment;
  const basePlan = window.conditioningFrequencies?.[eq]?.[frequencyKey];
  
  if (!basePlan) {
    throw new Error(`No conditioning plan found for ${eq}/${frequencyKey}`);
  }
  
  // Normalize different plan formats
  currentPlan = normalizePlanStructure(basePlan);
  processPlan(currentPlan, formData);
}

async function handleStandardPlan(formData, frequencyKey) {
  await loadTrainingData(formData.goal, formData.equipment);
  
  let basePlan;
  if (formData.equipment === "home") {
    basePlan = formData.goal === "Get stronger" 
      ? window.trainingDataStrongHome?.strong?.[frequencyKey]
      : window.trainingDataCalisthenics?.[frequencyKey];
  } else {
    basePlan = formData.goal === "Get stronger"
      ? window.trainingDataStrong?.[frequencyKey]
      : window.trainingDataGym?.[frequencyKey];
  }
  
  if (!basePlan) {
    throw new Error(`No ${formData.goal} plan found for ${frequencyKey} days`);
  }
  
  currentPlan = JSON.parse(JSON.stringify(basePlan));
  processPlan(currentPlan, formData);
}

function normalizePlanStructure(plan) {
  // Handle array-only plans
  if (Array.isArray(plan)) {
    return { "Day 1": { exercises: plan } };
  }
  
  // Convert nested structures to consistent format
  const normalized = {};
  for (const [day, data] of Object.entries(plan)) {
    normalized[day] = {
      exercises: data?.workout?.exercises || data?.exercises || []
    };
  }
  return normalized;
}

function processPlan(plan, formData) {
  // Apply fat loss modifications if needed
  if (formData.goal === "Lose fat") {
    Object.values(plan).forEach(exercises => {
      exercises.unshift({
        name: formData.equipment === "home" 
          ? "Fast walking 10-15min" 
          : "Treadmill Warm-up",
        sets: formData.equipment === "home" 
          ? "Light effort" 
          : "10 min",
        alt: []
      });
    });
  }
  
  // Apply your standard processing
  extendConditioningAlternatives(plan);
  enforceUniqueExercises(plan);
  renderPlan(plan, formData.frequency, formData);
}
function adaptConditioningWorkout(workout, dayName = '') {
  if (!workout) return [];
  
  const exercises = [];
  const roundsText = workout.rounds ? `(${workout.rounds} rounds)` : '';
  const typePrefix = workout.type ? `${workout.type}: ` : '';
  
  try {
    validateExercises(workout.exercises, `workout for ${dayName}`);
    
    workout.exercises.forEach(ex => {
      const adaptedEx = adaptConditioningExercise(ex, 'workout', roundsText);
      if (adaptedEx) {
        adaptedEx.name = typePrefix + adaptedEx.name;
        exercises.push(adaptedEx);
      }
    });
  } catch (e) {
    console.error(`Skipping workout for ${dayName}:`, e.message);
  }
  
  return exercises;
}

function adaptConditioningFinisher(finisher, dayName = '') {
  if (!finisher) return [];
  
  try {
    validateExercises(finisher.exercises, `finisher for ${dayName}`);
    
    const roundsText = finisher.rounds ? `(${finisher.rounds} rounds)` : '';
    return [{
      name: finisher.type ? `Finisher: ${finisher.type}` : "Finisher",
      sets: finisher.exercises.join(" • ") + (roundsText ? ` ${roundsText}` : ''),
      alt: [],
      type: 'finisher'
    }];
  } catch (e) {
    console.error(`Skipping finisher for ${dayName}:`, e.message);
    return [];
  }
}

function adaptConditioningRunning(running, dayName = '') {
  if (!running) return [];
  
  let sets = '';
  if (running.duration) sets += running.duration;
  if (Array.isArray(running.structure)) {
    sets += (sets ? " • " : "") + running.structure.join(" / ");
  }
  if (running.description) {
    sets += (sets ? " • " : "") + running.description;
  }
  
  return [{
    name: running.type ? `Cardio: ${running.type}` : "Cardio",
    sets: sets || "See description",
    alt: running.alternative ? [running.alternative] : [],
    type: 'cardio'
  }];
}

function adaptConditioningDay(dayObj, dayName = '') {
  if (!dayObj) return [];
  
  const adaptedDay = [];
  
  // Warm-up
  if (Array.isArray(dayObj.warmup) && dayObj.warmup.length) {
    adaptedDay.push({
      name: "Warm-up",
      sets: dayObj.warmup.join(" • "),
      alt: [],
      type: 'warmup'
    });
  }

  // Workout
  adaptedDay.push(...adaptConditioningWorkout(dayObj.workout, dayName));

  // Running/Cardio
  adaptedDay.push(...adaptConditioningRunning(dayObj.running, dayName));

  // Finisher
  adaptedDay.push(...adaptConditioningFinisher(dayObj.finisher, dayName));

  // Core (if exists)
  if (dayObj.core) {
    adaptedDay.push(...adaptConditioningFinisher(dayObj.core, dayName));
  }

  // Cooldown (if exists)
  if (dayObj.cooldown) {
    const focus = Array.isArray(dayObj.cooldown.focus) ? ` • Focus: ${dayObj.cooldown.focus.join(", ")}` : '';
    const dur = dayObj.cooldown.duration ? ` (${dayObj.cooldown.duration})` : '';
    adaptedDay.push({
      name: dayObj.cooldown.type ? `Cooldown: ${dayObj.cooldown.type}` : "Cooldown",
      sets: (dayObj.cooldown.duration || "") + focus + dur,
      alt: [],
      type: 'cooldown'
    });
  }

  console.log(`Adapted ${dayName} to ${adaptedDay.length} items`);
  return adaptedDay;
}

function adaptConditioningPlan(plan) {
  if (!plan) {
    console.error('❌ No plan provided to adapter');
    throw new Error('Cannot adapt undefined plan');
  }

  const adaptedPlan = {};
  
  for (const [dayName, dayObj] of Object.entries(plan)) {
    try {
      if (Array.isArray(dayObj)) {
        // Handle case where day is just an array of exercises
        adaptedPlan[dayName] = dayObj.map(ex => adaptConditioningExercise(ex));
      } else {
        adaptedPlan[dayName] = adaptConditioningDay(dayObj, dayName);
      }
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

// === Updated generateTrainingPlan ===
export async function generateTrainingPlan(formData) {
  const frequencyKey = formData.frequency === "5plus" ? "5+" : formData.frequency;

  if (formData.goal === "Improve conditioning") {
    try {
      await loadConditioningData();
      const equipmentMap = {
        gym: "gym",
        home: "bodyweight"
      };
      const eq = equipmentMap[formData.equipment] || formData.equipment;
      
      console.log('Loading conditioning plan for:', { eq, frequencyKey });
      
      let basePlan = window.conditioningFrequencies?.[eq]?.[frequencyKey];

      // If the plan is just an array of exercises, convert it to proper format
      if (Array.isArray(basePlan)) {
        basePlan = { "Day 1": { workout: { exercises: basePlan } } };
      }

      if (!basePlan) {
        throw new Error(`No conditioning plan found for ${eq}/${frequencyKey}`);
      }

      // Validate and adapt the plan structure
      const validatedPlan = {};
      for (const [dayName, dayData] of Object.entries(basePlan)) {
        validatedPlan[dayName] = { ...dayData };
        
        // Ensure workout exists and has exercises array
        if (!validatedPlan[dayName].workout) {
          validatedPlan[dayName].workout = { exercises: [] };
        }
        
        try {
          validateExercises(validatedPlan[dayName].workout.exercises, dayName);
        } catch (e) {
          console.error(`Invalid exercises in ${dayName}, using empty array`);
          validatedPlan[dayName].workout.exercises = [];
        }
      }

      currentPlan = JSON.parse(JSON.stringify(validatedPlan));
      extendConditioningAlternatives(currentPlan);
      enforceUniqueExercises(currentPlan);
      renderPlan(currentPlan, frequencyKey, formData);
      
      return currentPlan;
    } catch (error) {
      console.error('❌ Conditioning plan generation failed:', error);
      alert(`Failed to generate conditioning plan: ${error.message}`);
      return null;
    }
  }
  // ... rest of your existing code for other goals ...
}
