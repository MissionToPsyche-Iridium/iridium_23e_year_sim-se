import { PlanetHandler } from './planetHandler.js';

export async function loadPlanets(scene) {

  const planets = [];
  const planetData = [
    { name: "Sun", path: "/models/sun/sun_only.glb", size: 0.091, orbitRadius: 0, orbitSpeed: 0 }, 
    { name: "Earth", path: "/models/earth/earth.glb", size: 0.1, orbitRadius: 70000, orbitSpeed: 0.1 },
    { name: "Saturn", path: "/models/saturn/saturn.glb", size: 0.1, orbitRadius: 90000, orbitSpeed: 0.3, rotationSpeed: 0.15 } 
  ];

  console.log("Iterating over planet data...");
  
  const loadPromises = planetData.map((data) => {
    return new Promise((resolve, reject) => {
      const planet = new PlanetHandler(data.name, data.path, data.size, data.orbitRadius, data.orbitSpeed, scene);
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
