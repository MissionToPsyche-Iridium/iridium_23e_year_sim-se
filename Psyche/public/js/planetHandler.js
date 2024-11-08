import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class PlanetHandler {
  constructor(name, modelPath, size, orbitRadius, orbitSpeed, scene) {
    this.name = name;
    this.size = size;
    this.orbitRadius = orbitRadius;
    this.orbitSpeed = orbitSpeed; // Orbit speed for the path around the Sun
    this.scene = scene;
    this.model = null;
    this.loader = new GLTFLoader();
    this.elapsedTime = 0;
    this.loadModel(modelPath);
}

  loadModel(path) {
      this.loader.load(
          path,
          (gltf) => {
              this.model = gltf.scene;
              this.model.scale.set(this.size, this.size, this.size);
              this.model.position.set(this.orbitRadius, 0, 0);
              this.scene.add(this.model);
              if (this.onLoad) {
                  this.onLoad();  // Trigger onLoad if defined
              }
          },
          undefined,
          (error) => {
              console.error(`Error loading model for ${this.name}`, error);
              if (this.onError) {
                  this.onError(error);  // Trigger onError if defined
              }
          }
      );
  }

  update(rotationSpeed, orbitSpeed, deltaTime) {
      if (this.model) {
          // Update rotation
          this.model.rotation.y += rotationSpeed * deltaTime;

          // Accumulate time for orbit calculation
          this.elapsedTime += deltaTime;

          // Calculate orbit position using accumulated time
          this.model.position.x = this.orbitRadius * Math.cos(-orbitSpeed * this.elapsedTime);
          this.model.position.z = this.orbitRadius * Math.sin(-orbitSpeed * this.elapsedTime);
      }
  }
}

