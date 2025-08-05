function loadConditioningData() {
  return new Promise((resolve, reject) => {
    window.conditioningFrequencies = {};
    window.conditioningFrequencies.bodyweight = {};

    window.conditioningFrequencies.bodyweight['1-2'] = [
      {
        name: "Push-ups",
        sets: "3x12",
        alt: ["Incline Push-ups (hands on bench)", "Resistance Band Chest Press"]
      },
      {
        name: "Air Squats",
        sets: "3x20",
        alt: ["Wall Sit", "Goblet Squat (with backpack/dumbbell)"]
      },
      {
        name: "Leg Raises",
        sets: "3x10",
        alt: ["Flutter Kicks", "Resistance Band Leg Pulls"]
      },
      {
        name: "Bear Crawl forward + back",
        sets: "3x10",
        alt: ["Crab Walk", "Mountain Climbers"]
      },
      {
        name: "Plank Shoulder Taps",
        sets: "3x30s",
        alt: ["Plank with Reach", "Side-to-Side Plank Walk"]
      }
    ];

    window.conditioningFrequencies.bodyweight['3-4'] = {
      "Day 1": [
        { name: "Push-ups", sets: "3x12", alt: ["Incline Push-ups (hands on bench)", "Resistance Band Chest Press"] },
        { name: "Air Squats", sets: "3x15", alt: ["Wall Sit", "Goblet Squat (with backpack/dumbbell)"] },
        { name: "V-ups", sets: "3x10", alt: ["Toe Touches", "Hollow Body Hold"] },
        { name: "Bear Crawl forward + back", sets: "3x10", alt: ["Crab Walk", "Mountain Climbers"] },
        { name: "Plank Shoulder Taps", sets: "3x30s", alt: ["Plank with Reach", "Side-to-Side Plank Walk"] }
      ],
      "Day 2": [
        { name: "Push-ups", sets: "EMOM", alt: ["Incline Push-ups (hands on bench)", "Resistance Band Chest Press"] },
        { name: "Air Squats", sets: "EMOM", alt: ["Wall Sit", "Goblet Squat (with backpack/dumbbell)"] },
        { name: "Leg Raises", sets: "EMOM", alt: ["Flutter Kicks", "Resistance Band Leg Pulls"] },
        { name: "Plank Shoulder Taps", sets: "EMOM", alt: ["Plank with Reach", "Side-to-Side Plank Walk"] },
        { name: "Russian Twists", sets: "2x20", alt: ["Seated Knee Tucks", "Resistance Band Seated Rotations"] }
      ],
      "Day 3": [
        { name: "Push-ups", sets: "3x10", alt: ["Incline Push-ups (hands on bench)", "Resistance Band Chest Press"] },
        { name: "Pike Push-ups", sets: "3x10", alt: ["Incline Push-ups", "Feet-Elevated Push-ups"] },
        { name: "Split Squats", sets: "3x15", alt: ["Step-back Lunges", "Bulgarian Split Squat (foot on chair)"] },
        { name: "Bicycle Crunches", sets: "3x20", alt: ["Dead Bug", "Cross-Body Mountain Climbers"] }
      ],
      "Day 4": [
        { name: "Push-up to Plank", sets: "2x10", alt: ["Up-Down Plank", "Shoulder Tap Push-up"] },
        { name: "Leg Raises", sets: "2x20", alt: ["Flutter Kicks", "Resistance Band Leg Pulls"] },
        { name: "Superman Reach", sets: "2x15", alt: ["Reverse Snow Angels", "Y-T-I Raises (on floor or bench)"] },
        { name: "Side Plank", sets: "2x30s", alt: ["Side-Lying Hip Raise", "Side Plank with Reach-Under"] }
      ]
    };

    window.conditioningFrequencies.bodyweight['5'] = {
      "Mon": [
        { name: "Push-ups", sets: "3x12", alt: ["Incline Push-ups (hands on bench)", "Resistance Band Chest Press"] },
        { name: "Air Squats", sets: "3x20", alt: ["Wall Sit", "Goblet Squat (with backpack/dumbbell)"] },
        { name: "Leg Raises", sets: "3x10", alt: ["Flutter Kicks", "Resistance Band Leg Pulls"] }
      ],
      "Tue": [
        { name: "Pike Push-ups", sets: "3x10", alt: ["Incline Push-ups", "Feet-Elevated Push-ups"] },
        { name: "Split Squats", sets: "3x15", alt: ["Step-back Lunges", "Bulgarian Split Squat (foot on chair)"] },
        { name: "Bicycle Crunches", sets: "3x20", alt: ["Dead Bug", "Cross-Body Mountain Climbers"] }
      ],
      "Wed": [
        { name: "Push-up to Plank", sets: "2x10", alt: ["Up-Down Plank", "Shoulder Tap Push-up"] },
        { name: "Leg Raises", sets: "2x20", alt: ["Flutter Kicks", "Resistance Band Leg Pulls"] },
        { name: "Superman Reach", sets: "2x15", alt: ["Reverse Snow Angels", "Y-T-I Raises (on floor or bench)"] }
      ],
      "Fri": [
        { name: "Jumping Jacks", sets: "3x20", alt: ["High Knees", "Seal Jacks"] },
        { name: "Jump Lunges", sets: "3x10", alt: ["Alternating Step-Back Lunges", "Skater Hops"] },
        { name: "Plank Hold", sets: "3x30s", alt: ["Low Plank", "Plank with Arm Reach"] }
      ],
      "Sat": [
        { name: "Side Plank", sets: "2x30s", alt: ["Side-Lying Hip Raise", "Side Plank with Reach-Under"] },
        { name: "Superman Hold", sets: "2x15", alt: ["Bird-Dog Hold", "Resistance Band Face Pulls"] },
        { name: "Russian Twists", sets: "2x20", alt: ["Seated Knee Tucks", "Resistance Band Seated Rotations"] }
      ]
    };

    window.conditioningFrequencies.bodyweight['5+'] = {
      "Mon": [
        { name: "Push-ups", sets: "3x12", alt: ["Incline Push-ups (hands on bench)", "Resistance Band Chest Press"] },
        { name: "Air Squats", sets: "3x20", alt: ["Wall Sit", "Goblet Squat (with backpack/dumbbell)"] },
        { name: "Leg Raises", sets: "3x10", alt: ["Flutter Kicks", "Resistance Band Leg Pulls"] }
      ],
      "Tue": [
        { name: "Pike Push-ups", sets: "3x10", alt: ["Incline Push-ups", "Feet-Elevated Push-ups"] },
        { name: "Split Squats", sets: "3x15", alt: ["Step-back Lunges", "Bulgarian Split Squat (foot on chair)"] },
        { name: "Bicycle Crunches", sets: "3x20", alt: ["Dead Bug", "Cross-Body Mountain Climbers"] }
      ],
      "Wed": [
        { name: "Push-up to Plank", sets: "2x10", alt: ["Up-Down Plank", "Shoulder Tap Push-up"] },
        { name: "Leg Raises", sets: "2x20", alt: ["Flutter Kicks", "Resistance Band Leg Pulls"] },
        { name: "Superman Reach", sets: "2x15", alt: ["Reverse Snow Angels", "Y-T-I Raises (on floor or bench)"] }
      ],
      "Thu": [
        { name: "Side Plank", sets: "2x30s", alt: ["Side-Lying Hip Raise", "Side Plank with Reach-Under"] },
        { name: "Superman Hold", sets: "2x15", alt: ["Bird-Dog Hold", "Resistance Band Face Pulls"] },
        { name: "Russian Twists", sets: "2x20", alt: ["Seated Knee Tucks", "Resistance Band Seated Rotations"] }
      ],
      "Fri": [
        { name: "Jumping Jacks", sets: "3x20", alt: ["High Knees", "Seal Jacks"] },
        { name: "Jump Lunges", sets: "3x10", alt: ["Alternating Step-Back Lunges", "Skater Hops"] },
        { name: "Plank Hold", sets: "3x30s", alt: ["Low Plank", "Plank with Arm Reach"] }
      ],
      "Sat": [
        { name: "Push-ups", sets: "Ladder up to failure", alt: ["Incline Push-ups", "Chest Press with Bands"] },
        { name: "Leg Raises", sets: "2x15", alt: ["Flutter Kicks", "Resistance Band Leg Pulls"] },
        { name: "V-ups", sets: "2x10", alt: ["Toe Touches", "Hollow Body Hold"] }
      ]
    };

    // Tooltip tip box
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
