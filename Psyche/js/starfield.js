// Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

// Function to create starfield and add it to the scene
export function createStarfield(scene) {
  // Create stars array to store all of the created stars
  var stars = new Array(0);
  // Minimum distance from the center
  var minDistance = 1000;
  // Maximum distance from the center
  var maxDistance = 20000;

  // For loop to place the stars between a sphere of 1000 and 20000
  for (var i = 0; i < 10000; i++) {
    let r = THREE.Math.randFloat(minDistance, maxDistance);
    let theta = THREE.Math.randFloat(0, Math.PI * 2);
    // Use acos to ensure even distribution, just PI makes the sphere poles have too many stars
    let phi = Math.acos(THREE.Math.randFloat(-1, 1));
    // Converting spherical coordinates to cartesian 
    let x = r * Math.sin(phi) * Math.cos(theta);
    let y = r * Math.sin(phi) * Math.sin(theta);
    let z = r * Math.cos(phi);
    // Add the stars to the array
    stars.push(x, y, z);
  }
  // Define the stars position the the BufferGeometry object
  var starsGeometry = new THREE.BufferGeometry();
  starsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(stars, 3));

  // Load the star texture image for each star
  const textureLoader = new THREE.TextureLoader();
  const particleTexture = textureLoader.load('./images/model_images/star.png');

  // Define how the stars will appear at their positions
  var starsMaterial = new THREE.PointsMaterial({
    map: particleTexture, // Texture
    size: 4.0, // Size of the particles
    sizeAttenuation: true, // size of the particle will be smaller as it gets further away from the camera
    vertexColors: false // leave false for better rendering
  });

  // Create the starField object with the geometry and materials and add to the scene
  var starField = new THREE.Points(starsGeometry, starsMaterial);
  scene.add(starField);
}
