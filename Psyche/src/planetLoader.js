// planetLoader.js
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
  const planetData = [
    { name: "Sun", path: "src/assets/models/sun/sun_only.glb", size: 0.091, orbitRadius: 0, orbitSpeed: 0, rotationSpeed: 0.009 },
    { name: "Mercury", path: "src/assets/models/mercury/mercury.glb", size: 0.7, orbitRadius: 40000, orbitSpeed: 0.24, rotationSpeed: 0.01 },
    { name: "Venus", path: "src/assets/models/venus/venus.glb", size: 0.1, orbitRadius: 55000, orbitSpeed: 0.18, rotationSpeed: 0.009 },
    { name: "Earth", path: "src/assets/models/earth/earth.glb", size: 0.3, orbitRadius: 70000, orbitSpeed: 0.1, rotationSpeed: 0.05 },
    { name: "Mars", path: "src/assets/models/mars/mars.glb", size: 0.5, orbitRadius: 85000, orbitSpeed: 0.08, rotationSpeed: 0.03 },
    { name: "Jupiter", path: "src/assets/models/jupiter/jupiter.glb", size: 1.12, orbitRadius: 100000, orbitSpeed: 0.04, rotationSpeed: 0.2 },
    { name: "Saturn", path: "src/assets/models/saturn/saturn.glb", size: 0.05, orbitRadius: 115000, orbitSpeed: 0.03, rotationSpeed: 0.17 },
    { name: "Uranus", path: "src/assets/models/uranus/uranus.glb", size: 1, orbitRadius: 130000, orbitSpeed: 0.02, rotationSpeed: 0.1 },
    { name: "Neptune", path: "src/assets/models/neptune/neptune.glb", size: 2, orbitRadius: 145000, orbitSpeed: 0.01, rotationSpeed: 0.08 }
  ];

  let loaded = 0;

  for (const data of planetData) {
    try {
      const planet = await new Promise((resolve, reject) => {
        const planetHandler = new PlanetHandler(
          data.name,
          data.path,
          data.size,
          data.orbitRadius,
          data.orbitSpeed,
          data.rotationSpeed,
          scene
        );

        planetHandler.onLoad = () => {
          console.log(`Planet loaded and added: ${planetHandler.name}`);
          resolve(planetHandler);

          // Update the loaded count and progress
          loaded++;
          const progress = (loaded / planetData.length) * 100;

          // Call the onProgress callback to update the progress bar
          if (onProgress) onProgress(progress);
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

  return planets;
}
