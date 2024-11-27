<script setup>
import { onMounted } from 'vue';
import * as THREE from 'three';

onMounted(() => {
  const appDiv = document.getElementById('app'); 
  // Scene 1: Fullscreen
  const scene1 = new THREE.Scene();
  const camera1 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
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