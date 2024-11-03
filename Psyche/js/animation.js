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

  // Add mouse event listeners for panning
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

    // Pan camera based on mouse movement
    camera.position.x -= deltaMove.x * 0.5;
    camera.position.y += deltaMove.y * 0.5;

    previousMousePosition = {
      x: e.clientX,
      y: e.clientY
    };

    camera.updateProjectionMatrix();
  });

  renderer.domElement.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Add mouse wheel listener for zooming
  renderer.domElement.addEventListener('wheel', (e) => {
    e.preventDefault();
    
    // Zoom in/out based on scroll direction
    const zoomSpeed = 30;
    if (e.deltaY > 0) {
      camera.position.z += zoomSpeed;
    } else {
      camera.position.z -= zoomSpeed;
    }
    
    camera.updateProjectionMatrix();
  });

  // Add click handlers for labels
  const objectScales = {
    'psyche': { distance: 5, scale: 1 },
    'sun': { distance: 100, scale: 2 }, 
    'mercury': { distance: 15, scale: 0.8 },
    'venus': { distance: 25, scale: 1 },
    'earth': { distance: 25, scale: 1 },
    'mars': { distance: 30, scale: 0.9 },
    'jupiter': { distance: 45, scale: 1.5 }
    // 'saturn': { distance: 55, scale: 1.4 },
    // 'uranus': { distance: 65, scale: 1.2 },
    // 'neptune': { distance: 75, scale: 1.2 }
  };

  // Add keyboard event listener for ESC key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isViewLocked) {
      isViewLocked = false;
      currentLockedObject = null;
      controls.enabled = true;
      
      // Reset camera position
      camera.position.set(0, 200, 550);
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

  // Add click handlers for planet buttons
  const planetButtons = {
    'button-sun': 'sun',
    'button-mercury': 'mercury', 
    'button-venus': 'venus',
    'button-earth': 'earth',
    'button-mars': 'mars',
    'button-psyche': 'psyche',
    'button-jupiter': 'jupiter'
  };

  Object.entries(planetButtons).forEach(([buttonId, planetName]) => {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener('click', () => handlePlanetClick(planetName));
    }
  });

  // Create info labels and windows for each celestial body
  const infoContent = {
    'psyche': {
      pages: [
        {
          title: '16 Psyche - Overview',
          content: `
            <div>
              <img src="./images/psyche_popup_images/psyche_path.jpg" style="width: 100%; margin-top: 10px; border-radius: 8px;">
              <p>Psyche is the name of an asteroid orbiting the Sun between Mars and Jupiter. It is also the name of a NASA space mission to visit that asteroid, led by Arizona State University. Scientists think that Psyche is largely made of metal. If this is true, it could be part of the core of a planetesimal – a small world the size of a city or small country that is the first building block of a planet.</p>
            </div>`,
        },
        {
          title: '16 Psyche - Connection', 
          content: `
            <div>
              <img src="./images/psyche_popup_images/Psyche_3.jpg" style="width: 100%; margin-top: 10px; border-radius: 8px;">
              <p>Psyche could help us understand how Earth's core and the cores of other terrestrial planets came to be.</p>
            
            </div>`,
        }
      ]
    },
    'sun': {
      pages: [
        {
          title: 'The Sun - Overview', 
          content: 'The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system. Its gravity holds everything from the biggest planets to tiny particles in its orbit. The Sun\'s core is about 27 million degrees Fahrenheit (15 million degrees Celsius). The Sun\'s surface is about 10,000 degrees Fahrenheit (5,500 degrees Celsius).'
        },
        {
          title: 'The Sun - Connection',
          content: 'The Sun\'s powerful magnetic field and radiation affects all bodies in the solar system including Psyche.'
        }
      ]
    },
    'mercury': {
      pages: [
        {
          title: 'Mercury - Overview',
          content: 'Mercury is the smallest planet in our solar system and nearest to the Sun. Mercury is only slightly larger than Earth\'s Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter.'
        },
        {
          title: 'Mercury - Connection',
          content: 'Like Psyche, Mercury is believed to have a large metallic core, making it relevant for understanding metal-rich bodies in space.'
        }
      ]
    },
    'venus': {
      pages: [
        {
          title: 'Venus - Overview',
          content: 'Venus is the second planet from the Sun and is Earth\'s closest planetary neighbor. It\'s one of the four inner, terrestrial (or rocky) planets. Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.'
        },
        {
          title: 'Venus - Connection',
          content: 'Venus and Psyche formed in the same early solar system, providing context for different formation pathways.'
        }
      ]
    },
    'earth': {
      pages: [
        {
          title: 'Earth - Overview',
          content: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.'
        },
        {
          title: 'Earth - Connection',
          content: 'Studying Psyche may provide insights into Earth\'s own metallic core formation and composition.'
        }
      ]
    },
    'mars': {
      pages: [
        {
          title: 'Mars - Overview',
          content: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System. Mars is often called the "Red Planet" because of its reddish appearance, which is due to iron oxide (rust) on its surface. Mars has two small moons, Phobos and Deimos.'
        },
        {
          title: 'Mars - Connection',
          content: 'Mars lies between the asteroid belt (where Psyche is located) and Earth, providing important context for understanding the early solar system.'
        }
      ]
    },
    'jupiter': {
      pages: [
        {
          title: 'Jupiter - Overview',
          content: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined. Jupiter is primarily composed of hydrogen and helium.'
        },
        {
          title: 'Jupiter - Connection',
          content: 'Jupiter\'s strong gravitational influence affects the asteroid belt where Psyche orbits, and played a key role in shaping the early solar system.'
        }
      ]
    }
  };

  // Create info windows for each object
  Object.entries(labels).forEach(([key, label]) => {
    if (label) {
      // Create info icon
      const infoIcon = document.createElement('span');
      infoIcon.textContent = 'ⓘ';
      infoIcon.style.marginLeft = '5px';
      infoIcon.style.cursor = 'pointer';
      infoIcon.style.color = '#00ffff';
      label.appendChild(infoIcon);

      // Create info window
      const infoWindow = document.createElement('div');
      infoWindow.className = 'info-window';
      infoWindow.style.display = 'none';
      infoWindow.style.position = 'absolute';
      infoWindow.style.backgroundColor = 'rgba(48, 33, 68, 0.9)'; // Dark purple background
      infoWindow.style.padding = '20px';
      infoWindow.style.borderRadius = '12px';
      infoWindow.style.maxWidth = '400px';
      infoWindow.style.minWidth = '300px';
      infoWindow.style.zIndex = '1001';
      infoWindow.style.color = 'white';
      infoWindow.style.border = '2px solid #592651'; // Purple border
      infoWindow.style.boxShadow = '0 0 20px rgba(89, 38, 81, 0.3)'; // Purple glow
      infoWindow.style.backdropFilter = 'blur(5px)';
      infoWindow.style.fontFamily = 'Arial, sans-serif';

      const objectKey = key.replace('Label', '');
      if (infoContent[objectKey]) {
        let currentPage = 0;
        const totalPages = infoContent[objectKey].pages.length;

        function updateContent() {
          const page = infoContent[objectKey].pages[currentPage];
          infoWindow.innerHTML = `
            <div style="position: relative;">
              <h3 style="margin: 0 0 15px 0; color: #a53f5b; font-size: 18px; border-bottom: 1px solid #592651; padding-bottom: 10px;">
                ${page.title}
              </h3>
              <div style="margin: 0 0 20px 0; line-height: 1.6; font-size: 14px;">
                ${page.content}
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px; border-top: 1px solid #592651; padding-top: 15px;">
                <button class="nav-btn prev" style="background: none; border: 1px solid #592651; color: #a53f5b; padding: 5px 15px; cursor: pointer; border-radius: 4px;" ${currentPage === 0 ? 'disabled' : ''}>Previous</button>
                <span style="color: #a53f5b;">${currentPage + 1}/${totalPages}</span>
                <button class="nav-btn next" style="background: none; border: 1px solid #592651; color: #a53f5b; padding: 5px 15px; cursor: pointer; border-radius: 4px;" ${currentPage === totalPages - 1 ? 'disabled' : ''}>Next</button>
              </div>
              <button class="close-btn" style="position: absolute; top: -15px; right: -15px; background: #592651; border: none; color: white; width: 25px; height: 25px; border-radius: 50%; cursor: pointer; font-weight: bold;">×</button>
            </div>
          `;

          // Add event listeners for navigation
          infoWindow.querySelector('.prev')?.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentPage > 0) {
              currentPage--;
              updateContent();
            }
          });

          infoWindow.querySelector('.next')?.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentPage < totalPages - 1) {
              currentPage++;
              updateContent();
            }
          });

          infoWindow.querySelector('.close-btn')?.addEventListener('click', () => {
            infoWindow.style.display = 'none';
            isAnimationPaused = false;
          });
        }

        updateContent();
      }

      document.getElementById('container3D').appendChild(infoWindow);

      // Add click handler for info icon
      infoIcon.addEventListener('click', (event) => {
        event.stopPropagation();
        const rect = infoIcon.getBoundingClientRect();
        infoWindow.style.left = `${rect.right + 10}px`;
        infoWindow.style.top = `${rect.top}px`;
        if (infoWindow.style.display === 'none') {
          infoWindow.style.display = 'block';
          isAnimationPaused = true;
        } else {
          infoWindow.style.display = 'none';
          isAnimationPaused = false;
        }
      });

      // Close info window when clicking outside
      document.addEventListener('click', (event) => {
        if (!infoWindow.contains(event.target) && event.target !== infoIcon) {
          infoWindow.style.display = 'none';
          isAnimationPaused = false;
        }
      });

      // Add click handler for main label
      label.addEventListener('click', () => {
        const objectName = label.textContent.toLowerCase().split('ⓘ')[0].trim();
        handlePlanetClick(objectName);
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
        objects.marsObject && objects.jupiterObject) {
      
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