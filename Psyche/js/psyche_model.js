/**
 * psyche_model.js
 * 
 * This is the main file that sets up and runs the 3D Psyche asteroid simulation.
 * It handles:
 * - Setting up the 3D scene, camera, and renderer
 * - Loading the 3D models for Psyche and other space objects
 * - Creating labels that float over the objects
 * - Managing the loading screen and error messages
 * - Starting the animation loop
 * - Adjusting the display when the window is resized
 * - Pausing animation when switching browser tabs
 * 
 * Remaining planets to add:
 * - Saturn
 * - Uranus
 * - Neptune
 */

// Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

import { createStarfield } from './starfield.js';
import { setupScene } from './scene_setup.js';
import { loadModels } from './model_loader.js';
import { setupControls } from './controls.js';
import { setupEventListeners } from './event_listeners.js';
import { createLabel } from './labels.js';
import { orbitalDistances } from './orbits.js';
import { startAnimation } from './animation.js';

// Create a Three.JS Scene
const scene = new THREE.Scene();

// Get the container and create a camera
const container = document.getElementById('container3D');
if (!container) {
    console.error('Could not find container3D element');
    throw new Error('Container element not found');
}

const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 10000);

// Create renderer
const renderer = new THREE.WebGLRenderer({ 
    alpha: true,
    antialias: true
});
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
container.appendChild(renderer.domElement);

// Set initial camera position
camera.position.set(0, 200, 550);
camera.lookAt(0, 0, 0);
camera.name = 'camera';
scene.add(camera);

// Store initial camera position and rotation
const initialCameraPosition = camera.position.clone();
const initialCameraRotation = camera.rotation.clone();

// Setup scene with lights and orbit lines
const { scene: updatedScene, isRotating: sceneIsRotating, currentModel: sceneCurrentModel } = setupScene(scene, orbitalDistances);

// Add starfield
createStarfield(scene);

// Keep track of objects and labels
let psycheObject, sunObject, mercuryObject, venusObject, earthObject, marsObject, jupiterObject, saturnObject, uranusObject, neptuneObject;
let psycheLabel, sunLabel, mercuryLabel, venusLabel, earthLabel, marsLabel, jupiterLabel, saturnLabel, uranusLabel, neptuneLabel;

// Add loading manager to track progress
const loadingManager = new THREE.LoadingManager();
loadingManager.onProgress = function(url, itemsLoaded, itemsTotal) {
    console.log(`Loading file: ${url}. Loaded ${itemsLoaded} of ${itemsTotal} files.`);
    
    // Update loading progress UI
    const progressElement = document.getElementById('loading-progress');
    if (progressElement) {
        const progress = Math.round((itemsLoaded / itemsTotal) * 100);
        progressElement.textContent = `Loading: ${progress}%`;
    }
};
loadingManager.onError = function(url) {
    console.error('Error loading', url);
    // Show error message to user
    const errorElement = document.getElementById('loading-error');
    if (errorElement) {
        errorElement.textContent = `Failed to load resource: ${url}`;
        errorElement.style.display = 'block';
    }
};

// Load all 3D models with error handling
try {
    loadModels(scene, (loadedObjects) => {
        if (!loadedObjects) {
            console.error('No objects were loaded');
            return;
        }

        ({psycheObject, sunObject, mercuryObject, venusObject, earthObject, marsObject, jupiterObject, saturnObject, uranusObject, neptuneObject} = loadedObjects);
        
        // Verify objects were loaded
        if (!psycheObject || !sunObject || !mercuryObject || !venusObject || !earthObject || !marsObject || !jupiterObject || !uranusObject) {
            console.error('Some objects failed to load:', loadedObjects);
            return;
        }
        
        // Create labels after models are loaded
        psycheLabel = createLabel('Psyche');
        sunLabel = createLabel('Sun');
        mercuryLabel = createLabel('Mercury');
        venusLabel = createLabel('Venus');
        earthLabel = createLabel('Earth');
        marsLabel = createLabel('Mars');
        jupiterLabel = createLabel('Jupiter');
        saturnLabel = createLabel('Saturn');
        uranusLabel = createLabel('Uranus');
        neptuneLabel = createLabel('Neptune');

        const sceneObjects = {
            psycheObject,
            sunObject,
            mercuryObject,
            venusObject,
            earthObject,
            marsObject,
            jupiterObject,
            saturnObject,
            uranusObject,
            neptuneObject
        };

        const labels = {
            psycheLabel,
            sunLabel,
            mercuryLabel,
            venusLabel,
            earthLabel,
            marsLabel,
            jupiterLabel,
            saturnLabel,
            uranusLabel,
            neptuneLabel
        };

        // Setup controls
        const controls = setupControls(camera, renderer);

        // Setup event listeners with error handling
        try {
            setupEventListeners(container, camera, renderer, controls);

            // Start animation loop with all required dependencies
            startAnimation(sceneObjects, labels, controls, camera, renderer, scene);
            
            // Hide loading UI when complete
            const loadingElement = document.getElementById('loading');
            if (loadingElement) {
                loadingElement.style.display = 'none';
            }

        } catch (error) {
            console.error('Error setting up event listeners:', error);
        }
    });
} catch (error) {
    console.error('Error in model loading:', error);
    // Show error message to user
    const errorElement = document.getElementById('loading-error');
    if (errorElement) {
        errorElement.textContent = 'Failed to load 3D models';
        errorElement.style.display = 'block';
    }
}

// Handle window resizing
window.addEventListener('resize', () => {
    // Update camera
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    
    // Update renderer
    renderer.setSize(container.clientWidth, container.clientHeight);
    
    // Update pixel ratio on resize
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Handle visibility change to pause/resume animation
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animation when tab is not visible
        renderer.setAnimationLoop(null);
    } else {
        // Resume animation when tab becomes visible
        renderer.setAnimationLoop(() => {
            if (controls) controls.update();
            renderer.render(scene, camera);
        });
    }
});
