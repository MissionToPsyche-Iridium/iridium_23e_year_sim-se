import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { initPhysicsWorld, getPhysicsWorld } from './physicsWorld.js';
import { loadSceneModels, updatePhysicsObjects } from './objects.js';

let scene, camera, renderer, controls;

async function init() {
  await initPhysicsWorld(); 

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 5, 10);

  renderer = new THREE.WebGLRenderer({ antialias: true });

  let container = document.getElementById('canvas-container');
  let width = container.clientWidth;
  let height = container.clientHeight;

  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);

  window.addEventListener('resize', onWindowResize);

  addLighting();
  addControls();
  
  await loadSceneModels(scene); 

  animate();
}

function addLighting() {
  let ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  let directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 10, 5);
  directionalLight.castShadow = true;
  scene.add(directionalLight);
}

function addControls() {
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = false;
  controls.maxPolarAngle = Math.PI / 2;
}

function onWindowResize() {
  let container = document.getElementById('canvas-container');
  let width = container.clientWidth;
  let height = container.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
}

function updatePhysics(deltaTime) {
  let physicsWorld = getPhysicsWorld();
  if (physicsWorld) {
    physicsWorld.stepSimulation(deltaTime, 10);
    updatePhysicsObjects();
  }
}

function animate() {
  requestAnimationFrame(animate);
  let deltaTime = 1 / 60;
  updatePhysics(deltaTime);
  controls.update();
  renderer.render(scene, camera);
}

init();
