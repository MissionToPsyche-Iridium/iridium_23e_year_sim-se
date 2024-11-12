/* 
* psyche_popup.js
* 
* This popup.js creates the popup windows that display information to the user. The user
* can cycle through the pages as needed. 
* 
* Class:      SER 401
* Team:       35
* Project:    NASA Psyche Mission: Year on Psyche Simulation
* Authors:    Armando Arratia, Dan McNeil, Jenny Potocki, Josh Anselm, Tyler Brown
* Date:       10/17/24
* Revision:   1.0
*
* Functions/Pages:
*    openPopup() -    This opens the popup page. Called when the "More Information" button
*                     is clicked. 
*
*    closePopup() -   This closes the popup. Called when the "Close" button is pressed on any
*                     popup page. 
*
*    firstScreen() -  This opens the first popup screen. Displays the summary info information
*                     of Psyche. 
*    secondScreen()-  This opens the second popup screen. Displays the size and dimensions info.
*    
*    thirdScreen() -  This opens the third popup screen. Currently blank. 
*
*    fourthScreen()-  This opens the forth popup screen. Currently blank. 
*
*    fifthScreen() -  This opens the fifth popup screen. Currently blank. 
*
*    sixthScreen()-  This opens the sixth popup screen. Currently blank. 
*
*    seventhScreen() -  This opens the seventh popup screen. Currently blank. 
*
*    eighthScreen()-  This opens the sixth popup screen. Displays the Moon info. 
*
*    ninthScreen() -  This opens the seventh popup screen. Displays the ring info
*
*    tenthScreen()-  This opens the sixth popup screen. Displays the atmosphere info. 
*
*/

/*
========================================================================================================
File Start
========================================================================================================
*/

/*****************************************************
 * More Information Button Listener
 * 
 * This listener waits for the "More Information" button to be 
 * clicked. Once clicked, it hides the more info button and 
 * it calls the popup function. 
 * 
 * arguments:
 *  'DOMContentLoaded' - this is the event type
 *  function - the callback function that will be called
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  popups will load to the front of the users view
 * 
 */
document.addEventListener('DOMContentLoaded', function() {
    const infoButton = document.getElementById('info');
    const fullscreen_button = document.getElementById('fullscreen_button');
    if (infoButton) {
        infoButton.addEventListener('click', function() {
            infoButton.style.display = "none";  // Hide the 'info' button after it's clicked
            fullscreen_button.style.display = "none";
            openPopup();  // Call the function to open the popup
        });
    }
});


/*****************************************************
 * openPopup()
 * 
 * This function creates the elements needed to display the popups. Then the
 * firstScreen function is called.
 * 
 * arguments:
 *  none
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  The first popup screen elements are initialized and firstScreen function is called. 
 * 
 */
function openPopup() {
  const overlay = document.createElement('div');
  overlay.id = 'popupOverlay';
  overlay.className = 'popup-overlay';
  const popup = document.createElement('div');
  popup.id = 'myPopup';
  popup.className = 'popup';
  popup.innerHTML = `<div class="popup-content"></div>`;

  // Append overlay and popup to containerOne
  document.getElementById('containerOne').appendChild(overlay);
  document.getElementById('containerOne').appendChild(popup);

 

  firstScreen(); // Initialize with the first screen
}

/*****************************************************
 * closePopup()
 * 
 * This function removes the elements for displaying the popup screens. The
 * More Information button is made visible again. 
 * 
 * arguments:
 *  none
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  The popups care closed, the display elements are removed and the more info button
 *  is made visible again. 
 * 
 */
function closePopup() {
  const popup = document.getElementById('myPopup');
  const overlay = document.getElementById('popupOverlay');
  
  if (popup) {
      popup.remove();  // Safely remove the popup
  }
  if (overlay) {
      overlay.remove(); // Safely remove the overlay
  }

  const infoButton = document.getElementById('info');
  if (infoButton) {
      infoButton.style.display = "inline-block";  // Make the 'info' button visible again
  }

  const fullscreen_button = document.getElementById('fullscreen_button');
  if (fullscreen_button) {
      fullscreen_button.style.display = 'block';
  }

  const planet_menu = document.getElementById('planet-hamburger');
  if (planet_menu) planet_menu.style.display = 'block';
}


