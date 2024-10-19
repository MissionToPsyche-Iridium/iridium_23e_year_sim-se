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

// second screen
function secondScreen() {
    const popupContent = document.querySelector('.popup-content');
    
    // Update the content of the second screen
    popupContent.innerHTML = `
      <div class="popup-content-header">
        <h2>Size and Dimensions</h2>
      </div>
      <div class="popup-content-body">
        <p>
          16 Psyche is a potato-like shape, measuring 173 miles (280 kilometers) long at it widest spot, and 144 miles (232 kilometers) long. The total surface 
          area is 64,000 square miles (165,800 square kilometers).<br><br> NASA Jet Propulsion Laboratory (JPL) has compared its size to the State of Maryland 
          in the United States of America.
        </p>
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
        <p>
          The scientific community believes that comets and asteroids are responsible for delivering key ingredients, including water, 
          which is the key complex chemistry needed to sustain life on Earth. Some asteroids are believed to have the capability 
          of supporting human life.
        <br>
        <br>
          Currently, 16 Psyche does not show evidence of the critical nutrients of water, a breathable atmosphere, and a hospitable 
          environment to allow for human life.
        </p>
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
        <p>
          This is the fifth screen.
        </p>
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
        <img src="images/psyche_path.jpg" id="path">
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
    <div class="screen7">
      <div class="popup-content-header">  
        <h2>Structure</h2>
      </div>
      <div class="popup-content-body">
        <p>
          16 Psyche is classified as a Metallic-type (M-type) asteroid, the third most common type of asteroids in the solar system.
          These types of asteroids are common, however very little is known about them. 16 Psyche was previously belived to be composed
          of entirely metal, however, new data on its density points towards a mixture of metal and silicate.
        <br>
        <br>
          Psyche is considered to be very dense. Though measurements are still being made, the current bulk density appears to be 3400 - 4100
          kilograms per cubic meter (kg/m<sup>3</sup>), composed of rock and metal. The surface is belived to be very porous, with estimates 
          ranging from 30-70% of the entire surface. The gravity on Psyche is much less than the Earth or 
          the Moon, where lifting a car on Psyche would be equivalent to lifting a dog on Earth.
        </p>
        <video id="video" controls autoplay muted loop>
          <source src="images/psyche_video.mp4" type="video/mp4">
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
        <p>
          NASA has identified more than 150 asteroids that have an orbiting moon, and in some cases more than one moon.
          Other asteroids can have other asteroids orbiting each other, referred to as binary or triple asteroid systems.<br><br>16 Psyche
          does not believe to have any moons or asteroids orbiting around it, however, more information will be known in 2029 when the Pscyche
          mission is expected to reach the asteroid.
        </p>
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
      <p>
        While a few asteroids are known to have rings, 16 Psyche does not possess any.
      </p>
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
        <p>
          Like all asteroids, 16 Psyche does not have an atmosphere. Atmospheric layers are crucial for protecting planets by shielding them from impacts. 
        <br>
        <br>
          Without an atmosphere, 16 Psyche is exposed to collisions with asteroids, comets, and other space debris.
        </p>
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