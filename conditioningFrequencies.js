(function() {
  const conditioningFrequencies = {
    bodyweight: {
        "1-2": {
          "Day 1": {
            warmup: ["20x Jumping Jacks", "10x Arm Circles (each direction)", "10x Air Squats", "30s Plank Hold"],
            workout: { type: "EMOM", rounds: 3, exercises: [{ name: "Push-ups", reps: "12x", description: "A bodyweight chest press that also targets the triceps and shoulders.", alternatives: ["Knee Push-ups", "Incline Push-ups"] }, { name: "Lunges", reps: "20x", description: "Stepping forward with one leg to work quads, hamstrings, and glutes.", alternatives: ["Step-ups", "Split Squats"] }, { name: "Leg Raises", reps: "10x", description: "Lying flat, lifting legs to work lower abs.", alternatives: ["Reverse Crunches", "V-Ups"] }, { name: "Bear Crawl (forward + back)", reps: "10x", description: "A core and coordination-focused move using all four limbs to crawl.", alternatives: ["Crab Walk", "Mountain Climbers"] }, { name: "Plank Shoulder Taps", reps: "30s", description: "From plank position, alternate tapping shoulders to work core stability.", alternatives: ["Plank Hold", "Bird Dog"] }] },
            running: { type: "Easy Run", duration: "20–25 min", description: "Light run focused on technique, posture, and relaxed breathing.", alternative: "2 min run / 1 min walk" }
          }
        },
        "3-4": { 
          "Day 1": {
            warmup: ["20x Jumping Jacks", "10x Arm Circles (each direction)", "10x Air Squats", "30s Plank Hold"],
            workout: { type: "Strength Block", rounds: 3, exercises: [{ name: "Push-ups", reps: "12x", description: "A bodyweight chest press that also targets the triceps and shoulders.", alternatives: ["Knee Push-ups", "Incline Push-ups"] }, { name: "Air Squats", reps: "15x", description: "A lower body exercise targeting quads, hamstrings, and glutes.", alternatives: ["Wall Sit", "Chair Squats"] }, { name: "V-ups / Leg Raises", reps: "10x", description: "Core-focused movement, lifting legs or combining with crunch for full-body engagement.", alternatives: ["Toe Touches", "Crunches"] }, { name: "Bear Crawl (forward + back)", reps: "10x", description: "A core and coordination-focused move using all four limbs to crawl.", alternatives: ["Crab Walk", "Mountain Climbers"] }, { name: "Plank Shoulder Taps", reps: "30s", description: "From plank position, alternate tapping shoulders to work core stability.", alternatives: ["Plank Hold", "Bird Dog"] }] },
            running: { type: "Easy Run", duration: "25–30 min", description: "Light run focused on breathing, posture, and a relaxed rhythm.", alternative: "3 min run / 1 min walk" }
          },
          "Day 2": {
            warmup: ["20x High Knees", "10x Arm Swings", "10x Reverse Lunges", "20s Plank + 10x Shoulder Taps"],
            workout: { type: "EMOM", rounds: 3, exercises: [{ name: "Push-ups", reps: "12x", description: "A bodyweight chest press that also targets the triceps and shoulders.", alternatives: ["Incline Push-ups", "Knee Push-ups"] }, { name: "Air Squats", reps: "15x", description: "A lower body exercise targeting the quads, hamstrings, and glutes.", alternatives: ["Wall Sit", "Chair Squats"] }, { name: "Leg Raises", reps: "10x", description: "An abdominal movement that targets the lower core.", alternatives: ["Flutter Kicks", "Reverse Crunch"] }, { name: "Shoulder Taps", reps: "20x", description: "Alternating shoulder taps in a plank position to build stability and shoulder strength.", alternatives: ["Plank Hold", "Bird Dog"] }] },
            finisher: { type: "Core Finisher", rounds: 2, exercises: ["40s Plank Hold", "10x Push-ups", "20x Russian Twists", "10x Superman Hold (3s each)"] }
          },
          "Day 3": {
            warmup: ["10x Arm Circles", "10x Inchworm to Plank", "20x Jumping Jacks", "10x Mountain Climbers"],
            workout: { type: "Strength Block", rounds: 3, exercises: [{ name: "Push-ups", reps: "10x", description: "Classic upper body movement working chest, shoulders, and triceps.", alternatives: ["Knee Push-ups", "Incline Push-ups"] }, { name: "Pike Push-ups", reps: "10x", description: "Targets the shoulders and upper chest by simulating an overhead press.", alternatives: ["Incline Pike Push-ups", "Wall Handstand Hold"] }, { name: "Split Squats", reps: "15x each leg", description: "A unilateral leg movement focusing on quads and glutes.", alternatives: ["Step-ups", "Bulgarian Split Squats"] }, { name: "Bicycle Crunches", reps: "20x", description: "A core movement emphasizing obliques and hip flexors.", alternatives: ["Toe Touches", "Russian Twists"] }] },
            running: { type: "Interval Run", description: "6 rounds of fast intervals with full recovery in between.", structure: ["200–300 m fast run", "60s walk / full recovery"] }
          },
          "Day 4": {
            warmup: ["Arm and Hip Circles", "World's Greatest Stretch", "Downward Dog to Cobra"],
            workout: { type: "Core & Stability Circuit", rounds: "2–3", exercises: [{ name: "Side Plank", reps: "30s each side", description: "Strengthens the obliques and improves lateral stability.", alternatives: ["Side Plank with Reach", "Knee Side Plank"] }, { name: "Push-up to Plank", reps: "10x", description: "Transitions between push-up and elbow plank to challenge the core and shoulders.", alternatives: ["Plank Up-Downs", "Modified Push-up to Plank"] }, { name: "Leg Raises", reps: "20x", description: "Engages lower abs through controlled leg lifts.", alternatives: ["Flutter Kicks", "Reverse Crunches"] }, { name: "Superman Reaches", reps: "15x", description: "Strengthens the lower back, glutes, and posterior chain.", alternatives: ["Bird Dog", "Cobra Raises"] }] },
            running: { type: "Recovery Run or Walk", duration: "20–25 min", description: "Use this day for active recovery. Maintain a relaxed pace.", alternative: "2 min jog / 1 min walk" }
          }
        },
        "5": { 
          "Day 1": {
            warmup: ["20x Jumping Jacks", "10x Arm Circles (each direction)", "10x Air Squats", "30s Plank Hold"],
            workout: { type: "Strength Block", rounds: 3, exercises: [{ name: "Push-ups", reps: "12x", description: "A bodyweight chest press that also targets the triceps and shoulders.", alternatives: ["Knee Push-ups", "Incline Push-ups"] }, { name: "Air Squats", reps: "15x", description: "A lower body exercise targeting quads, hamstrings, and glutes.", alternatives: ["Wall Sit", "Chair Squats"] }, { name: "V-ups or Leg Raises", reps: "10x", description: "Core-focused movement for strengthening the lower and upper abdominal area.", alternatives: ["Crunches", "Toe Touches"] }, { name: "Bear Crawl (forward + back)", reps: "10x", description: "A core and coordination-focused move using all four limbs to crawl.", alternatives: ["Crab Walk", "Mountain Climbers"] }, { name: "Plank Shoulder Taps", reps: "30s", description: "From plank position, alternate tapping shoulders to work core stability.", alternatives: ["Plank Hold", "Bird Dog"] }] },
            running: { type: "Easy Run", duration: "25–30 min", description: "Light run focused on posture, breathing, and a relaxed rhythm.", alternative: "3 min run / 1 min walk" }
          },
          "Day 2": {
            warmup: ["20x High Knees", "10x Arm Swings", "10x Reverse Lunges", "20s Plank + 10x Shoulder Taps"],
            workout: { type: "EMOM", rounds: 3, exercises: [{ name: "Push-ups", reps: "12x", description: "A bodyweight chest press that also targets the triceps and shoulders.", alternatives: ["Incline Push-ups", "Knee Push-ups"] }, { name: "Air Squats", reps: "15x", description: "A lower body exercise targeting quads, hamstrings, and glutes.", alternatives: ["Wall Sit", "Chair Squats"] }, { name: "Leg Raises", reps: "10x", description: "An abdominal movement that targets the lower core.", alternatives: ["Flutter Kicks", "Reverse Crunch"] }, { name: "Shoulder Taps", reps: "20x", description: "Alternating shoulder taps in a plank position to build stability and shoulder strength.", alternatives: ["Plank Hold", "Bird Dog"] }] },
            finisher: { type: "Core Finisher", rounds: 2, exercises: ["40s Plank Hold", "10x Push-ups", "20x Russian Twists", "10x Superman Hold (3s each)"] }
          },
          "Day 3": {
            warmup: ["10x Arm Circles", "10x Inchworm to Plank", "20x Jumping Jacks", "10x Mountain Climbers"],
            workout: { type: "Strength Block", rounds: 3, exercises: [{ name: "Push-ups", reps: "10x", description: "Classic upper body movement working chest, shoulders, and triceps.", alternatives: ["Knee Push-ups", "Incline Push-ups"] }, { name: "Pike Push-ups (or Incline Push-ups)", reps: "10x", description: "Targets shoulders and upper chest with bodyweight resistance.", alternatives: ["Shoulder Tap Push-ups", "Wall Pike Push-ups"] }, { name: "Step-back Lunges", reps: "15x", description: "Lunge variation focusing on glutes, quads, and stability.", alternatives: ["Forward Lunges", "Walking Lunges"] }, { name: "Bicycle Crunches", reps: "20x", description: "Dynamic core exercise hitting obliques and rectus abdominis.", alternatives: ["Dead Bug", "Toe Touches"] }] },
            running: { type: "Speed Intervals", duration: "6 rounds", description: "200–300 m fast run followed by 60s walk or jog. Focus on clean form and speed.", alternative: "Short sprints with walk back recovery" }
          },
          "Day 4": {
            warmup: ["Arm and Hip Circles", "Deep Lunge Stretch", "Downward Dog to Cobra"],
            workout: { type: "Core & Control", rounds: 2, exercises: [{ name: "Side Plank", reps: "30s each side", description: "Static core hold for oblique activation and trunk stability.", alternatives: ["Knee Side Plank", "Forearm Side Plank"] }, { name: "Push-up to Plank", reps: "10x", description: "Upper body and core coordination exercise moving between plank and push-up.", alternatives: ["Up-Down Plank", "Kneeling Push-up to Plank"] }, { name: "Leg Raises", reps: "20x", description: "Lower abdominal isolation movement.", alternatives: ["Flutter Kicks", "Lying Toe Touches"] }, { name: "Superman Reach", reps: "15x", description: "Posterior chain activation movement for lower back and glutes.", alternatives: ["Bird Dog", "Bridge Hold"] }] },
            running: { type: "Light Jog / Walk", duration: "20–25 min", description: "Recovery-focused light jog or 2 min jog / 1 min walk split.", alternative: "Brisk walk with mobility drills" }
          },
          "Day 5": {
            warmup: ["20x Jumping Jacks", "10x Reverse Lunges", "5x Inchworm to Plank", "30s Plank Hold"],
            workout: { type: "Full Body Push Circuit", rounds: 3, exercises: [{ name: "Push-ups", reps: "12x", description: "Classic upper body movement working chest, shoulders, and triceps.", alternatives: ["Incline Push-ups", "Knee Push-ups"] }, { name: "Air Squats", reps: "20x", description: "Bodyweight lower body movement focusing on quads, hamstrings, and glutes.", alternatives: ["Wall Sit", "Chair Squats"] }, { name: "Leg Raises", reps: "10x", description: "An abdominal movement that targets the lower core.", alternatives: ["Flutter Kicks", "Toe Touches"] }, { name: "Jump Lunges", reps: "10x", description: "Plyometric leg exercise that improves power and coordination.", alternatives: ["Split Squats", "Step-back Lunges"] }, { name: "Plank with Shoulder Taps", reps: "30s", description: "Static core isometric with added shoulder activation.", alternatives: ["Plank Hold", "Bird Dog"] }] },
            running: { type: "Tempo Run", duration: "22–25 min", description: "5 min easy pace, 12–15 min tempo pace (moderate), 5 min cooldown jog/walk.", alternative: "2 min brisk jog / 2 min recovery jog x5" }
          }
        },
        "5+": {
          "Day 1": {
            warmup: ["20x Jumping Jacks", "10x Arm Circles", "10x Air Squats", "30s Plank Hold"],
            workout: { type: "Strength Block", rounds: 3, exercises: [{ name: "Push-ups", reps: "12x", description: "A bodyweight chest press that also targets the triceps and shoulders.", alternatives: ["Knee Push-ups", "Incline Push-ups"] }, { name: "Air Squats", reps: "15x", description: "A lower body exercise targeting quads, hamstrings, and glutes.", alternatives: ["Wall Sit", "Chair Squats"] }, { name: "V-ups", reps: "10x", description: "Core-focused movement for strengthening the lower and upper abdominal area.", alternatives: ["Crunches", "Leg Raises"] }, { name: "Bear Crawl (forward + back)", reps: "10x", description: "A core and coordination-focused move using all four limbs to crawl.", alternatives: ["Crab Walk", "Mountain Climbers"] }, { name: "Plank Shoulder Taps", reps: "30s", description: "From plank position, alternate tapping shoulders to work core stability.", alternatives: ["Plank Hold", "Bird Dog"] }] },
            running: { type: "Easy Run", duration: "25–30 min", description: "Light run focused on posture, breathing, and a relaxed rhythm.", alternative: "3 min run / 1 min walk" }
          },
          "Day 2": {
            warmup: ["20x High Knees", "10x Arm Swings", "10x Reverse Lunges", "30s Plank + 10x Shoulder Taps"],
            workout: { type: "EMOM", rounds: 3, exercises: [{ name: "Push-ups", reps: "12x", description: "A bodyweight chest press that also targets the triceps and shoulders.", alternatives: ["Incline Push-ups", "Knee Push-ups"] }, { name: "Air Squats", reps: "15x", description: "A lower body exercise targeting quads, hamstrings, and glutes.", alternatives: ["Wall Sit", "Chair Squats"] }, { name: "Leg Raises", reps: "10x", description: "An abdominal movement that targets the lower core.", alternatives: ["Flutter Kicks", "Reverse Crunch"] }, { name: "Shoulder Taps", reps: "20x", description: "Alternating shoulder taps in a plank position to build stability and shoulder strength.", alternatives: ["Plank Hold", "Bird Dog"] }] },
            finisher: { type: "Core Finisher", rounds: 2, exercises: ["40s Plank Hold", "10x Push-ups", "20x Russian Twists", "10x Superman Hold (3s each)"] }
          },
          "Day 3": {
            warmup: ["10x Inchworms", "20x Jumping Jacks", "10x Arm Swings", "10x Mountain Climbers"],
            workout: { type: "Strength Block", rounds: 3, exercises: [{ name: "Push-ups", reps: "10x", description: "Classic upper body movement working chest, shoulders, and triceps.", alternatives: ["Incline Push-ups", "Knee Push-ups"] }, { name: "Pike Push-ups", reps: "10x", description: "Targets shoulders and upper chest with bodyweight resistance.", alternatives: ["Wall Pike Push-ups", "Shoulder Tap Push-ups"] }, { name: "Step-back Lunges", reps: "15x", description: "Lunge variation focusing on glutes, quads, and stability.", alternatives: ["Forward Lunges", "Walking Lunges"] }, { name: "Bicycle Crunches", reps: "20x", description: "Dynamic core exercise hitting obliques and rectus abdominis.", alternatives: ["Dead Bug", "Toe Touches"] }] },
            running: { type: "Speed Intervals", duration: "6 rounds", description: "200–300 m fast run with 60–90s walk. Focus on strong form and recovery.", alternative: "Sprint Intervals with walk back recovery" }
          },
          "Day 4": {
            warmup: ["Dynamic Leg Swings", "Arm Circles", "World's Greatest Stretch", "Downward Dog to Cobra"],
            workout: { type: "Core Stability", rounds: 2, exercises: [{ name: "Side Plank", reps: "30s each side", description: "Static core hold for oblique activation and trunk stability.", alternatives: ["Knee Side Plank", "Forearm Side Plank"] }, { name: "Push-up to Plank", reps: "10x", description: "Upper body and core coordination exercise moving between plank and push-up.", alternatives: ["Up-Down Plank", "Kneeling Push-up to Plank"] }, { name: "Leg Raises", reps: "20x", description: "Lower abdominal isolation movement.", alternatives: ["Flutter Kicks", "Lying Toe Touches"] }, { name: "Superman Reaches", reps: "15x", description: "Posterior chain activation movement for lower back and glutes.", alternatives: ["Bird Dog", "Bridge Hold"] }] },
            running: { type: "Light Jog or Walk", duration: "20–30 min", description: "Recovery-based jog or alternating walk/jog at zone 1–2 heart rate.", alternative: "2 min jog / 1 min walk" }
          },
          "Day 5": {
            warmup: ["20x Jumping Jacks", "10x Reverse Lunges", "5x Inchworm to Plank", "30s Plank Hold"],
            workout: { type: "Full Body Push Circuit", rounds: 3, exercises: [{ name: "Push-ups", reps: "12x", description: "Classic upper body movement working chest, shoulders, and triceps.", alternatives: ["Incline Push-ups", "Knee Push-ups"] }, { name: "Air Squats", reps: "20x", description: "Bodyweight lower body movement focusing on quads, hamstrings, and glutes.", alternatives: ["Wall Sit", "Chair Squats"] }, { name: "Leg Raises", reps: "10x", description: "An abdominal movement that targets the lower core.", alternatives: ["Flutter Kicks", "Toe Touches"] }, { name: "Jump Lunges", reps: "10x", description: "Plyometric leg exercise that improves power and coordination.", alternatives: ["Split Squats", "Step-back Lunges"] }, { name: "Plank with Shoulder Taps", reps: "30s", description: "Static core isometric with added shoulder activation.", alternatives: ["Plank Hold", "Bird Dog"] }] },
            running: { type: "Tempo Run", duration: "22–25 min", description: "5 min easy pace, 12–15 min tempo pace (moderate), 5 min cooldown jog/walk.", alternative: "2 min brisk jog / 2 min recovery jog x5" }
          },
          "Day 6": {
            warmup: ["Light dynamic mobility", "Wrist warm-up", "Shoulder rotations"],
            workout: { type: "Push-up Challenge + Core", rounds: 1, exercises: [{ name: "Push-up Ladder", reps: "1–2–3–4–5... to failure", description: "Progressive push-up challenge with short rest to build endurance.", alternatives: ["Knee Push-ups", "Incline Ladder"] }] },
            core: { type: "Core Burn", rounds: 2, exercises: ["20x Russian Twists", "10x Leg Raises", "10x V-ups", "1 min Plank"] },
            cooldown: { type: "Stretch", duration: "5–10 min", focus: ["Chest", "Shoulders", "Hips", "Hamstrings"] }
          }
        }
      },
      // Zde jsou definovány plány pro posilovnu (GYM) s upravenou strukturou, aby odpovídala novému formátu
 // --- GYM (structured like HOME, but with equipment equivalents) ---
gym: {
  "1-2": {
    "Day 1": {
      warmup: [
        "3–5 min Light Cardio (Bike/Treadmill)",
        "10x Band Pull-Aparts",
        "10x Bodyweight Squats",
        "20s Plank Hold"
      ],
      workout: {
        type: "EMOM",
        rounds: 3,
        exercises: [
          {
            name: "Chest Press Machine",
            reps: "12x",
            description: "Machine chest press for stable pushing pattern.",
            alternatives: ["Dumbbell Bench Press", "Barbell Bench Press"]
          },
          {
            name: "DB Walking Lunges",
            reps: "20x total",
            description: "Unilateral leg strength and stability with dumbbells.",
            alternatives: ["Leg Press (moderate)", "Split Squats (DB)"]
          },
          {
            name: "Hanging Knee Raises",
            reps: "10x",
            description: "Lower abs on bar or captain’s chair.",
            alternatives: ["Cable Crunch", "Decline Bench Leg Raises"]
          },
          {
            name: "Sled Push (out + back)",
            reps: "2x10–15 m",
            description: "Total-body conditioning with emphasis on legs.",
            alternatives: ["Assault Bike Sprint 20s", "Rowing Sprint 20s"]
          },
          {
            name: "Plank Shoulder Taps",
            reps: "30s",
            description: "Anti-rotation core control under fatigue.",
            alternatives: ["Front Plank 40s", "Side Plank 30s/side"]
          }
        ]
      },
      running: {
        type: "Treadmill – Easy Run",
        duration: "20–25 min",
        description: "Easy, relaxed pace. Focus on posture and breathing.",
        alternative: "Run: 2 min run / 1 min walk • or Row easy / Bike easy 20–25 min"
      }
    }
  },

  "3-4": {
    "Day 1": {
      warmup: [
        "Row or Bike 3–5 min EZ",
        "10x Band External Rotations/side",
        "10x Air Squats",
        "20s Plank Hold"
      ],
      workout: {
        type: "Strength Block",
        rounds: 3,
        exercises: [
          {
            name: "Dumbbell Bench Press",
            reps: "12x",
            description: "Horizontal press with free weights.",
            alternatives: ["Chest Press Machine", "Barbell Bench Press"]
          },
          {
            name: "Leg Press",
            reps: "15x",
            description: "Quad-dominant lower body strength.",
            alternatives: ["Goblet Squat (DB/Kettlebell)", "Hack Squat"]
          },
          {
            name: "Hanging Leg Raises",
            reps: "10x",
            description: "Lower abs; focus on control.",
            alternatives: ["Cable Crunch", "Reverse Crunch"]
          },
          {
            name: "Sled Push",
            reps: "10–15 m",
            description: "Power-endurance for legs.",
            alternatives: ["Prowler Push", "Assault Bike 20s HARD"]
          },
          {
            name: "Plank Shoulder Taps",
            reps: "30s",
            description: "Core stability under load.",
            alternatives: ["Front Plank 40s", "Dead Bug 10/side"]
          }
        ]
      },
      running: {
        type: "Treadmill – Easy Run",
        duration: "25–30 min",
        description: "Relaxed breathing, steady rhythm.",
        alternative: "Run: 3 min run / 1 min walk • or Row easy / Bike easy 25–30 min"
      }
    },

    "Day 2": {
      warmup: [
        "Bike 3 min EZ",
        "10x Arm Swings",
        "10x Reverse Lunges",
        "20s Plank + 10x Shoulder Taps"
      ],
      workout: {
        type: "EMOM 12",
        rounds: 3,
        exercises: [
          {
            name: "Chest Press Machine",
            reps: "12x",
            description: "Stable pattern for consistent EMOM work.",
            alternatives: ["DB Bench Press", "Push-ups"]
          },
          {
            name: "Goblet Squat",
            reps: "15x",
            description: "Full-depth squat with kettlebell or dumbbell.",
            alternatives: ["Leg Press (light)", "Hack Squat (light)"]
          },
          {
            name: "Cable Knee Raises",
            reps: "10x",
            description: "Core with cable load or on captain’s chair.",
            alternatives: ["Hanging Knee Raises", "Reverse Crunch"]
          },
          {
            name: "Shoulder Taps",
            reps: "20x",
            description: "Anti-rotation finisher within EMOM.",
            alternatives: ["Plank 40s", "Bird Dog 10/side"]
          }
        ]
      },
      finisher: {
        type: "Core Finisher",
        rounds: 2,
        exercises: [
          "40s Plank Hold",
          "10x Push-ups",
          "20x Cable Woodchoppers (light)",
          "10x Back Extension (3s top)"
        ]
      }
    },

    "Day 3": {
      warmup: [
        "Treadmill 3 min EZ",
        "10x Inchworm to Plank",
        "20x Jumping Jacks",
        "10x Mountain Climbers"
      ],
      workout: {
        type: "Strength Block",
        rounds: 3,
        exercises: [
          {
            name: "Incline DB Press",
            reps: "10x",
            description: "Upper chest emphasis.",
            alternatives: ["Incline Machine Press", "Smith Incline Press"]
          },
          {
            name: "Seated DB Shoulder Press",
            reps: "10x",
            description: "Vertical press pattern.",
            alternatives: ["Shoulder Press Machine", "Landmine Press"]
          },
          {
            name: "Bulgarian Split Squat (DB)",
            reps: "12x/leg",
            description: "Unilateral leg strength and balance.",
            alternatives: ["Smith Split Squat", "Walking Lunges (DB)"]
          },
          {
            name: "Cable Crunch",
            reps: "15–20x",
            description: "Loaded spinal flexion for core.",
            alternatives: ["Hanging Knee Raises", "Ab Machine"]
          }
        ]
      },
      running: {
        type: "Treadmill – Intervals",
        description: "6 rounds of fast intervals with full recovery.",
        structure: ["200–300 m fast", "60s walk / full recovery"],
        alternative: "Bike: 6x30s hard / 60s easy • Row: 6x200m fast / full recovery"
      }
    },

    "Day 4": {
      warmup: [
        "Mobility 5–8 min",
        "World's Greatest Stretch",
        "Downward Dog → Cobra"
      ],
      workout: {
        type: "Core & Stability Circuit",
        rounds: "2–3",
        exercises: [
          {
            name: "Side Plank",
            reps: "30s each side",
            description: "Lateral core stability.",
            alternatives: ["Cable Side Bend (light)", "Pallof Press 10/side"]
          },
          {
            name: "Push-up to Plank",
            reps: "10x",
            description: "Shoulder + core control.",
            alternatives: ["Low Plank Up-Downs", "DB Bench (light, tempo)"]
          },
          {
            name: "Hanging Knee Raises",
            reps: "20x",
            description: "Lower abs, controlled.",
            alternatives: ["Ab Machine 15x", "Cable Crunch 20x"]
          },
          {
            name: "Back Extension",
            reps: "15x",
            description: "Posterior chain activation.",
            alternatives: ["Reverse Hyper", "Hip Extension (machine)"]
          }
        ]
      },
      running: {
        type: "Recovery Walk/Run",
        duration: "20–25 min",
        description: "Active recovery. Stay relaxed.",
        alternative: "Row easy / Bike easy 20–25 min"
      }
    }
  },

  "5": {
    "Day 1": {
      warmup: [
        "Bike 3–5 min EZ",
        "10x Band Pull-Aparts",
        "10x Squat to Stand",
        "20s Plank Hold"
      ],
      workout: {
        type: "Strength Block",
        rounds: 3,
        exercises: [
          {
            name: "DB Bench Press",
            reps: "12x",
            description: "Controlled tempo.",
            alternatives: ["Chest Press Machine", "BB Bench Press"]
          },
          {
            name: "Leg Press",
            reps: "15x",
            description: "Full ROM, no lockout.",
            alternatives: ["Goblet Squat", "Hack Squat"]
          },
          {
            name: "Hanging Leg Raises",
            reps: "10x",
            description: "Lower abs.",
            alternatives: ["Cable Crunch", "Reverse Crunch"]
          },
          {
            name: "Sled Push",
            reps: "10–15 m",
            description: "Power/conditioning.",
            alternatives: ["Assault Bike 20s", "Row 20s"]
          },
          {
            name: "Plank Shoulder Taps",
            reps: "30s",
            description: "Core stability.",
            alternatives: ["Front Plank 40s", "Dead Bug 10/side"]
          }
        ]
      },
      running: {
        type: "Treadmill – Easy Run",
        duration: "25–30 min",
        description: "Light, relaxed rhythm.",
        alternative: "Row easy / Bike easy 25–30 min"
      }
    },

    "Day 2": {
      warmup: [
        "Bike 3 min EZ",
        "10x Arm Swings",
        "10x Reverse Lunges",
        "20s Plank + 10x Shoulder Taps"
      ],
      workout: {
        type: "EMOM 12 (3x4)",
        rounds: 3,
        exercises: [
          { name: "Chest Press Machine", reps: "12x", description: "Solid EMOM press.", alternatives: ["DB Bench Press", "Push-ups"] },
          { name: "Goblet Squat", reps: "15x", description: "Leg pattern under fatigue.", alternatives: ["Leg Press (light)", "Hack Squat (light)"] },
          { name: "Cable Knee Raises", reps: "10x", description: "Core under EMOM.", alternatives: ["Hanging Knee Raises", "Reverse Crunch"] },
          { name: "Shoulder Taps", reps: "20x", description: "Anti-rotation.", alternatives: ["Plank 40s", "Bird Dog 10/side"] }
        ]
      },
      finisher: {
        type: "Core Finisher",
        rounds: 2,
        exercises: [
          "40s Plank Hold",
          "10x Push-ups",
          "20x Cable Woodchoppers",
          "10x Back Extension (3s each)"
        ]
      }
    },

    "Day 3": {
      warmup: [
        "Treadmill 3 min EZ",
        "10x Inchworms",
        "20x Jumping Jacks",
        "10x Mountain Climbers"
      ],
      workout: {
        type: "Strength Block",
        rounds: 3,
        exercises: [
          { name: "Incline DB Press", reps: "10x", description: "Upper chest.", alternatives: ["Incline Machine Press", "Smith Incline"] },
          { name: "Seated DB Shoulder Press", reps: "10x", description: "Vertical press.", alternatives: ["Shoulder Press Machine", "Landmine Press"] },
          { name: "Step-back Lunges (DB)", reps: "15x total", description: "Leg stability.", alternatives: ["Bulgarian Split Squat", "Walking Lunges"] },
          { name: "Cable Crunch", reps: "20x", description: "Loaded core.", alternatives: ["Hanging Knee Raises", "Ab Machine"] }
        ]
      },
      running: {
        type: "Treadmill – Speed Intervals",
        duration: "6 rounds",
        description: "200–300 m fast, 60s walk/jog. Focus on form.",
        alternative: "Bike: 6x30s hard / 60s easy • Row: 6x200m fast / full recovery"
      }
    },

    "Day 4": {
      warmup: [
        "Mobility 5–8 min",
        "Deep Lunge Stretch",
        "Downward Dog → Cobra"
      ],
      workout: {
        type: "Core & Control",
        rounds: 2,
        exercises: [
          { name: "Side Plank", reps: "30s each side", description: "Oblique focus.", alternatives: ["Pallof Press 10/side", "Cable Side Bend (light)"] },
          { name: "Push-up to Plank", reps: "10x", description: "Coordination.", alternatives: ["Up-Down Plank", "DB Bench (light)"] },
          { name: "Hanging Knee Raises", reps: "20x", description: "Lower abs.", alternatives: ["Ab Machine 15x", "Cable Crunch 20x"] },
          { name: "Back Extension", reps: "15x", description: "Posterior chain.", alternatives: ["Reverse Hyper", "Hip Extension (machine)"] }
        ]
      },
      running: {
        type: "Light Jog / Walk",
        duration: "20–25 min",
        description: "Active recovery.",
        alternative: "Row easy / Bike easy 20–25 min"
      }
    },

    "Day 5": {
      warmup: [
        "Bike 3–5 min EZ",
        "10x Reverse Lunges (BW)",
        "5x Inchworm to Plank",
        "20s Plank Hold"
      ],
      workout: {
        type: "Full Body Circuit",
        rounds: 3,
        exercises: [
          { name: "DB Bench Press", reps: "10–12x", description: "Controlled reps.", alternatives: ["Machine Chest Press", "Push-ups"] },
          { name: "Leg Press", reps: "20x", description: "Pump work.", alternatives: ["Hack Squat", "Goblet Squat"] },
          { name: "Hanging Leg Raises", reps: "10x", description: "Lower abs.", alternatives: ["Cable Crunch", "Toe-to-Bar (scaled)"] },
          { name: "Jump Lunges", reps: "10x", description: "Power + coordination.", alternatives: ["Split Squats (DB)", "Step-ups (DB)"] },
          { name: "Plank Hold", reps: "30–40s", description: "Core isometric.", alternatives: ["Side Plank 30s/side", "Pallof Press 10/side"] }
        ]
      },
      running: {
        type: "Tempo Run",
        duration: "20–25 min",
        description: "5 min EZ → 10–12 min tempo → 5 min cooldown.",
        alternative: "Bike: 2 min brisk / 2 min easy x5 • Row: 2 min moderate / 2 min easy x5"
      }
    }
  },

  "5+": {
    "Day 1": {
      warmup: [
        "Row 3–5 min EZ",
        "10x Band Pull-Aparts",
        "10x Air Squats",
        "20s Plank Hold"
      ],
      workout: {
        type: "Strength Block",
        rounds: 3,
        exercises: [
          { name: "DB Bench Press", reps: "12x", description: "Base pressing volume.", alternatives: ["Machine Chest Press", "BB Bench Press"] },
          { name: "Leg Press", reps: "15x", description: "Lower body base.", alternatives: ["Goblet Squat", "Hack Squat"] },
          { name: "Hanging Leg Raises", reps: "10x", description: "Lower abs.", alternatives: ["Cable Crunch", "Reverse Crunch"] },
          { name: "Sled Push", reps: "10–15 m", description: "Conditioning", alternatives: ["Assault Bike 20s", "Row 20s"] },
          { name: "Plank Shoulder Taps", reps: "30s", description: "Core stability.", alternatives: ["Front Plank 40s", "Dead Bug 10/side"] }
        ]
      },
      running: {
        type: "Easy Run (Treadmill)",
        duration: "25–30 min",
        description: "Relaxed Z2.",
        alternative: "Row easy / Bike easy 25–30 min"
      }
    },

    "Day 2": {
      warmup: [
        "Bike 3 min EZ",
        "10x Arm Swings",
        "10x Reverse Lunges",
        "30s Plank + 10x Shoulder Taps"
      ],
      workout: {
        type: "EMOM 12",
        rounds: 3,
        exercises: [
          { name: "Chest Press Machine", reps: "12x", description: "Press under time.", alternatives: ["DB Bench Press", "Push-ups"] },
          { name: "Goblet Squat", reps: "15x", description: "Legs pattern.", alternatives: ["Leg Press (light)", "Hack Squat (light)"] },
          { name: "Cable Knee Raises", reps: "10x", description: "Core under density.", alternatives: ["Hanging Knee Raises", "Reverse Crunch"] },
          { name: "Shoulder Taps", reps: "20x", description: "Core control.", alternatives: ["Plank 40s", "Bird Dog 10/side"] }
        ]
      },
      finisher: {
        type: "Core Finisher",
        rounds: 2,
        exercises: [
          "40s Plank Hold",
          "10x Push-ups",
          "20x Cable Woodchoppers",
          "10x Back Extension (3s each)"
        ]
      }
    },

    "Day 3": {
      warmup: [
        "Treadmill 3 min EZ",
        "10x Inchworms",
        "20x Jumping Jacks",
        "10x Arm Swings"
      ],
      workout: {
        type: "Strength Block",
        rounds: 3,
        exercises: [
          { name: "Incline DB Press", reps: "10x", description: "Upper chest.", alternatives: ["Incline Machine Press", "Smith Incline"] },
          { name: "Seated DB Shoulder Press", reps: "10x", description: "Shoulders.", alternatives: ["Shoulder Press Machine", "Landmine Press"] },
          { name: "Step-back Lunges (DB)", reps: "15x total", description: "Leg stability.", alternatives: ["Bulgarian Split Squat", "Walking Lunges"] },
          { name: "Cable Crunch", reps: "20x", description: "Loaded core work.", alternatives: ["Hanging Knee Raises", "Ab Machine"] }
        ]
      },
      running: {
        type: "Speed Intervals",
        duration: "6 rounds",
        description: "200–300 m fast with 60–90s walk. Strong form.",
        alternative: "Bike: 6x30s hard / 60–90s easy • Row: 6x200m fast / full recovery"
      }
    },

    "Day 4": {
      warmup: [
        "Mobility 5–8 min",
        "Dynamic Leg Swings",
        "Downward Dog → Cobra"
      ],
      workout: {
        type: "Core Stability",
        rounds: 2,
        exercises: [
          { name: "Side Plank", reps: "30s each side", description: "Obliques & anti-lateral flexion.", alternatives: ["Pallof Press 10/side", "Cable Side Bend (light)"] },
          { name: "Push-up to Plank", reps: "10x", description: "Coordination & trunk control.", alternatives: ["Up-Down Plank", "DB Bench (light, tempo)"] },
          { name: "Hanging Knee Raises", reps: "20x", description: "Lower abs.",
            alternatives: ["Ab Machine 15x", "Cable Crunch 20x"] },
          { name: "Back Extension", reps: "15x", description: "Posterior chain.", alternatives: ["Reverse Hyper", "Hip Extension (machine)"] }
        ]
      },
      running: {
        type: "Light Jog / Walk",
        duration: "20–30 min",
        description: "Z1–Z2, active recovery.",
        alternative: "Row easy / Bike easy 20–30 min"
      }
    },

    "Day 5": {
      warmup: [
        "Bike 3–5 min EZ",
        "10x Reverse Lunges (BW)",
        "5x Inchworm",
        "30s Plank Hold"
      ],
      workout: {
        type: "Full Body Push Circuit",
        rounds: 3,
        exercises: [
          { name: "DB Bench Press", reps: "12x", description: "Pressing volume.", alternatives: ["Machine Chest Press", "Push-ups"] },
          { name: "Leg Press", reps: "20x", description: "Lower body pump.", alternatives: ["Hack Squat", "Goblet Squat"] },
          { name: "Hanging Leg Raises", reps: "10x", description: "Lower abs.", alternatives: ["Cable Crunch", "Toe-to-Bar (scaled)"] },
          { name: "Jump Lunges", reps: "10x", description: "Power & coordination.", alternatives: ["Split Squats (DB)", "Step-ups (DB)"] },
          { name: "Plank with Shoulder Taps", reps: "30s", description: "Core isometric + control.", alternatives: ["Plank 40s", "Side Plank 30s/side"] }
        ]
      },
      running: {
        type: "Tempo Run",
        duration: "22–25 min",
        description: "5 min EZ → 12–15 min tempo → 5 min cooldown.",
        alternative: "Bike: 2 min brisk / 2 min easy x5 • Row: 2 min moderate / 2 min easy x5"
      }
    },

    "Day 6": {
      warmup: ["Light mobility 5 min", "Wrist warm-up", "Shoulder rotations"],
      workout: {
        type: "Push-up Challenge + Core (Gym Adapt)",
        rounds: 1,
        exercises: [
          {
            name: "Assisted Dip/Push Machine Ladder",
            reps: "1–2–3–4–5… to technical limit",
            description: "Press ladder on machine or assisted dips.",
            alternatives: ["Smith Push-up Ladder", "Knee Push-ups Ladder"]
          }
        ]
      },
      core: {
        type: "Core Burn",
        rounds: 2,
        exercises: ["20x Cable Woodchoppers", "10x Hanging Leg Raises", "10x V-ups", "1 min Plank"]
      },
      cooldown: { type: "Stretch", duration: "5–10 min", focus: ["Chest", "Shoulders", "Hips", "Hamstrings"] }
    }
  }
}

    
  function loadConditioningData() {
    return new Promise((resolve) => {
      window.conditioningFrequencies = conditioningFrequencies;
      resolve();
    });
  }
  window.loadConditioningData = loadConditioningData;

  if (!window.conditioningFrequencies) {
    loadConditioningData();
  }
})();
