/**
 * orbits.js
 * 
 * This file handles the orbital mechanics and body movements for the Psyche simulation.
 * It manages:
 * - Orbital distances, periods, and angles
 * - Axial rotation rates and orbital inclinations
 * - Real-time position updates for objects in orbit
 * - Dynamic orbit path visualization
 * - Scaling and timing of orbital motions (needs tweaking)
 * 
 * We simplified the orbital paths and speeds to make them easier to see, while keeping
 * the relative sizes and speeds between objects accurate compared to each other.
 */

// Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

// Orbital parameters - adjusted distances for better visibility
export const orbitalDistances = {
  mercury: 150,
  venus: 250,   
  earth: 325,
  mars: 450,
  jupiter: 600,   
  psyche: 400,
  uranus: 800
};

// Orbital periods in Earth days
const orbitalPeriods = {
  mercury: 88,
  venus: 225,
  earth: 365,
  mars: 687,
  jupiter: 4333,
  psyche: 1825,
  uranus: 30687
};

// Initial orbital angles
const orbitalAngles = {
  mercury: 0,
  venus: Math.PI / 3,
  earth: Math.PI / 2,
  mars: Math.PI / 4,
  jupiter: Math.PI / 6,
  psyche: Math.PI / 1.5,
  uranus: Math.PI/ 1
};

// Orbital inclinations in radians (relative to ecliptic plane)
const orbitalInclinations = {
  mercury: 7.004 * Math.PI / 180,  // 7.004 degrees
  venus: 3.394 * Math.PI / 180,    // 3.394 degrees
  earth: 0.0 * Math.PI / 180,      // 0.0 degrees (reference plane)
  mars: 1.850 * Math.PI / 180,     // 1.850 degrees
  jupiter: 1.303 * Math.PI / 180,  // 1.303 degrees
  psyche: 3.095 * Math.PI / 180,
  uranus: 0.8 * Math.PI / 180
};

// Axial rotation periods in Earth days
const rotationPeriods = {
  mercury: 58.6,
  venus: -243, // Negative for retrograde rotation
  earth: 1,
  mars: 1.03,
  jupiter: 0.41, // ~9.9 hours
  psyche: 0.2739, // ~4.196 hours
  uranus: 0.71833
};

