document.addEventListener('DOMContentLoaded', function() {
    const infoButton = document.getElementById('info');

    if (infoButton) {
        infoButton.addEventListener('click', function() {
            infoButton.style.display = "none";  // Hide the 'info' button after it's clicked
            openPopup();  // Call the function to open the popup
        });
    }
});

// Function to open the popup
function openPopup() {
    const overlay = document.createElement('div');
    overlay.id = 'popupOverlay';
    overlay.className = 'popup-overlay';

    const popup = document.createElement('div');
    popup.id = 'myPopup';
    popup.className = 'popup';
    popup.innerHTML = `<div class="popup-content"></div>`;

    document.body.appendChild(overlay);
    document.body.appendChild(popup);

    firstScreen(); // Initialize with the first screen
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('myPopup');
    const overlay = document.getElementById('popupOverlay');
    if (popup) {
        document.body.removeChild(popup);
    }
    if (overlay) {
        document.body.removeChild(overlay);
    }

    // Make the 'info' button visible again when the popup is closed
    const infoButton = document.getElementById('info');
    if (infoButton) {
        infoButton.style.display = "inline-block";  
    }
}

// first screen
function firstScreen() {
    const popupContent = document.querySelector('.popup-content');
    // Update the content of the first screen
    popupContent.innerHTML = `
      <div class="popup-content-header">
        <h1>Asteroid 16 Psyche</h1>
        <h2>First Screen</h2>
      </div>
      <div class="popup-content-body">
        <p>This is the first screen.</p>
      </div>
      <div class="popup-buttons">
        <button id="nextButton">Next</button>
        <button id="closeButton">Close</button>
      </div>
    `;
    
    // Attach event listeners for the buttons
    document.getElementById('nextButton').addEventListener('click', secondScreen); // Navigate to second screen
    document.getElementById('closeButton').addEventListener('click', closePopup); // Close the popup
}

// second screen
function secondScreen() {
    const popupContent = document.querySelector('.popup-content');
    
    // Update the content of the second screen
    popupContent.innerHTML = `
      <div class="popup-content-header">
        <h2>Size and Dimensions</h2>
      </div>
      <div class="popup-content-body">
        <p>16 Psyche is a potato-like shape, measuring 173 miles (280 kilometers) long at it widest spot, and 144 miles (232 kilometers) long. The total surface area is 64,000 square
        miles (165,800 square kilometers).</p>
        <img id="psyche1" src = "images/Psyche_1.jpg">
      </div>
      <div class="popup-buttons">
        <button id="nextButton">Next</button>
        <button id="prevButton">Previous</button>
        <button id="closeButton">Close</button>
      </div>
    `;
    
    // Re-attach event listeners for the new buttons after updating the content
    document.getElementById('prevButton').addEventListener('click', firstScreen); // Go back to the first screen
    document.getElementById('closeButton').addEventListener('click', closePopup); // Close the popup
    document.getElementById('nextButton').addEventListener('click', thirdScreen); // Move to the third screen
}

// third screen
function thirdScreen() {
    const popupContent = document.querySelector('.popup-content');
    
    // Update content for the third screen
    popupContent.innerHTML = `
      <h2>Third Screen</h2>
      <p>This is the third screen.</p>
      <button id="nextButton">Next</button>
      <button id="prevButton">Previous</button>
      <button id="closeButton">Close</button>
    `;
    
    // Attach event listeners for buttons
    document.getElementById('prevButton').addEventListener('click', secondScreen); // Go back to the second screen
    document.getElementById('closeButton').addEventListener('click', closePopup); // Close the popup
    document.getElementById('nextButton').addEventListener('click', fourthScreen); // Move to the fourth screen
}

// fourth screen
function fourthScreen() {
    const popupContent = document.querySelector('.popup-content');
    
    // Update content for the fourth screen
    popupContent.innerHTML = `
      <h2>Fourth Screen</h2>
      <p>This is the fourth screen.</p>
      <button id="nextButton">Next</button>
      <button id="prevButton">Previous</button>
      <button id="closeButton">Close</button>
    `;
    
    // Attach event listeners for buttons
    document.getElementById('prevButton').addEventListener('click', thirdScreen); // Go back to the third screen
    document.getElementById('closeButton').addEventListener('click', closePopup); // Close the popup
    document.getElementById('nextButton').addEventListener('click', fifthScreen); // Move to the fifth screen
}

