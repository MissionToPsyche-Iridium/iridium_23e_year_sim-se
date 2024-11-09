import { CameraController } from "./cameraController";
import { camera, controls } from "./sceneBuilder"

/* ===============================
   Carousel Items and Initial State
   Defines the list of items in the carousel and sets the initial starting index.
   =============================== */
export const carouselState = {
  currentIndex: 0
};

let planets = [];
let planetNameArray = [];

/* ===============================
   Carousel Element Selectors
   Selects specific DOM elements representing different carousel positions.
   =============================== */
const carouselContainer = document.querySelector('.carousel-container');
const topFadeDiv = document.querySelector('.carousel-item.top-fade');
const prevDiv = document.querySelector('.carousel-item.prev');
const selectedDiv = document.querySelector('.carousel-item.selected .item-text');
const nextDiv = document.querySelector('.carousel-item.next');
const bottomFadeDiv = document.querySelector('.carousel-item.bottom-fade');

/* 
 * updateCarousel
 * Updates the text content of carousel items based on the current index. 
 * Determines each item's position in the carousel (top, previous, selected, next, bottom) 
 * and sets the appropriate text content for each position.
 *
 * Parameters: None
 * Returns: None
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

/* 
 * setCarouselWidth
 * Dynamically adjusts the width of the carousel container based on viewport width
 * for a responsive and consistent appearance across screen sizes.
 *
 * Parameters: None
 * Returns: None
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

/* 
 * handleScroll
 * Handles the scroll event for the carousel, adjusting the carousel index 
 * based on scroll direction, and updating the display. A threshold is applied
 * to limit rapid scrolling.
 *
 * Parameters:
 *   event (WheelEvent) - The wheel event that triggers the scroll handling.
 *
 * Returns: None
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

/* 
 * handleVerticalSwipe
 * Determines swipe direction based on start and end touch points.
 * Updates the carousel index accordingly.
 *
 * Parameters:
 *   touchStartY (Number) - The Y-coordinate where the touch started.
 *   touchEndY (Number) - The Y-coordinate where the touch ended.
 *
 * Returns: None
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

/* 
 * initCarousel
 * Sets up the carousel by initializing width, setting up event listeners, 
 * and updating the display. This function is intended to be called once
 * to start the carousel interactions.
 *
 * Parameters: planetArray (Array) - An array of planet objects.
 * Returns: None
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
