import * as THREE from 'three';

// ORIGINAL FUNCTION WITHOUT ELLIPTICAL ORBITS
// export function createOrbit(radius, scene) {
//     const curve = new THREE.EllipseCurve(0, 0, radius, radius);
//     const points = curve.getPoints(500);

//     const pointsXZ = points.map(p => new THREE.Vector3(p.x, 0, p.y));
//     const geometry = new THREE.BufferGeometry().setFromPoints(pointsXZ);
//     const material = new THREE.LineBasicMaterial({ color: 0x888888 });
//     const orbit = new THREE.LineLoop(geometry, material);

//     scene.add(orbit);
// }


// 1ST ORBIT FUNCTION WITH ELLIPTICAL ORBITS. TOO MUCH OVERHEAD
// export function createOrbit(radius, eccentricity, inclination, scene) {
//   const semiMajorAxis = radius; 
//   const semiMinorAxis = radius * Math.sqrt(1 - eccentricity ** 2);

//   const curve = new THREE.EllipseCurve(0, 0, semiMajorAxis, semiMinorAxis);
//   const points = curve.getPoints(500);

//   const points3D = points.map(p => new THREE.Vector3(p.x, 0, p.y));

//   const geometry = new THREE.BufferGeometry().setFromPoints(points3D);
//   const material = new THREE.LineBasicMaterial({ color: 0x888888 });

//   const orbit = new THREE.LineLoop(geometry, material);

//   const inclinationRadians = (inclination * Math.PI) / 180;
//   orbit.rotation.x = inclinationRadians;

//   scene.add(orbit);
// }




export function precomputeOrbit(radius, eccentricity, inclination, steps = 50) {
  const semiMajorAxis = radius;
  const semiMinorAxis = radius * Math.sqrt(1 - eccentricity ** 2);
  const inclinationRadians = (inclination * Math.PI) / 180;

  const points = [];
  for (let i = 0; i < steps; i++) {
    const angle = (i / steps) * 2 * Math.PI;
    const x = semiMajorAxis * Math.cos(angle);
    const z = semiMinorAxis * Math.sin(angle);
    const y = z * Math.sin(inclinationRadians);
    points.push(new THREE.Vector3(x, y, z * Math.cos(inclinationRadians)));
  }
  return points;
}

export function createOrbit(radius, eccentricity, inclination, scene) {
  const points3D = precomputeOrbit(radius, eccentricity, inclination);

  const geometry = new THREE.BufferGeometry().setFromPoints(points3D);
  const material = new THREE.LineBasicMaterial({ color: 0x888888 });

  const orbit = new THREE.LineLoop(geometry, material);
  scene.add(orbit);
}

export function updateOrbitFromPrecomputed(planet, elapsedTime, orbitSpeed) {
  const steps = planet.precomputedOrbit.length;
  const index = Math.floor((elapsedTime * orbitSpeed) % steps);
  const nextIndex = (index + 1) % steps;

  const t = (elapsedTime * orbitSpeed) % 1;
  planet.model.position.lerpVectors(
    planet.precomputedOrbit[index],
    planet.precomputedOrbit[nextIndex],
    t
  );
}
