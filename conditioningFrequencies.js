const conditioningFrequencies = {
  gym: {
    "1-2": [
      { name: "Full Body Circuit", sets: "3 rounds", alt: [] },
      { name: "Rowing Machine", sets: "10 min moderate pace", alt: ["Bike", "Treadmill"] },
      { name: "DB Thrusters", sets: "3x15", alt: ["Leg Press + Shoulder Press"] },
      { name: "Battle Ropes", sets: "3x30s", alt: ["Jump Rope"] }
    ],
    "3-4": {
      "Day 1": [
        { name: "Row Intervals", sets: "5x250m / 60s rest", alt: ["Assault Bike"] },
        { name: "DB Lunges", sets: "3x12", alt: ["Leg Press"] },
        { name: "Push Press", sets: "3x10", alt: ["Chest Press Machine"] }
      ],
      "Day 2": [
        { name: "KB Swings", sets: "3x20", alt: ["Cable Pullthrough"] },
        { name: "Incline Walk", sets: "15 min", alt: ["Bike Easy"] },
        { name: "Bodyweight Core Circuit", sets: "3 rounds", alt: [] }
      ],
      "Day 3": [
        { name: "Row + Strength Combo", sets: "Alternate 3x", alt: [] },
        { name: "Sled Push", sets: "5x20m", alt: ["Treadmill Sprint"] },
        { name: "Wall Balls", sets: "3x15", alt: [] }
      ]
    },
    "5": {
      "Mon": [
        { name: "Bike Intervals", sets: "6x30s on / 60s rest", alt: ["Rowing"] },
        { name: "Leg Press", sets: "3x15", alt: [] }
      ],
      "Tue": [
        { name: "Kettlebell Swings", sets: "4x20", alt: [] },
        { name: "Push-ups", sets: "3x max reps", alt: ["Chest Press"] }
      ],
      "Wed": [
        { name: "Run or Incline Walk", sets: "20 min", alt: ["Bike"] },
        { name: "Plank Series", sets: "3x30s", alt: [] }
      ],
      "Fri": [
        { name: "Barbell Complex", sets: "4 rounds", alt: [] },
        { name: "Jump Rope", sets: "5x1 min", alt: [] }
      ],
      "Sat": [
        { name: "Rowing Intervals", sets: "4x300m", alt: [] },
        { name: "Leg Circuit", sets: "3 rounds", alt: [] }
      ]
    },
    "5+": {
      "Mon": [
        { name: "Full Body Circuit (Gym)", sets: "3 rounds", alt: [] },
        { name: "Bike Sprint", sets: "6x30s", alt: [] }
      ],
      "Tue": [
        { name: "Strength Combo", sets: "Barbell Complex 4 rounds", alt: [] }
      ],
      "Wed": [
        { name: "Run Outdoors", sets: "20–30 min steady", alt: ["Row steady pace"] }
      ],
      "Thu": [
        { name: "Mobility & Recovery", sets: "Stretching 20–30 min", alt: [] }
      ],
      "Fri": [
        { name: "KB Swing + Wall Balls", sets: "4 rounds", alt: [] }
      ],
      "Sat": [
        { name: "Treadmill Incline Sprint", sets: "8x20s / 40s rest", alt: [] }
      ],
      "Sun": [
        { name: "Optional Cardio", sets: "30–45 min light jog or bike", alt: [] }
      ]
    }
  },
  bodyweight: {
    "1-2": [
      { name: "Bodyweight Conditioning Circuit", sets: "3 rounds", alt: [] },
      { name: "Jumping Jacks", sets: "3x20", alt: [] },
      { name: "Push-ups", sets: "3x12", alt: [] },
      { name: "Air Squats", sets: "3x20", alt: [] }
    ],
    "3-4": {
      "Day 1": [
        { name: "Burpees", sets: "3x10", alt: [] },
        { name: "Plank", sets: "3x30s", alt: [] }
      ],
      "Day 2": [
        { name: "Jump Squats", sets: "3x15", alt: [] },
        { name: "Push-ups", sets: "3x max", alt: [] }
      ],
      "Day 3": [
        { name: "Cardio Circuit", sets: "5 rounds: 20s work / 10s rest", alt: [] }
      ]
    },
    "5": {
      "Mon": [
        { name: "Push-up & Squat Superset", sets: "3x15", alt: [] }
      ],
      "Tue": [
        { name: "Core Circuit", sets: "3 rounds", alt: [] }
      ],
      "Wed": [
        { name: "30 min walk/jog outdoors", sets: "", alt: [] }
      ],
      "Fri": [
        { name: "AMRAP 10 min", sets: "Burpees, Air Squats, Jump Lunges", alt: [] }
      ],
      "Sat": [
        { name: "Mobility + Plank", sets: "Stretch + Core", alt: [] }
      ]
    },
    "5+": {
      "Mon": [
        { name: "Bodyweight Full Body Circuit", sets: "3 rounds", alt: [] }
      ],
      "Tue": [
        { name: "Stairs or Jog Intervals", sets: "15–20 min", alt: [] }
      ],
      "Wed": [
        { name: "Burpee Ladder (5 to 1)", sets: "", alt: [] }
      ],
      "Thu": [
        { name: "Mobility / Stretch Day", sets: "20 min", alt: [] }
      ],
      "Fri": [
        { name: "Bodyweight AMRAP 15", sets: "Push-ups, Squats, Plank", alt: [] }
      ],
      "Sat": [
        { name: "Outdoor Cardio (Run or Walk)", sets: "30–45 min", alt: [] }
      ],
      "Sun": [
        { name: "Optional: Plank + Jump Rope", sets: "2 rounds", alt: [] }
      ]
    }
  }
};

// Make it globally available
window.conditioningFrequencies = conditioningFrequencies;
