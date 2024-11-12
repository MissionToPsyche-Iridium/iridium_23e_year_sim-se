/* 
* popup.js
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
*                     of Mercury. 
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
 * This function populates and displays the first summary information popup for Mercury.
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
    <div class="mercury" id="screen1">
        <h1>Mercury</h1>
      </div>
      <div class="popup-content-body">
        <p>
          Paragraph about Mercury
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
 * This function populates and displays the second summary information popup for Mercury.
 * Information displayed is the Size and Dimensions of Mercury. 
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
      <div class="mercury" id="screen2">
        <div class="popup-content-header">
          <h2>Quick Facts</h2>
        </div>
        <div class="popup-content-body">
          <ul>
            <li>FACT</li>
            <li>FACT</li>
            <li>FACT</li>
            <li>FACT</li>
            <li>FACT</li>
            <li>FACT</li>
            <li>FACT</li>
            <li>FACT</li>
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
 * This function populates and displays the third summary information popup for Mercury.
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
      <div class="mercury" id="screen3">
        <div class="popup-content-header">
          <h2>Size and Dimensions</h2>
        </div>
        <div class="popup-content-body">
          <p>
            Mercury size and dimensions paragraph
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
 * This function populates and displays the forth summary information popup for Mercury.
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
      <div class="mercury" id="screen4">
        <div class="popup-content-header">
          <h2>No Life on Mercury</h2>
        </div>
        <div class="popup-content-body">
          <p>
            Paragraph about life on Mercury
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
 * This function populates and displays the fifth summary information popup for Mercury.
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
      <div class="mercury" id="screen5">
        <div class="popup-content-header">
          <h2>Surface of Mercury</h2>
        </div>
        <div class="popup-content-body">
          <p>
           Paragraphy about the surface of Mercury
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
 * This function populates and displays the sixth summary information popup for Mercury.
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
      <div class="mercury" id="screen6">
        <div class="popup-content-header">  
          <h2>Orbit and Rotation</h2>
        </div>
        <div class="popup-content-body">
          <p>
            Paragraph about Mercury's orbit and rotation
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
 * This function populates and displays the seventh summary information popup for Mercury.
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
  <div class="mercury" id="screen7">
    <div class="popup-content-header">  
      <h2>Structure of Mercury</h2>
    </div>
    <div class="popup-content-body">
      <p>
        Paragraph about the Structure of Mercury
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
 * This function populates and displays the eighth summary information popup for Mercury.
 * The moon information is displayed for Mercury.
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
      <div class="mercury" id="screen8">
        <div class="popup-content-header">
        <h2>No Moons Orbiting Mercury</h2>
        </div>
        <div class="popup-content-body">
          <p>
            Paragraph about the moons orbiting Mercury
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
 * This function populates and displays the ninth summary information popup for Mercury.
 * The ring information is displayed for Mercury. 
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
    <div class="mercury" id="screen9">
      <div class="popup-content-header">
        <h2>Rings of Mercury</h2>
      </div>
      <div class="popup-content-body">
        <p>
          Paragraph about the rings of Mercury
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
 * This function populates and displays the tenth summary information popup for Mercury.
 * The atmosphere information is displayed for Mercury. 
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
      <div class="mercury" id="screen10">
        <div class="popup-content-header">
          <h2>Mercury's Atmosphere</h2>
        </div>
        <div class="popup-content-body">
          <p>
            Paragraph about the atmosphere of Mercury
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