/*****************************************************
 * firstScreen
 * 
 * This function populates and displays the first summary information popup for Psyche.
 * Elements that are populated were initialized in the openPopup(). 
 * 
 * arguments:
 *  none
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  The first popup screen is initialized and displays for the user.
 * 
 * listeners: 
 *  nextButton - calls secondScreen()
 *  closeButton - calls closePopup()
 * 
 */
function firstScreen() {
    const popupContent = document.querySelector('.popup-content');
    // Update the content of the first screen
    popupContent.innerHTML = `
    <div  id="screen1">
      <div class="popup-content-header" id="header1">
        <img src="images/psyche_popup_images/Psyche_icon_white.svg" id="logo">
        <h1>Asteroid 16 Psyche</h1>
        <img src="images/psyche_popup_images/Psyche_icon_white.svg" id="logo">
      </div>
      <div class="popup-content-body">
        <p>
          16 Psyche is a metal-rich asteroid, contained within the asteroid belt, orbiting the Sun between Mars & Jupiter. This asteroid is of particular
           interest, as Psyche may have started out as a core of a planetesimal. If Psyche is indeed the core of a planetsimal, this will give scientists 
           a better understanding of the inner layers of planets like Earth.
        </p>
        <p>
          Psyche was first disovered by Italian astronomer Annibale de Gasparis in 1852, named after the ancient Greek mythology goddess of the soul. Psyche 
          is currently three times farther from the sun than we are on Earth. Due to Psyche's orbit, the distance between Earth and Psyche varies from 
          186 million miles to more than 372 million miles.
        </p>
      </div>
      <div class="popup-buttons">
        <button id="closeButton">Close</button>
        <button id="nextButton">Next</button>
      </div>
    </div>
    `;
    
    // Attach event listeners for the buttons
    document.getElementById('nextButton').addEventListener('click', secondScreen); // Navigate to second screen
    document.getElementById('closeButton').addEventListener('click', closePopup); // Close the popup
}

/*****************************************************
 * secondScreen()
 * 
 * This function populates and displays the second summary information popup for Psyche.
 * Information displayed is the Size and Dimensions of Psyche. 
 * (Elements that are populated were initialized in the openPopup().) 
 * 
 * arguments:
 *  none
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  The second popup screen is initialized and displays for the user.
 * 
 * listeners: 
 *  prevButton - calls firstScreen()
 *  closeButton - calls closePopup()
 *  nextButton - calls secondScreen()
 * 
 */
function secondScreen() {
    const popupContent = document.querySelector('.popup-content');
    
    // Update the content of the second screen
    popupContent.innerHTML = `
      <div id="screen2">
        <div class="popup-content-header">
          <h2>Quick Facts</h2>
        </div>
        <div class="popup-content-body">
          <ul>
            <li>Psyche was the 16<sup>th</sup> asteroid discovered, hence it is sometimes referred to as 16 Psyche.</li>
            <li>M-Type Asteroid</li>
            <li>Believed to be the core of a planetsimal</li>
            <li>1 Year on Psyche is approximately 5 years on Earth</li>
            <li>1 Day on Psyche is about 4 hours on Earth</li>
            <li>Psyche has seasons</li>
            <li>Psyche's temperature changes drastically between seasons (>100K / ~180&deg)</li>
            <li>The Psyche mission is expected to reach the asteroid in 2029</li>
          </ul>
          <video id="video1" controls autoplay muted loop>
            <source src="images/psyche_popup_images/psyche_quick_overview.mp4" type="video/mp4">
          </video>
        </div>
        <div class="popup-buttons">
          <button id="prevButton">Previous</button>
          <button id="closeButton">Close</button>
          <button id="nextButton">Next</button>
        </div>
      </div>
    `;
    
    // Re-attach event listeners for the new buttons after updating the content
    document.getElementById('prevButton').addEventListener('click', firstScreen); // Go back to the first screen
    document.getElementById('closeButton').addEventListener('click', closePopup); // Close the popup
    document.getElementById('nextButton').addEventListener('click', thirdScreen); // Move to the third screen
}

