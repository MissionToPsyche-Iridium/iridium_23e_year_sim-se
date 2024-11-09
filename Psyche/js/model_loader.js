/**
 * This file handles loading all the 3D models used in the Psyche space simulation.
 * It loads models for Psyche, the Sun, Mercury, Venus and Earth using the GLTFLoader.
 * Each model is loaded with the appropriate scale relative to Earth's size.
 * The models are added to the scene and stored in a models object that gets passed
 * to a callback function once all models are loaded.
 */

// Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// Function to load all 3D models
export function loadModels(scene, callback) {
  const loader = new GLTFLoader();
  const models = {};
  let loadedCount = 0;
  const totalModels = 9;

  // Error handler
  const onError = (error) => {
    console.error('Error loading model:', error);
  };

  // Load Psyche model (226km diameter)
  loader.load(
    './models/psyche/Psyche.glb',
    (gltf) => {
      models.psycheObject = gltf.scene;
      models.psycheObject.scale.set(1, 1, 1); // Scale relative to Earth
      scene.add(models.psycheObject);
      loadedCount++;
      if (loadedCount === totalModels) callback(models);
    },
    undefined,
    onError
  );

  // Load Sun model (1,392,000km diameter)
  loader.load(
    './models/sun/sun_only.glb',
    (gltf) => {
      models.sunObject = gltf.scene;
      models.sunObject.scale.set(0.00011, 0.00011, 0.00011); // Scale relative to Earth
      scene.add(models.sunObject);
      loadedCount++;
      if (loadedCount === totalModels) callback(models);
    },
    undefined,
    onError
  );

  // Load Mercury model (4,879km diameter)
  loader.load(
    './models/mercury/Mercury.glb', 
    (gltf) => {
      models.mercuryObject = gltf.scene;
      models.mercuryObject.scale.set(0.0000038, 0.0000038, 0.0000038); // Scale relative to Earth
      scene.add(models.mercuryObject);
      loadedCount++;
      if (loadedCount === totalModels) callback(models);
    },
    undefined,
    onError
  );

  // Load Venus model (12,104km diameter)
  loader.load(
    './models/venus/Venus.glb',
    (gltf) => {
      models.venusObject = gltf.scene;
      models.venusObject.scale.set(0.00000095, 0.00000095, 0.00000095); // Scale relative to Earth
      scene.add(models.venusObject);
      loadedCount++;
      if (loadedCount === totalModels) callback(models);
    },
    undefined,
    onError
  );

  // Load Earth model (12,742km diameter)
  loader.load(
    './models/earth/Earth.glb',
    (gltf) => {
      models.earthObject = gltf.scene;
      models.earthObject.scale.set(0.005, 0.005, 0.005); // Base scale (1)
      scene.add(models.earthObject);
      loadedCount++;
      if (loadedCount === totalModels) callback(models);
    },
    undefined,
    onError
  );

  // Load Mars model (6,779km diameter)
  loader.load(
    './models/Mars/Mars.glb',
    (gltf) => {
      models.marsObject = gltf.scene;
      models.marsObject.scale.set(0.5, 0.5, 0.5); // Scale relative to Earth
      scene.add(models.marsObject);
      loadedCount++;
      if (loadedCount === totalModels) callback(models);
    },
    undefined,
    onError
  );

  // Load Jupiter model (139,820km diameter)
  loader.load(
    './models/jupiter/jupiter.glb',
    (gltf) => {
      models.jupiterObject = gltf.scene;
      models.jupiterObject.scale.set(1.2, 1.2, 1.2); // Scale relative to Earth
      scene.add(models.jupiterObject);
      loadedCount++;
      if (loadedCount === totalModels) callback(models);
    },
    undefined,
    onError
  );

  // Load Neptune model (49,244km diameter)
  loader.load(
    './models/Neptune/Neptune.glb',
    (gltf) => {
      models.neptuneObject = gltf.scene;
      models.neptuneObject.scale.set(.0001, .0001, .0001); // Scale relative to Earth  ~ 4x larger than earth
      scene.add(models.neptuneObject);
      loadedCount++;
      if (loadedCount === totalModels) callback(models);
    },
    undefined,
    onError
  );
}
