import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const canvasContainer = document.getElementById('canvas-container');

const renderer1 = new THREE.WebGLRenderer({ antialias: true });
renderer1.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
renderer1.setPixelRatio(window.devicePixelRatio);
canvasContainer.appendChild(renderer1.domElement);

const renderer2 = new THREE.WebGLRenderer({ antialias: true });
renderer2.setSize(canvasContainer.offsetWidth / 3, canvasContainer.offsetHeight / 3);
renderer2.setPixelRatio(window.devicePixelRatio);
renderer2.domElement.style.position = 'absolute';
renderer2.domElement.style.top = '10px';
renderer2.domElement.style.right = '10px';
canvasContainer.appendChild(renderer2.domElement);

const scene1 = new THREE.Scene();
const camera1 = new THREE.PerspectiveCamera(75, canvasContainer.offsetWidth / canvasContainer.offsetHeight, 0.1, 1000);
camera1.position.z = 5;

const controls1 = new OrbitControls(camera1, renderer1.domElement);
controls1.enableDamping = true;
controls1.dampingFactor = 0.05;

const textureLoader = new THREE.TextureLoader();
const woodTexture = textureLoader.load('/resources/textures/wood.jpg');

const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshStandardMaterial({
  map: woodTexture,
  roughness: 0.6,
  metalness: 0.2,
});

const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene1.add(cube);
cube.position.set(0, 0, 0);

const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
camera2.position.z = 3;

const controls2 = new OrbitControls(camera2, renderer2.domElement);
controls2.enableDamping = true;
controls2.dampingFactor = 0.05;

const sphereTexture = textureLoader.load('/resources/textures/ds.jpg');
const sphereGeometry = new THREE.SphereGeometry(0.7, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({
  map: sphereTexture,
  roughness: 0.5,
  metalness: 0.5,
});

const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene2.add(sphere);
sphere.position.set(0, 0, 0);

const light1 = new THREE.DirectionalLight(0xffffff, 2);
light1.position.set(5, 5, 5);
scene1.add(light1);

const ambientLight1 = new THREE.AmbientLight(0xffffff, 1);
scene1.add(ambientLight1);

const light2 = new THREE.DirectionalLight(0xffffff, 2);
light2.position.set(5, 5, 5);
scene2.add(light2);

const ambientLight2 = new THREE.AmbientLight(0xffffff, 1);
scene2.add(ambientLight2);

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  sphere.rotation.x -= 0.01;
  sphere.rotation.y -= 0.01;

  controls1.update();
  controls2.update();

  renderer1.render(scene1, camera1);
  renderer2.render(scene2, camera2);
}

// Handle resizing dynamically
window.addEventListener('resize', () => {
  const width = canvasContainer.offsetWidth;
  const height = canvasContainer.offsetHeight;

  renderer1.setSize(width, height);
  camera1.aspect = width / height;
  camera1.updateProjectionMatrix();

  renderer2.setSize(width / 3, height / 3);
  camera2.aspect = (width / 3) / (height / 3);
  camera2.updateProjectionMatrix();
});

// Start the animation loop
animate();
