import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

// Get the container
const container = document.getElementById('container3D');

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  container.clientWidth / container.clientHeight,
  0.1,
  100000
);
camera.position.set(0, 0, 10000); // Adjust to view the large model properly

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

/* ===============================
   Camera Controls Setup
   ===============================
   Initializes orbit controls for smooth camera movement and interaction.
   Damping, rotation, zoom, and pan speeds are configured here.
*/
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.rotateSpeed = 0.5;
controls.zoomSpeed = 0.3;
controls.panSpeed = 0.8;
controls.enableZoom = true;
controls.enablePan = true;


// Load the GLB model
const loader = new GLTFLoader();
loader.load(
  'models/earth/earth_only.glb', // Replace with your model path
  (gltf) => {
    const sunModel = gltf.scene;
    sunModel.scale.set(0.1, 0.0, 0.1); // Adjust scale if needed
    scene.add(sunModel);
    console.log('Model loaded successfully.');
  },
  undefined, // Optional: Handle progress
  (error) => console.error('Error loading model:', error)
);



// Animation loop to render the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
