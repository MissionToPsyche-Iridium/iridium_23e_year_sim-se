/* 
* popup.js
* Creates popup windows to display information to the user.
* Users can cycle through multiple information pages.
*/

// Info content for celestial bodies
const infoContent = {
  'psyche': {
    pages: [
      {
        title: 'Asteroid 16 Psyche - Overview',
        content: `<img src="images/psyche_popup_images/Psyche_icon_white.svg" id="logo" style="max-width: 100%; height: auto; display: block; margin: 0 auto; margin-bottom: 15px;">
        16 Psyche is a metal-rich asteroid orbiting between Mars & Jupiter. This asteroid is of particular interest, as it may have started as a core of a planetesimal. If confirmed, this will help scientists better understand the inner layers of planets like Earth. Psyche orbits three times farther from the Sun than Earth, with its distance varying from 186 to 372 million miles.`
      },
      {
        title: 'Quick Facts',
        content: `<div style="text-align: center; margin-bottom: 15px;">
          <video id="video1" controls autoplay muted loop style="max-width: 100%; height: auto; margin: 0 auto 15px auto; position: relative; z-index: 1; display: block;">
            <source src="images/psyche_popup_images/psyche_quick_overview.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        Psyche was the 16th asteroid discovered, hence it is sometimes referred to as 16 Psyche. M-Type Asteroid. Believed to be the core of a planetsimal. 1 Year on Psyche is approximately 5 years on Earth. 1 Day on Psyche is about 4 hours on Earth. Psyche has seasons. Psyche's temperature changes drastically between seasons (>100K / ~180°). The Psyche mission is expected to reach the asteroid in 2029.`
      },
      {
        title: 'Size and Dimensions',
        content: `<img id="psyche_size" src="images/psyche_popup_images/Psyche_MD_3.jpg" style="max-width: 100%; height: auto; display: block; margin: 0 auto; margin-bottom: 15px;">
        16 Psyche is a potato-like shape, measuring 173 miles (280 kilometers) long at it widest spot, and 144 miles (232 kilometers) long. The total surface area is 64,000 square miles (165,800 square kilometers). NASA Jet Propulsion Laboratory (JPL) has compared its size to the State of Maryland in the United States of America.`
      },
      {
        title: 'No Life on Psyche',
        content: `<img src="images/psyche_popup_images/ocean.jpg" id="ocean" style="max-width: 100%; height: auto; display: block; margin: 0 auto; margin-bottom: 15px;">
        The scientific community believes that comets and asteroids are responsible for delivering key ingredients, including water, which is the key complex chemistry needed to sustain life on Earth. Some asteroids are believed to have the capability of supporting human life. Currently, 16 Psyche does not show evidence of the critical nutrients of water, a breathable atmosphere, and a hospitable environment to allow for human life.`
      },
      {
        title: 'Surface of Psyche',
        content: `<img src="images/psyche_popup_images/Psyche_2.jpg" id="psyche_surface" style="max-width: 100%; height: auto; display: block; margin: 0 auto; margin-bottom: 15px;">
        Our information about 16 Psyche comes from radar and optical observations. The surface consists of a mix of metal and silicate, with two crater-like depressions. The asteroid likely contains significant amounts of metal, consistent with being the core of a planetesimal. The NASA Psyche mission aims to study the asteroid to better understand planetary cores and formation. 16 Psyche has survived multiple collisions during the solar system's early history.`
      },
      {
        title: 'Orbit and Rotation',
        content: `<img src="images/psyche_popup_images/psyche_path.jpg" id="path_picture" style="max-width: 100%; height: auto; display: block; margin: 0 auto; margin-bottom: 15px;">
        16 Psyche is part of the Main Asteroid Belt, sitting between Mars and Jupiter. 16 Psyche completes one rotation around the Sun, a Psyche year, approximately every five Earth years. Psyche rotates along its axis, a Psyche day, about once every four hours.`
      },
      {
        title: 'Structure',
        content: `<video autoplay muted loop playsinline id="background_video" style="max-width: 100%; height: auto; display: block; margin: 0 auto; margin-bottom: 15px;">
          <source src="images/psyche_popup_images/psyche_video.mp4" type="video/mp4">
        </video>
        16 Psyche is classified as a Metallic-type (M-type) asteroid. Though previously believed to be entirely metal, new data shows it's a mixture of metal and silicate. The current bulk density is 3400-4100 kg/m3, composed of rock and metal. The surface is very porous, with estimates ranging from 30-70%. The gravity on Psyche is much less than Earth - lifting a car on Psyche would be equivalent to lifting a dog on Earth.`
      },
      {
        title: 'No Moons',
        content: `<img src="images/psyche_popup_images/moons.jpg" id="moon_picture" style="max-width: 100%; height: auto; display: block; margin: 0 auto; margin-bottom: 15px;">
        NASA has identified more than 150 asteroids that have an orbiting moon, and in some cases more than one moon. Other asteroids can have other asteroids orbiting each other, referred to as binary or triple asteroid systems. 16 Psyche does not believe to have any moons or asteroids orbiting around it, however, more information will be known in 2029 when the Pscyhe mission is expected to reach the asteroid.`
      },
      {
        title: 'No Rings',
        content: `<img src="images/psyche_popup_images/rings.jpg" id="ring_picture" style="max-width: 100%; height: auto; display: block; margin: 0 auto; margin-bottom: 15px;">
        While a few asteroids are known to have rings, 16 Psyche does not possess any.`
      },
      {
        title: 'No Atmosphere',
        content: `<img src="images/psyche_popup_images/aurora.jpg" id="atmosphere" style="max-width: 100%; height: auto; display: block; margin: 0 auto; margin-bottom: 15px;">
        Like all asteroids, 16 Psyche does not have an atmosphere. Atmospheric layers are crucial for protecting planets by shielding them from impacts. Without an atmosphere, 16 Psyche is exposed to collisions with asteroids, comets, and other space debris.`
      }
    ]
  },
  'sun': {
    pages: [
      {
        title: 'The Sun - Connection',
        content: 'The Sun\'s powerful magnetic field and radiation affects all bodies in the solar system including Psyche.'
      },
      {
        title: 'The Sun - Overview', 
        content: 'The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system. Its gravity holds everything from the biggest planets to tiny particles in its orbit. The Sun\'s core is about 27 million degrees Fahrenheit (15 million degrees Celsius). The Sun\'s surface is about 10,000 degrees Fahrenheit (5,500 degrees Celsius).'
      }
    ]
  },
  'mercury': {
    pages: [
      {
        title: 'Mercury - Connection',
        content: 'Like Psyche, Mercury is believed to have a large metallic core, making it relevant for understanding metal-rich bodies in space. Both Mercury and Psyche are frequently impacted by comets and other space debris, as Mercury has a very thin atmosphere and Psyche has none. These impacts help scientists understand the early solar system\'s bombardment history and the role of comets in delivering materials throughout the solar system.'
      },
      {
        title: 'Mercury - Overview',
        content: 'Mercury is the smallest planet in our solar system and nearest to the Sun. Mercury is only slightly larger than Earth\'s Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter.'
      },
      {
        title: 'Surface Composition Comparison',
        content: `While both Mercury and Psyche are metal-rich bodies, their surfaces tell different stories. Mercury's surface is covered with craters, valleys, and plains formed by ancient volcanic activity. Its surface temperature varies dramatically from 800°F (427°C) during the day to -290°F (-179°C) at night. In contrast, Psyche's surface is believed to be mostly exposed metal from a planetary core, providing a unique window into planetary formation that Mercury's more complex surface history has erased.`
      },
      {
        title: 'Core Studies and Formation',
        content: `Mercury and Psyche represent two different stages of planetary evolution. Mercury's large iron core makes up about 60% of its volume, surrounded by a mantle and crust. Scientists believe Mercury may have lost its outer layers in massive impacts early in its history. Psyche, on the other hand, might be what's left of a planetesimal core after even more violent collisions stripped away all of its outer layers. Together, these bodies help scientists understand how planets form, evolve, and can be dramatically altered by impacts in the early solar system.`
      }
    ]
  },
  'venus': {
    pages: [
      {
        title: 'Venus - Connection',
        content: 'Venus and Psyche formed in the same early solar system, providing context for different formation pathways.'
      },
      {
        title: 'Venus - Overview',
        content: 'Venus is the second planet from the Sun and is Earth\'s closest planetary neighbor. It\'s one of the four inner, terrestrial (or rocky) planets. Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.'
      }
    ]
  },
  'earth': {
    pages: [
      {
        title: 'Earth - Connection',
        content: 'Studying Psyche may provide insights into Earth\'s own metallic core formation and composition.'
      },
      {
        title: 'Earth - Overview',
        content: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.'
      }
    ]
  },
  'mars': {
    pages: [
      {
        title: 'Mars - Connection',
        content: 'Mars lies between the asteroid belt (where Psyche is located) and Earth, providing important context for understanding the early solar system.'
      },
      {
        title: 'Mars - Overview',
        content: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System. Mars is often called the "Red Planet" because of its reddish appearance, which is due to iron oxide (rust) on its surface. Mars has two small moons, Phobos and Deimos.'
      }
    ]
  },
  'jupiter': {
    pages: [
      {
        title: 'Jupiter - Connection',
        content: 'Jupiter\'s strong gravitational influence affects the asteroid belt where Psyche orbits, and played a key role in shaping the early solar system.'
      },
      {
        title: 'Jupiter - Overview',
        content: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined. Jupiter is primarily composed of hydrogen and helium.'
      }
    ]
  }
};

