diff --git a/planLogic.js b/planLogic.js
index e1867a25afd048a51b2a81b6cd699a4397928373..f88a5b22a0db487250325f87b2149f467a5d17bb 100644
--- a/planLogic.js
+++ b/planLogic.js
@@ -1,26 +1,28 @@
 // === conditioningFrequencies.js loader ===
+let currentPlan = null;
+
 function loadConditioningData() {
   return new Promise((resolve, reject) => {
     if (window.conditioningFrequencies) {
       resolve();
       return;
     }
 
     const script = document.createElement('script');
     script.src = 'https://www.webbyfe.com/conditioningFrequencies.js';
     script.onload = () => {
       if (window.conditioningFrequencies) {
         console.log("✅ Conditioning data loaded");
         resolve();
       } else {
         console.error("❌ Conditioning data not available after script load");
         reject("Conditioning data not found after script load");
       }
     };
     script.onerror = () => reject("❌ Failed to load conditioning data script");
 
     document.head.appendChild(script);
   });
 }
 
 // === trainingData loader ===
diff --git a/planLogic.js b/planLogic.js
index e1867a25afd048a51b2a81b6cd699a4397928373..f88a5b22a0db487250325f87b2149f467a5d17bb 100644
--- a/planLogic.js
+++ b/planLogic.js
@@ -59,90 +61,92 @@ function loadTrainingData(goal) {
     script.onerror = (e) => {
       console.error("❌ Failed to load training data", e);
       reject("trainingData load error");
     };
 
     document.head.appendChild(script);
   });
 }
 
 // Load all data early to avoid second-load issues
 window.addEventListener("DOMContentLoaded", async () => {
   try {
     await loadConditioningData();
     console.log("✅ Conditioning data preloaded");
   } catch (err) {
     console.error("❌ Preloading error:", err);
   }
 });
 
 function renderPlan(plan, freq, formData) {
   const container = document.getElementById('training-container');
   if (!container) {
     console.error("❌ Container #training-container not found in DOM.");
     return;
   }
+  const outputBox = document.getElementById('outputBox');
+  if (outputBox) outputBox.style.display = 'block';
   container.innerHTML = '';
 
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
           <strong>${exercise.name}</strong> – ${exercise.sets}<br>
           <span class="alt-list">Alt: ${exercise.alt?.join(", ") || "None"}</span>
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
-        generateTrainingPlan(formData);
+        renderPlan(plan, freq, formData);
       }
     });
 
     dayDiv.appendChild(list);
     container.appendChild(dayDiv);
   }
 
   document.querySelectorAll('.alt-button').forEach(btn => {
     btn.addEventListener('click', () => {
       const day = btn.getAttribute('data-day');
       const index = parseInt(btn.getAttribute('data-index'));
       const exercises = plan[day];
       const current = exercises[index];
       if (current.alt && current.alt.length > 0) {
         const next = current.alt.shift();
         current.alt.push(current.name);
         current.name = next;
         renderPlan(plan, freq, formData);
       }
     });
   });
 }
 
 // Handle form submission
 document.getElementById('trackerForm').addEventListener('submit', (e) => {
diff --git a/planLogic.js b/planLogic.js
index e1867a25afd048a51b2a81b6cd699a4397928373..f88a5b22a0db487250325f87b2149f467a5d17bb 100644
--- a/planLogic.js
+++ b/planLogic.js
@@ -151,69 +155,72 @@ document.getElementById('trackerForm').addEventListener('submit', (e) => {
   const formData = {
     goal: document.getElementById('goal').value,
     frequency: document.getElementById('frequency').value,
     equipment: document.getElementById('equipment').value,
     experience: document.getElementById('experience').value,
     injuries: document.getElementById('injuries').value,
     fixed: document.getElementById('fixed').value,
     email: document.getElementById('email').value,
   };
 
   generateTrainingPlan(formData);
 });
 
 window.generateTrainingPlan = async function (formData) {
   const frequencyKey = formData.frequency === "5plus" ? "5+" : formData.frequency;
 
   if (formData.goal === "Improve conditioning") {
     await loadConditioningData();
     const equipmentMap = {
       "Gym access": "gym",
       "Bodyweight only": "bodyweight",
       "Dumbbells at home": "bodyweight",
       "Resistance bands": "bodyweight"
     };
     formData.equipment = equipmentMap[formData.equipment] || formData.equipment;
-    const plan = window.conditioningFrequencies?.[formData.equipment]?.[frequencyKey];
+    const basePlan = window.conditioningFrequencies?.[formData.equipment]?.[frequencyKey];
 
-    if (!plan) {
+    if (!basePlan) {
       alert("⚠️ Conditioning plan not found");
       return;
     }
-    renderPlan(plan, frequencyKey, formData);
+    currentPlan = JSON.parse(JSON.stringify(basePlan));
+    renderPlan(currentPlan, frequencyKey, formData);
   } else {
     await loadTrainingData(formData.goal);
     const adjustedFreq = formData.frequency === "5plus" ? "5+" : formData.frequency;
 
-    let plan;
+    let basePlan;
     if (formData.goal === "Get stronger") {
-      plan = window.trainingDataStrong?.[adjustedFreq];
+      basePlan = window.trainingDataStrong?.[adjustedFreq];
     } else {
-      plan = window.trainingDataGeneral?.[adjustedFreq];
+      basePlan = window.trainingDataGeneral?.[adjustedFreq];
     }
 
-    if (!plan) {
+    if (!basePlan) {
       alert("❌ Training plan not found for frequency: " + adjustedFreq);
       return;
     }
 
+    currentPlan = JSON.parse(JSON.stringify(basePlan));
+
     if (formData.goal === "Lose fat") {
-      Object.entries(plan).forEach(([day, exercises]) => {
+      Object.entries(currentPlan).forEach(([day, exercises]) => {
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
       });
     }
 
-    renderPlan(plan, adjustedFreq, formData);
+    renderPlan(currentPlan, adjustedFreq, formData);
   }
 };
