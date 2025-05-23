/*
 * File: sectionTracking.js
 * Purpose: Manages camera navigation between different sections in the Three.js scene.
 * Author(s): 
 * Date: 20 FEB 2025
 * Version: 1.0
 *
 * Description:
 * This script handles camera movement and section tracking within the Three.js scene.
 * It processes user input (scroll and touch) to navigate between predefined sections,
 * ensures responsive resizing, and uses GSAP for smooth transitions.
 *
 * Functions:
 * - initSectionTracking(): Initializes section tracking with camera, sections, and renderer.
 * - onResize(): Adjusts camera and renderer on window resize.
 * - onScroll(): Handles scroll events to navigate between sections.
 * - moveToSection(): Smoothly transitions the camera to the specified section.
 * - getCurrentSection(): Returns the index of the current section.
 */

import gsap from 'gsap';
import * as THREE from 'three';
import { showRefsViewport } from '../ui/referencesViewport.js';
import { savedCameraRotation } from '../sections/section6.js'; 

// import iframe destroy functions to destroy iframes if user navigates away from a section
import { hideNameViewport } from '../ui/psycheName.js';
import { destroyGamesViewport } from '../ui/gamesViewport.js';
import { destroyYearViewport } from '../sections/section4.js';
import { destroyWebsiteViewport } from '../ui/websiteViewport.js';
import { destroySurface2Viewport } from '../ui/surface2Viewport.js';
import { destroyLocation2Viewport } from '../ui/location2Viewport.js';
import { destroyRefsViewport } from '../ui/referencesViewport.js';

let camera, renderer, sections, currentSection = 1, scrollProgress = 1;
let isAnimating = false; // Scroll lock flag
let lastTouchY = 0;

// Unifying all nav movements 
let isMoving = false;

// Exporting to carousel nav
export function getIsMoving() {
  return isMoving;
}

// Exporting to carousel nav
export function setIsMoving(value) {
  isMoving = value;
}

const destroyHandlers = {
  0: destroyRefsViewport,
  2: hideNameViewport,
  3: () => {
    import('../ui/kidsViewport.js')
      .then(({ hideKidsViewport }) => {
        hideKidsViewport();
      })
      .catch(err => {
        console.error("Failed to load kidsViewport for destruction:", err);
      });
  },
  4: destroyYearViewport,
  5: destroyWebsiteViewport,
  6: destroyGamesViewport,
  7: destroySurface2Viewport,
  8: destroyLocation2Viewport
};


let lastSection = currentSection;

function onTouchStart(event) {
  lastTouchY = event.touches[0].clientY;
}

function onTouchMove(event) {
  const newY = event. touches[0].clientY;
  const deltaY = lastTouchY - newY;
  lastTouchY = newY;
  onScroll({ deltaY: deltaY }); 
  event.preventDefault();
}

/*
* Initializes section tracking by assigning the camera, section list,
* and renderer. Adds event listeners for scroll, touchmove, and window resize.
*
* Parameters:
* - cam: The Three.js camera to be controlled.
* - sectionList: Array of section positions for navigation.
* - rend: The Three.js renderer for viewport updates.
*/
export function initSectionTracking(cam, sectionList, rend) {
  camera = cam;
  renderer = rend;
  sections = sectionList;
  window.addEventListener("wheel", onScroll, { passive: false });  window.addEventListener("touchstart", onTouchStart, { passive: false });
  window.addEventListener("touchmove", onTouchMove, { passive: false });
  window.addEventListener('resize', () => onResize(camera, renderer));
}

/*
* Adjusts the camera aspect ratio and updates the renderer size
* when the window is resized to maintain correct proportions.
*/
export function onResize(camera, renderer) {
  if (!camera || !renderer) {
    console.error("onResize called without a valid camera or renderer.");
    return;
  }

  const viewportWidth = Math.max(window.innerWidth, 768); 
  const aspect = viewportWidth / window.innerHeight;

  camera.aspect = aspect;
  camera.updateProjectionMatrix();

  renderer.setSize(viewportWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  if (viewportWidth < 1300) {
    const fovAdjustment = (1300 - viewportWidth) * 0.048;
    camera.fov = Math.min(75 + fovAdjustment, 100);
  } else {
    camera.fov = 75;
  }

  camera.updateProjectionMatrix();
}


/*
* Handles scroll and touchmove events to update the camera's scroll progress.
* Triggers section transitions when crossing section thresholds.
*
* Parameters:
* - event: The scroll or touchmove event triggering navigation.
*/
export function onScroll(event) {
  if (isAnimating) return;
  // Added to unify nav menu to wait for transition
  if (getIsMoving()) return;

  const direction = event.deltaY > 0 ? 1 : -1;
  let newSection = currentSection + direction;
  console.log("Swipe Direction: ", direction);

  if (newSection > 8) {
    newSection = 0;
  } else if (newSection < 0) {
    newSection = 8;
  }

  isAnimating = true;
  setIsMoving(true); 
  moveToSection(newSection).then(() => {
    isAnimating = false;
    // Reached new section, set to false
    setIsMoving(false); 
  });
}


/*
* Smoothly transitions the camera to the specified section using GSAP.
* Supports optional camera orientation adjustments during movement.
*
* Parameters:
* - sectionIndex: Index of the section to move to.
* - lookAt: Optional THREE.Vector3 position for the camera to look at.
*/
export function moveToSection(sectionIndex, lookAt = null) {
  return new Promise((resolve) => { // <<< Wrap everything in a Promise
    if (sectionIndex < 0 || sectionIndex >= sections.length) {
      resolve(); // <<< Always resolve even on invalid move
      return;
    }

    if (destroyHandlers[lastSection]) {
      destroyHandlers[lastSection]();
    }

    if (lastSection === 6 && sectionIndex !== 6) {
      // If leaving Section 6, restore camera rotation
      gsap.to(camera.rotation, {
        x: savedCameraRotation.x,
        y: savedCameraRotation.y,
        z: savedCameraRotation.z,
        duration: 1,
        ease: "power2.out"
      });
    }

    currentSection = sectionIndex;
    scrollProgress = sectionIndex;
    lastSection = sectionIndex;

    const sectionPos = sections[sectionIndex].position;
    const duration = 2;

    gsap.to(camera.position, {
      x: sectionPos.x,
      y: sectionPos.y,
      z: sectionPos.z,
      duration: duration,
      ease: "power4.inOut",
      onUpdate: () => {
        if (lookAt && sectionIndex === 6) {
          // camera.lookAt(lookAt.x, lookAt.y, lookAt.z); 
        }
      },
      onComplete: () => {
        if (sectionIndex !== 6) {
          const resetLookAt = new THREE.Vector3(
            camera.position.x,
            camera.position.y,
            camera.position.z - 1 // Look directly along (-) Z-axis
          );
          if (sectionIndex === 0) {
            showRefsViewport();
          }
        }

        isAnimating = false;
        console.log("Moved to Section:", currentSection);
        resolve(); // All tasks are done
      }
    });
  });
}

/*
* Logs the current camera direction vector to the console.
* Useful for debugging camera orientation.
*/
function logCameraDirection() {
  const direction = new THREE.Vector3();
  camera.getWorldDirection(direction);
  console.log('Camera is looking in direction:', direction);
}

/*
* Returns the current section index that the camera is positioned at.
*
* Returns:
* - Number: Index of the current section.
*/
export function getCurrentSection() {
  return currentSection;
}
