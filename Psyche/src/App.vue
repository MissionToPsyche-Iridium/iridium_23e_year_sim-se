<script setup>
import { onMounted } from 'vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

onMounted(() => {
  let renderer1, renderer2, scene1Container, scene2Container;

  const appDiv = document.getElementById('app'); 
  const camXElem = document.getElementById('cam-x');
  const camYElem = document.getElementById('cam-y');
  const camZElem = document.getElementById('cam-z');
  scene2Container = document.getElementById('scene2-container');

  // Initialize scene1Container
  scene1Container = document.createElement('div');
  scene1Container.id = 'scene1-container';
  scene1Container.style.position = 'absolute';
  scene1Container.style.top = '0';
  scene1Container.style.left = '0';
  scene1Container.style.width = '100%';
  scene1Container.style.height = '100%';
  scene1Container.style.zIndex = '5';
  scene1Container.style.transition = 'all 0.5s ease';
  appDiv.appendChild(scene1Container);

  let isExpanded = false; // Track toggle state

  // Scene 1: Fullscreen
  const scene1 = new THREE.Scene();
  const camera1 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000000);
  renderer1 = new THREE.WebGLRenderer({ antialias: true });
  renderer1.setSize(window.innerWidth, window.innerHeight);
  renderer1.setClearColor(0x000000); 
  renderer1.domElement.style.position = 'absolute'; 
  scene1Container.appendChild(renderer1.domElement);

  // Scene 2: Top-right corner
  const scene2 = new THREE.Scene();
  const camera2 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
  renderer2 = new THREE.WebGLRenderer({ antialias: true });
  renderer2.setSize(window.innerWidth / 4, window.innerHeight / 2);
  renderer2.setClearColor(0x202020); 
  renderer2.domElement.style.position = 'absolute';
  renderer2.domElement.style.width = '100%';
  renderer2.domElement.style.height = '100%';
  scene2Container.appendChild(renderer2.domElement);

  // Handle window resizing
  window.addEventListener("resize", () => {
    const adjustedSize = window.innerWidth / window.innerHeight;
    camera1.aspect = adjustedSize;
    camera1.updateProjectionMatrix();
    renderer1.setSize(window.innerWidth, window.innerHeight);
    camera2.aspect = adjustedSize;
    camera2.updateProjectionMatrix();
    renderer2.setSize(window.innerWidth / 4, window.innerHeight / 2);
  });

  // Lighting and controls for scene1
  const ambient_light = new THREE.AmbientLight(0x404040, 3);
  scene1.add(ambient_light);

  const controls1 = new OrbitControls(camera1, renderer1.domElement);
  camera1.position.set(-3.25, 6.5, 6.5);
  controls1.update();

  // Load the GLTF model
  let psyche;
  const loader = new GLTFLoader();
  loader.load('/models/16p_dec2.glb', (gltf) => {
    psyche = gltf.scene;
    psyche.position.set(0, 0, 0);
    psyche.scale.set(1, 1, 1);
    psyche.traverse((node) => {
      if (node.isMesh) {
        node.material = new THREE.MeshStandardMaterial({
          color: 0xffffff, 
          metalness: 0.4,  
          roughness: 0.6,  
          envMapIntensity: 1.0, 
        });
      }
    });

    scene1.add(psyche);  
  }, undefined, (error) => {
    console.error(error);
  });

  const sunlight = new THREE.DirectionalLight(0xfff6e0, 1.5); 
  sunlight.position.set(50, 100, 50);
  scene1.add(sunlight);

  const hemiLight = new THREE.HemisphereLight(0x87CEEB, 0x555555, 0.5);
  scene1.add(hemiLight);

  scene1.background = new THREE.Color(0xFFFFFF);

  // Arrow Click Logic
  document.getElementById('arrow-overlay').addEventListener('click', () => {
    if (!isExpanded) {
      // Expand Scene 2
      scene2Container.style.top = '0';
      scene2Container.style.left = '0';
      scene2Container.style.width = '100%';
      scene2Container.style.height = '100%';
      scene2Container.style.zIndex = '10';

      // Shrink Scene 1 and move to bottom-left
      scene1Container.style.top = 'auto';
      scene1Container.style.left = '10px';
      scene1Container.style.bottom = '10px';
      scene1Container.style.width = '25%';
      scene1Container.style.height = '50%';
      scene1Container.style.zIndex = '15';
    } else {
      // Reset to Original Layout
      scene2Container.style.top = '10px';
      scene2Container.style.left = 'auto';
      scene2Container.style.right = '10px';
      scene2Container.style.width = '25%';
      scene2Container.style.height = '50%';

      scene1Container.style.top = '0';
      scene1Container.style.left = '0';
      scene1Container.style.width = '100%';
      scene1Container.style.height = '100%';
      scene1Container.style.zIndex = '5';
    }
    isExpanded = !isExpanded;
  });

  // Animation Loop
  const animate = () => {
    requestAnimationFrame(animate);
    if (psyche) {
      psyche.rotation.x += 0.007; 
      psyche.rotation.y += 0.001;
      psyche.rotation.z += 0.001;
    }
    camXElem.textContent = camera1.position.x.toFixed(2);
    camYElem.textContent = camera1.position.y.toFixed(2);
    camZElem.textContent = camera1.position.z.toFixed(2);
    renderer1.render(scene1, camera1);
    renderer2.render(scene2, camera2);
  };
  animate();
});
</script>



<template>
  <div id="app"></div>

  <!-- Camera Info for Scene 1 -->
  <div id="camera-info" style="position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); background: rgba(255, 255, 255, 0.8); padding: 10px; border-radius: 5px; font-family: Arial, sans-serif; font-size: 14px; text-align: center; color: black; z-index: 10;">
    Camera Position: <br />
    x: <span id="cam-x"></span> <br />
    y: <span id="cam-y"></span> <br />
    z: <span id="cam-z"></span>
  </div>

  <!-- Renderer 2 Container -->
  <div id="scene2-container" style="position: absolute; top: 10px; right: 10px; width: 25%; height: 50%; z-index: 10; transition: all 0.5s ease;">
    <div id="arrow-overlay" style="position: absolute; top: 0; left: 0; z-index: 15;">
      <span class="material-icons" style="color: orange; font-size: 36px; cursor: pointer;">arrow_left</span>
    </div>
  </div>
</template>
