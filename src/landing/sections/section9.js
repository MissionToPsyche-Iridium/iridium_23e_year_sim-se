// /**
//  * Section 9 - Escape Velocity Game
//  */

// import * as THREE from 'three';
// import { getCurrentSection } from '../utils/sectionTracking.js';
// import { makeModelClickable, loadModel } from '../utils/utils.js';
// import gsap from 'gsap';

// let section9Elements = [];
// let escapeVelocityButton;
// let hasShownViewport = false;

// export function loadSection9(scene, camera, sections, renderer) {
//     return new Promise((resolve, reject) => {
//         try {
//             // Create a button for the escape velocity game feature
//             const buttonGeometry = new THREE.BoxGeometry(40, 20, 5);
//             const buttonMaterial = new THREE.MeshBasicMaterial({
//                 color: 0x007bff,
//                 transparent: false
//             });
//             const escapeVelocityButton = new THREE.Mesh(buttonGeometry, buttonMaterial);
//             escapeVelocityButton.position.set(200, 300, -110);
//             escapeVelocityButton.userData.section9Element = true;
//             scene.add(escapeVelocityButton);
//             const section9Elements = []; // Initialize array to store elements
//             section9Elements.push(escapeVelocityButton);

//             // Create a text label for the button
//             const canvas = document.createElement('canvas');
//             canvas.width = 256;
//             canvas.height = 128;
//             const context = canvas.getContext('2d');
//             context.fillStyle = '#007bff';
//             context.fillRect(0, 0, canvas.width, canvas.height);
//             context.font = 'bold 24px Arial';
//             context.fillStyle = 'white';
//             context.textAlign = 'center';
//             context.textBaseline = 'middle';
//             context.fillText('Escape Velocity', canvas.width / 2, canvas.height / 2);

//             const texture = new THREE.CanvasTexture(canvas);
//             const labelMaterial = new THREE.MeshBasicMaterial({
//                 map: texture,
//                 transparent: true
//             });
//             const labelGeometry = new THREE.PlaneGeometry(50, 25);
//             const label = new THREE.Mesh(labelGeometry, labelMaterial);
//             label.position.set(200, 300, -107); // Slightly in front of the button
//             label.userData.section9Element = true;
//             scene.add(label);
//             section9Elements.push(label);

//             // Add lights to enhance the section
//             const pointLight = new THREE.PointLight(0xffffff, 2, 200);
//             pointLight.position.set(200, 300, -100);
//             pointLight.userData.section9Element = true;
//             scene.add(pointLight);
//             section9Elements.push(pointLight);

//             const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//             ambientLight.userData.section9Element = true;
//             scene.add(ambientLight);
//             section9Elements.push(ambientLight);

//             // Make the button clickable
//             makeModelClickable(escapeVelocityButton, () => {
//                 import('../../../public/escapeVelocity/viewportescapevelocity.js')
//                     .then(({ showEscapeVelocityViewport }) => {
//                         showEscapeVelocityViewport();
//                     })
//                     .catch(err => {
//                         console.error("Failed to load Escape Velocity viewport:", err);
//                     });
//             });
            
//             makeModelClickable(label, () => {
//                 import('../../../public/escapeVelocity/viewportescapevelocity.js')
//                     .then(({ showEscapeVelocityViewport }) => {
//                         showEscapeVelocityViewport();
//                     })
//                     .catch(err => {
//                         console.error("Failed to load Escape Velocity viewport:", err);
//                     });
//             });
            

//             // Add hover effect to the button
//             let isHovered = false;
//             escapeVelocityButton.userData.onPointerOver = () => {
//                 if (!isHovered) {
//                     gsap.to(escapeVelocityButton.material.color, {
//                         r: 0,      // #0056b3 darker
//                         g: 0.337,
//                         b: 0.702,
//                         duration: 0.3
//                     });
//                     isHovered = true;
//                 }
//             };

