/**
 * animation.js
 * 
 * This file handles the animation and camera movement for the Psyche simulation.
 * It manages:
 * - The main animation loop that updates object positions and renders the scene
 * - Camera transitions when clicking on object labels
 * - Label position updates to follow their corresponding 3D objects
 * - Orbital motion of objects
 */

import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { updateOrbits } from './orbits.js';
import { updateLabelPosition } from './labels.js';

export function startAnimation(objects, labels, controls, camera, renderer, scene) {
  let lastTime = 0;

  // Add click handlers for labels
  const objectScales = {
    'psyche': { distance: 5, scale: 1 },
    'sun': { distance: 100, scale: 2 }, 
    'mercury': { distance: 15, scale: 0.8 },
    'venus': { distance: 25, scale: 1 },
    'earth': { distance: 25, scale: 1 }
    // 'mars': { distance: 30, scale: 0.9 },
    // 'jupiter': { distance: 45, scale: 1.5 },
    // 'saturn': { distance: 55, scale: 1.4 },
    // 'uranus': { distance: 65, scale: 1.2 },
    // 'neptune': { distance: 75, scale: 1.2 }
  };

  // Add click listeners for labels
  Object.entries(labels).forEach(([key, label]) => {
    if (label) {
      label.addEventListener('click', () => {
        const objectName = label.textContent.toLowerCase();
        const objectConfig = objectScales[objectName];
        const targetObject = objects[objectName + 'Object'];

        //camera position
        if (objectConfig && targetObject) {
          const viewDistance = objectConfig.distance * objectConfig.scale;
          const targetPos = targetObject.position.clone();
          const offset = new THREE.Vector3(viewDistance, viewDistance/2, viewDistance);
          const newCameraPos = targetPos.clone().add(offset);

          // setting up animation
          const duration = 1000;
          const startPos = camera.position.clone();
          const startTime = Date.now();

          // Animate camera movement
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

    const deltaTime = currentTime - lastTime;
    lastTime = currentTime;

    if (objects && objects.psycheObject && objects.sunObject && 
        objects.mercuryObject && objects.venusObject && objects.earthObject) {
        // && objects.marsObject && objects.jupiterObject && objects.saturnObject
        // && objects.uranusObject && objects.neptuneObject) {
      
      if (!renderer.domElement.__isAnimationPaused) {
        updateOrbits(objects, deltaTime);
      }

      const container = document.getElementById('container3D');
      if (labels && container) {
        if (labels.psycheLabel) updateLabelPosition(labels.psycheLabel, objects.psycheObject, camera, container);
        if (labels.sunLabel) updateLabelPosition(labels.sunLabel, objects.sunObject, camera, container);
        if (labels.mercuryLabel) updateLabelPosition(labels.mercuryLabel, objects.mercuryObject, camera, container);
        if (labels.venusLabel) updateLabelPosition(labels.venusLabel, objects.venusObject, camera, container);
        if (labels.earthLabel) updateLabelPosition(labels.earthLabel, objects.earthObject, camera, container);
        // if (labels.marsLabel) updateLabelPosition(labels.marsLabel, objects.marsObject, camera, container);
        // if (labels.jupiterLabel) updateLabelPosition(labels.jupiterLabel, objects.jupiterObject, camera, container);
        // if (labels.saturnLabel) updateLabelPosition(labels.saturnLabel, objects.saturnObject, camera, container);
        // if (labels.uranusLabel) updateLabelPosition(labels.uranusLabel, objects.uranusObject, camera, container);
        // if (labels.neptuneLabel) updateLabelPosition(labels.neptuneLabel, objects.neptuneObject, camera, container);
      }
    }

    controls.update();
    renderer.render(scene, camera);
  }

  animate(0);
}