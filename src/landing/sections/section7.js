/*
 * File: section7.js
 * Purpose: Loads and initializes the "Surface of Psyche" section within the Three.js scene.
 * Author(s): 
 * Date: 20 FEB 2025
 * Version: 1.1
 *
 * Description:
 * This script sets up the "Surface of Psyche" section by adding title text and creating an
 * interactive menu that displays the surface2.html content in a styled viewport.
 *
 * Functions:
 * - loadSection7(): Loads the "Surface of Psyche" section and sets up the navigation menu.
 */

import * as THREE from 'three';
import { getCurrentSection } from '../utils/sectionTracking.js';
import { resolvePath, loadModel, triggerButton3D } from '../utils/utils.js';
import { showSurface2Viewport } from '../ui/surface2Viewport.js';

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

export function loadSection7(scene, camera, sections, renderer) {
    return new Promise((resolve, reject) => {
        const section7Coords = sections[7]?.position;
        if (!section7Coords) {
            console.error("Error: Section 7 position not found.");
            reject("Section 7 position not found.");
            return;
        }
        // const { posX, posY, posZ, buttonScale, labelScale } = calculateResponsiveValues();

            const buttonPos = {
              x: section7Coords.x,
              y: section7Coords.y + 2,
              z: section7Coords.z - 12,
            };
      
            const modelPosition = {
              x: section7Coords.x,
              y: section7Coords.y - 5,
              z: section7Coords.z - 15,
            };
      
            const rotation = { x: 0.2, y: 0, z: 0 };
            const objRotation = { x: 0, y: 5, z: 0 };
      
            try {
      
              loadModel(
                  "Surface Slice",
                  resolvePath("res/models/PsycheSlice.glb"),
                  modelPosition, // position
                  1.4, // scale
                  objRotation, // rotation
                  null, // animation
                  scene, // scene
                  () => {  // callback fx
                  console.log("loaded model");
                  });
      
                triggerButton3D(
                    "Explore the Surface of Psyche",
                    buttonPos,
                    rotation,
                    .7,
                    scene,
                    () => {
                        //showSurface2Viewport();
                        window.open(resolvePath('/PsycheJR/surface2.html'));
                        console.log("Surface button clicked.");
                    }
                ).then(({ textMesh, buttonMesh }) => {
                    // Store original material properties to restore when not hovering
                    const originalEmissive = buttonMesh.material.emissive.clone();
                    const originalEmissiveIntensity = buttonMesh.material.emissiveIntensity;
                    
                    const raycaster = new THREE.Raycaster();
                    const mouse = new THREE.Vector2();
                });
      
                resolve(); // Resolve the promise when setup is complete
            } catch (err) {
                console.error("Error setting up Section 3:", err);
                reject(err); // Reject the promise if there's an error
            }
        });
      }

export function renderSection7(camera, scene) {
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
}