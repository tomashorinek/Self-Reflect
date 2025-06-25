// === conditioningFrequencies.js loader ===
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
        console.log("✅ Conditioning data loaded");
        resolve();
      } else {
        console.error("❌ Conditioning data not available after script load");
        reject("Conditioning data not found after script load");
      }
    };
    script.onerror = () => reject("❌ Failed to load conditioning data script");

    document.head.appendChild(script);
  });
}

// === trainingData loader ===
function loadTrainingData(goal) {
  return new Promise((resolve, reject) => {
    const globalName = goal === 'Get stronger' ? 'trainingDataStrong'
                     : goal === 'Build muscle' ? 'trainingDataMuscle'
                     : goal === 'Lose fat' ? 'trainingDataFatLoss' : null;

    if (!globalName) return reject('❌ Unknown goal: ' + goal);
    if (window[globalName]) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = goal === 'Get stronger'
      ? 'https://www.webbyfe.com/trainingData_strong.js'
      : 'https://www.webbyfe.com/trainingData.js';
    console.log("▶️ Trying to load:", script.src);

    script.onload = () => {
      if (window.trainingData) {
        window[globalName] = window.trainingData;
        delete window.trainingData;
        console.log(`✅ Loaded and mapped trainingData to ${globalName}`);
        resolve();
      } else {
        console.error("❌ Script loaded but trainingData is missing");
        reject("trainingData not available after script load.");
      }
    };

    script.onerror = (e) => {
      console.error("❌ Failed to load:", script.src, e);
      reject('Failed to load training data');
    };

    document.head.appendChild(script);
  });
}

// Load all data early to avoid second-load issues
window.addEventListener("DOMContentLoaded", async () => {
  try {
    await loadConditioningData();
    console.log("✅ Conditioning data preloaded");
  } catch (err) {
    console.error("❌ Preloading error:", err);
  }
});

// === PATCH: Ensure fallback exercise added correctly for 2-item days ===
function ensureConditioningDayHasEnoughExercises(plan) {
  const fallback = {
    mon: { name: "Core Circuit Finisher", sets: "3x40s plank + 10 crunches", alt: ["Plank to Push-up", "Mountain Climbers"] },
    tue: { name: "Air Bike Burnout", sets: "4x20s all-out / 40s rest", alt: ["Jump Rope", "Burpees"] },
    wed: { name: "Bear Crawl Shuttle", sets: "4x10m", alt: ["Mountain Climbers", "Plank Shoulder Taps"] },
    thu: { name: "Jumping Jacks Finisher", sets: "3x30s", alt: ["Mountain Climbers", "Skater Jumps"] },
    fri: { name: "Burpees to Box", sets: "3x12", alt: ["Jump Squats", "Step Ups"] },
    sat: { name: "Wall Sit Hold", sets: "3x45s", alt: ["Bodyweight Squat Hold", "Lunge Hold"] },
    sun: { name: "Jumping Jacks Finisher", sets: "3x30s", alt: ["Mountain Climbers", "Jump Squats"] }
  };

  Object.entries(plan).forEach(([day, exercises]) => {
    const dayKey = day.slice(0, 3).toLowerCase();
    if (Array.isArray(exercises) && exercises.length < 3 && fallback[dayKey]) {
      exercises.push(fallback[dayKey]);
    }
  });
}

// Run fix once conditioning data is available
if (window.conditioningFrequencies) {
  Object.values(window.conditioningFrequencies).forEach(freqs => {
    Object.values(freqs).forEach(plan => {
      if (typeof plan === 'object') ensureConditioningDayHasEnoughExercises(plan);
    });
  });
}

