function loadTrainingData(goal) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = goal === 'Get stronger'
      ? 'https://www.webbyfe.com/trainingData_strong.js'
      : 'https://www.webbyfe.com/trainingData.js';
    console.log("▶️ Trying to load:", script.src);

    script.onload = () => {
      if (window.trainingData) {
        // Fix missing sets: replace '-' with default "3x10-12"
        Object.values(window.trainingData).forEach(days => {
          Object.values(days).forEach(exercises => {
            exercises.forEach(ex => {
              if (ex.sets === "-") {
                ex.sets = "3x10-12";
              }
            });
          });
        });

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
    await loadTrainingData(formData.goal);
    console.log("🧠 Fetched trainingData object:", trainingData);
    const container = document.getElementById('training-container');
    container.innerHTML = '';

    const adjustedFreq = formData.frequency === "5plus" ? "5+" : formData.frequency;
    const plan = window.trainingData?.[adjustedFreq];

    if (!plan) {
      throw new Error("❌ Training plan not found for frequency: " + adjustedFreq);
    }

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

    // Render training plan
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
          <span class="alt-button" onclick="swapExercise('${adjustedFreq}', '${day}', ${index})">🔁</span>
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

    document.getElementById('outputBox').style.display = 'block';
  } catch (err) {
    console.error(err);
    alert('Something went wrong loading your plan.');
  }
}

function swapExercise(freq, day, index) {
  const realFreq = freq === "5plus" ? "5+" : freq;
  const exercise = window.trainingData?.[realFreq]?.[day]?.[index];
  if (exercise?.alt && exercise.alt.length > 0) {
    const currentName = exercise.name;
    const altIndex = exercise.alt.indexOf(currentName);
    if (altIndex >= 0) {
      exercise.alt.splice(altIndex, 1);
    }
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
