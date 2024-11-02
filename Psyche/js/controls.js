/**
 * controls.js
 * 
 * This file controls how the camera moves and how users can interact with the Psyche view.
 * It handles:
 * - Setting up camera movement controls
 * - Keys to change camera views (top, side, front)
 * - Playing and stopping animation
 * - Moving the camera back to start
 * - Limits on zoom, pan and spin speeds
 * 
 * The controls let users look around the 3D scene while keeping them from
 * getting lost or turned around.
 */

// Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

// Function to setup controls for camera movement
export function setupControls(camera, renderer) {
  // Create orbit controls
  const controls = new OrbitControls(camera, renderer.domElement);
  
  // Configure controls
  controls.enableDamping = true; // Add smooth damping effect
  controls.dampingFactor = 0.05;
  
  controls.minDistance = 1; // Reduced minimum zoom to get closer to objects
  controls.maxDistance = 1000; // Maximum zoom distance
  
  controls.enablePan = true; // Allow panning
  controls.panSpeed = 0.5; // Pan speed
  
  controls.enableZoom = true; // Allow zooming
  controls.zoomSpeed = 1.0; // Zoom speed
  
  controls.rotateSpeed = 0.5; // Rotation speed
  
  // Add limits to vertical rotation (in radians)
  controls.minPolarAngle = Math.PI * 0.1; // ~18 degrees from top
  controls.maxPolarAngle = Math.PI * 0.9; // ~162 degrees from top

  // Initialize animation state on the renderer's DOM element
  renderer.domElement.__isAnimationPaused = false;

  // Add keyboard controls for camera views and animation pause
  document.addEventListener('keydown', (event) => {
    switch(event.key.toLowerCase()) {
      case 'w':
        // Top view
        camera.position.set(0, 970, 0);
        camera.lookAt(0, 0, 0);
        controls.target.set(0, 0, 0);
        break;
      case 'a':
        // Side view
        camera.position.set(790, 0, 0);
        camera.lookAt(0, 0, 0);
        controls.target.set(0, 0, 0);
        break;
      case 'd':
        // Front view
        camera.position.set(0, 0, 790);
        camera.lookAt(0, 0, 0);
        controls.target.set(0, 0, 0);
        break;
    //   case 'p':
    //     // Toggle animation pause state for planet movements only
    //     renderer.domElement.__isAnimationPaused = !renderer.domElement.__isAnimationPaused;
    //     break;
      case 'r':
        // Reset camera position
        camera.position.set(0, 290, 790);
        camera.lookAt(0, 0, 0);
        controls.target.set(0, 0, 0);
        controls.update();
        break;
    }
    controls.update();
  });
  
  return controls;
}