/*****************************************************
 * thirdScreen()
 * 
 * This function populates and displays the third summary information popup for Psyche.
 * No information is populated for this screen currently. 
 * (Elements that are populated were initialized in the openPopup().) 
 * 
 * arguments:
 *  none
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  The third popup screen is initialized and displays for the user.
 * 
 * listeners: 
 *  prevButton - calls secondScreen()
 *  closeButton - calls closePopup()
 *  nextButton - calls forthScreen()
 * 
 */
function thirdScreen() {
    const popupContent = document.querySelector('.popup-content');
    
    // Update content for the third screen
    popupContent.innerHTML = `
      <div id="screen3">
        <div class="popup-content-header">
          <h2>Size and Dimensions</h2>
        </div>
        <div class="popup-content-body">
          <p>
            16 Psyche is a potato-like shape, measuring 173 miles (280 kilometers) long at it widest spot, and 144 miles (232 kilometers) long. The total surface 
            area is 64,000 square miles (165,800 square kilometers).<br><br> NASA Jet Propulsion Laboratory (JPL) has compared its size to the State of Maryland 
            in the United States of America.
          </p>
          <img id="psyche_size" src = "images/psyche_popup_images/Psyche_MD_3.jpg">
        </div>
        <div class="popup-buttons">
          <button id="prevButton">Previous</button>
          <button id="closeButton">Close</button>
          <button id="nextButton">Next</button>
        </div>
      </div>
    `;
    
    // Attach event listeners for buttons
    document.getElementById('prevButton').addEventListener('click', secondScreen); // Go back to the second screen
    document.getElementById('closeButton').addEventListener('click', closePopup); // Close the popup
    document.getElementById('nextButton').addEventListener('click', fourthScreen); // Move to the fourth screen
}

/*****************************************************
 * forthScreen()
 * 
 * This function populates and displays the forth summary information popup for Psyche.
 * No information is populated for this screen currently. 
 * (Elements that are populated were initialized in the openPopup().) 
 * 
 * arguments:
 *  none
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  The forth popup screen is initialized and displays for the user.
 * 
 * listeners: 
 *  prevButton - calls thirdScreen()
 *  closeButton - calls closePopup()
 *  nextButton - calls fifthScreen()
 * 
 */
function fourthScreen() {
    const popupContent = document.querySelector('.popup-content');
    
    // Update content for the fourth screen
    popupContent.innerHTML = `
      <div id="screen4">
        <div class="popup-content-header">
          <h2>No Life on Psyche</h2>
        </div>
        <div class="popup-content-body">
          <p>
            The scientific community believes that comets and asteroids are responsible for delivering key ingredients, including water, 
            which is the key complex chemistry needed to sustain life on Earth. Some asteroids are <b><i>believed</i></b> to have the capability 
            of supporting human life.
          <br>
          <br>
            Currently, 16 Psyche does not show evidence of the critical nutrients of water, a breathable atmosphere, and a hospitable 
            environment to allow for human life.
          </p>
          <img src="images/psyche_popup_images/ocean.jpg" id="ocean">
        </div>
          
        <div class="popup-buttons">
          <button id="prevButton">Previous</button>
          <button id="closeButton">Close</button>
          <button id="nextButton">Next</button>
        </div>
      </div>
    `;
    
    // Attach event listeners for buttons
    document.getElementById('prevButton').addEventListener('click', thirdScreen); // Go back to the third screen
    document.getElementById('closeButton').addEventListener('click', closePopup); // Close the popup
    document.getElementById('nextButton').addEventListener('click', fifthScreen); // Move to the fifth screen
}

