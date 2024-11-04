/* ===============================
   Carousel Items and Initial State
   Defines the list of items in the carousel and sets the initial starting index.
   =============================== */
const items = ["Psyche", "Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
let currentIndex = 0;

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
  const topFadeIndex = (currentIndex - 2 + items.length) % items.length;
  const prevIndex = (currentIndex - 1 + items.length) % items.length;
  const nextIndex = (currentIndex + 1) % items.length;
  const bottomFadeIndex = (currentIndex + 2) % items.length;

  topFadeDiv.textContent = items[topFadeIndex];
  prevDiv.textContent = items[prevIndex];
  selectedDiv.textContent = items[currentIndex];
  nextDiv.textContent = items[nextIndex];
  bottomFadeDiv.textContent = items[bottomFadeIndex];
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
    currentIndex = (currentIndex + 1) % items.length;
  } else if (event.deltaY < 0) {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
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
    currentIndex = (currentIndex + 1) % items.length;
  } else if (touchEndY > touchStartY + swipeThreshold) {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
  }
  updateCarousel();
}

/* 
 * initCarousel
 * Sets up the carousel by initializing width, setting up event listeners, 
 * and updating the display. This function is intended to be called once
 * to start the carousel interactions.
 *
 * Parameters: None
 * Returns: None
 */
function initCarousel() {
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
