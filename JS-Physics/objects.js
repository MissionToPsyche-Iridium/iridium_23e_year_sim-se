import * as THREE from 'three';
import { AnimationMixer } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { getPhysicsWorld, getAmmo } from './physicsWorld.js';

let loader = new GLTFLoader();
let physicsObjects = [];
export let mixers = [];

function createGround(scene) {
  let textureLoader = new THREE.TextureLoader();
  let groundTexture = textureLoader.load('/img/textures/grass.jpg'); 

  groundTexture.wrapS = THREE.RepeatWrapping;
  groundTexture.wrapT = THREE.RepeatWrapping;
  groundTexture.repeat.set(10, 10); 

  let geometry = new THREE.PlaneGeometry(100, 100);
  let material = new THREE.MeshStandardMaterial({ 
    map: groundTexture, 
    side: THREE.DoubleSide 
  });

  let ground = new THREE.Mesh(geometry, material);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true; 
  scene.add(ground);

  let AmmoLib = getAmmo();  
  let shape = new AmmoLib.btBoxShape(new AmmoLib.btVector3(50, 0.01, 50)); 
  let transform = new AmmoLib.btTransform();
  transform.setIdentity();
  
  transform.setOrigin(new AmmoLib.btVector3(0, -0.02, 0)); 
  let motionState = new AmmoLib.btDefaultMotionState(transform);
  let rbInfo = new AmmoLib.btRigidBodyConstructionInfo(0, motionState, shape);
  let body = new AmmoLib.btRigidBody(rbInfo);
  getPhysicsWorld().addRigidBody(body);
}

export let astronautMixer = null;
export let astronautActions = [];
export let currentActionIndex = 0;

async function loadGLBModel(scene, path, position, scale, isStatic = false, mass = 1) {
  return new Promise((resolve, reject) => {
    loader.load(path, async (gltf) => {
      let model = gltf.scene;
      model.position.set(position.x, position.y, position.z);
      model.scale.set(scale, scale, scale);
      scene.add(model);

      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true; 
          child.receiveShadow = true; 
        }
      });

      if (gltf.animations.length > 0) {
        console.log("Available Animations:", gltf.animations.map(a => a.name));

        astronautMixer = new AnimationMixer(model);

        // Store all animations
        gltf.animations.forEach((clip, index) => {
          let action = astronautMixer.clipAction(clip);
          astronautActions.push(action);
          if (index === 0) action.play(); // Start with first animation
        });

        mixers.push(astronautMixer);
      }

      let AmmoLib = getAmmo();

      if (!isStatic) {
        let shape = new AmmoLib.btBoxShape(new AmmoLib.btVector3(10, 0.01, 10)); 
        let transform = new AmmoLib.btTransform();
        transform.setIdentity();
        transform.setOrigin(new AmmoLib.btVector3(position.x, position.y, position.z));

        let motionState = new AmmoLib.btDefaultMotionState(transform);
        let localInertia = new AmmoLib.btVector3(0, 0, 0);
        if (mass > 0) shape.calculateLocalInertia(mass, localInertia);

        let rbInfo = new AmmoLib.btRigidBodyConstructionInfo(mass, motionState, shape, localInertia);
        let body = new AmmoLib.btRigidBody(rbInfo);
        getPhysicsWorld().addRigidBody(body);

        physicsObjects.push({ mesh: model, body });
      }

      resolve(model);
    }, undefined, reject);
  });
}


export async function loadSceneModels(scene) {
  createGround(scene);
  // await loadGLBModel(scene, '/models/astroguy.glb', { x: 0, y: 0, z: 0 }, 4, false, 5);
  loadGLBModel(scene, '/models/source/walkingAstronaut.glb', { x: 0, y: 0, z: 0 }, 1, false, 5);
  await loadGLBModel(scene, '/models/stopSign.glb', { x: 2, y: 0, z: -3 }, 1, false, 1);
  await loadGLBModel(scene, '/models/nasaLogo.glb', { x: 0, y: 0, z: -30}, 2, false, 1);
}

export function switchAstronautAnimation() {
  if (astronautActions.length > 0) {
    astronautActions[currentActionIndex].stop(); // Stop current animation
    currentActionIndex = (currentActionIndex + 1) % astronautActions.length; // Move to next animation
    astronautActions[currentActionIndex].play(); // Play next animation
    console.log("Switched to animation:", astronautActions[currentActionIndex]._clip.name);
  }
}

export function updatePhysicsObjects() {
  let transformAux = new (getAmmo().btTransform)();
  for (let obj of physicsObjects) {
    let body = obj.body;
    if (body.getMotionState()) {
      body.getMotionState().getWorldTransform(transformAux);
      let origin = transformAux.getOrigin();
      obj.mesh.position.set(origin.x(), origin.y(), origin.z());
    }
  }
}
