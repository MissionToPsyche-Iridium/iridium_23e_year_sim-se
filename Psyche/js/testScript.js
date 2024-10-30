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
const scaleFactor = .1;
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

// Function to load a model as a promise
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

// Load both models simultaneously
Promise.all([
  loadModel('/models/sun/sun_only.glb', [0, 0, 0]), // Sun at origin
  loadModel('/models/earth/earth_only.glb', [60000, 0, 0]), // Earth on the X-axis
])
  .then(() => console.log('Both models loaded.'))
  .catch((error) => console.error('Error loading models:', error));

// Move the camera to a good viewing position near Earth
const earthPosition = new THREE.Vector3(...earth_.position); // Earth's position
camera.position.set(earthPosition.x + 500, earthPosition.y + 100, earthPosition.z + 300); // Offset to view Earth clearly
camera.lookAt(earthPosition); // Make the camera look at Earth
controls.update(); // Ensure the controls update with the new camera position

// const planets = [
//   { name: 'sun', distance: 0, model: '/models/sun/sun_only.glb' }, // Sun with Earth
//   { name: 'earth', distance: 22790, model: '/models/earth/earth_only.glb' }, // earth
//   { name: 'venus', distance: 10820, model: '/models/planets/venus.glb' } // Venus
// ];


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
