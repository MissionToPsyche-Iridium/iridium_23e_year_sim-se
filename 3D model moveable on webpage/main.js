import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const container = document.getElementById('container3d');
const scene = new THREE.Scene();

// Set the background color of the scene to a specific color
scene.background = new THREE.Color(0x000000);  // Black background

// Set the camera aspect ratio based on container size
const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.z = 500;
//camera.position.set(0,0,10);

let object;
let controls;

const loader = new GLTFLoader();

// Load the moveable_sphere.glb file from the same folder
loader.load(
    './moveableSphere.glb',
    function(gltf) {
        object = gltf.scene;
        
        // Scale the object to make it larger
        object.scale.set(50, 50, 50);  // Adjust the scaling values (x, y, z) as needed
        
        scene.add(object);
    },
    function(error) {
        console.error(error);
    }
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Set background color for the renderer's DOM element (black)
renderer.domElement.style.backgroundColor = 'black';

const topLight = new THREE.DirectionalLight(0xffffff, 2);
topLight.position.set(100, 200, 100);
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, 1);
scene.add(ambientLight);

controls = new OrbitControls(camera, renderer.domElement);
controls.update();

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

// Responsive resizing of the renderer and camera
window.addEventListener('resize', () => {
    renderer.setSize(container.clientWidth, container.clientHeight);
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
});

// Start the animation loop
animate();
