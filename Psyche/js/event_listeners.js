/**
 * event_listeners.js
 * 
 * This file manages all event listeners and user interactions for the Psyche simulation.
 * It handles:
 * - Window resize events to maintain proper display scaling and show resolution
 * - Label hover and click interactions for celestial objects
 * - Camera transitions when focusing on different objects
 * - Keyboard shortcuts for views and fullscreen mode
 * - UI button hover states and click handlers
 * - Animation loop management
 * 
 * This file contains event listeners for user interactions like clicking labels,
 * resizing the window, and keyboard shortcuts.
 */

// Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

// Function to setup event listeners for window resizing and user interactions
export function setupEventListeners(container, camera, renderer, controls) {
  // Store scene reference on renderer element
  const scene = renderer.domElement.__scene;
  
  // Animation state
  let isAnimationPaused = false;

  // Function to update resolution display
  const updateResolutionDisplay = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const resolutionDiv = document.getElementById('resolution');
    if (resolutionDiv) {
      resolutionDiv.textContent = `${width} x ${height}`;
      resolutionDiv.style.display = 'block'; // Ensure it's visible
    }
  };

  // Initialize resolution display when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateResolutionDisplay);
  } else {
    // DOM already loaded, update immediately
    updateResolutionDisplay();
  }

  // Handle window resize
  window.addEventListener('resize', () => {
    // Update camera aspect ratio and projection matrix
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    // Update renderer size to match container
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio

    // Update resolution display
    updateResolutionDisplay();
  });

  // Setup label hover events for all labels
  const setupLabelHoverEvents = () => {
    const labels = document.querySelectorAll('.label');
    labels.forEach(label => {
      // Add hover effect
      label.addEventListener('mouseover', () => {
        label.style.backgroundColor = 'rgba(30,144,255,0.9)'; //blue
      });
      label.addEventListener('mouseout', () => {
        label.style.backgroundColor = 'rgba(0,0,0,0.7)';
      });
    });
  };

  // Setup label click events for all labels
  const setupLabelClickEvents = () => {
    const labels = document.querySelectorAll('.label');
    labels.forEach(label => {
      label.addEventListener('click', () => {
        // Convert label text to lowercase for matching with object names
        const objectName = label.textContent.toLowerCase();

        // Define viewing parameters for each celestial object
        const objects = {
          'psyche': { distance: 30, scale: 1 },     // Default viewing distance for Psyche
          'sun': { distance: 100, scale: 2 },       // Sun needs to be viewed from further away due to size
          'mercury': { distance: 15, scale: 0.8 },  // Mercury can be viewed closer due to small size
          'venus': { distance: 25, scale: 1 },      // Default parameters for Venus
          'earth': { distance: 25, scale: 1 },      // Default parameters for Earth
          'mars': { distance: 30, scale: 0.9 },     // Default parameters for Mars
          'jupiter': { distance: 45, scale: 1.5 },   // Jupiter needs to be viewed from further away due to size
          'uranus': { distance: 55, scale: 1 }
        };

        // Get the viewing parameters for clicked object
        const object = objects[objectName];
        if (object) {
          // Find the corresponding 3D object in the scene
          const targetObject = scene.getObjectByName(objectName + 'Object');
          if (targetObject) {
            // Calculate final viewing distance based on object's parameters
            const viewDistance = object.distance * object.scale;
            
            // Get target object's position and create offset for camera
            const targetPos = targetObject.position.clone();
            // Position camera at an angle above and to the side of object
            const offset = new THREE.Vector3(viewDistance, viewDistance/2, viewDistance);
            // Calculate final camera position by adding offset to target position
            const newCameraPos = targetPos.clone().add(offset);
            
            // Setup animation parameters
            const duration = 1000; // Animation duration in milliseconds
            const startPos = camera.position.clone(); // Store starting camera position
            const startTime = Date.now(); // Get animation start time
            
            // Animation function that runs every frame
            function animateCamera() {
              const now = Date.now();
              // Calculate animation progress (0 to 1)
              const progress = Math.min((now - startTime) / duration, 1);
              
              // Apply cubic easing out function for smooth deceleration
              const easeProgress = 1 - Math.pow(1 - progress, 3);
              
              // Interpolate camera position between start and end positions
              camera.position.lerpVectors(startPos, newCameraPos, easeProgress);
              // Update orbit controls to look at the target object
              controls.target.copy(targetPos);
              controls.update();
              
              // Continue animation if not finished
              if (progress < 1) {
                requestAnimationFrame(animateCamera);
              }
            }
            
            // Start the camera animation
            animateCamera();
          }
        }
      });
    });
  };

  // Call setup functions
  setupLabelHoverEvents();
  setupLabelClickEvents();

  toggleButton.addEventListener('click', function() {
    if (references.style.display == 'none' || references.style.display == '') {
        references.style.display = 'block'; 
    } else {
        references.style.display = 'none';
    }
  });

  // Handle fullscreen toggle with 'f' key
  document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'f') {
      if (!document.fullscreenElement) {
        if (container.requestFullscreen) {
          container.requestFullscreen().catch(err => {
            console.warn(`Error attempting to enable fullscreen: ${err.message}`);
          });
        } else if (container.webkitRequestFullscreen) { // Safari
          container.webkitRequestFullscreen();
        } else if (container.msRequestFullscreen) { // IE11
          container.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { // Safari
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE11
          document.msExitFullscreen();
        }
      }
    }
  });

  // Handle escape key to exit fullscreen
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (document.fullscreenElement || 
          document.webkitFullscreenElement || 
          document.msFullscreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    }
  });

  // Handle reference plane visibility and camera positioning
  document.addEventListener('keydown', (event) => {
    const planes = {
    //   'w': scene.getObjectByName('xyPlane'),
    //   'a': scene.getObjectByName('zyPlane'), 
    //   'd': scene.getObjectByName('xzPlane')
    };

    const cameraPositions = {
      'w': new THREE.Vector3(0, 550, 0),    // Top view
      'a': new THREE.Vector3(550, 0, 0),    // Side view
      'd': new THREE.Vector3(0, 0, 550)     // Front view
    };

    const key = event.key.toLowerCase();
    if (key in planes) {
      // Hide all planes first
      Object.values(planes).forEach(plane => {
        if (plane) plane.visible = false;
      });
      // Show selected plane
      if (planes[key]) planes[key].visible = true;

      // Move camera to new position
      if (cameraPositions[key]) {
        camera.position.copy(cameraPositions[key]);
        camera.lookAt(0, 0, 0);
        controls.target.set(0, 0, 0);
        controls.update();
      }
    }
  });

  // Info button hover events
  document.getElementById('info').addEventListener('mouseover', function() {
    document.getElementById('info_button').src = "images/main_images/info_button_color.png";
  });

  document.getElementById('info').addEventListener('mouseout', function() {
    document.getElementById('info_button').src = "images/main_images/info_button.png";
  });

  // Fullscreen button hover events
  document.getElementById('fullscreen').addEventListener('mouseover', function() {
    document.getElementById('fullscreen_button').src = "images/main_images/full_screen_bracket_color.png";
  });

  document.getElementById('fullscreen').addEventListener('mouseout', function() {
    document.getElementById('fullscreen_button').src = "images/main_images/full_screen_bracket.png";
  });

  // Fullscreen button click event
  document.getElementById('fullscreen').addEventListener('click', function() {
    if (!document.fullscreenElement) {
      if (container.requestFullscreen) {
        container.requestFullscreen().catch(err => {
          console.warn(`Error attempting to enable fullscreen: ${err.message}`);
        });
      } else if (container.webkitRequestFullscreen) { // Safari
        container.webkitRequestFullscreen();
      } else if (container.msRequestFullscreen) { // IE11
        container.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { // Safari
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE11
        document.msExitFullscreen();
      }
    }
  });
 
  // Store scene reference and setup animation loop
  renderer.domElement.__scene = scene;
  function animate() {
    if (!isAnimationPaused) {
      requestAnimationFrame(animate);
      if (controls) controls.update();
    } else {
      setTimeout(() => requestAnimationFrame(animate), 100); // Check pause state periodically
    }
  }
  animate();
}