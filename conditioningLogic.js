import conditioningFrequencies from "./conditioningFrequencies.js";

export function generatePlan(goal, equipment, frequency) {
  if (goal !== "Improve conditioning" && goal !== "Improve Conditioning") {
    return undefined;
  }
  const freqKey = frequency === "5plus" ? "5+" : frequency;
  const equipmentMap = {
    gym: "gym",
    home: "bodyweight",
    bodyweight: "bodyweight"
  };
  const equipmentKey = equipmentMap[equipment] || equipment;
  return conditioningFrequencies?.[equipmentKey]?.[freqKey];
}

export default generatePlan;
