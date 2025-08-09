// conditioningLocal.js — FINAL (no ES exports)
(function () {
  'use strict';

  // helpers
  const ex  = (name, reps, alts = []) => ({ name, reps, alternatives: alts });
  const run = (type, duration, alt, description = "") =>
    ({ type, duration, alternative: alt, description });

  // ---------- GYM ----------
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

  // ---------- BODYWEIGHT ----------
  const bodyweight = {
    "1-2": {
      "Day 1": {
        warmup: ["20x Jumping Jacks", "10x Arm Circles (each direction)", "10x Air Squats", "30s Plank Hold"],
        workout: { type: "EMOM", rounds: 3, exercises: [
          { name: "Push-ups", reps: "12x", description: "A bodyweight chest press that also targets the triceps and shoulders.", alternatives: ["Knee Push-ups", "Incline Push-ups"] },
          { name: "Lunges", reps: "20x", description: "Stepping forward with one leg to work quads, hamstrings, and glutes.", alternatives: ["Step-ups", "Split Squats"] },
          { name: "Leg Raises", reps: "10x", description: "Lying flat, lifting legs to work lower abs.", alternatives: ["Reverse Crunches", "V-Ups"] },
          { name: "Bear Crawl (forward + back)", reps: "10x", description: "A core and coordination-focused move using all four limbs to crawl.", alternatives: ["Crab Walk", "Mountain Climbers"] },
          { name: "Plank Shoulder Taps", reps: "30s", description: "From plank position, alternate tapping shoulders to work core stability.", alternatives: ["Plank Hold", "Bird Dog"] }
        ]},
        running: { type: "Easy Run", duration: "20–25 min", description: "Light run focused on technique, posture, and relaxed breathing.", alternative: "2 min run / 1 min walk" }
      }
    },

    "3-4": {
      "Day 1": {
        warmup: ["20x Jumping Jacks", "10x Arm Circles (each direction)", "10x Air Squats", "30s Plank Hold"],
        workout: { type: "Strength Block", rounds: 3, exercises: [
          { name: "Push-ups", reps: "12x", description: "A bodyweight chest press that also targets the triceps and shoulders.", alternatives: ["Knee Push-ups", "Incline Push-ups"] },
          { name: "Air Squats", reps: "15x", description: "A lower body exercise targeting quads, hamstrings, and glutes.", alternatives: ["Wall Sit", "Chair Squats"] },
          { name: "V-ups / Leg Raises", reps: "10x", description: "Core-focused movement, lifting legs or combining with crunch for full-body engagement.", alternatives: ["Toe Touches", "Crunches"] },
          { name: "Bear Crawl (forward + back)", reps: "10x", description: "A core and coordination-focused move using all four limbs to crawl.", alternatives: ["Crab Walk", "Mountain Climbers"] },
          { name: "Plank Shoulder Taps", reps: "30s", description: "From plank position, alternate tapping shoulders to work core stability.", alternatives: ["Plank Hold", "Bird Dog"] }
        ]},
        running: { type: "Easy Run", duration: "25–30 min", description: "Light run focused on breathing, posture, and a relaxed rhythm.", alternative: "3 min run / 1 min walk" }
      },
      "Day 2": {
        warmup: ["20x High Knees", "10x Arm Swings", "10x Reverse Lunges", "20s Plank + 10x Shoulder Taps"],
        workout: { type: "EMOM", rounds: 3, exercises: [
          { name: "Push-ups", reps: "12x", description: "A bodyweight chest press…", alternatives: ["Incline Push-ups", "Knee Push-ups"] },
          { name: "Air Squats", reps: "15x", description: "Lower body…", alternatives: ["Wall Sit", "Chair Squats"] },
          { name: "Leg Raises", reps: "10x", description: "Lower core…", alternatives: ["Flutter Kicks", "Reverse Crunch"] },
          { name: "Shoulder Taps", reps: "20x", description: "Core stability…", alternatives: ["Plank Hold", "Bird Dog"] }
        ]},
        finisher: { type: "Core Finisher", rounds: 2, exercises: ["40s Plank Hold", "10x Push-ups", "20x Russian Twists", "10x Superman Hold (3s each)"] }
      },
      "Day 3": {
        warmup: ["10x Arm Circles", "10x Inchworm to Plank", "20x Jumping Jacks", "10x Mountain Climbers"],
        workout: { type: "Strength Block", rounds: 3, exercises: [
          { name: "Push-ups", reps: "10x", description: "Classic upper body…", alternatives: ["Knee Push-ups", "Incline Push-ups"] },
          { name: "Pike Push-ups", reps: "10x", description: "Shoulders/upper chest…", alternatives: ["Incline Pike Push-ups", "Wall Handstand Hold"] },
          { name: "Split Squats", reps: "15x each leg", description: "Unilateral legs…", alternatives: ["Step-ups", "Bulgarian Split Squats"] },
          { name: "Bicycle Crunches", reps: "20x", description: "Core/obliques…", alternatives: ["Toe Touches", "Russian Twists"] }
        ]},
        running: { type: "Interval Run", description: "6 rounds of fast intervals with full recovery in between.", structure: ["200–300 m fast run", "60s walk / full recovery"] }
      },
      "Day 4": {
        warmup: ["Arm and Hip Circles", "World's Greatest Stretch", "Downward Dog to Cobra"],
        workout: { type: "Core & Stability Circuit", rounds: "2–3", exercises: [
          { name: "Side Plank", reps: "30s each side", description: "Obliques/lateral stability…", alternatives: ["Side Plank with Reach", "Knee Side Plank"] },
          { name: "Push-up to Plank", reps: "10x", description: "Core + shoulders…", alternatives: ["Plank Up-Downs", "Modified Push-up to Plank"] },
          { name: "Leg Raises", reps: "20x", description: "Lower abs…", alternatives: ["Flutter Kicks", "Reverse Crunches"] },
          { name: "Superman Reaches", reps: "15x", description: "Lower back/posterior chain…", alternatives: ["Bird Dog", "Cobra Raises"] }
        ]},
        running: { type: "Recovery Run or Walk", duration: "20–25 min", description: "Active recovery.", alternative: "2 min jog / 1 min walk" }
      }
    },

    "5": {
      "Day 1": {
        warmup: ["20x Jumping Jacks", "10x Arm Circles (each direction)", "10x Air Squats", "30s Plank Hold"],
        workout: { type: "Strength Block", rounds: 3, exercises: [
          { name: "Push-ups", reps: "12x", description: "A bodyweight chest press that also targets the triceps and shoulders.", alternatives: ["Knee Push-ups", "Incline Push-ups"] },
          { name: "Air Squats", reps: "15x", description: "A lower body exercise targeting quads, hamstrings, and glutes.", alternatives: ["Wall Sit", "Chair Squats"] },
          { name: "V-ups or Leg Raises", reps: "10x", description: "Core-focused movement for strengthening the lower and upper abdominal area.", alternatives: ["Crunches", "Toe Touches"] },
          { name: "Bear Crawl (forward + back)", reps: "10x", description: "A core and coordination-focused move using all four limbs to crawl.", alternatives: ["Crab Walk", "Mountain Climbers"] },
          { name: "Plank Shoulder Taps", reps: "30s", description: "From plank position, alternate tapping shoulders to work core stability.", alternatives: ["Plank Hold", "Bird Dog"] }
        ]},
        running: { type: "Easy Run", duration: "25–30 min", description: "Light run focused on posture, breathing, and a relaxed rhythm.", alternative: "3 min run / 1 min walk" }
      },
      "Day 2": {
        warmup: ["20x High Knees", "10x Arm Swings", "10x Reverse Lunges", "20s Plank + 10x Shoulder Taps"],
        workout: { type: "EMOM", rounds: 3, exercises: [
          { name: "Push-ups", reps: "12x", description: "A bodyweight chest press that also targets the triceps and shoulders.", alternatives: ["Incline Push-ups", "Knee Push-ups"] },
          { name: "Air Squats", reps: "15x", description: "A lower body exercise targeting quads, hamstrings, and glutes.", alternatives: ["Wall Sit", "Chair Squats"] },
          { name: "Leg Raises", reps: "10x", description: "An abdominal movement that targets the lower core.", alternatives: ["Flutter Kicks", "Reverse Crunch"] },
          { name: "Shoulder Taps", reps: "20x", description: "Alternating shoulder taps in a plank position to build stability and shoulder strength.", alternatives: ["Plank Hold", "Bird Dog"] }
        ]},
        finisher: { type: "Core Finisher", rounds: 2, exercises: ["40s Plank Hold", "10x Push-ups", "20x Russian Twists", "10x Superman Hold (3s each)"] }
      },
      "Day 3": {
        warmup: ["10x Arm Circles", "10x Inchworm to Plank", "20x Jumping Jacks", "10x Mountain Climbers"],
        workout: { type: "Strength Block", rounds: 3, exercises: [
          { name: "Push-ups", reps: "10x", description: "Classic upper body movement working chest, shoulders, and triceps.", alternatives: ["Knee Push-ups", "Incline Push-ups"] },
          { name: "Pike Push-ups (or Incline Push-ups)", reps: "10x", description: "Targets shoulders and upper chest with bodyweight resistance.", alternatives: ["Shoulder Tap Push-ups", "Wall Pike Push-ups"] },
          { name: "Step-back Lunges", reps: "15x", description: "Lunge variation focusing on glutes, quads, and stability.", alternatives: ["Forward Lunges", "Walking Lunges"] },
          { name: "Bicycle Crunches", reps: "20x", description: "Dynamic core exercise hitting obliques and rectus abdominis.", alternatives: ["Dead Bug", "Toe Touches"] }
        ]},
        running: { type: "Speed Intervals", duration: "6 rounds", description: "200–300 m fast run followed by 60s walk or jog. Focus on clean form and speed.", alternative: "Short sprints with walk back recovery" }
      },
      "Day 4": {
        warmup: ["Arm and Hip Circles", "Deep Lunge Stretch", "Downward Dog to Cobra"],
        workout: { type: "Core & Control", rounds: 2, exercises: [
          { name: "Side Plank", reps: "30s each side", description: "Static core hold for oblique activation and trunk stability.", alternatives: ["Knee Side Plank", "Forearm Side Plank"] },
          { name: "Push-up to Plank", reps: "10x", description: "Upper body and core coordination exercise moving between plank and push-up.", alternatives: ["Up-Down Plank", "Kneeling Push-up to Plank"] },
          { name: "Leg Raises", reps: "20x", description: "Lower abdominal isolation movement.", alternatives: ["Flutter Kicks", "Lying Toe Touches"] },
          { name: "Superman Reach", reps: "15x", description: "Posterior chain activation movement for lower back and glutes.", alternatives: ["Bird Dog", "Bridge Hold"] }
        ]},
        running: { type: "Light Jog / Walk", duration: "20–25 min", description: "Recovery-focused light jog or 2 min jog / 1 min walk split.", alternative: "Brisk walk with mobility drills" }
      },
      "Day 5": {
        warmup: ["20x Jumping Jacks", "10x Reverse Lunges", "5x Inchworm to Plank", "30s Plank Hold"],
        workout: { type: "Full Body Push Circuit", rounds: 3, exercises: [
          { name: "Push-ups", reps: "12x", description: "Classic upper body movement working chest, shoulders, and triceps.", alternatives: ["Incline Push-ups", "Knee Push-ups"] },
          { name: "Air Squats", reps: "20x", description: "Bodyweight lower body movement focusing on quads, hamstrings, and glutes.", alternatives: ["Wall Sit", "Chair Squats"] },
          { name: "Leg Raises", reps: "10x", description: "An abdominal movement that targets the lower core.", alternatives: ["Flutter Kicks", "Toe Touches"] },
          { name: "Jump Lunges", reps: "10x", description: "Plyometric leg exercise that improves power and coordination.", alternatives: ["Split Squats", "Step-back Lunges"] },
          { name: "Plank with Shoulder Taps", reps: "30s", description: "Static core isometric with added shoulder activation.", alternatives: ["Plank Hold", "Bird Dog"] }
        ]},
        running: { type: "Tempo Run", duration: "22–25 min", description: "5 min easy pace, 12–15 min tempo pace (moderate), 5 min cooldown jog/walk.", alternative: "2 min brisk jog / 2 min recovery jog x5" }
      }
    },

    "5+": {
      "Day 1": {
        warmup: ["20x Jumping Jacks", "10x Arm Circles", "10x Air Squats", "30s Plank Hold"],
        workout: { type: "Strength Block", rounds: 3, exercises: [
          { name: "Push-ups", reps: "12x", description: "A bodyweight chest press that also targets the triceps and shoulders.", alternatives: ["Knee Push-ups", "Incline Push-ups"] },
          { name: "Air Squats", reps: "15x", description: "A lower body exercise targeting quads, hamstrings, and glutes.", alternatives: ["Wall Sit", "Chair Squats"] },
          { name: "V-ups", reps: "10x", description: "Core-focused movement for strengthening the lower and upper abdominal area.", alternatives: ["Crunches", "Leg Raises"] },
          { name: "Bear Crawl (forward + back)", reps: "10x", description: "A core and coordination-focused move using all four limbs to crawl.", alternatives: ["Crab Walk", "Mountain Climbers"] },
          { name: "Plank Shoulder Taps", reps: "30s", description: "From plank position, alternate tapping shoulders to work core stability.", alternatives: ["Plank Hold", "Bird Dog"] }
        ]},
        running: { type: "Easy Run", duration: "25–30 min", description: "Light run focused on posture, breathing, and a relaxed rhythm.", alternative: "3 min run / 1 min walk" }
      },
      "Day 2": {
        warmup: ["20x High Knees", "10x Arm Swings", "10x Reverse Lunges", "30s Plank + 10x Shoulder Taps"],
        workout: { type: "EMOM", rounds: 3, exercises: [
          { name: "Push-ups", reps: "12x", description: "A bodyweight chest press that also targets the triceps and shoulders.", alternatives: ["Incline Push-ups", "Knee Push-ups"] },
          { name: "Air Squats", reps: "15x", description: "A lower body exercise targeting quads, hamstrings, and glutes.", alternatives: ["Wall Sit", "Chair Squats"] },
          { name: "Leg Raises", reps: "10x", description: "An abdominal movement that targets the lower core.", alternatives: ["Flutter Kicks", "Reverse Crunch"] },
          { name: "Shoulder Taps", reps: "20x", description: "Alternating shoulder taps in a plank position to build stability and shoulder strength.", alternatives: ["Plank Hold", "Bird Dog"] }
        ]},
        finisher: { type: "Core Finisher", rounds: 2, exercises: ["40s Plank Hold", "10x Push-ups", "20x Russian Twists", "10x Superman Hold (3s each)"] }
      },
      "Day 3": {
        warmup: ["10x Inchworms", "20x Jumping Jacks", "10x Arm Swings", "10x Mountain Climbers"],
        workout: { type: "Strength Block", rounds: 3, exercises: [
          { name: "Push-ups", reps: "10x", description: "Classic upper body movement working chest, shoulders, and triceps.", alternatives: ["Incline Push-ups", "Knee Push-ups"] },
          { name: "Pike Push-ups", reps: "10x", description: "Targets shoulders and upper chest with bodyweight resistance.", alternatives: ["Wall Pike Push-ups", "Shoulder Tap Push-ups"] },
          { name: "Step-back Lunges", reps: "15x", description: "Lunge variation focusing on glutes, quads, and stability.", alternatives: ["Forward Lunges", "Walking Lunges"] },
          { name: "Bicycle Crunches", reps: "20x", description: "Dynamic core exercise hitting obliques and rectus abdominis.", alternatives: ["Dead Bug", "Toe Touches"] }
        ]},
        running: { type: "Speed Intervals", duration: "6 rounds", description: "200–300 m fast run with 60–90s walk. Focus on strong form and recovery.", alternative: "Sprint Intervals with walk back recovery" }
      },
      "Day 4": {
        warmup: ["Dynamic Leg Swings", "Arm Circles", "World's Greatest Stretch", "Downward Dog to Cobra"],
        workout: { type: "Core Stability", rounds: 2, exercises: [
          { name: "Side Plank", reps: "30s each side", description: "Static core hold for oblique activation and trunk stability.", alternatives: ["Knee Side Plank", "Forearm Side Plank"] },
          { name: "Push-up to Plank", reps: "10x", description: "Upper body and core coordination exercise moving between plank and push-up.", alternatives: ["Up-Down Plank", "Kneeling Push-up to Plank"] },
          { name: "Leg Raises", reps: "20x", description: "Lower abdominal isolation movement.", alternatives: ["Flutter Kicks", "Lying Toe Touches"] },
          { name: "Superman Reaches", reps: "15x", description: "Posterior chain activation movement for lower back and glutes.", alternatives: ["Bird Dog", "Bridge Hold"] }
        ]},
        running: { type: "Light Jog or Walk", duration: "20–30 min", description: "Recovery-based jog or alternating walk/jog at zone 1–2 heart rate.", alternative: "2 min jog / 1 min walk" }
      },
      "Day 5": {
        warmup: ["20x Jumping Jacks", "10x Reverse Lunges", "5x Inchworm to Plank", "30s Plank Hold"],
        workout: { type: "Full Body Push Circuit", rounds: 3, exercises: [
          { name: "Push-ups", reps: "12x", description: "Classic upper body movement working chest, shoulders, and triceps.", alternatives: ["Incline Push-ups", "Knee Push-ups"] },
          { name: "Air Squats", reps: "20x", description: "Bodyweight lower body movement focusing on quads, hamstrings, and glutes.", alternatives: ["Wall Sit", "Chair Squats"] },
          { name: "Leg Raises", reps: "10x", description: "An abdominal movement that targets the lower core.", alternatives: ["Flutter Kicks", "Toe Touches"] },
          { name: "Jump Lunges", reps: "10x", description: "Plyometric leg exercise that improves power and coordination.", alternatives: ["Split Squats", "Step-back Lunges"] },
          { name: "Plank with Shoulder Taps", reps: "30s", description: "Static core isometric with added shoulder activation.", alternatives: ["Plank Hold", "Bird Dog"] }
        ]},
        running: { type: "Tempo Run", duration: "22–25 min", description: "5 min easy pace, 12–15 min tempo pace (moderate), 5 min cooldown jog/walk.", alternative: "2 min brisk jog / 2 min recovery jog x5" }
      },
      "Day 6": {
        warmup: ["Light dynamic mobility", "Wrist warm-up", "Shoulder rotations"],
        workout: { type: "Push-up Challenge + Core", rounds: 1, exercises: [{ name: "Push-up Ladder", reps: "1–2–3–4–5... to failure", description: "Progressive push-up challenge with short rest to build endurance.", alternatives: ["Knee Push-ups", "Incline Ladder"] }] },
        core: { type: "Core Burn", rounds: 2, exercises: ["20x Russian Twists", "10x Leg Raises", "10x V-ups", "1 min Plank"] },
        cooldown: { type: "Stretch", duration: "5–10 min", focus: ["Chest", "Shoulders", "Hips", "Hamstrings"] }
      }
    }
  };

  // ---------- EXPORT TO WINDOW ----------
  window.__COND_VER__ = "local-final";
  window.conditioningFrequencies = { gym, bodyweight };
  console.log("[conditioningLocal] ready", Object.keys(window.conditioningFrequencies));
})();
