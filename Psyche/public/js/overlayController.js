export function initOverlay() {
    console.log("Initializing overlay..."); // This should only log once
  
    const overlay = document.getElementById("infoOverlay");
    const toggleButton = document.getElementById("toggleOverlay");
    const overlayContainer = document.getElementById("overlay-container");
  
    if (!overlay || !toggleButton || !overlayContainer) {
      console.error("Overlay, toggle button, or overlay-container not found");
      return;
    }
  
    // Check if listeners are already present
    if (toggleButton.hasListener) {
      console.warn("Listener already bound, skipping...");
      return;
    }
  
    // Toggle overlay width on button click
    toggleButton.addEventListener("click", (event) => {
      event.stopPropagation();
      overlayContainer.classList.toggle("overlay-open");
      console.log("Toggled overlay open class:", overlayContainer.classList.contains("overlay-open"));
    });
  
    // Flag that the listener has been added
    toggleButton.hasListener = true;
}
