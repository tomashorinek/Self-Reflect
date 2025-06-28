console.log("📥 Start loading trainingDataCalisthenics.js");
const trainingDataCalisthenics = {
  "1-2": {
    "Monday": [
      { name: "Incline Push-ups", sets: "3x10-12", alt: ["Kneeling Push-ups", "Wall Push-ups"] },
      { name: "Backpack Rows", sets: "3x12", alt: ["Bodyweight Rows under Table", "Towel Rows"] },
      { name: "Glute Bridge", sets: "3x15", alt: ["Single Leg Glute Bridge", "Hip Thrust on Couch"] },
      { name: "Step-ups (Chair/Bench)", sets: "3x10/leg", alt: ["Split Squats", "Lunges"] },
      { name: "Backpack Romanian Deadlifts", sets: "3x12", alt: ["Good Mornings", "Single Leg Deadlift"] },
      { name: "Plank + Crunches", sets: "2x (40s + 15 reps)", alt: ["Dead Bug", "V-ups"] }
    ],
    "Thursday": [
      { name: "Pull-ups (Bar or Door Frame)", sets: "3xAMRAP", alt: ["Negative Pull-ups", "Resistance Band Pulldown"] },
      { name: "Pike Push-ups", sets: "3x8-10", alt: ["Wall Pike Push-ups", "Shoulder Taps"] },
      { name: "Bulgarian Split Squats", sets: "3x10/leg", alt: ["Step-ups", "Lunges"] },
      { name: "Resistance Band Row", sets: "3x12", alt: ["Towel Rows", "Table Rows"] },
      { name: "Calf Raises (Step/Edge)", sets: "3x20", alt: ["Single Leg Calf Raise", "Wall Calf Push"] },
      { name: "Leg Raises + Plank", sets: "2x (15 reps + 45s)", alt: ["Mountain Climbers", "Hollow Hold"] }
    ]
  },
  "3-4": {
    "Monday": [
      { name: "Incline Push-ups", sets: "3x10-12", alt: ["Kneeling Push-ups", "Wall Push-ups"] },
      { name: "Resistance Band Rows", sets: "3x12", alt: ["Towel Rows", "Backpack Rows"] },
      { name: "Pike Push-ups", sets: "3x8-10", alt: ["Wall Pike Push-ups", "Shoulder Taps"] },
      { name: "Resistance Band Face Pulls", sets: "3x15", alt: ["Towel Rear Delt Rows", "Backpack RD Rows"] },
      { name: "Chair Dips", sets: "3x10", alt: ["Close Push-ups", "Band Triceps Extensions"] },
      { name: "Plank Shoulder Taps + Crunches", sets: "2x (30s + 20 reps)", alt: ["Mountain Climbers", "Dead Bug"] }
    ],
    "Tuesday": [
      { name: "Backpack Squats", sets: "3x12", alt: ["Wall Sit", "Step-ups"] },
      { name: "Step-ups with Backpack", sets: "3x10/leg", alt: ["Lunges", "Chair Squats"] },
      { name: "Backpack Romanian Deadlifts", sets: "3x10-12", alt: ["Good Mornings", "Single Leg Deadlift"] },
      { name: "Glute Bridge (Feet on Chair)", sets: "3x15", alt: ["Hip Thrust", "Single Leg Glute Bridge"] },
      { name: "Calf Raises (Step/Edge)", sets: "3x20", alt: ["Wall Calf Push", "Single Leg Raise"] },
      { name: "Leg Raises + Side Plank", sets: "2x (15 reps + 30s each side)", alt: ["V-Ups", "Twisting Crunch"] }
    ],
    "Thursday": [
      { name: "Push-ups", sets: "3x12", alt: ["Incline Push-ups", "Kneeling Push-ups"] },
      { name: "Resistance Band Rows", sets: "3x12", alt: ["Towel Rows", "Table Rows"] },
      { name: "Pull UP home bar", sets: "3x10", alt: ["negative pullup", "Home-made lat pulldown"] },
      { name: "Incline Backpack Press", sets: "3x10", alt: ["Push-ups", "Wall Push-ups"] },
      { name: "Chair Dips", sets: "3x10", alt: ["Close Push-ups", "Band Triceps Extensions"] },
      { name: "Plank Variations", sets: "2x40s", alt: ["Side Plank", "Plank with Reach"] }
    ],
    "Friday": [
      { name: "Step-ups", sets: "3x10/leg", alt: ["Split Squats", "Chair Squats"] },
      { name: "Backpack Romanian Deadlifts", sets: "3x10-12", alt: ["Good Mornings", "Single Leg Deadlift"] },
      { name: "Glute Bridge", sets: "3x15", alt: ["Single Leg Glute Bridge", "Hip Thrust on Couch"] },
      { name: "loaded backpack squats", sets: "3x30s", alt: ["bodyweight squats", "Split Squats"] },
      { name: "Calf Raises (Step/Edge)", sets: "3x20", alt: ["Single Leg Calf Raise", "Wall Calf Push"] },
      { name: "Leg Raises + Plank", sets: "2x (15 reps + 45s)", alt: ["Mountain Climbers", "Hollow Hold"] }
    ]
  },
  "5": {
    "Monday": [
      { name: "Incline Push-ups", sets: "3x10-12", alt: ["Wall Push-ups", "Kneeling Push-ups"] },
      { name: "Resistance Band Rows", sets: "3x12", alt: ["Towel Rows", "Table Rows"] },
      { name: "Pike Push-ups", sets: "3x8-10", alt: ["Wall Pike Push-ups", "Shoulder Taps"] },
      { name: "Backpack Shoulder Press", sets: "3x10", alt: ["Incline Backpack Press", "Band Shoulder Press"] },
      { name: "Chair Dips", sets: "3x12", alt: ["Close Push-ups", "Band Triceps Extensions"] },
      { name: "Plank to Push-up + Crunch", sets: "2x (10 reps + 20 crunches)", alt: ["Dead Bug", "Mountain Climbers"] }
    ],
    "Tuesday": [
      { name: "Backpack Squats", sets: "3x12", alt: ["Wall Sit", "Chair Squats"] },
      { name: "Step-ups (Chair/Bench)", sets: "3x10/leg", alt: ["Split Squats", "Lunges"] },
      { name: "Backpack RDL", sets: "3x12", alt: ["Good Mornings", "Single Leg Deadlift"] },
      { name: "Wall Sit with Backpack", sets: "3x30s", alt: ["Wall Sit", "Chair Hold"] },
      { name: "Calf Raises", sets: "3x20", alt: ["Single Leg Calf Raise", "Wall Push Calf"] },
      { name: "Leg Raises + Side Crunch", sets: "2x (15 + 20 reps)", alt: ["V-Ups", "Twisting Crunch"] }
    ],
    "Thursday": [
      { name: "Push-ups", sets: "3x12", alt: ["Incline Push-ups", "Wall Push-ups"] },
      { name: "Incline Backpack Press", sets: "3x10", alt: ["Push-ups", "Band Chest Press"] },
      { name: "Wall Pike Push-ups", sets: "3x10", alt: ["Pike Push-ups", "Shoulder Taps"] },
      { name: "Chair Dips", sets: "3x12", alt: ["Close Push-ups", "Band Triceps Extensions"] },
      { name: "Backpack Lateral Raises", sets: "2x15", alt: ["Band Lateral Raises", "Wall Hand Raises"] },
      { name: "Crunches + Plank", sets: "2x (20 + 40s)", alt: ["Sit-ups", "Hollow Hold"] }
    ],
    "Friday": [
      { name: "Pull-ups (Bar or Door Frame)", sets: "3xAMRAP", alt: ["Negative Pull-ups", "Resistance Band Pulldown"] },
      { name: "Resistance Band Rows", sets: "3x12", alt: ["Towel Rows", "Table Rows"] },
      { name: "Backpack Bicep Curl", sets: "3x12", alt: ["Band Curl", "Chair Curl"] },
      { name: "Rear Delt Raises with Band", sets: "3x15", alt: ["Towel Face Pull", "Backpack Rear Rows"] },
      { name: "Backpack Hammer Curls", sets: "2x12", alt: ["Band Hammer Curl", "Chair Curls"] },
      { name: "Plank Rows", sets: "2x12", alt: ["Renegade Row", "Shoulder Tap Plank"] }
    ],
    "Saturday": [
      { name: "Step-ups with Backpack", sets: "3x10/leg", alt: ["Chair Squats", "Lunges"] },
      { name: "Bulgarian Split Squats", sets: "3x10/leg", alt: ["Step-ups", "Chair Squats"] },
      { name: "Backpack Deadlifts", sets: "3x12", alt: ["RDL", "Good Mornings"] },
      { name: "Wall Sit with Backpack", sets: "3x30s", alt: ["Wall Sit", "Split Squats"] },
      { name: "Calf Raises (Edge)", sets: "3x20", alt: ["Single Leg Raise", "Wall Push Calf"] },
      { name: "Leg Raises + Plank", sets: "2x (15 reps + 45s)", alt: ["Mountain Climbers", "Hollow Hold"] }
    ],
  },
    "5+": {
  "Monday": [ // Upper
    { name: "Incline Push-ups", sets: "3x12", alt: ["Wall Push-ups", "Kneeling Push-ups"] },
    { name: "Resistance Band Rows", sets: "3x12", alt: ["Towel Rows", "Table Rows"] },
    { name: "Wall Pike Push-ups", sets: "3x10", alt: ["Pike Push-ups", "Shoulder Taps"] },
    { name: "Backpack Shoulder Press", sets: "3x10", alt: ["Incline Backpack Press", "Band Shoulder Press"] },
    { name: "Chair Dips", sets: "3x12", alt: ["Close Push-ups", "Band Triceps Extensions"] },
    { name: "Plank to Push-up + Crunch", sets: "2x (10 reps + 20 crunches)", alt: ["Mountain Climbers", "Dead Bug"] }
  ],
  "Tuesday": [ // Lower
    { name: "Backpack Squats", sets: "3x12", alt: ["Wall Sit", "Chair Squats"] },
    { name: "Step-ups (Chair/Bench)", sets: "3x10/leg", alt: ["Split Squats", "Lunges"] },
    { name: "Backpack RDL", sets: "3x12", alt: ["Good Mornings", "Single Leg Deadlift"] },
    { name: "Wall Sit with Backpack", sets: "3x30s", alt: ["Wall Sit", "Chair Hold"] },
    { name: "Calf Raises", sets: "3x20", alt: ["Single Leg Calf Raise", "Wall Push Calf"] },
    { name: "Leg Raises + Side Crunch", sets: "2x (15 + 20 reps)", alt: ["V-Ups", "Twisting Crunch"] }
  ],
  "Wednesday": [ // Push
    { name: "Push-ups", sets: "3x12", alt: ["Incline Push-ups", "Wall Push-ups"] },
    { name: "Incline Backpack Press", sets: "3x10", alt: ["Push-ups", "Band Chest Press"] },
    { name: "Wall Pike Push-ups", sets: "3x10", alt: ["Pike Push-ups", "Shoulder Taps"] },
    { name: "Chair Dips", sets: "3x12", alt: ["Close Push-ups", "Band Triceps Extensions"] },
    { name: "Backpack Lateral Raises", sets: "2x15", alt: ["Band Lateral Raises", "Wall Hand Raises"] },
    { name: "Crunches + Plank", sets: "2x (20 + 40s)", alt: ["Sit-ups", "Hollow Hold"] }
  ],
  "Thursday": [ // Pull
    { name: "Pull-ups (Bar or Door Frame)", sets: "3xAMRAP", alt: ["Negative Pull-ups", "Resistance Band Pulldown"] },
    { name: "Resistance Band Rows", sets: "3x12", alt: ["Towel Rows", "Table Rows"] },
    { name: "Backpack Bicep Curl", sets: "3x12", alt: ["Band Curl", "Chair Curl"] },
    { name: "Rear Delt Raises with Band", sets: "3x15", alt: ["Towel Face Pull", "Backpack Rear Rows"] },
    { name: "Backpack Hammer Curls", sets: "2x12", alt: ["Band Hammer Curl", "Chair Curls"] },
    { name: "Plank Rows", sets: "2x12", alt: ["Renegade Row", "Shoulder Tap Plank"] }
  ],
  "Friday": [ // Legs
    { name: "Step-ups with Backpack", sets: "3x10/leg", alt: ["Chair Squats", "Lunges"] },
    { name: "Bulgarian Split Squats", sets: "3x10/leg", alt: ["Step-ups", "Chair Squats"] },
    { name: "Backpack Deadlifts", sets: "3x12", alt: ["RDL", "Good Mornings"] },
    { name: "Wall Sit with Backpack", sets: "3x30s", alt: ["Wall Sit", "Split Squats"] },
    { name: "Calf Raises (Edge)", sets: "3x20", alt: ["Single Leg Raise", "Wall Push Calf"] },
    { name: "Leg Raises + Plank", sets: "2x (15 reps + 45s)", alt: ["Mountain Climbers", "Hollow Hold"] }
  ],
  "Saturday": [ // Optional Recovery/Core/Conditioning
    { name: "Jog or Fast Walk (outdoor)", sets: "20–30 min", alt: ["Jump Rope", "Step-ups Interval"] },
    { name: "Bodyweight Circuit (Push-up + Squat + Crunch)", sets: "3 rounds", alt: ["Burpees", "Mountain Climbers"] },
    { name: "Plank Variations", sets: "3x45s", alt: ["Side Plank", "Plank with Reach"] },
    { name: "Glute Bridge Hold", sets: "3x30s", alt: ["Wall Sit", "Superman Hold"] },
    { name: "Stretching + Foam Rolling", sets: "10–15 min", alt: ["Yoga Flow", "Dynamic Mobility"] }
  ]
}
};

const loseFatHome = {
  "1-2": {
    "Monday": [
      {
        name: "Warm-Up Cardio (Low Intensity)",
        sets: "10–20 min",
        alt: [
          "Walking (indoor or outdoor)",
          "Bike ride (easy pace)",
          "Stair walk (5–10 min)"
        ]
      },
      {
        name: "Post-Training Cardio (Moderate–High Intensity)",
        sets: "20–30 min",
        alt: [
          "Bike Intervals: 5 min 120–140 bpm + 1 min 140–160 bpm (repeat)",
          "Skating / Rollerblades",
          "Running or Jogging",
          "Uphill Walk or Incline Hike"
        ]
      }
    ]
  }
};
trainingDataCalisthenics.fatloss = loseFatHome;
console.log("✅ Calisthenics Data Loaded:", trainingDataCalisthenics);
Object.keys(trainingDataCalisthenics).forEach(freq => {
  Object.keys(trainingDataCalisthenics[freq]).forEach(day => {
    trainingDataCalisthenics[freq][day].forEach(ex => {
      if (!ex.name || !ex.sets) {
        console.warn("⚠️ Missing exercise data:", ex);
      }
    });
  });
});
export default trainingDataCalisthenics;
