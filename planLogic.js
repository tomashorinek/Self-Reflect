
// === conditioningFrequencies.js loader ===
let currentPlan = null;
function loadConditioningData() {
return new Promise((resolve, reject) => {
if (window.conditioningFrequencies) {
resolve();
return;
}

const script = document.createElement('script');
script.src = 'https://www.webbyfe.com/conditioningFrequencies.js';
script.onload = async () => {
try {
if (window.conditioningFrequencies) {
console.log("✅ Conditioning loaded", window.conditioningFrequencies);
resolve();
return;
}
// Tato část je zde navíc, pokud conditioningFrequencies.js také načítá něco asynchronně
if (window.loadConditioningData) { // Předpokládám, že conditioningFrequencies.js má také exportovanou funkci pro načítání
await window.loadConditioningData();
console.log("✅ Conditioning loaded", window.conditioningFrequencies);
resolve();
} else {
console.error("❌ Conditioning data not available after script load");
reject("Conditioning data not found after script load");
}
} catch (err) {
console.error("❌ Error initializing conditioning data", err);
reject(err);
}
};
script.onerror = () => reject("❌ Failed to load conditioning data script");

document.head.appendChild(script);
});
}

// Add fallback and alternative mappings for conditioning plans
function extendConditioningAlternatives(plan) {
const extraArray = [
{ name: "Core Circuit Finisher", sets: "3x40s plank + 10 crunches", alt: ["Plank to Push-up", "Mountain Climbers"] }, // Mon
{ name: "Air Bike Burnout", sets: "4x20s all-out / 40s rest", alt: ["Jump Rope", "Burpees"] }, // Tue
{ name: "Bear Crawl Shuttle", sets: "4x10m", alt: ["Mountain Climbers", "Plank Shoulder Taps"] }, // Wed
{ name: "Jumping Jacks Finisher", sets: "3x30s", alt: ["Mountain Climbers", "Skater Jumps"] }, // Thu
{ name: "Burpees to Box", sets: "3x12", alt: ["Jump Squats", "Step Ups"] }, // Fri
{ name: "Wall Sit Hold", sets: "3x45s", alt: ["Bodyweight Squat Hold", "Lunge Hold"] }, // Sat
{ name: "Jumping Jacks Finisher", sets: "3x30s", alt: ["Mountain Climbers", "Jump Squats"] } // Sun
];

const extras = {
mon: extraArray[0],
tue: extraArray[1],
wed: extraArray[2],
thu: extraArray[3],
fri: extraArray[4],
sat: extraArray[5],
sun: extraArray[6]
};

Object.entries(plan).forEach(([day, exercises], idx) => {
const dayName = day.toLowerCase();
let dayKey = dayName.slice(0, 3);

if (!extras[dayKey]) {
const seqKey = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"][idx % 7];
dayKey = seqKey;
}

while (exercises.length < 3 && extras[dayKey]) {
exercises.push(JSON.parse(JSON.stringify(extras[dayKey])));
}
});

const baseAltMap = {
"Push-ups": ["Incline Push-ups", "Kneeling Push-ups"],
"Air Bike Burnout": ["Mountain Climbers", "Jumping Jacks"],
"Core Circuit Finisher": ["V-Ups", "Hollow Hold"],
"Bear Crawl Shuttle": ["Crab Walks", "Lateral Bear Crawls"],
"Burpees": ["Jump Squats", "Sprawl to Jump"],
"Wall Sit Hold": ["Isometric Lunge Hold", "Chair Hold"],
"Plank Series": ["Side Plank", "Bird Dog"],
"Jump Rope": ["High Knees", "Jumping Jacks"]
};

// Make alternative map two-way so alternatives also get their own alternatives
Object.entries(baseAltMap).forEach(([main, alts]) => {
alts.forEach(alt => {
if (!baseAltMap[alt]) {
baseAltMap[alt] = alts.filter(a => a !== alt).concat(main);
}
});
});

Object.values(plan).forEach(exercises => {
exercises.forEach(ex => {
if (baseAltMap[ex.name]) {
baseAltMap[ex.name].forEach(a => {
if (!ex.alt.includes(a)) ex.alt.push(a);
});
}
});
});
}

// Utility to select a unique alternative if the main exercise already exists
function getUniqueExercise(existing, exercise) {
const options = [exercise.name, ...(exercise.alt || [])];
for (const opt of options) {
if (!existing.includes(opt)) return opt;
}
// fallback
return exercise.name;
}

