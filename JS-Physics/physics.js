import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

/**
 * Scene and Renderer Setup
 * 
 * Initializes the primary 3D container, scene, camera, and renderer.
 * Configures the renderer with antialiasing and depth buffering.
 */
const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.01, 20000);
const renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);
camera.position.set(0, 8, 15);
camera.lookAt(0, 0, 0);

/**
 * Lighting Setup
 * 
 * Adds ambient lighting to illuminate the scene globally.
 */
// Ambient Light
const ambientLight = new THREE.AmbientLight(0xffffff, 5);
scene.add(ambientLight);

// Directional Light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(10, 10, 10);
camera.add(directionalLight);
scene.add(camera);
// scene.background = new THREE.Color(0xffffff);

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
const loader = new GLTFLoader();
loader.load('models/AstronautRoughScale.glb', (gltfAstronaut) => {
  const astronaut = gltfAstronaut.scene;
  scene.add(astronaut);
  astronaut.scale.set(1, 1, 1);
  const astronautBox = new THREE.Box3().setFromObject(astronaut);
  const astronautHelper = new THREE.Box3Helper(astronautBox, 0xff0000);
  scene.add(astronautHelper);

  loader.load('models/16psyche_boxFix.glb', (gltfBase) => {
    const baseModel = gltfBase.scene;
    scene.add(baseModel);
    baseModel.scale.set(20, 20, 20);
    const baseBox = new THREE.Box3().setFromObject(baseModel);
    const baseHelper = new THREE.Box3Helper(baseBox, 0x00ff00);
    scene.add(baseHelper);
    baseModel.position.set(0, -baseBox.max.y, 0);
    baseBox.setFromObject(baseModel);
    const adjustedAstronautY = baseBox.max.y - astronautBox.min.y + 0.001;
    astronaut.position.set(0, adjustedAstronautY, 0);
    astronautBox.setFromObject(astronaut);
    astronautHelper.box = astronautBox;
  });
});

/**
 *  Add a background
 */
const textureLoader = new THREE.TextureLoader();
textureLoader.load('/img/textures/8k_stars_milky_way.jpg', (texture) => {
  const geometry = new THREE.SphereGeometry(5000, 64, 64); // Larger sphere
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.BackSide,
  });
  const backgroundSphere = new THREE.Mesh(geometry, material);
  scene.add(backgroundSphere);
});



/**
 * animation loop
 */
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();