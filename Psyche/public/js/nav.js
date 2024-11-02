document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  const body = document.body;

  // Toggle the navigation menu open/close state
  menuToggle.addEventListener('click', function (event) {
    event.preventDefault();
    body.classList.toggle('nav-active');
    console.log("menu clicked");

    // Enable pointer-events only when nav is active
    nav.style.pointerEvents = body.classList.contains('nav-active') ? 'auto' : 'none';
  });

  // Close navigation menu when clicking outside of it
  document.addEventListener('click', function (event) {
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
      body.classList.remove('nav-active');
      nav.style.pointerEvents = 'none';  // Disable interactions when nav is closed
    }
  });

  // Expandable sub-menus functionality
  const expandableItems = document.querySelectorAll('nav .menu-item-has-children');
  
  expandableItems.forEach(item => {
    const link = item.querySelector('a');

    link.addEventListener('click', function (event) {
      event.preventDefault();
      
      // Toggle active class to expand or collapse the sub-menu
      item.classList.toggle('active');

      // Reverse other open items to keep only one expanded at a time (optional)
      expandableItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
    });
  });
});
