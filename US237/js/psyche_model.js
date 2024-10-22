// Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// Create a Three.JS Scene
const scene = new THREE.Scene();
// Get the container and create a camera with its aspect ratio based on the container
const container = document.getElementById('container3D');
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);

// OrbitControls allow the camera to move around the scene
let controls;

// Keep the 3D object on a global variable so we can access it later
let object;

// Set which object to render
let objToRender = 'psyche';

// Add raycaster and mouse vector for detecting intersections
const raycaster = new THREE.Raycaster(); // Raycaster for detecting intersections
const mouse = new THREE.Vector2(); // Mouse vector for capturing click coordinates

// Instantiate a new renderer and set its size based on the container
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Add the renderer to the container
container.appendChild(renderer.domElement);

// Set the initial camera position
camera.position.set(0, 0, 30); // Adjusted to be farther away from the object

// Add lights to the scene
const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(500, 500, 500);
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, 1);
scene.add(ambientLight);

// Load the 3D model using the GLTFLoader
const loader = new GLTFLoader();
loader.load(
  `models/${objToRender}/psyche.glb`,
  function (gltf) {
    object = gltf.scene;
    object.scale.set(3, 3, 3); // Scale the object to fit within the container
    object.position.set(0, 0, 0); // Center the object
    scene.add(object);
    console.log('Object loaded and added to scene.');
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    console.error(error);
  }
);

// Add OrbitControls to allow user interaction
controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = true;
controls.enableDamping = true; // Enable damping for a smoother rotation
controls.dampingFactor = 0.05;
controls.update();

