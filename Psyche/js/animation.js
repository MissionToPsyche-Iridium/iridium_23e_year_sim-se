/**
 * animation.js
 * 
 * This file handles the animation and camera movement for the Psyche simulation.
 * It manages:
 * - The main animation loop that updates object positions and renders the scene
 * - Camera transitions when clicking on object labels
 * - Label position updates to follow their corresponding 3D objects
 * - Orbital motion of objects
 * 
 * The animation can be paused/resumed and includes smooth camera transitions
 * when focusing on different objects in the scene.
 */

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

  // Add resize handler to update renderer and labels when window changes
  window.addEventListener('resize', () => {
    const container = document.getElementById('container3D');
    if (container) {
      renderer.setSize(container.clientWidth, container.clientHeight);
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
    }
  });

  function animate(currentTime) {
    requestAnimationFrame(animate);

    // Calculate time delta
    const deltaTime = currentTime - lastTime;
    lastTime = currentTime;

    // Check if objects exist before updating positions
    if (objects) {
      // Update orbital positions only if objects are loaded and not paused
      if (objects.psycheObject && objects.sunObject && 
          objects.mercuryObject && objects.venusObject && objects.earthObject) {
        
        // Only update orbits if not paused
        if (!renderer.domElement.__isAnimationPaused) {
          updateOrbits(objects, deltaTime);
        }

        // Always update label positions regardless of state
        const container = document.getElementById('container3D');
        if (labels && container) {
          // Force renderer to update size to match container
          renderer.setSize(container.clientWidth, container.clientHeight);
          camera.aspect = container.clientWidth / container.clientHeight;
          camera.updateProjectionMatrix();

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

    // Always update controls
    controls.update();

    // Always render the scene
    renderer.render(scene, camera);
  }

  // Start animation loop
  animate(0);
}