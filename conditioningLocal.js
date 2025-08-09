// conditioningLocal.js

// --- Helpery pro kratší zápis ---
const ex = (name, reps, alts = []) => ({ name, reps, alternatives: alts });
const run = (type, duration, alt, description = "") => ({ type, duration, alternative: alt, description });

// --- GYM (celý objekt mimo export!) ---
const gym = {
  "1-2": {
    "Day 1": {
      warmup: ["3–5 min Light Cardio (Bike/Treadmill)", "10x Band Pull-Aparts", "10x Bodyweight Squats", "20s Plank Hold"],
      workout: {
        type: "EMOM", rounds: 3,
        exercises: [
          ex("Chest Press Machine", "12x", ["Dumbbell Bench Press", "Barbell Bench Press"]),
          ex("DB Walking Lunges", "20x total", ["Leg Press (moderate)", "Split Squats (DB)"]),
          ex("Hanging Knee Raises", "10x", ["Cable Crunch", "Decline Bench Leg Raises"]),
          ex("Sled Push (out + back)", "2x10–15 m", ["Assault Bike Sprint 20s", "Rowing Sprint 20s"]),
          ex("Plank Shoulder Taps", "30s", ["Front Plank 40s", "Side Plank 30s/side"])
        ]
      },
      running: run("Treadmill – Easy Run", "20–25 min", "Run 2/1 • Row easy 20–25 • Bike easy 20–25", "Easy pace, posture & breathing.")
    }
  },

  "3-4": {
    "Day 1": {
      warmup: ["Row/Bike 3–5 min EZ", "10x Band External Rotations/side", "10x Air Squats", "20s Plank Hold"],
      workout: {
        type: "Strength Block", rounds: 3,
        exercises: [
          ex("Dumbbell Bench Press", "12x", ["Chest Press Machine", "Barbell Bench Press"]),
          ex("Leg Press", "15x", ["Goblet Squat (DB/KB)", "Hack Squat"]),
          ex("Hanging Leg Raises", "10x", ["Cable Crunch", "Reverse Crunch"]),
          ex("Sled Push", "10–15 m", ["Prowler Push", "Assault Bike 20s HARD"]),
          ex("Plank Shoulder Taps", "30s", ["Front Plank 40s", "Dead Bug 10/side"])
        ]
      },
      running: run("Treadmill – Easy Run", "25–30 min", "Run 3/1 • Row easy 25–30 • Bike easy 25–30")
    },

    "Day 2": {
      warmup: ["Bike 3 min EZ", "10x Arm Swings", "10x Reverse Lunges", "20s Plank + 10x Shoulder Taps"],
      workout: {
        type: "EMOM 12", rounds: 3,
        exercises: [
          ex("Chest Press Machine", "12x", ["DB Bench Press", "Push-ups"]),
          ex("Goblet Squat", "15x", ["Leg Press (light)", "Hack Squat (light)"]),
          ex("Cable Knee Raises", "10x", ["Hanging Knee Raises", "Reverse Crunch"]),
          ex("Shoulder Taps", "20x", ["Plank 40s", "Bird Dog 10/side"])
        ]
      },
      finisher: { type: "Core Finisher", rounds: 2, exercises: ["40s Plank Hold", "10x Push-ups", "20x Cable Woodchoppers (light)", "10x Back Extension (3s top)"] }
    },

    "Day 3": {
      warmup: ["Treadmill 3 min EZ", "10x Inchworm to Plank", "20x Jumping Jacks", "10x Mountain Climbers"],
      workout: {
        type: "Strength Block", rounds: 3,
        exercises: [
          ex("Incline DB Press", "10x", ["Incline Machine Press", "Smith Incline Press"]),
          ex("Seated DB Shoulder Press", "10x", ["Shoulder Press Machine", "Landmine Press"]),
          ex("Bulgarian Split Squat (DB)", "12x/leg", ["Smith Split Squat", "Walking Lunges (DB)"]),
          ex("Cable Crunch", "15–20x", ["Hanging Knee Raises", "Ab Machine"])
        ]
      },
      running: { type: "Treadmill – Intervals", structure: ["200–300 m fast", "60s walk/full recovery"], description: "6 rounds", alternative: "Bike 6x30s hard/60s easy • Row 6x200m fast/recovery" }
    },

    "Day 4": {
      warmup: ["Mobility 5–8 min", "World's Greatest Stretch", "Downward Dog → Cobra"],
      workout: {
        type: "Core & Stability Circuit", rounds: "2–3",
        exercises: [
          ex("Side Plank", "30s each side", ["Cable Side Bend (light)", "Pallof Press 10/side"]),
          ex("Push-up to Plank", "10x", ["Low Plank Up-Downs", "DB Bench (light, tempo)"]),
          ex("Hanging Knee Raises", "20x", ["Ab Machine 15x", "Cable Crunch 20x"]),
          ex("Back Extension", "15x", ["Reverse Hyper", "Hip Extension (machine)"])
        ]
      },
      running: run("Recovery Walk/Run", "20–25 min", "Row easy 20–25 • Bike easy 20–25")
    }
  },

  "5": {
    "Day 1": {
      warmup: ["Bike 3–5 min EZ", "10x Band Pull-Aparts", "10x Squat to Stand", "20s Plank Hold"],
      workout: {
        type: "Strength Block", rounds: 3,
        exercises: [
          ex("DB Bench Press", "12x", ["Chest Press Machine", "BB Bench Press"]),
          ex("Leg Press", "15x", ["Goblet Squat", "Hack Squat"]),
          ex("Hanging Leg Raises", "10x", ["Cable Crunch", "Reverse Crunch"]),
          ex("Sled Push", "10–15 m", ["Assault Bike 20s", "Row 20s"]),
          ex("Plank Shoulder Taps", "30s", ["Front Plank 40s", "Dead Bug 10/side"])
        ]
      },
      running: run("Treadmill – Easy Run", "25–30 min", "Row easy 25–30 • Bike easy 25–30")
    },

    "Day 2": {
      warmup: ["Bike 3 min EZ", "10x Arm Swings", "10x Reverse Lunges", "20s Plank + 10x Shoulder Taps"],
      workout: {
        type: "EMOM 12 (3x4)", rounds: 3,
        exercises: [
          ex("Chest Press Machine", "12x", ["DB Bench Press", "Push-ups"]),
          ex("Goblet Squat", "15x", ["Leg Press (light)", "Hack Squat (light)"]),
          ex("Cable Knee Raises", "10x", ["Hanging Knee Raises", "Reverse Crunch"]),
          ex("Shoulder Taps", "20x", ["Plank 40s", "Bird Dog 10/side"])
        ]
      },
      finisher: { type: "Core Finisher", rounds: 2, exercises: ["40s Plank Hold", "10x Push-ups", "20x Cable Woodchoppers", "10x Back Extension (3s each)"] }
    },

    "Day 3": {
      warmup: ["Treadmill 3 min EZ", "10x Inchworms", "20x Jumping Jacks", "10x Mountain Climbers"],
      workout: {
        type: "Strength Block", rounds: 3,
        exercises: [
          ex("Incline DB Press", "10x", ["Incline Machine Press", "Smith Incline"]),
          ex("Seated DB Shoulder Press", "10x", ["Shoulder Press Machine", "Landmine Press"]),
          ex("Step-back Lunges (DB)", "15x total", ["Bulgarian Split Squat", "Walking Lunges"]),
          ex("Cable Crunch", "20x", ["Hanging Knee Raises", "Ab Machine"])
        ]
      },
      running: run("Treadmill – Speed Intervals", "6 rounds", "Bike 6x30s hard/60s easy • Row 6x200m fast/recovery", "200–300 m fast, 60s walk/jog")
    },

    "Day 4": {
      warmup: ["Mobility 5–8 min", "Deep Lunge Stretch", "Downward Dog → Cobra"],
      workout: {
        type: "Core & Control", rounds: 2,
        exercises: [
          ex("Side Plank", "30s each side", ["Pallof Press 10/side", "Cable Side Bend (light)"]),
          ex("Push-up to Plank", "10x", ["Up-Down Plank", "DB Bench (light)"]),
          ex("Hanging Knee Raises", "20x", ["Ab Machine 15x", "Cable Crunch 20x"]),
          ex("Back Extension", "15x", ["Reverse Hyper", "Hip Extension (machine)"])
        ]
      },
      running: run("Light Jog / Walk", "20–25 min", "Row easy 20–25 • Bike easy 20–25")
    },

    "Day 5": {
      warmup: ["Bike 3–5 min EZ", "10x Reverse Lunges (BW)", "5x Inchworm to Plank", "20s Plank Hold"],
      workout: {
        type: "Full Body Circuit", rounds: 3,
        exercises: [
          ex("DB Bench Press", "10–12x", ["Machine Chest Press", "Push-ups"]),
          ex("Leg Press", "20x", ["Hack Squat", "Goblet Squat"]),
          ex("Hanging Leg Raises", "10x", ["Cable Crunch", "Toe-to-Bar (scaled)"]),
          ex("Jump Lunges", "10x", ["Split Squats (DB)", "Step-ups (DB)"]),
          ex("Plank Hold", "30–40s", ["Side Plank 30s/side", "Pallof Press 10/side"])
        ]
      },
      running: run("Tempo Run", "20–25 min", "Bike 2'/2' x5 • Row 2'/2' x5", "5' EZ → 10–12' tempo → 5' cooldown")
    }
  },

  "5+": {
    "Day 1": {
      warmup: ["Row 3–5 min EZ", "10x Band Pull-Aparts", "10x Air Squats", "20s Plank Hold"],
      workout: {
        type: "Strength Block", rounds: 3,
        exercises: [
          ex("DB Bench Press", "12x", ["Machine Chest Press", "BB Bench Press"]),
          ex("Leg Press", "15x", ["Goblet Squat", "Hack Squat"]),
          ex("Hanging Leg Raises", "10x", ["Cable Crunch", "Reverse Crunch"]),
          ex("Sled Push", "10–15 m", ["Assault Bike 20s", "Row 20s"]),
          ex("Plank Shoulder Taps", "30s", ["Front Plank 40s", "Dead Bug 10/side"])
        ]
      },
      running: run("Easy Run (Treadmill)", "25–30 min", "Row easy 25–30 • Bike easy 25–30", "Relaxed Z2")
    },

    "Day 2": {
      warmup: ["Bike 3 min EZ", "10x Arm Swings", "10x Reverse Lunges", "30s Plank + 10x Shoulder Taps"],
      workout: {
        type: "EMOM 12", rounds: 3,
        exercises: [
          ex("Chest Press Machine", "12x", ["DB Bench Press", "Push-ups"]),
          ex("Goblet Squat", "15x", ["Leg Press (light)", "Hack Squat (light)"]),
          ex("Cable Knee Raises", "10x", ["Hanging Knee Raises", "Reverse Crunch"]),
          ex("Shoulder Taps", "20x", ["Plank 40s", "Bird Dog 10/side"])
        ]
      },
      finisher: { type: "Core Finisher", rounds: 2, exercises: ["40s Plank Hold", "10x Push-ups", "20x Cable Woodchoppers", "10x Back Extension (3s each)"] }
    },

    "Day 3": {
      warmup: ["Treadmill 3 min EZ", "10x Inchworms", "20x Jumping Jacks", "10x Arm Swings"],
      workout: {
        type: "Strength Block", rounds: 3,
        exercises: [
          ex("Incline DB Press", "10x", ["Incline Machine Press", "Smith Incline"]),
          ex("Seated DB Shoulder Press", "10x", ["Shoulder Press Machine", "Landmine Press"]),
          ex("Step-back Lunges (DB)", "15x total", ["Bulgarian Split Squat", "Walking Lunges"]),
          ex("Cable Crunch", "20x", ["Hanging Knee Raises", "Ab Machine"])
        ]
      },
      running: run("Speed Intervals", "6 rounds", "Bike 6x30s hard/60–90s easy • Row 6x200m fast/recovery", "200–300 m fast + 60–90s walk")
    },

    "Day 4": {
      warmup: ["Mobility 5–8 min", "Dynamic Leg Swings", "Downward Dog → Cobra"],
      workout: {
        type: "Core Stability", rounds: 2,
        exercises: [
          ex("Side Plank", "30s each side", ["Pallof Press 10/side", "Cable Side Bend (light)"]),
          ex("Push-up to Plank", "10x", ["Up-Down Plank", "DB Bench (light, tempo)"]),
          ex("Hanging Knee Raises", "20x", ["Ab Machine 15x", "Cable Crunch 20x"]),
          ex("Back Extension", "15x", ["Reverse Hyper", "Hip Extension (machine)"])
        ]
      },
      running: run("Light Jog / Walk", "20–30 min", "Row easy 20–30 • Bike easy 20–30", "Z1–Z2, active recovery")
    },

    "Day 5": {
      warmup: ["Bike 3–5 min EZ", "10x Reverse Lunges (BW)", "5x Inchworm", "30s Plank Hold"],
      workout: {
        type: "Full Body Push Circuit", rounds: 3,
        exercises: [
          ex("DB Bench Press", "12x", ["Machine Chest Press", "Push-ups"]),
          ex("Leg Press", "20x", ["Hack Squat", "Goblet Squat"]),
          ex("Hanging Leg Raises", "10x", ["Cable Crunch", "Toe-to-Bar (scaled)"]),
          ex("Jump Lunges", "10x", ["Split Squats (DB)", "Step-ups (DB)"]),
          ex("Plank with Shoulder Taps", "30s", ["Plank 40s", "Side Plank 30s/side"])
        ]
      },
      running: run("Tempo Run", "22–25 min", "Bike 2'/2' x5 • Row 2'/2' x5", "5' EZ → 12–15' tempo → 5' cooldown")
    },

    "Day 6": {
      warmup: ["Light mobility 5 min", "Wrist warm-up", "Shoulder rotations"],
      workout: { type: "Push-up Challenge + Core (Gym Adapt)", rounds: 1, exercises: [ ex("Assisted Dip/Push Machine Ladder", "1–2–3–4–5… to technical limit", ["Smith Push-up Ladder", "Knee Push-ups Ladder"]) ] },
      core: { type: "Core Burn", rounds: 2, exercises: ["20x Cable Woodchoppers", "10x Hanging Leg Raises", "10x V-ups", "1 min Plank"] },
      cooldown: { type: "Stretch", duration: "5–10 min", focus: ["Chest", "Shoulders", "Hips", "Hamstrings"] }
    }
  }
};

// --- TADY vlož celý svůj existující blok `bodyweight` ---
// const bodyweight = { ... }  // (nebo necháš přímo inline v exportu níže)

// --- Export ---
export const conditioningFrequencies = {
  bodyweight: { /* vlož svůj dlouhý BODYWEIGHT blok sem */ },
  gym
};

export default conditioningFrequencies;
