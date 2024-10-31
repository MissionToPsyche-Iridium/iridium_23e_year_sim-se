
/*
JS to run one carousel 

const carouselContainer = document.querySelector('.carousel-container');
const topFadeDiv = document.querySelector('.carousel-item.top-fade');
const prevDiv = document.querySelector('.carousel-item.prev');
const selectedDiv = document.querySelector('.carousel-item.selected .item-text');
const nextDiv = document.querySelector('.carousel-item.next');
const bottomFadeDiv = document.querySelector('.carousel-item.bottom-fade');
const items = ["Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

let currentIndex = 0;

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

// Calculate the width based on the longest item in the array
function setContainerWidth() {
  const longestItem = items.reduce((longest, item) => item.length > longest.length ? item : longest, "");
  
  // Create a temporary element to measure width
  const tempSpan = document.createElement("span");
  tempSpan.style.fontSize = "1.4em"; // match the font size used in the carousel
  tempSpan.style.fontFamily = "Arial, sans-serif"; // match the font family
  tempSpan.style.visibility = "hidden"; // hide it from view
  tempSpan.textContent = longestItem;
  
  document.body.appendChild(tempSpan);
  const containerWidth = tempSpan.offsetWidth + 10; // add padding space
  document.body.removeChild(tempSpan);
  
  // Apply calculated width to the carousel container
  carouselContainer.style.width = `${containerWidth}px`;
}
setContainerWidth();

// Adjust scroll sensitivity threshold
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

carouselContainer.addEventListener('wheel', handleScroll);
updateCarousel(); 
*/

/* to run two on one page */
const items = ["Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

// Function to initialize each carousel independently
function initializeCarousel(containerId) {
  const carouselContainer = document.getElementById(containerId);
  const topFadeDiv = carouselContainer.querySelector('.carousel-item.top-fade');
  const prevDiv = carouselContainer.querySelector('.carousel-item.prev');
  const selectedDiv = carouselContainer.querySelector('.carousel-item.selected .item-text');
  const nextDiv = carouselContainer.querySelector('.carousel-item.next');
  const bottomFadeDiv = carouselContainer.querySelector('.carousel-item.bottom-fade');

  let currentIndex = 0;

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

  // Set container width based on the longest item in the array
  function setContainerWidth() {
    const longestItem = items.reduce((longest, item) => item.length > longest.length ? item : longest, "");
    
    // Create a temporary element to measure width
    const tempSpan = document.createElement("span");
    tempSpan.style.fontSize = "1.4em"; // match the font size used in the carousel
    tempSpan.style.fontFamily = "Arial, sans-serif"; // match the font family
    tempSpan.style.visibility = "hidden"; // hide it from view
    tempSpan.textContent = longestItem;
    
    document.body.appendChild(tempSpan);
    const containerWidth = tempSpan.offsetWidth + 10; // add padding space
    document.body.removeChild(tempSpan);
    
    // Apply calculated width to the carousel container
    carouselContainer.style.width = `${containerWidth}px`;
  }
  
  setContainerWidth();

  // Scroll sensitivity threshold
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

  // Add scroll event listener to this carousel container
  carouselContainer.addEventListener('wheel', handleScroll);
  updateCarousel(); // Initialize carousel content
}

// Initialize both carousels by calling the function with each carousel's ID
initializeCarousel("top-carousel");
initializeCarousel("bottom-carousel");
