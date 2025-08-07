// === improveConditioning.js ===

// Load conditioning data script if needed
function loadConditioningData() {
  return new Promise((resolve, reject) => {
    if (window.conditioningFrequencies) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://www.webbyfe.com/conditioningFrequencies.js';
    script.onload = () => {
      if (window.conditioningFrequencies) {
        resolve();
      } else {
        reject("❌ Conditioning data not available after script load");
      }
    };
    script.onerror = () => reject("❌ Failed to load conditioning data script");
    document.head.appendChild(script);
  });
}

// Extend alt exercises
function extendConditioningAlternatives(plan) {
  // Funkce, která pracuje s oběma formáty plánů (pole a objekty)
  const processExercises = (exercises) => {
    exercises.forEach(ex => {
      if (!ex.alt) ex.alt = [];
      const altMap = {
        "Push-ups": ["Incline Push-ups", "Kneeling Push-ups"],
        "Air Bike Burnout": ["Mountain Climbers", "Jumping Jacks"],
        "Core Circuit Finisher": ["V-Ups", "Hollow Hold"],
        "Bear Crawl Shuttle": ["Crab Walks", "Lateral Bear Crawls"],
        "Burpees": ["Jump Squats", "Sprawl to Jump"],
        "Wall Sit Hold": ["Isometric Lunge Hold", "Chair Hold"],
        "Plank Series": ["Side Plank", "Bird Dog"],
        "Jump Rope": ["High Knees", "Jumping Jacks"]
      };
      if (altMap[ex.name]) {
        altMap[ex.name].forEach(alt => {
          if (!ex.alt.includes(alt)) ex.alt.push(alt);
        });
      }
    });
  };

  // Upravujeme oba typy plánů
  if (Array.isArray(plan)) {
    // Starý formát (pro gym)
    processExercises(plan);
  } else if (typeof plan === 'object' && plan !== null) {
    // Nový formát (pro bodyweight)
    Object.values(plan).forEach(dayPlan => {
      if (dayPlan.workout && dayPlan.workout.exercises) {
        processExercises(dayPlan.workout.exercises);
      }
      if (dayPlan.finisher && dayPlan.finisher.exercises) {
        // Finisher exercises mohou být jen pole stringů, musíme je přeměnit na objekty
        const finisherExercises = dayPlan.finisher.exercises.map(name => ({ name: name }));
        processExercises(finisherExercises);
      }
      if (dayPlan.core && dayPlan.core.exercises) {
         // Stejně jako pro finisher
        const coreExercises = dayPlan.core.exercises.map(name => ({ name: name }));
        processExercises(coreExercises);
      }
    });
  }
}

// Override generator only for conditioning
window.originalGenerateTrainingPlan = window.generateTrainingPlan;
window.generateTrainingPlan = async function (formData) {
  if (formData.goal !== "Improve conditioning") {
    return window.originalGenerateTrainingPlan(formData);
  }

  try {
    await loadConditioningData();
    const frequency = formData.frequency === "5plus" ? "5+" : formData.frequency;
    const equipment = formData.equipment.toLowerCase().includes("gym") ? "gym" : "bodyweight";

    // Zkontrolujeme, zda existuje plán
    const plan = window.conditioningFrequencies?.[equipment]?.[frequency];
    if (!plan) {
      throw new Error("❌ Conditioning plan not found for the selected options.");
    }
    
    // Rozšíření alternativ
    extendConditioningAlternatives(plan);

    if (typeof renderPlan === 'function') {
      renderPlan(plan, frequency, formData);
      document.getElementById('outputBox').style.display = 'block';
    }
  } catch (err) {
    console.error(err);
    alert('Something went wrong loading your conditioning plan: ' + err.message);
  }
};
