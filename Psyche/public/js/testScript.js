import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { initCarousel } from '/public/js/carousel.js';

/* ===============================
   Scene Setup
   Initializes the Three.js scene, camera, and renderer, attaches renderer 
   to DOM, and sets up scene scale factor.
   =============================== */
const container = document.getElementById('container3D');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 2000000);

const renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

const scaleFactor = 0.1;

/* ===============================
   Camera Controls Setup
   Configures interactive orbit controls for the camera with damping.
   =============================== */
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

/* 
 * updateCameraCoords
 * Updates and displays the camera's current coordinates on the UI.
 *
 * Parameters: None
 * Returns: None
 */
function updateCameraCoords() {
  document.getElementById('coord-x').textContent = camera.position.x.toFixed(2);
  document.getElementById('coord-y').textContent = camera.position.y.toFixed(2);
  document.getElementById('coord-z').textContent = camera.position.z.toFixed(2);
}

/* ===============================
   Lighting Setup
   Adds ambient lighting to illuminate the scene.
   =============================== */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

/* ===============================
   GLTFLoader Setup and Variables
   Sets up the GLTF model loader and loadModel function to load models as promises.
   =============================== */
const loader = new GLTFLoader();

/* 
 * loadModel
 * Loads a 3D model from a given URL, scales and positions it, and adds it to the scene.
 *
 * Parameters:
 *   url (string) - The path to the model file.
 *   position (array) - The [x, y, z] position to place the model in the scene.
 *
 * Returns:
 *   Promise - Resolves to the loaded model.
 */
function loadModel(url, position) {
  return new Promise((resolve, reject) => {
    loader.load(
      url,
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(scaleFactor, scaleFactor, scaleFactor);
        model.position.set(...position);
        scene.add(model);
        console.log(`${url} loaded.`);
        resolve(model);
      },
      undefined,
      (error) => reject(error)
    );
  });
}

let earth_only = null;
let sun_only = null;
let currentPlanet = null;

/* ===============================
   Model Loading and Initial Camera Position
   Loads the sun and earth models, sets initial camera position relative to Earth, 
   and updates the current planet.
   =============================== */
Promise.all([
  loadModel('/models/sun/sun_only.glb', [0, 0, 0]),
  loadModel('/models/earth/earth_only.glb', [60000, 0, 0])
])
  .then(([sun, earth]) => {
    console.log('Both models loaded.');

    earth_only = earth;
    sun_only = sun;

    const earthPosition = new THREE.Vector3(...earth_only.position);
    camera.position.set(earthPosition.x + 500, earthPosition.y + 100, earthPosition.z + 300);
    camera.lookAt(earthPosition);
    controls.update();
    currentPlanet = earth;
  })
  .catch((error) => console.error('Error loading models:', error));

const planets = [
  { name: 'sun', distance: 0, model: '/models/sun/sun_only.glb' },
  { name: 'earth', distance: 22790, model: '/models/earth/earth_only.glb' }
];

/* ===============================
   Keyboard Controls to Switch Planets
   Enables navigation between planets using arrow keys, updating the current planet.
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
   Adjusts the camera and renderer settings when the window is resized.
   =============================== */
window.addEventListener('resize', () => {
  const width = container.clientWidth;
  const height = container.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
});

/* ===============================
   Nav Active Resize Handler
   Adjusts the camera and renderer settings when the navigation menu is active
   =============================== */
document.addEventListener('navToggle', toggleNav);
function toggleNav() {
  if(document.body.classList.contains('nav-active')) {
    container.style.transform = 'translateX(-20vw)';
  } else {
    container.style.transform = 'translateX(0)';
  }
  resizeRenderer();
}

function resizeRenderer() {
  renderer.setSize(container.clientWidth, container.clientHeight);
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
}

/* 
 * animate
 * The main animation loop that continuously renders the scene, updates 
 * controls, and refreshes camera coordinates on the UI.
 *
 * Parameters: None
 * Returns: None
 */
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  updateCameraCoords();
  renderer.render(scene, camera);
}
initCarousel(); 
animate();