document.addEventListener('DOMContentLoaded', function() {
    const infoButton = document.getElementById('info');
    if (infoButton) {
        infoButton.addEventListener('click', function() {
            infoButton.style.display = "none";
            openPopup();
        });
    }

    // Add click handlers for planet buttons
    const planetButtons = {
        'button-sun': 'sun',
        'button-mercury': 'mercury', 
        'button-venus': 'venus',
        'button-earth': 'earth',
        'button-mars': 'mars',
        'button-psyche': 'psyche',
        'button-jupiter': 'jupiter'
    };

    Object.entries(planetButtons).forEach(([buttonId, planetName]) => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', () => handlePlanetClick(planetName));
      

            // Create and append info window
            const infoWindow = createInfoWindow(planetName);
            document.getElementById('container3D').appendChild(infoWindow);

            // Add click handler for info icon
            infoIcon.addEventListener('click', (event) => {
                event.stopPropagation();
                const rect = infoIcon.getBoundingClientRect();
                infoWindow.style.left = `${rect.right + 10}px`;
                infoWindow.style.top = `${rect.top}px`;
                infoWindow.style.display = infoWindow.style.display === 'none' ? 'block' : 'none';
            });

            // Close info window when clicking outside
            document.addEventListener('click', (event) => {
                if (!infoWindow.contains(event.target) && event.target !== infoIcon) {
                    infoWindow.style.display = 'none';
                }
            });

            // Add info icon to planet labels
            const labelId = planetName + 'Label';
            const label = document.getElementById(labelId);
            if (label) {
                const labelInfoWindow = createInfoWindow(planetName);
                document.getElementById('container3D').appendChild(labelInfoWindow);

                // Add click handler for label info icon
                label.addEventListener('click', (event) => {
                    event.stopPropagation();
                    const rect = label.getBoundingClientRect();
                    labelInfoWindow.style.left = `${rect.right + 10}px`; 
                    labelInfoWindow.style.top = `${rect.top}px`;
                    labelInfoWindow.style.display = labelInfoWindow.style.display === 'none' ? 'block' : 'none';
                });

                // Close label info window when clicking outside
                document.addEventListener('click', (event) => {
                    if (!labelInfoWindow.contains(event.target) && event.target !== label) {
                        labelInfoWindow.style.display = 'none';
                    }
                });
            }
        }
    });

    // Add keyboard event listener for 'p' key
    document.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === 'p') {
            isOrbitPaused = !isOrbitPaused;
        }
    });
});

