/* ============================================================
   Admin Info
   ============================================================
   Project Name   : [Your Project Name]
   Module         : [Module Name / File Purpose]
   Author         : Joshua Anselm SER401
   Created Date   : [Creation Date]
   Last Modified  : 10/24/2024
   Reviewed By    : [Reviewer Name]
   Description    : 
   This script manages UI interactions for the 3D visualization module.  
   It handles toggling of menus, overlays, and interactive icons, such as  
   settings and informational elements. Smooth transitions are ensured,  
   with real-time camera coordinate updates integrated into the Three.js-  
   based rendering system. The script also controls UI elements like bloom  
   intensity sliders and provides mechanisms to collapse overlays when  
   clicking outside. Placeholders are prepared for future icon functionality.  

   Usage Instructions:
   1. [Usage Step 1]
   2. [Usage Step 2]
   3. [Additional usage details as needed]

   Dependencies:
   - [List any dependencies or libraries used]

   Notes:
   - [Any special notes or warnings about this script]

   ============================================================
*/


/* ===============================
   Element Selection and State Variables
   ===============================
   This section selects key DOM elements and initializes state variables 
   to track the menu and settings overlay status. These elements are used 
   throughout the script to control visibility, transitions, and animations.
*/
const menuToggle = document.getElementById('menu-toggle');
const collapsibleMenu = document.getElementById('collapsible-menu');
const settingsOverlay = document.getElementById('settings-overlay');
const infoIcon = document.getElementById('info-icon');
const placeholderIcon = document.getElementById('placeholder-icon');
const settingsIcon = document.getElementById('settings-icon');
const infoOverlay = document.getElementById('info-overlay');
const closeInfoOverlay = document.getElementById('close-info-overlay');

let menuOpen = false;
let horizontalExpanded = false;

/* ===============================
   Auto-expand Menu After Page Load
   ===============================
   Automatically expands the collapsible menu a short time after the page loads, 
   ensuring a smooth transition. This block handles delayed display adjustments 
   and menu state management.
*/
window.addEventListener('load', () => {
  setTimeout(() => {
    collapsibleMenu.style.display = 'flex';
    setTimeout(() => {
      collapsibleMenu.classList.add('expanded');
      collapsibleMenu.style.height = '300px';
      menuOpen = true;
    }, 10);
  }, 1000);
});

/* ===============================
   Menu Toggle Logic
   ===============================
   Toggles the visibility of the collapsible menu. Expands or collapses 
   the menu with a smooth transition when the toggle button is clicked, 
   updating the visual state and managing the menu state variable.
*/
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('rotate');
  if (!menuOpen) {
    collapsibleMenu.style.display = 'flex';
    setTimeout(() => {
      collapsibleMenu.classList.add('expanded');
      collapsibleMenu.style.height = '300px';
    }, 10);
  } else {
    collapsibleMenu.classList.remove('expanded');
    collapsibleMenu.style.height = '0';
    setTimeout(() => {
      collapsibleMenu.style.display = 'none';
    }, 300);
  }
  menuOpen = !menuOpen;
});

/* ===============================
   Settings Overlay Toggle
   ===============================
   Manages the horizontal expansion and collapse of the settings overlay. 
   It toggles the visibility and opacity of the overlay content, 
   ensuring synchronized transitions and animations.
*/
settingsIcon.addEventListener('click', () => {
  if (!horizontalExpanded) {
    settingsOverlay.style.display = 'block';
    setTimeout(() => {
      settingsOverlay.style.width = '230px';
    }, 10);
    setTimeout(() => {
      document.querySelector('.menu-content').style.opacity = '1';
    }, 500);
  } else {
    document.querySelector('.menu-content').style.opacity = '0';
    setTimeout(() => {
      settingsOverlay.style.width = '0';
    }, 300);
    setTimeout(() => {
      settingsOverlay.style.display = 'none';
    }, 600);
  }
  horizontalExpanded = !horizontalExpanded;
});

/* ===============================
   Close Overlay on Outside Click
   ===============================
   Listens for clicks outside the settings overlay and collapses it if open. 
   This ensures the overlay is closed when clicking outside its area 
   or on any element other than the settings icon.
*/
document.addEventListener('click', (event) => {
  if (
    horizontalExpanded &&
    !settingsOverlay.contains(event.target) &&
    event.target !== settingsIcon
  ) {
    document.querySelector('.menu-content').style.opacity = '0';
    setTimeout(() => {
      settingsOverlay.style.width = '0';
    }, 300);
    setTimeout(() => {
      settingsOverlay.style.display = 'none';
    }, 600);
    horizontalExpanded = false;
  }
});

/* ===============================
   Info Overlay Toggle
   ===============================
   Toggles the visibility of the info overlay. This section manages the 
   display and removal of the active class to handle the animation states 
   for a smooth fade-in and fade-out effect.
*/
infoIcon.addEventListener('click', () => {
  if (infoOverlay.classList.contains('active')) {
    infoOverlay.classList.remove('active');
    setTimeout(() => {
      infoOverlay.style.display = 'none';
    }, 500);
  } else {
    infoOverlay.style.display = 'block';
    setTimeout(() => infoOverlay.classList.add('active'), 10);
  }
});

/* ===============================
   Close Info Overlay on Click
   ===============================
   This block handles closing the info overlay when the close button is clicked. 
   It removes the active class and hides the overlay after the animation completes.
*/
closeInfoOverlay.addEventListener('click', () => {
  infoOverlay.classList.remove('active');
  setTimeout(() => {
    infoOverlay.style.display = 'none';
  }, 500);
});

/* ===============================
   Placeholder Icon Action Handler
   ===============================
   Logs interactions with the placeholder icon. This section serves as a placeholder 
   for additional functionality that can be assigned to the icon in future development.
*/
placeholderIcon.addEventListener('click', () => {
  console.log('Placeholder icon clicked');
});

/* ===============================
   Camera Coordinates Update
   ===============================
   Updates the displayed camera coordinates by interacting with an external camera object. 
   It retrieves the X, Y, and Z positions from the camera and updates the corresponding 
   text elements on the page with the formatted coordinates.
*/
export function updateCameraCoords(camera) {
  document.getElementById('coord-x').textContent = camera.position.x.toFixed(2);
  document.getElementById('coord-y').textContent = camera.position.y.toFixed(2);
  document.getElementById('coord-z').textContent = camera.position.z.toFixed(2);
}

