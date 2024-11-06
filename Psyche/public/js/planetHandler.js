import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class PlanetHandler {
    constructor(name, modelPath, size, orbitRadius, scene) {
        this.name = name;
        this.size = size;
        this.orbitRadius = orbitRadius;
        this.scene = scene;
        this.model = null;
        this.loader = new GLTFLoader();
        this.loadModel(modelPath);
    }

    loadModel(path) {
        this.loader.load(path, (gltf) => {
            this.model = gltf.scene;
            this.model.scale.set(this.size, this.size, this.size);
            this.model.position.set(this.orbitRadius, 0, 0);
            this.scene.add(this.model);
        });
    }

    update(rotationSpeed, orbitSpeed, deltaTime) {
        if (this.model) {
            this.model.rotation.y += rotationSpeed * deltaTime;
            this.model.position.x = this.orbitRadius * Math.cos(orbitSpeed * deltaTime);
            this.model.position.z = this.orbitRadius * Math.sin(orbitSpeed * deltaTime);
        }
    }
}
