/**
 * SceneBuilder.js
 * This script sets up a Three.js scene with lighting, camera, and controls.
 * It loads planets asynchronously, creates orbits, and initiates the animation loop
 * after ensuring all models are fully loaded.
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { initCarousel } from '/public/js/carousel.js';
import { loadPlanets } from './planetLoader.js';
import { CameraController } from './cameraController.js';
import { createOrbit } from './orbitHandler.js';

/**
 * Scene and Renderer Setup
 * Initializes the main 3D container, scene, camera, and renderer.
 */
const container = document.getElementById('container3D');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 2000000);
const renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

/**
 * Lighting Setup
 * Adds ambient lighting to the scene.
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

/**
 * Orbit Controls Setup
 * Initializes camera orbit controls with damping.
 */
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

const clock = new THREE.Clock();

/**
 * Load Planets and Setup Dependencies
 * Loads planets asynchronously, creates orbits, and sets up camera and carousel
 * only after all models are fully loaded.
 */
console.log("starting planet loading...");
loadPlanets(scene)
  .then((planets) => {
    console.table(planets);
    planets.forEach((planet) => createOrbit(planet.orbitRadius, scene));
    CameraController.setup(camera, controls, planets);
    initCarousel(planets);
    animate(planets);
  })
  .catch((error) => {
    console.error("Error loading planets:", error);
  });

/**
 * Animation Loop
 * Updates controls, planet positions, and renders the scene.
 * @param {Array} planetsArray - Array of loaded planet objects for updates.
 */
function animate(planetsArray) {
  requestAnimationFrame(() => animate(planetsArray));
  controls.update();
  const deltaTime = clock.getDelta();
  planetsArray.forEach((planet) => planet.update(0.1, 0.001, deltaTime));
  renderer.render(scene, camera);
}