/*****************************************************
 * fifthScreen()
 * 
 * This function populates and displays the fifth summary information popup for Psyche.
 * No information is populated for this screen currently. 
 * (Elements that are populated were initialized in the openPopup().) 
 * 
 * arguments:
 *  none
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  The fifth popup screen is initialized and displays for the user.
 * 
 * listeners: 
 *  prevButton - calls forthScreen()
 *  closeButton - calls closePopup()
 *  nextButton - calls sixthScreen()
 * 
 */
function fifthScreen() {
    const popupContent = document.querySelector('.popup-content');
    popupContent.innerHTML = `
      <div id="screen5">
        <div class="popup-content-header">
          <h2>Surface of Psyche</h2>
        </div>
        <div class="popup-content-body">
          <p>
            Our information, regarding 16 Psyche, is based on radar and optical observations. The observations have given evidence of a 
            surface consisting of a mix of metal and silicate. Other observations have led scientists to believe there are two crater-like 
            depressions. Scientists believe the asteroid may contain significant amounts of metal, consistent with the core of a planetesimal.
          <br>
          <br>
            The NASA Psyche mission, based on the belief that planetesimals are the building blocks of our solar system, aims to provide a deeper 
            understanding of 16 Psyche, and potentially other planets. This mission is a significant step towards shedding light on Earth's core 
            and advancing our knowledge of planetary science.
          <br>
          <br>
            16 Psyche is believed to have survived multiple violent collisions during the solar system's formation.
          </p>
          <img src="images/psyche_popup_images/Psyche_2.jpg" id="psyche_surface">
        </div>
        <div class="popup-buttons">
          <button id="prevButton">Previous</button>
          <button id="closeButton">Close</button>
          <button id="nextButton">Next</button>
        </div>
      </div>
    `;
    
    // Attach event listeners for buttons
    document.getElementById('prevButton').addEventListener('click', fourthScreen); // Go back to the fourth screen
    document.getElementById('closeButton').addEventListener('click', closePopup); // Close the popup
    document.getElementById('nextButton').addEventListener('click', sixthScreen); // Move to the sixth screen
}

/*****************************************************
 * sixthScreen()
 * 
 * This function populates and displays the sixth summary information popup for Psyche.
 * No information is populated for this screen currently. 
 * (Elements that are populated were initialized in the openPopup().) 
 * 
 * arguments:
 *  none
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  The sixth popup screen is initialized and displays for the user.
 * 
 * listeners: 
 *  prevButton - calls fifthScreen()
 *  closeButton - calls closePopup()
 *  nextButton - calls seventhScreen()
 * 
 */
function sixthScreen() {
    const popupContent = document.querySelector('.popup-content');
    
    // Update content for the sixth screen
    popupContent.innerHTML = `
      <div id="screen6">
        <div class="popup-content-header">  
          <h2>Orbit and Rotation</h2>
        </div>
        <div class="popup-content-body">
          <p>
            16 Psyche is part of the Main Asteroid Belt, sitting between Mars and Jupiter. 
            <br>
            <br>
            16 Psyche completes one rotation around the Sun, a Psyche year, approximately
            every five Earth years. 
            <br>
            <br>
            Psyche rotates along its axis, a Psyche day, about once every four hours.
          </p>
          <img src="images/psyche_popup_images/psyche_path.jpg" id="path_picture">
        </div>
        <div class="popup-buttons">
          <button id="prevButton">Previous</button>
          <button id="closeButton">Close</button>
          <button id="nextButton">Next</button>
        </div>
      </div>
    `;
    
    // Attach event listeners for buttons
    document.getElementById('prevButton').addEventListener('click', fifthScreen); // Go back to the fifth screen
    document.getElementById('closeButton').addEventListener('click', closePopup); // Close the popup
    document.getElementById('nextButton').addEventListener('click', seventhScreen); // Move to the sixth screen
}

