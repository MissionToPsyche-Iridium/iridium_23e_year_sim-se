import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { getPhysicsWorld, getAmmo } from './physicsWorld.js';

let loader = new GLTFLoader();
let physicsObjects = [];

async function loadGLBModel(scene, path, position, scale, isStatic = false, mass = 1) {
  return new Promise((resolve, reject) => {
    loader.load(path, async (gltf) => {
      let model = gltf.scene;
      model.position.set(position.x, position.y, position.z);
      model.scale.set(scale, scale, scale);
      scene.add(model);

      let AmmoLib = getAmmo(); 
      if (!isStatic) {
        let shape = new AmmoLib.btBoxShape(new AmmoLib.btVector3(1, 1, 1));
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
  await loadGLBModel(scene, '/models/astronaut.glb', { x: 0, y: 5, z: 0 }, 1, false, 5);
  await loadGLBModel(scene, '/models/stopSign.glb', { x: 2, y: 5, z: -3 }, 0.5, false, 1);
  await loadGLBModel(scene, '/models/nasaLogo.glb', { x: -2, y: 5, z: 3 }, 0.5, false, 1);
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
