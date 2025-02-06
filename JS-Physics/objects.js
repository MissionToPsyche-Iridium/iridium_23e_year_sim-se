import * as THREE from 'three';
import { AnimationMixer } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { getPhysicsWorld, getAmmo } from './physicsWorld.js';

let loader = new GLTFLoader();
let physicsObjects = [];
export let mixers = [];

export let characterModel = null;
export let characterMixer = null;
export let characterActions = {};
export let currentAction = null;

const STATE = { DISABLE_DEACTIVATION: 4 }
const FLAGS = { CF_KINEMATIC_OBJECT: 2 }
let rigidBodies = [];

export const createRigidBody = (threeObject, physicsShape, mass, position, quaternion) => {
  let AmmoLib = getAmmo();

  let transform = new AmmoLib.btTransform();
  transform.setIdentity();
  
  let adjustedPosition = new AmmoLib.btVector3(position.x, position.y - 0.7, position.z); 
  transform.setOrigin(adjustedPosition);
  
  transform.setRotation(new AmmoLib.btQuaternion(0, 0, 0, 1)); 
  let motionState = new AmmoLib.btDefaultMotionState(transform);
  let localInertia = new AmmoLib.btVector3(0, 0, 0);

  if (mass > 0) {
      physicsShape.calculateLocalInertia(mass, localInertia);
  }

  let rbInfo = new AmmoLib.btRigidBodyConstructionInfo(mass, motionState, physicsShape, localInertia);
  let body = new AmmoLib.btRigidBody(rbInfo);
  if (mass > 0) {
    body.setActivationState(AmmoLib.ACTIVE_TAG); 
    body.setCollisionFlags(body.getCollisionFlags() & ~AmmoLib.CF_STATIC_OBJECT); 
  }

  threeObject.userData.physicsBody = body;
  getPhysicsWorld().addRigidBody(body);
  
  return body;
};


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
  let shape = new AmmoLib.btBoxShape(new AmmoLib.btVector3(50, 1, 50)); 
  let transform = new AmmoLib.btTransform();
  transform.setIdentity();
  
  transform.setOrigin(new AmmoLib.btVector3(0, -0.02, 0)); 
  let motionState = new AmmoLib.btDefaultMotionState(transform);
  let rbInfo = new AmmoLib.btRigidBodyConstructionInfo(0, motionState, shape);
  let body = new AmmoLib.btRigidBody(rbInfo);
  getPhysicsWorld().addRigidBody(body);
}

export let characterBody = null;

async function loadGLBModel(scene, path, position, scale, isStatic = false, mass = 1, isCharacter = false) {
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

      if (isCharacter) {
        characterModel = model;
        characterMixer = new THREE.AnimationMixer(model);
        characterActions = {};
      
        let animationNames = []; 
        gltf.animations.forEach((clip) => {
          let action = characterMixer.clipAction(clip);
          characterActions[clip.name] = action;
          animationNames.push(clip.name);
        });
      
        console.log("Available Animations:", animationNames); 
      
        if (characterActions["idle"]) {
          characterActions["idle"].play();
          console.log("Starting animation: idle"); 
        } else if (animationNames.length > 0) {
          console.log("No idle animation found. Defaulting to first animation.");
          characterActions[animationNames[0]].play();
        }
      
        mixers.push(characterMixer);
      }

      let shape = new (getAmmo()).btBoxShape(new (getAmmo()).btVector3(0.5, 0.7, 0.5));
      shape.setMargin(0.001);

      let quat = new THREE.Quaternion();
      quat.setFromEuler(new THREE.Euler(0, 0, 0, "XYZ"));

      let body = createRigidBody(model, shape, mass, position, quat);
      if (isCharacter) {
        characterBody = body;
      }

      resolve(model);
    }, undefined, reject);
  });
}




export async function loadSceneModels(scene) {
  createGround(scene);
  await loadGLBModel(scene, '/models/charAnim.glb', { x: 0, y: 0, z: 0 }, 1, false, 5, true); 
  await loadGLBModel(scene, '/models/stopSign.glb', { x: 2, y: 0, z: -3 }, 1, false, 1);
  await loadGLBModel(scene, '/models/nasaLogo.glb', { x: 0, y: 0, z: -30}, 2, false, 1);
}

export function switchCharacterAnimation(animationName) {
  console.log("Available animations:", Object.keys(characterActions));

  if (!characterActions[animationName]) {
    console.warn(`Animation "${animationName}" not found.`);
    return;
  }

  if (currentAction !== characterActions[animationName]) {
    if (currentAction) {
      currentAction.stop();
    }

    currentAction = characterActions[animationName];
    currentAction.reset().play();
    currentAction.setLoop(THREE.LoopRepeat); 
    currentAction.setEffectiveTimeScale(1);
  }
}



export function updatePhysicsObjects() {
  let transformAux = new (getAmmo().btTransform)();

  for (let obj of rigidBodies) {
      let body = obj.userData.physicsBody;
      let ms = body.getMotionState();
      
      if (ms) {
          ms.getWorldTransform(transformAux);
          let p = transformAux.getOrigin();
          let q = transformAux.getRotation();

          console.log(`Physics body position: ${p.x()}, ${p.y()}, ${p.z()}`);

          obj.position.set(p.x(), p.y(), p.z());

          let quaternion = new THREE.Quaternion(q.x(), q.y(), q.z(), q.w());
          obj.quaternion.copy(quaternion);
      }
  }
}







