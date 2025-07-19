console.log("📥 Start loading trainingData.js");
const trainingData = {
  "1-2": {
    "Monday": [
      { name: "Lat Pulldown", sets: "3x10", alt: ["Pull ups", "Supported Pull Up"] },
      { name: "Chest Supported Wide Grip Row Machine", sets: "3x10-12", alt: ["T-bar", "Bench Support DB Row"] },
      { name: "Chest Press Machine", sets: "3x12", alt: ["Benchpress", "Dumbbell Press"] },
      { name: "Hamstring Leg Curl", sets: "3x10-12", alt: ["Seated", "Laying", "Cables"] },
      { name: "Leg Press", sets: "3x8-10", alt: ["Hack Squat", "Smith Squat"] },
      { name: "Cable Crunch", sets: "2x15", alt: ["Sit-ups", "Knee Raises"] }
    ],
    "Thursday": [
      { name: "Lat Pulldown", sets: "3x10", alt: ["Pull ups", "Supported Pull Up"] },
      { name: "Chest Supported Wide Grip Row Machine", sets: "3x10-12", alt: ["T-bar", "Bench Support DB Row"] },
      { name: "Chest Press Machine", sets: "3x12", alt: ["Benchpress", "Dumbbell Press"] },
      { name: "Hamstring Leg Curl", sets: "3x12-3x10", alt: ["Seated", "Laying", "Cables"] },
      { name: "Leg Press", sets: "3x8-10", alt: ["Hack Squat", "Smith Squat"] },
      { name: "Cable Crunch", sets: "2x15", alt: ["Sit-ups", "Knee Raises"] }
    ]
  },
  "3-4": {
    "Monday": [
      { name: "Cable Lateral Raise", sets: "2x12", alt: ["Y raises", "db lateral raise"] },
      { name: "Low incline 30° Upper Chest Press Machine", sets: "3x10", alt: ["smith30°", "dbpress30°"] },
      { name: "Lat Pulldown", sets: "3x10", alt: ["pull ups", "supported pull up"] },
      { name: "Chest Supported Wide Grip Row Machine", sets: "3x10-12", alt: ["Tbar", "bench support wide db row"] },
      { name: "Rear Delt Fly Machine", sets: "2x12", alt: ["cables RD flies", "chest support incline bench RD flies"] },
      { name: "Triceps Pushdown", sets: "2x12", alt: ["smith close grip tricep"] },
      { name: "Cable Bicep Curl", sets: "2x12", alt: ["seated inc. db curl", "behind back bicep curl"] }
    ],
    "Tuesday": [
      { name: "Cable Crunch", sets: "2x15", alt: ["sit-ups", "knee raises"] },
      { name: "Seated Hamstring Leg Curl", sets: "3x12", alt: ["cable strapped ham curl", "laying ham curl"] },
      { name: "Legs Extension", sets: "3x10-12", alt: ["1leg", "both leg", "db leg extension"] },
      { name: "Leg Press", sets: "3x12", alt: ["hack squat", "smith squat"] },
      { name: "Adductor Machine", sets: "2x15", alt: ["cable strapped adductors"] },
      { name: "Standing Calf Raises", sets: "2x20", alt: ["legpress calf raises", "seated calf raises"] }
    ],
    "Thursday": [
      { name: "Dumbbell Lateral Raise", sets: "3x10-12", alt: ["Y-raises", "cable lateral raises"] },
      { name: "Mid Incline Press 45° Smith", sets: "3x10", alt: ["shoulder press machine", "dbpress bench45° incline"] },
      { name: "Neutral Grip Pulldown", sets: "3x10-12", alt: ["1hand lat pulldown", "pullover"] },
      { name: "Seated Row Wide Grip", sets: "3x10", alt: ["tbar", "row machine wide"] },
      { name: "Cable Rear Delt Pull", sets: "2x12", alt: ["flies machine rear delt", "incline bench db RD flies"] },
      { name: "Overhead Triceps Extension", sets: "2x12", alt: [] }
    ],
    "Friday": [
      { name: "Cable Abs, Seated Calf Raise", sets: "2x20", alt: ["standing", "legpress calf raise"] },
      { name: "Leg Extension", sets: "3x12", alt: ["cable strapped", "1leg/both legs leg extension machine"] },
      { name: "Seated Leg Curl", sets: "3x12", alt: ["laying leg curl", "db leg curl"] },
      { name: "Hack Squat", sets: "2x10", alt: ["smith squat", "pendulum squat"] },
      { name: "EZ Bar Curl", sets: "2x1", alt: ["preachers 1hand", "preacher machine"] }
    ]
  },
  "5": {
    "Monday": [
      { name: "Y-Raises", sets: "3x10-12", alt: ["incline bench Y raises DB", "cable lat raises from the waist"] },
      { name: "Low Incline Chest Press", sets: "3x8-10", alt: ["low incline smith", "low incline bench"] },
      { name: "Neutral Grip Pulldown", sets: "3x10-12", alt: ["1h neutral grip pulldown", "DB or cable pullover"] },
      { name: "Chest Support Upper Back Row Machine", sets: "3x10-12", alt: ["t-bar", "teres pulldown"] },
      { name: "Machine Lateral Raise", sets: "3x12", alt: ["cable lateral raise", "dumbbell lateral raise"] },
      { name: "Rear Delt Flies Machine", sets: "3x10-12", alt: ["RD cables", "RD incline bench flies"] },
      { name: "Triceps Rope Pushdown", sets: "2x12", alt: ["overhead extension 1DB", "smith close grip tricep"] },
      { name: "Triceps Cross Cables", sets: "2x10-12", alt: ["tricep skull crushers DB", "tricep behind head 1hand"] }
    ],
    "Tuesday": [
      { name: "Cable Crunch", sets: "3x12-15", alt: ["knee raises", "sit-ups"] },
      { name: "Seated Knee Support Hamstring Curl Machine", sets: "3x10-12", alt: ["laying ham leg curls", "db ham curls"] },
      { name: "Adductor Machine", sets: "3x10-12", alt: ["cable strap adductors"] },
      { name: "Both Leg Extension", sets: "3x10-12", alt: ["1leg extension", "cable strap leg extension"] },
      { name: "Leg Press", sets: "3x10", alt: ["hack squat", "smith squat"] },
      { name: "Standing Calf Raise", sets: "2x12-15" },
      { name: "EZ Bar Curl", sets: "2x10-12", alt: ["1hand preachers", "machine bicep preachers"] },
      { name: "Cable Bicep Curl", sets: "2x12", alt: ["seated db bicep curl incline bench back support", "behind back bicep both hand curl"] }
    ],
    "Thursday": [
      { name: "DB Cable Abs", sets: "2x15", alt: ["sit-ups", "knee raises"] },
      { name: "DB Lateral Raises", sets: "3x10-12", alt: ["y raises", "incline bench db Y raises"] },
      { name: "Seated Overhead Press", sets: "3x8-10", alt: ["mid incline 45-60° smith press", "mid incline 45-60° DB press"] },
      { name: "Low Incline Smith Press", sets: "3x10-12", alt: ["low incline DB press", "low incline press machine"] },
      { name: "Cable Lateral Raise from Waist", sets: "2x15", alt: ["bent cable lateral raise", "lateral raises from knee height"] },
      { name: "Smith Machine Close-Grip Press", sets: "2x10", alt: ["tricep cable pushdown", "1DB both hand above head tricep extension"] }
    ],
    "Friday": [
      { name: "Neutral Grip Pulldown", sets: "3x10", alt: ["1hand pulldown", "cable pullover"] },
      { name: "Chest Supported Row", sets: "3x10-12", alt: ["t-bar", "lower cable row"] },
      { name: "Lat Row Close Neutral Grip", sets: "3x10-12", alt: ["SA lat row", "DB lat row"] },
      { name: "Upper Back Chest Support Machine", sets: "3x12", alt: ["upper back row", "teres pulldown"] },
      { name: "Rear Delt Cable Fly", sets: "2x15", alt: ["RD machine flies", "RD DB incline bench flies"] },
      { name: "Hammer Curl", sets: "2x12", alt: ["cable hammer curl", "preacher hammer curl"] },
      { name: "Cable Biceps", sets: "2x12", alt: ["behind back cable bicep", "seated back support incline bench bicep curl"] }
    ],
    "Saturday": [
      { name: "Adductors Machine", sets: "3x10-12", alt: ["leg strapped cable"] },
      { name: "Laying Hamstring Leg Curl", sets: "2x10-12", alt: ["seated hamstring curl", "laying on bench DB hamstring curl"] },
      { name: "RDL", sets: "3x8", alt: ["deadlift", "hip thrust machine"] },
      { name: "Both Leg Leg Extension", sets: "3x12", alt: ["single leg extension", "cable strapped leg extension"] },
      { name: "Leg Press", sets: "3x10-15", alt: ["hack squat", "pendulum squat"] },
      { name: "Straight Leg Calf Raises", sets: "2x12", alt: ["seated calf raises", "legpress calf raises"] },
      { name: "Cable Crunch", sets: "2x15", alt: ["sit-ups", "knee raises"] }
    ]
  },
  "5+": {
    "Monday": [
      { name: "Y Raises Cables", sets: "3x12-15", alt: ["DB y raise incline bench", "DB lateral raises"] },
      { name: "Machine Shoulder Press", sets: "3x10", alt: ["mid incline smith 45-60°", "DB mid incline press 45-60°"] },
      { name: "Low Incline Smith Press", sets: "3x10-12", alt: ["incline chest press machine", "low incline DB press"] },
      { name: "Cable Lateral Raise", sets: "2x15", alt: ["DB lateral raises", "bench DB y raises"] },
      { name: "Smith Machine Triceps", sets: "2x10", alt: ["tricep cable pushdown", "1DB both hand above head tricep extension"] }
    ],
    "Tuesday": [
      { name: "Neutral Grip Pulldown", sets: "3x10", alt: ["1hand pulldown", "cable pullover"] },
      { name: "Chest Supported Row", sets: "3x10", alt: ["T-bar", "lower cable row"] },
      { name: "Lat Row Close Neutral Grip", sets: "3x10-12", alt: ["SA lat row", "DB lat row"] },
      { name: "Upper Back Chest Support Machine", sets: "2x12", alt: ["upper back row", "teres pulldown"] },
      { name: "Rear Delt Cable Fly", sets: "2x15", alt: ["RD machine flies", "RD DB incline bench flies"] },
      { name: "Hammer Curl", sets: "2x12", alt: ["cable hammer curl", "preacher hammer curl"] },
      { name: "Cable Biceps", sets: "2x12", alt: ["behind back cable bicep", "seated back support incline bench bicep curl"] }
    ],
    "Wednesday": [
      { name: "Adductors Machine", sets: "3x10-12", alt: ["leg strapped cable"] },
      { name: "Laying Hamstring Leg Curl", sets: "2x10-12", alt: ["seated hamstring curl", "laying on bench DB hamstring curl"] },
      { name: "RDL", sets: "3x8", alt: ["deadlift", "hipthrust machine"] },
      { name: "Both Leg Leg Extension", sets: "3x12", alt: ["single leg extension", "cable strapped leg extension"] },
      { name: "Leg Press", sets: "3x10-15", alt: ["hack squat", "pendulum squat"] },
      { name: "Straight Leg Calf Raises", sets: "2x12", alt: ["seated calf raises", "legpress calf raises"] },
      { name: "Cable Crunch", sets: "2x15", alt: ["sit-ups", "knee raises"] }
    ],
    "Friday": [
      { name: "DB Lateral Raises", sets: "3x10-12", alt: ["DB y raise incline bench", "Y Raises cables"] },
      { name: "Chest Press", sets: "3x10", alt: ["benchpress", "flat bench DB press"] },
      { name: "Mid Incline Smith Press 45-60°", sets: "3x10-12", alt: ["shoulder press machine", "DB mid incline press 45-60°"] },
      { name: "Cable Lateral Raise", sets: "2x15", alt: ["DB lateral raises", "bench DB y raises"] },
      { name: "Tricep Cable Pushdown", sets: "2x10-12", alt: ["Smith Machine Triceps", "1DB both hands above head tricep extension"] }
    ],
    "Saturday": [
      { name: "Single Arm Lat Pulldown", sets: "3x10", alt: ["neutral grip pulldown", "cable pullover"] },
      { name: "T-bar Bend Grip", sets: "3x10", alt: ["Chest Supported Row", "lower cable row"] },
      { name: "Lat Row Close Neutral Grip", sets: "3x12", alt: ["SA lat row", "DB lat row"] },
      { name: "Upper Inverted Row DB", sets: "2x12", alt: ["upper back row chest support", "teres pulldown"] },
      { name: "Rear Delt Machine Flies", sets: "2x15", alt: ["RD-cables flies", "RD DB incline bench flies"] },
      { name: "Cable Hammer Curl Bicep", sets: "2x12", alt: ["DB-hammer curl bicep", "preacher hammer curl"] },
      { name: "Behind Back Cable Bicep", sets: "2x12", alt: ["cable bicep 1h", "seated back support incline bench bicep curl"] }
    ],
    "Sunday": [
      { name: "Cable Crunch", sets: "3x12-15", alt: ["knee raises", "sit-ups"] },
      { name: "Seated Knee Support Hamstring Curl Machine", sets: "3x10-12", alt: ["laying ham leg curls", "db ham curls"] },
      { name: "Adductor Machine", sets: "3x10-12", alt: ["cable strap adductors"] },
      { name: "Both Leg Extension", sets: "3x10-12", alt: ["1leg extension", "cable strap leg extension"] },
      { name: "Leg Press", sets: "3x10", alt: ["hack squat", "smith squat"] },
      { name: "Standing Calf Raise", sets: "2x12-15", alt: ["seated calf raise", "legpress calf raise"] },
      { name: "EZ Bar Curl", sets: "2x10-12", alt: ["1hand preachers", "machine bicep preachers"] },
      { name: "Triceps Cable Pushdown", sets: "2x12", alt: ["triceps cross cable", "smith triceps close grip"] }
    ]
  }
};
console.log("📤 trainingData loaded:", trainingData);
export default trainingData;
