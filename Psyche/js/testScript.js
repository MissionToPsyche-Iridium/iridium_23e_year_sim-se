import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/* ===============================
   Scene Setup
   =============================== */
const container = document.getElementById('container3D'); // Target container
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 2000000);
camera.position.set(600000, 0, 0); // Adjust based on initial model position

const renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio); // For high-DPI displays
container.appendChild(renderer.domElement); // Attach renderer to the container
const scaleFactor = .9;
;
/* ===============================
   Camera Controls Setup
   =============================== */
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

/* ===============================
   Update Camera Coordinates
   =============================== */
function updateCameraCoords() {
  console.log(document.getElementById('coord-x'));
  document.getElementById('coord-x').textContent = camera.position.x.toFixed(2);
  document.getElementById('coord-y').textContent = camera.position.y.toFixed(2);
  document.getElementById('coord-z').textContent = camera.position.z.toFixed(2);
}

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
  { name: 'earth', distance: 0, model: '/models/sun/sun_only.glb' }, // Sun with Earth
  { name: 'mars', distance: 22790, model: '/models/planets/mars.glb' }, // Mars
  { name: 'venus', distance: 10820, model: '/models/planets/venus.glb' } // Venus
];

/* ===============================
   Load Initial Sun Model (Sun + Earth)
   =============================== */
loader.load(planets[0].model, (gltf) => {
  const model = gltf.scene;
  model.scale.set(scaleFactor, scaleFactor, scaleFactor);
  scene.add(model);
  currentPlanetModel = model;
  camera.lookAt(model.position); // Ensure the camera focuses on the model
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

  if (currentPlanetModel) scene.remove(currentPlanetModel); // Remove existing model

  loader.load(planetInfo.model, (gltf) => {
    const model = gltf.scene;
    model.position.set(planetInfo.distance, 0, 0);
    scene.add(model);
    currentPlanetModel = model;

    camera.position.set(planetInfo.distance + 500, 0, 0); // Adjust camera position
    camera.lookAt(model.position); // Focus on the loaded planet
  });
}

/* ===============================
   Keyboard Controls to Switch Planets
   =============================== */
window.addEventListener('keydown', (event) => {
  const currentIndex = planets.findIndex(p => p.name === currentPlanet);

  if (event.key === 'ArrowUp') {
    const nextIndex = Math.min(currentIndex + 1, planets.length - 1);
    currentPlanet = planets[nextIndex].name;
    loadPlanet(currentPlanet);
  } else if (event.key === 'ArrowDown') {
    const prevIndex = Math.max(currentIndex - 1, 0);
    currentPlanet = planets[prevIndex].name;
    loadPlanet(currentPlanet);
  }
});

/* ===============================
   Window Resize Handler
   =============================== */
window.addEventListener('resize', () => {
  const width = container.clientWidth;
  const height = container.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
});


/* ===============================
   Animation Loop
   =============================== */
function animate() {
  requestAnimationFrame(animate);
  controls.update(); 
  updateCameraCoords(); 
  renderer.render(scene, camera);
}
animate();
