/* ============================================================
   ADMINISTRATIVE HEADER
   ============================================================
   Project Name   : [Your Project Name]
   Module         : Popup Navigation and Dynamic Content Rendering
   Author         : [Your Name or Team Name]
   Created Date   : [Creation Date]
   Last Modified  : [Last Modification Date]
   Version        : [Version Number]
   Reviewed By    : [Reviewer Name]
   Description    : 
   This module dynamically renders informational content within 
   a popup interface, organized into multiple screens. Users can 
   navigate through the screens using next and previous buttons. 
   Each screen displays specific facts and data about the Sun, 
   ranging from its temperature and structure to its orbit and 
   magnetic field. External resources are also provided for further 
   exploration. The script ensures smooth transitions between 
   screens and maintains the current state of navigation.

   Usage Instructions:
   1. Place HTML elements (e.g., buttons and popup containers) with 
      appropriate classes and IDs as referenced in the script.
   2. Ensure the necessary styles and DOM elements are loaded before 
      the script runs.

   Dependencies:
   - None

   Notes:
   - Modify screen content and structure by updating the screen 
     functions defined in the module.
   - Ensure that referenced resources are accessible and valid.

   ============================================================
*/

/* ===============================
   DOMContentLoaded Event Handler
   ===============================
   Waits for the DOM to load before executing the script. Selects key 
   DOM elements and initializes the current screen index for navigation.
*/
document.addEventListener("DOMContentLoaded", () => {
  const popupContent = document.querySelector('.popup-content');
  const prevIcon = document.getElementById('previous-page');
  const nextIcon = document.getElementById('next-page');
  const header = document.querySelector('.info-content h2');
  let currentScreenIndex = 0;

  /* ===============================
     Screen Rendering Functions
     ===============================
     Each function corresponds to a specific screen and updates the 
     popup content and header with relevant information about the Sun.
  */
  function firstScreen() {
    header.textContent = "Quick Facts";
    popupContent.innerHTML = `
      <p>Length of day: 25 Earth days at the equator and 36 at the poles.</p>
      <p>Length of year: The Sun orbits the Milky Way every 230 million years.</p>
      <p>Star type: G2 V, yellow dwarf main-sequence star.</p>
      <p>Surface temperature: 10,000 °F (5,500 °C).</p>
      <p>Corona temperature: Up to 3.5 million °F (2 million °C).</p>
    `;
  }

  function secondScreen() {
    header.textContent = "The Sun";
    popupContent.innerHTML = `
      <p>The Sun is the largest object in our solar system with a diameter 
      of about 865,000 miles. Its gravity holds the solar system together, 
      keeping all celestial bodies in orbit.</p>
      <p>Though essential to life on Earth, it is only an average star in 
      size—some stars are up to 100 times larger.</p>
    `;
  }

  function thirdScreen() {
    header.textContent = "Sun's Temperature";
    popupContent.innerHTML = `
      <p>The Sun's core reaches 27 million °F. The photosphere is cooler at 
      10,000 °F, while the corona can reach up to 3.5 million °F.</p>
    `;
  }

  function fourthScreen() {
    header.textContent = "Namesake";
    popupContent.innerHTML = `
      <p>The Sun is called "Sol" in Latin. Greek mythology names it Helios, 
      inspiring terms like "heliosphere" and "helioseismology."</p>
    `;
  }

  function fifthScreen() {
    header.textContent = "Potential for Life";
    popupContent.innerHTML = `
      <p>The Sun's energy is vital for life on Earth. However, its environment 
      is uninhabitable due to extreme temperatures and radiation.</p>
    `;
  }

  function sixthScreen() {
    header.textContent = "Size and Distance";
    popupContent.innerHTML = `
      <p>The Sun’s radius is 435,000 miles, and it is 93 million miles from 
      Earth. The closest star system is Alpha Centauri.</p>
    `;
  }

  function seventhScreen() {
    header.textContent = "Orbit and Rotation";
    popupContent.innerHTML = `
      <p>The Sun orbits the Milky Way at 450,000 mph, taking 230 million years 
      to complete one orbit. It rotates every 25 days at the equator and 36 days 
      at the poles.</p>
    `;
  }

  function eighthScreen() {
    header.textContent = "Moons and Rings";
    popupContent.innerHTML = `
      <p>The Sun has no moons. Rings of gas and dust, remnants from its formation, 
      circle it under the gravitational influence of nearby planets.</p>
    `;
  }

  function ninthScreen() {
    header.textContent = "Formation";
    popupContent.innerHTML = `
      <p>The Sun formed 4.6 billion years ago from a nebula. It will eventually 
      become a red giant and later shrink into a white dwarf.</p>
    `;
  }

  function tenthScreen() {
    header.textContent = "Structure";
    popupContent.innerHTML = `
      <p>The Sun has a core, radiative zone, and convection zone. Its surface 
      regions include the photosphere, chromosphere, and corona.</p>
    `;
  }

  function eleventhScreen() {
    header.textContent = "Surface";
    popupContent.innerHTML = `
      <p>The photosphere emits visible light and reaches 10,000°F. It marks the 
      Sun’s outermost layer but lacks a solid surface.</p>
    `;
  }

  function twelfthScreen() {
    header.textContent = "Atmosphere";
    popupContent.innerHTML = `
      <p>The Sun’s atmosphere consists of the photosphere, chromosphere, and corona. 
      Solar events like sunspots and flares occur here.</p>
    `;
  }

  function thirteenthScreen() {
    header.textContent = "Magnetosphere";
    popupContent.innerHTML = `
      <p>The Sun's heliosphere extends beyond the planets. Its magnetic field, 
      shaped by solar wind, flips polarity every 11 years, affecting space weather.</p>
    `;
  }

  function fourteenthScreen() {
    header.textContent = "References";
    popupContent.innerHTML = `
      <p><a href="https://science.nasa.gov/sun/facts/#hds-sidebar-nav-12" 
      target="_blank">NASA Sun Facts</a></p>
      <p><a href="https://science.nasa.gov/heliophysics/" target="_blank">
      NASA Heliophysics</a></p>
      <p><a href="https://www.swpc.noaa.gov/" target="_blank">
      NOAA Space Weather Center</a></p>
    `;
  }

  const screens = [
    firstScreen, secondScreen, thirdScreen, fourthScreen, fifthScreen,
    sixthScreen, seventhScreen, eighthScreen, ninthScreen, tenthScreen,
    eleventhScreen, twelfthScreen, thirteenthScreen, fourteenthScreen
  ];

  /* ===============================
     Screen Rendering and Navigation
     ===============================
     Renders the current screen based on the index. Listens for 
     clicks on the next and previous buttons to navigate through 
     the screens.
  */
  function renderScreen() {
    screens[currentScreenIndex]();
  }

  prevIcon.addEventListener('click', () => {
    if (currentScreenIndex > 0) {
      currentScreenIndex--;
      renderScreen();
    }
  });

  nextIcon.addEventListener('click', () => {
    if (currentScreenIndex < screens.length - 1) {
      currentScreenIndex++;
      renderScreen();
    }
  });

  renderScreen();
});

