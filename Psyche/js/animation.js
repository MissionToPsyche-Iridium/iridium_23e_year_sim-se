/**
 * animation.js
 * 
 * This file handles the animation and camera movement for the Psyche simulation.
 * It manages:
 * - The main animation loop that updates object positions and renders the scene
 * - Camera transitions when clicking on object labels
 * - Label position updates to follow their corresponding 3D objects
 * - Orbital motion of objects
 * - Information windows for celestial bodies
 * - Mouse controls for panning and zooming
 */

import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { updateOrbits } from './orbits.js';
import { updateLabelPosition } from './labels.js';

export function startAnimation(objects, labels, controls, camera, renderer, scene) {
  let lastTime = 0;
  let isAnimationPaused = false;
  let isOrbitPaused = false;
  let isViewLocked = false;
  let currentLockedObject = null;
  let isDragging = false;
  let previousMousePosition = {
    x: 0,
    y: 0
  };

  // Add mouse event listeners for free panning
  renderer.domElement.addEventListener('mousedown', (e) => {
    isDragging = true;
    previousMousePosition = {
      x: e.clientX,
      y: e.clientY
    };
  });

  renderer.domElement.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const deltaMove = {
      x: e.clientX - previousMousePosition.x,
      y: e.clientY - previousMousePosition.y
    };

    // Pan camera freely based on mouse movement
    const panSpeed = 0.8;
    camera.position.x -= deltaMove.x * panSpeed;
    camera.position.y += deltaMove.y * panSpeed;

    previousMousePosition = {
      x: e.clientX,
      y: e.clientY
    };

    camera.updateProjectionMatrix();
  });

  renderer.domElement.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Add mouse wheel listener for smooth zooming
  renderer.domElement.addEventListener('wheel', (e) => {
    e.preventDefault();
    
    // Zoom in/out based on scroll direction with smooth zoom
    const zoomSpeed = 50;
    const zoomFactor = e.deltaY > 0 ? 1 + (zoomSpeed/1000) : 1 - (zoomSpeed/1000);
    
    // Apply zoom to camera position
    camera.position.multiplyScalar(zoomFactor);
    
    camera.updateProjectionMatrix();
  });

  // Add click handlers for labels
  const objectScales = {
    'psyche': { distance: 10, scale: 1 },
    'sun': { distance: 100, scale: 2 }, 
    'mercury': { distance: 15, scale: 0.8 },
    'venus': { distance: 25, scale: 1 },
    'earth': { distance: 25, scale: 1 },
    'mars': { distance: 30, scale: 0.9 },
    'jupiter': { distance: 45, scale: 1.5 },
    'neptune': { distance: 40, scale: 1 }   
  };

  // Add keyboard event listener for ESC key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isViewLocked) {
      isViewLocked = false;
      currentLockedObject = null;
      controls.enabled = true;
      
      // Reset camera position
      camera.position.set(0, 200, 8000);
      camera.lookAt(0, 0, 0);
      controls.target.set(0, 0, 0);
      controls.update();
    }
  });

  // Function to handle planet button clicks
  function handlePlanetClick(planetName) {
    const objectConfig = objectScales[planetName];
    const targetObject = objects[planetName + 'Object'];

    if (objectConfig && targetObject) {
      isViewLocked = true;
      currentLockedObject = targetObject;
      controls.enabled = false;

      const viewDistance = objectConfig.distance * objectConfig.scale;
      const targetPos = targetObject.position.clone();
      const offset = new THREE.Vector3(viewDistance, viewDistance/2, viewDistance);
      const newCameraPos = targetPos.clone().add(offset);

      // Setting up animation
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
  }

  // Add click handlers for planet buttons and info icons
  const planetButtons = {
    'button-sun': 'sun',
    'button-mercury': 'mercury', 
    'button-venus': 'venus',
    'button-earth': 'earth',
    'button-mars': 'mars',
    'button-psyche': 'psyche',
    'button-jupiter': 'jupiter',
    'button-neptune': 'neptune',
  };

  Object.entries(planetButtons).forEach(([buttonId, planetName]) => {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener('click', () => handlePlanetClick(planetName));
      
      // Add info icon next to each planet button
      const infoIcon = document.createElement('span');
      infoIcon.textContent = 'ⓘ';
      infoIcon.style.marginLeft = '5px';
      infoIcon.style.cursor = 'pointer';
      infoIcon.style.color = 'orange';
      infoIcon.addEventListener('mouseover', () => {
        infoIcon.style.color = 'black';
      });
      infoIcon.addEventListener('mouseout', () => {
        infoIcon.style.color = 'orange';
      });
      button.appendChild(infoIcon);

      // Create and append info window
      const infoWindow = createInfoWindow(planetName);
      document.getElementById('container3D').appendChild(infoWindow);

      // Add click handler for info icon
      infoIcon.addEventListener('click', (event) => {
        event.stopPropagation();
        const rect = infoIcon.getBoundingClientRect();
        infoWindow.style.left = `${rect.right + 10}px`;
        infoWindow.style.top = `${rect.top}px`;
        infoWindow.style.display = infoWindow.style.display === 'none' ? 'block' : 'none';
      });

      // Close info window when clicking outside
      document.addEventListener('click', (event) => {
        if (!infoWindow.contains(event.target) && event.target !== infoIcon) {
          infoWindow.style.display = 'none';
        }
      });
    }
  });

  // Add click handlers and info icons for labels
  Object.entries(labels).forEach(([labelId, label]) => {
    if (label) {
      const planetName = labelId.replace('Label', '').toLowerCase();
      
      // Create label text span
      const labelText = document.createElement('span');
      labelText.textContent = label.textContent;
      labelText.style.cursor = 'pointer';
      label.textContent = '';
      label.appendChild(labelText);

      // Add click handler for label text
      labelText.addEventListener('click', () => {
        handlePlanetClick(planetName);
      });

      // Create and add info icon
      const infoIcon = document.createElement('span');
      infoIcon.textContent = ' ⓘ';
      infoIcon.style.cursor = 'pointer';
      infoIcon.style.color = 'orange';
      infoIcon.addEventListener('mouseover', () => {
        infoIcon.style.color = 'black';
      });
      infoIcon.addEventListener('mouseout', () => {
        infoIcon.style.color = 'orange';
      });
      label.appendChild(infoIcon);
      
      // Create and append info window for label
      const labelInfoWindow = createInfoWindow(planetName);
      document.getElementById('container3D').appendChild(labelInfoWindow);

      // Add click handler for info icon
      infoIcon.addEventListener('click', (event) => {
        event.stopPropagation();
        const rect = infoIcon.getBoundingClientRect();
        labelInfoWindow.style.left = `${rect.right + 10}px`;
        labelInfoWindow.style.top = `${rect.top}px`;
        labelInfoWindow.style.display = labelInfoWindow.style.display === 'none' ? 'block' : 'none';
      });

      // Close label info window when clicking outside
      document.addEventListener('click', (event) => {
        if (!labelInfoWindow.contains(event.target) && event.target !== infoIcon) {
          labelInfoWindow.style.display = 'none';
        }
      });
    }
  });

  // Add keyboard event listener for 'p' key
  document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'p') {
      isOrbitPaused = !isOrbitPaused;
    }
  });

  function animate(currentTime) {
    requestAnimationFrame(animate);

    const deltaTime = currentTime - lastTime;
    lastTime = currentTime;

    if (objects && objects.psycheObject && objects.sunObject && 
        objects.mercuryObject && objects.venusObject && objects.earthObject &&
        objects.marsObject && objects.jupiterObject && objects.neptuneObject) {
      
      if (!isAnimationPaused && !isOrbitPaused) {
        updateOrbits(objects, deltaTime);
      }

      // Update camera position to follow locked object
      if (isViewLocked && currentLockedObject) {
        const objectName = currentLockedObject.name.replace('Object', '');
        const objectConfig = objectScales[objectName];
        if (objectConfig) {
          const viewDistance = objectConfig.distance * objectConfig.scale;
        }
      }

      const container = document.getElementById('container3D');
      if (labels && container) {
        if (labels.psycheLabel) updateLabelPosition(labels.psycheLabel, objects.psycheObject, camera, container);
        if (labels.sunLabel) updateLabelPosition(labels.sunLabel, objects.sunObject, camera, container);
        if (labels.mercuryLabel) updateLabelPosition(labels.mercuryLabel, objects.mercuryObject, camera, container);
        if (labels.venusLabel) updateLabelPosition(labels.venusLabel, objects.venusObject, camera, container);
        if (labels.earthLabel) updateLabelPosition(labels.earthLabel, objects.earthObject, camera, container);
        if (labels.marsLabel) updateLabelPosition(labels.marsLabel, objects.marsObject, camera, container);
        if (labels.jupiterLabel) updateLabelPosition(labels.jupiterLabel, objects.jupiterObject, camera, container);
        if (labels.neptuneLabel) updateLabelPosition(labels.neptuneLabel, objects.neptuneObject, camera, container);
      }
    }

    controls.update();
    renderer.render(scene, camera);
  }

  animate(0);
}