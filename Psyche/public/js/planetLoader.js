import { PlanetHandler } from './planetHandler.js';

export async function loadPlanets(scene) {

  const planets = [];
  const planetData = [
    { name: "Sun", path: "/models/sun/sun_only.glb", size: 1, orbitRadius: 0 },
    { name: "Earth", path: "/models/earth/earth_only.glb", size: 0.53, orbitRadius: 60000 }
  ];
  console.log("Iterating over planet data...");
  const loadPromises = planetData.map((data) => {
    return new Promise((resolve, reject) => {
      const planet = new PlanetHandler(data.name, data.path, data.size, data.orbitRadius, scene);
      console.log("planet: " + planet.name);
      planet.onLoad = () => {
        planets.push(planet);
        console.log(`Planet loaded and added: ${planet.name}`);
        resolve();
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

/*
Original loadPlanets function, synchronous without promise
export function loadPlanets(scene) {
  const planets = [];
  planets.push(new PlanetHandler("Sun", "/models/sun/sun_only.glb", 1, 0, scene));
  planets.push(new PlanetHandler("Earth", "/models/earth/earth_only.glb", 0.53, 60000, scene));
  return planets;
}
*/