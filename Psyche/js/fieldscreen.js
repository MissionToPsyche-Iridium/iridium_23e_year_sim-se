// Import Three.js from CDN
import * as THREE from 'https://unpkg.com/three@0.157.0/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.157.0/examples/jsm/controls/OrbitControls.js';

// Create scene, camera and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load field image texture
const textureLoader = new THREE.TextureLoader();
const fieldTexture = textureLoader.load('images/main_images/field.png');

// Create a spherical geometry for the skybox
const geometry = new THREE.SphereGeometry(500, 60, 40);
