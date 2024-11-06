/**
 * labels.js
 * 
 * This file handles the creation and positioning of labels for celestial objects in the Psyche simulation.
 * It manages:
 * - Creating HTML label elements that float over the 3D scene
 * - Positioning labels to follow their corresponding 3D objects
 * - Label visibility based on object position relative to camera and fullscreen state
 * - Label styling and hover effects
 * - Label positioning in fullscreen mode only
 * 
 * The labels provide an interactive way for users to identify and click on celestial objects
 * in the scene when in fullscreen mode. Labels automatically hide when not in fullscreen or when
 * their objects are not visible to prevent visual clutter.
 */

// Import THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

// Function to create a label with given text
export function createLabel(text) {
  // Create a div element for the label that will float over the 3D scene
  const labelDiv = document.createElement('div');
  labelDiv.className = 'label';
  labelDiv.textContent = text;
  labelDiv.style.position = 'absolute'; // Absolute positioning allows label to float over scene
  labelDiv.style.color = '#f9a000'; // Mustard color
  labelDiv.style.padding = '5px 10px';
  labelDiv.style.backgroundColor = '#12031d'; // Black background
  labelDiv.style.borderRadius = '5px';
  labelDiv.style.fontSize = '14px';
  labelDiv.style.userSelect = 'none';
  labelDiv.style.cursor = 'pointer'; // Show pointer cursor on hover
  labelDiv.style.zIndex = '1000'; // Ensure labels appear above the 3D scene
  labelDiv.style.transition = 'background-color 0.2s';
  labelDiv.style.display = 'none'; // Initially hide label
  labelDiv.style.border = 'solid 1px #f9a000'; // Mustard border

  // Add hover effect
  labelDiv.addEventListener('mouseover', () => {
    labelDiv.style.backgroundColor = '#f9a000'; // Mustard background on hover
    labelDiv.style.color = '#12031d'; // Black text on hover
  });

  labelDiv.addEventListener('mouseout', () => {
    labelDiv.style.backgroundColor = '#12031d'; // Black background
    labelDiv.style.color = '#f9a000'; // Mustard text
  });

  // container3D is a div in the HTML that wraps both the THREE.js canvas and the floating labels
  // It needs to have position: relative to serve as the coordinate space for the absolute-positioned labels
  const container = document.getElementById('container3D');
  if (container) {
    const canvas = container.querySelector('canvas');
    if (canvas) {
      // Insert label before the canvas in the DOM to ensure it renders on top
      container.insertBefore(labelDiv, canvas);
    } else {
      // Fallback: append label if canvas not found
      container.appendChild(labelDiv);
    }
  }

  return labelDiv;
}

// Function to update label position based on object position
// This function is called every animation frame to make labels follow their objects
export function updateLabelPosition(label, object, camera, container) {
  if (!label || !object || !camera || !container) return;

  // Check if we're in fullscreen mode
  const isFullscreen = document.fullscreenElement || 
                      document.webkitFullscreenElement || 
                      document.msFullscreenElement;

  // Hide label if not in fullscreen mode
  if (!isFullscreen) {
    label.style.display = 'none';
    return;
  }

  // Get the current world position of the planet/object in 3D space
  const vector = new THREE.Vector3();
  object.getWorldPosition(vector);

  // Project the 3D world position into 2D screen coordinates
  vector.project(camera);

  // Get window dimensions for fullscreen mode
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Convert normalized device coordinates to screen coordinates
  const x = ((vector.x + 1) / 2) * width;
  const y = ((-vector.y + 1) / 2) * height;

  // Position the label at the calculated coordinates
  label.style.transform = `translate(-50%, -50%)`; // Center the label on the point
  label.style.left = `${x}px`;
  label.style.top = `${y}px`;

  // Hide labels for objects that are either:
  // - Behind the camera (vector.z > 1)
  // - Outside the visible area
  const isBehindCamera = vector.z > 1;
  const isOutsideBounds = x < 0 || x > width || y < 0 || y > height;
  
  label.style.display = (isBehindCamera || isOutsideBounds) ? 'none' : 'block';
}