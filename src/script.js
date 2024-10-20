import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { updateCameraCoords } from './ui.js'; // Import from ui.js

// Scene setup
const scene = new THREE.Scene();

const bloomSlider = document.getElementById('bloom-slider');
// Camera setup
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  2000000
);
camera.position.set(10421.55, -107.59, 57.18);
camera.lookAt(0, 0, 0);

// Renderer setup
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  logarithmicDepthBuffer: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// OrbitControls for camera movement
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.rotateSpeed = 0.5;
controls.zoomSpeed = 0.3;
controls.panSpeed = 0.8;
controls.enableZoom = true;
controls.enablePan = true;

// Lighting setup
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(50000, 50000, 50000);
scene.add(directionalLight);

// Bloom setup
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  1.5, // Strength of bloom
  0.4, // Radius
  0.85 // Threshold
);
composer.addPass(bloomPass);

let sunMesh = null;

// Load GLB Model
const loader = new GLTFLoader();
loader.load(
  '/ImgTextureSun.glb',
  (gltf) => {
    const model = gltf.scene;
    console.log('Loaded model:', model);

    // Find and store the Sun mesh
    model.traverse((child) => {
      if (child.isMesh && child.name.toLowerCase().includes('sun')) {
        sunMesh = child;
        child.material = new THREE.MeshStandardMaterial({
          emissive: new THREE.Color(0xffffcc),
          emissiveIntensity: 1.5, // Initial intensity
          map: child.material.map,
          roughness: 0.5,
        });
      }
    });

    scene.add(model);
  },
  undefined,
  (error) => {
    console.error('Error loading model:', error);
  }
);

// Add event listener to the slider to control emissive intensity
bloomSlider.addEventListener('input', (event) => {
  const intensity = parseFloat(event.target.value);
  
  // Ensure sun mesh is loaded before setting emissive intensity
  if (sunMesh) {
    sunMesh.material.emissiveIntensity = intensity;
  }
});

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  composer.render();
  updateCameraCoords(camera); // Update camera coordinates
}
animate();