const fullscreen_button = document.getElementById('fullscreen');

function openPopup() {
    const overlay = document.createElement('div');
    fullscreen_button.style.display = 'none';
    overlay.id = 'popupOverlay';
    overlay.className = 'popup-overlay';

    const popup = document.createElement('div');
    popup.id = 'myPopup';
    popup.className = 'popup';
    popup.innerHTML = `<div class="popup-content"></div>`;

    document.body.appendChild(overlay);
    document.body.appendChild(popup);

    firstScreen();
}

function closePopup() {
    const popup = document.getElementById('myPopup');
    const overlay = document.getElementById('popupOverlay');
    if (popup) document.body.removeChild(popup);
    if (overlay) document.body.removeChild(overlay);
    fullscreen_button.style.display = 'block';
    const infoButton = document.getElementById('info');
    if (infoButton) infoButton.style.display = "inline-block";
}

function createInfoWindow(objectKey) {
    const infoWindow = document.createElement('div');
    infoWindow.className = 'info-window';
    infoWindow.style.display = 'none';
    infoWindow.style.position = 'absolute';
    infoWindow.style.backgroundColor = 'black';
    infoWindow.style.padding = '20px';
    infoWindow.style.borderRadius = '12px';
    infoWindow.style.maxWidth = '400px';
    infoWindow.style.minWidth = '300px';
    infoWindow.style.zIndex = '1001';
    infoWindow.style.color = 'orange';
    infoWindow.style.border = '2px solid orange';
    infoWindow.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.3)';
    infoWindow.style.backdropFilter = 'blur(5px)';
    infoWindow.style.fontFamily = 'Arial, sans-serif';

    if (infoContent[objectKey]) {
        let currentPage = 0;
        const totalPages = infoContent[objectKey].pages.length;

        function updateContent() {
            const page = infoContent[objectKey].pages[currentPage];
            infoWindow.innerHTML = `
                <div style="position: relative;">
                    <h3 style="margin: 0 0 15px 0; color: #a53f5b; font-size: 18px; border-bottom: 1px solid #592651; padding-bottom: 10px;">
                        ${page.title}
                    </h3>
                    <div style="margin: 0 0 20px 0; line-height: 1.6; font-size: 14px;">
                        ${page.content}
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px; border-top: 1px solid #592651; padding-top: 15px;">
                        <button class="nav-btn prev" style="background: none; border: 1px solid #592651; color: #a53f5b; padding: 5px 15px; cursor: pointer; border-radius: 4px;" ${currentPage === 0 ? 'disabled' : ''}>Previous</button>
                        <span style="color: #a53f5b;">${currentPage + 1}/${totalPages}</span>
                        <button class="nav-btn next" style="background: none; border: 1px solid #592651; color: #a53f5b; padding: 5px 15px; cursor: pointer; border-radius: 4px;" ${currentPage === totalPages - 1 ? 'disabled' : ''}>Next</button>
                    </div>
                    <button class="close-btn" style="position: absolute; top: -15px; right: -15px; background: #592651; border: none; color: white; width: 25px; height: 25px; border-radius: 50%; cursor: pointer; font-weight: bold;">×</button>
                </div>
            `;

            // Add event listeners for navigation
            infoWindow.querySelector('.prev')?.addEventListener('click', (e) => {
                e.stopPropagation();
                if (currentPage > 0) {
                    currentPage--;
                    updateContent();
                }
            });

            infoWindow.querySelector('.next')?.addEventListener('click', (e) => {
                e.stopPropagation();
                if (currentPage < totalPages - 1) {
                    currentPage++;
                    updateContent();
                }
            });

            infoWindow.querySelector('.close-btn')?.addEventListener('click', () => {
                infoWindow.style.display = 'none';
            });
        }

        updateContent();
    }

    return infoWindow;
}

