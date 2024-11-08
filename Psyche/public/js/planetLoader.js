import { PlanetHandler } from './planetHandler.js';

export async function loadPlanets(scene) {

  const planets = [];
  const planetData = [
    { name: "Sun", path: "/models/sun/sun_only.glb", size: 0.091, orbitRadius: 0, orbitSpeed: 0, rotationSpeed: 0 }, // Stationary Sun
    { name: "Mercury", path: "/models/mercury/mercury.glb", size: 0.038, orbitRadius: 40000, orbitSpeed: 0.24, rotationSpeed: 0.0003 }, // Very slow rotation
    { name: "Venus", path: "/models/venus/venus.glb", size: 0.095, orbitRadius: 55000, orbitSpeed: 0.18, rotationSpeed: 0.0001 }, // Rotates slowly and retrograde
    { name: "Earth", path: "/models/earth/earth.glb", size: 0.1, orbitRadius: 70000, orbitSpeed: 0.1, rotationSpeed: 0.05 },
    { name: "Mars", path: "/models/mars/mars.glb", size: 0.053, orbitRadius: 85000, orbitSpeed: 0.08, rotationSpeed: 0.03 }
  ];
  
  

  console.log("Iterating over planet data...");
  
  const loadPromises = planetData.map((data) => {
    return new Promise((resolve, reject) => {
      const planet = new PlanetHandler(data.name, data.path, data.size, data.orbitRadius, data.orbitSpeed, data.rotationSpeed, scene);
      console.log("planet: " + planet.name);
      planet.onLoad = () => {
        planets.push(planet);
        console.log(`Planet loaded and added: ${planet.name}`);
        resolve(planet);
      };

      planet.onError = (error) => {
        console.error(`Failed to load planet ${data.name}`, error);
        reject(error);
      };
    });
  });
  
  await Promise.all(loadPromises);
  return planets;
}
