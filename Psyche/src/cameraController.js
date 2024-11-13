import * as THREE from 'three';

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
    // Initial camera setup, positioned far from the center
    camera.position.set(80000, 20000, 0);
    controls.target.set(0, 0, 0);
    controls.update();

    let currentPlanet = planets[0];  

    // Keyboard listener for navigating between planets
    window.addEventListener('keydown', (event) => {
      const currentIndex = planets.findIndex(p => p === currentPlanet);
      if (event.key === 'ArrowUp') {
        const nextIndex = Math.min(currentIndex + 1, planets.length - 1);
        currentPlanet = planets[nextIndex];
        CameraController.moveToPlanet(controls, currentPlanet);
      } else if (event.key === 'ArrowDown') {
        const prevIndex = Math.max(currentIndex - 1, 0);
        currentPlanet = planets[prevIndex];
        CameraController.moveToPlanet(controls, currentPlanet);
      }
    });
  }

  /**
   * moveToPlanet
   * 
   * Adjusts `controls.target` to look at the selected planet's position without 
   * moving the camera.
   * 
   * @param {Object} controls - Controls to handle camera movement.
   * @param {Object} planet - The planet object to look at.
   */
  static moveToPlanet(controls, planet) {
    if (!planet || !planet.model) return;

    // Set the controls target to the new planet's position
    const planetPosition = planet.model.position;
    controls.target.copy(planetPosition);

    // Update controls to apply the new target
    controls.update();
  }

  /**
   * updateTarget
   * 
   * Updates the controls target to follow the currently selected planet's 
   * position, keeping the camera focused on the moving target.
   * 
   * @param {Object} controls - Controls to handle camera movement.
   */
  static updateTarget(controls) {
    if (this.currentPlanet && this.currentPlanet.model) {
      // Continuously set the controls target to the planet's current position
      const planetPosition = this.currentPlanet.model.position;
      controls.target.copy(planetPosition);
      controls.update();
    }
  }
}
