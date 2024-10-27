import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/* ===============================
   Scene Setup
   =============================== */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000000);
const renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/* ===============================
   Camera Controls Setup
   =============================== */
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

/* ===============================
   Lighting Setup
   =============================== */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

/* ===============================
   GLTFLoader Setup and Variables
   =============================== */
const loader = new GLTFLoader();
let currentPlanet = 'earth'; // Start on Earth
let currentPlanetModel = null;

const planets = [
  { name: 'earth', distance: 0, model: 'sun.glb' }, // Sun model with Earth in it
  { name: 'mars', distance: 22790, model: 'mars.glb' }, // Mars
  { name: 'venus', distance: 10820, model: 'venus.glb' } // Venus
];

/* ===============================
   Load Initial Sun Model (Sun + Earth)
   =============================== */
loader.load('sun.glb', (gltf) => {
  const model = gltf.scene;
  scene.add(model);
  currentPlanetModel = model;

  // Position the camera to look at Earth initially
  camera.position.set(500, 0, 0); // Adjust based on Earth’s position in the model
  camera.lookAt(model.position);
});

/* ===============================
   Load a Planet by Name
   =============================== */
function loadPlanet(planet) {
  const planetInfo = planets.find(p => p.name === planet);

  if (!planetInfo) {
    console.error(`Planet ${planet} not found!`);
    return;
  }

  // Remove the current planet model if it exists
  if (currentPlanetModel) scene.remove(currentPlanetModel);

  // Load the new planet model
  loader.load(planetInfo.model, (gltf) => {
    const model = gltf.scene;
    model.position.set(planetInfo.distance, 0, 0); // Place along the X-axis
    scene.add(model);
    currentPlanetModel = model;

    // Adjust camera to focus on the new planet
    camera.position.set(planetInfo.distance + 500, 0, 0); // Offset to view it properly
    camera.lookAt(model.position);
  });
}

/* ===============================
   Keyboard Controls to Switch Planets
   =============================== */
window.addEventListener('keydown', (event) => {
  const currentIndex = planets.findIndex(p => p.name === currentPlanet);

  if (event.key === 'ArrowUp') {
    // Move to the next planet (further from the Sun)
    const nextIndex = Math.min(currentIndex + 1, planets.length - 1);
    currentPlanet = planets[nextIndex].name;
    loadPlanet(currentPlanet);
  } else if (event.key === 'ArrowDown') {
    // Move to the previous planet (closer to the Sun)
    const prevIndex = Math.max(currentIndex - 1, 0);
    currentPlanet = planets[prevIndex].name;
    loadPlanet(currentPlanet);
  }
});

/* ===============================
   Window Resize Handler
   =============================== */
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

/* ===============================
   Animation Loop
   =============================== */
function animate() {
  requestAnimationFrame(animate);
  controls.update(); // Smooth camera movement
  renderer.render(scene, camera);
}
animate();
