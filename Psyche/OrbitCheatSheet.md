# **Creating Accurate Planetary Orbits in Three.js**

---

## **Assumptions**

This guide assumes the following code structure for your Three.js solar system project:

- A function is used to load planets from an array. Each planet in the array is represented as an object with the following format:

```
{
    name: "Earth",
    path: "src/assets/models/earth1.glb",
    size: 3,
    orbitRadius: 5,
    orbitSpeed: 0.1,
    rotationSpeed: 1,
    eccentricity: 0.017,
    inclination: 0.0
}
```

- Each planet object is loaded, converted into a 3D model, added to an array. Once all planets are loaded, the load function returns the array of planet objects.

## This method method also attempts to implement a pre-computed orbit path to minimize the math required on each frame and allow the orbit path to be loaded in chunks.

- After returning the array, a ```computeOrbit``` function is called (I used a for each loop) to:
  - Generate a set of points representing the planet’s orbit in 3D space using the orbital parameters (radius, eccentricity, and inclination).
  - Precomputed points are stored in each planet’s `precomputedOrbit` property for later use in animation.
```
planets.forEach((planet) => {
    planet.precomputedOrbit = precomputeOrbit(
        planet.orbitRadius,
        planet.eccentricity,
        planet.inclination
    );
});
```  

- The createOrbit function receives a planet object and the scene as arguments, then builds the orbits:
	- Visualizes the precomputed orbital path using THREE.LineLoop and adds it to the scene.
	- Ensures the orbit aligns with the planet’s inclination angle.   
```
createOrbit(planet.orbitRadius, planet.eccentricity, planet.inclination, scene);
```
## **Code Flow**

---

### **1. Load Planets**

The `loadPlanets` function initializes the solar system by:
- Loading planet models and their associated data.
- Adding planets to the scene and returning the array.

```
loadPlanets(scene, updateProgressBar).then(({ planets }) => {
    // Planets are now loaded and ready for precomputing orbits
});
```

### **2. Precompute Orbits**
The precomputeOrbit function calculates 3D points for a planet’s elliptical orbit:
- The semi-major and semi-minor axes are derived from the planet’s orbitRadius and eccentricity.
- Inclination is applied to tilt the orbit in 3D space.
```
export function precomputeOrbit(radius, eccentricity, inclination, steps = 50) {
    const semiMajorAxis = radius;
    const semiMinorAxis = radius * Math.sqrt(1 - eccentricity ** 2);
    const inclinationRadians = (inclination * Math.PI) / 180;

    const points = [];
    for (let i = 0; i < steps; i++) {
        const angle = (i / steps) * 2 * Math.PI;
        const x = semiMajorAxis * Math.cos(angle);
        const z = semiMinorAxis * Math.sin(angle);
        const y = z * Math.sin(inclinationRadians);
        points.push(new THREE.Vector3(x, y, z * Math.cos(inclinationRadians)));
    }
    return points;
}
```
### **3. Create Visual Orbits**
The createOrbit function receives a planet’s orbit data and adds a visual representation of the orbit to the scene.
```
export function createOrbit(radius, eccentricity, inclination, scene) {
    const points3D = precomputeOrbit(radius, eccentricity, inclination);

    const geometry = new THREE.BufferGeometry().setFromPoints(points3D);
    const material = new THREE.LineBasicMaterial({ color: 0x888888 });

    const orbit = new THREE.LineLoop(geometry, material);
    scene.add(orbit);
}
```
### **4. Animate Planet Movement**
The updateOrbitFromPrecomputed function uses the precomputed orbit to position planets dynamically:

- Determines the current position by interpolating between two precomputed points based on elapsed time and orbitSpeed.
```
export function updateOrbitFromPrecomputed(planet, elapsedTime, orbitSpeed) {
    const steps = planet.precomputedOrbit.length;
    const index = Math.floor((elapsedTime * orbitSpeed) % steps);
    const nextIndex = (index + 1) % steps;

    const t = (elapsedTime * orbitSpeed) % 1;
    planet.model.position.lerpVectors(
        planet.precomputedOrbit[index],
        planet.precomputedOrbit[nextIndex],
        t
    );
}
```
### **5. Main Animation Loop**
The renderer.setAnimationLoop function ties everything together:

- Calls the updateOrbitFromPrecomputed function for each planet during each animation frame.
- Ensures smooth movement along the precomputed orbit.
```
renderer.setAnimationLoop((time) => {
    const elapsedTime = clock.getElapsedTime();
    planets.forEach((planet) => {
        updateOrbitFromPrecomputed(planet, elapsedTime, planet.orbitSpeed);
    });
    renderer.render(scene, camera);
});
```