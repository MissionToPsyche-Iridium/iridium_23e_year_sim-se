// planetLoader.js
import { TextureLoader, Mesh, SphereGeometry, MeshBasicMaterial, BackSide } from 'three';
import { PlanetHandler } from './planetHandler.js';

/**
 * loadPlanets
 * 
 * Asynchronously loads all planetary models specified in the planetData array
 * and adds them to the scene. Each planet is represented by a PlanetHandler 
 * instance that handles its model loading, size, and movement. Returns an array 
 * of all loaded PlanetHandler instances.
 * 
 * @param {THREE.Scene} scene - The main 3D scene where the planets will be added.
 * @param {function} onProgress - Callback function to update loading progress.
 * @returns {Promise<Array>} - A promise that resolves with an array of PlanetHandler instances.
 */
export async function loadPlanets(scene, onProgress) {
  console.log("Loading Planets...");
  const planets = [];
  // const planetData = [
  //   { name: "Sun", path: "src/assets/models/sun/sun_only.glb", size: 0.0091, orbitRadius: 0, orbitSpeed: 0, rotationSpeed: 0.009 },
  //   { name: "Mercury", path: "src/assets/models/mercury/mercury.glb", size: 0.07, orbitRadius: 4000, orbitSpeed: 0.24, rotationSpeed: 0.01 },
  //   { name: "Venus", path: "src/assets/models/venus/venus.glb", size: 0.01, orbitRadius: 5500, orbitSpeed: 0.18, rotationSpeed: 0.009 },
  //   { name: "Earth", path: "src/assets/models/earth/earth.glb", size: 0.03, orbitRadius: 7000, orbitSpeed: 0.1, rotationSpeed: 0.05 },
  //   { name: "Mars", path: "src/assets/models/mars/mars.glb", size: 0.05, orbitRadius: 8500, orbitSpeed: 0.08, rotationSpeed: 0.03 },
  //   { name: "Jupiter", path: "src/assets/models/jupiter/jupiter.glb", size: .112, orbitRadius: 10000, orbitSpeed: 0.04, rotationSpeed: 0.2 },
  //   { name: "Saturn", path: "src/assets/models/saturn/saturn.glb", size: 0.005, orbitRadius: 11500, orbitSpeed: 0.03, rotationSpeed: 0.17 },
  //   { name: "Uranus", path: "src/assets/models/uranus/uranus.glb", size: .1, orbitRadius: 13000, orbitSpeed: 0.02, rotationSpeed: 0.1 },
  //   { name: "Neptune", path: "src/assets/models/neptune/neptune.glb", size: .2, orbitRadius: 14500, orbitSpeed: 0.01, rotationSpeed: 0.08 }
  // ];
  const planetData = [
    { name: "Sun", path: "src/assets/models/sun1.glb", size: .5, orbitRadius: 0, orbitSpeed: 0, rotationSpeed: 0.009 },
    { name: "Mercury", path: "src/assets/models/mercury1.glb", size: 5, orbitRadius: 3, orbitSpeed: 0.24, rotationSpeed: 1 },
    { name: "Venus", path: "src/assets/models/venus1.glb", size: 2, orbitRadius: 4, orbitSpeed: 0.18, rotationSpeed: 1 },
    { name: "Earth", path: "src/assets/models/earth1.glb", size: 3, orbitRadius: 5, orbitSpeed: 0.1, rotationSpeed: 1 },
    { name: "Mars", path: "src/assets/models/mars1.glb", size: 2, orbitRadius: 6, orbitSpeed: 0.08, rotationSpeed: 1 },
    { name: "Jupiter", path: "src/assets/models/jupiter1.glb", size: .5, orbitRadius: 7, orbitSpeed: 0.04, rotationSpeed: 1 },
    { name: "Saturn", path: "src/assets/models/saturn1.glb", size: .5, orbitRadius: 8, orbitSpeed: 0.03, rotationSpeed: 1 },
    { name: "Uranus", path: "src/assets/models/uranus1.glb", size: .8, orbitRadius: 9, orbitSpeed: 0.02, rotationSpeed: 1 },
    { name: "Neptune", path: "src/assets/models/neptune1.glb", size: .8, orbitRadius: 10, orbitSpeed: 0.01, rotationSpeed: 1 }
  ];
//   const planetData = [
//     { name: "Sun", path: "src/assets/models/sun1.glb", size: 0.5, orbitRadius: 0, orbitSpeed: 0, rotationSpeed: 0.009, eccentricity: 0, inclination: 0 },
//     { name: "Mercury", path: "src/assets/models/mercury1.glb", size: 5, orbitRadius: 1.935, orbitSpeed: 0.24, rotationSpeed: 1, eccentricity: 0.205, inclination: 7.01 },
//     { name: "Venus", path: "src/assets/models/venus1.glb", size: 2, orbitRadius: 3.615, orbitSpeed: 0.18, rotationSpeed: 1, eccentricity: 0.007, inclination: 3.39 },
//     { name: "Earth", path: "src/assets/models/earth1.glb", size: 3, orbitRadius: 5, orbitSpeed: 0.1, rotationSpeed: 1, eccentricity: 0.017, inclination: 0.00 },
//     { name: "Mars", path: "src/assets/models/mars1.glb", size: 2, orbitRadius: 7.62, orbitSpeed: 0.08, rotationSpeed: 1, eccentricity: 0.093, inclination: 1.85 },
//     { name: "Jupiter", path: "src/assets/models/jupiter1.glb", size: 0.5, orbitRadius: 26.015, orbitSpeed: 0.04, rotationSpeed: 1, eccentricity: 0.049, inclination: 1.30 },
//     { name: "Saturn", path: "src/assets/models/saturn1.glb", size: 0.5, orbitRadius: 38.1485, orbitSpeed: 0.03, rotationSpeed: 1, eccentricity: 0.056, inclination: 2.49 },
//     { name: "Uranus", path: "src/assets/models/uranus1.glb", size: 0.8, orbitRadius: 59.715, orbitSpeed: 0.02, rotationSpeed: 1, eccentricity: 0.046, inclination: 0.77 },
//     { name: "Neptune", path: "src/assets/models/neptune1.glb", size: 0.8, orbitRadius: 75.17, orbitSpeed: 0.01, rotationSpeed: 1, eccentricity: 0.010, inclination: 1.77 }
// ];

  let loaded = 0;
  const totalAssets = planetData.length + 1; // Include background

  // Load the background sphere texture
  const backgroundSphere = await new Promise((resolve, reject) => {
    const loader = new TextureLoader();
    loader.load("src/assets/images/textures/8k_stars_milky_way.jpg", 
      (texture) => {
        const geometry = new SphereGeometry(10000, 16, 16); // Large radius for background
        const material = new MeshBasicMaterial({
          map: texture,
          side: BackSide,  // Render the inside of the sphere
        });
        const sphere = new Mesh(geometry, material);
        scene.add(sphere);  // Add to scene
        loaded++;
        if (onProgress) onProgress((loaded / totalAssets) * 100);
        resolve(sphere); // Resolve with the created background sphere
      },
      undefined,
      (error) => {
        console.error("Failed to load background texture", error);
        reject(error);
      }
    );
  });

  // Load planets (as before)
  for (const data of planetData) {
    try {
      const planet = await new Promise((resolve, reject) => {
        const planetHandler = new PlanetHandler(
          data.name, data.path, data.size, data.orbitRadius, data.orbitSpeed, data.rotationSpeed, scene
        );

        planetHandler.onLoad = () => {
          loaded++;
          if (onProgress) onProgress((loaded / totalAssets) * 100);
          resolve(planetHandler);
        };

        planetHandler.onError = (error) => {
          console.error(`Failed to load planet ${data.name}`, error);
          reject(error);
        };
      });

      planets.push(planet);

    } catch (error) {
      console.error(`Error loading planet ${data.name}:`, error);
    }
  }

  return { planets, backgroundSphere }; // Return both planets and backgroundSphere
}
