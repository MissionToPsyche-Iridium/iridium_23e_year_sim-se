/*
* This screen_testing is used for the testing of screen sizing
* 
* Class:      SER 401
* Team:       35
* Project:    NASA Psyche Mission: Year on Psyche Simulation
* Authors:    Armando Arratia, Dan McNeil, Jenny Potocki, Josh Anselm, Tyler Brown
* Date:       11/8/24
* Revision:   1.1
*
*
*/

/*
========================================================================================================
File Start
========================================================================================================
*/
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