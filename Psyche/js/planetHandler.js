import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * PlanetHandler Class
 * 
 * Handles the creation, loading, positioning, and updating of planetary models
 * in a 3D scene, using the GLTFLoader for loading .gltf or .glb files.
 * 
 * Properties:
 * - name: Name of the planet
 * - size: Scale factor for the planet's size
 * - orbitRadius: Radius of the planet's orbit
 * - orbitSpeed: Speed of the planet's orbit
 * - rotationSpeed: Speed of the planet's rotation
 * - scene: The 3D scene where the planet will be rendered
 * - model: The 3D model of the planet
 * - loader: GLTFLoader instance for loading 3D models
 * - elapsedTime: Accumulated time used for orbital calculations
 */
export class PlanetHandler {
  constructor(name, modelPath, size, orbitRadius, orbitSpeed, rotationSpeed, scene) {
    this.name = name;
    this.size = size;
    this.orbitRadius = orbitRadius * 1.22;
    this.orbitSpeed = orbitSpeed;
    this.rotationSpeed = rotationSpeed;
    this.scene = scene;
    this.model = null;
    this.loader = new GLTFLoader();
    this.elapsedTime = 0;
    this.loadModel(modelPath);
  }

  /**
   * loadModel
   * 
   * Loads the 3D model of the planet from the specified path.
   * Sets the model's scale and initial position, and adds it to the scene.
   * Handles load success and error responses.
   * 
   * @param {string} path - Path to the .gltf or .glb model file.
   */
  loadModel(path) {
    this.loader.load(
      path,
      (gltf) => {
        this.model = gltf.scene;
        this.model.scale.set(this.size, this.size, this.size);
        this.model.position.set(this.orbitRadius, 0, 0);
        this.scene.add(this.model);
        if (this.onLoad) {
          this.onLoad();
        }
      },
      undefined,
      (error) => {
        // console.error(`Error loading model for ${this.name}`, error);
        if (this.onError) {
          this.onError(error);
        }
      }
    );
  }

  /**
   * update
   * 
   * Updates the rotation and orbit position of the planet.
   * Applies rotation based on the planet's rotation speed and delta time.
   * Calculates and updates the position of the planet along its orbit.
   * 
   * @param {number} rotationSpeed - Speed of rotation for the planet.
   * @param {number} orbitSpeed - Speed of the planet's orbit.
   * @param {number} deltaTime - Time interval since the last update.
   */
  update(rotationSpeed, orbitSpeed, deltaTime) {
    if (this.model) {
      // Rotate the model around its local tilted axis (Y-axis relative to tilt)
      this.model.rotation.y += rotationSpeed * deltaTime;
  
      // Update elapsed time for orbit calculation
      this.elapsedTime += deltaTime;
  
      // Calculate the orbit position on the XZ plane
      this.model.position.x = this.orbitRadius * Math.cos(-orbitSpeed * this.elapsedTime);
      this.model.position.z = this.orbitRadius * Math.sin(-orbitSpeed * this.elapsedTime);
    }
  }
}
