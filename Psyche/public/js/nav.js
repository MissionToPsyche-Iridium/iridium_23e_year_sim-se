/* ===============================
   DOMContentLoaded Event Listener
   Initializes menu functionality once the document content is fully loaded.
   Sets up menu toggle, navigation menu state, and expandable sub-menus.
   =============================== */
   document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const body = document.body;
  
    /* ===============================
       Menu Toggle Functionality
       Toggles the navigation menu's open/close state when the menu toggle is clicked.
       Enables pointer-events only when the navigation is active, and dispatches 
       a 'navToggle' event to allow external handling.
       =============================== */
    menuToggle.addEventListener('click', function (event) {
      event.preventDefault();
      body.classList.toggle('nav-active');
      console.log("menu clicked");
      nav.style.pointerEvents = body.classList.contains('nav-active') ? 'auto' : 'none';
  
      const navToggleEvent = new Event('navToggle');
      document.dispatchEvent(navToggleEvent);
    });
  
    /* ===============================
       Outside Click to Close Menu
       Listens for clicks outside of the navigation menu to close it.
       Removes the 'nav-active' class and disables pointer-events when clicked outside.
       Dispatches a 'navToggle' event after closing.
       =============================== */
    document.addEventListener('click', function (event) {
      if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
        body.classList.remove('nav-active');
        nav.style.pointerEvents = 'none';
        const navToggleEvent = new Event('navToggle');
        document.dispatchEvent(navToggleEvent);
      }
    });
  
    /* ===============================
       Expandable Sub-Menus Initialization
       Selects all expandable menu items with sub-menus and initially hides each sub-menu.
       Sets 'display: none' on each sub-menu for hidden state on load.
       =============================== */
    const expandableItems = document.querySelectorAll('nav .menu-item-has-children');
    
    expandableItems.forEach(item => {
      const subMenu = item.querySelector('.sub-menu');
      if (subMenu) {
        subMenu.style.display = 'none';
      }
    });
  
    /* ===============================
       Expandable Sub-Menus Toggle
       Adds click event listeners to each expandable menu item to toggle visibility.
       Toggles 'display: block' for open state and 'display: none' for collapsed state.
       Adds 'active' class to expanded items. Optionally collapses other open items
       to ensure only one sub-menu remains expanded at a time.
       =============================== */
    expandableItems.forEach(item => {
      const link = item.querySelector('a');
  
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const subMenu = item.querySelector('.sub-menu');
        
        if (subMenu.style.display === 'none') {
          subMenu.style.display = 'block';
          item.classList.add('active');
        } else {
          subMenu.style.display = 'none';
          item.classList.remove('active');
        }
  
        expandableItems.forEach(otherItem => {
          if (otherItem !== item) {
            const otherSubMenu = otherItem.querySelector('.sub-menu');
            if (otherSubMenu) {
              otherSubMenu.style.display = 'none';
              otherItem.classList.remove('active');
            }
          }
        });
      });
    });
  });
  