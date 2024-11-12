/* 
* Venus_popup.js
* 
* This Venus_popup.js creates the popup windows that display information about Venus and its 
* relationship to the Psyche mission. The user can cycle through the pages to learn more.
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
*    firstScreen() -  This opens the first popup screen. Displays overview of Venus and Psyche connection.
*    secondScreen()-  This opens the second popup screen. Displays key facts about Venus relevant to Psyche.
*    
*    thirdScreen() -  This opens the third popup screen. Shows size comparison of Venus and Psyche.
*
*    fourthScreen()-  This opens the fourth popup screen. Discusses lack of life on Venus vs Psyche.
*
*    fifthScreen() -  This opens the fifth popup screen. Compares surface conditions.
*
*    sixthScreen()-  This opens the sixth popup screen. Shows orbital relationships.
*
*    seventhScreen() -  This opens the seventh popup screen. Compares internal structures.
*
*    eighthScreen()-  This opens the eighth popup screen. Discusses lack of moons.
*
*    ninthScreen() -  This opens the ninth popup screen. Discusses lack of rings.
*
*    tenthScreen()-  This opens the tenth popup screen. Compares atmospheres.
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
  
    document.getElementById('containerOne').appendChild(overlay);
    document.getElementById('containerOne').appendChild(popup);
  
    firstScreen();

 

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

  if (popup) popup.remove();
  if (overlay) overlay.remove();

  const infoButton = document.getElementById('info');
  if (infoButton) infoButton.style.display = "inline-block";

  const fullscreen_button = document.getElementById('fullscreen_button');
  if (fullscreen_button) fullscreen_button.style.display = 'block';

  const planet_menu = document.getElementById('planet-hamburger');
  const planetMenuWasVisible = localStorage.getItem('planetMenuWasVisible') === 'true';
  if (planetMenuWasVisible && planet_menu) {
    planet_menu.style.display = 'block';
  }
}


/*****************************************************
 * firstScreen
 * 
 * This function populates and displays the first summary information popup for Venus.
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
    <div class="venus" id="screen1">
        <h1>Venus and Psyche</h1>
      </div>
      <div class="popup-content-body">
        <p>
          Venus and the asteroid Psyche represent very different bodies in our solar system. While Venus is a rocky terrestrial planet, Psyche is believed to be the exposed metallic core of an early planetary body. Venus's extreme surface conditions contrast sharply with Psyche's airless, metallic environment. Understanding these differences helps scientists better comprehend planetary formation and evolution.
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
 * This function populates and displays the second summary information popup for Venus.
 * Information displayed is the Size and Dimensions of Venus. 
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
      <div class="venus" id="screen2">
        <div class="popup-content-header">
          <h2>Quick Facts: Venus vs Psyche</h2>
        </div>
        <div class="popup-content-body">
          <ul>
            <li>Venus is the second planet from the Sun, while Psyche orbits in the asteroid belt between Mars and Jupiter</li>
            <li>Venus has a diameter of 12,104 km, while Psyche is about 226 km across</li>
            <li>Venus has crushing atmospheric pressure, while Psyche has no atmosphere</li>
            <li>Venus has surface temperatures around 462°C, while Psyche's surface varies greatly</li>
            <li>Venus is primarily rocky, while Psyche is mostly metal</li>
            <li>Venus rotates backwards compared to most planets, while Psyche rotates normally</li>
            <li>Venus has no moons, similar to Psyche</li>
            <li>Venus was named after the Roman goddess of love, while Psyche was named after a Greek mythological princess</li>
          </ul>
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
 * This function populates and displays the third summary information popup for Venus.
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
      <div class="venus" id="screen3">
        <div class="popup-content-header">
          <h2>Size Comparison</h2>
        </div>
        <div class="popup-content-body">
          <p>
            Venus is vastly larger than asteroid Psyche. With a diameter of 12,104 km, Venus is about 53 times wider than Psyche's approximately 226 km diameter. This dramatic size difference reflects their different origins - Venus formed as a full planet, while Psyche is thought to be the remnant core of a planetesimal that was stripped of its outer layers through violent collisions early in the solar system's history.
          </p>
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
 * This function populates and displays the forth summary information popup for Venus.
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
      <div class="venus" id="screen4">
        <div class="popup-content-header">
          <h2>Life Potential</h2>
        </div>
        <div class="popup-content-body">
          <p>
            Neither Venus nor Psyche are considered candidates for life as we know it. Venus's extreme surface temperatures and pressures make it inhospitable, while its thick atmosphere of carbon dioxide creates a runaway greenhouse effect. Psyche, being a metallic asteroid, lacks the necessary ingredients and conditions for life. Both bodies, however, provide valuable insights into planetary evolution and the early solar system.
          </p>
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
 * This function populates and displays the fifth summary information popup for Venus.
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
      <div class="venus" id="screen5">
        <div class="popup-content-header">
          <h2>Surface Conditions</h2>
        </div>
        <div class="popup-content-body">
          <p>
           Venus has a hot, rocky surface with temperatures around 462°C and crushing atmospheric pressure. In contrast, Psyche's surface is believed to be mostly iron and nickel metal, exposed after the rocky outer layers were stripped away. While Venus's surface is constantly renewed through volcanic activity, Psyche's metallic surface bears ancient scars from impacts billions of years ago.
          </p>
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
 * This function populates and displays the sixth summary information popup for Venus.
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
      <div class="venus" id="screen6">
        <div class="popup-content-header">  
          <h2>Orbit and Rotation</h2>
        </div>
        <div class="popup-content-body">
          <p>
            Paragraph about Venus's orbit and rotation
          </p>
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
 * This function populates and displays the seventh summary information popup for Venus.
 * Compares the internal structure of Venus to Psyche.
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
  <div class="venus" id="screen7">
    <div class="popup-content-header">  
      <h2>Internal Structure: Venus vs Psyche</h2>
    </div>
    <div class="popup-content-body">
      <p>
        While Venus has a layered internal structure with a core, mantle and crust similar to Earth, 
        Psyche is believed to be the exposed metallic core of an ancient protoplanet. Studying Venus's 
        internal structure helps us understand what Psyche's parent body may have looked like before its 
        outer layers were stripped away in ancient collisions.
      </p>
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
      sixthScreen();
  });
  document.getElementById('closeButton').addEventListener('click', () => {
      closePopup();
  });
  document.getElementById('nextButton').addEventListener('click', () => {
      eighthScreen();
  });
}


/*****************************************************
 * eighthScreen()
 * 
 * This function populates and displays the eighth summary information popup for Venus.
 * Compares Venus's lack of moons to Psyche.
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
      <div class="venus" id="screen8">
        <div class="popup-content-header">
        <h2>No Moons: Venus and Psyche</h2>
        </div>
        <div class="popup-content-body">
          <p>
            Venus and Psyche share the characteristic of having no moons. While Venus likely lacks moons 
            due to its proximity to the Sun and strong gravitational effects, Psyche's lack of moons is 
            likely due to its small size and location in the asteroid belt. Understanding why these bodies 
            lack moons helps us better understand the formation and evolution of the solar system.
          </p>
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
 * This function populates and displays the ninth summary information popup for Venus.
 * Compares Venus's lack of rings to Psyche.
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
    <div class="venus" id="screen9">
      <div class="popup-content-header">
        <h2>No Rings: Venus and Psyche</h2>
      </div>
      <div class="popup-content-body">
        <p>
          Like Psyche, Venus has no ring system. While gas giants tend to have extensive ring systems, 
          rocky bodies like Venus and metallic asteroids like Psyche typically lack the necessary 
          conditions and materials to form and maintain rings. This similarity highlights their nature 
          as solid, compact bodies in our solar system.
        </p>
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
 * This function populates and displays the tenth summary information popup for Venus.
 * Compares Venus's atmosphere to Psyche's lack of atmosphere.
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
      <div class="venus" id="screen10">
        <div class="popup-content-header">
          <h2>Atmosphere: Venus vs Psyche</h2>
        </div>
        <div class="popup-content-body">
          <p>
            Venus has a thick, toxic atmosphere primarily composed of carbon dioxide, while Psyche, 
            being an asteroid, has no atmosphere at all. This contrast helps scientists understand 
            how different celestial bodies retain or lose their atmospheres based on their size, 
            composition, and location in the solar system. The lack of atmosphere on Psyche will 
            make it easier for the Psyche mission to study its metallic surface directly.
          </p>
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