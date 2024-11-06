export class CameraController {
  static setup(camera, controls, planets) {
      let currentPlanet = planets[0]; 
      camera.position.set(currentPlanet.orbitRadius + 500, 100, 300);
      camera.lookAt(currentPlanet.model.position);
      controls.update();

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
    if (!planet || !planet.model) {
      console.warn(`Planet or model missing for ${planet?.name || 'Unknown planet'}`);
      return;
    }
      camera.position.set(
          planet.model.position.x + 500,
          planet.model.position.y + 100,
          planet.model.position.z + 300
      );
      camera.lookAt(planet.model.position);
      controls.update();
  }
}
