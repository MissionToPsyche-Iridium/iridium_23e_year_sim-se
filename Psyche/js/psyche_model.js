// Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

document.addEventListener("DOMContentLoaded", () => {
    const scene = new THREE.Scene();
    const container = document.getElementById('containerOne');
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const initialCameraPosition = new THREE.Vector3(0, 0, 30);
    camera.position.copy(initialCameraPosition);
    const initialCameraRotation = camera.rotation.clone();

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = true;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.update();

    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(500, 500, 500);
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x333333, 0.5);
    scene.add(ambientLight);

    const loader = new GLTFLoader();
    let marsObject, psycheObject, jupiterObject, sunObject, mercuryObject, venusObject;
    let isRotating = true;
    let currentModel = null;

    // Load models
    loader.load('models/psyche/Psyche.glb', (gltf) => {
        psycheObject = gltf.scene;
        fitObjectToContainer(psycheObject);
        scene.add(psycheObject);
        console.log("Psyche model loaded.");
    }, undefined, error => console.error('Error loading Psyche model:', error));

    loader.load('models/Mars/Mars.glb', (gltf) => {
        marsObject = gltf.scene;
        fitObjectToContainer(marsObject);
        marsObject.position.set(-100, 0, 0);
        scene.add(marsObject);
        console.log("Mars model loaded.");
    }, undefined, error => console.error('Error loading Mars model:', error));

    loader.load('models/jupiter/Jupiter.glb', (gltf) => {
        jupiterObject = gltf.scene;
        fitObjectToContainer(jupiterObject);
        jupiterObject.position.set(0, 0, -100);
        scene.add(jupiterObject);
        console.log("Jupiter model loaded.");
    }, undefined, error => console.error('Error loading Jupiter model:', error));

    loader.load('models/sun/sun_only.glb', (gltf) => {
        sunObject = gltf.scene;
        fitObjectToContainer(sunObject);
        sunObject.position.set(0, 0, 400);
        scene.add(sunObject);
        console.log("Sun model loaded.");
    }, undefined, error => console.error('Error loading Sun model:', error));

    loader.load('models/Mercury/Mercury.glb', (gltf) => {
        mercuryObject = gltf.scene;
        fitObjectToContainer(mercuryObject);
        mercuryObject.position.set(200, 0, 0);
        scene.add(mercuryObject);
        console.log("Mercury model loaded.");
    }, undefined, error => console.error('Error loading Mercury model:', error));

    loader.load('models/Venus/Venus.glb', (gltf) => {
        venusObject = gltf.scene;
        fitObjectToContainer(venusObject);
        venusObject.position.set(300, 0, 0);
        scene.add(venusObject);
        console.log("Venus model loaded.");
    }, undefined, error => console.error('Error loading Venus model:', error));

    // Utility function to fit model within the container
    function fitObjectToContainer(object) {
        const boundingBox = new THREE.Box3().setFromObject(object);
        const size = new THREE.Vector3();
        boundingBox.getSize(size);
        const maxDimension = Math.max(size.x, size.y, size.z);
        const scaleFactor = window.innerWidth <= 500 ? 19 / maxDimension : 35 / maxDimension;
        object.scale.set(scaleFactor, scaleFactor, scaleFactor);
        const center = new THREE.Vector3();
        boundingBox.getCenter(center);
        object.position.sub(center);
    }

    window.addEventListener("resize", () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });

    function animate() {
        requestAnimationFrame(animate);

        if (isRotating) {
            if (marsObject) marsObject.rotation.x += 0.05;
            if (psycheObject) psycheObject.rotation.y += 0.005;
            if (jupiterObject) jupiterObject.rotation.y += 0.005;
            if (mercuryObject) mercuryObject.rotation.y += 0.005;
            if (venusObject) venusObject.rotation.y += 0.005;
        }

        controls.update();
        renderer.render(scene, camera);
    }
    animate();

    // Pan button functionality
document.getElementById("pan-up").addEventListener("click", () => {
    camera.position.y += 1;
    controls.target.y += 1;
    controls.update();
});

document.getElementById("pan-down").addEventListener("click", () => {
    camera.position.y -= 1;
    controls.target.y -= 1;
    controls.update();
});

document.getElementById("pan-left").addEventListener("click", () => {
    if (currentModel===jupiterObject){
        camera.position.x += 1;
        controls.target.x += 1; 
    } else if (currentModel===marsObject){
        camera.position.z -= 1;
        controls.target.z -= 1; 
    } else {
    camera.position.x -= 1;
    controls.target.x -= 1;
    }
    controls.update();
});

