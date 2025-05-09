/**
 * Section 3 - PsycheJR
 * 
 * This section handles the PsycheJR button and viewport integration.
 * Updated to support responsive design from 768px to 2560px.
 */

import * as THREE from 'three';
import { getCurrentSection } from '../utils/sectionTracking.js';
import { triggerButton3D, resolvePath, loadModel } from '../utils/utils.js';

//let yearButton;
//let buttonLabel;
//let hasShownViewport = false;
let resizeHandler;
let floatingModel = null;
let floatStartTime = Date.now();
let baseY = 0;


/**
 * Calculate responsive positioning based on screen width
 * @returns {Object} Position and scale values
 */
function calculateResponsiveValues() {
    const screenWidth = window.innerWidth;
    let posX ;
    let posY ;
    let posZ ;
    let buttonScale = 1;
    let labelScale = 1;
    
    // Adjust position and scale based on screen width
    if (screenWidth >= 2000) {
        // Extra large screens (2000px-2560px)
        buttonScale = 1.3;
        labelScale = 1.3;
        posX = 50;
    } else if (screenWidth >= 1600) {
        // Very large screens (1600px-2000px)
        buttonScale = 1.2;
        labelScale = 1.2;
        posX = 45;
    } else if (screenWidth >= 1200) {
        // Large screens (1200px-1600px)
        buttonScale = 1.1;
        labelScale = 1.1;
        posX = 42;
    } else if (screenWidth >= 992) {
        // Medium-large screens (992px-1200px)
        buttonScale = 1;
        labelScale = 1;
    } else if (screenWidth >= 768) {
        // Medium screens (tablets) (768px-992px)
        buttonScale = 0.9;
        labelScale = 0.9;
        posX = 38;
    } else {
        // Small screens (phones) (<768px)
        buttonScale = 0.8;
        labelScale = 0.8;
        posX = 35;
    }
    
    return { posX, posY, posZ, buttonScale, labelScale };
}

export function loadSection3(scene, camera, sections, renderer) {
  return new Promise((resolve, reject) => {
      const section3Coords = sections[3]?.position;
      if (!section3Coords) {
          console.error("Section 3 position not found.");
          reject("Section 3 position not found.");
          return;
      }

        const directionalLight = new THREE.DirectionalLight(0x7a5f3e, 15);
        directionalLight.position.set(-150, 150, 13);

        const target = new THREE.Object3D();
      target.position.set(-150, 145, -20); // Set the target position

      // Set the target of the light
      directionalLight.target = target;
			scene.add(directionalLight);

      // const { posX, posY, posZ, buttonScale, labelScale } = calculateResponsiveValues();

      const buttonPos = {
        x: section3Coords.x,
        y: section3Coords.y + 2,
        z: section3Coords.z - 12,
      };

      const modelPosition = {
        x: section3Coords.x,
        y: section3Coords.y - 5,
        z: section3Coords.z - 15,
      };

      const rotation = { x: 0.2, y: 0, z: 0 };
      const objRotation = { x: 0.2, y: 0, z: 0 };

      try {
        loadModel(
            "Jr",
            resolvePath("res/models/Jr.glb"),
            modelPosition, // position
            9, // scale
            objRotation, // rotation
            null, // animation
            scene, // scene
            (model) => {
                floatingModel = model;
                baseY = model.position.y;
        });
            triggerButton3D(
                "EXPLORE THE PSYCHE Jr KIDS EXPERIENCE",
                buttonPos,
                rotation,
                0.7,
                scene,
                () => {
                    // Old iframe overlay version (commented out in case it's needed later)
                    /*
                    import('../ui/kidsViewport.js').then(module => {
                        module.showKidsViewport(); 
                    }).catch(err => {
                        console.error("Failed to load kidsViewport module:", err);
                    });
                    */
                
                    // New behavior: open kids.html in a new browser tab
                    const kidsUrl = resolvePath('/PsycheJR/kids.html');
                    window.open(kidsUrl, '_blank');
                }
            )
          resolve(); // Resolve the promise when setup is complete
      } catch (err) {
          console.error("Error setting up Section 3:", err);
          reject(err); // Reject the promise if there's an error
      }
      const modelLight = new THREE.DirectionalLight(0xffffff, 1.5);
      modelLight.position.set(section3Coords.x, section3Coords.y, section3Coords.z);
      modelLight.target.position.set(modelPosition.x, modelPosition.y, modelPosition.z);
      scene.add(modelLight);
      scene.add(modelLight.target);
  });
}

export function renderSection3(camera, scene) {
    //if (!yearButton || !buttonLabel) return;

    const currentSection = getCurrentSection();
    const isVisible = currentSection === 3;
        
        // Also show/hide any other elements in this section
        for (let i = 0; i < scene.children.length; i++) {
            const child = scene.children[i];
            if (child.userData && child.userData.section3Element) {
                child.visible = isVisible;
            }
        }
    // floating effect
    if (floatingModel && isVisible) {
        const time = (Date.now() - floatStartTime) * 0.001;
        floatingModel.position.y = baseY + Math.sin(time * 2) * 0.2;
    } 
}

/**
 * Clean up event listeners when section is no longer needed
 */
export function cleanupSection3() {
    if (resizeHandler) {
        window.removeEventListener('resize', resizeHandler);
        resizeHandler = null;
    }
}
