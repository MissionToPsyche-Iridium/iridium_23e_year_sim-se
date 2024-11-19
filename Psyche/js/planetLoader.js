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
    { name: "Sun", path: "resources/models/sun1.glb", size: .5, orbitRadius: 0, orbitSpeed: 0, rotationSpeed: 0.009 },
    { name: "Mercury", path: "resources/models/mercury1.glb", size: 5, orbitRadius: 3, orbitSpeed: 0.24, rotationSpeed: 1 },
    { name: "Venus", path: "resources/models/venus1.glb", size: 2, orbitRadius: 4, orbitSpeed: 0.18, rotationSpeed: 1 },
    { name: "Earth", path: "resources/models/earth1.glb", size: 3, orbitRadius: 5, orbitSpeed: 0.1, rotationSpeed: 1 },
    { name: "Mars", path: "resources/models/mars1.glb", size: 2, orbitRadius: 6, orbitSpeed: 0.08, rotationSpeed: 1 },
    { name: "Jupiter", path: "resources/models/jupiter1.glb", size: .5, orbitRadius: 7, orbitSpeed: 0.04, rotationSpeed: 1 },
    { name: "Saturn", path: "resources/models/saturn1.glb", size: .5, orbitRadius: 8, orbitSpeed: 0.03, rotationSpeed: 1 },
    { name: "Uranus", path: "resources/models/uranus1.glb", size: .8, orbitRadius: 9, orbitSpeed: 0.02, rotationSpeed: 1 },
    { name: "Neptune", path: "resources/models/neptune1.glb", size: .8, orbitRadius: 10, orbitSpeed: 0.01, rotationSpeed: 1 }
  ];

  let loaded = 0;
  const totalAssets = planetData.length;

  // Load planets
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

  return planets; // Return only the planets array
}
