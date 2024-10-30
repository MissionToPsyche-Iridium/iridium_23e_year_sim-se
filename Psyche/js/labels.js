// Import THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

// Function to create a label with given text
export function createLabel(text) {
  // Create a div element for the label
  const labelDiv = document.createElement('div');
  labelDiv.className = 'label';
  labelDiv.textContent = text;
  labelDiv.style.position = 'absolute';
  labelDiv.style.color = 'white';
  labelDiv.style.padding = '5px 10px';
  labelDiv.style.backgroundColor = 'rgba(0,0,0,0.7)';
  labelDiv.style.borderRadius = '5px';
  labelDiv.style.fontSize = '14px';
  labelDiv.style.userSelect = 'none';
  labelDiv.style.cursor = 'pointer'; // Show pointer cursor on hover
  labelDiv.style.zIndex = '1000';
  labelDiv.style.transition = 'background-color 0.2s';

  // Add hover effect
  labelDiv.addEventListener('mouseover', () => {
    labelDiv.style.backgroundColor = 'rgba(50,50,50,0.9)';
  });
  labelDiv.addEventListener('mouseout', () => {
    labelDiv.style.backgroundColor = 'rgba(0,0,0,0.7)';
  });

  // Add click handler
  labelDiv.addEventListener('click', () => {
    const objectName = text.toLowerCase();
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
      const targetObject = document.querySelector('canvas').__scene.getObjectByName(objectName + 'Object');
      if (targetObject) {
        const camera = document.querySelector('canvas').__camera;
        const controls = document.querySelector('canvas').__controls;

        // Calculate camera position based on object size/scale
        const viewDistance = object.distance * object.scale;
        
        // Smoothly move camera to new position
        const targetPos = targetObject.position.clone();
        const offset = new THREE.Vector3(viewDistance, viewDistance/2, viewDistance);
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
          controls.update();
          
          if (progress < 1) {
            requestAnimationFrame(animateCamera);
          }
        }
        
        animateCamera();
      }
    }
  });

  // Add label to container
  const container = document.getElementById('container3D');
  if (container) {
    const canvas = container.querySelector('canvas');
    if (canvas) {
      container.insertBefore(labelDiv, canvas);
    } else {
      container.appendChild(labelDiv);
    }
  }

  return labelDiv;
}

// Function to update label position based on object position
export function updateLabelPosition(label, object, camera, container) {
  if (!label || !object || !camera || !container) return;

  // Get world position of object
  const vector = new THREE.Vector3();
  object.getWorldPosition(vector);

  // Project 3D position to 2D screen coordinates
  vector.project(camera);

  // Get container bounds
  const rect = container.getBoundingClientRect();

  // Convert to screen coordinates relative to container
  const x = (vector.x * 0.5 + 0.5) * rect.width;
  const y = (-vector.y * 0.5 + 0.5) * rect.height;

  // Update label position with offset relative to container
  label.style.transform = `translate(-50%, -50%)`; // Center the label
  label.style.left = `${x}px`;
  label.style.top = `${y}px`;

  // Hide label if object is behind camera or outside container bounds
  const isBehindCamera = vector.z > 1;
  const isOutsideBounds = x < 0 || x > rect.width || y < 0 || y > rect.height;
  label.style.display = (isBehindCamera || isOutsideBounds) ? 'none' : 'block';
}