// Replace duplicate exercise names within a day's plan with alternatives
function enforceUniqueExercises(plan) {
Object.values(plan).forEach(dayExercises => {
const chosen = [];
dayExercises.forEach(ex => {
const unique = getUniqueExercise(chosen, ex);
chosen.push(unique);
ex.name = unique;
});
});
}

// === trainingData loader ===
function loadTrainingData(goal, equipment) {
return new Promise((resolve, reject) => {
let globalName, src, modulePath, useScript = true;
if (equipment === 'home') {
useScript = false; // Vždy import, pokud je home
if (goal === 'Get stronger') {
globalName = 'trainingDataStrongHome';
modulePath = './trainingDataStrongHome.js';
} else { // např. Build muscle, Lose fat s home
globalName = 'trainingDataCalisthenics';
modulePath = './trainingDataCalisthenics.js';
}
} else if (goal === 'Get stronger') {
globalName = 'trainingDataStrong';
src = 'https://www.webbyfe.com/trainingData_strong.js';
useScript = true; // Předpokládáme, že toto je externí skript
} else {
// Build muscle or Lose fat with gym access
globalName = 'trainingDataGym';
modulePath = './trainingData.js'; // Používáme lokální trainingData.js
useScript = false; // Import
}

if (window[globalName]) {
resolve();
return;
}

if (!useScript) {
// Používáme dynamic import pro lokální moduly
import(modulePath)
.then(mod => {
window[globalName] = mod.default || mod[globalName] || mod;
console.log(`✅ Imported ${globalName} from ${modulePath}`);
resolve();
})
.catch(err => {
console.error(`❌ Failed to import training data from ${modulePath}`, err);
reject('trainingData import error');
});
return;
}

// Pokud je useScript true, načítáme jako klasický skript (pro externí URL)
const script = document.createElement('script');
script.src = src;

script.onload = () => {
if (window.trainingData) { // Předpokládáme, že tyto externí skripty exportují data do window.trainingData
window[globalName] = window.trainingData;
delete window.trainingData; // vyčistíme globální proměnnou
console.log(`✅ Loaded and mapped to ${globalName}`);
resolve();
} else {
console.error("❌ trainingData missing after script load");
reject("trainingData not found");
}
};

script.onerror = (e) => {
console.error("❌ Failed to load training data", e);
reject("trainingData load error");
};

document.head.appendChild(script);
});
}

// Load all data early to avoid second-load issues - tuto část můžeme zrušit, protože generateTrainingPlan si načítá dynamicky
/*
window.addEventListener("DOMContentLoaded", async () => {
try {
await loadConditioningData();
console.log("✅ Conditioning data preloaded");
} catch (err) {
console.error("❌ Preloading error:", err);
}
});
*/

function renderPlan(plan, freq, formData) {
const container = document.getElementById('training-container');
if (!container) {
console.error("❌ Container #training-container not found in DOM.");
return;
}
const outputBox = document.getElementById("outputBox");
if (outputBox) outputBox.style.display = "block";
container.innerHTML = ''; // Vymaže předchozí obsah

for (const [day, exercises] of Object.entries(plan)) {
exercises.forEach(ex => {
if (!ex.alt) ex.alt = [];
});

const dayDiv = document.createElement('div');
dayDiv.className = 'day';
dayDiv.innerHTML = `<h3>${day}</h3>`;

const list = document.createElement('div');
list.className = 'exercise-list';

exercises.forEach((exercise, index) => {
const item = document.createElement('div');
item.className = 'exercise';
item.setAttribute('draggable', true);
item.innerHTML = `
<div>
<strong>${exercise.name}</strong> – ${exercise.sets}<br><br><span class="alt-list">Alt: ${exercise.alt?.join(", ") || "None"}</span><br>
</div>
<span class="alt-button" data-day="${day}" data-index="${index}">🔁</span>
`;

item.addEventListener('dragstart', (e) => {
e.dataTransfer.setData('text/plain', `${day}|${index}`);
});

list.appendChild(item);
});

new Sortable(list, {
animation: 150,
ghostClass: 'sortable-ghost',
onEnd: (evt) => {
const [removed] = plan[day].splice(evt.oldIndex, 1);
plan[day].splice(evt.newIndex, 0, removed);
renderPlan(plan, freq, formData); // Volá renderPlan znovu po přetažení
}
});

dayDiv.appendChild(list);
container.appendChild(dayDiv);
}

document.querySelectorAll('.alt-button').forEach(btn => {
btn.setAttribute('title', 'switch for alternative');
btn.addEventListener('click', () => {
const day = btn.getAttribute('data-day');
const index = parseInt(btn.getAttribute('data-index'));
const exercises = plan[day];
const current = exercises[index];
if (current.alt && current.alt.length > 0) {
const next = current.alt.shift();
current.alt.push(current.name);
current.name = next;
renderPlan(plan, freq, formData); // Volá renderPlan znovu po výměně
}
});
});
// 🆕 Update textarea after render
if (typeof updateTrainingPlanContentInTextarea === 'function') {
updateTrainingPlanContentInTextarea();
}

// populateTrainingPlanTextarea(); // Tato funkce není definována, nebo není potřeba, pokud se text načítá přímo z training-container
}