/*****************************************************
 * seventhScreen()
 * 
 * This function populates and displays the seventh summary information popup for Psyche.
 * No information is populated for this screen currently. 
 * (Elements that are populated were initialized in the openPopup().) 
 * 
 * arguments:
 *  none
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  The seventh popup screen is initialized and displays for the user.
 * 
 * listeners: 
 *  prevButton - calls sixthScreen()
 *  closeButton - calls closePopup()
 *  nextButton - calls eighthScreen()
 * 
 */
function seventhScreen() {
  const popupContent = document.querySelector('.popup-content');

  // Update content for the seventh screen
  popupContent.innerHTML = `
  <div id="screen7">
    <div class="popup-content-header">  
      <h2>Structure</h2>
    </div>
    <div class="popup-content-body" id="video-background">
      <video autoplay muted loop playsinline id="background_video">
          <source src="images/psyche_popup_images/psyche_video.mp4" type="video/mp4">
      </video>
      <p>
        16 Psyche is classified as a Metallic-type (M-type) asteroid, the third most common type of asteroids in the solar system.
        These types of asteroids are common, however very little is known about them. 16 Psyche was previously believed to be composed
        of entirely metal, however, new data on its density points towards a mixture of metal and silicate.
        <br><br>
        Psyche is considered to be very dense. Though measurements are still being made, the current bulk density appears to be 3400 - 4100
        kilograms per cubic meter (kg/m<sup>3</sup>), composed of rock and metal. The surface is believed to be very porous, with estimates 
        ranging from 30-70% of the entire surface. The gravity on Psyche is much less than the Earth or 
        the Moon, where lifting a car on Psyche would be equivalent to lifting a dog on Earth.
      </p>
      <video id="video2" controls autoplay muted loop>
        <source src="images/psyche_popup_images/psyche_video.mp4" type="video/mp4">
      </video>
    </div>
    <div class="popup-buttons">
      <button id="prevButton">Previous</button>
      <button id="closeButton">Close</button>
      <button id="nextButton">Next</button>
    </div>
  </div>
  `;

  // Attach event listeners for buttons
  document.getElementById('prevButton').addEventListener('click', () => {
      const video = document.getElementById('background_video');
      video.pause(); // Pause the video when moving to the previous screen
      sixthScreen();
  });
  document.getElementById('closeButton').addEventListener('click', () => {
      const video = document.getElementById('background_video');
      video.pause(); // Pause the video when closing the popup
      closePopup();
  });
  document.getElementById('nextButton').addEventListener('click', () => {
      const video = document.getElementById('background_video');
      video.pause(); // Pause the video when moving to the next screen
      eighthScreen();
  });

  // Play the video when this screen loads
  const backgroundVideo = document.getElementById('background_video');
  backgroundVideo.play();
}


/*****************************************************
 * eighthScreen()
 * 
 * This function populates and displays the eighth summary information popup for Psyche.
 * The moon information is displayed for Psyche.
 * (Elements that are populated were initialized in the openPopup().) 
 * 
 * arguments:
 *  none
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  The eighth popup screen is initialized and displays for the user.
 * 
 * listeners: 
 *  prevButton - calls seventhScreen()
 *  closeButton - calls closePopup()
 *  nextButton - calls ninthScreen()
 * 
 */
