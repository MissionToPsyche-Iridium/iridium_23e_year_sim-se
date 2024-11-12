/*
* This model.js creates a scene that is rendered and displayed on a webpage. 
* 
* Class:      SER 401
* Team:       35
* Project:    NASA Psyche Mission: Year on Psyche Simulation
* Authors:    Armando Arratia, Dan McNeil, Jenny Potocki, Josh Anselm, Tyler Brown
* Date:       11/8/24
* Revision:   1.1
*
*
*/

/*
========================================================================================================
File Start
========================================================================================================
*/

/*****************************************************
 * IMPORTS
 * 
 * Importing the needed libraries 
 *  THREE - JavaScript Animation library 
 *  OrbitalControls - Camera control around scene objects
 *  GLTFLoader - Loading and displaying 3D models
 *  
 */
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('containerOne');
    if (!container) {
        console.error("Container element with ID 'containerOne' not found.");
        return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    let Sun, selectedPlanet;
    const planets = {};
    let orbitActive = true;
    let isInspecting = false;
    let activePlanet = "psyche";

    const toggleButton = document.getElementById("toggle-rotate");
    const panSpeed = 2;
    const zoomStep = 5;

    const screenWidth = window.innerWidth;
    const iPhoneSE = 375;
    const iPhone14ProMax = 430;
    const iPadMini = 768;
    const iPadAir = 820;
    const iPadPro = 1024;
    const p960 = 1280;
    const p1080 = 1920;
    const p1440 = 2560;
    const p2160 = 3840;
    const p2160Wide = 5120;



    const getZoomDistances = () => {
        const screenWidth = window.innerWidth;
    
        if (screenWidth <= iPhoneSE) {
            return {
                sun: 80,
            // mercury: 20,
                earth: 55,
                mars: 65,
                psyche: 25,
                jupiter: 60,
            // saturn: 20,
            // uranus: 20,
            // neptune: 20,
            // pluto: 20
            };
        } else if (screenWidth <= iPhone14ProMax) {
            return {
                sun: 65,
            // mercury: 20,
                earth: 30,
                mars: 50,
                psyche: 20,
                jupiter: 45,
            // saturn: 20,
            // uranus: 20,
            // neptune: 20,
            // pluto: 20
            };
        } else if (screenWidth <= iPadMini) {
            return {
                sun: 55,
            // mercury: 20,
                earth: 30,
                mars: 40,
                psyche: 15,
                jupiter: 40,
            // saturn: 20,
            // uranus: 20,
            // neptune: 20,
            // pluto: 20
            };
        } else if (screenWidth <= iPadAir) {
            return {
                sun: 50,
            // mercury: 20,
                earth: 35,
                mars: 45,
                psyche: 12.5,
                jupiter: 35,
            // saturn: 20,
            // uranus: 20,
            // neptune: 20,
            // pluto: 20
            };
        } else if (screenWidth <= iPadPro) {
            return {
                sun: 45,
            // mercury: 20,
                earth: 30,
                mars: 40,
                psyche: 12,
                jupiter: 30,
            // saturn: 20,
            // uranus: 20,
            // neptune: 20,
            // pluto: 20
            }
        } else if (screenWidth <= p2160Wide) {
            return {
                sun: 30,
                // mercury: 20,
                    earth: 15,
                    mars: 20,
                    psyche: 7.5,
                    jupiter: 17.5,
                // saturn: 20,
                // uranus: 20,
                // neptune: 20,
                // pluto: 20
                }
        } else {
            return {
                sun: 35,
                // mercury: 20,
                    earth: 20,
                    mars: 30,
                    psyche: 10,
                    jupiter: 20,
                // saturn: 20,
                // uranus: 20,
                // neptune: 20,
                // pluto: 20
                }
        }
    };
    
    const zoomDistances = getZoomDistances();
    

    // Load Sun Model
    loader.load('models/sun/sun.glb', (gltf) => {
        Sun = gltf.scene;
        Sun.position.set(0, 0, 0);
        Sun.scale.set(0.0015, 0.0015, 0.0015);
        Sun.name = "Sun";
        scene.add(Sun);

        // Add the Sun to the planets object for interaction
        planets["sun"] = { object: Sun, orbitRadius: 0, angle: 0, speed: 0 };

        // Add a PointLight at the Sun's position to simulate sunlight
        const sunLight = new THREE.PointLight(0xffffff, 2, 1000);
        sunLight.position.copy(Sun.position);
        scene.add(sunLight);
    });

    const loadPlanet = (name, path, orbitRadius, scale, speed) => {
        loader.load(path, (gltf) => {
            const planet = gltf.scene;
            planet.position.set(orbitRadius, 0, 0);
            planet.scale.set(scale, scale, scale);
            planet.name = name;
            scene.add(planet);
            planets[name.toLowerCase()] = { object: planet, orbitRadius, angle: 0, speed };

            if (name.toLowerCase() === "psyche") {
                selectedPlanet = planets["psyche"];
                isInspecting = false;

                const psycheZoom = zoomDistances["psyche"];
                camera.position.set(
                    selectedPlanet.object.position.x + psycheZoom,
                    selectedPlanet.object.position.y + psycheZoom,
                    selectedPlanet.object.position.z + psycheZoom
                );
                camera.lookAt(selectedPlanet.object.position);

                toggleButton.textContent = "Inspect Psyche";
            }
        });
    };

    // Set Mars and Psyche with different orbits and speeds
   // loadPlanet("Mercury", "models/mercury/mercury.glb", 38, 1, 0.005);
  //  loadPlanet("Venus", "models/venus/venus.glb", 67, 6, 0.005);
    loadPlanet("Earth", "models/earth/earth.glb", 149, 6, 0.005);
    loadPlanet("Mars", "models/Mars/Mars.glb", 228, 1, 0.008);
    loadPlanet("Psyche", "models/psyche/Psyche.glb", 378, 1, 0.015);
    loadPlanet("Jupiter", "models/jupiter/jupiter.glb", 778, 1 , 0.009);
   // loadPlanet("Saturn", "models/saturn/saturn.glb", 1400, 1, 0.005);
   // loadPlanet("Uranus", "models/uranus/uranus.glb", 2900, 1, 0.005);
   // loadPlanet("Neptune", "models/neptune/neptune.glb", 4500, 1, 0.005);
   // loadPlanet("Pluto", "models/pluto/pluto.glb", 5900, 1, 0.005);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.enablePan = true;

    const zoomToPlanet = (planet) => {
        const planetName = planet.object.name.toLowerCase();
        const zoomDistance = zoomDistances[planetName] || 20;

        camera.position.set(
            planet.object.position.x + zoomDistance,
            planet.object.position.y + zoomDistance,
            planet.object.position.z + zoomDistance
        );
        camera.lookAt(planet.object.position);

        controls.target.copy(planet.object.position);
        controls.update();
    };

    // Close hamburger menu function
    const closeHamburgerMenu = () => {
        if (planetMenu.classList.contains("menu-open")) {
            planetMenu.classList.remove("menu-open");
            planetHamburger.classList.remove("is-open");
        }
    };

    const selectPlanet = (planetName) => {
        activePlanet = planetName;
        console.log(activePlanet + " has been selected");
        if (planets[planetName]) {
            selectedPlanet = planets[planetName];
            isInspecting = false;
            zoomToPlanet(selectedPlanet);
            toggleButton.textContent = `Inspect ${planetName.charAt(0).toUpperCase() + planetName.slice(1)}`;

             // Close the hamburger menu if it is open
            closeHamburgerMenu();
        } else {
            console.warn(`Planet ${planetName} not found in planets object.`);
        }
    };

    // Event listener for planet buttons
    document.querySelectorAll(".horizontal-buttons").forEach(button => {
        button.addEventListener("click", () => {
            const planetName = button.id.replace("button-", "").toLowerCase();
            selectPlanet(planetName);
        });
    });

    // Event listener for the toggle button
    toggleButton.addEventListener("click", () => {
        isInspecting = !isInspecting;

        if (isInspecting && selectedPlanet) {
            orbitActive = false;
            toggleButton.textContent = "Restart Orbit";

            zoomToPlanet(selectedPlanet);
        } else if (selectedPlanet) {
            orbitActive = true;
            const planetName = selectedPlanet.object.name.charAt(0).toUpperCase() + selectedPlanet.object.name.slice(1);
            toggleButton.textContent = `Inspect ${planetName}`;

            zoomToPlanet(selectedPlanet);
        }
    });

    // Add an event listener for the reset button
    document.getElementById("reset").addEventListener("click", () => {

        closeHamburgerMenu();
        
        selectedPlanet = planets["psyche"];
        activePlanet="psyche";
        console.log(activePlanet + " has been selected");
        isInspecting = false;
        orbitActive = true;
        
        const psycheZoom = zoomDistances["psyche"];
        camera.position.set(
            selectedPlanet.object.position.x + psycheZoom,
            selectedPlanet.object.position.y + psycheZoom,
            selectedPlanet.object.position.z + psycheZoom
        );
        camera.lookAt(selectedPlanet.object.position);

        toggleButton.textContent = "Inspect Psyche";
        controls.target.copy(selectedPlanet.object.position);
        controls.update();
    });

    const planetHamburgerIcon = document.getElementById('planet-hamburger');

    const hideHamburgerButton = () => {
        planetHamburgerIcon.style.display = "none"; // Hide the hamburger button
    };
    
    // Directly show the hamburger button
    const showHamburgerButton = () => {
        planetHamburgerIcon.style.display = "block"; // Show the hamburger button
    };
    
    document.getElementById("info").addEventListener("click", () => {
        console.log("Loading information for " + activePlanet);

        hideHamburgerButton();
    
        // Load the popup script for the active planet
        const existingScript = document.getElementById("planet-popup-script");
        if (existingScript) {
            existingScript.remove();
        }
    
        const script = document.createElement("script");
        script.id = "planet-popup-script";
        script.src = `js/${activePlanet}_popup.js`;
        script.onload = () => {
            console.log(`${activePlanet}_popup.js loaded successfully.`);
            if (typeof openPopup === "function") {
                openPopup();
            } else {
                console.warn(`openPopup function not found in ${activePlanet}_popup.js`);
            }
        };
        script.onerror = () => {
            console.error(`Failed to load ${activePlanet}_popup.js`);
            showHamburgerButton();
        };
    
        document.body.appendChild(script);
    });

     // Fullscreen button handling
     fullscreen.addEventListener("click", () => {
        closeHamburgerMenu();
    
        if (!document.fullscreenElement) {
            container.requestFullscreen().then(() => {
                renderer.setSize(window.innerWidth, window.innerHeight);
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                hideHamburgerButton();
            });
        } else {
            document.exitFullscreen().then(() => {
                renderer.setSize(container.clientWidth, container.clientHeight);
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                showHamburgerButton();
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

    // Render loop
    function render() {
        requestAnimationFrame(render);

        if (Sun && orbitActive) {
            Sun.rotation.y += 0.01;
        }

        Object.values(planets).forEach(planetData => {
            if (orbitActive) {
                planetData.angle += planetData.speed;
                planetData.object.position.x = planetData.orbitRadius * Math.cos(planetData.angle);
                planetData.object.position.z = planetData.orbitRadius * Math.sin(planetData.angle);
            }
            if (!isInspecting) {
                planetData.object.rotation.y += 0.01;
            }
        });

        if (!isInspecting && selectedPlanet) {
            zoomToPlanet(selectedPlanet);
        } else {
            controls.update();
        }

        renderer.render(scene, camera);
    }
    render();

    const planetHamburger = document.getElementById("planet-hamburger");
    const planetMenu = document.getElementById("planet-menu");

    planetHamburger.addEventListener("click", () => {
        // Toggle the menu visibility and the "is-open" class for the hamburger icon
        planetMenu.classList.toggle("menu-open");
        planetHamburger.classList.toggle("is-open");
    });
});