// Exportujeme funkci generateTrainingPlan, aby byla dostupná pro import
export async function generateTrainingPlan(formData) {
const frequencyKey = formData.frequency === "5plus" ? "5+" : formData.frequency;

if (formData.goal === "Improve conditioning") {
await loadConditioningData();
const equipmentMap = {
gym: "gym",
home: "bodyweight"
};
formData.equipment = equipmentMap[formData.equipment] || formData.equipment;
let basePlan = window.conditioningFrequencies?.[formData.equipment]?.[frequencyKey];

// If a frequency entry is just an array of exercises, wrap it in a single day
if (Array.isArray(basePlan)) {
basePlan = { "Full Body": basePlan };
}

if (!basePlan) {
console.warn("⚠️ Conditioning plan undefined for", formData.equipment, frequencyKey);
alert("⚠️ Conditioning plan not found");
return;
}
currentPlan = JSON.parse(JSON.stringify(basePlan));
extendConditioningAlternatives(currentPlan);
enforceUniqueExercises(currentPlan);
renderPlan(currentPlan, frequencyKey, formData);
} else {
await loadTrainingData(formData.goal, formData.equipment);
const adjustedFreq = formData.frequency === "5plus" ? "5+" : formData.frequency;

let basePlan;
if (formData.equipment === "home") {
if (formData.goal === "Get stronger") {
basePlan = window.trainingDataStrongHome?.strong?.[adjustedFreq];
} else {
basePlan = window.trainingDataCalisthenics?.[adjustedFreq];
}
} else if (formData.goal === "Get stronger") {
basePlan = window.trainingDataStrong?.[adjustedFreq];
} else {
basePlan = window.trainingDataGym?.[adjustedFreq];
}

if (!basePlan) {
alert("❌ Training plan not found for frequency: " + adjustedFreq);
return;
}
currentPlan = JSON.parse(JSON.stringify(basePlan));

if (formData.goal === "Lose fat") {
Object.entries(currentPlan).forEach(([day, exercises]) => {
if (formData.equipment === "home") {
exercises.unshift(JSON.parse(JSON.stringify({
name: "fast walking 10-15minutes",
sets: "light effort (still comfortable, can talk)",
alt: ["uphill walking 5minutes", "cycling 10-15 minutes"]
})));
const isLegDay = day.toLowerCase().includes("leg") || day.toLowerCase().includes("lower");
if (!isLegDay) {
exercises.push(JSON.parse(JSON.stringify({
name: " uphill walking",
sets: "20-30 minutes moderate intensity",
alt: ["fast walking", "Shadow boxing", "walking up the stairs"]
})));
}
} else {
exercises.unshift({
name: "Treadmill Warm-up",
sets: "10 min",
alt: ["Bike", "Rowing", "Walk uphill"]
});
const isLegDay = day.toLowerCase().includes("leg") || day.toLowerCase().includes("lower");
if (!isLegDay) {
exercises.push({
name: "Post-Workout Cardio",
sets: "3x (5 min 120–140 bpm, 1 min >160 bpm)",
alt: ["Bike intervals", "Rowing sprints", "Shadow boxing"]
});
}
}
});
}
enforceUniqueExercises(currentPlan);
renderPlan(currentPlan, adjustedFreq, formData);
}
}
  return currentPlan; // ✅ DŮLEŽITÉ: přidáno i zde
}
