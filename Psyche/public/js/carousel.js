/* ===============================
   Carousel Initialization
   Sets up carousel elements, initializes the list of items, and sets the starting index.
   =============================== */
   window.addEventListener('load', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const topFadeDiv = document.querySelector('.carousel-item.top-fade');
    const prevDiv = document.querySelector('.carousel-item.prev');
    const selectedDiv = document.querySelector('.carousel-item.selected .item-text');
    const nextDiv = document.querySelector('.carousel-item.next');
    const bottomFadeDiv = document.querySelector('.carousel-item.bottom-fade');
    const items = ["Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
  
    let currentIndex = 0;
  
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
  
      document.querySelector('.carousel-container').style.width = `${width}px`;
    }
  
    // Initialize the carousel width and adjust it on window resize
    setCarouselWidth();
    window.addEventListener('resize', setCarouselWidth);
  
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
  
    // Add event listener for scroll interaction on the carousel container
    carouselContainer.addEventListener('wheel', handleScroll, { passive: true });
    
    // Initial carousel display
    updateCarousel();
  });
  