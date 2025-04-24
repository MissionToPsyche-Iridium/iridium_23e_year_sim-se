import { resolvePath } from '../utils/utils.js';


let containerId = 'refs-viewport';
let wrapperId = 'refs-wrapper'; 
let iframeId = 'refs-iframe';   
let currentSrc = '';


export function loadRefContent(newSrc) {
  showRefsViewport(); // ensure the container exists

  const wrapper = document.getElementById(wrapperId);
  const iframe = document.getElementById(iframeId);

  if (!wrapper || !iframe) return;
  if (currentSrc === newSrc) return;

  // Apply rotation
  wrapper.style.transition = 'transform 1s ease-in-out';
  wrapper.style.transform = 'rotateY(180deg)';

  // When rotation starts, set up iframe load
  setTimeout(() => {
    iframe.onload = () => {
      // Once loaded, rotate back
      wrapper.style.transform = 'rotateY(0deg)';
      currentSrc = newSrc;
    };
    iframe.src = newSrc;
  }, 500);
}

  
export function showRefsViewport() {
  if (document.getElementById(containerId)) return;

  // Create wrapper that spans full viewport and positions iframe in left half
  const container = document.createElement('div');
  container.id = containerId;
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100vw';
  container.style.height = '100vh';
  container.style.display = 'flex';
  container.style.alignItems = 'center';        
  container.style.justifyContent = 'flex-end';
  container.style.pointerEvents = 'none';       
  container.style.zIndex = '100';

  const panel = document.createElement('div');
  panel.id = wrapperId;
  panel.style.transform = 'rotateY(0deg)'; 
  panel.style.transition = 'transform 1.2s cubic-bezier(0.4, 0.0, 0.2, 1)';
  panel.style.transformStyle = 'preserve-3d';
  panel.style.backfaceVisibility = 'hidden';
  panel.style.width = '40vw';                  
  panel.style.height = '70vh';                
  panel.style.marginRight = '10vw';
  panel.style.background = '#000';
  panel.style.border = '1px solid #007BFF80';
  panel.style.boxShadow = `
    0 0 10px rgba(0, 123, 255, 0.4),
    0 0 30px rgba(0, 123, 255, 0.3),
    0 0 60px rgba(0, 123, 255, 0.2)`;
  panel.style.borderRadius = '15px';
  panel.style.overflow = 'hidden';
  panel.style.pointerEvents = 'auto';        

  // Create iframe
  const iframe = document.createElement('iframe');
  iframe.id = iframeId;
  iframe.src = resolvePath("refsViewport/disclaimer.html");
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.style.backgroundColor = '#000';
  panel.style.backgroundColor = '#000';

  // Nest and attach
  panel.appendChild(iframe);
  container.appendChild(panel);
  document.body.appendChild(container);
}


export function destroyRefsViewport() {
    const container = document.getElementById('refs-viewport');
    if (container) {
      const iframe = document.getElementById('refs-iframe');
      if (iframe) {
        // clear the iframe source to stop loading 
        iframe.src = 'about:blank';
      }
      container.remove();
    }
    console.log("refs viewport destroyed");
  }
  