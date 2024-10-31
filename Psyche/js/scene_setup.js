// This file creates the basic 3D environment where our space objects will live.
// It sets up the lighting and draws the paths that planets follow around the Sun.

// We use THREE.js, which is a library that helps us create 3D graphics in web browsers
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

// This function sets up our 3D space with lights and orbit paths for planets
export function setupScene(scene, orbitalDistances) {
  // Add a soft light that brightens everything up a bit, like scattered starlight
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  // Add a bright light coming from one direction, like sunlight
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(10, 10, 10);
  scene.add(directionalLight);

  // Create a gray, see-through material for drawing the paths planets follow
  const orbitMaterial = new THREE.LineBasicMaterial({ color: 0x808080, transparent: true, opacity: 0.5 });

  // Set how much each planet's orbit is tilted compared to a flat plane
  const orbitalInclinations = {
    mercury: 7 * Math.PI / 180,  // Mercury tilts 7 degrees
    venus: 3.4 * Math.PI / 180,  // Venus tilts 3.4 degrees
    earth: 23.5 * Math.PI / 180, // Earth tilts 23.5 degrees
    psyche: 3 * Math.PI / 180    // Psyche tilts about 3 degrees
  };

  // Draw circular paths for each planet and asteroid
  const orbits = {};
  Object.entries(orbitalDistances).forEach(([planet, distance]) => {
    // Create points that will form a circle for the orbit
    const orbitGeometry = new THREE.BufferGeometry();
    const points = [];
    const segments = 128; // More segments = smoother circle
    const inclination = orbitalInclinations[planet];

    // Calculate many points around a circle to create the orbit path
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      points.push(
        distance * Math.cos(theta),
        distance * Math.sin(theta) * Math.sin(inclination),
        distance * Math.sin(theta) * Math.cos(inclination)
      );
    }

    // Create the actual orbit line and add it to our 3D space
    orbitGeometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    const orbit = new THREE.Line(orbitGeometry, orbitMaterial);
    orbits[planet + 'Orbit'] = orbit;
    scene.add(orbit);
  });


  return scene;
}
