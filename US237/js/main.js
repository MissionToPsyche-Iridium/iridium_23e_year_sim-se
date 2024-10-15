/* 
* main.js
* 
* Class:    SER01
* Author:   Tyler Brown & Dan McNeil
* Date:     10/9/2024
* Revision: 1.1
*
* Description: This main.js creates a scene that is rendered and displayed on a webpage. 
<describe elements> 
*/

//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

//Create a Three.JS Scene
const scene = new THREE.Scene();
//create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);

//Keep track of the mouse position, so we can make the eye move
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

//Keep the 3D object on a global variable so we can access it later
let object;

//OrbitControls allow the camera to move around the scene
let controls;

//Set which object to render
let objToRender = 'psyche';

// Add raycaster and mouse vector for detecting intersections
const raycaster = new THREE.Raycaster(); //racyaster is short for raycasting which helps in mouse picking or working out where an object in 3D space is based on the mouse
const mouse = new THREE.Vector2(); // a new 2D Vector (x, y) or a point in 2D space

// Define the zoom step (how much the camera moves forward)
const zoomStep = 2; 

function onDoubleClick(event) {
  // Get mouse position relative to canvas
  const mouse = new THREE.Vector2(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1
  );

  // Raycast from the mouse position
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(object, true);

  if (intersects.length > 0) {
    const intersectPoint = intersects[0].point;

    // Calculate direction from camera to intersect point
    const direction = new THREE.Vector3().subVectors(intersectPoint, camera.position).normalize();

    // Move the camera towards the intersect point
    camera.position.addScaledVector(direction, zoomStep); // Move camera closer by 'zoomStep'
    camera.lookAt(intersectPoint); // Make the camera focus on the intersection point
    controls.update(); // Update controls after moving the camera
  }
}

//Instantiate the loader for GLTF models
const loader = new GLTFLoader();

// Load the file and ensure the object is fully ready for raycasting
loader.load(
  `models/${objToRender}/psyche.glb`,
  function (gltf) {
    // If the file is loaded, add it to the scene
    object = gltf.scene;
    object.traverse((child) => {
      if (child.isMesh) {
        child.geometry.computeBoundingBox(); // Ensure it has a bounding box for raycasting
      }
    });
    scene.add(object);
    console.log('Object loaded and added to scene.');
  },
  function (xhr) {
    // While it is loading, log the progress
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    // If there is an error, log it
    console.error(error);
  }
);

//Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true }); //Alpha: true allows for the transparent background
renderer.setSize(window.innerWidth, window.innerHeight);

//Add the renderer to the DOM
document.getElementById("container3D").appendChild(renderer.domElement);

//Set how far the camera will be from the 3D model
camera.position.z = 10;

//Add lights to the scene, so we can actually see the 3D model
const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(500, 500, 500) //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, 1);
scene.add(ambientLight);

//This adds controls to the camera, so we can rotate / zoom it with the mouse
if (objToRender === "psyche") {
  controls = new OrbitControls(camera, renderer.domElement);
  
  // Add your custom configuration for panning here
  controls.enablePan = true;
  controls.panSpeed = 1.0; // Optional: adjust speed
  controls.mouseButtons = {
    LEFT: THREE.MOUSE.ROTATE,    // Left-click rotates
    MIDDLE: THREE.MOUSE.DOLLY,    // Middle-click zooms
    RIGHT: THREE.MOUSE.PAN        // Right-click pans
  };
}

// Create a flag to control rotation
let isRotating = true;

//Render the scene
function animate() {
  requestAnimationFrame(animate);

  //Make Psyche rotate along x axis 
  //Mimics its actual rotation like a roticery chicken
  if (objToRender === "psyche" && object && isRotating) {
    // not sure the how the math correlates to reality, but a good starting point 
    object.rotation.x += 0.0009;
    object.rotation.y += 0.001;
    object.rotation.z += 0.0009;
  }
  renderer.render(scene, camera);
}

// Add an event listener to toggle rotation on a key press
document.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    isRotating = !isRotating; // Toggle rotation on/off
  }
});

// Add an event listener to toggle lighting on a key press 
document.addEventListener("keydown", (event) => {
  if (event.key === "+") {
    topLight.intensity += .05;
  } else if (event.key === "-") {
    topLight.intensity -= .05;
  }
});

//Add a listener to the window, so we can resize the window and the camera
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

//Add mouse position listener, so we can make the eye move
document.onmousemove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

// Use renderer's DOM element to listen for canvas double clicks
renderer.domElement.addEventListener('dblclick', onDoubleClick);

//Start the 3D rendering
animate();