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

  // Handle label click events
  document.addEventListener('click', (event) => {
    // Check if clicked element is a label
    if (event.target.classList.contains('label')) {
      const objectName = event.target.textContent.toLowerCase();
      const objects = {
        'psyche': { distance: 30, scale: 1 },
        'sun': { distance: 100, scale: 2 },
        'mercury': { distance: 15, scale: 0.8 },
        'venus': { distance: 25, scale: 1 },
        'earth': { distance: 25, scale: 1 }
      };

      const object = objects[objectName];
      if (object) {
        // Get the 3D object position
        const targetObject = scene.getObjectByName(objectName + 'Object');
        if (targetObject) {
          // Calculate camera position based on object size/scale
          const viewDistance = object.distance * object.scale;
          
          // Smoothly move camera to new position
          const targetPos = targetObject.position.clone();
          const offset = new THREE.Vector3(viewDistance, 0, viewDistance);
          const newCameraPos = targetPos.clone().add(offset);
          
          // Animate camera movement
          const duration = 1000; // 1 second
          const startPos = camera.position.clone();
          const startTime = Date.now();
          
          function animateCamera() {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            
            // Use easing function for smooth transition
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            camera.position.lerpVectors(startPos, newCameraPos, easeProgress);
            controls.target.copy(targetPos);
            
            if (progress < 1) {
              requestAnimationFrame(animateCamera);
            }
          }
          
          animateCamera();
        }
      }
    }
  });

  // Add keyboard controls for camera views
  document.addEventListener('keydown', (event) => {
    switch(event.key.toLowerCase()) {
      case 'w':
        // Top view
        camera.position.set(0, 550, 0);
        camera.lookAt(0, 0, 0);
        controls.target.set(0, 0, 0);
        break;
      case 'a':
        // Side view
        camera.position.set(550, 0, 0);
        camera.lookAt(0, 0, 0);
        controls.target.set(0, 0, 0);
        break;
      case 'd':
        // Front view
        camera.position.set(0, 0, 550);
        camera.lookAt(0, 0, 0);
        controls.target.set(0, 0, 0);
        break;
    }
    controls.update();
  });
  
  return controls;
}
