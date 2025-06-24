function loadTrainingData(goal) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = goal === 'Get stronger' ? 'trainingData_strong.js' : 'trainingData.js';

    console.log("▶️ Trying to load:", script.src); // 🐞 Debug log

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
      console.error("❌ Failed to load:", script.src, e); // ❌ error log
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

    const frequency = formData.frequency;
    const plan = window.trainingData?.[frequency];

if (!plan) {
  throw new Error("❌ Training plan not found for frequency: " + frequency);
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

      const heading = document.createElement('h3');
      heading.textContent = day;
      dayDiv.appendChild(heading);

      exercises.forEach((exercise) => {
        const exDiv = document.createElement('div');
        exDiv.className = 'exercise';
        exDiv.innerHTML = `
          <strong>${exercise.name}</strong>
          <span>${exercise.sets || ''}</span>
        `;

        if (exercise.alt && exercise.alt.length > 0) {
          const altList = document.createElement('div');
          altList.className = 'alt-list';
          altList.innerHTML = `Alternatives: ${exercise.alt.join(', ')}`;
          exDiv.appendChild(altList);
        }

        dayDiv.appendChild(exDiv);
      });

      container.appendChild(dayDiv);
    }

    document.getElementById('outputBox').style.display = 'block';
  } catch (err) {
    console.error(err);
    alert('Something went wrong loading your plan.');
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
