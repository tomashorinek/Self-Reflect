// 🏠 Get Stronger – Home Training Plan
// Frequency: 1–2 Days/Week, 3–4 Days/Week, 5 Days/Week

const trainingDataCalisthenics = {
  strong: {
    "1-2": {
      "Monday": [
        { name: "Resistance Band Triceps Extensions", sets: "1x10-12", alt: ["Bench Dips", "Overhead Band Extensions"] },
        { name: "Wall Lat Stretch Pulldown", sets: "1x10", alt: ["Band Lat Pulldown", "Bodyweight Pullover Floor Slides"] },
        { name: "Weighted Push-ups (Backpack)", sets: "4x3-6", alt: ["Feet-Elevated Push-ups", "Slow Tempo Push-ups"] },
        { name: "Pull-ups", sets: "2x8", alt: ["Towel Pull-ups", "Band Assisted Pull-ups"] },
        { name: "Chair-Supported Rows", sets: "3x10-12", alt: ["Table Inverted Rows", "Band Rows"] },
        { name: "Glute Bridge Curl on Towel/Floor", sets: "3x12-10", alt: ["Single Leg Glute Bridge", "Hamstring Slides"] },
        { name: "Backpack Step-ups", sets: "3x8", alt: ["Bulgarian Split Squat", "Wall Sit Weighted"] },
        { name: "Controlled Tempo Crunches", sets: "2x15", alt: ["Hollow Hold", "Band Kneeling Crunch"] }
      ],
      "Thursday": [
        { name: "Push-ups", sets: "3x12", alt: ["Incline Push-ups", "Kneeling Push-ups"] },
        { name: "Resistance Band Rows", sets: "3x12", alt: ["Towel Rows", "Table Rows"] },
        { name: "Pull UP home bar", sets: "3x10", alt: ["Negative Pull-up", "Home-made Lat Pulldown"] },
        { name: "Incline Backpack Press", sets: "3x10", alt: ["Push-ups", "Wall Push-ups"] },
        { name: "Chair Dips", sets: "3x10", alt: ["Close Push-ups", "Band Triceps Extensions"] },
        { name: "Plank Variations", sets: "2x40s", alt: ["Side Plank", "Plank with Reach"] }
      ]
    },

    "3-4": {
      "Monday": [
        { name: "Band Lateral Raise", sets: "1x12-15 (warm-up)", alt: ["DB Side Raise", "Y-Raise on Wall"] },
        { name: "Resistance Band Pulldown", sets: "1x10 (pre-activation)", alt: ["Door Pulldown", "Pullover Floor Slide"] },
        { name: "Weighted Backpack Push-up", sets: "4x3-6", alt: ["Feet-Elevated Push-ups", "Slow Tempo Push-ups"] },
        { name: "Pull-ups", sets: "2x8", alt: ["Towel Pull-ups", "Band Assisted Pull-ups"] },
        { name: "Band Lateral Raise", sets: "2x15", alt: ["Wall Y-Raise", "Chair Supported Side Raise"] },
        { name: "Overhead Backpack Press", sets: "3x10", alt: ["Pike Push-up", "Wall Press"] },
        { name: "Resistance Band Triceps Extensions", sets: "3x10-12", alt: ["Bench Dips", "Overhead Extensions"] },
        { name: "Bodyweight Crunches", sets: "2x15", alt: ["Hollow Rock", "Leg Raises"] }
      ],
      "Tuesday": [
        { name: "Glute Bridge Curl on Floor", sets: "1x12", alt: ["Single Leg Curl", "Ham Walkouts"] },
        { name: "Wall Sit Hold (Quad Activation)", sets: "1x10-12", alt: ["Leg Extension Hold", "Step-up Hold"] },
        { name: "Weighted Glute Bridge on Chair", sets: "4x3-6", alt: ["Hip Thrust (Backpack)", "Feet Elevated Bridge"] },
        { name: "Glute Bridge Curl", sets: "2x10", alt: ["Ham Slides", "Swiss Ball Curl"] },
        { name: "Step-ups with Backpack", sets: "3x10", alt: ["Wall Sit Weighted", "Split Squat"] },
        { name: "Backpack RDL", sets: "3x10", alt: ["Band Good Morning", "Tempo RDL"] },
        { name: "Calf Raise on Step", sets: "3x15", alt: ["Wall Calf Raise", "Isometric Hold"] },
        { name: "Bodyweight Crunches", sets: "2x15", alt: ["Hollow Hold", "Leg Raises"] }
      ],
      "Thursday": [
        { name: "Rear Delt Raise (Band or DB)", sets: "1x15 (warm-up)", alt: ["Wall Slides", "Reverse Fly"] },
        { name: "Band Lat Pulldown", sets: "1x10 (pre-activation)", alt: ["Pullover Floor Slide", "Dead Hang"] },
        { name: "Weighted Pull-ups (Backpack)", sets: "4x3-6", alt: ["Negative Pull-up", "Home-made Lat Pulldown"] },
        { name: "Chair-Supported Row", sets: "2x12", alt: ["Band Row", "Inverted Row"] },
        { name: "Rear Delt Fly", sets: "2x15", alt: ["Wall Slide Reverse Raise", "T Raise on Floor"] },
        { name: "Incline Backpack Curl", sets: "3x10", alt: ["Hammer Curl", "Band Curl"] },
        { name: "Concentration Curl", sets: "2x12", alt: ["Incline DB Curl", "Reverse Curl"] },
        { name: "Kneeling Band Crunch", sets: "2x15", alt: ["Sit-ups", "Leg Raises"] }
      ],
      "Friday": [
        { name: "Wall Sit Hold (Quad Activation)", sets: "1x12", alt: ["Step-Up Hold", "Split Squat Hold"] },
        { name: "Hamstring Slides (Towel or Floor)", sets: "1x12", alt: ["Glute Bridge Curl", "Single Leg Curl"] },
        { name: "Heavy Backpack Squats", sets: "4x4-6", alt: ["Bodyweight Squats", "Split Squats"] },
        { name: "Step-ups", sets: "3x10/leg", alt: ["Split Squats", "Chair Squats"] },
        { name: "Backpack Romanian Deadlifts", sets: "3x10-12", alt: ["Good Mornings", "Single Leg Deadlift"] },
        { name: "Glute Bridge", sets: "3x15", alt: ["Single Leg Glute Bridge", "Hip Thrust on Couch"] },
        { name: "Calf Raises (Step/Edge)", sets: "3x20", alt: ["Single Leg Calf Raise", "Wall Calf Push"] },
        { name: "Leg Raises + Plank", sets: "2x (15 reps + 45s)", alt: ["Mountain Climbers", "Hollow Hold"] }
      ]
    },

    "5": {
      "Monday": [
        { name: "Band Lateral Raise", sets: "1x15", alt: ["Wall Side Raise", "Empty Bottle Raise"] },
        { name: "Wall Lat Slide Pulldown", sets: "1x10", alt: ["Pullover Floor Slide", "Door Band Pulldown"] },
        { name: "Weighted Backpack Push-ups", sets: "4x3-6", alt: ["Feet-Elevated Push-ups", "Tempo Push-ups"] },
        { name: "Overhead Backpack Press", sets: "3x10", alt: ["Pike Push-up", "Wall Press"] },
        { name: "Incline Backpack Press", sets: "3x10", alt: ["Incline Push-ups", "Floor Press"] },
        { name: "Chair Dips", sets: "3x12", alt: ["Band Extensions", "Bench Dips"] },
        { name: "Kneeling Crunches", sets: "2x15", alt: ["Leg Raises", "Sit-ups"] }
      ],
      "Tuesday": [
        { name: "Wall Sit Isometric Hold", sets: "1x15s", alt: ["Bodyweight Hold", "Split Squat Hold"] },
        { name: "Hamstring Floor Curls", sets: "1x12", alt: ["Single Leg Curl", "Bridge Curl"] },
        { name: "Heavy Backpack Squats", sets: "4x3-6", alt: ["Bodyweight Squats", "Split Squats"] },
        { name: "Step-ups", sets: "3x10/leg", alt: ["Split Squats", "Chair Squats"] },
        { name: "Backpack Romanian Deadlifts", sets: "3x10-12", alt: ["Good Mornings", "Single Leg Deadlift"] },
        { name: "Calf Raise (Step/Wall)", sets: "3x15", alt: ["Single Leg Calf Raise", "Wall Push Calf"] },
        { name: "Leg Raises + Plank", sets: "2x (15 reps + 45s)", alt: ["Mountain Climbers", "Hollow Hold"] }
      ],
      "Wednesday": [
        { name: "Band Rear Delt Raise", sets: "1x15", alt: ["Reverse Wall Slide", "T Raise"] },
        { name: "Band Pulldown", sets: "1x10", alt: ["Dead Hang", "Pullover Floor Slide"] },
        { name: "Weighted Pull-ups (Backpack)", sets: "4x3-6", alt: ["Negative Pull-up", "Lat Pulldown Band"] },
        { name: "Chair-Supported Rows", sets: "3x10", alt: ["Band Row", "Table Row"] },
        { name: "Rear Delt Raise", sets: "2x15", alt: ["Wall Fly", "Prone T Raise"] },
        { name: "Incline Backpack Curl", sets: "3x10", alt: ["Band Curl", "Hammer Curl"] },
        { name: "Kneeling Band Crunch", sets: "2x15", alt: ["Sit-ups", "Leg Raises"] }
      ],
      "Thursday": [
        { name: "Wall Sit (Warm-up)", sets: "1x15s", alt: ["Split Squat Hold", "Step-Up Hold"] },
        { name: "Hamstring Floor Curl", sets: "1x10", alt: ["Bridge Curl", "Single Leg Curl"] },
        { name: "Weighted Glute Bridge (Chair)", sets: "4x3-6", alt: ["Hip Thrust Backpack", "Feet Elevated Bridge"] },
        { name: "Bridge Curl", sets: "2x12", alt: ["Ham Slides", "Glute March"] },
        { name: "Step-ups (Backpack)", sets: "3x10", alt: ["Split Squats", "Chair Squats"] },
        { name: "Backpack Good Morning", sets: "3x10", alt: ["Band GM", "Tempo RDL"] },
        { name: "Seated Calf Raise on Step", sets: "3x15", alt: ["Wall Calf", "Hold Raise"] },
        { name: "Crunches + Plank", sets: "2x (15 reps + 45s)", alt: ["Leg Raises", "Hollow Hold"] }
      ],
      "Friday": [
        { name: "Band Lateral Raise (Warm-up)", sets: "1x15", alt: ["Wall Raise", "Chair Side Raise"] },
        { name: "Pullover Slide (Activation)", sets: "1x10", alt: ["Lat Band Pull", "Floor Slide"] },
        { name: "decline added weight pushup", sets: "4x3-6", alt: ["incline backpack press", " Push-up"] },
        { name: "Overhead Backpack Press", sets: "3x10", alt: ["Wall Press", "Pike Push-up"] },
        { name: "Chair Dips", sets: "3x12", alt: ["Triceps Band", "Bench Dip"] },
        { name: "Side Raise (Band)", sets: "2x15", alt: ["Wall Raise", "Bottle Raise"] },
        { name: "Kneeling Crunches", sets: "2x15", alt: ["Sit-ups", "Leg Raises"] }
      ]
    },

"5+": {
      "Monday": [
        { name: "Band Lateral Raise", sets: "1x15", alt: ["Wall Side Raise", "Bottle Raise"] },
        { name: "Pullover Slide", sets: "1x10", alt: ["Wall Pulldown", "Lat Stretch"] },
        { name: "Weighted Backpack Push-ups", sets: "4x3-6", alt: ["Feet-Elevated Push-ups", "Tempo Push-ups"] },
        { name: "Incline Backpack Press", sets: "3x10", alt: ["Push-ups", "Floor Press"] },
        { name: "Overhead Backpack Press", sets: "3x10", alt: ["Pike Push-up", "Wall Press"] },
        { name: "Band Lateral Raise", sets: "2x15", alt: ["Wall Raise", "Bottle Side Raise"] },
        { name: "Chair Dips", sets: "3x10", alt: ["Triceps Band", "Bench Dip"] },
        { name: "Kneeling Crunches", sets: "2x15", alt: ["Leg Raises", "Sit-ups"] }
      ],
      "Tuesday": [
        { name: "Band Rear Delt Raise", sets: "1x15", alt: ["Reverse Wall Slide", "T Raise"] },
        { name: "Band Pulldown", sets: "1x10", alt: ["Dead Hang", "Pullover Floor Slide"] },
        { name: "Weighted Pull-ups (Backpack)", sets: "4x3-6", alt: ["Negative Pull-up", "Lat Pulldown Band"] },
        { name: "Chair-Supported Rows", sets: "3x10", alt: ["Band Row", "Table Row"] },
        { name: "Rear Delt Raise", sets: "2x15", alt: ["Wall Fly", "Prone T Raise"] },
        { name: "Incline Backpack Curl", sets: "3x10", alt: ["Band Curl", "Hammer Curl"] },
        { name: "Kneeling Band Crunch", sets: "2x15", alt: ["Sit-ups", "Leg Raises"] }
      ],
      "Wednesday": [
        { name: "Wall Sit Hold", sets: "1x15s", alt: ["Split Squat Hold", "Step-Up Hold"] },
        { name: "Hamstring Curl Floor", sets: "1x12", alt: ["Glute Bridge Curl", "Single Leg Curl"] },
        { name: "Heavy Backpack Squats", sets: "4x3-6", alt: ["Bodyweight Squats", "Split Squats"] },
        { name: "Step-ups", sets: "3x10/leg", alt: ["Split Squats", "Chair Squats"] },
        { name: "Backpack Romanian Deadlifts", sets: "3x10-12", alt: ["Good Mornings", "Single Leg Deadlift"] },
        { name: "Calf Raise on Step", sets: "3x15", alt: ["Wall Calf Raise", "Hold Raise"] },
        { name: "Leg Raises + Plank", sets: "2x (15 reps + 45s)", alt: ["Mountain Climbers", "Hollow Hold"] }
      ],
      "Thursday": [
        { name: "Band Lateral Raise", sets: "1x15", alt: ["Wall Side Raise", "Bottle Raise"] },
        { name: "Pullover Slide", sets: "1x10", alt: ["Lat Band Pull", "Floor Slide"] },
        { name: "Decline Weighted Push-up", sets: "4x3-6", alt: ["Incline Backpack Press", "Push-up"] },
        { name: "Overhead Backpack Press", sets: "3x10", alt: ["Wall Press", "Pike Push-up"] },
        { name: "Chair Dips", sets: "3x12", alt: ["Triceps Band", "Bench Dip"] },
        { name: "Side Raise (Band)", sets: "2x15", alt: ["Wall Raise", "Bottle Raise"] },
        { name: "Kneeling Crunches", sets: "2x15", alt: ["Sit-ups", "Leg Raises"] }
      ],
      "Friday": [
        { name: "Rear Delt Raise Wall", sets: "1x15", alt: ["Band Reverse Fly", "Y Raise"] },
        { name: "Band Pulldown", sets: "1x10", alt: ["Dead Hang", "Floor Slide"] },
        { name: "Weighted Pull-ups (Backpack)", sets: "4x3-6", alt: ["Negative Pull-up", "Lat Band Pull"] },
        { name: "Chair Row", sets: "3x10", alt: ["Band Row", "Towel Row"] },
        { name: "Rear Delt Raise", sets: "2x15", alt: ["Wall Slide Reverse", "T Raise"] },
        { name: "Incline Backpack Curl", sets: "3x10", alt: ["Band Curl", "Hammer Curl"] },
        { name: "Crunch Hold + Leg Raises", sets: "2x (20s Hold + 15 reps)", alt: ["Hollow Hold", "Sit-ups"] }
      ],
      "Saturday": [
        { name: "Wall Sit (Activation)", sets: "1x15s", alt: ["Split Squat Hold", "Step-Up Hold"] },
        { name: "Hamstring Slide Curl", sets: "1x12", alt: ["Single Leg Curl", "Bridge Walkout"] },
        { name: "Weighted Glute Bridge on Chair", sets: "4x3-6", alt: ["Feet Elevated Bridge", "Hip Thrust Backpack"] },
        { name: "Bridge Curl", sets: "2x10", alt: ["Ham Walkout", "Single Leg Slide"] },
        { name: "Step-ups", sets: "3x10", alt: ["Split Squat", "Chair Squat"] },
        { name: "Romanian Deadlift (Backpack)", sets: "3x10-12", alt: ["Good Morning", "Single Leg RDL"] },
        { name: "Calf Raise", sets: "3x20", alt: ["Wall Push Calf", "Isometric Hold"] },
        { name: "Crunches + Plank", sets: "2x (15 reps + 45s)", alt: ["Leg Raises", "Mountain Climbers"] }
      ]
    }
  }
};

export default trainingDataCalisthenics;
