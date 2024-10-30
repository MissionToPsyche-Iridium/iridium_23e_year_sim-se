// Import required modules
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { updateOrbits } from './orbits.js';
import { updateLabelPosition } from './labels.js';

// Animation loop function
export function startAnimation(objects, labels, controls, camera, renderer, scene) {
  let lastTime = 0;

  // Add click handlers for labels
  const objectScales = {
    'psyche': { distance: 5, scale: 1 },
    'sun': { distance: 100, scale: 2 }, 
    'mercury': { distance: 15, scale: 0.8 },
    'venus': { distance: 25, scale: 1 },
    'earth': { distance: 25, scale: 1 }
  };

  Object.entries(labels).forEach(([key, label]) => {
    if (label) {
      label.addEventListener('click', () => {
        const objectName = label.textContent.toLowerCase();
        const objectConfig = objectScales[objectName];
        const targetObject = objects[objectName + 'Object'];

        if (objectConfig && targetObject) {
          const viewDistance = objectConfig.distance * objectConfig.scale;
          const targetPos = targetObject.position.clone();
          const offset = new THREE.Vector3(viewDistance, viewDistance/2, viewDistance);
          const newCameraPos = targetPos.clone().add(offset);

          // Animate camera movement
          const duration = 1000;
          const startPos = camera.position.clone();
          const startTime = Date.now();

          function animateCamera() {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            camera.position.lerpVectors(startPos, newCameraPos, easeProgress);
            controls.target.copy(targetPos);
            controls.update();

            if (progress < 1) {
              requestAnimationFrame(animateCamera);
            }
          }

          animateCamera();
        }
      });
    }
  });

  function animate(currentTime) {
    requestAnimationFrame(animate);

    // Calculate time delta
    const deltaTime = currentTime - lastTime;
    lastTime = currentTime;

    // Check if objects exist before updating positions
    if (objects) {
      // Update orbital positions only if objects are loaded
      if (objects.psycheObject && objects.sunObject && 
          objects.mercuryObject && objects.venusObject && objects.earthObject) {
        updateOrbits(objects, deltaTime);

        // Update label positions
        const container = document.getElementById('container3D');
        if (labels) {
          if (labels.psycheLabel && objects.psycheObject) {
            updateLabelPosition(labels.psycheLabel, objects.psycheObject, camera, container);
          }
          if (labels.sunLabel && objects.sunObject) {
            updateLabelPosition(labels.sunLabel, objects.sunObject, camera, container);
          }
          if (labels.mercuryLabel && objects.mercuryObject) {
            updateLabelPosition(labels.mercuryLabel, objects.mercuryObject, camera, container);
          }
          if (labels.venusLabel && objects.venusObject) {
            updateLabelPosition(labels.venusLabel, objects.venusObject, camera, container);
          }
          if (labels.earthLabel && objects.earthObject) {
            updateLabelPosition(labels.earthLabel, objects.earthObject, camera, container);
          }
        }
      }
    }

    // Update controls
    controls.update();

    // Render scene
    renderer.render(scene, camera);
  }

  // Start animation loop
  animate(0);
}
