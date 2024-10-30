// Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

// Function to setup the scene with lights and orbit lines
export function setupScene(scene, orbitalDistances) {
  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  // Add directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(10, 10, 10);
  scene.add(directionalLight);

  // Create orbit lines
  const orbitMaterial = new THREE.LineBasicMaterial({ color: 0x808080, transparent: true, opacity: 0.5 });

  // Create orbit lines with inclination
  const orbits = {};
  const orbitalInclinations = {
    mercury: 7 * Math.PI / 180,  // 7 degrees
    venus: 3.4 * Math.PI / 180,  // 3.4 degrees
    earth: 23.5 * Math.PI / 180, // 23.5 degrees
    psyche: 3 * Math.PI / 180    // ~3 degrees
  };

  // Create inclined orbits for each planet
  Object.entries(orbitalDistances).forEach(([planet, distance]) => {
    const orbitGeometry = new THREE.BufferGeometry();
    const points = [];
    const segments = 128;
    const inclination = orbitalInclinations[planet];

    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      points.push(
        distance * Math.cos(theta),
        distance * Math.sin(theta) * Math.sin(inclination),
        distance * Math.sin(theta) * Math.cos(inclination)
      );
    }

    orbitGeometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    const orbit = new THREE.Line(orbitGeometry, orbitMaterial);
    orbits[planet + 'Orbit'] = orbit;
    scene.add(orbit);
  });

  // Create reference planes
  const planeGeometry = new THREE.PlaneGeometry(1000, 1000);
  const planeMaterial = new THREE.MeshBasicMaterial({ 
    color: 0x808080,
    transparent: true,
    opacity: 0.2,
    side: THREE.DoubleSide
  });

  // XY plane (visible when pressing W)
  const xyPlane = new THREE.Mesh(planeGeometry, planeMaterial);
  xyPlane.visible = false;
  scene.add(xyPlane);

  // ZY plane (visible when pressing A)
  const zyPlane = new THREE.Mesh(planeGeometry, planeMaterial);
  zyPlane.rotation.y = Math.PI / 2;
  zyPlane.visible = false;
  scene.add(zyPlane);

  // XZ plane (visible when pressing D)
  const xzPlane = new THREE.Mesh(planeGeometry, planeMaterial);
  xzPlane.rotation.x = Math.PI / 2;
  xzPlane.visible = false;
  scene.add(xzPlane);

  // Add keyboard event listeners
  document.addEventListener('keydown', (event) => {
    switch(event.key.toLowerCase()) {
      case 'w':
        xyPlane.visible = true;
        zyPlane.visible = false;
        xzPlane.visible = false;
        // Position camera above looking down
        scene.getObjectByName('camera')?.position.set(0, 550, 0);
        break;
      case 'a':
        xyPlane.visible = false;
        zyPlane.visible = true;
        xzPlane.visible = false;
        // Position camera to the side
        scene.getObjectByName('camera')?.position.set(550, 0, 0);
        break;
      case 'd':
        xyPlane.visible = false;
        zyPlane.visible = false;
        xzPlane.visible = true;
        // Position camera in front
        scene.getObjectByName('camera')?.position.set(0, 0, 550);
        break;
    }
  });

  return scene;
}
