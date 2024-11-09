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
  if (!planets[carouselState.currentIndex] || !planets[carouselState.currentIndex].model) {
    console.warn(`Planet or model missing for ${planets[carouselState.currentIndex]?.name || 'Unknown planet'}`);
    return;
  }

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
 * Provides a responsive appearance across different screen sizes.
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

/**
 * handleScroll
 * 
 * Manages the scroll event for the carousel, adjusting the carousel index 
 * based on the scroll direction. Applies a threshold to control rapid scrolling.
 * 
 * @param {WheelEvent} event - The wheel event that triggers scrolling.
 */
const scrollThreshold = 100;
function handleScroll(event) {
  if (Math.abs(event.deltaY) < scrollThreshold) return;

  if (event.deltaY > 0) {
    carouselState.currentIndex = (carouselState.currentIndex + 1) % planetNameArray.length;
  } else if (event.deltaY < 0) {
    carouselState.currentIndex = (carouselState.currentIndex - 1 + planetNameArray.length) % planetNameArray.length;
  }
  updateCarousel();
}

/**
 * handleVerticalSwipe
 * 
 * Determines the swipe direction based on the start and end touch points.
 * Adjusts the carousel index accordingly to navigate items.
 * 
 * @param {number} touchStartY - The Y-coordinate where the touch started.
 * @param {number} touchEndY - The Y-coordinate where the touch ended.
 */
function handleVerticalSwipe(touchStartY, touchEndY) {
  const swipeThreshold = 30;

  if (touchEndY < touchStartY - swipeThreshold) {
    carouselState.currentIndex = (carouselState.currentIndex + 1) % planetNameArray.length;
  } else if (touchEndY > touchStartY + swipeThreshold) {
    carouselState.currentIndex = (carouselState.currentIndex - 1 + planetNameArray.length) % planetNameArray.length;
  }
  updateCarousel();
}

/**
 * initCarousel
 * 
 * Initializes the carousel by setting up dimensions, event listeners, 
 * and updating the display. Should be called once to activate carousel interactions.
 * 
 * @param {Array} planetArray - An array of planet objects to populate the carousel.
 */
function initCarousel(planetArray) {
  planets = planetArray;
  planetNameArray = planets.map(planet => planet.name);

  setCarouselWidth();
  window.addEventListener('resize', setCarouselWidth);
  carouselContainer.addEventListener('wheel', handleScroll);

  let touchStartY = 0;
  let touchEndY = 0;

  carouselContainer.addEventListener('touchstart', (event) => {
    touchStartY = event.changedTouches[0].screenY;
    event.preventDefault();
  }, { passive: false });

  carouselContainer.addEventListener('touchmove', (event) => {
    touchEndY = event.changedTouches[0].screenY;
    event.preventDefault();
  }, { passive: false });

  carouselContainer.addEventListener('touchend', () => {
    handleVerticalSwipe(touchStartY, touchEndY);
  });

  updateCarousel();
}

export { initCarousel };
