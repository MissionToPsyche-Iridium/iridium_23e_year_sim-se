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
    fitObjectToContainer(object); // Call function to fit the object
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

// Function to fit the object within the container using bounding box
function fitObjectToContainer(object) {
  // Compute the bounding box of the object
  const boundingBox = new THREE.Box3().setFromObject(object);

  // Get the size of the bounding box
  const size = new THREE.Vector3();
  boundingBox.getSize(size);

  // Calculate the largest dimension of the bounding box
  const maxDimension = Math.max(size.x, size.y, size.z);

   // Determine the scale factor based on screen width (detect if it's a phone)
   let scaleFactor;
   console.log(`Screen width: ${window.innerWidth}, Screen height: ${window.innerHeight}`);
   if (window.innerWidth <= 500) { // Mobile screen sizes
    console.log('Mobile screen detected');
    scaleFactor = 19 / maxDimension; // Use a larger scale for smaller screens
   } else if (window.innerWidth <= 768) { // Mobile screen sizes
     console.log('tablet screen detected');
     scaleFactor = 20 / maxDimension; // Use a larger scale for smaller screens
   } else { // Desktop and tablet sizes
     console.log('Larger screen detected'); // Debug log to confirm detection
     scaleFactor = 35 / maxDimension; // Adjust this for larger screens
   }

  // Apply the calculated scale
  object.scale.set(scaleFactor, scaleFactor, scaleFactor);

  // Center the object
  const center = new THREE.Vector3();
  boundingBox.getCenter(center);
  object.position.sub(center);

  // Log the scale factor and other information for debugging
  console.log(`Applied scale factor: ${scaleFactor}`);
  console.log(`Bounding Box Size: ${size.x}, ${size.y}, ${size.z}`);
}

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

// listener "dblclick" - mouse is double clicked
renderer.domElement.addEventListener('dblclick', onDoubleClick);

// onDoubleClick() - This function moves the camera view towards the area of the object that was double clicked
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

// listener "click" - fullscreen button
fullscreenButton.addEventListener('click', function() {
  if (!document.fullscreenElement) {
    fullscreenButton.style.display = 'none';
    infobutton.style.display = 'none';
    if (container3D.requestFullscreen) {
      container3D.requestFullscreen().then(() => {
        container3D.classList.add('fullscreen-mode');
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      });
    } else if (container3D.webkitRequestFullscreen) { // For Safari
      container3D.webkitRequestFullscreen().then(() => {
        container3D.classList.add('fullscreen-mode');
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      });
    } else if (container3D.msRequestFullscreen) { // For IE11
      container3D.msRequestFullscreen().then(() => {
        container3D.classList.add('fullscreen-mode');
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      });
    }
  } else {
    
    if (document.exitFullscreen) {
      document.exitFullscreen().then(() => {
        container3D.classList.remove('fullscreen-mode');
        renderer.setSize(container.clientWidth, container.clientHeight);
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
      });
    } else if (document.webkitExitFullscreen) { // For Safari
      document.webkitExitFullscreen().then(() => {
        container3D.classList.remove('fullscreen-mode');
        renderer.setSize(container.clientWidth, container.clientHeight);
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
      });
    }
  }
});

// Event listener for fullscreen changes
document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    fullscreenButton.style.display = 'block';
    infobutton.style.display = 'block';
    container3D.classList.remove('fullscreen-mode');
    renderer.setSize(container.clientWidth, container.clientHeight);
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
  }
});