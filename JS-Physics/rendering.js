import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { initPhysicsWorld, getPhysicsWorld } from './physicsWorld.js';
import { loadSceneModels, updatePhysicsObjects } from './objects.js';
import { mixers, switchCharacterAnimation, characterModel, characterBody } from './objects.js';

let scene, camera, renderer, controls;

async function init() {
  await initPhysicsWorld(); 

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 5, 10);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

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

  directionalLight.shadow.mapSize.width = 2048;
  directionalLight.shadow.mapSize.height = 2048;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 50;
  directionalLight.shadow.camera.left = -15;
  directionalLight.shadow.camera.right = 15;
  directionalLight.shadow.camera.top = 15;
  directionalLight.shadow.camera.bottom = -15;

  scene.add(directionalLight);
}


let keys = {}; 

window.addEventListener("keydown", (event) => {
  keys[event.key.toLowerCase()] = true;

  if (!characterBody) return;

  let transform = new Ammo.btTransform();
  characterBody.getMotionState().getWorldTransform(transform);
  let rotation = transform.getRotation();
  
  let quaternion = new THREE.Quaternion(rotation.x(), rotation.y(), rotation.z(), rotation.w());
  let forward = new THREE.Vector3(0, 0, -1).applyQuaternion(quaternion).normalize();

  let moveSpeed = 20; 
  let force = new Ammo.btVector3(forward.x * moveSpeed, 0, forward.z * moveSpeed);

  if (keys["w"]) {
    characterBody.activate();
    characterBody.applyCentralForce(force);
    switchCharacterAnimation("walk");
  }
});


window.addEventListener("keyup", (event) => {
  keys[event.key.toLowerCase()] = false;

  if (event.key.toLowerCase() === "w") {
      if (characterModel.userData.physicsBody) {
          characterModel.userData.physicsBody.setLinearVelocity(new Ammo.btVector3(0, 0, 0));
          characterModel.userData.physicsBody.setAngularVelocity(new Ammo.btVector3(0, 0, 0));
      }
      switchCharacterAnimation("idle");
  }
});




function addControls() {
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = false;
  controls.maxPolarAngle = Math.PI / 2;
  controls.addEventListener("change", () => {
    if (characterModel) {
      let targetPosition = characterModel.position.clone();
      targetPosition.y += 1; 
      controls.target.copy(targetPosition);
    }
  });
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

const characterMovement = () => {
  if (!characterBody || !keys["w"]) return;

  const movementSpeed = 15;

  let transform = new Ammo.btTransform();
  characterBody.getMotionState().getWorldTransform(transform);
  let rotation = transform.getRotation();

  let quaternion = new THREE.Quaternion(rotation.x(), rotation.y(), rotation.z(), rotation.w());

  let euler = new THREE.Euler(0, characterModel.rotation.y, 0); 
  quaternion.setFromEuler(euler);

  let forward = new THREE.Vector3(0, 0, -1).applyQuaternion(quaternion).normalize();

  console.log(`Character Forward Vector: ${forward.x}, ${forward.y}, ${forward.z}`);

  let impulse = new Ammo.btVector3(forward.x * movementSpeed, 0, forward.z * movementSpeed);

  characterBody.activate();
  characterBody.applyCentralImpulse(impulse);

  console.log(`Applying impulse: ${impulse.x()}, ${impulse.y()}, ${impulse.z()}`);

  switchCharacterAnimation("walk");
};



function animate() {
  requestAnimationFrame(animate);
  let deltaTime = 1 / 60;

  updatePhysics(deltaTime);
  controls.update();

  if (characterModel) {
    let targetPosition = characterModel.position.clone();
    targetPosition.y += 1; 
    controls.target.copy(targetPosition);
    characterMovement();
  }

  if (mixers.length > 0) {
    mixers.forEach((mixer) => mixer.update(deltaTime));
  }

  renderer.render(scene, camera);
}




init();
