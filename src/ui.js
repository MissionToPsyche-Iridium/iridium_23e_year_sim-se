/* ===============================
   Element Selection and State Variables
   ===============================
   This section selects key DOM elements and initializes state variables 
   to track the menu and settings overlay status. 
   These elements are controlled throughout the script to show/hide and animate.
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
=============================== */
window.addEventListener('load', () => {
  setTimeout(() => {
    collapsibleMenu.style.display = 'flex';
    setTimeout(() => {
      collapsibleMenu.classList.add('expanded');
      collapsibleMenu.style.height = '300px'; // Full height
      menuOpen = true; // Mark menu as open
    }, 10); // Small delay to ensure smooth transition
  }, 1000); // Expand after 2 seconds
});

/* ===============================
   Menu Toggle Logic
   ===============================
   This function toggles the menu button rotation and controls the 
   vertical expansion of the collapsible menu.
   When clicked, the menu expands or collapses with a smooth transition.
*/
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('rotate'); // Rotate the button icon

  if (!menuOpen) {
    // Expand the menu
    collapsibleMenu.style.display = 'flex';
    setTimeout(() => {
      collapsibleMenu.classList.add('expanded');
      collapsibleMenu.style.height = '300px'; // Expand to full height
    }, 10);
  } else {
    // Collapse the menu
    collapsibleMenu.classList.remove('expanded');
    collapsibleMenu.style.height = '0';
    setTimeout(() => {
      collapsibleMenu.style.display = 'none'; // Hide after collapsing
    }, 300); // Match the transition duration
  }

  menuOpen = !menuOpen; // Toggle menu state
});

/* ===============================
   Settings Overlay Toggle
   ===============================
   This function handles the display of the settings overlay.
   Clicking the settings icon toggles the overlay visibility.
*/
// Settings icon triggers horizontal expansion and overlay
settingsIcon.addEventListener('click', () => {
  if (!horizontalExpanded) {
    // Expand the overlay and show content after the width transition
    settingsOverlay.style.display = 'block';

    setTimeout(() => {
      settingsOverlay.style.width = '230px';  // Expand horizontally
    }, 10);

    setTimeout(() => {
      document.querySelector('.menu-content').style.opacity = '1';  // Fade-in content
    }, 500);  // Match with the width transition duration
  } else {
    // Fade-out content before collapsing
    document.querySelector('.menu-content').style.opacity = '0';

    setTimeout(() => {
      settingsOverlay.style.width = '0';  // Collapse horizontally
    }, 300);

    setTimeout(() => {
      settingsOverlay.style.display = 'none';  // Hide after collapsing
    }, 600);  // Ensure transition completes
  }

  horizontalExpanded = !horizontalExpanded;
});

// Close overlay by clicking outside of it
document.addEventListener('click', (event) => {
  if (
    horizontalExpanded &&
    !settingsOverlay.contains(event.target) &&
    event.target !== settingsIcon
  ) {
    document.querySelector('.menu-content').style.opacity = '0';  // Fade-out content

    setTimeout(() => {
      settingsOverlay.style.width = '0';  // Collapse overlay
    }, 300);

    setTimeout(() => {
      settingsOverlay.style.display = 'none';  // Hide after collapse
    }, 600);

    horizontalExpanded = false;
  }
});

// Toggle the overlay on info icon click
infoIcon.addEventListener('click', () => {
  if (infoOverlay.classList.contains('active')) {
    // Fade out: Remove the active class after the animation
    infoOverlay.classList.remove('active');
    setTimeout(() => {
      infoOverlay.style.display = 'none';
    }, 500); // Match with the CSS transition duration
  } else {
    // Fade in: Make it visible and apply the active class
    infoOverlay.style.display = 'block';
    setTimeout(() => infoOverlay.classList.add('active'), 10);
  }
});

closeInfoOverlay.addEventListener('click', () => {
  infoOverlay.classList.remove('active');
  setTimeout(() => {
    infoOverlay.style.display = 'none';
  }, 500); // Match transition duration
});

/* ===============================
   Icon Placeholder Actions (TBD)
   ===============================
   These event listeners log interactions with the info and placeholder icons.
   Additional functionality can be added to these icons later.
*/
placeholderIcon.addEventListener('click', () => {
  console.log('Placeholder icon clicked');
});

/* ===============================
   Camera Coordinates Update
   ===============================
   This function updates the displayed camera coordinates.
   It interacts with an external camera object and updates text content
   with the camera's current X, Y, and Z position.
*/
export function updateCameraCoords(camera) {
  document.getElementById('coord-x').textContent = camera.position.x.toFixed(2);
  document.getElementById('coord-y').textContent = camera.position.y.toFixed(2);
  document.getElementById('coord-z').textContent = camera.position.z.toFixed(2);
}
