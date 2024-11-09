import { CameraController } from "./cameraController";
import { camera, controls } from "./sceneBuilder";

/**
 * carouselState
 * 
 * Maintains the state of the carousel, including the current index for item navigation.
 */
export const carouselState = {
  currentIndex: 0
};

let planets = [];
let planetNameArray = [];

/**
 * Element Selectors for Carousel
 * 
 * Selects specific DOM elements that represent different positions in the carousel 
 * (top, previous, selected, next, and bottom fade positions).
 */
const carouselContainer = document.querySelector('.carousel-container');
const topFadeDiv = document.querySelector('.carousel-item.top-fade');
const prevDiv = document.querySelector('.carousel-item.prev');
const selectedDiv = document.querySelector('.carousel-item.selected .item-text');
const nextDiv = document.querySelector('.carousel-item.next');
const bottomFadeDiv = document.querySelector('.carousel-item.bottom-fade');

/**
 * updateCarousel
 * 
 * Updates the displayed text content of the carousel items based on the current index.
 * Sets each item's content and position in the carousel (top, previous, selected, next, bottom).
 * Calls the CameraController to move the camera to the currently selected planet.
 */
function updateCarousel() {
  console.log(`Current Index: ${carouselState.currentIndex}, Planet: ${planets[carouselState.currentIndex]?.name || 'Unknown planet'}`);
  if (!planets[carouselState.currentIndex] || !planets[carouselState.currentIndex].model) return;

  const topFadeIndex = (carouselState.currentIndex - 2 + planetNameArray.length) % planetNameArray.length;
  const prevIndex = (carouselState.currentIndex - 1 + planetNameArray.length) % planetNameArray.length;
  const nextIndex = (carouselState.currentIndex + 1) % planetNameArray.length;
  const bottomFadeIndex = (carouselState.currentIndex + 2) % planetNameArray.length;

  topFadeDiv.textContent = planetNameArray[topFadeIndex];
  prevDiv.textContent = planetNameArray[prevIndex];
  selectedDiv.textContent = planetNameArray[carouselState.currentIndex];
  nextDiv.textContent = planetNameArray[nextIndex];
  bottomFadeDiv.textContent = planetNameArray[bottomFadeIndex];

  CameraController.moveToPlanet(camera, controls, planets[carouselState.currentIndex]);
}

/**
 * setCarouselWidth
 * 
 * Dynamically adjusts the width of the carousel container based on viewport width.
 */
function setCarouselWidth() {
  const minWidth = 73;
  const maxWidth = 91;
  const minViewport = 320;
  const maxViewport = 960;

  const viewportWidth = Math.min(Math.max(window.innerWidth, minViewport), maxViewport);
  const width = minWidth + ((maxWidth - minWidth) * (viewportWidth - minViewport) / (maxViewport - minViewport));
  
  carouselContainer.style.width = `${width}px`;
}

// Sensitivity and cooldown settings
const scrollThreshold = 30; // Lower threshold for touchpad responsiveness
const swipeThreshold = 20;  // Lower threshold for touch input sensitivity
let canScroll = true;       // Cooldown variable to limit single scroll per gesture

/**
 * handleScroll
 * 
 * Manages the scroll event for the carousel, adjusting the carousel index 
 * based on the scroll direction. Applies a threshold to control rapid scrolling.
 */
function handleScroll(event) {
  if (!canScroll || Math.abs(event.deltaY) < scrollThreshold) return;

  canScroll = false; // Disable further scrolling until cooldown is complete

  if (event.deltaY > 0) {
    carouselState.currentIndex = (carouselState.currentIndex + 1) % planetNameArray.length;
  } else if (event.deltaY < 0) {
    carouselState.currentIndex = (carouselState.currentIndex - 1 + planetNameArray.length) % planetNameArray.length;
  }
  updateCarousel();

  // Enable scrolling again after a short delay
  setTimeout(() => (canScroll = true), 300);
}

/**
 * handleVerticalSwipe
 * 
 * Determines the swipe direction based on the start and end touch points.
 */
function handleVerticalSwipe(touchStartY, touchEndY) {
  if (!canScroll) return; // Prevent additional scrolls within cooldown

  if (touchEndY < touchStartY - swipeThreshold) {
    carouselState.currentIndex = (carouselState.currentIndex + 1) % planetNameArray.length;
  } else if (touchEndY > touchStartY + swipeThreshold) {
    carouselState.currentIndex = (carouselState.currentIndex - 1 + planetNameArray.length) % planetNameArray.length;
  }
  updateCarousel();

  // Apply cooldown after swipe
  canScroll = false;
  setTimeout(() => (canScroll = true), 300);
}

/**
 * initCarousel
 * 
 * Initializes the carousel by setting up dimensions, event listeners, 
 * and updating the display.
 */
function initCarousel(planetArray) {
  planets = planetArray;
  planetNameArray = planets.map(planet => planet.name);

  setCarouselWidth();
  window.addEventListener('resize', setCarouselWidth);
  carouselContainer.addEventListener('wheel', handleScroll, { passive: false });

  let touchStartY = 0;

  carouselContainer.addEventListener('touchstart', (event) => {
    touchStartY = event.changedTouches[0].screenY;
    event.preventDefault();
  }, { passive: false });

  carouselContainer.addEventListener('touchend', (event) => {
    const touchEndY = event.changedTouches[0].screenY;
    handleVerticalSwipe(touchStartY, touchEndY);
    event.preventDefault();
  }, { passive: false });

  updateCarousel();
}

export { initCarousel };
