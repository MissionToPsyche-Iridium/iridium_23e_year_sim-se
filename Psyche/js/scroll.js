document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const fullscreen_button = document.getElementById('fullscreen')
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const menuLinks = document.getElementById('menu-links');
    const scrollThreshold = document.documentElement.scrollHeight * 0.05; // 5% of the total page height

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
        fullscreen_button.style.display = 'none';
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!menuLinks.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            menuLinks.classList.remove('menu-active');
            fullscreen_button.style.display = 'block';
        }
    });
});
