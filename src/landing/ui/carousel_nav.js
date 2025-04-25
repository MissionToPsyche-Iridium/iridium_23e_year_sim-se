import { moveToSection } from './../utils/sectionTracking.js';

export function setupCarouselNavigation(sections) {
  const navContainer = document.createElement('div');
  navContainer.id = 'carousel-nav';
  document.body.appendChild(navContainer);

  let currentIndex = 1;

  function renderNav() {
    navContainer.innerHTML = "";
  
    const visibleRange = 3; // show 3 above and 3 below
    const totalVisible = visibleRange * 2 + 1;
  
    for (let offset = -visibleRange; offset <= visibleRange; offset++) {
      const i = (currentIndex + offset + sections.length) % sections.length;
      const distance = Math.abs(offset);
  
      const item = document.createElement('div');
      item.className = 'carousel-item';
      item.textContent = sections[i].name;
  
      if (offset === 0) {
        item.classList.add('active');
      } else {
        item.style.opacity = `${1 - distance * 0.2}`;
        item.style.transform = `scale(${1 - distance * 0.05})`;
      }
  
      item.addEventListener('click', () => {
        currentIndex = i;
        moveToSection(i, sections[i].position);
        renderNav();
      });
  
      navContainer.appendChild(item);
    }
  }
  

  // Optional: scroll or keyboard support
  window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
      currentIndex = (currentIndex + 1) % sections.length;
    } else if (e.deltaY < 0) {
      currentIndex = (currentIndex - 1 + sections.length) % sections.length;
    }
    moveToSection(currentIndex, sections[currentIndex].position);
    renderNav();
  });
  
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      currentIndex = (currentIndex + 1) % sections.length;
    } else if (e.key === 'ArrowUp') {
      currentIndex = (currentIndex - 1 + sections.length) % sections.length;
    } else {
      return;
    }
    moveToSection(currentIndex, sections[currentIndex].position);
    renderNav();
  });
  

  renderNav();
}
