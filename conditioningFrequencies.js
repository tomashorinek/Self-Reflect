function loadConditioningData() {
  return new Promise((resolve, reject) => {
    window.conditioningFrequencies = {
      gym: {
        "1-2": [
          { name: "Full Body Circuit", sets: "3 rounds", alt: ["Full Body Machines", "Barbell Complex"] },
          { name: "Rowing Machine", sets: "10 min moderate pace", alt: ["Bike", "Treadmill"] },
          { name: "DB Thrusters", sets: "3x15", alt: ["Leg Press + Shoulder Press", "Wall Balls"] },
          { name: "Battle Ropes", sets: "3x30s", alt: ["Jump Rope", "Kettlebell Swings"] }
        ],
        "3-4": {
          "Day 1": [
            { name: "Row Intervals", sets: "5x250m / 60s rest", alt: ["Assault Bike", "Treadmill Sprints"] },
            { name: "DB Lunges", sets: "3x12", alt: ["Walking Lunges", "Leg Press"] },
            { name: "Push Press", sets: "3x10", alt: ["Overhead Press Machine", "Dumbbell Shoulder Press"] }
          ],
          "Day 2": [
            { name: "KB Swings", sets: "3x20", alt: ["Cable Pullthrough", "DB Swings"] },
            { name: "Incline Walk", sets: "15 min", alt: ["Bike Easy", "Elliptical"] },
            { name: "Bodyweight Core Circuit", sets: "3 rounds", alt: ["Plank Series", "Sit-ups"] }
          ],
          "Day 3": [
            { name: "Row + Strength Combo", sets: "Alternate 3x", alt: ["Bike + DB Complex", "Run + Push-ups"] },
            { name: "Sled Push", sets: "5x20m", alt: ["Treadmill Sprint", "Prowler Push"] },
            { name: "Wall Balls", sets: "3x15", alt: ["Medicine Ball Slams", "Thrusters"] }
          ]
        },
        "5": {
          "Mon": [
            { name: "Bike Intervals", sets: "6x30s on / 60s rest", alt: ["Rowing", "Treadmill Sprints"] },
            { name: "Leg Press", sets: "3x15", alt: ["Smith Machine Squat", "Hack Squat", "Pendulum Squat"] }
          ],
          "Tue": [
            { name: "Kettlebell Swings", sets: "4x20", alt: ["DB Swings", "Jump Squats"] },
            { name: "Push-ups", sets: "3x max reps", alt: ["Incline Push-ups", "Chest Press"] }
          ],
          "Wed": [
            { name: "Run or Incline Walk", sets: "20 min", alt: ["Bike", "Elliptical"] },
            { name: "Plank Series", sets: "3x30s", alt: ["Side Plank", "Bird Dog"] }
          ],
          "Fri": [
            { name: "Barbell Complex", sets: "4 rounds", alt: ["DB Complex", "Full Body Circuit"] },
            { name: "Jump Rope", sets: "5x1 min", alt: ["High Knees", "Jumping Jacks"] }
          ],
          "Sat": [
            { name: "Rowing Intervals", sets: "4x300m", alt: ["Bike Intervals", "Treadmill Sprints"] },
            { name: "Leg Circuit", sets: "3 rounds", alt: ["Split Squats", "Step-ups"] }
          ]
        },
        "5+": {
          "Mon": [
            { name: "Full Body Circuit (Gym)", sets: "3 rounds", alt: ["DB Complex", "Barbell Complex"] },
            { name: "Bike Sprint", sets: "6x30s", alt: ["Rowing Sprint", "Jump Rope Sprints"] }
          ],
          "Tue": [
            { name: "Strength Combo", sets: "Barbell Complex 4 rounds", alt: ["DB Combo Circuit", "Full Body Machine Circuit"] }
          ],
          "Wed": [
            { name: "Run Outdoors", sets: "20–30 min steady", alt: ["Row steady pace", "Bike Long Ride"] }
          ],
          "Thu": [
            { name: "Mobility & Recovery", sets: "Stretching 20–30 min", alt: ["Foam Rolling", "Yoga Flow"] }
          ],
          "Fri": [
            { name: "KB Swing + Wall Balls", sets: "4 rounds", alt: ["Thrusters", "Jump Squats"] }
          ],
          "Sat": [
            { name: "Treadmill Incline Sprint", sets: "8x20s / 40s rest", alt: ["Bike Sprint", "Assault Bike"] }
          ],
          "Sun": [
            { name: "Optional Cardio", sets: "30–45 min light jog or bike", alt: ["Hiking", "Row steady"] }
          ]
        }
      },
      bodyweight: {
        "1-2": [
          { name: "Bodyweight Conditioning Circuit", sets: "3 rounds", alt: ["AMRAP 10 min", "Full Body Tabata"] },
          { name: "Jumping Jacks", sets: "3x20", alt: ["High Knees", "Seal Jacks"] },
          { name: "Push-ups", sets: "3x12", alt: ["Kneeling Push-ups", "Incline Push-ups"] },
          { name: "Air Squats", sets: "3x20", alt: ["Jump Squats", "Wall Sit"] }
        ],
        "3-4": {
          "Day 1": [
            { name: "Burpees", sets: "3x10", alt: ["Jump Squats", "Sprawls"] },
            { name: "Plank", sets: "3x30s", alt: ["Side Plank", "Plank Shoulder Taps"] }
          ],
          "Day 2": [
            { name: "Jump Squats", sets: "3x15", alt: ["Air Squats", "Split Squats"] },
            { name: "Push-ups", sets: "3x max", alt: ["Incline Push-ups", "Wide Push-ups"] }
          ],
          "Day 3": [
            { name: "Cardio Circuit", sets: "5 rounds: 20s work / 10s rest", alt: ["Tabata Core", "Bodyweight HIIT"] }
          ]
        },
        "5": {
          "Mon": [
            { name: "Push-up & Squat Superset", sets: "3x15", alt: ["Jump Squats + Incline Push-ups", "Wall Sit + Push-ups"] }
          ],
          "Tue": [
            { name: "Core Circuit", sets: "3 rounds", alt: ["Plank Series", "Sit-ups"] }
          ],
          "Wed": [
            { name: "30 min walk/jog outdoors", sets: "", alt: ["Step-ups", "Stairs Intervals"] }
          ],
          "Fri": [
            { name: "AMRAP 10 min", sets: "Burpees, Air Squats, Jump Lunges", alt: ["Tabata Bodyweight", "EMOM Circuit"] }
          ],
          "Sat": [
            { name: "Mobility + Plank", sets: "Stretch + Core", alt: ["Yoga Flow", "Bird Dog"] }
          ]
        },
        "5+": {
          "Mon": [
            { name: "Bodyweight Full Body Circuit", sets: "3 rounds", alt: ["Tabata Full Body", "EMOM 12"] }
          ],
          "Tue": [
            { name: "Stairs or Jog Intervals", sets: "15–20 min", alt: ["Jump Rope", "High Knees"] }
          ],
          "Wed": [
            { name: "Burpee Ladder (5 to 1)", sets: "", alt: ["Jump Squat Ladder", "Push-up Ladder"] }
          ],
          "Thu": [
            { name: "Mobility / Stretch Day", sets: "20 min", alt: ["Yoga", "Foam Roll"] }
          ],
          "Fri": [
            { name: "Bodyweight AMRAP 15", sets: "Push-ups, Squats, Plank", alt: ["EMOM Bodyweight", "Full Body Circuit"] }
          ],
          "Sat": [
            { name: "Outdoor Cardio (Run or Walk)", sets: "30–45 min", alt: ["Step-ups", "Bike Intervals"] }
          ],
          "Sun": [
            { name: "Optional: Plank + Jump Rope", sets: "2 rounds", alt: ["Mountain Climbers", "High Knees"] }
          ]
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