//             escapeVelocityButton.userData.onPointerOut = () => {
//                 if (isHovered) {
//                     gsap.to(escapeVelocityButton.material.color, {
//                         r: 0,      // #007bff
//                         g: 0.482,
//                         b: 1,
//                         duration: 0.3
//                     });
//                     isHovered = false;
//                 }
//             };

//             section9Elements.forEach(element => {
//                 element.visible = false;
//             });

//             resolve(); 
//         } catch (error) {
//             reject(error); 
//         }
//     });
// }


// export function renderSection9(camera, scene) {
//     if (section9Elements.length === 0) return;

//     const currentSection = getCurrentSection();
//     const isVisible = currentSection === 9;

//     // Show/hide the elements based on current section
//     section9Elements.forEach(element => {
//         if (element.visible !== isVisible) {
//             element.visible = isVisible;
//         }
//     });

//     // Auto-show viewport when entering section 9
//     if (isVisible && !hasShownViewport) {
//         // Add a small delay to ensure the section transition is complete
//         setTimeout(() => {
//             showEscapeVelocityViewport();
//             hasShownViewport = true;
//         }, 500);
//     } else if (!isVisible && hasShownViewport) {
//         // Hide viewport when leaving section 9
//         hideEscapeVelocityViewport();
//         hasShownViewport = false;
//     }
// }
import { loadModel } from "../utils/utils";
import { getCurrentSection } from "../utils/sectionTracking.js"; // Important to check active section
import * as THREE from 'three';
import { resolvePath } from "../utils/utils";

let asteroidModel = null;
let earthModel = null;
const sunPosition = new THREE.Vector3(-400, 250, -900);

export function loadSection9(scene, camera, sections) {
  return new Promise((resolveConfig, reject) => {
    let modelsLoaded = 0;

    function checkAllLoaded() {
      modelsLoaded++;
      if (modelsLoaded === 2) {
        resolveConfig(); // Both models loaded
      }
    }

    loadModel(
      "asteroid",
      resolvePath("res/models/psyche_new.glb"),
      { x: sunPosition.x + 100, y: sunPosition.y, z: sunPosition.z }, // Positioned offset from the sun
      .5, // Scale
      { x: 0, y: 0, z: 0 },
      undefined,
      scene,
      (model) => {
        asteroidModel = model;
        asteroidModel.visible = false; // Start hidden
        checkAllLoaded();
      }
    );

    loadModel(
      "earth",
      resolvePath("res/models/Earth.glb"),
      { x: sunPosition.x - 150, y: sunPosition.y, z: sunPosition.z }, // Positioned opposite
      .01, // Scale (adjust if needed)
      { x: 0, y: 0, z: 0 },
      undefined,
      scene,
      (model) => {
        earthModel = model;
        earthModel.visible = false; 
        checkAllLoaded();
      }
    );

    setTimeout(() => reject("Model load timeout"), 15000);
  })
  .then(() => {
    console.log("Orbit section models loaded.");
  })
  .catch((error) => {
    console.error("Error loading orbits section:", error);
  });
}

export function renderSection9(camera, scene) {
    const currentSection = getCurrentSection();
  
    if (!asteroidModel || !earthModel) return;
  
    if (currentSection === 9) {
      asteroidModel.visible = true;
      earthModel.visible = true;
  
      const time = Date.now() * 0.001; // time in seconds
  
      const asteroidOrbitRadius = 30; // smaller orbit
      const earthOrbitRadius = 50; // slightly larger orbit
  
      asteroidModel.position.x = sunPosition.x + Math.cos(time) * asteroidOrbitRadius;
      asteroidModel.position.z = sunPosition.z + Math.sin(time) * asteroidOrbitRadius;
  
      earthModel.position.x = sunPosition.x + Math.cos(time * 0.5) * earthOrbitRadius;
      earthModel.position.z = sunPosition.z + Math.sin(time * 0.5) * earthOrbitRadius;
    } else {
      asteroidModel.visible = false;
      earthModel.visible = false;
    }
  }
  
