import { PlanetHandler } from './planetHandler.js';

export function loadPlanets(scene) {
    const planets = [];
    // planetHandler needs name, path, size, orbitRadius, and scene
    planets.push(new PlanetHandler("Sun", "/models/sun/sun_only.glb", 1, 0, scene));
    planets.push(new PlanetHandler("Earth", "/models/earth/earth_only.glb", 0.53, 60000, scene));
    return planets;
}
