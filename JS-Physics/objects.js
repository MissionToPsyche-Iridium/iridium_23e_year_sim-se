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
        characterMixer = new AnimationMixer(model);
        let animationNames = [];

        gltf.animations.forEach((clip) => {
          let action = characterMixer.clipAction(clip);
          characterActions[clip.name] = action;
          animationNames.push(clip.name);
        });

        console.log("Available Animations:", animationNames);

        if (characterActions["idle"]) {
          currentAction = characterActions["idle"];
          currentAction.play();
          console.log("Starting animation: idle");
        } else {
          console.log("No idle animation found. Defaulting to first animation.");
          if (animationNames.length > 0) {
            currentAction = characterActions[animationNames[0]];
            currentAction.play();
          }
        }

        mixers.push(characterMixer);
      }

      let AmmoLib = getAmmo();

      if (!isStatic) {
        let shape = new AmmoLib.btBoxShape(new AmmoLib.btVector3(0.5, 1, 0.5));
        let transform = new AmmoLib.btTransform();
        transform.setIdentity();
        transform.setOrigin(new AmmoLib.btVector3(position.x, position.y, position.z));

        let motionState = new AmmoLib.btDefaultMotionState(transform);
        let localInertia = new AmmoLib.btVector3(0, 0, 0);
        shape.calculateLocalInertia(mass, localInertia);

        let rbInfo = new AmmoLib.btRigidBodyConstructionInfo(mass, motionState, shape, localInertia);
        let body = new AmmoLib.btRigidBody(rbInfo);
        getPhysicsWorld().addRigidBody(body);

        if (isCharacter) {
          characterBody = body; // Store reference to physics body
        }

        physicsObjects.push({ mesh: model, body });
      }

      resolve(model);
    }, undefined, reject);
  });
}



// Load all models
export async function loadSceneModels(scene) {
  createGround(scene);
  await loadGLBModel(scene, '/models/charAnim.glb', { x: 0, y: 0, z: 0 }, 1, false, 5, true); 
  await loadGLBModel(scene, '/models/stopSign.glb', { x: 2, y: 0, z: -3 }, 1, false, 1);
  await loadGLBModel(scene, '/models/nasaLogo.glb', { x: 0, y: 0, z: -30}, 2, false, 1);
}

// Switch animations
export function switchCharacterAnimation(animationName) {
  console.log("Available animations:", Object.keys(characterActions));

  if (characterActions[animationName]) {
    console.log(`Switching to animation: ${animationName}`);

    if (currentAction) {
      currentAction.stop();
    }

    currentAction = characterActions[animationName];
    currentAction.reset().play();
    
    if (animationName === "jump" || animationName === "backflip") {
      currentAction.setLoop(THREE.LoopOnce);
      currentAction.clampWhenFinished = true;
      currentAction.onFinish = () => switchCharacterAnimation("idle");
    } else {
      currentAction.setLoop(THREE.LoopRepeat);
      currentAction.setEffectiveTimeScale(1);
    }
  } else {
    console.warn(`Animation "${animationName}" not found.`);
  }
}

// Physics update
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

