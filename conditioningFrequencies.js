function loadConditioningData() {
return new Promise(resolve => {
    const day1 = {
      name: "Day 1",
      exercises: [
        {
          name: "Warm-up",
          description: "20x Jumping Jacks, 10x Arm Circles (each direction), 10x Air Squats, 30s Plank Hold.",
          alternatives: [
            { name: "Jump Rope", description: "Light skipping to raise heart rate." },
            { name: "Dynamic Stretching", description: "Full-body mobility routine." }
          ],
          alt: ["Jump Rope", "Dynamic Stretching"]
        },
        {
          name: "Push-ups",
          description: "Bodyweight press for chest, shoulders, and triceps.",
          alternatives: [
            { name: "Incline Push-ups", description: "Hands elevated to reduce load." },
            { name: "Knee Push-ups", description: "Knees on the ground to decrease intensity." }
          ],
          alt: ["Incline Push-ups", "Knee Push-ups"]
        },
        {
          name: "Lunges",
          description: "Forward step to work quads, hamstrings, and glutes.",
          alternatives: [
            { name: "Step-ups", description: "Use a box or bench to step up and down." },
            { name: "Split Squats", description: "Static lunge focusing on balance and unilateral strength." }
          ],
          alt: ["Step-ups", "Split Squats"]
        },
        {
          name: "Plank Shoulder Taps",
          description: "From plank, alternate tapping shoulders to build core stability.",
          alternatives: [
            { name: "Plank Hold", description: "Maintain a straight-arm plank without movement." },
            { name: "Bird Dog", description: "Opposite arm and leg extensions from tabletop position." }
          ],
          alt: ["Plank Hold", "Bird Dog"]
        },
        {
          name: "Running Block",
          description: "Easy run 20–25 min focusing on technique and relaxed breathing.",
          alternatives: [
            { name: "2 min run / 1 min walk", description: "Interval option for controlled effort." },
            { name: "Cycling", description: "Steady ride for the same duration." }
          ],
          alt: ["2 min run / 1 min walk", "Cycling"]
        }
      ]
    };

    const day2 = {
      name: "Day 2",
      exercises: [
        {
          name: "Warm-up",
          description: "20x High Knees, 10x Arm Swings, 10x Reverse Lunges, 30s Plank + 10 Shoulder Taps.",
          alternatives: [
            { name: "Jump Rope", description: "Light skipping to raise heart rate." },
            { name: "Dynamic Stretching", description: "Full-body mobility routine." }
          ],
          alt: ["Jump Rope", "Dynamic Stretching"]
        },
        {
          name: "Squat Jumps",
          description: "Explosive squats to develop power and conditioning.",
          alternatives: [
            { name: "Air Squats", description: "Bodyweight squats focusing on depth and control." },
            { name: "Box Jumps", description: "Jump onto a sturdy platform." }
          ],
          alt: ["Air Squats", "Box Jumps"]
        },
        {
          name: "Mountain Climbers",
          description: "Alternating knees drive from plank position to elevate heart rate.",
          alternatives: [
            { name: "High Knees", description: "Running in place lifting knees high." },
            { name: "Plank Jacks", description: "Jump legs in and out from plank stance." }
          ],
          alt: ["High Knees", "Plank Jacks"]
        },
        {
          name: "Leg Raises",
          description: "Lying leg lifts targeting lower abdominal muscles.",
          alternatives: [
            { name: "Reverse Crunches", description: "Curl hips toward chest to engage lower abs." },
            { name: "Flutter Kicks", description: "Quick alternating leg lifts while lying down." }
          ],
          alt: ["Reverse Crunches", "Flutter Kicks"]
        },
        {
          name: "Running Block",
          description: "Easy run 20–25 min focusing on posture and relaxed breathing.",
          alternatives: [
            { name: "2 min run / 1 min walk", description: "Interval option for controlled effort." },
            { name: "Cycling", description: "Steady ride for the same duration." }
          ],
          alt: ["2 min run / 1 min walk", "Cycling"]
        }
      ]
    };

    const day3 = {
      name: "Day 3",
      exercises: [
        {
          name: "Warm-up",
          description: "10x Arm Circles, 10x Inchworm to Plank, 20x Jumping Jacks, 10x Mountain Climbers.",
          alternatives: [
            { name: "Jump Rope", description: "Light skipping to raise heart rate." },
            { name: "Dynamic Stretching", description: "Full-body mobility routine." }
          ],
          alt: ["Jump Rope", "Dynamic Stretching"]
        },
        {
          name: "Push-ups",
          description: "Bodyweight press for chest, shoulders, and triceps.",
          alternatives: [
            { name: "Incline Push-ups", description: "Hands elevated to reduce load." },
            { name: "Knee Push-ups", description: "Knees on the ground to decrease intensity." }
          ],
          alt: ["Incline Push-ups", "Knee Push-ups"]
        },
        {
          name: "Pike Push-ups",
          description: "Shoulder-focused push-up variation mimicking an overhead press.",
          alternatives: [
            { name: "Incline Pike Push-ups", description: "Feet elevated to adjust difficulty." },
            { name: "Wall Handstand Hold", description: "Static hold to build overhead strength." }
          ],
          alt: ["Incline Pike Push-ups", "Wall Handstand Hold"]
        },
        {
          name: "Split Squats",
          description: "Unilateral leg exercise focusing on quads and glutes.",
          alternatives: [
            { name: "Step-ups", description: "Step onto a raised platform one leg at a time." },
            { name: "Bulgarian Split Squats", description: "Rear foot elevated for increased range." }
          ],
          alt: ["Step-ups", "Bulgarian Split Squats"]
        },
        {
          name: "Running Block",
          description: "Interval run: 6 rounds of 200–300 m fast run with 60s walk recovery.",
          alternatives: [
            { name: "Hill Sprints", description: "Short uphill runs with walk down recovery." },
            { name: "Rowing Intervals", description: "200 m efforts on rower with 60s rest." }
          ],
          alt: ["Hill Sprints", "Rowing Intervals"]
        }
      ]
    };

    const day4 = {
      name: "Day 4",
      exercises: [
        {
          name: "Warm-up",
          description: "Arm and Hip Circles, World's Greatest Stretch, Downward Dog to Cobra flow.",
          alternatives: [
            { name: "Jump Rope", description: "Light skipping to raise heart rate." },
            { name: "Dynamic Stretching", description: "Full-body mobility routine." }
          ],
          alt: ["Jump Rope", "Dynamic Stretching"]
        },
        {
          name: "Side Plank",
          description: "Static hold strengthening obliques and lateral core.",
          alternatives: [
            { name: "Knee Side Plank", description: "Support with knees for less intensity." },
            { name: "Forearm Side Plank", description: "Perform on forearm for shoulder comfort." }
          ],
          alt: ["Knee Side Plank", "Forearm Side Plank"]
        },
        {
          name: "Push-up to Plank",
          description: "Transition between push-up and elbow plank to challenge core and shoulders.",
          alternatives: [
            { name: "Plank Up-Downs", description: "Move from forearms to hands repeatedly." },
            { name: "Modified Push-up to Plank", description: "Perform on knees for reduced load." }
          ],
          alt: ["Plank Up-Downs", "Modified Push-up to Plank"]
        },
        {
          name: "Superman Reaches",
          description: "Prone arm and leg lifts to strengthen lower back and glutes.",
          alternatives: [
            { name: "Bird Dog", description: "Opposite arm/leg extensions from tabletop." },
            { name: "Bridge Hold", description: "Supine hip lift focusing on posterior chain." }
          ],
          alt: ["Bird Dog", "Bridge Hold"]
        },
        {
          name: "Running Block",
          description: "Recovery run or walk for 20–25 min at relaxed pace.",
          alternatives: [
            { name: "2 min jog / 1 min walk", description: "Gentle intervals for active recovery." },
            { name: "Cycling", description: "Easy ride keeping heart rate low." }
          ],
          alt: ["2 min jog / 1 min walk", "Cycling"]
        }
      ]
    };

    const day5 = {
      name: "Day 5",
      exercises: [
        {
          name: "Warm-up",
          description: "20x Jumping Jacks, 10x Reverse Lunges, 5x Inchworms to Plank, 30s Plank + 10 Shoulder Taps.",
          alternatives: [
            { name: "Jump Rope", description: "Light skipping to raise heart rate." },
            { name: "Dynamic Stretching", description: "Full-body mobility routine." }
          ],
          alt: ["Jump Rope", "Dynamic Stretching"]
        },
        {
          name: "Push-ups",
          description: "Bodyweight press for chest, shoulders, and triceps.",
          alternatives: [
            { name: "Incline Push-ups", description: "Hands elevated to reduce load." },
            { name: "Knee Push-ups", description: "Knees on the ground to decrease intensity." }
          ],
          alt: ["Incline Push-ups", "Knee Push-ups"]
        },
        {
          name: "Air Squats",
          description: "Bodyweight squats targeting the entire lower body.",
          alternatives: [
            { name: "Wall Sit", description: "Static seated hold against a wall." },
            { name: "Chair Squats", description: "Use a chair for assistance." }
          ],
          alt: ["Wall Sit", "Chair Squats"]
        },
        {
          name: "Jump Lunges",
          description: "Explosive lunge variation building power and coordination.",
          alternatives: [
            { name: "Step-back Lunges", description: "Controlled backward lunges for stability." },
            { name: "Split Squats", description: "Static lunge focusing on balance." }
          ],
          alt: ["Step-back Lunges", "Split Squats"]
        },
        {
          name: "Running Block",
          description: "Tempo run: 5 min easy, 10–12 min steady tempo, 5 min cooldown.",
          alternatives: [
            { name: "2 min brisk / 2 min jog", description: "Alternating pace intervals for 20 min." },
            { name: "Elliptical Trainer", description: "Steady moderate effort for same duration." }
          ],
          alt: ["2 min brisk / 2 min jog", "Elliptical Trainer"]
        }
      ]
    };

    const day6 = {
      name: "Day 6",
      exercises: [
        {
          name: "Warm-up",
          description: "Light dynamic mobility, wrist warm-ups, and shoulder rotations.",
          alternatives: [
            { name: "Jump Rope", description: "Light skipping to raise heart rate." },
            { name: "Dynamic Stretching", description: "Full-body mobility routine." }
          ],
          alt: ["Jump Rope", "Dynamic Stretching"]
        },
        {
          name: "Push-up Ladder",
          description: "Perform 1-2-3-4-5... push-ups ladder with short rests to failure.",
          alternatives: [
            { name: "Knee Push-up Ladder", description: "Use knees to reduce difficulty." },
            { name: "Incline Push-up Ladder", description: "Hands elevated to lessen load." }
          ],
          alt: ["Knee Push-up Ladder", "Incline Push-up Ladder"]
        },
        {
          name: "Russian Twists",
          description: "Seated rotational core exercise.",
          alternatives: [
            { name: "Seated Knee Tucks", description: "Pull knees to chest while balancing." },
            { name: "Standing Oblique Crunch", description: "Side crunch while standing for core work." }
          ],
          alt: ["Seated Knee Tucks", "Standing Oblique Crunch"]
        },
        {
          name: "Leg Raises",
          description: "Lying leg lifts targeting lower abdominal muscles.",
          alternatives: [
            { name: "Reverse Crunches", description: "Curl hips toward chest to engage lower abs." },
            { name: "Flutter Kicks", description: "Quick alternating leg lifts while lying down." }
          ],
          alt: ["Reverse Crunches", "Flutter Kicks"]
        },
        {
          name: "Running Block",
          description: "Light jog or walk 20–30 min for recovery.",
          alternatives: [
            { name: "2 min jog / 1 min walk", description: "Gentle intervals for active recovery." },
            { name: "Cycling", description: "Easy ride keeping heart rate low." }
          ],
          alt: ["2 min jog / 1 min walk", "Cycling"]
        }
      ]
    };

    const bodyweight = {
      "1-2": { "Day 1": day1, "Day 2": day2 },
      "3-4": { "Day 1": day1, "Day 2": day2, "Day 3": day3, "Day 4": day4 },
      "5": { "Day 1": day1, "Day 2": day2, "Day 3": day3, "Day 4": day4, "Day 5": day5 },
      "5+": { "Day 1": day1, "Day 2": day2, "Day 3": day3, "Day 4": day4, "Day 5": day5, "Day 6": day6 }
    };

    const gym = JSON.parse(JSON.stringify(bodyweight));

    window.conditioningFrequencies = { bodyweight, gym };
    resolve();
  });
  }

if (typeof window !== "undefined") {
  window.loadConditioningData = loadConditioningData;
  if (!window.conditioningFrequencies) {
    loadConditioningData();
  }
}

export { loadConditioningData };
