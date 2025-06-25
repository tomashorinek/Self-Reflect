// === conditioningFrequencies.js loader ===
function loadConditioningData() {
  return new Promise((resolve, reject) => {
    if (window.conditioningFrequencies) {
      resolve(); // Already loaded
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://www.webbyfe.com/conditioningFrequencies.js';
    script.onload = () => {
      if (window.conditioningFrequencies) {
        console.log("✅ Conditioning data loaded");
        resolve();
      } else {
        reject("❌ Conditioning data not available after script load");
      }
    };
    script.onerror = () => reject("❌ Failed to load conditioning data script");
    document.head.appendChild(script);
  });
}

// === trainingData loader ===
function loadTrainingData(goal) {
  return new Promise((resolve, reject) => {
    if (window.trainingData) {
      resolve(); // Already loaded
      return;
    }
    const script = document.createElement('script');
    script.src = goal === 'Get stronger'
      ? 'https://www.webbyfe.com/trainingData_strong.js'
      : 'https://www.webbyfe.com/trainingData.js';
    console.log("▶️ Trying to load:", script.src);

    script.onload = () => {
      if (window.trainingData) {
        console.log("✅ Loaded and trainingData is available:", script.src);
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

// Main generation logic
async function generateTrainingPlan(formData) {
  try {
    const isConditioning = formData.goal === "Improve conditioning";

    if (isConditioning) {
      await loadConditioningData();
      const frequency = formData.frequency === "5plus" ? "5+" : formData.frequency;
      const equipment = formData.equipment.toLowerCase().includes("gym") ? "gym" : "bodyweight";
      let plan = window.conditioningFrequencies?.[equipment]?.[frequency];

      // ✨ Auto-extend short conditioning days (min. 3 exercises per day)
      if (typeof plan === 'object' && !Array.isArray(plan)) {
        for (const [day, exercises] of Object.entries(plan)) {
          if (exercises.length < 3) {
            const dayLower = day.toLowerCase();
            if (dayLower.includes('mon')) {
              exercises.push({ name: "Core Circuit Finisher", sets: "3x40s plank + 10 crunches", alt: ["Plank to Push-up"] });
            } else if (dayLower.includes('tue')) {
              exercises.push({ name: "Air Bike Burnout", sets: "4x20s all-out / 40s rest", alt: ["Jump Rope"] });
            } else if (dayLower.includes('wed')) {
              exercises.push({ name: "Bear Crawl Shuttle", sets: "4x10m", alt: ["Mountain Climbers"] });
            } else if (dayLower.includes('fri')) {
              exercises.push({ name: "Burpees to Box", sets: "3x12", alt: ["Jump Squats"] });
            } else if (dayLower.includes('sat')) {
              exercises.push({ name: "Wall Sit Hold", sets: "3x45s", alt: ["Bodyweight Squat Hold"] });
            } else {
              exercises.push({ name: "Jumping Jacks Finisher", sets: "3x30s", alt: ["Mountain Climbers"] });
            }
          }
        }
      });
          }
        }
      }

      if (!plan) throw new Error("❌ Conditioning plan not found.");

      renderPlan(plan, frequency);
    } else {
      await loadTrainingData(formData.goal);
      const container = document.getElementById('training-container');
      container.innerHTML = '';

      const adjustedFreq = formData.frequency === "5plus" ? "5+" : formData.frequency;
      const plan = window.trainingData?.[adjustedFreq];

      if (!plan) throw new Error("❌ Training plan not found for frequency: " + adjustedFreq);

      // Add cardio for "Lose fat" goal
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

      renderPlan(plan, adjustedFreq);
    }

    document.getElementById('outputBox').style.display = 'block';
  } catch (err) {
    console.error(err);
    alert('Something went wrong loading your plan.');
  }
}

function renderPlan(plan, freq) {
  const container = document.getElementById('training-container');
  container.innerHTML = '';

  for (const [day, exercises] of Object.entries(plan)) {
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
        <span class="alt-button" onclick="swapExercise('${freq}', '${day}', ${index})">🔁</span>
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
        generateTrainingPlan({ ...formData });
      }
    });

    dayDiv.appendChild(list);
    container.appendChild(dayDiv);
  }
}

function swapExercise(freq, day, index) {
  const realFreq = freq === "5plus" ? "5+" : freq;
  const source = window.trainingData?.[realFreq]?.[day] || window.conditioningFrequencies?.[realFreq]?.[day];
  const exercise = source?.[index];
  if (exercise?.alt && exercise.alt.length > 0) {
    const currentName = exercise.name;
    const altIndex = exercise.alt.indexOf(currentName);
    if (altIndex >= 0) exercise.alt.splice(altIndex, 1);
    exercise.alt.push(exercise.name);
    exercise.name = exercise.alt.shift();
    document.getElementById("trackerForm").dispatchEvent(new Event("submit"));
  }
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
