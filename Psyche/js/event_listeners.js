// Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

// Function to setup event listeners for window resizing and user interactions
export function setupEventListeners(container, camera, renderer, controls) {
  // Store scene reference on renderer element
  const scene = renderer.domElement.__scene;

  // Handle window resize
  window.addEventListener('resize', () => {
    // Update camera aspect ratio and projection matrix
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    // Update renderer size to match container
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio
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
      'w': scene.getObjectByName('xyPlane'),
      'a': scene.getObjectByName('zyPlane'), 
      'd': scene.getObjectByName('xzPlane')
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

  // Handle label click events
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('label')) {
      const objectName = event.target.textContent.toLowerCase();
      const objectScales = {
        'psyche': { distance: 30, scale: 1 },
        'sun': { distance: 100, scale: 2 },
        'mercury': { distance: 15, scale: 0.8 },
        'venus': { distance: 25, scale: 1 },
        'earth': { distance: 25, scale: 1 }
      };

      const objectConfig = objectScales[objectName];
      if (objectConfig) {
        const targetObject = scene.getObjectByName(objectName + 'Object');
        if (targetObject) {
          const viewDistance = objectConfig.distance * objectConfig.scale;
          const targetPos = targetObject.position.clone();
          const offset = new THREE.Vector3(viewDistance, viewDistance/2, viewDistance);
          const newCameraPos = targetPos.clone().add(offset);
          
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
      }
    }
  });

  // Add double click handler for zooming to clicked point
  renderer.domElement.addEventListener('dblclick', (event) => {
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / container.clientWidth) * 2 - 1;
    mouse.y = -(event.clientY / container.clientHeight) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0) {
      const point = intersects[0].point;
      const direction = new THREE.Vector3().subVectors(point, camera.position).normalize();
      const distance = 5;
      camera.position.addScaledVector(direction, distance);
      controls.target.copy(point);
      controls.update();
    }
  });

  // Add keyboard controls for camera reset
  document.addEventListener('keydown', (event) => {
    if (event.key === 'r' || event.key === 'R') {
      camera.position.set(0, 200, 550);
      camera.lookAt(0, 0, 0);
      controls.target.set(0, 0, 0);
      controls.update();
    }
  });

  /*****************************************************
   * listener "mouseover" - info button
   * 
   * This listener is invoked when the mouse hovers over the information button.
   * It will change the logo displaying an alternative colored information button
   */
  document.getElementById('info').addEventListener('mouseover', function() {
    document.getElementById('info_button').src = "images/main_images/info_button_color.png";
  });

  /*****************************************************
   * listener "mouseout" - info button
   * 
   * This listener is invoked when the mouse moves away from the information button.
   * It will change the logo displaying the original information button
   */
  document.getElementById('info').addEventListener('mouseout', function() {
    document.getElementById('info_button').src = "images/main_images/info_button.png";
  });

  /*****************************************************
   * listener "mouseover" - fullscreen button
   * 
   * This listener is invoked when the mouse hovers over the fullscreen button.
   * It will change the logo displaying an alternative colored fullscreen button
   */
  document.getElementById('fullscreen').addEventListener('mouseover', function() {
    document.getElementById('fullscreen_button').src = "images/main_images/full_screen_bracket_color.png";
  });

  /*****************************************************
   * listener "mouseout" - fullscreen button
   * 
   * This listener is invoked when the mouse moves away from the fullscreen button.
   * It will change the logo displaying the original fullscreen button
   */
  document.getElementById('fullscreen').addEventListener('mouseout', function() {
    document.getElementById('fullscreen_button').src = "images/main_images/full_screen_bracket.png";
  });

  /*****************************************************
   * listener "click" - fullscreen button
   * 
   * This listener handles the fullscreen toggle functionality when clicking
   * the fullscreen button
   */
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
    requestAnimationFrame(animate);
    if (controls) controls.update();
  }
  animate();
}
