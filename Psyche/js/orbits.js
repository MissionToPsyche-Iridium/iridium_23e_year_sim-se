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
  psyche: 400   
};

// Orbital periods in Earth days
export const orbitalPeriods = {
  mercury: 88,
  venus: 225,
  earth: 365,
  psyche: 1825
};

// Initial orbital angles
export const orbitalAngles = {
  mercury: 0,
  venus: Math.PI / 3,
  earth: Math.PI / 2,
  psyche: Math.PI / 1.5
};

// Orbital inclinations in radians
const orbitalInclinations = {
  mercury: 7 * Math.PI / 180,  // 7 degrees
  venus: 3.4 * Math.PI / 180,  // 3.4 degrees
  earth: 23.5 * Math.PI / 180, // 23.5 degrees
  psyche: 3 * Math.PI / 180    // ~3 degrees
};

// Axial rotation periods in Earth days
const rotationPeriods = {
  mercury: 58.6,
  venus: -243, // Negative for retrograde rotation
  earth: 1,
  psyche: 0.2739 // ~4.196 hours
};

// Function to update orbital positions and paths
export function updateOrbits(objects, deltaTime) {
  if (!objects) return;

  // Update angles based on orbital periods (slowed down for better visualization)
  orbitalAngles.mercury += (2 * Math.PI * deltaTime) / (orbitalPeriods.mercury * 2000);
  orbitalAngles.venus += (2 * Math.PI * deltaTime) / (orbitalPeriods.venus * 2000);
  orbitalAngles.earth += (2 * Math.PI * deltaTime) / (orbitalPeriods.earth * 2000);
  orbitalAngles.psyche += (2 * Math.PI * deltaTime) / (orbitalPeriods.psyche * 2000);

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

  // Keep sun at center with rotation
  if (objects.sunObject) {
    objects.sunObject.position.set(0, 0, 0);
    // Sun rotates every 27 Earth days
    objects.sunObject.rotation.y += (2 * Math.PI * deltaTime) / (27 * 2000);
  }
}