function handlePlanetClick(planetName) {
    const objectConfig = objectScales[planetName];
    const targetObject = objects[planetName + 'Object'];

    if (objectConfig && targetObject) {
        isViewLocked = true;
        currentLockedObject = targetObject;
        controls.enabled = false;

        const viewDistance = objectConfig.distance * objectConfig.scale;
        const targetPos = targetObject.position.clone();
        const offset = new THREE.Vector3(viewDistance, viewDistance/2, viewDistance);
        const newCameraPos = targetPos.clone().add(offset);

        // Setting up animation
        const duration = 1000;
        const startPos = camera.position.clone();
        const startTime = Date.now();

        // Animate camera movement
        function animateCamera() {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            camera.position.lerpVectors(startPos, newCameraPos, easeProgress);
            controls.target.copy(targetPos);
            controls.update();

            if (progress < 1) {
                requestAnimationFrame(animateCamera);
            }
        }

        animateCamera();
    }
}


function firstScreen() {
    const popupContent = document.querySelector('.popup-content');
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
    
    document.getElementById('nextButton').addEventListener('click', secondScreen);
    document.getElementById('closeButton').addEventListener('click', closePopup);
}

function secondScreen() {
    const popupContent = document.querySelector('.popup-content');
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
    
    document.getElementById('prevButton').addEventListener('click', firstScreen);
    document.getElementById('closeButton').addEventListener('click', closePopup);
    document.getElementById('nextButton').addEventListener('click', thirdScreen);
}