// Function to update orbital positions and paths
export function updateOrbits(objects, deltaTime) {
  if (!objects) return;

  // Update angles based on orbital periods (slowed down for better visualization)
  orbitalAngles.mercury += (2 * Math.PI * deltaTime) / (orbitalPeriods.mercury * 2000);
  orbitalAngles.venus += (2 * Math.PI * deltaTime) / (orbitalPeriods.venus * 2000);
  orbitalAngles.earth += (2 * Math.PI * deltaTime) / (orbitalPeriods.earth * 2000);
  orbitalAngles.mars += (2 * Math.PI * deltaTime) / (orbitalPeriods.mars * 2000);
  orbitalAngles.jupiter += (2 * Math.PI * deltaTime) / (orbitalPeriods.jupiter * 2000);
  orbitalAngles.psyche += (2 * Math.PI * deltaTime) / (orbitalPeriods.psyche * 2000);
  orbitalAngles.uranus += (2 * Math.PI * deltaTime) / (orbitalPeriods.uranus * 2000);
  

  // Update object positions with orbital inclination and rotation
  if (objects.mercuryObject) {
    // Calculate orbital position
    const angle = orbitalAngles.mercury;
    const distance = orbitalDistances.mercury;
    const inclination = orbitalInclinations.mercury;
    
    // Apply orbital motion with inclination
    objects.mercuryObject.position.x = Math.cos(angle) * distance;
    objects.mercuryObject.position.y = Math.sin(angle) * Math.sin(inclination) * distance;
    objects.mercuryObject.position.z = Math.sin(angle) * Math.cos(inclination) * distance;
    
    // Apply axial rotation
    objects.mercuryObject.rotation.y += (2 * Math.PI * deltaTime) / (rotationPeriods.mercury * 2000);

    // Update orbit path
    if (objects.mercuryOrbit) {
      const points = [];
      const segments = 128;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(
          distance * Math.cos(theta),
          distance * Math.sin(theta) * Math.sin(inclination),
          distance * Math.sin(theta) * Math.cos(inclination)
        );
      }
      objects.mercuryOrbit.geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    }
  }

  if (objects.venusObject) {
    const angle = orbitalAngles.venus;
    const distance = orbitalDistances.venus;
    const inclination = orbitalInclinations.venus;
    
    objects.venusObject.position.x = Math.cos(angle) * distance;
    objects.venusObject.position.y = Math.sin(angle) * Math.sin(inclination) * distance;
    objects.venusObject.position.z = Math.sin(angle) * Math.cos(inclination) * distance;
    
    // Retrograde rotation for Venus
    objects.venusObject.rotation.y -= (2 * Math.PI * deltaTime) / (Math.abs(rotationPeriods.venus) * 2000);

    // Update orbit path
    if (objects.venusOrbit) {
      const points = [];
      const segments = 128;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(
          distance * Math.cos(theta),
          distance * Math.sin(theta) * Math.sin(inclination),
          distance * Math.sin(theta) * Math.cos(inclination)
        );
      }
      objects.venusOrbit.geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    }
  }

  if (objects.earthObject) {
    const angle = orbitalAngles.earth;
    const distance = orbitalDistances.earth;
    const inclination = orbitalInclinations.earth;
    
    objects.earthObject.position.x = Math.cos(angle) * distance;
    objects.earthObject.position.y = Math.sin(angle) * Math.sin(inclination) * distance;
    objects.earthObject.position.z = Math.sin(angle) * Math.cos(inclination) * distance;
    
    objects.earthObject.rotation.y += (2 * Math.PI * deltaTime) / (rotationPeriods.earth * 2000);

    // Update orbit path
    if (objects.earthOrbit) {
      const points = [];
      const segments = 128;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(
          distance * Math.cos(theta),
          distance * Math.sin(theta) * Math.sin(inclination),
          distance * Math.sin(theta) * Math.cos(inclination)
        );
      }
      objects.earthOrbit.geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    }
  }

  if (objects.marsObject) {
    const angle = orbitalAngles.mars;
    const distance = orbitalDistances.mars;
    const inclination = orbitalInclinations.mars;
    
    objects.marsObject.position.x = Math.cos(angle) * distance;
    objects.marsObject.position.y = Math.sin(angle) * Math.sin(inclination) * distance;
    objects.marsObject.position.z = Math.sin(angle) * Math.cos(inclination) * distance;
    
    objects.marsObject.rotation.y += (2 * Math.PI * deltaTime) / (rotationPeriods.mars * 2000);

    // Update orbit path
    if (objects.marsOrbit) {
      const points = [];
      const segments = 128;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(
          distance * Math.cos(theta),
          distance * Math.sin(theta) * Math.sin(inclination),
          distance * Math.sin(theta) * Math.cos(inclination)
        );
      }
      objects.marsOrbit.geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    }
  }

  if (objects.jupiterObject) {
    const angle = orbitalAngles.jupiter;
    const distance = orbitalDistances.jupiter;
    const inclination = orbitalInclinations.jupiter;
    
    objects.jupiterObject.position.x = Math.cos(angle) * distance;
    objects.jupiterObject.position.y = Math.sin(angle) * Math.sin(inclination) * distance;
    objects.jupiterObject.position.z = Math.sin(angle) * Math.cos(inclination) * distance;
    
    objects.jupiterObject.rotation.y += (2 * Math.PI * deltaTime) / (rotationPeriods.jupiter * 2000);

    // Update orbit path
    if (objects.jupiterOrbit) {
      const points = [];
      const segments = 128;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(
          distance * Math.cos(theta),
          distance * Math.sin(theta) * Math.sin(inclination),
          distance * Math.sin(theta) * Math.cos(inclination)
        );
      }
      objects.jupiterOrbit.geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    }
  }

  if (objects.psycheObject) {
    const angle = orbitalAngles.psyche;
    const distance = orbitalDistances.psyche;
    const inclination = orbitalInclinations.psyche;
    
    objects.psycheObject.position.x = Math.cos(angle) * distance;
    objects.psycheObject.position.y = Math.sin(angle) * Math.sin(inclination) * distance;
    objects.psycheObject.position.z = Math.sin(angle) * Math.cos(inclination) * distance;
    
    objects.psycheObject.rotation.y += (2 * Math.PI * deltaTime) / (rotationPeriods.psyche * 20000);

    // Update orbit path
    if (objects.psycheOrbit) {
      const points = [];
      const segments = 128;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(
          distance * Math.cos(theta),
          distance * Math.sin(theta) * Math.sin(inclination),
          distance * Math.sin(theta) * Math.cos(inclination)
        );
      }
      objects.psycheOrbit.geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    }
  }
  if (objects.uranusObject) {
    const angle = orbitalAngles.uranus;
    const distance = orbitalDistances.uranus;
    const inclination = orbitalInclinations.uranus;
    
    objects.uranusObject.position.x = Math.cos(angle) * distance;
    objects.uranusObject.position.y = Math.sin(angle) * Math.sin(inclination) * distance;
    objects.uranusObject.position.z = Math.sin(angle) * Math.cos(inclination) * distance;
    
    objects.uranusObject.rotation.y += (2 * Math.PI * deltaTime) / (rotationPeriods.uranus * 20000);
    // Update orbit path
    if (objects.uranusOrbit) {
      const points = [];
      const segments = 128;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(
          distance * Math.cos(theta),
          distance * Math.sin(theta) * Math.sin(inclination),
          distance * Math.sin(theta) * Math.cos(inclination)
        );
      }
      objects.uranusOrbit.geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    }
  }

  // Keep sun at center with rotation
  if (objects.sunObject) {
    objects.sunObject.position.set(0, 0, 0);
    // Sun rotates every 27 Earth days
    objects.sunObject.rotation.y += (2 * Math.PI * deltaTime) / (27 * 2000);
  }
}