function eighthScreen() {
    const popupContent = document.querySelector('.popup-content');
    
    // Update content for the eighth screen
    popupContent.innerHTML = `
      <div id="screen8">
        <div class="popup-content-header">
        <h2>No Moons Orbiting 16 Psyche</h2>
        </div>
        <div class="popup-content-body">
          <p>
            NASA has identified more than 150 asteroids that have an orbiting moon, and in some cases more than one moon.
            Other asteroids can have other asteroids orbiting each other, referred to as binary or triple asteroid systems.<br><br>16 Psyche
            does not believe to have any moons or asteroids orbiting around it, however, more information will be known in 2029 when the Pscyche
            mission is expected to reach the asteroid.
          </p>
          <img src="images/psyche_popup_images/moons.jpg" id="moon_picture">
        </div>
        <div class="popup-buttons">
          <button id="prevButton">Previous</button>
          <button id="closeButton">Close</button>
          <button id="nextButton">Next</button>
        </div>
      </div>
    `;
    
    // Attach event listeners for buttons
    document.getElementById('prevButton').addEventListener('click', seventhScreen); // Go back to the seventh screen
    document.getElementById('closeButton').addEventListener('click', closePopup); // Close the popup
    document.getElementById('nextButton').addEventListener('click', ninthScreen); // Move to the ninth screen
}

/*****************************************************
 * ninthScreen()
 * 
 * This function populates and displays the ninth summary information popup for Psyche.
 * The ring information is displayed for Psyche. 
 * (Elements that are populated were initialized in the openPopup().) 
 * 
 * arguments:
 *  none
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  The ninth popup screen is initialized and displays for the user.
 * 
 * listeners: 
 *  prevButton - calls eighthScreen()
 *  closeButton - calls closePopup()
 *  nextButton - calls tenthScreen()
 * 
 */
function ninthScreen() {
    const popupContent = document.querySelector('.popup-content');
    
    // Update content for the ninth screen
    popupContent.innerHTML = `
    <div id="screen9">
      <div class="popup-content-header">
        <h2>No Rings Around 16 Psyche</h2>
      </div>
      <div class="popup-content-body">
        <p>
          While a few asteroids are known to have rings, 16 Psyche does not possess any.
        </p>
        <img src="images/psyche_popup_images/rings.jpg" id="ring_picture">
      </div>
      <div class="popup-buttons">
        <button id="prevButton">Previous</button>
          <button id="closeButton">Close</button>
          <button id="nextButton">Next</button>
      </div>
    </div>
    `;
    
    // Attach event listeners for buttons
    document.getElementById('prevButton').addEventListener('click', eighthScreen); // Go back to the eighth screen
    document.getElementById('closeButton').addEventListener('click', closePopup); // Close the popup
    document.getElementById('nextButton').addEventListener('click', tenthScreen); // Move to the tenth screen
}

/*****************************************************
 * tenthScreen()
 * 
 * This function populates and displays the tenth summary information popup for Psyche.
 * The atmosphere information is displayed for Psyche. 
 * (Elements that are populated were initialized in the openPopup().) 
 * 
 * arguments:
 *  none
 * 
 * returns:
 *  nothing
 * 
 * changes: 
 *  The tenth popup screen is initialized and displays for the user.
 * 
 * listeners: 
 *  prevButton - calls ninthScreen()
 *  closeButton - calls closePopup()
 * 
 */
function tenthScreen() {
    const popupContent = document.querySelector('.popup-content');
    
    // Update content for the tenth screen
    popupContent.innerHTML = `
      <div id="screen10">
        <div class="popup-content-header">
          <h2>16 Psyche has no Atmosphere</h2>
        </div>
        <div class="popup-content-body">
          <p>
            Like all asteroids, 16 Psyche does not have an atmosphere. Atmospheric layers are crucial for protecting planets by shielding them from impacts. 
          <br>
          <br>
            Without an atmosphere, 16 Psyche is exposed to collisions with asteroids, comets, and other space debris.
          </p>
          <img src="images/psyche_popup_images/aurora.jpg" id="atmosphere">
          </div>
        <div class="popup-buttons">
          <button id="prevButton">Previous</button>
          <button id="closeButton">Close</button>
        </div>
      </div>
    `;
    
    // Attach event listeners for buttons
    document.getElementById('prevButton').addEventListener('click', ninthScreen); // Go back to the ninth screen
    document.getElementById('closeButton').addEventListener('click', closePopup); // Close the popup
}