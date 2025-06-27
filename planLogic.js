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
    mon: extraArray[0],
    tue: extraArray[1],
    wed: extraArray[2],
    thu: extraArray[3],
    fri: extraArray[4],
    sat: extraArray[5],
    sun: extraArray[6]
  };

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

  // Zpětné alternativy
  Object.entries(baseAltMap).forEach(([main, alts]) => {
    alts.forEach(alt => {
      if (!baseAltMap[alt]) {
        baseAltMap[alt] = alts.filter(a => a !== alt).concat(main);
      }
    });
  });

  Object.entries(plan).forEach(([day, exercises], idx) => {
    const dayName = day.toLowerCase();
    let dayKey = dayName.slice(0, 3);

    if (!extras[dayKey]) {
      const seqKey = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"][idx % 7];
      dayKey = seqKey;
    }

    if (exercises.length < 3 && extras[dayKey]) {
      const fallback = JSON.parse(JSON.stringify(extras[dayKey]));
      // ✅ Aplikuj altMap i na fallback
      if (!fallback.alt) fallback.alt = [];
      const mapped = baseAltMap[fallback.name];
      if (mapped) {
        mapped.forEach(alt => {
          if (!fallback.alt.includes(alt)) {
            fallback.alt.push(alt);
          }
        });
      }
      exercises.push(fallback);
    }

    // ✅ Aplikuj altMap na každý cvik
    exercises.forEach(ex => {
      if (!ex.alt) ex.alt = [];
      const mapped = baseAltMap[ex.name];
      if (mapped) {
        mapped.forEach(alt => {
          if (!ex.alt.includes(alt)) {
            ex.alt.push(alt);
          }
        });
      }
    });
  });
}


// === trainingData loader ===
function loadTrainingData(goal) {
  return new Promise((resolve, reject) => {
    let globalName, src;

    if (goal === 'Get stronger') {
      globalName = 'trainingDataStrong';
      src = 'https://www.webbyfe.com/trainingData_strong.js';
    } else {
      globalName = 'trainingDataGeneral';
      src = 'https://www.webbyfe.com/trainingData.js';
    }

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

// Load all data early to avoid second-load issues
window.addEventListener("DOMContentLoaded", async () => {
  try {
    await loadConditioningData();
    console.log("✅ Conditioning data preloaded");
  } catch (err) {
    console.error("❌ Preloading error:", err);
  }
});

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
    exercises.forEach(ex => {
      if (!ex.alt) ex.alt = [];
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
        renderPlan(plan, freq, formData);
      }
    });

    dayDiv.appendChild(list);
    container.appendChild(dayDiv);
  }

  document.querySelectorAll('.alt-button').forEach(btn => {
      btn.setAttribute('title', 'switch for alternative');
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
});

window.generateTrainingPlan = async function (formData) {
  const frequencyKey = formData.frequency === "5plus" ? "5+" : formData.frequency;

  if (formData.goal === "Improve conditioning") {
    await loadConditioningData();
    const equipmentMap = {
      "Gym access": "gym",
      "Bodyweight only": "bodyweight",
      "Dumbbells at home": "bodyweight",
      "Resistance bands": "bodyweight"
    };
    formData.equipment = equipmentMap[formData.equipment] || formData.equipment;
    const basePlan = window.conditioningFrequencies?.[formData.equipment]?.[frequencyKey];

    if (!basePlan) {
      alert("⚠️ Conditioning plan not found");
      return;
    }
    currentPlan = JSON.parse(JSON.stringify(basePlan));
      extendConditioningAlternatives(currentPlan);
    renderPlan(currentPlan, frequencyKey, formData);
  } else {
    await loadTrainingData(formData.goal);
    const adjustedFreq = formData.frequency === "5plus" ? "5+" : formData.frequency;

    let basePlan;
    if (formData.goal === "Get stronger") {
      basePlan = window.trainingDataStrong?.[adjustedFreq];
    } else {
      basePlan = window.trainingDataGeneral?.[adjustedFreq];
    }

    if (!basePlan) {
      alert("❌ Training plan not found for frequency: " + adjustedFreq);
      return;
    }
    currentPlan = JSON.parse(JSON.stringify(basePlan));

    if (formData.goal === "Lose fat") {
      Object.entries(currentPlan).forEach(([day, exercises]) => {
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

    renderPlan(currentPlan, adjustedFreq, formData);
  }
};
