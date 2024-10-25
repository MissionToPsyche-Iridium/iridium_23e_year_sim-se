/* ============================================================
   ADMINISTRATIVE HEADER
   ============================================================
   Project Name   : Sprint2 User Story 169
   Module         : Three.js Scene Setup with Bloom Effect
   Author         : Joshua Anselm
   Created Date   : 10/18/2024
   Last Modified  : 10/21/2024
   Reviewed By    : [Reviewer Name]
   Description    : 
   This module initializes and manages a 3D scene using Three.js. 
   It sets up the camera, renderer, lights, post-processing effects 
   (including bloom), and controls. The scene includes a GLB model 
   loaded via the GLTFLoader, with interactive elements such as a slider 
   for controlling the bloom intensity. Additionally, it updates the 
   camera coordinates in real-time.

   Usage Instructions:
   1. Ensure the required Three.js library and related modules are installed.
   2. Place the GLB model (ImgTextureSun.glb) in the appropriate directory.
   3. Include the corresponding HTML elements (e.g., a slider) for full functionality.

   Dependencies:
   - Three.js
   - GLTFLoader.js
   - OrbitControls.js
   - EffectComposer.js
   - RenderPass.js
   - UnrealBloomPass.js

   Notes:
   - Adjust bloom parameters for desired visual output.
   - Ensure the GLB model is available at the specified path.

   ============================================================
*/

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { updateCameraCoords } from './ui.js'; 

/* ===============================
   Scene Initialization
   ===============================
   Sets up the main scene, camera, and renderer. The scene forms the 
   backbone for all 3D content, and the renderer displays the visuals 
   on the browser window.
*/
const scene = new THREE.Scene();
const bloomSlider = document.getElementById('bloom-slider');
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000000);
camera.position.set(10421.55, -107.59, 57.18);
camera.lookAt(0, 0, 0);
const renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

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

/* ===============================
   Lighting Configuration
   ===============================
   Adds ambient and directional lights to the scene to illuminate the 3D 
   objects. The directional light simulates sunlight with a configurable 
   position and intensity.
*/
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(50000, 50000, 50000);
scene.add(directionalLight);

/* ===============================
   Post-Processing Bloom Setup
   ===============================
   Configures the EffectComposer for advanced post-processing. The bloom 
   effect adds a glowing effect to bright parts of the scene for enhanced visuals.
*/
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
composer.addPass(bloomPass);

let sunMesh = null;

/* ===============================
   GLB Model Loading
   ===============================
   Loads a 3D GLB model using the GLTFLoader. The model is traversed to 
   locate a specific "Sun" mesh, which is assigned custom material properties.
*/
const loader = new GLTFLoader();
loader.load('/ImgTextureSun.glb', (gltf) => {
  const model = gltf.scene;
  console.log('Loaded model:', model);
  model.traverse((child) => {
    if (child.isMesh && child.name.toLowerCase().includes('sun')) {
      sunMesh = child;
      child.material = new THREE.MeshStandardMaterial({
        emissive: new THREE.Color(0xffffcc),
        emissiveIntensity: 1.5,
        map: child.material.map,
        roughness: 0.5,
      });
    }
  });
  scene.add(model);
}, undefined, (error) => {
  console.error('Error loading model:', error);
});

/* ===============================
   Bloom Intensity Control
   ===============================
   Adjusts the emissive intensity of the Sun mesh based on the slider input.
   Ensures the mesh is loaded before applying intensity changes.
*/
bloomSlider.addEventListener('input', (event) => {
  const intensity = parseFloat(event.target.value);
  if (sunMesh) {
    sunMesh.material.emissiveIntensity = intensity;
  }
});

/* ===============================
   Window Resize Handler
   ===============================
   Ensures the camera and renderer respond to browser window resizing.
   Updates the camera's aspect ratio and projection matrix.
*/
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

/* ===============================
   Animation Loop
   ===============================
   Continuously renders the scene, updates the controls, and applies post-processing.
   The loop ensures smooth interaction and visual updates in real-time.
*/
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  composer.render();
  updateCameraCoords(camera);
}
animate();

