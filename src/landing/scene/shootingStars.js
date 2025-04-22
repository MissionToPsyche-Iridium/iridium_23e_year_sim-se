import * as THREE from 'three';

export class ShootingStarManager {
  constructor(scene) {
    this.scene = scene;
    this.pool = [];
    this.active = [];

    const geometry = new THREE.CylinderGeometry(0.1, 0.3, 4, 6);
    geometry.rotateZ(Math.PI / 2); // horizontal orientation
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 1.0,
    });

    for (let i = 0; i < 3; i++) {
      const star = new THREE.Mesh(geometry, material);
      star.visible = false;
      scene.add(star);
      this.pool.push(star);
    }
  }

  spawnStar() {
    if (this.pool.length === 0) return;

    const star = this.pool.pop();

    // Start on the right side of the screen, slightly above camera center
    star.position.set(30, 5, -20);

    // Move leftward across the field of view
    star.userData.velocity = new THREE.Vector3(-40, -5, 0); // Fast, slight downward drift
    star.visible = true;

    this.active.push(star);
    console.log("Star spawned and pushed");
  }

  update(delta) {
    for (let i = this.active.length - 1; i >= 0; i--) {
      const star = this.active[i];
      star.position.addScaledVector(star.userData.velocity, delta);

      // If it has gone out of visible range, recycle
      if (star.position.x < -30 || star.position.y < -20) {
        star.visible = false;
        this.pool.push(star);
        this.active.splice(i, 1);
      }
    }
  }
}
