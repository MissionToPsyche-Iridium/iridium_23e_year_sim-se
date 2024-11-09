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
 * @returns {Promise<Array>} - A promise that resolves with an array of PlanetHandler instances.
 */
export async function loadPlanets(scene) {

  const planets = [];
  const planetData = [
    { name: "Sun", path: "/models/sun/sun_only.glb", size: 0.091, orbitRadius: 0, orbitSpeed: 0, rotationSpeed: 0.009 },
    { name: "Mercury", path: "/models/mercury/mercury.glb", size: 0.038, orbitRadius: 40000, orbitSpeed: 0.24, rotationSpeed: 0.01 },
    { name: "Venus", path: "/models/venus/venus.glb", size: 0.095, orbitRadius: 55000, orbitSpeed: 0.18, rotationSpeed: 0.009 },
    { name: "Earth", path: "/models/earth/earth.glb", size: 0.1, orbitRadius: 70000, orbitSpeed: 0.1, rotationSpeed: 0.05 },
    { name: "Mars", path: "/models/mars/mars.glb", size: 0.053, orbitRadius: 85000, orbitSpeed: 0.08, rotationSpeed: 0.03 },
    { name: "Jupiter", path: "/models/jupiter/jupiter.glb", size: 1.12, orbitRadius: 200000, orbitSpeed: 0.04, rotationSpeed: 0.2 },
    { name: "Saturn", path: "/models/saturn/saturn.glb", size: 0.95, orbitRadius: 300000, orbitSpeed: 0.03, rotationSpeed: 0.17 },
    { name: "Uranus", path: "/models/uranus/uranus.glb", size: 0.4, orbitRadius: 400000, orbitSpeed: 0.02, rotationSpeed: 0.1 },
    { name: "Neptune", path: "/models/neptune/neptune.glb", size: 0.39, orbitRadius: 500000, orbitSpeed: 0.01, rotationSpeed: 0.08 }
  ];
  

  // console.log("Iterating over planet data...");

  const loadPromises = planetData.map((data) => {
    return new Promise((resolve, reject) => {
      const planet = new PlanetHandler(
        data.name,
        data.path,
        data.size,
        data.orbitRadius,
        data.orbitSpeed,
        data.rotationSpeed,
        scene
      );

      // console.log("planet: " + planet.name);

      planet.onLoad = () => {
        planets.push(planet);
        console.log(`Planet loaded and added: ${planet.name}`);
        resolve(planet);
      };

      planet.onError = (error) => {
        // console.error(`Failed to load planet ${data.name}`, error);
        reject(error);
      };
    });
  });

  await Promise.all(loadPromises);
  return planets;
}



