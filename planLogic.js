// === Imports === (Static first)
import trainingDataGym from './trainingData.js';
import trainingDataCalisthenics from './trainingDataCalisthenics.js';
import trainingDataStrong from './trainingDataStrong.js';
import trainingDataStrongHome from './trainingDataStrongHome.js';

let currentPlan = null;

// === Optional dynamic loader fallback (Hybrid mode) ===
function loadTrainingData(goal) {
  return new Promise((resolve, reject) => {
    let globalName = goal === 'Get stronger' ? 'trainingDataStrong' : 'trainingDataGeneral';
    let src = goal === 'Get stronger'
      ? 'https://www.webbyfe.com/trainingData_strong.js'
      : 'https://www.webbyfe.com/trainingData.js';

    if (window[globalName]) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      if (window.trainingData) {
        window[globalName] = window.trainingData;
        delete window.trainingData;
        resolve();
      } else {
        reject('trainingData not found after load');
      }
    };
    script.onerror = () => reject("Failed to load training data script");
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
    script.onload = () => {
      if (window.conditioningFrequencies) resolve();
      else reject("Conditioning data not found");
    };
    script.onerror = () => reject("Failed to load conditioning data");
    document.head.appendChild(script);
  });
}

// === Utility functions ===
function getUniqueExercise(existing, exercise) {
  const options = [exercise.name, ...(exercise.alt || [])];
  for (const opt of options) {
    if (!existing.includes(opt)) return opt;
  }
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

  const extras = {
    mon: extraArray[0], tue: extraArray[1], wed: extraArray[2],
    thu: extraArray[3], fri: extraArray[4], sat: extraArray[5], sun: extraArray[6]
  };

  Object.entries(plan).forEach(([day, exercises], idx) => {
    const dayKey = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"][idx % 7];
    while (exercises.length < 3 && extras[dayKey]) {
      exercises.push(JSON.parse(JSON.stringify(extras[dayKey])));
    }
  });

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

  Object.entries(altMap).forEach(([main, alts]) => {
    alts.forEach(alt => {
      if (!altMap[alt]) altMap[alt] = alts.filter(a => a !== alt).concat(main);
    });
  });

  Object.values(plan).forEach(exercises => {
    exercises.forEach(ex => {
      if (!ex.alt) ex.alt = [];
      if (altMap[ex.name]) {
        altMap[ex.name].forEach(a => {
          if (!ex.alt.includes(a)) ex.alt.push(a);
        });
      }
    });
  });
}

// === Form Logic + Main Plan Generator ===
function attachFormHandler() {
  const form = document.getElementById('trackerForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
      goal: document.getElementById('goal').value,
      frequency: document.getElementById('frequency').value,
      equipment: document.getElementById('equipment').value,
      experience: document.getElementById('experience')?.value,
      injuries: document.getElementById('injuries')?.value,
      fixed: document.getElementById('fixed')?.value,
      email: document.getElementById('email')?.value
    };
    window.generateTrainingPlan(formData);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', attachFormHandler);
} else {
  attachFormHandler();
}

window.generateTrainingPlan = async function (formData) {
  const frequencyKey = formData.frequency === "5plus" ? "5+" : formData.frequency;
  const goal = formData.goal.trim();

  let dataSource = null;
  let basePlan = null;

  if (goal === 'Improve conditioning') {
    try {
      await loadConditioningData();
      const plan = window.conditioningFrequencies?.[formData.equipment]?.[frequencyKey];
      if (!plan) throw new Error();
      currentPlan = JSON.parse(JSON.stringify(plan));
      extendConditioningAlternatives(currentPlan);
      enforceUniqueExercises(currentPlan);
      renderPlan(currentPlan, frequencyKey, formData);
      return;
    } catch (err) {
      alert("⚠️ Failed to load conditioning data");
      return;
    }
  } else {
    if (goal === 'Get stronger') {
      dataSource = formData.equipment === 'home' ? trainingDataStrongHome : trainingDataStrong;
    } else {
      dataSource = formData.equipment === 'home' ? trainingDataCalisthenics : trainingDataGym;
    }

    basePlan = dataSource?.[goal]?.[frequencyKey] || dataSource?.[frequencyKey];

    if (!basePlan) {
      try {
        await loadTrainingData(goal);
        dataSource = window[goal === 'Get stronger' ? 'trainingDataStrong' : 'trainingDataGeneral'];
        basePlan = dataSource?.[goal]?.[frequencyKey] || dataSource?.[frequencyKey];
      } catch (err) {
        alert("⚠️ Failed to load training data");
        return;
      }
    }
  }

  if (!basePlan) {
    alert(`⚠️ Training plan not found for: ${goal} / ${frequencyKey}`);
    return;
  }

  currentPlan = JSON.parse(JSON.stringify(basePlan));

  if (goal === 'Lose fat' && formData.equipment === 'gym') {
    Object.entries(currentPlan).forEach(([day, exercises]) => {
      exercises.unshift({
        name: 'Treadmill Warm-up',
        sets: '10 min',
        alt: ['Bike', 'Rowing', 'Walk uphill']
      });
      const isLegDay = day.toLowerCase().includes('leg') || day.toLowerCase().includes('lower');
      if (!isLegDay) {
        exercises.push({
          name: 'Post-Workout Cardio',
          sets: '3x (5 min 120–140 bpm, 1 min >160 bpm)',
          alt: ['Bike intervals', 'Rowing sprints', 'Shadow boxing']
        });
      }
    });
  }

  enforceUniqueExercises(currentPlan);
  renderPlan(currentPlan, frequencyKey, formData);
};
