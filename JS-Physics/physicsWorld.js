let physicsWorld;
let AmmoLib;

async function loadAmmo() {
  AmmoLib = await import('/public/ammo/ammo.js');
  AmmoLib = await AmmoLib.default();
}

async function initPhysicsWorld() {
  await loadAmmo();

  let collisionConfiguration = new AmmoLib.btDefaultCollisionConfiguration(),
      dispatcher = new AmmoLib.btCollisionDispatcher(collisionConfiguration),
      broadphase = new AmmoLib.btDbvtBroadphase(),
      solver = new AmmoLib.btSequentialImpulseConstraintSolver();

  physicsWorld = new AmmoLib.btDiscreteDynamicsWorld(dispatcher, broadphase, solver, collisionConfiguration);
  physicsWorld.setGravity(new AmmoLib.btVector3(0, -9.81, 0));

  console.log("Ammo.js physics world initialized");
}

function getPhysicsWorld() {
  return physicsWorld;
}

function getAmmo() {
  return AmmoLib;
}

export { initPhysicsWorld, getPhysicsWorld, getAmmo };