// Add a resize listener to adjust the canvas and camera aspect ratio when the window is resized
window.addEventListener("resize", function () {
  const width = container.clientWidth;
  const height = container.clientHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

// Function to animate the scene
function animate() {
  requestAnimationFrame(animate);

  // Rotate the object if it exists
  if (object) {
    object.rotation.x += 0.001; // Slower rotation on the x-axis
    object.rotation.y += 0.001; // Slower rotation on the y-axis
  }

  controls.update();
  renderer.render(scene, camera);
}

// Start the animation
animate();

/*****************************************************
 * listener "dblclick" - mouse is double clicked
 * 
 * This listener is invoked when the mouse is double clicked
 * 
 * arguments:
 *  dblclick - the event of a mouse double click 
 *  onDoubleClick() - function to zoom to area of double click
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  The listener calls the onDoubleClick function().  
 * 
 */
renderer.domElement.addEventListener('dblclick', onDoubleClick);

/*****************************************************
 * onDoubleClick()
 * 
 * This function moves the camera view towards the area of the object that was double clicked
 * 
 * arguments:
 *  event - location of the double click
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  The camera view will zoom in towards the area of the object that was double clicked.
 * 
 */
function onDoubleClick(event) {
  // Calculate mouse position in normalized device coordinates
  mouse.x = (event.clientX / container.clientWidth) * 2 - 1;
  mouse.y = -(event.clientY / container.clientHeight) * 2 + 1;

  // Update the raycaster with the camera and mouse position
  raycaster.setFromCamera(mouse, camera);

  // Calculate objects intersecting the picking ray
  const intersects = raycaster.intersectObject(object, true);

  if (intersects.length > 0) {
    // Get the point of intersection
    const intersectPoint = intersects[0].point;

    // Move the camera towards the intersected point
    const direction = new THREE.Vector3().subVectors(intersectPoint, camera.position).normalize();
    const zoomDistance = 5; // Adjust the zoom step as needed

    camera.position.addScaledVector(direction, zoomDistance);
    camera.lookAt(intersectPoint);
    controls.update();
  }
}

/*****************************************************
 * listener "mouseover"
 * 
 * This listener is invoked when the mouse hovers over the information button. It will change the logo
 * displaying an alternative colored information button
 * 
 * arguments:
 *  event - mouse hovers over the information button
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  The information button will change
 * 
 */
document.getElementById('info').addEventListener('mouseover', function() {
  document.getElementById('info_button').src = "images/main_images/info_button_color.png";
});

/*****************************************************
 * listener "mouseout"
 * 
 * This listener is invoked when the mouse moves away from the information button. It will change the logo
 * displaying the original information button
 * 
 * arguments:
 *  event - mouse hovers over the information button
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  The information button will change
 * 
 */
document.getElementById('info').addEventListener('mouseout', function() {
  document.getElementById('info_button').src = "images/main_images/info_button.png";
});

/*****************************************************
 * listener "mouseover"
 * 
 * This listener is invoked when the mouse hovers over the information button. It will change the logo
 * displaying an alternative colored information button
 * 
 * arguments:
 *  event - mouse hovers over the information button
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  The information button will change
 * 
 */
document.getElementById('fullscreen').addEventListener('mouseover', function() {
  document.getElementById('fullscreen_button').src = "images/main_images/full_screen_bracket_color.png";
});

/*****************************************************
 * listener "mouseout"
 * 
 * This listener is invoked when the mouse moves away from the information button. It will change the logo
 * displaying the original information button
 * 
 * arguments:
 *  event - mouse hovers over the information button
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  The information button will change
 * 
 */
document.getElementById('fullscreen').addEventListener('mouseout', function() {
  document.getElementById('fullscreen_button').src = "images/main_images/full_screen_bracket.png";
});

// Get the button and the container3D element
const fullscreenButton = document.getElementById('fullscreen');
const infobutton = document.getElementById('info');
const container3D = document.getElementById('container3D');
let isFullscreen = false; // Track fullscreen state

/*****************************************************
 * listener "click" - fullscreen button
 * 
 * This listener is invoked when the fullscreen button is clicked.
 * 
 * arguments:
 *  event - the event of clicking the button
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  The container3D element goes into fullscreen mode, adjusts the camera zoom, 
 *  and hides the fullscreen button.
 * 
 */
fullscreenButton.addEventListener('click', function() {
  // Check if fullscreen is already active
  if (!document.fullscreenElement) {
    // Request fullscreen for the container3D element
    if (container3D.requestFullscreen) {
      container3D.requestFullscreen();
    } else if (container3D.webkitRequestFullscreen) { // For Safari
      container3D.webkitRequestFullscreen();
    } else if (container3D.msRequestFullscreen) { // For IE11
      container3D.msRequestFullscreen();
    }
    isFullscreen = true;
    adjustCameraZoom(true); // Zoom out when entering fullscreen
    fullscreenButton.style.display = 'none'; // Hide the fullscreen button
    infobutton.style.display = 'none'; // Hide the more information button
  } else {
    // If fullscreen is active, exit fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { // For Safari
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // For IE11
      document.msExitFullscreen();
    }
    isFullscreen = false;
    adjustCameraZoom(false); // Reset the camera zoom when exiting fullscreen
    fullscreenButton.style.display = 'block'; // Show the fullscreen button again
    infobutton.style.display = 'block'; // Show the more information button again
  }
});

/*****************************************************
 * adjustCameraZoom()
 * 
 * This function adjusts the camera zoom based on the fullscreen state.
 * 
 * arguments:
 *  enteringFullscreen - a boolean indicating if we are entering or exiting fullscreen
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  The camera's position is adjusted to zoom out or reset when toggling fullscreen.
 * 
 */
function adjustCameraZoom(enteringFullscreen) {
  if (enteringFullscreen) {
    // Move the camera back to zoom out when entering fullscreen
    camera.position.z += 30; // Adjust this value to control how much you want to zoom out
  } else {
    // Reset the camera position when exiting fullscreen
    camera.position.z -= 30; // Reset it back to the original position
  }
}

// Event listener to detect when fullscreen mode is exited using the ESC key or browser controls
document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    isFullscreen = false;
    adjustCameraZoom(false); // Reset the camera zoom when exiting fullscreen
    fullscreenButton.style.display = 'block'; // Show the fullscreen button again
    infobutton.style.display = 'block'; // Show the more information button again
  }
});