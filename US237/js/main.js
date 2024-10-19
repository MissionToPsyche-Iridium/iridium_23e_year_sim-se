/* 
* main.js
* 
*
* This main.js creates a scene that is rendered and displayed on a webpage. 
* 
* Class:      SER 401
* Team:       35
* Project:    NASA Psyche Mission: Year on Psyche Simulation
* Authors:    Armando Arratia, Dan McNeil, Jenny Potocki, Josh Anselm, Tyler Brown
* Date:       10/17/24
* Revision:   1.0
*
* Functions:
*    css/style.css -  This file defines the presentation aspects of this HTML file
*
*    js/main.js -     This file is the main driver of the Psyche simulation. Contains
*                     the asteroid model and action listeners to manipulate. 
*
*    js/popup.js -    This file 
* 
* Listeners: 
*    css/style.css -  This file defines the presentation aspects of this HTML file
*
*    js/main.js -     This file is the main driver of the Psyche simulation. Contains
*                     the asteroid model and action listeners to manipulate. 
*
*    js/popup.js -    This file 
*
*/

/*
========================================================================================================
File Start
========================================================================================================
*/

/*****************************************************
 * IMPORTS
 * 
 * Importing the needed libraries 
 *  THREE - JavaScript Animation library 
 *  OrbitalControls - Camera control around scene objects
 *  GLTFLoader - Loading and displaying 3D models
 *  
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

/*****************************************************
 * onDoubleCLick()
 * 
 * This function moves the camera view towards the area of the asteroid that was double clicked
 * 
 * arguments:
 *  event - location of the double click
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  The camera view will zoom in towards the area of the asteroid that was double clicked.
 * 
 */
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

/*****************************************************
 * loader.load()
 * 
 * This function loads the asteroid Psyche 3D model into the scene.
 * Ensures that the object is fully ready for raycasting. 
 * 
 * arguments:
 *  `models/${objToRender}/psyche.glb` - Path to Psyche model to load
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  If successful the 3D Psyche model will load.
 *  If error, the error will be logged to the console.
 * 
 */
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

/*****************************************************
 * animate()
 * 
 * This function renders the scene and starts the animations for the scene objects. 
 * Currently called as the last line in this file.
 * 
 * arguments:
 *  none
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  The scene elements will start to animate. The Psyche model will start to spin 
 *  while the light source (the sun) will remain stationary. 
 * 
 */
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

/*****************************************************
 * listener "keydown" - "r"
 * 
 * This listener is invoked when the 'r' button is pressed. It will toggle 
 * the asteroid's rotation on and off.
 * 
 * arguments:
 *  event - the event key pressed
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  The Psyche asteroid's rotation will toggle on and off. 
 * 
 */
document.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    isRotating = !isRotating; // Toggle rotation on/off
  }
});


/*****************************************************
 * listener "keydown" - "+" or "-" 
 * 
 * This listener is invoked when the '+' button is pressed. It will increase the
 * lighting in the scene that is reflected towards Psyche. If the "-" is pressed,
 * the lighting in the scene will decrease. 
 * 
 * arguments:
 *  event - the event key pressed
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  The Psyche asteroid's lighting will increase with + and decrease with -. 
 * 
 */
document.addEventListener("keydown", (event) => {
  if (event.key === "+") {
    topLight.intensity += .05;
  } else if (event.key === "-") {
    topLight.intensity -= .05;
  }
});

/*****************************************************
 * listener "resize" - browser window resize 
 * 
 * This listener is invoked when the browser dimensions change with a resize by the user.
 * 
 * arguments:
 *  resize - the window is resized
 *  function - calculates new window dimensions for new renderer size
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  The scene will readjust to the new browser window size. 
 * 
 */
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

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

//Start the 3D rendering
animate();