function renderPlan(plan, freq, formData) {
  const container = document.getElementById('training-container');
  container.innerHTML = '';

  for (const [day, exercises] of Object.entries(plan)) {
    // 🔧 Rozšíření alternativ u každého cviku
    exercises.forEach(ex => {
      if (!ex.alt) ex.alt = [];

      const additional = {
        "Push-ups": ["Incline Push-ups", "Kneeling Push-ups"],
        "Air Bike Burnout": ["Mountain Climbers", "Jumping Jacks"],
        "Core Circuit Finisher": ["V-Ups", "Hollow Hold"],
        "Bear Crawl Shuttle": ["Crab Walks", "Lateral Bear Crawls"],
        "Burpees": ["Jump Squats", "Sprawl to Jump"],
        "Wall Sit Hold": ["Isometric Lunge Hold", "Chair Hold"],
        "Plank Series": ["Side Plank", "Bird Dog"],
        "Jump Rope": ["High Knees", "Jumping Jacks"]
      };

      if (additional[ex.name]) {
        additional[ex.name].forEach(alt => {
          if (!ex.alt.includes(alt)) ex.alt.push(alt);
        });
      }
    });

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
          <strong>${exercise.name}</strong> – ${exercise.sets}<br>
          <span class="alt-list">Alt: ${exercise.alt?.join(", ") || "None"}</span>
        </div>
        <span class="alt-button" data-day="${day}" data-index="${index}">🔁</span>
      `;

      item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', `${day}|${index}`);
      });

      list.appendChild(item);
    });

    new Sortable(list, {
      animation: 150,
      ghostClass: 'sortable-ghost',
      onEnd: (evt) => {
        const [removed] = plan[day].splice(evt.oldIndex, 1);
        plan[day].splice(evt.newIndex, 0, removed);
        generateTrainingPlan(formData);
      }
    });

    dayDiv.appendChild(list);
    container.appendChild(dayDiv);
  }

  // Fix swap buttons
  document.querySelectorAll('.alt-button').forEach(btn => {
    btn.addEventListener('click', () => {
      const day = btn.getAttribute('data-day');
      const index = parseInt(btn.getAttribute('data-index'));
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
}

// Handle form submission
document.getElementById('trackerForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = {
    goal: document.getElementById('goal').value,
    frequency: document.getElementById('frequency').value,
    equipment: document.getElementById('equipment').value,
    experience: document.getElementById('experience').value,
    injuries: document.getElementById('injuries').value,
    fixed: document.getElementById('fixed').value,
    email: document.getElementById('email').value,
  };

  generateTrainingPlan(formData);

  // === Tooltip observer for all training plans ===
  const observer = new MutationObserver(() => {
    const container = document.querySelector(".training-day-header");
    if (container && !document.querySelector(".alt-tip")) {
      const tip = document.createElement("div");
      tip.className = "alt-tip";
      tip.textContent = "💡 Tip: Click 🖁 to swap this exercise for an alternative!";
      tip.style.cssText = "background:#fffbdd;border-left:4px solid #ffd43b;padding:8px;margin-top:10px;font-size:14px;font-weight:500;color:#4b4b00;";
      container.parentNode.insertBefore(tip, container.nextSibling);
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
});

window.ensureConditioningDayHasEnoughExercises = ensureConditioningDayHasEnoughExercises;
window.originalGenerateTrainingPlan = window.generateTrainingPlan;
window.generateTrainingPlan = async function (formData) {
  await loadConditioningData();

  const frequencyKey = formData.frequency === "5plus" ? "5+" : formData.frequency;

  if (formData.goal === "Improve conditioning") {
    const equipmentMap = {
      "Gym access": "gym",
      "Bodyweight only": "bodyweight",
      "Dumbbells at home": "bodyweight",
      "Resistance bands": "bodyweight"
    };
    formData.equipment = equipmentMap[formData.equipment] || formData.equipment;
      const plan = window.conditioningFrequencies?.[formData.equipment]?.[frequencyKey];
    if (!plan) {
      alert("⚠️ Conditioning plan not found");
      return;
    }
    ensureConditioningDayHasEnoughExercises(plan);
    renderPlan(plan, frequencyKey, formData);
  } else {
    await loadTrainingData(formData.goal);
    const adjustedFreq = formData.frequency === "5plus" ? "5+" : formData.frequency;
    const plan = window.trainingData?.[adjustedFreq];

    if (!plan) throw new Error("❌ Training plan not found for frequency: " + adjustedFreq);

    if (formData.goal === "Lose fat") {
      Object.entries(plan).forEach(([day, exercises]) => {
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
      });
    }

    renderPlan(plan, adjustedFreq, formData);
  }
};
