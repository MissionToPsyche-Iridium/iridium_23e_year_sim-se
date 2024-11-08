// This file creates the basic 3D environment where our space objects will live.
// It sets up the lighting and draws the paths that planets follow around the Sun.

// We use THREE.js, which is a library that helps us create 3D graphics in web browsers
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

// Helper function to create buttons
function createPanButton(id, text, arrow) {
  const button = document.createElement('div');
  button.style.display = 'flex';
  button.style.flexDirection = 'column';
  button.style.alignItems = 'center';
  button.style.gap = '2px';
  
  const textSpan = document.createElement('span');
  textSpan.textContent = text;
  textSpan.style.fontSize = '14px';
  textSpan.style.color = 'white';
  
  const arrowSpan = document.createElement('span');
  arrowSpan.textContent = arrow;
  arrowSpan.style.fontSize = '14px';
  arrowSpan.style.color = 'white';
  
  button.id = id;
  button.style.padding = '8px 16px';
  button.style.cursor = 'pointer';
  button.style.borderRadius = '15px';
  button.style.border = '1px solid #fff';
  button.style.backgroundColor = 'transparent';
  button.style.transition = 'all 0.3s';
  button.onmouseover = () => button.style.backgroundColor = 'rgba(30,144,255,0.9)';
  button.onmouseout = () => button.style.backgroundColor = 'transparent';
  
  button.appendChild(textSpan);
  button.appendChild(arrowSpan);
  return button;
}

function createPlanetButton(id, text) {
  const button = document.createElement('button');
  button.id = id;
  button.textContent = text;
  button.style.padding = '8px 16px';
  button.style.cursor = 'pointer';
  button.style.fontSize = '14px';
  button.style.fontWeight = 'normal';
  button.style.borderRadius = '15px';
  button.style.border = '1px solid #fff';
  button.style.backgroundColor = 'transparent';
  button.style.color = 'white';
  button.style.transition = 'all 0.3s';
  button.onmouseover = () => {
    button.style.backgroundColor = 'rgba(30,144,255,0.9)';
    button.style.color = '#fff';
  };
  button.onmouseout = () => {
    button.style.backgroundColor = 'transparent';
    button.style.color = 'white';
  };
  button.style.whiteSpace = 'nowrap';
  return button;
}

