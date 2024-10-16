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
    <div  id="screen1">
      <div class="popup-content-header" id="header1">
        <img src="images/Psyche_icon_white.svg" id="logo">
        <h1>Asteroid 16 Psyche</h1>
        <img src="images/Psyche_icon_white.svg" id="logo">
      </div>
      <div class="popup-content-body">
        <p>16 Psyche is a metal-rich asteroid, contained within the asteroid belt, orbiting the Sun between Mars & Jupiter. This asteroid is of particular interest, as Psyche may have started out as a core of a planetesimal. If Psyche is indeed the core 
        of a planetsimal, this will give scientists a better understanding of the inner layers of planets like Earth.</p>
        <p>Psyche was first disovered by Italian astronomer Annibale de Gasparis in 1852, named after the ancient Greek mythology goddess of the soul. Psyche is currently three times farther from the sun than we are on Earth. Due to Psyche's orbit, the
        distance between Earth and Psyche varies from 186 million miles to more than 372 million miles.</p>
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
        miles (165,800 square kilometers).<br><br> NASA Jet Propulsion Laboratory (JPL) has compared its size to the State of Maryland in the United States of America.</p>
        <img id="psyche1" src = "images/Psyche_MD_3.jpg">
      </div>
      <div class="popup-buttons">
        <button id="prevButton">Previous</button>
        <button id="closeButton">Close</button>
        <button id="nextButton">Next</button>
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
      <div class="popup-content-header">
        <h2>Life on Psyche</h2>
      </div>
      <div class="popup-content-body">
        <p>It is believed, amongst the scientific community, that comets and asteroids were responsible for delivering key ingredients, to include water
        , that was the key complex chemistry needed to sustain life on Earth. It is believed that some of these asteroids have the capability of supporting
        human life.<br><br>As of now, 16 Pscyhe is not believed to hold the key nutrients of water, breathable atmosphere, and a hospitable environment to 
        allow for human life.</p>
        <img src="images/ocean.jpg" id="ocean">
      </div>
        
      <div class="popup-buttons">
        <button id="prevButton">Previous</button>
        <button id="closeButton">Close</button>
        <button id="nextButton">Next</button>
      </div>
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
      <div class="screen4">
        <div class="popup-content-header">
          <h2>Surface of Psyche</h2>
        </div>
        <div class="popup-content-body">
          <p>The information we have regarding 16 Psyche is based on radar and optical observations. The observations have given evidence of a surface consisting of a mix of of metal and silicate. Other observations have lead scientists to believe 
          there are two craterlike depressions. Scientists believe the asteroid may contain significant amounts of metal, consistent with the core of a planetesimal. 
          <br><br>Planetesimal's are believed to be the building blocks of our solar system. This belief
          is the main principal behind the NASA Psyche mission, hoping to shed light on Earth's core. The mission will be able to provide scientists with more in depth details of the asteroid, and hopefully other planets in the solar system.
          <br><br>16 Psyche is believed to be the survivor of multiple violent collissions, occurring during the formation of the solar system.</p>
          <img src="images/Psyche_2.jpg" id="psyche2">
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

// fifth screen
function fifthScreen() {
    const popupContent = document.querySelector('.popup-content');
    
    // Update content for the fifth screen
    popupContent.innerHTML = `
      <div class="popup-content-header">
        <h2>Fifth Screen</h2>
      </div>
      <div class="popup-content-body">
        <p>This is the fifth screen.</p>
      </div>
      <div class="popup-buttons">
        <button id="prevButton">Previous</button>
        <button id="closeButton">Close</button>
        <button id="nextButton">Next</button>
      </div>
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
      <div class="popup-content-header">  
        <h2>Sixth Screen</h2>
      </div>
      <div class="popup-content-body">
        <p>This is the sixth screen.</p>
      </div>
      <div class="popup-buttons">
        <button id="prevButton">Previous</button>
        <button id="closeButton">Close</button>
        <button id="nextButton">Next</button>
      </div>
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
    <div class="popup-content-header">  
      <h2>Seventh Screen</h2>
    </div>
    <div class="popup-content-body">
      <p>This is the seventh screen.</p>
    </div>
    <div class="popup-buttons">
      <button id="prevButton">Previous</button>
        <button id="closeButton">Close</button>
        <button id="nextButton">Next</button>
    </div>
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
      <div class="popup-content-header">
      <h2>Moons</h2>
      </div>
      <div class="popup-content-body">
        <p>NASA has identified more than 150 asteroids that have an orbiting moon, and in some cases more than one moon.
        Other asteroids can have other asteroids orbiting each other, referred to as binary or triple asteroid systems.<br><br>16 Psyche
        does not have any moons or asteroids orbiting around it.</p>
        <img src="images/moons.jpg" id="moons">
      </div>
      <div class="popup-buttons">
        <button id="prevButton">Previous</button>
        <button id="closeButton">Close</button>
        <button id="nextButton">Next</button>
      </div>
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
    <div class="popup-content-header">
      <h2>Rings</h2>
    </div>
    <div class="popup-content-body">
      <p>While a few asteroids are known to have rings, 16 Psyche does not possess any.</p>
      <img src="images/rings.jpg" id="rings">
    </div>
    <div class="popup-buttons">
      <button id="prevButton">Previous</button>
        <button id="closeButton">Close</button>
        <button id="nextButton">Next</button>
    </div>
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
      <div class="popup-content-header">
        <h2>Atmosphere</h2>
      </div>
      <div class="popup-content-body">
        <p>Like all asteroids, 16 Psyche does not have an atmosphere. Atmospheric layers are crucial for protecting planets by shielding them from impacts. 
        <br><br>Without an atmosphere, 16 Psyche is exposed to collisions with asteroids, comets, and other space debris</p>
        <img src="images/aurora.jpg" id="atmosphere">
        </div>
      <div class="popup-buttons">
        <button id="prevButton">Previous</button>
        <button id="closeButton">Close</button>
      </div>
    `;
    
    // Attach event listeners for buttons
    document.getElementById('prevButton').addEventListener('click', ninthScreen); // Go back to the ninth screen
    document.getElementById('closeButton').addEventListener('click', closePopup); // Close the popup
}