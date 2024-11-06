import * as THREE from 'three';

export function createOrbit(radius, scene) {
    const curve = new THREE.EllipseCurve(0, 0, radius, radius);
    const points = curve.getPoints(50);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: 0x888888 });
    const orbit = new THREE.LineLoop(geometry, material);
    scene.add(orbit);
}
