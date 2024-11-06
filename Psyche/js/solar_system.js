// Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

document.addEventListener("DOMContentLoaded", () => {
    const scene = new THREE.Scene();
    const container = document.getElementById('containerTwo');

    // Set up camera positioned above the planets for a top-down view
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 3000);
    camera.position.set(0, 200, 500); // Higher position to view from above
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.minDistance = 100;
    controls.maxDistance = 1000;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.update();

    // Brighter ambient light to illuminate the whole scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2); 
    scene.add(ambientLight);

    const loader = new GLTFLoader();
    let marsObject, psycheObject, jupiterObject, earthObject, sunObject;

    // Load the sun model
    loader.load('models/sun/sun.glb', (gltf) => {
        sunObject = gltf.scene;
        sunObject.scale.set(0.0009, 0.0009, 0.0009);
        sunObject.position.set(0, 0, 0); // Position the Sun at the center
        scene.add(sunObject);
        console.log("Sun model loaded.");
    }, undefined, error => console.error('Error loading Sun model:', error));

    // Load planet models and set their positions
    loader.load('models/Mars/Mars.glb', (gltf) => {
        marsObject = gltf.scene;
        marsObject.scale.set(0.4, 0.4, 0.4);
        marsObject.position.set(228, 0, 0); // Position Mars
        scene.add(marsObject);
        console.log("Mars model loaded.");
    }, undefined, error => console.error('Error loading Mars model:', error));

    loader.load('models/psyche/Psyche.glb', (gltf) => {
        psycheObject = gltf.scene;
        psycheObject.scale.set(0.4, 0.4, 0.4);
        psycheObject.position.set(378, 0, 0); // Position Psyche
        scene.add(psycheObject);
        console.log("Psyche model loaded.");
    }, undefined, error => console.error('Error loading Psyche model:', error));

    loader.load('models/jupiter/Jupiter.glb', (gltf) => {
        jupiterObject = gltf.scene;
        jupiterObject.scale.set(0.5, 0.5, 0.5);
        jupiterObject.position.set(778, 0, 0); // Position Jupiter
        scene.add(jupiterObject);
        console.log("Jupiter model loaded.");
    }, undefined, error => console.error('Error loading Jupiter model:', error));

    loader.load('models/earth/earth.glb', (gltf) => {
        earthObject = gltf.scene;
        earthObject.scale.set(6, 6, 6); // Adjusted scale for better visibility
        earthObject.position.set(149, 0, 0); // Position Earth
        scene.add(earthObject);
        console.log("Earth model loaded and added to the scene.");
    }, undefined, error => console.error('Error loading Earth model:', error));

    // Function to create an orbit path
    function createOrbitPath(radius) {
        const points = [];
        const numPoints = 100; // Number of points to create a smooth circle

        for (let i = 0; i <= numPoints; i++) {
            const angle = (i / numPoints) * Math.PI * 2; // Full circle
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            points.push(new THREE.Vector3(x, 0, z));
        }

        const orbitGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff }); // White color for the orbit
        const orbitLine = new THREE.LineLoop(orbitGeometry, orbitMaterial);
        return orbitLine;
    }

    // Create orbit paths for each planet using the adjusted distances (10% reduced)
    const marsOrbitPath = createOrbitPath(228 * 0.9); // Mars orbit path
    const earthOrbitPath = createOrbitPath(149 * 0.9); // Earth orbit path
    const psycheOrbitPath = createOrbitPath(378 * 0.9); // Psyche orbit path
    const jupiterOrbitPath = createOrbitPath(778 * 0.9); // Jupiter orbit path

    // Add orbit paths to the scene
    scene.add(marsOrbitPath);
    scene.add(earthOrbitPath);
    scene.add(psycheOrbitPath);
    scene.add(jupiterOrbitPath);

    // Resize event listener to handle window resizing
    window.addEventListener("resize", () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });

    function animate() {
        requestAnimationFrame(animate);

        // Close orbit animations around the sun
        const time = Date.now() * 0.00005; // Slower speed for all planets

        // Rotate the sun for better visibility
        if (sunObject) {
            sunObject.rotation.y += 0.01; // Rotate the sun slowly
        }

        // Updated orbital paths for planets
        if (marsObject) {
            marsObject.position.x = Math.cos(time * 1.5) * (228 * 0.9); // Mars position
            marsObject.position.z = Math.sin(time * 1.5) * (228 * 0.9); // Mars position
        }

        if (earthObject) {
            earthObject.position.x = Math.cos(time * 1.2) * (149 * 0.9); // Earth position
            earthObject.position.z = Math.sin(time * 1.2) * (149 * 0.9); // Earth position
        }

        if (psycheObject) {
            psycheObject.position.x = Math.cos(time * 0.8) * (378 * 0.9); // Psyche position
            psycheObject.position.z = Math.sin(time * 0.8) * (378 * 0.9); // Psyche position
        }

        if (jupiterObject) {
            jupiterObject.position.x = Math.cos(time * 0.6) * (778 * 0.9); // Jupiter position
            jupiterObject.position.z = Math.sin(time * 0.6) * (778 * 0.9); // Jupiter position
        }

        controls.update();
        renderer.render(scene, camera);
    }
    animate();
});
