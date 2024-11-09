import * as THREE from 'three';

export class CameraController {
  
  static setup(camera, controls, planets) {
      // Initial camera position for sun-centered view
      camera.position.set(80000, 20000, 0); // Adjust to ensure a zoomed-out view
      controls.target.set(0, 0, 0); // Assuming the sun is at the origin
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

  static moveToPlanet(camera, controls, planet) {
    console.log("Moving to planet:", planet); 

    if (!planet || !planet.model) {
      console.warn(`Planet or model missing for ${planet?.name || 'Unknown planet'}`);
      return;
    }

    // Smooth transition to the new planet's position over time
    const targetPosition = new THREE.Vector3(
      planet.model.position.x + 90000, // Offset for clear view
      planet.model.position.y + 7000,   // Adjust upward
      planet.model.position.z + 300     // Slight forward offset
    );

    const animateTransition = () => {
      // Use lerp for smooth camera movement towards the target position
      camera.position.lerp(targetPosition, 0.05); // Adjust lerp factor for speed
      controls.target.copy(planet.model.position); // Make controls orbit the selected planet

      // Check if camera is close to the target position
      if (camera.position.distanceTo(targetPosition) > 10) {
        requestAnimationFrame(animateTransition);
      }
      controls.update();
    };

    animateTransition();
  }
}
