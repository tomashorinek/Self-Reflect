// === improveConditioning.js ===

// ✅ Zajištění načtení conditioningFrequencies
function ensureConditioningData() {
  return new Promise((resolve, reject) => {
    if (window.conditioningFrequencies) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = 'conditioningFrequencies.js';
    script.onload = async () => {
      try {
        if (window.conditioningFrequencies) {
          resolve();
          return;
        }
        if (window.loadConditioningData) {
          await window.loadConditioningData();
          resolve();
        } else {
          reject("❌ Conditioning data not available after script load");
        }
      } catch (err) {
        reject(err);
      }
    };
    script.onerror = () => reject("❌ Failed to load conditioning data script");
    document.head.appendChild(script);
  });
}

// ✅ Rozšíření alternativních cviků
function extendConditioningAlternatives(plan) {
  Object.entries(plan).forEach(([day, exercises]) => {
    const dayLower = day.toLowerCase();

    // 🔹 Pokud má den méně než 3 cviky, přidáme finisher
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

    // 🔹 Doplnění alternativních cviků podle známé mapy
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

// ✅ Přepis generátoru pro Improve Conditioning
window.originalGenerateTrainingPlan = window.generateTrainingPlan;
window.generateTrainingPlan = async function (formData) {
  if (formData.goal !== "Improve conditioning") {
    return window.originalGenerateTrainingPlan(formData);
  }

  try {
    await ensureConditioningData();

    // 🔹 Určení typu vybavení
    const equipment = formData.equipment.toLowerCase().includes("home") ? "bodyweight" : "gym";

    // 🔹 Úprava frekvence (mapování "5plus" → "5+")
    let frequency = formData.frequency === "5plus" ? "5+" : formData.frequency;

    console.log("Equipment:", equipment);
    console.log("Frequency:", frequency);
    console.log("Available Frequencies:", Object.keys(window.conditioningFrequencies?.[equipment] || {}));

    // 🔹 Načtení plánu
    let plan = window.conditioningFrequencies?.[equipment]?.[frequency];
    if (!plan) throw new Error("❌ Conditioning plan not found.");

    // 🔹 Pokud je to pole (1–2 dny), zabalíme do objektu
    if (Array.isArray(plan)) {
      console.warn("ℹ️ Wrapping single-day plan into object for consistency");
      plan = { "Day 1": plan };
    }

    // 🔹 Rozšíření alternativ
    extendConditioningAlternatives(plan);

    // 🔹 Bezpečné renderování plánu
    if (typeof renderPlan === 'function') {
      renderPlan(plan, frequency, formData);
      document.getElementById('outputBox').style.display = 'block';
    }

  } catch (err) {
    console.error("⚠️ Conditioning Plan Generation Error:", err);
    alert(err.message || 'Something went wrong loading your conditioning plan.');
  }
};
