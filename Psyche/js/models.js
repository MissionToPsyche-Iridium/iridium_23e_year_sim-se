import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('containerOne');
    if (!container) {
        console.error("Container element with ID 'containerOne' not found.");
        return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    let Sun, selectedPlanet;
    const planets = {};
    let orbitActive = true;
    let isInspecting = false;

    const toggleButton = document.getElementById("toggle-rotate");
    const panSpeed = 2;
    const zoomStep = 5;

    const zoomDistances = {
        sun: 35,
       // mercury: 20,
        earth: 20,
        mars: 30,
        psyche: 10,
        jupiter: 20,
       // saturn: 20,
       // uranus: 20,
       // neptune: 20,
       // pluto: 20
    };

    // Load Sun Model
    loader.load('models/sun/sun.glb', (gltf) => {
        Sun = gltf.scene;
        Sun.position.set(0, 0, 0);
        Sun.scale.set(0.0015, 0.0015, 0.0015);
        Sun.name = "Sun";
        scene.add(Sun);

        // Add the Sun to the planets object for interaction
        planets["sun"] = { object: Sun, orbitRadius: 0, angle: 0, speed: 0 };

        // Add a PointLight at the Sun's position to simulate sunlight
        const sunLight = new THREE.PointLight(0xffffff, 2, 1000);
        sunLight.position.copy(Sun.position);
        scene.add(sunLight);
    });

    const loadPlanet = (name, path, orbitRadius, scale, speed) => {
        loader.load(path, (gltf) => {
            const planet = gltf.scene;
            planet.position.set(orbitRadius, 0, 0);
            planet.scale.set(scale, scale, scale);
            planet.name = name;
            scene.add(planet);
            planets[name.toLowerCase()] = { object: planet, orbitRadius, angle: 0, speed };

            if (name.toLowerCase() === "psyche") {
                selectedPlanet = planets["psyche"];
                isInspecting = false;

                const psycheZoom = zoomDistances["psyche"];
                camera.position.set(
                    selectedPlanet.object.position.x + psycheZoom,
                    selectedPlanet.object.position.y + psycheZoom,
                    selectedPlanet.object.position.z + psycheZoom
                );
                camera.lookAt(selectedPlanet.object.position);

                toggleButton.textContent = "Inspect Psyche";
            }
        });
    };

    // Set Mars and Psyche with different orbits and speeds
   // loadPlanet("Mercury", "models/mercury/mercury.glb", 38, 1, 0.005);
  //  loadPlanet("Venus", "models/venus/venus.glb", 67, 6, 0.005);
    loadPlanet("Earth", "models/earth/earth.glb", 149, 6, 0.005);
    loadPlanet("Mars", "models/Mars/Mars.glb", 228, 1, 0.008);
    loadPlanet("Psyche", "models/psyche/Psyche.glb", 378, 1, 0.015);
    loadPlanet("Jupiter", "models/jupiter/jupiter.glb", 778, 1 , 0.009);
   // loadPlanet("Saturn", "models/saturn/saturn.glb", 1400, 1, 0.005);
   // loadPlanet("Uranus", "models/uranus/uranus.glb", 2900, 1, 0.005);
   // loadPlanet("Neptune", "models/neptune/neptune.glb", 4500, 1, 0.005);
   // loadPlanet("Pluto", "models/pluto/pluto.glb", 5900, 1, 0.005);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.enablePan = true;

    const zoomToPlanet = (planet) => {
        const planetName = planet.object.name.toLowerCase();
        const zoomDistance = zoomDistances[planetName] || 20;

        camera.position.set(
            planet.object.position.x + zoomDistance,
            planet.object.position.y + zoomDistance,
            planet.object.position.z + zoomDistance
        );
        camera.lookAt(planet.object.position);

        controls.target.copy(planet.object.position);
        controls.update();
    };

    const selectPlanet = (planetName) => {
        if (planets[planetName]) {
            selectedPlanet = planets[planetName];
            isInspecting = false;
            zoomToPlanet(selectedPlanet);
            toggleButton.textContent = `Inspect ${planetName.charAt(0).toUpperCase() + planetName.slice(1)}`;
        } else {
            console.warn(`Planet ${planetName} not found in planets object.`);
        }
    };

    // Event listener for planet buttons
    document.querySelectorAll(".horizontal-buttons").forEach(button => {
        button.addEventListener("click", () => {
            const planetName = button.id.replace("button-", "").toLowerCase();
            selectPlanet(planetName);
        });
    });

    // Event listener for the toggle button
    toggleButton.addEventListener("click", () => {
        isInspecting = !isInspecting;

        if (isInspecting && selectedPlanet) {
            orbitActive = false;
            toggleButton.textContent = "Restart Orbit";

            zoomToPlanet(selectedPlanet);
        } else if (selectedPlanet) {
            orbitActive = true;
            const planetName = selectedPlanet.object.name.charAt(0).toUpperCase() + selectedPlanet.object.name.slice(1);
            toggleButton.textContent = `Inspect ${planetName}`;

            zoomToPlanet(selectedPlanet);
        }
    });

    // Add an event listener for the reset button
    document.getElementById("reset").addEventListener("click", () => {
        selectedPlanet = planets["psyche"];
        isInspecting = false;
        orbitActive = true;

        const psycheZoom = zoomDistances["psyche"];
        camera.position.set(
            selectedPlanet.object.position.x + psycheZoom,
            selectedPlanet.object.position.y + psycheZoom,
            selectedPlanet.object.position.z + psycheZoom
        );
        camera.lookAt(selectedPlanet.object.position);

        toggleButton.textContent = "Inspect Psyche";
        controls.target.copy(selectedPlanet.object.position);
        controls.update();
    });

    // Render loop
    function render() {
        requestAnimationFrame(render);

        if (Sun && orbitActive) {
            Sun.rotation.y += 0.01;
        }

        Object.values(planets).forEach(planetData => {
            if (orbitActive) {
                planetData.angle += planetData.speed;
                planetData.object.position.x = planetData.orbitRadius * Math.cos(planetData.angle);
                planetData.object.position.z = planetData.orbitRadius * Math.sin(planetData.angle);
            }
            if (!isInspecting) {
                planetData.object.rotation.y += 0.01;
            }
        });

        if (!isInspecting && selectedPlanet) {
            zoomToPlanet(selectedPlanet);
        } else {
            controls.update();
        }

        renderer.render(scene, camera);
    }
    render();
});
