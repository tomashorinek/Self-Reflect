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
  Object.entries(plan).forEach(([day, exercises]) => {
    const dayLower = day.toLowerCase();

    // Add fallback if too few exercises
    if (exercises.length < 3) {
      const extra = {
        mon: { name: "Core Circuit Finisher", sets: "3x40s plank + 10 crunches", alt: ["Plank to Push-up", "Mountain Climbers"] },
        tue: { name: "Air Bike Burnout", sets: "4x20s all-out / 40s rest", alt: ["Jump Rope", "Burpees"] },
        wed: { name: "Bear Crawl Shuttle", sets: "4x10m", alt: ["Mountain Climbers", "Plank Shoulder Taps"] },
        thu: { name: "Jumping Jacks Finisher", sets: "3x30s", alt: ["Mountain Climbers", "Skater Jumps"] },
        fri: { name: "Burpees to Box", sets: "3x12", alt: ["Jump Squats", "Step Ups"] },
        sat: { name: "Wall Sit Hold", sets: "3x45s", alt: ["Bodyweight Squat Hold", "Lunge Hold"] },
        sun: { name: "Jumping Jacks Finisher", sets: "3x30s", alt: ["Mountain Climbers", "Jump Squats"] },
      };
      for (const key in extra) {
        if (dayLower.includes(key)) {
          exercises.push(extra[key]);
          break;
        }
      }
    }

    // Enrich with known alternative mappings
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
  });
}

// Override generator only for conditioning
window.originalGenerateTrainingPlan = window.generateTrainingPlan;
window.generateTrainingPlan = async function (formData) {
  if (formData.goal !== "Improve conditioning") {
    return window.originalGenerateTrainingPlan(formData);
  }

  try {
await loadConditioningData();

// 📌 Oprava mapování vybavení
const equipment = formData.equipment.toLowerCase().includes("home") ? "bodyweight" : "gym";

// 📌 Oprava mapování frekvence
let frequency = formData.frequency;
if (["3", "4"].includes(frequency)) frequency = "3-4";
else if (frequency === "5plus") frequency = "5+";

console.log("Equipment:", equipment);
console.log("Frequency:", frequency);
console.log("Available:", Object.keys(window.conditioningFrequencies?.[equipment] || {}));

const plan = window.conditioningFrequencies?.[equipment]?.[frequency];
if (!plan) throw new Error("❌ Conditioning plan not found.");


    extendConditioningAlternatives(plan);

    if (typeof renderPlan === 'function') {
      renderPlan(plan, frequency, formData);
      document.getElementById('outputBox').style.display = 'block';
    }
  } catch (err) {
    console.error(err);
    alert('Something went wrong loading your conditioning plan.');
  }
};