// fifth screen
function fifthScreen() {
    const popupContent = document.querySelector('.popup-content');
    
    // Update content for the fifth screen
    popupContent.innerHTML = `
      <h2>Fifth Screen</h2>
      <p>This is the fifth screen.</p>
      <button id="nextButton">Next</button>
      <button id="prevButton">Previous</button>
      <button id="closeButton">Close</button>
    `;
    
    // Attach event listeners for buttons
    document.getElementById('prevButton').addEventListener('click', fourthScreen); // Go back to the fourth screen
    document.getElementById('closeButton').addEventListener('click', closePopup); // Close the popup
    document.getElementById('nextButton').addEventListener('click', sixthScreen); // Move to the sixth screen
}

// sixth screen 
function sixthScreen() {
    const popupContent = document.querySelector('.popup-content');
    
    // Update content for the sixth screen
    popupContent.innerHTML = `
      <h2>Sixth Screen</h2>
      <p>This is the sixth screen.</p>
      <button id="nextButton">Next</button>
      <button id="prevButton">Previous</button>
      <button id="closeButton">Close</button>
    `;
    
    // Attach event listeners for buttons
    document.getElementById('prevButton').addEventListener('click', fifthScreen); // Go back to the fifth screen
    document.getElementById('closeButton').addEventListener('click', closePopup); // Close the popup
    document.getElementById('nextButton').addEventListener('click', seventhScreen); // Move to the sixth screen
}

// seventh screen 
function seventhScreen() {
    const popupContent = document.querySelector('.popup-content');
    
    // Update content for the seventh screen
    popupContent.innerHTML = `
      <h2>Seventh Screen</h2>
      <p>This is the seventh screen.</p>
      <button id="nextButton">Next</button>
      <button id="prevButton">Previous</button>
      <button id="closeButton">Close</button>
    `;
    
    // Attach event listeners for buttons
    document.getElementById('prevButton').addEventListener('click', sixthScreen); // Go back to the sixth screen
    document.getElementById('closeButton').addEventListener('click', closePopup); // Close the popup
    document.getElementById('nextButton').addEventListener('click', eighthScreen); // Move to the eighth screen
}

// eighth screen 
function eighthScreen() {
    const popupContent = document.querySelector('.popup-content');
    
    // Update content for the eighth screen
    popupContent.innerHTML = `
      <h2>Eighth Screen</h2>
      <p>This is the eighth screen.</p>
      <button id="nextButton">Next</button>
      <button id="prevButton">Previous</button>
      <button id="closeButton">Close</button>
    `;
    
    // Attach event listeners for buttons
    document.getElementById('prevButton').addEventListener('click', seventhScreen); // Go back to the seventh screen
    document.getElementById('closeButton').addEventListener('click', closePopup); // Close the popup
    document.getElementById('nextButton').addEventListener('click', ninthScreen); // Move to the ninth screen
}

// ninth screen 
function ninthScreen() {
    const popupContent = document.querySelector('.popup-content');
    
    // Update content for the ninth screen
    popupContent.innerHTML = `
      <h2>Ninth Screen</h2>
      <p>This is the ninth screen.</p>
      <button id="nextButton">Next</button>
      <button id="prevButton">Previous</button>
      <button id="closeButton">Close</button>
    `;
    
    // Attach event listeners for buttons
    document.getElementById('prevButton').addEventListener('click', eighthScreen); // Go back to the eighth screen
    document.getElementById('closeButton').addEventListener('click', closePopup); // Close the popup
    document.getElementById('nextButton').addEventListener('click', tenthScreen); // Move to the tenth screen
}

// tenth screen 
function tenthScreen() {
    const popupContent = document.querySelector('.popup-content');
    
    // Update content for the tenth screen
    popupContent.innerHTML = `
      <h2>Tenth Screen</h2>
      <p>This is the tenth screen.</p>
      <button id="prevButton">Previous</button>
      <button id="closeButton">Close</button>
    `;
    
    // Attach event listeners for buttons
    document.getElementById('prevButton').addEventListener('click', ninthScreen); // Go back to the ninth screen
    document.getElementById('closeButton').addEventListener('click', closePopup); // Close the popup
}