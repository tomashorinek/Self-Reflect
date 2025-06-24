
console.log("✅ trainingData_strong.js LOADED");
const trainingData = {
  "1-2": {
    "Monday": [
      { name: "Lat Pulldown", sets: "1x10 (pre-activation)", alt: ["Pull ups", "Supported Pull Up"] },
      { name: "Triceps Pushdown", sets: "1x10-12", alt: ["Overhead Extension", "Smith Close Grip"] },
      { name: "Benchpress", sets: "4x6-3", alt: ["Dumbbell Press", "Chest Press Machine"] },
      { name: "Lat Pulldown", sets: "2x10 (post-bench)", alt: ["Pull ups", "Supported Pull Up"] },
      { name: "Chest Supported Wide Grip Row Machine", sets: "3x10-12", alt: ["T-bar", "Bench Support DB Row"] },
      { name: "Hamstring Leg Curl", sets: "3x12-10", alt: ["Seated", "Laying", "Cables"] },
      { name: "Leg Press", sets: "3x8", alt: ["Hack Squat", "Smith Squat"] },
      { name: "Cable Crunch", sets: "2x15", alt: ["Sit-ups", "Knee Raises"] }
    ],
    "Thursday": [
      { name: "Hamstring Leg Curl", sets: "1x12 (pre-activation)", alt: ["Seated", "Laying", "Cables"] },
      { name: "Leg Extension", sets: "1x10-12 (pre-activation)", alt: ["Cable Kicks", "Sissy Squat"] },
      { name: "Leg Press", sets: "4x4-6", alt: ["Hack Squat", "Smith Squat"] },
      { name: "Hamstring Leg Curl", sets: "2x10", alt: ["Seated", "Laying", "Cables"] },
      { name: "Chest Supported Wide Grip Row Machine", sets: "3x10-12", alt: ["T-bar", "Bench Support DB Row"] },
      { name: "Lat Pulldown", sets: "3x10", alt: ["Pull ups", "Supported Pull Up"] },
      { name: "Chest Press Machine", sets: "3x12", alt: ["Benchpress", "Dumbbell Press"] },
      { name: "Cable Crunch", sets: "2x15", alt: ["Sit-ups", "Knee Raises"] }
    ]
  },
  "3-4": {
    "Monday": [
      { name: "Lateral Raise", sets: "1x12-15 (warm-up)", alt: ["Cable Side Raise", "Dumbbell Raise"] },
      { name: "Lat Pulldown", sets: "1x10 (pre-activation)", alt: ["Pull ups", "Supported Pull Up"] },
      { name: "Incline Press Machine", sets: "4x6-3", alt: ["Smith Incline Press", "Dumbbell Incline"] },
      { name: "Lat Pulldown", sets: "2x10", alt: ["Pull ups", "Supported Pull Up"] },
      { name: "Lateral Raise", sets: "2x15", alt: ["Cable Side Raise", "Machine Raise"] },
      { name: "Overhead Press Machine", sets: "3x10", alt: ["Dumbbell Shoulder Press", "Barbell OHP"] },
      { name: "Triceps Pushdown", sets: "3x10-12", alt: ["Overhead Extension", "Close-Grip Press"] },
      { name: "Cable Crunch", sets: "2x15", alt: ["Sit-ups", "Hanging Knee Raises"] }
    ],
    "Wednesday": [
      { name: "Leg Curl", sets: "1x12 (warm-up)", alt: ["Seated", "Laying", "Cable Curl"] },
      { name: "Adduction Machine", sets: "1x10-12 (warm-up)", alt: ["Cable Adduction", "Sumo Hold"] },
      { name: "RDL", sets: "4x6-3", alt: ["DB RDL", "Smith RDL"] },
      { name: "Leg Curl", sets: "2x10", alt: ["Seated", "Laying", "Cable Curl"] },
      { name: "Adduction Machine", sets: "2x10-12", alt: ["Cable Adduction", "Sumo Hold"] },
      { name: "Leg Press", sets: "3x10", alt: ["Hack Squat", "Belt Squat"] },
      { name: "Hamstring Leg Curl", sets: "3x12", alt: ["Seated", "Laying", "Cable Curl"] },
      { name: "Abs Cable Crunch", sets: "2x15", alt: ["Sit-ups", "Leg Raises"] }
    ],
    "Friday": [
      { name: "Face Pull", sets: "1x15 (warm-up)", alt: ["Rear Delt Raise", "Reverse Pec Deck"] },
      { name: "Lat Pulldown", sets: "1x10 (pre-activation)", alt: ["Pull ups", "Neutral Pulldown"] },
      { name: "Chest Supported Row", sets: "4x6-3", alt: ["Cable Row", "Machine Row"] },
      { name: "Lat Pulldown", sets: "2x10", alt: ["Pull ups", "Supported Pull Up"] },
      { name: "Rear Delt Machine", sets: "2x15", alt: ["Reverse Pec Deck", "Bent Over Raise"] },
      { name: "EZ Bar Curl", sets: "3x10", alt: ["DB Curl", "Cable Curl"] },
      { name: "Incline DB Curl", sets: "2x12", alt: ["Hammer Curl", "Preacher Curl"] },
      { name: "Cable Crunch", sets: "2x15", alt: ["Sit-ups", "Knee Raises"] }
    ],
    "Saturday": [
      { name: "Hamstring Leg Curl", sets: "1x12 (warm-up)", alt: ["Seated", "Laying", "Cables"] },
      { name: "Leg Extension", sets: "1x10-12 (warm-up)", alt: ["Cable Kicks", "Sissy Squat"] },
      { name: "Leg Press", sets: "4x6-3", alt: ["Hack Squat", "Belt Squat"] },
      { name: "Leg Extension", sets: "3x10", alt: ["Cable Kicks", "Sissy Squat"] },
      { name: "Walking Lunges", sets: "2x20 steps", alt: ["Static Lunge", "Split Squat"] },
      { name: "Adduction Machine", sets: "2x10-12", alt: ["Cable Adduction", "Sumo Hold"] },
      { name: "Calf Raise Machine", sets: "3x12", alt: ["Seated Calf", "Standing Calf"] },
      { name: "Abs Cable Crunch", sets: "2x15", alt: ["Sit-ups", "Hanging Leg Raises"] }
    ]
  },
  "5": {
    "Monday": [
      { name: "Lateral Raise", sets: "1x12-15 (warm-up)", alt: ["Cable Side Raise", "Dumbbell Raise"] },
      { name: "Lat Pulldown", sets: "1x10 (pre-activation)", alt: ["Pull ups", "Supported Pull Up"] },
      { name: "Incline Press Machine", sets: "4x6-3", alt: ["Smith Incline Press", "Dumbbell Incline"] },
      { name: "Lat Pulldown", sets: "2x10", alt: ["Pull ups", "Supported Pull Up"] },
      { name: "Lateral Raise", sets: "2x15", alt: ["Cable Side Raise", "Machine Raise"] },
      { name: "Overhead Press Machine", sets: "3x10", alt: ["Dumbbell Shoulder Press", "Barbell OHP"] },
      { name: "Triceps Pushdown", sets: "3x10-12", alt: ["Overhead Extension", "Close-Grip Press"] },
      { name: "Cable Crunch", sets: "2x15", alt: ["Sit-ups", "Hanging Knee Raises"] }
    ],
    "Tuesday": [
      { name: "Leg Curl", sets: "1x12 (warm-up)", alt: ["Seated", "Laying", "Cable Curl"] },
      { name: "Adduction Machine", sets: "1x10-12 (warm-up)", alt: ["Cable Adduction", "Sumo Hold"] },
      { name: "RDL", sets: "4x6-3", alt: ["DB RDL", "Smith RDL"] },
      { name: "Leg Curl", sets: "2x10", alt: ["Seated", "Laying", "Cable Curl"] },
      { name: "Adduction Machine", sets: "2x10-12", alt: ["Cable Adduction", "Sumo Hold"] },
      { name: "Leg Press", sets: "3x10", alt: ["Hack Squat", "Belt Squat"] },
      { name: "EZ Bar Curl", sets: "3x10", alt: ["Cable Curl", "Incline Curl"] },
      { name: "Incline DB Curl", sets: "2x12", alt: ["Hammer Curl", "Preacher Curl"] }
    ],
    "Thursday": [
      { name: "Lateral Raise", sets: "1x12-15 (warm-up)", alt: ["Cable Side Raise", "Dumbbell Raise"] },
      { name: "Incline Bench Press", sets: "4x6-3", alt: ["Low Incline Smith", "Incline DB Press"] },
      { name: "Flat Machine Press", sets: "3x10", alt: ["Flat DB Press", "Smith Bench"] },
      { name: "Overhead Press Machine", sets: "3x10", alt: ["Dumbbell Shoulder Press", "Barbell OHP"] },
      { name: "Cable Side Raise", sets: "2x15", alt: ["Y Raises", "Machine Lateral Raise"] },
      { name: "Triceps Pushdown", sets: "3x10-12", alt: ["Overhead Extension", "Close-Grip Bench"] }
    ],
    "Friday": [
      { name: "Face Pull", sets: "1x15 (warm-up)", alt: ["Rear Delt Raise", "Reverse Pec Deck"] },
      { name: "Chest Supported Row", sets: "4x6-3", alt: ["Cable Row", "Machine Row"] },
      { name: "Lat Pulldown", sets: "3x10", alt: ["Pull ups", "Neutral Grip"] },
      { name: "Rear Delt Machine", sets: "2x15", alt: ["Reverse Pec Deck", "Bent Over Raise"] },
      { name: "Hammer Curl", sets: "3x10", alt: ["Cable Hammer Curl", "Preacher Curl"] },
      { name: "Incline DB Curl", sets: "2x12", alt: ["Behind-Back Curl", "Concentration Curl"] }
    ],
    "Saturday": [
      { name: "Hamstring Curl", sets: "1x12 (warm-up)", alt: ["Seated", "Lying", "Cable"] },
      { name: "Leg Extension", sets: "1x10-12 (warm-up)", alt: ["Cable Kicks", "Sissy Squat"] },
      { name: "Leg Press", sets: "4x6-3", alt: ["Hack Squat", "Pendulum Squat"] },
      { name: "Walking Lunges", sets: "2x20 steps", alt: ["Static Lunge", "Split Squat"] },
      { name: "Leg Extension", sets: "3x10", alt: ["Cable Kicks", "Sissy Squat"] },
      { name: "Adduction Machine", sets: "2x12", alt: ["Cable Adduction", "Sumo Hold"] },
      { name: "Calf Raise Machine", sets: "3x12", alt: ["Seated Calf", "Standing Calf"] },
      { name: "Cable Crunch", sets: "2x15", alt: ["Sit-ups", "Leg Raises"] }
    ]
  },
  "5+": {
    "Monday": [
      { name: "Cable Lateral Raise", sets: "1x15 (warm-up)", alt: ["DB Y Raise Incline Bench", "DB Lateral Raises"] },
      { name: "Triceps Pushdown", sets: "1x10-12 (warm-up)", alt: ["Overhead Extension", "1DB Overhead Extension"] },
      { name: "Machine Shoulder Press", sets: "4x6-3", alt: ["Smith Incline 45-60°", "DB Mid Incline Press"] },
      { name: "Low Incline Smith Press", sets: "3x10-12", alt: ["Incline Chest Press Machine", "Low Inc DB Press"] },
      { name: "Cable Lateral Raise", sets: "2x15", alt: ["DB Lateral Raises", "Bench DB Y Raises"] },
      { name: "Smith Machine Triceps", sets: "3x10-12", alt: ["Triceps Cable Pushdown", "1DB Overhead Extension"] },
      { name: "Cable Crunch", sets: "2x15", alt: ["Sit-ups", "Hanging Knee Raises"] }
    ],
    "Tuesday": [
      { name: "Rear Delt Cable Fly", sets: "1x15 (warm-up)", alt: ["RD Machine Fly", "RD DB Incline Fly"] },
      { name: "Neutral Grip Pulldown", sets: "1x10 (warm-up)", alt: ["1H Pulldown", "Cable Pullover"] },
      { name: "Chest Supported Row", sets: "4x6-3", alt: ["T Bar", "Lower Cable Row"] },
      { name: "Lat Row Neutral Grip", sets: "2x12", alt: ["SA Lat Row", "DB Lat Row"] },
      { name: "Upper Back Chest Support Machine", sets: "2x12", alt: ["Upper Back Row", "Terres Pulldown"] },
      { name: "Rear Delt Cable Fly", sets: "2x15", alt: ["RD Machine Fly", "RD DB Incline Fly"] },
      { name: "Hammer Curl", sets: "2x12", alt: ["Cable Hammer Curl", "Preacher Hammer Curl"] },
      { name: "Cable Biceps Curl", sets: "2x12", alt: ["Behind Back Cable Biceps", "Incline Bench Biceps Curl"] }
    ],
    "Wednesday": [
      { name: "Adductors Machine", sets: "1x12 (warm-up)", alt: ["Cable Strap Adduction"] },
      { name: "Lying Hamstring Curl", sets: "1x12 (warm-up)", alt: ["Seated Ham Curl", "DB Ham Curl"] },
      { name: "RDL", sets: "4x6-3", alt: ["Deadlift", "Hipthrust Machine"] },
      { name: "Lying Hamstring Curl", sets: "2x10-12", alt: ["Seated Ham Curl", "DB Ham Curl"] },
      { name: "Leg Extension", sets: "3x12", alt: ["Cable Leg Extension", "Single Leg Extension"] },
      { name: "Leg Press", sets: "3x10-15", alt: ["Hack Squat", "Pendulum Squat"] },
      { name: "Straight Leg Calf Raise", sets: "2x12", alt: ["Seated Calf Raise", "Leg Press Calf Raise"] },
      { name: "Cable Crunch", sets: "2x15", alt: ["Sit-ups", "Knee Raises"] }
    ],
    "Friday": [
      { name: "Cable Side Raise", sets: "1x15 (warm-up)", alt: ["DB Y Raise Incline Bench", "DB Lateral Raises"] },
      { name: "Lat Pulldown", sets: "1x10 (warm-up)", alt: ["Neutral Grip Pulldown", "Cable Pullover"] },
      { name: "Incline Smith Press", sets: "4x6-3", alt: ["Shoulder Press Machine", "Incline DB Press"] },
      { name: "Flat Chest Press", sets: "3x10", alt: ["Bench Press", "Flat DB Press"] },
      { name: "Cable Lateral Raise", sets: "2x15", alt: ["DB Lateral Raises", "Incline DB Y Raise"] },
      { name: "Triceps Cable Pushdown", sets: "3x10-12", alt: ["Smith Machine Triceps", "1DB Overhead Extension"] },
      { name: "Cable Crunch", sets: "2x15", alt: ["Sit-ups", "Hanging Knee Raises"] }
    ],
    "Saturday": [
      { name: "Rear Delt Machine Fly", sets: "1x15 (warm-up)", alt: ["RD Cable Fly", "RD DB Incline Fly"] },
      { name: "SA Lat Pulldown", sets: "1x10 (warm-up)", alt: ["Neutral Grip Pulldown", "Cable Pullover"] },
      { name: "T-Bar Bent Row", sets: "4x6-3", alt: ["Chest Supported Row", "Lower Cable Row"] },
      { name: "Lat Row Close Neutral", sets: "2x12", alt: ["SA Lat Row", "DB Lat Row"] },
      { name: "Upper Inverted Row DB", sets: "2x12", alt: ["Chest Support Row", "Terres Pulldown"] },
      { name: "Rear Delt Machine Fly", sets: "2x15", alt: ["RD Cable Fly", "RD DB Incline Fly"] },
      { name: "Cable Hammer Curl", sets: "2x12", alt: ["DB Hammer Curl", "Preacher Hammer Curl"] },
      { name: "Behind Back Cable Bicep", sets: "2x12", alt: ["1H Cable Bicep", "Incline Bench Curl"] }
    ],
    "Sunday": [
      { name: "Leg Extension", sets: "1x10-12 (warm-up)", alt: ["Cable Kicks", "Sissy Squat"] },
      { name: "Seated Hamstring Curl", sets: "1x12 (warm-up)", alt: ["Lying Ham Curl", "DB Ham Curl"] },
      { name: "Leg Press", sets: "4x6-3", alt: ["Hack Squat", "Smith Squat"] },
      { name: "Seated Hamstring Curl", sets: "2x10-12", alt: ["Lying Ham Curl", "DB Ham Curl"] },
      { name: "Adductor Machine", sets: "2x12", alt: ["Cable Strap Adductors"] },
      { name: "Leg Extension", sets: "3x10-12", alt: ["1 Leg Extension", "Cable Strap Extension"] },
      { name: "Standing Calf Raise", sets: "2x12-15", alt: ["Seated Calf Raise"] },
      { name: "Cable Crunch", sets: "3x15", alt: ["Sit-ups", "Knee Raises"] }
    ]
  }
};

console.log("✅ trainingData object:", trainingData);
window.trainingData = trainingData;
