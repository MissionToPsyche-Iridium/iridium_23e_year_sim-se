import * as THREE from 'three';

// export function createOrbit(radius, eccentricity, scene) {
//   const semiMinorAxis = radius * Math.sqrt(1 - eccentricity * eccentricity);
//   const curve = new THREE.EllipseCurve(0, 0, radius, semiMinorAxis);
//   const points = curve.getPoints(500);

//   const pointsXZ = points.map(p => new THREE.Vector3(p.x, 0, p.y));
//   const geometry = new THREE.BufferGeometry().setFromPoints(pointsXZ);
//   const material = new THREE.LineBasicMaterial({ color: 0x888888 });
//   const orbit = new THREE.LineLoop(geometry, material);

//   scene.add(orbit);
// }


export function createOrbit(radius, scene) {
    const curve = new THREE.EllipseCurve(0, 0, radius, radius);
    const points = curve.getPoints(500);

    const pointsXZ = points.map(p => new THREE.Vector3(p.x, 0, p.y));
    const geometry = new THREE.BufferGeometry().setFromPoints(pointsXZ);
    const material = new THREE.LineBasicMaterial({ color: 0x888888 });
    const orbit = new THREE.LineLoop(geometry, material);

    scene.add(orbit);
}
