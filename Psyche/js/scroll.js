/**
 * This code handles the responsive navigation menu functionality:
 * - Creates a hamburger menu icon dynamically when the page loads
 * - Shows/hides the header based on scroll position (appears after scrolling 5% down the page)
 * - Toggles the navigation menu when clicking the hamburger icon
 * - Hides the fullscreen button when menu is open
 * - Closes the menu when clicking outside of it
 * - Handles mobile-friendly navigation
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
