/**
 * SceneBuilder.js
 * 
 * Sets up a Three.js scene with lighting, camera, and controls.
 * Loads planets asynchronously, creates orbits, and initiates the 
 * animation loop once all models are fully loaded.
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { initCarousel } from '/public/js/carousel.js';
import { loadPlanets } from './planetLoader.js';
import { CameraController } from './cameraController.js';
import { createOrbit } from './orbitHandler.js';
import { carouselState } from './carousel.js';

/**
 * Scene and Renderer Setup
 * 
 * Initializes the primary 3D container, scene, camera, and renderer.
 * Configures the renderer with antialiasing and depth buffering.
 */
const container = document.getElementById('container3D');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 1, 2000000);
const renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

/**
 * Lighting Setup
 * 
 * Adds ambient lighting to illuminate the scene globally.
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

/**
 * Orbit Controls Setup
 * 
 * Configures camera orbit controls with damping for smooth interaction.
 */
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

const clock = new THREE.Clock();

export { camera, controls };

/**
 * Load Planets and Setup Dependencies
 * 
 * Loads planets asynchronously, creates their orbital paths, and sets up 
 * camera and carousel interactions once all models are loaded.
 */
loadPlanets(scene)
  .then((planets) => {
    console.table(planets);
    planets.forEach((planet) => {
      const position = new THREE.Vector3();
      planet.model.getWorldPosition(position);
      console.log(`World position of ${planet.name}:`, position);
      
      createOrbit(planet.orbitRadius, scene);
    });
    CameraController.setup(camera, controls, planets);

    console.log("Planets ready for carousel:", planets.map(p => p.name));

    initCarousel(planets);
    animate(planets);
  })
  .catch((error) => {
    console.error("Error loading planets:", error);
  });

/**
 * Animation Loop
 * 
 * Runs the main animation loop, updating controls, planet positions, 
 * and rendering the scene at each frame.
 * 
 * @param {Array} planetsArray - Array of loaded planet objects for updates.
 */
function animate(planetsArray) {
  requestAnimationFrame(() => animate(planetsArray));
  controls.update();

  const deltaTime = clock.getDelta();
  planetsArray.forEach((planet) => planet.update(planet.rotationSpeed, planet.orbitSpeed, deltaTime));

  renderer.render(scene, camera);
}