function thirdScreen() {
    const popupContent = document.querySelector('.popup-content');
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
    
    document.getElementById('prevButton').addEventListener('click', secondScreen);
    document.getElementById('closeButton').addEventListener('click', closePopup);
    document.getElementById('nextButton').addEventListener('click', fourthScreen);
}

function fourthScreen() {
    const popupContent = document.querySelector('.popup-content');
    popupContent.innerHTML = `
      <div id="screen4">
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
          <img src="images/psyche_popup_images/ocean.jpg" id="ocean">
        </div>
          
        <div class="popup-buttons">
          <button id="prevButton">Previous</button>
          <button id="closeButton">Close</button>
          <button id="nextButton">Next</button>
        </div>
      </div>
    `;
    
    document.getElementById('prevButton').addEventListener('click', thirdScreen);
    document.getElementById('closeButton').addEventListener('click', closePopup);
    document.getElementById('nextButton').addEventListener('click', fifthScreen);
}

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
    
    document.getElementById('prevButton').addEventListener('click', fourthScreen);
    document.getElementById('closeButton').addEventListener('click', closePopup);
    document.getElementById('nextButton').addEventListener('click', sixthScreen);
}

function sixthScreen() {
    const popupContent = document.querySelector('.popup-content');
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
    
    document.getElementById('prevButton').addEventListener('click', fifthScreen);
    document.getElementById('closeButton').addEventListener('click', closePopup);
    document.getElementById('nextButton').addEventListener('click', seventhScreen);
}

function seventhScreen() {
    const popupContent = document.querySelector('.popup-content');
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
          These types of asteroids are common, however very little is known about them. 16 Psyche was previously belived to be composed
          of entirely metal, however, new data on its density points towards a mixture of metal and silicate.
        <br>
        <br>
          Psyche is considered to be very dense. Though measurements are still being made, the current bulk density appears to be 3400 - 4100
          kilograms per cubic meter (kg/m<sup>3</sup>), composed of rock and metal. The surface is belived to be very porous, with estimates 
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
    
    document.getElementById('prevButton').addEventListener('click', sixthScreen);
    document.getElementById('closeButton').addEventListener('click', closePopup);
    document.getElementById('nextButton').addEventListener('click', eighthScreen);
}

function eighthScreen() {
    const popupContent = document.querySelector('.popup-content');
    popupContent.innerHTML = `
      <div id="screen8">
        <div class="popup-content-header">
        <h2>Moons</h2>
        </div>
        <div class="popup-content-body">
          <p>
            NASA has identified more than 150 asteroids that have an orbiting moon, and in some cases more than one moon.
            Other asteroids can have other asteroids orbiting each other, referred to as binary or triple asteroid systems.<br><br>16 Psyche
            does not believe to have any moons or asteroids orbiting around it, however, more information will be known in 2029 when the Pscyhe
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
    
    document.getElementById('prevButton').addEventListener('click', seventhScreen);
    document.getElementById('closeButton').addEventListener('click', closePopup);
    document.getElementById('nextButton').addEventListener('click', ninthScreen);
}

function ninthScreen() {
    const popupContent = document.querySelector('.popup-content');
    popupContent.innerHTML = `
    <div id="screen9">
      <div class="popup-content-header">
        <h2>Rings</h2>
      </div>
      <div class="popup-content-body">
        <p>
          While a few asteroids are known to have rings, 16 Psyche does not possess any.
        </p>
        <div>
        <img src="images/psyche_popup_images/rings.jpg" id="ring_picture">
        </div>
      </div>
      <div class="popup-buttons">
        <button id="prevButton">Previous</button>
          <button id="closeButton">Close</button>
          <button id="nextButton">Next</button>
      </div>
    </div>
    `;
    
    document.getElementById('prevButton').addEventListener('click', eighthScreen);
    document.getElementById('closeButton').addEventListener('click', closePopup);
    document.getElementById('nextButton').addEventListener('click', tenthScreen);
}

function tenthScreen() {
    const popupContent = document.querySelector('.popup-content');
    popupContent.innerHTML = `
      <div id="screen10">
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



 