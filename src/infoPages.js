document.addEventListener("DOMContentLoaded", () => {
  const popupContent = document.querySelector('.popup-content');
  const prevIcon = document.getElementById('previous-page');
  const nextIcon = document.getElementById('next-page');
  const header = document.querySelector('.info-content h2'); // Correct selector

  let currentScreenIndex = 0;

  function firstScreen() {
    header.textContent = "Quick Facts";
    popupContent.innerHTML = `
      <p>
        Length of day: 25 Earth days at the equator and 36 Earth days at the poles.
      </p>
      <p>
        Length of year: The Sun doesn't have a "year," per se. But the Sun orbits the 
        center of the Milky Way about every 230 million Earth years, bringing the 
        planets, asteroids, comets, and other objects with it.
      </p>
      <p>Star type: G2 V, yellow dwarf main-sequence star</p>
      <p>Surface temperature: (Photosphere) 10,000 °F (5,500 °C)</p>
      <p>Corona (solar atmosphere) temperature: Up to 3.5 million °F (2 million °C)</p>
    `;
  }

  function secondScreen() {
    header.textContent = "The Sun";
    popupContent.innerHTML = `
      <p>The Sun is the largest object in our solar system. Its diameter is about 
      865,000 miles (1.4 million kilometers). Its gravity holds the solar system 
      together, keeping everything from the biggest planets to the smallest bits 
      of debris in orbit around it.</p>
      <p>Even though the Sun is the center of our solar system and essential to 
      our survival, it’s only an average star in terms of size. Some stars are up 
      to 100 times larger!</p>
    `;
  }

  function thirdScreen() {
    header.textContent = "Sun's Temperature";
    popupContent.innerHTML = `
      <p>The hottest part of the Sun is its core, where temperatures top 27 million °F 
      (15 million °C). The surface – the photosphere – is cooler at 10,000 °F 
      (5,500 °C). The corona, however, reaches up to 3.5 million °F (2 million °C), 
      making it hotter the farther it stretches from the surface.</p>
    `;
  }

  function fourthScreen() {
    header.textContent = "Namesake";
    popupContent.innerHTML = `
      <p>The Sun is called "Sol" in Latin, influencing terms like "solar." The 
      Greek god Helios inspires names like "heliosphere" and "helioseismology."</p>
    `;
  }
  
  function fifthScreen() {
    header.textContent = "Potential for Life";
    popupContent.innerHTML = `
      <p>The Sun's light and energy are essential for life on Earth, despite its 
      uninhabitable environment due to extreme temperatures and radiation.</p>
    `;
  }
  
  function sixthScreen() {
    header.textContent = "Size and Distance";
    popupContent.innerHTML = `
      <p>The Sun’s radius is 435,000 miles, 330,000 times Earth's mass. It’s 93 
      million miles from Earth, with Alpha Centauri being its closest star system.</p>
    `;
  }
  
  function seventhScreen() {
    header.textContent = "Orbit and Rotation";
    popupContent.innerHTML = `
      <p>The Sun orbits the Milky Way at 450,000 mph, taking 230 million years 
      per orbit. It rotates every 25 days at the equator and 36 days at the poles.</p>
    `;
  }
  
  function eighthScreen() {
    header.textContent = "Moons and Rings";
    popupContent.innerHTML = `
      <p>The Sun has no moons. Gas and dust rings, remnants from its formation, 
      circle the Sun due to gravitational forces from planets.</p>
    `;
  }
  
  function ninthScreen() {
    header.textContent = "Formation";
    popupContent.innerHTML = `
      <p>The Sun formed 4.6 billion years ago from a nebula and will eventually 
      become a red giant before shrinking into a white dwarf.</p>
    `;
  }
  
  function tenthScreen() {
    header.textContent = "Structure";
    popupContent.innerHTML = `
      <p>The Sun is composed of a core, radiative zone, and convection zone. Its 
      surface regions include the photosphere, chromosphere, and corona.</p>
    `;
  }
  
  function eleventhScreen() {
    header.textContent = "Surface";
    popupContent.innerHTML = `
      <p>The photosphere emits visible light and reaches 10,000°F. It lacks a 
      solid surface but marks the Sun’s outermost layer.</p>
    `;
  }
  
  function twelfthScreen() {
    header.textContent = "Atmosphere";
    popupContent.innerHTML = `
      <p>The Sun’s atmosphere includes the photosphere, chromosphere, and corona. 
      Solar events like sunspots, solar flares, and coronal mass ejections occur here.</p>
    `;
  }
  function thirteenthScreen() {
    header.textContent = "Magnetosphere";
    popupContent.innerHTML = `
      <p>The Sun’s magnetosphere, or heliosphere, extends beyond the planets. It’s 
      shaped by solar wind and creates the Parker spiral due to the Sun’s rotation. 
      The Sun's magnetic cycle flips polarity roughly every 11 years, affecting space 
      weather, which can disrupt satellites and power grids on Earth.</p>
    `;
  }
  function fourteenthScreen() {
    header.textContent = "References";
    popupContent.innerHTML = `
      <p><a href="https://science.nasa.gov/sun/facts/#hds-sidebar-nav-12" target="_blank">
      NASA Sun Facts</a></p>
      <p><a href="https://science.nasa.gov/heliophysics/" target="_blank">
      NASA Heliophysics</a></p>
      <p><a href="https://www.swpc.noaa.gov/" target="_blank">
      NOAA's Space Weather Prediction Center</a></p>
    `;
  }

  const screens = [firstScreen, secondScreen, thirdScreen, fourthScreen, fifthScreen, 
    sixthScreen, seventhScreen, eighthScreen, ninthScreen, tenthScreen, eleventhScreen,
    twelfthScreen, thirteenthScreen, fourteenthScreen];

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
