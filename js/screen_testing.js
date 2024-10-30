document.addEventListener("DOMContentLoaded", function() {
    // Get the width and height of the screen
    const width = window.innerWidth;
    const height = window.innerHeight;
  
    // Display the resolution in the div
    const resolutionDiv = document.getElementById('resolution');
    resolutionDiv.textContent = `${width} x ${height}`;
  
    // Update the resolution when the window is resized
    window.addEventListener('resize', function() {
        const updatedWidth = window.innerWidth;
        const updatedHeight = window.innerHeight;
        resolutionDiv.textContent = `${updatedWidth} x ${updatedHeight}`;
    });
  });