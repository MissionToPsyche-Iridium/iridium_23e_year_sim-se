/**
 * SceneBuilder.js
 * 
 * Sets up a Three.js scene with lighting, camera, and controls.
 * Loads planets asynchronously, creates orbits, and initiates the 
 * animation loop once all models are fully loaded.
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { initCarousel, carouselState } from './carousel.js';
import { loadPlanets } from './planetLoader.js';
import { CameraController } from './cameraController.js';
import { createOrbit,precomputeOrbit, updateOrbitFromPrecomputed } from './orbitHandler.js';
import { initOverlay } from './overlayController.js';

/**
 * Scene and Renderer Setup
 * 
 * Initializes the primary 3D container, scene, camera, and renderer.
 * Configures the renderer with antialiasing and depth buffering.
 */
const container = document.getElementById('container3D');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.01, 20000);
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
 * configure frame rate
 */
let lastTime = 0;
const desiredFPS = 30;
const frameInterval = 1000 / desiredFPS;

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

window.addEventListener("resize", onWindowResize);

initOverlay();

/**
 * 
 */
function onWindowResize() {
  const width = container.clientWidth;
  const height = container.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
}

const loadingScreen = document.getElementById('loadingScreen');
const progressBar = document.getElementById('progress-bar');

function updateProgressBar(progress) {
  progressBar.style.width = progress + '%';
  progressBar.style.background = `linear-gradient(to right, purple, yellow ${progress}%)`;
}

/**
 * Load Planets and Setup Dependencies
 * 
 * Loads planets asynchronously, creates their orbital paths, and sets up 
 * camera and carousel interactions once all models are loaded.
 */
loadPlanets(scene, updateProgressBar)
  .then(({ planets, backgroundSphere }) => {
    planets.forEach((planet) => {
      planet.precomputedOrbit = precomputeOrbit(
        planet.orbitRadius,
        planet.eccentricity,
        planet.inclination
      );
      createOrbit(
        planet.orbitRadius,
        planet.eccentricity,
        planet.inclination,
        scene
      );
    });

    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500); 

    initCarousel(planets);
    CameraController.setup(camera, controls, planets, backgroundSphere);
    
    let lastFrameTime = 0;
    renderer.setAnimationLoop((time) => {
      if (time - lastTime >= frameInterval) {
        lastTime = time;
        console.log(`Frame interval: ${time - lastFrameTime}ms`);
        animate(planets);
      }
    });
  })
  .catch((error) => {
    console.error("Error loading planets:", error);
    loadingScreen.innerHTML = "Failed to load resources";
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
  const currentPlanet = planetsArray[carouselState.currentIndex];
  const deltaTime = clock.getDelta();
  planetsArray.forEach((planet) => {
    if (planet.precomputedOrbit) {
      // Use precomputed orbit for smoother performance
      updateOrbitFromPrecomputed(planet, planet.elapsedTime, planet.orbitSpeed);
      planet.elapsedTime += deltaTime; // Update elapsed time for this planet
    }
    planet.update(planet.rotationSpeed, planet.orbitSpeed, deltaTime);
  });

  if(currentPlanet != 0) {
    // create a camera orbit using the planet object's orbit path and 
    // pre-calculated camera orbit data (add an attribute to the planet class)
    // add a function in orbitController.js to create the camera orbit
  }

  CameraController.moveToPlanet(camera, controls,currentPlanet);
  // CameraController.updateTarget(controls);
  // controls.update();
  renderer.render(scene, camera);
}


