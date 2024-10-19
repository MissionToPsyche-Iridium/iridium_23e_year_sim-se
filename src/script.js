import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

// Scene setup
const scene = new THREE.Scene();

// Camera setup
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  2000000
);

const cameraCoords = document.getElementById('camera-coords');
function updateCameraCoords() {
  const {x, y, z} = camera.position;
  cameraCoords.innerHTML = `Camera Position: X: ${x.toFixed(2)}, Y: ${y.toFixed(2)}, Z: ${z.toFixed(2)}`;
}

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
controls.enableDamping = true; // Enable smooth camera movement
controls.dampingFactor = 0.05; // How "smooth" the movement is (keep this moderate)
controls.rotateSpeed = 0.5; // Reduce rotation sensitivity (default is 1)
controls.zoomSpeed = 0.3; // Reduce zoom sensitivity (default is 1)
controls.panSpeed = 0.8; // Adjust panning speed (default is 1)

// Enable or disable zoom and pan if needed
controls.enableZoom = true; // Allow zooming
controls.enablePan = true; // Allow panning (moving side-to-side)

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
          emissive: new THREE.Color(0xffffcc), // Soft yellow-white emission
          emissiveIntensity: 1.5, // Initial intensity
          map: child.material.map, // Use the original texture if available
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

// HTML Slider: Adjust emissiveIntensity dynamically
const bloomSlider = document.getElementById('bloom-slider');
bloomSlider.addEventListener('input', (event) => {
  const intensity = parseFloat(event.target.value);
  if (sunMesh) {
    sunMesh.material.emissiveIntensity = intensity; // Update emissive intensity
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
  updateCameraCoords();
}
animate();
