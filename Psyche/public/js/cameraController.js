import * as THREE from 'three';

/**
 * CameraController Class
 * 
 * Manages the setup and controls for the camera, including positioning for a 
 * sun-centered view and navigating between planets. Allows smooth transitions 
 * to a selected planet's view based on user input.
 */
export class CameraController {

  /**
   * setup
   * 
   * Configures the initial camera position for a zoomed-out, sun-centered view 
   * and sets up keyboard event listeners to navigate between planets.
   * 
   * @param {THREE.Camera} camera - The main camera used for the 3D scene.
   * @param {Object} controls - Controls to manage the camera movement.
   * @param {Array} planets - Array of planet objects for navigation.
   */
  static setup(camera, controls, planets) {
    camera.position.set(80000, 20000, 0);
    controls.target.set(0, 0, 0);
    controls.update();

    let currentPlanet = planets[0];

    window.addEventListener('keydown', (event) => {
      const currentIndex = planets.findIndex(p => p === currentPlanet);
      if (event.key === 'ArrowUp') {
        const nextIndex = Math.min(currentIndex + 1, planets.length - 1);
        currentPlanet = planets[nextIndex];
        CameraController.moveToPlanet(camera, controls, currentPlanet);
      } else if (event.key === 'ArrowDown') {
        const prevIndex = Math.max(currentIndex - 1, 0);
        currentPlanet = planets[prevIndex];
        CameraController.moveToPlanet(camera, controls, currentPlanet);
      }
    });
  }

  /**
   * moveToPlanet
   * 
   * Moves the camera to focus on the specified planet with a smooth transition 
   * effect. Adjusts the camera position and control target to center on the 
   * selected planet model.
   * 
   * @param {THREE.Camera} camera - The main camera for the 3D scene.
   * @param {Object} controls - Controls to handle camera movement.
   * @param {Object} planet - The planet object to move the camera towards.
   */
  static moveToPlanet(camera, controls, planet) {
    // console.log("Moving to planet:", planet);

    if (!planet || !planet.model) {
      // console.warn(`Planet or model missing for ${planet?.name || 'Unknown planet'}`);
      return;
    }

    const targetPosition = new THREE.Vector3(
      planet.model.position.x + 90000,
      planet.model.position.y + 7000,
      planet.model.position.z + 300
    );

    const animateTransition = () => {
      camera.position.lerp(targetPosition, 0.05);
      controls.target.copy(planet.model.position);

      if (camera.position.distanceTo(targetPosition) > 10) {
        requestAnimationFrame(animateTransition);
      }
      controls.update();
    };

    animateTransition();
  }
}
