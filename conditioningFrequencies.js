function loadConditioningData() {
return new Promise((resolve, reject) => {
window.conditioningFrequencies = {
gym, bodyweight: {
  "1-2": {
    "Day 1": {
      warmup: [
        "20x Jumping Jacks",
        "10x Arm Circles (each direction)",
        "10x Air Squats",
        "30s Plank Hold"
      ],
      workout: {
        type: "EMOM",
        rounds: 3,
        exercises: [
          {
            name: "Push-ups",
            reps: "12x",
            description: "A bodyweight chest press that also targets the triceps and shoulders.",
            alternatives: ["Knee Push-ups", "Incline Push-ups"]
          },
          {
            name: "Lunges",
            reps: "20x",
            description: "Stepping forward with one leg to work quads, hamstrings, and glutes.",
            alternatives: ["Step-ups", "Split Squats"]
          },
          {
            name: "Leg Raises",
            reps: "10x",
            description: "Lying flat, lifting legs to work lower abs.",
            alternatives: ["Reverse Crunches", "V-Ups"]
          },
          {
            name: "Bear Crawl (forward + back)",
            reps: "10x",
            description: "A core and coordination-focused move using all four limbs to crawl.",
            alternatives: ["Crab Walk", "Mountain Climbers"]
          },
          {
            name: "Plank Shoulder Taps",
            reps: "30s",
            description: "From plank position, alternate tapping shoulders to work core stability.",
            alternatives: ["Plank Hold", "Bird Dog"]
          }
        ]
      },
      running: {
        type: "Easy Run",
        duration: "20–25 min",
        description: "Light run focused on technique, posture, and relaxed breathing.",
        alternative: "2 min run / 1 min walk"
      }
    }
  },
  "3-4": {
    "Day 1": {
      warmup: [
        "20x Jumping Jacks",
        "10x Arm Circles (each direction)",
        "10x Air Squats",
        "30s Plank Hold"
      ],
      workout: {
        type: "Strength Block",
        rounds: 3,
        exercises: [
          {
            name: "Push-ups",
            reps: "12x",
            description: "A bodyweight chest press that also targets the triceps and shoulders.",
            alternatives: ["Knee Push-ups", "Incline Push-ups"]
          },
          {
            name: "Air Squats",
            reps: "15x",
            description: "A lower body exercise targeting quads, hamstrings, and glutes.",
            alternatives: ["Wall Sit", "Chair Squats"]
          },
          {
            name: "V-ups / Leg Raises",
            reps: "10x",
            description: "Core-focused movement, lifting legs or combining with crunch for full-body engagement.",
            alternatives: ["Toe Touches", "Crunches"]
          },
          {
            name: "Bear Crawl (forward + back)",
            reps: "10x",
            description: "A core and coordination-focused move using all four limbs to crawl.",
            alternatives: ["Crab Walk", "Mountain Climbers"]
          },
          {
            name: "Plank Shoulder Taps",
            reps: "30s",
            description: "From plank position, alternate tapping shoulders to work core stability.",
            alternatives: ["Plank Hold", "Bird Dog"]
          }
        ]
      },
      running: {
        type: "Easy Run",
        duration: "25–30 min",
        description: "Light run focused on breathing, posture, and a relaxed rhythm.",
        alternative: "3 min run / 1 min walk"
      }
    },
    "Day 2": {
      warmup: [
        "20x High Knees",
        "10x Arm Swings",
        "10x Reverse Lunges",
        "20s Plank + 10x Shoulder Taps"
      ],
      workout: {
        type: "EMOM",
        rounds: 3,
        exercises: [
          {
            name: "Push-ups",
            reps: "12x",
            description: "A bodyweight chest press that also targets the triceps and shoulders.",
            alternatives: ["Incline Push-ups", "Knee Push-ups"]
          },
          {
            name: "Air Squats",
            reps: "15x",
            description: "A lower body exercise targeting the quads, hamstrings, and glutes.",
            alternatives: ["Wall Sit", "Chair Squats"]
          },
          {
            name: "Leg Raises",
            reps: "10x",
            description: "An abdominal movement that targets the lower core.",
            alternatives: ["Flutter Kicks", "Reverse Crunch"]
          },
          {
            name: "Shoulder Taps",
            reps: "20x",
            description: "Alternating shoulder taps in a plank position to build stability and shoulder strength.",
            alternatives: ["Plank Hold", "Bird Dog"]
          }
        ]
      },
      finisher: {
        type: "Core Finisher",
        rounds: 2,
        exercises: [
          "40s Plank Hold",
          "10x Push-ups",
          "20x Russian Twists",
          "10x Superman Hold (3s each)"
        ]
      }
    },
    "Day 3": {
      warmup: [
        "10x Arm Circles",
        "10x Inchworm to Plank",
        "20x Jumping Jacks",
        "10x Mountain Climbers"
      ],
      workout: {
        type: "Strength Block",
        rounds: 3,
        exercises: [
          {
            name: "Push-ups",
            reps: "10x",
            description: "A classic upper body movement targeting chest, triceps, and shoulders.",
            alternatives: ["Knee Push-ups", "Incline Push-ups"]
          },
          {
            name: "Pike Push-ups",
            reps: "10x",
            description: "Targets the shoulders and upper chest by simulating an overhead press.",
            alternatives: ["Incline Pike Push-ups", "Wall Handstand Hold"]
          },
          {
            name: "Split Squats",
            reps: "15x each leg",
            description: "A unilateral leg movement focusing on quads and glutes.",
            alternatives: ["Step-ups", "Bulgarian Split Squats"]
          },
          {
            name: "Bicycle Crunches",
            reps: "20x",
            description: "A core movement emphasizing obliques and hip flexors.",
            alternatives: ["Toe Touches", "Russian Twists"]
          }
        ]
      },
      running: {
        type: "Interval Run",
        description: "6 rounds of fast intervals with full recovery in between.",
        structure: [
          "200–300 m fast run",
          "60s walk / full recovery"
        ]
      }
    },
    "Day 4": {
      warmup: [
        "Arm and Hip Circles",
        "World's Greatest Stretch",
        "Downward Dog to Cobra"
      ],
      workout: {
        type: "Core & Stability Circuit",
        rounds: "2–3",
        exercises: [
          {
            name: "Side Plank",
            reps: "30s each side",
            description: "Strengthens the obliques and improves lateral stability.",
            alternatives: ["Side Plank with Reach", "Knee Side Plank"]
          },
          {
            name: "Push-up to Plank",
            reps: "10x",
            description: "Transitions between push-up and elbow plank to challenge the core and shoulders.",
            alternatives: ["Plank Up-Downs", "Modified Push-up to Plank"]
          },
          {
            name: "Leg Raises",
            reps: "20x",
            description: "Engages lower abs through controlled leg lifts.",
            alternatives: ["Flutter Kicks", "Reverse Crunches"]
          },
          {
            name: "Superman Reaches",
            reps: "15x",
            description: "Strengthens the lower back, glutes, and posterior chain.",
            alternatives: ["Bird Dog", "Cobra Raises"]
          }
        ]
      },
      running: {
        type: "Recovery Run or Walk",
        duration: "20–25 min",
        description: "Use this day for active recovery. Maintain a relaxed pace.",
        alternative: "2 min jog / 1 min walk"
      }
    }
const conditioningFrequencies = {
  "1-2": { ... },
  "3-4": { ... },
  "5": {
    "Day 1": {
      warmup: [
        "20x Jumping Jacks",
        "10x Arm Circles (each direction)",
        "10x Air Squats",
        "30s Plank Hold"
      ],
      workout: {
        type: "Strength Block",
        rounds: 3,
        exercises: [
          {
            name: "Push-ups",
            reps: "12x",
            description: "A bodyweight chest press that also targets the triceps and shoulders.",
            alternatives: ["Knee Push-ups", "Incline Push-ups"]
          },
          {
            name: "Air Squats",
            reps: "15x",
            description: "A lower body exercise targeting quads, hamstrings, and glutes.",
            alternatives: ["Wall Sit", "Chair Squats"]
          },
          {
            name: "V-ups or Leg Raises",
            reps: "10x",
            description: "Core-focused movement for strengthening the lower and upper abdominal area.",
            alternatives: ["Crunches", "Toe Touches"]
          },
          {
            name: "Bear Crawl (forward + back)",
            reps: "10x",
            description: "A core and coordination-focused move using all four limbs to crawl.",
            alternatives: ["Crab Walk", "Mountain Climbers"]
          },
          {
            name: "Plank Shoulder Taps",
            reps: "30s",
            description: "From plank position, alternate tapping shoulders to work core stability.",
            alternatives: ["Plank Hold", "Bird Dog"]
          }
        ]
      },
      running: {
        type: "Easy Run",
        duration: "25–30 min",
        description: "Light run focused on posture, breathing, and a relaxed rhythm.",
        alternative: "3 min run / 1 min walk"
      }
    },
    "Day 2": {
      warmup: [
        "20x High Knees",
        "10x Arm Swings",
        "10x Reverse Lunges",
        "20s Plank + 10x Shoulder Taps"
      ],
      workout: {
        type: "EMOM",
        rounds: 3,
        exercises: [
          {
            name: "Push-ups",
            reps: "12x",
            description: "A bodyweight chest press that also targets the triceps and shoulders.",
            alternatives: ["Incline Push-ups", "Knee Push-ups"]
          },
          {
            name: "Air Squats",
            reps: "15x",
            description: "A lower body exercise targeting quads, hamstrings, and glutes.",
            alternatives: ["Wall Sit", "Chair Squats"]
          },
          {
            name: "Leg Raises",
            reps: "10x",
            description: "An abdominal movement that targets the lower core.",
            alternatives: ["Flutter Kicks", "Reverse Crunch"]
          },
          {
            name: "Shoulder Taps",
            reps: "20x",
            description: "Alternating shoulder taps in a plank position to build stability and shoulder strength.",
            alternatives: ["Plank Hold", "Bird Dog"]
          }
        ]
      },
      finisher: {
        type: "Core Finisher",
        rounds: 2,
        exercises: [
          "40s Plank Hold",
          "10x Push-ups",
          "20x Russian Twists",
          "10x Superman Hold (3s each)"
        ]
      }
    },
    "Day 3": {
      warmup: [
        "10x Arm Circles",
        "10x Inchworm to Plank",
        "20x Jumping Jacks",
        "10x Mountain Climbers"
      ],
      workout: {
        type: "Strength Block",
        rounds: 3,
        exercises: [
          {
            name: "Push-ups",
            reps: "10x",
            description: "Classic upper body movement working chest, shoulders, and triceps.",
            alternatives: ["Incline Push-ups", "Knee Push-ups"]
          },
          {
            name: "Pike Push-ups (or Incline Push-ups)",
            reps: "10x",
            description: "Targets shoulders and upper chest with bodyweight resistance.",
            alternatives: ["Shoulder Tap Push-ups", "Wall Pike Push-ups"]
          },
          {
            name: "Step-back Lunges",
            reps: "15x",
            description: "Lunge variation focusing on glutes, quads, and stability.",
            alternatives: ["Forward Lunges", "Walking Lunges"]
          },
          {
            name: "Bicycle Crunches",
            reps: "20x",
            description: "Dynamic core exercise hitting obliques and rectus abdominis.",
            alternatives: ["Dead Bug", "Toe Touches"]
          }
        ]
      },
      running: {
        type: "Speed Intervals",
        duration: "6 rounds",
        description: "200–300 m fast run followed by 60s walk or jog. Focus on clean form and speed.",
        alternative: "Short sprints with walk back recovery"
      }
    },
    "Day 4": {
      warmup: [
        "Arm and Hip Circles",
        "Deep Lunge Stretch",
        "Downward Dog to Cobra"
      ],
      workout: {
        type: "Core & Control",
        rounds: 2,
        exercises: [
          {
            name: "Side Plank",
            reps: "30s each side",
            description: "Static core hold for oblique activation and trunk stability.",
            alternatives: ["Knee Side Plank", "Forearm Side Plank"]
          },
          {
            name: "Push-up to Plank",
            reps: "10x",
            description: "Upper body and core coordination exercise moving between plank and push-up.",
            alternatives: ["Up-Down Plank", "Kneeling Push-up to Plank"]
          },
          {
            name: "Leg Raises",
            reps: "20x",
            description: "Lower abdominal isolation movement.",
            alternatives: ["Flutter Kicks", "Lying Toe Touches"]
          },
          {
            name: "Superman Reach",
            reps: "15x",
            description: "Posterior chain activation movement for lower back and glutes.",
            alternatives: ["Bird Dog", "Bridge Hold"]
          }
        ]
      },
      running: {
        type: "Light Jog / Walk",
        duration: "20–25 min",
        description: "Recovery-focused light jog or 2 min jog / 1 min walk split.",
        alternative: "Brisk walk with mobility drills"
      }
    },
    "Day 5": {
      warmup: [
        "20x Jumping Jacks",
        "10x Reverse Lunges",
        "5x Inchworms to Plank",
        "30s Plank + 10x Shoulder Taps"
      ],
      workout: {
        type: "Full Body Circuit",
        rounds: 3,
        exercises: [
          {
            name: "Push-ups",
            reps: "10x",
            description: "Classic upper body movement working chest, shoulders, and triceps.",
            alternatives: ["Incline Push-ups", "Knee Push-ups"]
          },
          {
            name: "Air Squats",
            reps: "20x",
            description: "A lower body exercise targeting quads, hamstrings, and glutes.",
            alternatives: ["Wall Sit", "Chair Squats"]
          },
          {
            name: "Leg Raises",
            reps: "10x",
            description: "An abdominal movement that targets the lower core.",
            alternatives: ["Flutter Kicks", "Toe Touches"]
          },
          {
            name: "Jump Lunges",
            reps: "10x",
            description: "Plyometric leg exercise that improves power and coordination.",
            alternatives: ["Step-back Lunges", "Split Squats"]
          },
          {
            name: "Plank Hold",
            reps: "30s",
            description: "Static core isometric to improve trunk endurance and control.",
            alternatives: ["Knee Plank", "Elbow Plank"]
          }
        ]
      },
      running: {
        type: "Tempo Run",
        duration: "20 min total",
        description: "5 min easy pace, 10–12 min steady tempo, 5 min cooldown jog or walk.",
        alternative: "2 min brisk / 2 min jog x5"
      }
    }
const conditioningFrequencies = {
  "1-2": { ... },
  "3-4": { ... },
  "5": { ... },
  "5+": {
    "Day 1": {
      warmup: [
        "20x Jumping Jacks",
        "10x Arm Circles",
        "10x Air Squats",
        "30s Plank Hold"
      ],
      workout: {
        type: "Strength Block",
        rounds: 3,
        exercises: [
          {
            name: "Push-ups",
            reps: "12x",
            description: "A bodyweight chest press that also targets the triceps and shoulders.",
            alternatives: ["Knee Push-ups", "Incline Push-ups"]
          },
          {
            name: "Air Squats",
            reps: "15x",
            description: "A lower body exercise targeting quads, hamstrings, and glutes.",
            alternatives: ["Wall Sit", "Chair Squats"]
          },
          {
            name: "V-ups",
            reps: "10x",
            description: "Core-focused movement for strengthening the lower and upper abdominal area.",
            alternatives: ["Crunches", "Leg Raises"]
          },
          {
            name: "Bear Crawl (forward + back)",
            reps: "10x",
            description: "A core and coordination-focused move using all four limbs to crawl.",
            alternatives: ["Crab Walk", "Mountain Climbers"]
          },
          {
            name: "Plank Shoulder Taps",
            reps: "30s",
            description: "From plank position, alternate tapping shoulders to work core stability.",
            alternatives: ["Plank Hold", "Bird Dog"]
          }
        ]
      },
      running: {
        type: "Easy Run",
        duration: "25–30 min",
        description: "Light run focused on posture, breathing, and a relaxed rhythm.",
        alternative: "3 min run / 1 min walk"
      }
    },
    "Day 2": {
      warmup: [
        "20x High Knees",
        "10x Arm Swings",
        "10x Reverse Lunges",
        "30s Plank + 10x Shoulder Taps"
      ],
      workout: {
        type: "EMOM",
        rounds: 3,
        exercises: [
          {
            name: "Push-ups",
            reps: "12x",
            description: "A bodyweight chest press that also targets the triceps and shoulders.",
            alternatives: ["Incline Push-ups", "Knee Push-ups"]
          },
          {
            name: "Air Squats",
            reps: "15x",
            description: "A lower body exercise targeting quads, hamstrings, and glutes.",
            alternatives: ["Wall Sit", "Chair Squats"]
          },
          {
            name: "Leg Raises",
            reps: "10x",
            description: "An abdominal movement that targets the lower core.",
            alternatives: ["Flutter Kicks", "Reverse Crunch"]
          },
          {
            name: "Shoulder Taps",
            reps: "20x",
            description: "Alternating shoulder taps in a plank position to build stability and shoulder strength.",
            alternatives: ["Plank Hold", "Bird Dog"]
          }
        ]
      },
      finisher: {
        type: "Core Finisher",
        rounds: 2,
        exercises: [
          "40s Plank Hold",
          "10x Push-ups",
          "20x Russian Twists",
          "10x Superman Hold (3s each)"
        ]
      }
    },
    "Day 3": {
      warmup: [
        "10x Inchworms",
        "20x Jumping Jacks",
        "10x Arm Swings",
        "10x Mountain Climbers"
      ],
      workout: {
        type: "Strength Block",
        rounds: 3,
        exercises: [
          {
            name: "Push-ups",
            reps: "10x",
            description: "Classic upper body movement working chest, shoulders, and triceps.",
            alternatives: ["Incline Push-ups", "Knee Push-ups"]
          },
          {
            name: "Pike Push-ups",
            reps: "10x",
            description: "Targets shoulders and upper chest with bodyweight resistance.",
            alternatives: ["Wall Pike Push-ups", "Shoulder Tap Push-ups"]
          },
          {
            name: "Step-back Lunges",
            reps: "15x",
            description: "Lunge variation focusing on glutes, quads, and stability.",
            alternatives: ["Forward Lunges", "Walking Lunges"]
          },
          {
            name: "Bicycle Crunches",
            reps: "20x",
            description: "Dynamic core exercise hitting obliques and rectus abdominis.",
            alternatives: ["Dead Bug", "Toe Touches"]
          }
        ]
      },
      running: {
        type: "Speed Intervals",
        duration: "6 rounds",
        description: "200–300 m fast run with 60–90s walk. Focus on strong form and recovery.",
        alternative: "Sprint Intervals with walk back recovery"
      }
    },
    "Day 4": {
      warmup: [
        "Dynamic Leg Swings",
        "Arm Circles",
        "World's Greatest Stretch",
        "Downward Dog to Cobra"
      ],
      workout: {
        type: "Core Stability",
        rounds: 2,
        exercises: [
          {
            name: "Side Plank",
            reps: "30s each side",
            description: "Static core hold for oblique activation and trunk stability.",
            alternatives: ["Knee Side Plank", "Forearm Side Plank"]
          },
          {
            name: "Push-up to Plank",
            reps: "10x",
            description: "Upper body and core coordination exercise moving between plank and push-up.",
            alternatives: ["Up-Down Plank", "Kneeling Push-up to Plank"]
          },
          {
            name: "Leg Raises",
            reps: "20x",
            description: "Lower abdominal isolation movement.",
            alternatives: ["Flutter Kicks", "Lying Toe Touches"]
          },
          {
            name: "Superman Reaches",
            reps: "15x",
            description: "Posterior chain activation movement for lower back and glutes.",
            alternatives: ["Bird Dog", "Bridge Hold"]
          }
        ]
      },
      running: {
        type: "Light Jog or Walk",
        duration: "20–30 min",
        description: "Recovery-based jog or alternating walk/jog at zone 1–2 heart rate.",
        alternative: "2 min jog / 1 min walk"
      }
    },
    "Day 5": {
      warmup: [
        "20x Jumping Jacks",
        "10x Reverse Lunges",
        "5x Inchworm to Plank",
        "30s Plank Hold"
      ],
      workout: {
        type: "Full Body Push Circuit",
        rounds: 3,
        exercises: [
          {
            name: "Push-ups",
            reps: "12x",
            description: "Classic upper body movement working chest, shoulders, and triceps.",
            alternatives: ["Incline Push-ups", "Knee Push-ups"]
          },
          {
            name: "Air Squats",
            reps: "20x",
            description: "Bodyweight lower body movement focusing on quads, hamstrings, and glutes.",
            alternatives: ["Wall Sit", "Chair Squats"]
          },
          {
            name: "Leg Raises",
            reps: "10x",
            description: "An abdominal movement that targets the lower core.",
            alternatives: ["Flutter Kicks", "Toe Touches"]
          },
          {
            name: "Jump Lunges",
            reps: "10x",
            description: "Plyometric leg exercise that improves power and coordination.",
            alternatives: ["Split Squats", "Step-back Lunges"]
          },
          {
            name: "Plank with Shoulder Taps",
            reps: "30s",
            description: "Static core isometric with added shoulder activation.",
            alternatives: ["Plank Hold", "Bird Dog"]
          }
        ]
      },
      running: {
        type: "Tempo Run",
        duration: "22–25 min",
        description: "5 min easy pace, 12–15 min tempo pace (moderate), 5 min cooldown jog/walk.",
        alternative: "2 min brisk jog / 2 min recovery jog x5"
      }
    },
    "Day 6": {
      warmup: [
        "Light dynamic mobility",
        "Wrist warm-up",
        "Shoulder rotations"
      ],
      workout: {
        type: "Push-up Challenge + Core",
        rounds: 1,
        exercises: [
          {
            name: "Push-up Ladder",
            reps: "1–2–3–4–5... to failure",
            description: "Progressive push-up challenge with short rest to build endurance.",
            alternatives: ["Knee Push-ups", "Incline Ladder"]
          }
        ]
      },
      core: {
        type: "Core Burn",
        rounds: 2,
        exercises: [
          "20x Russian Twists",
          "10x Leg Raises",
          "10x V-ups",
          "1 min Plank"
        ]
      },
      cooldown: {
        type: "Stretch",
        duration: "5–10 min",
        focus: ["Chest", "Shoulders", "Hips", "Hamstrings"]
      }
    }
  }
};
// Add tooltip to alert users about alternate swap feature
const observer = new MutationObserver(() => {
const container = document.querySelector(".training-day-header");
if (container && !document.querySelector(".alt-tip")) {
const tip = document.createElement("div");
tip.className = "alt-tip";
tip.textContent = "💡 Tip: Click 🔁 to swap this exercise for an alternative!";
tip.style.cssText = "background:#fffbdd;border-left:4px solid #ffd43b;padding:8px;margin-top:10px;font-size:14px;font-weight:500;color:#4b4b00;";
container.parentNode.insertBefore(tip, container.nextSibling);
}
});
observer.observe(document.body, { childList: true, subtree: true });

resolve();
});
}
