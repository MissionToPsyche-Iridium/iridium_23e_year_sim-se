import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

/**
 * Scene and Renderer Setup
 * 
 * Initializes the primary 3D container, scene, camera, and renderer.
 * Configures the renderer with antialiasing and depth buffering.
 */
const container = document.getElementById('gravity-canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.01, 20000);
const renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);
camera.position.set(0, 1, 5);
camera.lookAt(0, 0, 0);

/**
 * Lighting Setup
 * 
 * Adds ambient lighting to illuminate the scene globally.
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);
scene.background = new THREE.Color(0xffffff);

/**
 * Orbit Controls Setup
 * 
 * Configures camera orbit controls with damping for smooth interaction.
 */
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.update();

/**
 * Event listener for window resize and resize function
 */
window.addEventListener("resize", onWindowResize);
function onWindowResize() {
  const width = container.clientWidth;
  const height = container.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
}

/**
 * Loading screen 
 */
const loadingScreen = document.getElementById('loadingScreen');
const progressBar = document.getElementById('progress-bar');
function updateProgressBar(progress) {
  progressBar.style.width = progress + '%';
  progressBar.style.background = `linear-gradient(to right, purple, yellow ${progress}%)`;
}

/**
 * model loading
 */
// const loader = new GLTFLoader();
// loader.load(
//   'models/AstronautOriginalScale.glb',
//   (gltf) => {
//     const model = gltf.scene;
//     scene.add(model);
//     model.scale.set(1, 1, 1);
//     model.position.set(0, 0, 0);
//   },
//   (xhr) => {
//     console.log(`Loading: ${(xhr.loaded / xhr.total) * 100}% completed`);
//   },
//   (error) => {
//     console.error('An error occurred while loading the model:', error);
//   }
// );

const geometry = new THREE.SphereGeometry(0.5, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const redSphere = new THREE.Mesh(geometry, material);
scene.add(redSphere);
redSphere.position.set(0, 0, 0); 

/**
 * animation loop
 */
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();