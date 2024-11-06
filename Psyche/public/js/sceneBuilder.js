import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { initCarousel } from '/public/js/carousel.js';
import { loadPlanets } from './planetLoader.js';
import { CameraController } from './cameraController.js';
import { createOrbit } from './orbitHandler.js';

// Scene and Renderer setup
const container = document.getElementById('container3D');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 2000000);
const renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Load Planets
const planets = loadPlanets(scene);
planets.forEach(planet => createOrbit(planet.orbitRadius, scene)); // Add orbits

function promiseLoadPlanets(scene) {
  const promises = 
}


// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    planets.forEach(planet => planet.update(0.1, 0.001, clock.getDelta())); // Adjust speeds as needed
    renderer.render(scene, camera);
}

// Camera control
CameraController.setup(camera, controls, planets);
initCarousel(); 
animate();
