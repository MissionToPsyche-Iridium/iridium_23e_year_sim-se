/*
* This scroll.js handles the UI when the user is scrolling
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
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const fullscreenButton = document.getElementById('fullscreen');
    const menuLinks = document.getElementById('menu-links');
    const scrollThreshold = document.documentElement.scrollHeight * 0.05; // 5% of the total page height

    // Dynamically create the hamburger menu
    const hamburgerMenu = document.createElement('div');
    hamburgerMenu.id = 'hamburger-menu';
    hamburgerMenu.classList.add('hamburger');

    // Create the three bars inside the hamburger menu
    for (let i = 0; i < 3; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        hamburgerMenu.appendChild(bar);
    }

    // Append the hamburger menu to the header
    header.appendChild(hamburgerMenu);

    // Toggle hamburger menu visibility on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            menuLinks.classList.remove('menu-active'); // Hide menu when scrolling back up
        }
    });

    // Toggle menu visibility on click
    hamburgerMenu.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click from triggering outside click event
        menuLinks.classList.toggle('menu-active');
        fullscreenButton.style.display = menuLinks.classList.contains('menu-active') ? 'none' : 'block';
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!menuLinks.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            menuLinks.classList.remove('menu-active');
            fullscreenButton.style.display = 'block';
        }
    });
});
