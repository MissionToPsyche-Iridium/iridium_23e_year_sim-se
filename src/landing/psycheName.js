/**
 * Name Viewport Module
 *
 * This module handles loading the psycheName.html content in an iframe
 * that appears on top of the Three.js scene
 */
import * as THREE from 'three';
import gsap from 'gsap';
// Keep track of the viewport DOM elements
let viewportContainer = null;
let iframe = null;
let closeButton = null;
/**
 * Creates and shows the year viewport
 */
export function showNameViewport() {
    // If viewport already exists, just show it
    if (viewportContainer) {
        viewportContainer.style.display = 'flex';
        return;
    }
    console.log("Creating Name viewport");
    // Create container for the viewport
    viewportContainer = document.createElement('div');
    viewportContainer.id = 'name-viewport-container';
    viewportContainer.style.position = 'fixed';
    viewportContainer.style.top = '50%';
    viewportContainer.style.left = '50%';
    viewportContainer.style.transform = 'translate(-50%, -50%)';
    viewportContainer.style.width = '80%'; // Increased from 90% to 110% (20% wider)
    viewportContainer.style.maxWidth = '1200px'; // Increased from 1200px to 1440px (20% wider)
    viewportContainer.style.height = '70vh'; // Increased from 85vh to 95vh (10% higher)
    viewportContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.03)';
 //   viewportContainer.style.border = '2px solid #45A049';
 //   viewportContainer.style.border = 'translucent';
    viewportContainer.style.borderRadius = '15px';
 //   viewportContainer.style.boxShadow = '0 0 20px rgba(0, 123, 255, 0.5)';
    viewportContainer.style.zIndex = '1000';
    viewportContainer.style.display = 'none';
    viewportContainer.style.flexDirection = 'column';
    viewportContainer.style.padding = '20px';
    viewportContainer.style.overflow = 'auto';
    viewportContainer.style.position = 'relative';
    // Create header with title and close button
//    const header = document.createElement('div');
//    header.style.display = 'flex';
//    header.style.justifyContent = 'space-between';
//    header.style.alignItems = 'center';
//    header.style.padding = '10px 15px';
//    header.style.backgroundColor = '#45A049';
//    header.style.color = 'white';
//    header.style.borderTopLeftRadius = '20px';
//    header.style.borderTopRightRadius = '20px';
 //   const title = document.createElement('h2');
//    title.textContent = 'Psyche Name Origin';
//   title.style.margin = '0';
 //   title.style.fontSize = '1.2rem';
    closeButton = document.createElement('button');
    closeButton.textContent = '✕';

    closeButton.style.background = 'none';
    closeButton.style.border = 'none';
    closeButton.style.color = 'white';
    closeButton.style.fontSize = '1.5rem';
    closeButton.style.cursor = 'pointer';
    closeButton.style.padding = '0 5px';
    closeButton.style.lineHeight = '1';
    
 //   header.appendChild(title);
 //   header.appendChild(closeButton);
 //   viewportContainer.appendChild(header);
    // Create iframe to load the balance.html content
    iframe = document.createElement('iframe');
    iframe.src = './name/psycheName.html';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.backgroundColor = '#222';

    // Get references to the links and the container
const introLink = document.getElementById('introLink');
const historyLink = document.getElementById('historyLink');
const missionLink = document.getElementById('missionLink');
const funFactsLink = document.getElementById('funFactsLink');
const viewportContainer = document.getElementById('viewportContainer');
const content = document.getElementById('content');
const closeButton = document.getElementById('closeButton');

// Define the content for each section
const sectionContent = {
    introduction: `<h2>Introduction to Psyche</h2><p>Psyche is a metal-rich asteroid orbiting the Sun between Mars and Jupiter. It was named after the Greek goddess Psyche.</p>`,
    history: `<h2>Historical Background</h2><p>Psyche was discovered in 1852 by Italian astronomer Annibale de Gasparis and is one of the largest asteroids in our solar system.</p>`,
    mission: `<h2>NASA's Psyche Mission</h2><p>The Psyche spacecraft, designed by NASA, aims to study the asteroid to understand more about planetary cores and the history of the solar system.</p>`,
    funFacts: `<h2>Fun Facts About Psyche</h2><ul><li>Psyche is primarily composed of nickel and iron, much like Earth's core.</li><li>It is about 226 kilometers (140 miles) in diameter.</li><li>Its name means "soul" in Greek mythology.</li></ul>`
};

// Function to display content in the container
function showContent(contentKey) {
    content.innerHTML = sectionContent[contentKey];  // Load corresponding content
    viewportContainer.style.display = 'flex';  // Show the container
}

// Event Listeners for the links
introLink.addEventListener('click', () => showContent('introduction'));
historyLink.addEventListener('click', () => showContent('history'));
missionLink.addEventListener('click', () => showContent('mission'));
funFactsLink.addEventListener('click', () => showContent('funFacts'));

// Close the container when the close button is clicked
closeButton.addEventListener('click', () => {
    viewportContainer.style.display = 'none';  // Hide the container
});
    // Add event listener for iframe load errors
    iframe.onerror = () => {
        console.error("Failed to load iframe content");
    };
    // Add event listener for iframe load success
    iframe.onload = () => {
        console.log("Iframe loaded successfully");
    };
    viewportContainer.appendChild(iframe);
    document.body.appendChild(viewportContainer);
    // Add animation for opening
    gsap.from(viewportContainer, {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        ease: "power2.out"
    });
    // Add event listener for close button
    closeButton.addEventListener('click', hideNameViewport);
    // Add event listener for Escape key
    document.addEventListener('keydown', handleKeyDown);
}
/**
 * Hides the name viewport
 */
export function hideNameViewport() {
    if (!viewportContainer) return;
//    viewportContainer.style.button = "-100%";
//    viewportContainer.style.opacity = "0";

//    setTimeout(() => {
//        document.body.removeChild(viewportContainer);
//        viewportContainer = null;
//        iframe = null;
//        closeButton = null;
//    }, 500);
//    };
    // Animate closing
    gsap.to(viewportContainer, {
        opacity: 0,
       scale: 0.8,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
            viewportContainer.style.display = 'none';
            // Reset opacity and scale for next time
            viewportContainer.style.opacity = 1;
            viewportContainer.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    });
}
/**
 * Handles keydown events for the viewport
 */
function handleKeyDown(e) {
    if (e.key === 'Escape') {
        hideNameViewport();
    }
}
/**
 * Removes the viewport completely
 */
export function destroyNameViewport() {
    if (viewportContainer) {
        closeButton.removeEventListener('click', hideNameViewport);
        document.removeEventListener('keydown', handleKeyDown);
        document.body.removeChild(viewportContainer);
        viewportContainer = null;
        iframe = null;
        closeButton = null;
    }
}