<script setup>
import { onMounted } from 'vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

onMounted(() => {
  const appDiv = document.getElementById('app'); 
  // Scene 1: Fullscreen
  const scene1 = new THREE.Scene();
  const camera1 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
  const renderer1 = new THREE.WebGLRenderer({ antialias: true });
  renderer1.setSize(window.innerWidth, window.innerHeight);
  renderer1.setClearColor(0x000000); 
  renderer1.domElement.style.position = 'absolute'; 
  renderer1.domElement.style.top = '0';
  renderer1.domElement.style.left = '0';
  renderer1.domElement.style.width = '100%';
  renderer1.domElement.style.height = '100%';
  appDiv.appendChild(renderer1.domElement);

  // Scene 2: Top-right corner
  const scene2 = new THREE.Scene();
  const camera2 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer2 = new THREE.WebGLRenderer({ antialias: true });
  renderer2.setSize(window.innerWidth / 4, window.innerHeight / 2);
  renderer2.setClearColor(0x202020); // Dark gray background
  renderer2.domElement.style.position = 'absolute';
  renderer2.domElement.style.top = '10px';
  renderer2.domElement.style.right = '10px';
  appDiv.appendChild(renderer2.domElement);

  window.addEventListener("resize", () => {
    let adjustedSize = window.innerWidth / window.innerHeight;
    camera1.aspect =adjustedSize;
    camera1.updateProjectionMatrix();
    renderer1.setSize(window.innerWidth, window.innerHeight);
    camera2.aspect = adjustedSize;
    camera2.updateProjectionMatrix();
    renderer2.setSize(window.innerWidth / 4, window.innerHeight / 2);
  });

  const textureLoader = new THREE.TextureLoader();
  const space_background = textureLoader.load('/textures/stars.jpg');
  const sphere_geometry = new THREE.SphereGeometry(1000, 24, 24);

  const sphere_material = new THREE.MeshBasicMaterial({
    map: space_background,
    side: THREE.BackSide
  });

  const background_sphere = new THREE.Mesh(sphere_geometry, sphere_material);
  background_sphere.position.set(0,0,0);
  scene1.add(background_sphere);

  const ambient_light = new THREE.AmbientLight(0x404040);
  scene1.add(ambient_light);

  const controls1 = new OrbitControls( camera1, renderer1.domElement );
  camera1.position.set( 0, 100, 10 );
  controls1.update();

  const loader = new GLTFLoader();
  loader.load('/models/Psyche30Nov.glb', (gltf) => {
    const psyche = gltf.scene;
    psyche.position.set(0,0,0);
    psyche.scale.set(1,1,1);
    scene1.add(psyche);
  }, undefined, (error) => {
    console.error(error);
  });



  // Animation Loop
  const animate = () => {
    requestAnimationFrame(animate);
    renderer1.render(scene1, camera1);
    renderer2.render(scene2, camera2);
  };
  animate();
});
</script>

<template>
  <div id="app"></div>
</template>