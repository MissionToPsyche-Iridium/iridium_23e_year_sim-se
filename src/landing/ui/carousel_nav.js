import { moveToSection, getIsMoving, setIsMoving } from './../utils/sectionTracking.js';
import { resolvePath } from '../utils/utils.js';
import { getCurrentSection } from './../utils/sectionTracking.js';

export function setupCarouselNavigation(sections) {
  const navContainer = document.createElement('div');
  navContainer.id = 'carousel-nav';
  document.body.appendChild(navContainer);

  let currentIndex = 1;

  function renderNav() {
    navContainer.innerHTML = "";
    const visibleRange = 3;

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

      item.addEventListener('click', async () => {
        // Added check for isMoving to stop new nav actions
        if (getIsMoving()) return;
        setIsMoving(true);
        await moveToSection(i, sections[i].position);
        currentIndex = i;
        renderNav();
        // Done moving so reset flag
        setIsMoving(false);
      });

      navContainer.appendChild(item);
    }
  }

  window.addEventListener('keydown', async (e) => {
    // Check for isMoving to stop new nav actions
    // Now no new arrow keys will trigger a move until the current is finished
    if (getIsMoving()) return;

    if (e.key === 'ArrowDown') {
      const nextIndex = (currentIndex + 1) % sections.length;
      setIsMoving(true);
      await moveToSection(nextIndex, sections[nextIndex].position);
      currentIndex = nextIndex;
      renderNav();
      setIsMoving(false);
    } else if (e.key === 'ArrowUp') {
      const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
      setIsMoving(true);
      await moveToSection(prevIndex, sections[prevIndex].position);
      currentIndex = prevIndex;
      renderNav();
      setIsMoving(false);
    }
  });

  // References icon overlay
  const refWrapper = document.createElement('div');
  refWrapper.id = 'ref-icon-wrapper';
  refWrapper.style.position = 'fixed';
  refWrapper.style.bottom = '30px';
  refWrapper.style.left = '30px';
  refWrapper.style.display = 'flex';
  refWrapper.style.alignItems = 'center';
  refWrapper.style.gap = '10px';
  refWrapper.style.cursor = 'pointer';
  refWrapper.style.zIndex = '1000'; 

  const refIcon = document.createElement('img');
  refIcon.id = 'ref-icon';
  refIcon.src = resolvePath('/res/icons/link-duo.png');
  refIcon.alt = 'References';
  refIcon.style.width = '36px';
  refIcon.style.height = '36px';
  refIcon.style.transition = 'transform 0.2s ease';

  const refLabel = document.createElement('span');
  refLabel.id = 'ref-label';
  refLabel.textContent = 'REFERENCES';
  refLabel.style.fontSize = '0.9rem';
  refLabel.style.fontWeight = 'bold';
  refLabel.style.fontFamily = 'sans-serif';
  refLabel.style.color = '#fff';
  refLabel.style.opacity = '0';
  refLabel.style.transform = 'translateX(-10px)';
  refLabel.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  refLabel.style.whiteSpace = 'nowrap';

  refWrapper.appendChild(refIcon);
  refWrapper.appendChild(refLabel);
  document.body.appendChild(refWrapper);

  refWrapper.addEventListener('mouseenter', () => {
    refIcon.style.transform = 'scale(1.05)';
    refLabel.style.opacity = '1';
    refLabel.style.transform = 'translateX(0)';
  });

  refWrapper.addEventListener('mouseleave', () => {
    refIcon.style.transform = 'scale(1)';
    refLabel.style.opacity = '0';
    refLabel.style.transform = 'translateX(-10px)';
  });

  refWrapper.addEventListener('click', async () => {
    // Unified all nav movements, stopped clicks during movement
    if (getIsMoving()) return;
    setIsMoving(true);
    await moveToSection(0, sections[0].position);
    currentIndex = 0;
    renderNav();
    setIsMoving(false);
  });

  renderNav();

  function syncNav() {
    const idx = getCurrentSection();
    if (idx !== currentIndex) {
      currentIndex = idx;
      renderNav();
    }
    requestAnimationFrame(syncNav);
  }
  syncNav();            
}