document.getElementById("pan-right").addEventListener("click", () => {
    if (currentModel===jupiterObject){
        camera.position.x -= 1;
        controls.target.x -= 1; 
    } else if (currentModel===marsObject){
        camera.position.z += 1;
        controls.target.z += 1; 
    } else {
    camera.position.x += 1;
    controls.target.x += 1;
    }
    controls.update();
});



    // Zoom In and Zoom Out functionality
    const zoomInButton = document.getElementById("zoom-in");
    const zoomOutButton = document.getElementById("zoom-out");
    const zoomStep = 10;

    if (zoomInButton) {
        zoomInButton.addEventListener("click", () => {
            if (currentModel === marsObject) {
                camera.position.x -= Math.sign(camera.position.x) * zoomStep;
            } else {
                camera.position.z -= Math.sign(camera.position.z) * zoomStep;
            }
            camera.updateProjectionMatrix();
        });
    }

    if (zoomOutButton) {
        zoomOutButton.addEventListener("click", () => {
            if (currentModel === marsObject) {
                camera.position.x += Math.sign(camera.position.x) * zoomStep;
            } else {
                camera.position.z += Math.sign(camera.position.z) * zoomStep;
            }
            camera.updateProjectionMatrix();
        });
    }

    // Reset button functionality
    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", () => {
        camera.position.copy(initialCameraPosition);
        camera.rotation.copy(initialCameraRotation);
        controls.target.set(0, 0, 0);
        isRotating = true;
        currentModel = null;
        controls.update();
    });

    // Toggle rotation functionality
    const toggleRotateButton = document.getElementById("toggle-rotate");
    toggleRotateButton.addEventListener("click", () => {
        isRotating = !isRotating;
        console.log("Rotation toggled:", isRotating ? "On" : "Off");
    });

    // Button functionality for centering models
    document.getElementById("button-psyche").addEventListener("click", () => {
        currentModel = psycheObject;
        camera.position.set(0, 0, 30);
        controls.target.set(0, 0, 0);
        controls.update();
    });
    document.getElementById("button-mars").addEventListener("click", () => {
        currentModel = marsObject;
        camera.position.set(-135, 0, 0);
        controls.target.set(-100, 0, 0);
        controls.update();
    });
    document.getElementById("button-jupiter").addEventListener("click", () => {
        currentModel = jupiterObject;
        camera.position.set(0, 0, -150);
        controls.target.set(0, 0, -100);
        controls.update();
    });
    document.getElementById("button-sun").addEventListener("click", () => {
        currentModel = sunObject;
        camera.position.set(0, 0, 500);
        controls.target.set(0, 0, 400);
        controls.update();
    });
    document.getElementById("button-mercury").addEventListener("click", () => {
        currentModel = mercuryObject;
        camera.position.set(235, 0, 0);
        controls.target.set(200, 0, 0);
        controls.update();
    });
    document.getElementById("button-venus").addEventListener("click", () => {
        currentModel = venusObject;
        camera.position.set(335, 0, 0);
        controls.target.set(300, 0, 0);
        controls.update();
    });

    // Fullscreen button handling
    const fullscreenButton = document.getElementById('fullscreen');
    if (fullscreenButton) {
        fullscreenButton.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                container.requestFullscreen();
                renderer.setSize(window.innerWidth, window.innerHeight);
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
            } else {
                document.exitFullscreen();
                renderer.setSize(container.clientWidth, container.clientHeight);
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
            }
        });
    }
});

/*****************************************************
 * listener "mouseover"
 * 
 * This listener is invoked when the mouse hovers over the information button. It will change the logo
 * displaying an alternative colored information button
 * 
 * arguments:
 *  event - mouse hovers over the information button
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  The information button will change
 * 
 */
document.getElementById('info').addEventListener('mouseover', function() {
    document.getElementById('info_button').src = "images/main_images/info_button_color.png";
  });
  
  /*****************************************************
   * listener "mouseout"
   * 
   * This listener is invoked when the mouse moves away from the information button. It will change the logo
   * displaying the original information button
   * 
   * arguments:
   *  event - mouse hovers over the information button
   * 
   * returns:
   *  nothing
   * 
   * changes: 
   *  The information button will change
   * 
   */
  document.getElementById('info').addEventListener('mouseout', function() {
    document.getElementById('info_button').src = "images/main_images/info_button.png";
  });
  
  /*****************************************************
   * listener "mouseover"
   * 
   * This listener is invoked when the mouse hovers over the information button. It will change the logo
   * displaying an alternative colored information button
   * 
   * arguments:
   *  event - mouse hovers over the information button
   * 
   * returns:
   *  nothing
   * 
   * changes: 
   *  The information button will change
   * 
   */
  document.getElementById('fullscreen').addEventListener('mouseover', function() {
    document.getElementById('fullscreen_button').src = "images/main_images/full_screen_bracket_color.png";
  });
  
  /*****************************************************
   * listener "mouseout"
   * 
   * This listener is invoked when the mouse moves away from the information button. It will change the logo
   * displaying the original information button
   * 
   * arguments:
   *  event - mouse hovers over the information button
   * 
   * returns:
   *  nothing
   * 
   * changes: 
   *  The information button will change
   * 
   */
  document.getElementById('fullscreen').addEventListener('mouseout', function() {
    document.getElementById('fullscreen_button').src = "images/main_images/full_screen_bracket.png";
  });