// This function sets up our 3D space with lights and orbit paths for planets
export function setupScene(scene, orbitalDistances) {
  let isRotating = true;
  let currentModel = null;

  // Add a soft light that brightens everything up a bit, like scattered starlight
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  // Add a bright light coming from one direction, like sunlight
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(10, 10, 10);
  scene.add(directionalLight);

  // Create a gray, see-through material for drawing the paths planets follow
  const orbitMaterial = new THREE.LineBasicMaterial({ color: 0x808080, transparent: true, opacity: 0.5 });

  // Set how much each planet's orbit is tilted compared to a flat plane
  const orbitalInclinations = {
    mercury: 7.004 * Math.PI / 180,  // 7.004 degrees
    venus: 3.394 * Math.PI / 180,    // 3.394 degrees
    earth: 0.0 * Math.PI / 180,      // 0.0 degrees (reference plane)
    mars: 1.850 * Math.PI / 180,     // 1.850 degrees
    jupiter: 1.303 * Math.PI / 180,  // 1.303 degrees
    psyche: 3.095 * Math.PI / 180,   // 3.095 degrees
    uranus: 1 * Math.PI / 180
  };

  // Draw circular paths for each planet and asteroid
  const orbits = {};
  Object.entries(orbitalDistances).forEach(([planet, distance]) => {
    // Create points that will form a circle for the orbit
    const orbitGeometry = new THREE.BufferGeometry();
    const points = [];
    const segments = 128; // More segments = smoother circle
    const inclination = orbitalInclinations[planet];

    // Calculate many points around a circle to create the orbit path
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      points.push(
        distance * Math.cos(theta),
        distance * Math.sin(theta) * Math.sin(inclination),
        distance * Math.sin(theta) * Math.cos(inclination)
      );
    }

    // Create the actual orbit line and add it to our 3D space
    orbitGeometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    const orbit = new THREE.Line(orbitGeometry, orbitMaterial);
    orbits[planet + 'Orbit'] = orbit;
    scene.add(orbit);
  });

  // Create control buttons container
  const container = document.getElementById('container3D');
  const controlsContainer = document.createElement('div');
  controlsContainer.id = 'controls-container';
  controlsContainer.style.position = 'absolute';
  controlsContainer.style.right = '20px';
  controlsContainer.style.bottom = '20px';
  controlsContainer.style.display = 'none'; // Hide initially
  controlsContainer.style.flexDirection = 'column';
  controlsContainer.style.gap = '0px';
  controlsContainer.style.zIndex = '1000';
  container.appendChild(controlsContainer);

  // Create planet buttons container at top
  const planetButtonsContainer = document.createElement('div');
  planetButtonsContainer.style.position = 'absolute';
  planetButtonsContainer.style.top = '20px';
  planetButtonsContainer.style.left = '50%';
  planetButtonsContainer.style.transform = 'translateX(-50%)';
  planetButtonsContainer.style.display = 'none'; // Hide initially
  planetButtonsContainer.style.flexDirection = 'row';
  planetButtonsContainer.style.gap = '10px';
  planetButtonsContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  planetButtonsContainer.style.padding = '8px';
  planetButtonsContainer.style.borderRadius = '20px';
  planetButtonsContainer.style.zIndex = '1000';
  planetButtonsContainer.style.flexWrap = 'nowrap';
  planetButtonsContainer.style.overflowX = 'auto';
  container.appendChild(planetButtonsContainer);

  // Create pan controls
  const panControls = document.createElement('div');
  panControls.style.display = 'flex';
  panControls.style.flexDirection = 'column';
  panControls.style.gap = '5px';
  panControls.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  panControls.style.padding = '10px';
  panControls.style.borderRadius = '10px';

  // Create pan button rows
  const panTopRow = document.createElement('div');
  panTopRow.style.display = 'flex';
  panTopRow.style.justifyContent = 'center';

  const panMiddleRow = document.createElement('div');
  panMiddleRow.style.display = 'flex';
  panMiddleRow.style.justifyContent = 'space-between';

  const panBottomRow = document.createElement('div');
  panBottomRow.style.display = 'flex';
  panBottomRow.style.justifyContent = 'center';

  const panUp = createPanButton('pan-up', 'PAN', '▲');
  const panDown = createPanButton('pan-down', 'PAN', '▼');
  const panLeft = createPanButton('pan-left', 'PAN', '◄');
  const panRight = createPanButton('pan-right', 'PAN', '►');

  // Add pan button event listeners
  panUp.addEventListener('click', () => {
    const camera = scene.getObjectByName('camera');
    if (camera) {
      camera.position.y += 10;
      camera.updateProjectionMatrix();
    }
  });

  panDown.addEventListener('click', () => {
    const camera = scene.getObjectByName('camera');
    if (camera) {
      camera.position.y -= 10;
      camera.updateProjectionMatrix();
    }
  });

  panLeft.addEventListener('click', () => {
    const camera = scene.getObjectByName('camera');
    if (camera) {
      camera.position.x -= 10;
      camera.updateProjectionMatrix();
    }
  });

  panRight.addEventListener('click', () => {
    const camera = scene.getObjectByName('camera');
    if (camera) {
      camera.position.x += 10;
      camera.updateProjectionMatrix();
    }
  });

  panTopRow.appendChild(panUp);
  panMiddleRow.appendChild(panLeft);
  panMiddleRow.appendChild(panRight);
  panBottomRow.appendChild(panDown);

  panControls.appendChild(panTopRow);
  panControls.appendChild(panMiddleRow);
  panControls.appendChild(panBottomRow);

  // Create zoom controls
  const zoomControls = document.createElement('div');
  zoomControls.style.display = 'flex';
  zoomControls.style.flexDirection = 'column';
  zoomControls.style.gap = '5px';
  zoomControls.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  zoomControls.style.padding = '10px';
  zoomControls.style.borderRadius = '10px';

  const zoomIn = createPanButton('zoom-in', 'Zoom In');
  const zoomOut = createPanButton('zoom-out', 'Zoom Out');

  // Add zoom button event listeners
  zoomIn.addEventListener('click', () => {
    const camera = scene.getObjectByName('camera');
    if (camera) {
      camera.position.z -= 10;
      camera.updateProjectionMatrix();
    }
  });

  zoomOut.addEventListener('click', () => {
    const camera = scene.getObjectByName('camera');
    if (camera) {
      camera.position.z += 10;
      camera.updateProjectionMatrix();
    }
  });

  zoomControls.appendChild(zoomIn);
  zoomControls.appendChild(zoomOut);

  // Create planet buttons
  const sunBtn = createPlanetButton('button-sun', 'Sun');
  const mercuryBtn = createPlanetButton('button-mercury', 'Mercury');
  const venusBtn = createPlanetButton('button-venus', 'Venus');
  const earthBtn = createPlanetButton('button-earth', 'Earth');
  const marsBtn = createPlanetButton('button-mars', 'Mars');
  const psycheBtn = createPlanetButton('button-psyche', 'Psyche');
  const jupiterBtn = createPlanetButton('button-jupiter', 'Jupiter');
  const saturnBtn = createPlanetButton('button-saturn', 'Saturn');
  const uranusBtn = createPlanetButton('button-uranus', 'Uranus');
  const neptuneBtn = createPlanetButton('button-neptune', 'Neptune');

  // Add planet button event listeners
  const planetButtonsList = [
    {btn: sunBtn, name: 'sun'},
    {btn: mercuryBtn, name: 'mercury'},
    {btn: venusBtn, name: 'venus'},
    {btn: earthBtn, name: 'earth'},
    {btn: marsBtn, name: 'mars'},
    {btn: psycheBtn, name: 'psyche'},
    {btn: jupiterBtn, name: 'jupiter'},
    {btn: saturnBtn, name: 'saturn'},
    {btn: uranusBtn, name: 'uranus'},
    {btn: neptuneBtn, name: 'neptune'}
  ];

  planetButtonsList.forEach(({btn, name}) => {
    btn.addEventListener('click', () => {
      currentModel = name;
      const object = scene.getObjectByName(name);
      const camera = scene.getObjectByName('camera');
      if (object && camera) {
        const objectPosition = object.position;
        const distance = orbitalDistances[name];
        camera.position.set(objectPosition.x, objectPosition.y + distance/2, objectPosition.z + distance);
        camera.lookAt(objectPosition);
        camera.updateProjectionMatrix();
      }
    });
  });

  planetButtonsContainer.appendChild(sunBtn);
  planetButtonsContainer.appendChild(mercuryBtn);
  planetButtonsContainer.appendChild(venusBtn);
  planetButtonsContainer.appendChild(earthBtn);
  planetButtonsContainer.appendChild(marsBtn);
  planetButtonsContainer.appendChild(psycheBtn);
  planetButtonsContainer.appendChild(jupiterBtn);
  planetButtonsContainer.appendChild(saturnBtn);
  planetButtonsContainer.appendChild(uranusBtn);
  planetButtonsContainer.appendChild(neptuneBtn);

  // Create utility buttons
  const utilityButtons = document.createElement('div');
  utilityButtons.style.display = 'flex';
  utilityButtons.style.flexDirection = 'column';
  utilityButtons.style.gap = '5px';
  utilityButtons.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  utilityButtons.style.padding = '10px';
  utilityButtons.style.borderRadius = '10px';

  const toggleAnimationBtn = createPanButton('toggle-animation', 'Toggle Animation');
  const resetBtn = createPanButton('reset', 'Reset');

  // Add utility button event listeners
  toggleAnimationBtn.addEventListener('click', () => {
    // Simulate pressing 'p' key to toggle animation
    const event = new KeyboardEvent('keydown', { key: 'p' });
    document.dispatchEvent(event);
  });

  resetBtn.addEventListener('click', () => {
    const camera = scene.getObjectByName('camera');
    if (camera) {
      camera.position.set(0, 200, 550);
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
      currentModel = null;
      isRotating = true;
    }
  });

  utilityButtons.appendChild(toggleAnimationBtn);
  utilityButtons.appendChild(resetBtn);

  // Add controls to container in new order
  controlsContainer.appendChild(panControls);
  controlsContainer.appendChild(zoomControls);
  controlsContainer.appendChild(utilityButtons);

  // Show controls and planet buttons only after fullscreen
  document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
      controlsContainer.style.display = 'flex';
      planetButtonsContainer.style.display = 'flex';
    } else {
      controlsContainer.style.display = 'none';
      planetButtonsContainer.style.display = 'none';
    }
  });

  return {scene, isRotating, currentModel};
}
