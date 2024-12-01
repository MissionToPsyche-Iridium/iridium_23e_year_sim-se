import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('containerOne');
    if (!container) {
        console.error("Container element with ID 'containerOne' not found.");
        return;
    }

    // Calculate initial menu dimensions based on screen size
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const menuWidth = Math.min(screenWidth * 0.25, 350); // 25% of screen width up to 350px max

    // Adjust container to make room for menu
    container.style.marginLeft = `${menuWidth}px`;
    container.style.width = `calc(100% - ${menuWidth}px)`;

    // Create side menu overlay with updated styling
    const sideMenu = document.createElement('div');
    sideMenu.style.position = 'fixed';
    sideMenu.style.left = '0';
    sideMenu.style.top = '0';
    sideMenu.style.width = `${menuWidth}px`;
    sideMenu.style.height = '100vh'; // Use viewport height
    sideMenu.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    sideMenu.style.backdropFilter = 'blur(20px)';
    sideMenu.style.padding = '20px'; // Reduced padding
    sideMenu.style.boxSizing = 'border-box';
    sideMenu.style.zIndex = '1500';
    sideMenu.style.boxShadow = '0 0 40px rgba(255, 255, 255, 0.15)';
    sideMenu.style.borderRight = '2px solid rgba(255, 255, 255, 0.1)';
    sideMenu.style.transform = 'translateX(0)'; // Start expanded
    sideMenu.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    sideMenu.style.display = 'flex';
    sideMenu.style.flexDirection = 'column';
    sideMenu.style.justifyContent = 'flex-start';
    sideMenu.style.alignItems = 'stretch';

    // Add menu title with enhanced styling
    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Navigation';
    menuTitle.style.color = 'white';
    menuTitle.style.marginBottom = '20px'; // Reduced margin
    menuTitle.style.fontSize = `${Math.min(28, screenWidth * 0.02)}px`; // Smaller font
    menuTitle.style.fontWeight = '800';
    menuTitle.style.textTransform = 'uppercase';
    menuTitle.style.letterSpacing = '3px';
    menuTitle.style.textAlign = 'center';
    menuTitle.style.textShadow = '0 0 15px rgba(255, 255, 255, 0.5)';
    menuTitle.style.borderBottom = '2px solid rgba(255, 255, 255, 0.1)';
    menuTitle.style.paddingBottom = '10px';
    sideMenu.appendChild(menuTitle);

    // Add toggle button that stays visible
    const toggleButton = document.createElement('button');
    toggleButton.style.position = 'fixed';
    toggleButton.style.left = `${menuWidth}px`;
    toggleButton.style.top = '20px';
    toggleButton.style.width = '40px';
    toggleButton.style.height = '40px';
    toggleButton.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    toggleButton.style.border = '2px solid rgba(255, 255, 255, 0.1)';
    toggleButton.style.borderRadius = '50%';
    toggleButton.style.color = 'white';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.zIndex = '1600';
    toggleButton.innerHTML = '←';
    toggleButton.style.fontSize = '20px';
    toggleButton.style.transition = 'all 0.5s';

    let isMenuOpen = true;
    toggleButton.addEventListener('click', () => {
        if (isMenuOpen) {
            sideMenu.style.transform = `translateX(-${menuWidth}px)`;
            container.style.marginLeft = '0';
            container.style.width = '100%';
            toggleButton.style.left = '20px';
            toggleButton.innerHTML = '→';
            toggleButton.style.transform = 'rotate(180deg)';
        } else {
            sideMenu.style.transform = 'translateX(0)';
            container.style.marginLeft = `${menuWidth}px`;
            container.style.width = `calc(100% - ${menuWidth}px)`;
            toggleButton.style.left = `${menuWidth}px`;
            toggleButton.innerHTML = '←';
            toggleButton.style.transform = 'rotate(0deg)';
        }
        isMenuOpen = !isMenuOpen;
    });

    document.body.appendChild(toggleButton);

    // Create menu items based on planetIcons array
    const menuItems = [
        { name: 'Sun', icon: 'images/icons/sun.png' },
        { name: 'Solar System', icon: 'images/icons/solarsystem.png' },
        { name: 'Day/Night Cycles', icon: 'images/icons/daynight.png' },
        { name: 'Mission', icon: 'images/icons/mission.png' },
        { name: 'Gravity', icon: 'images/icons/gravity.png' },
        { name: 'Mining', icon: 'images/icons/pickaxe.png' },
        { name: 'Disk', icon: 'images/icons/disk.png' },
        { name: 'Equipment', icon: 'images/icons/helmet.png' },
        { name: 'Observation', icon: 'images/icons/telescope.png' },
        { name: 'Temperature Map', icon: 'images/icons/thermometer.png' }
    ];

    // Add window resize handler for menu responsiveness
    window.addEventListener('resize', () => {
        const newScreenWidth = window.innerWidth;
        const newMenuWidth = Math.min(newScreenWidth * 0.25, 350);
        
        if (isMenuOpen) {
            container.style.marginLeft = `${newMenuWidth}px`;
            container.style.width = `calc(100% - ${newMenuWidth}px)`;
            toggleButton.style.left = `${newMenuWidth}px`;
        } else {
            container.style.marginLeft = '0';
            container.style.width = '100%';
        }
        
        sideMenu.style.width = `${newMenuWidth}px`;
        
        // Update menu title font size
        menuTitle.style.fontSize = `${Math.min(28, newScreenWidth * 0.02)}px`;
        
        // Update menu items size and spacing
        document.querySelectorAll('.menu-item').forEach(item => {
            item.style.padding = `${Math.min(15, newScreenWidth * 0.015)}px ${Math.min(10, newScreenWidth * 0.01)}px`;
            item.style.fontSize = `${Math.min(16, newScreenWidth * 0.012)}px`;
        });
    });

    // Create menu items with more compact styling
    menuItems.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.style.display = 'flex';
        menuItem.style.alignItems = 'center';
        menuItem.style.padding = '15px 10px';
        menuItem.style.margin = '5px 0';
        menuItem.style.cursor = 'pointer';
        menuItem.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        menuItem.style.borderRadius = '8px';
        menuItem.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        menuItem.style.backdropFilter = 'blur(10px)';

        // Add icon
        const icon = document.createElement('img');
        icon.src = item.icon;
        icon.style.width = '24px';
        icon.style.height = '24px';
        icon.style.marginRight = '10px';
        icon.style.filter = 'brightness(0) invert(1)';
        menuItem.appendChild(icon);

        // Add text
        const text = document.createElement('span');
        text.textContent = item.name;
        text.style.color = 'white';
        text.style.fontSize = '16px';
        text.style.fontWeight = '500';
        text.style.letterSpacing = '0.5px';
        menuItem.appendChild(text);

        // Add hover effects
        menuItem.addEventListener('mouseover', () => {
            menuItem.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            menuItem.style.transform = 'translateX(5px)';
            icon.style.transform = 'rotate(5deg)';
        });

        menuItem.addEventListener('mouseout', () => {
            menuItem.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            menuItem.style.transform = 'translateX(0)';
            icon.style.transform = 'rotate(0deg)';
        });

        // Add click handler
        menuItem.addEventListener('click', () => {
            const planetName = planetIcons[index].name;
            const planetContainer = containers[planetName].container;
            showLoading();
            planetContainer.style.display = 'block';
            
            const planetIcon = document.getElementById(`button-${planetName}`);
            if (planetIcon) {
                planetIcon.click();
            }
        });

        sideMenu.appendChild(menuItem);
    });

    document.body.appendChild(sideMenu);

   
    const loadingOverlay = document.createElement('div');
    loadingOverlay.style.position = 'fixed';
    loadingOverlay.style.top = '0';
    loadingOverlay.style.left = '0';
    loadingOverlay.style.width = '100%';
    loadingOverlay.style.height = '100%';
    loadingOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    loadingOverlay.style.display = 'none';
    loadingOverlay.style.justifyContent = 'center';
    loadingOverlay.style.alignItems = 'center';
    loadingOverlay.style.zIndex = '2000';

    const loadingSpinner = document.createElement('div');
    loadingSpinner.style.width = '50px';
    loadingSpinner.style.height = '50px';
    loadingSpinner.style.border = '5px solid #f3f3f3';
    loadingSpinner.style.borderTop = '5px solid #3498db';
    loadingSpinner.style.borderRadius = '50%';
    loadingSpinner.style.animation = 'spin 1s linear infinite';

    const loadingText = document.createElement('div');
    loadingText.style.color = 'white';
    loadingText.style.marginTop = '20px';
    loadingText.style.fontSize = '20px';
    loadingText.textContent = 'Loading...';

    const spinnerContainer = document.createElement('div');
    spinnerContainer.style.display = 'flex';
    spinnerContainer.style.flexDirection = 'column';
    spinnerContainer.style.alignItems = 'center';
    spinnerContainer.appendChild(loadingSpinner);
    spinnerContainer.appendChild(loadingText);

    loadingOverlay.appendChild(spinnerContainer);
    document.body.appendChild(loadingOverlay);

    // Add spinner animation
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(styleSheet);

    // Function to show/hide loading screen
    const showLoading = () => {
        loadingOverlay.style.display = 'flex';
        setTimeout(() => {
            hideLoading();
        }, 1000); // Hide after 3 seconds
    };

    const hideLoading = () => {
        loadingOverlay.style.display = 'none';
    };

    // Calculate base size unit based on viewport size
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const baseSize = Math.min(vw, vh) * 0.02; // Base size unit is 2% of smallest viewport dimension
    const dpr = window.devicePixelRatio || 1; // Get device pixel ratio for high DPI displays

    // Adjust base size for high DPI displays
    const adjustedBaseSize = baseSize * Math.max(1, dpr/2);

    const containers = {};
    let containerCount = 1;
    
    // Make menuContainer clickable by removing pointer-events: none
    const menuContainer = document.createElement('div');
    menuContainer.style.position = 'absolute';
    menuContainer.style.width = '100%';
    menuContainer.style.height = '100%';
    menuContainer.style.pointerEvents = 'auto';
    menuContainer.style.zIndex = '100';
    container.appendChild(menuContainer);

    // Create initial Psyche display
    const psycheInitialContainer = document.createElement('div');
    psycheInitialContainer.style.position = 'absolute';
    psycheInitialContainer.style.width = '100%';
    psycheInitialContainer.style.height = '100%';
    psycheInitialContainer.style.display = 'flex';
    psycheInitialContainer.style.justifyContent = 'center';
    psycheInitialContainer.style.alignItems = 'center';
    container.appendChild(psycheInitialContainer);

    const planetIcons = [
        { name: 'sun', image: 'images/icons/sun.png' },
        { name: 'mercury', image: 'images/icons/solarsystem.png', displayName: 'Solar System' },
        { name: 'venus', image: 'images/icons/daynight.png', displayName: 'Day/Night Cycles' },
        { name: 'earth', image: 'images/icons/mission.png' },
        { name: 'gravity', image: 'images/icons/gravity.png' },
        { name: 'psyche', image: 'images/icons/pickaxe.png' },
        { name: 'jupiter', image: 'images/icons/disk.png' },
        { name: 'saturn', image: 'images/icons/helmet.png' },
        { name: 'uranus', image: 'images/icons/telescope.png' },
        { name: 'temperature', image: 'images/icons/thermometer.png', displayName: 'Temperature Map' }
    ];

    planetIcons.forEach(planet => {
        const planetContainer = document.createElement('div');
        planetContainer.id = `container${containerCount}`;
        planetContainer.style.display = 'none';
        planetContainer.style.position = 'fixed';
        planetContainer.style.top = '0';
        planetContainer.style.left = '0';
        planetContainer.style.width = '100%';
        planetContainer.style.height = '100%';
        planetContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        planetContainer.style.zIndex = '1000';
        planetContainer.style.border = `${adjustedBaseSize * 0.2}px solid #fff`;
        planetContainer.style.borderRadius = `${adjustedBaseSize}px`;
        planetContainer.style.padding = `${adjustedBaseSize * 2}px`;
        planetContainer.style.boxSizing = 'border-box';
        planetContainer.style.boxShadow = `0 0 ${adjustedBaseSize * 2}px rgba(255, 255, 255, 0.3)`;

        const headerContainer = document.createElement('div');
        headerContainer.style.display = 'flex';
        headerContainer.style.justifyContent = 'space-between';
        headerContainer.style.alignItems = 'center';
        headerContainer.style.marginBottom = `${adjustedBaseSize * 2}px`;

        const title = document.createElement('h1');
        title.textContent = planet.displayName || planet.name.charAt(0).toUpperCase() + planet.name.slice(1);
        title.style.color = '#fff';
        title.style.margin = '0';
        title.style.fontSize = `${adjustedBaseSize * 3}px`;
        title.style.fontWeight = 'bold';
        headerContainer.appendChild(title);

        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = `${adjustedBaseSize}px`;

        const fullscreenBtn = document.createElement('button');
        fullscreenBtn.innerHTML = '&#x26F6;';
        fullscreenBtn.style.background = 'none';
        fullscreenBtn.style.border = 'none';
        fullscreenBtn.style.color = '#fff';
        fullscreenBtn.style.fontSize = `${adjustedBaseSize * 2}px`;
        fullscreenBtn.style.cursor = 'pointer';
        fullscreenBtn.style.padding = `${adjustedBaseSize * 0.5}px`;
        fullscreenBtn.style.width = `${adjustedBaseSize * 4}px`;
        fullscreenBtn.style.height = `${adjustedBaseSize * 4}px`;
        fullscreenBtn.onclick = () => {
            if (!document.fullscreenElement) {
                planetContainer.requestFullscreen();
                fullscreenBtn.innerHTML = '&#x26F7;';
            } else {
                document.exitFullscreen();
                fullscreenBtn.innerHTML = '&#x26F6;';
            }
        };
        buttonContainer.appendChild(fullscreenBtn);

        const closeBtn = document.createElement('button');
        closeBtn.textContent = '×';
        closeBtn.style.background = 'none';
        closeBtn.style.border = 'none';
        closeBtn.style.color = '#fff';
        closeBtn.style.fontSize = `${adjustedBaseSize * 3}px`;
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.padding = `${adjustedBaseSize * 0.5}px`;
        closeBtn.style.width = `${adjustedBaseSize * 4}px`;
        closeBtn.style.height = `${adjustedBaseSize * 4}px`;
        closeBtn.onclick = () => {
            planetContainer.style.display = 'none';
        };
        buttonContainer.appendChild(closeBtn);

        headerContainer.appendChild(buttonContainer);
        planetContainer.appendChild(headerContainer);

        document.body.appendChild(planetContainer);
        containers[planet.name] = {
            container: planetContainer,
            id: containerCount++
        };
    });

    const radius = Math.min(container.clientWidth, container.clientHeight) * 0.4;
    const centerX = container.clientWidth / 2;
    const centerY = container.clientHeight / 2;
    const iconSize = adjustedBaseSize * 5; // Make icons 5x the adjusted base size

    planetIcons.forEach((planet, index) => {
        const angle = (index / planetIcons.length) * 2 * Math.PI;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        const icon = document.createElement('div');
        const img = document.createElement('img');
        img.src = planet.image;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.pointerEvents = 'auto';
        img.style.objectFit = 'contain'; // Ensure icon fits properly
        icon.appendChild(img);
        
        icon.style.position = 'absolute';
        icon.style.width = `${iconSize}px`;
        icon.style.height = `${iconSize}px`;
        icon.style.left = `${x - iconSize/2}px`;
        icon.style.top = `${y - iconSize/2}px`;
        icon.style.cursor = 'pointer';
        icon.style.pointerEvents = 'auto';
        icon.style.borderRadius = '50%';
        icon.style.transition = 'transform 0.2s';
        icon.style.zIndex = '200';
        icon.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        icon.style.padding = `${adjustedBaseSize}px`;
        icon.style.boxShadow = `0 0 ${adjustedBaseSize}px rgba(255, 255, 255, 0.3)`;
        icon.id = `button-${planet.name}`;
        icon.classList.add('planet-icon');

        // Add tooltip
        const tooltip = document.createElement('div');
        tooltip.textContent = planet.displayName || planet.name.charAt(0).toUpperCase() + planet.name.slice(1);
        tooltip.style.position = 'absolute';
        tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        tooltip.style.color = 'white';
        tooltip.style.padding = `${adjustedBaseSize * 0.5}px ${adjustedBaseSize}px`;
        tooltip.style.borderRadius = `${adjustedBaseSize * 0.5}px`;
        tooltip.style.fontSize = `${adjustedBaseSize * 1.5}px`;
        tooltip.style.whiteSpace = 'nowrap';
        tooltip.style.opacity = '0';
        tooltip.style.transition = 'opacity 0.2s';
        tooltip.style.pointerEvents = 'none';
        icon.appendChild(tooltip);

        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.2)';
            icon.style.cursor = 'pointer';
            tooltip.style.opacity = '1';
        });

        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1)';
            tooltip.style.opacity = '0';
        });

        icon.addEventListener('click', async (event) => {
            console.log(`Clicked ${planet.name} icon`);
            showLoading();
            const planetContainer = containers[planet.name].container;
            planetContainer.style.display = 'block';
            
            if (planet.name === 'mercury') {
                // Create solar system scene
                const solarSystemScene = new THREE.Scene();
                const solarSystemCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                
                const solarSystemRenderer = new THREE.WebGLRenderer({ antialias: true });
                solarSystemRenderer.setSize(window.innerWidth, window.innerHeight);
                planetContainer.appendChild(solarSystemRenderer.domElement);

                // Create Sun
                const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
                const sunTexture = await new THREE.TextureLoader().loadAsync('images/textures/sun.jpg');
                const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
                const sun = new THREE.Mesh(sunGeometry, sunMaterial);
                solarSystemScene.add(sun);

                // Create planets
                const planets = [
                    { name: 'Mercury', size: 0.8, distance: 10, texture: 'mercury.jpg', speed: 0.01 },
                    { name: 'Venus', size: 1.2, distance: 15, texture: 'venus.jpg', speed: 0.008 },
                    { name: 'Earth', size: 1.3, distance: 20, texture: 'earth.jpg', speed: 0.006 },
                    { name: 'Mars', size: 0.9, distance: 25, texture: 'mars.jpg', speed: 0.004 },
                    { name: 'Jupiter', size: 3, distance: 35, texture: 'jupiter.jpg', speed: 0.002 },
                    { name: 'Saturn', size: 2.5, distance: 45, texture: 'saturn.jpg', speed: 0.001 },
                    { name: 'Uranus', size: 1.8, distance: 55, texture: 'uranus.jpg', speed: 0.0008 },
                    { name: 'Neptune', size: 1.7, distance: 65, texture: 'neptune.jpg', speed: 0.0006 }
                ];

                // Load all planet textures concurrently
                const textureLoader = new THREE.TextureLoader();
                const texturePromises = planets.map(planetData => 
                    textureLoader.loadAsync(`images/textures/${planetData.texture}`)
                );
                const textures = await Promise.all(texturePromises);

                const planetMeshes = planets.map(planetData => {
                    const geometry = new THREE.SphereGeometry(planetData.size, 32, 32);
                    const texture = new THREE.TextureLoader().load(`images/textures/${planetData.texture}`);
                    const material = new THREE.MeshStandardMaterial({ map: texture });
                    const planet = new THREE.Mesh(geometry, material);
                    planet.position.x = planetData.distance;
                    solarSystemScene.add(planet);
                    return { mesh: planet, data: planetData };
                });

                // Add lighting
                const ambientLight = new THREE.AmbientLight(0x333333);
                const pointLight = new THREE.PointLight(0xFFFFFF, 2, 300);
                solarSystemScene.add(ambientLight);
                solarSystemScene.add(pointLight);
                pointLight.position.set(0, 0, 0);

                solarSystemCamera.position.z = 100;
                solarSystemCamera.position.y = 50;

                const controls = new OrbitControls(solarSystemCamera, solarSystemRenderer.domElement);

                function animateSolarSystem() {
                    requestAnimationFrame(animateSolarSystem);
                    
                    sun.rotation.y += 0.002;
                    
                    planetMeshes.forEach(({ mesh, data }) => {
                        // Orbit around sun
                        const time = Date.now() * data.speed;
                        mesh.position.x = Math.cos(time) * data.distance;
                        mesh.position.z = Math.sin(time) * data.distance;
                        // Self rotation
                        mesh.rotation.y += 0.01;
                    });

                    controls.update();
                    solarSystemRenderer.render(solarSystemScene, solarSystemCamera);
                }
                animateSolarSystem();
            } else if (planet.name === 'venus') {
                // Create day/night cycle scene
                const dayNightScene = new THREE.Scene();
                const dayNightCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                
                const dayNightRenderer = new THREE.WebGLRenderer({ antialias: true });
                dayNightRenderer.setSize(window.innerWidth, window.innerHeight);
                planetContainer.appendChild(dayNightRenderer.domElement);

                // Add info text
                const infoDiv = document.createElement('div');
                infoDiv.style.position = 'absolute';
                infoDiv.style.top = '80px';
                infoDiv.style.left = '20px';
                infoDiv.style.color = 'white';
                infoDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                infoDiv.style.padding = '20px';
                infoDiv.style.borderRadius = '10px';
                infoDiv.innerHTML = `
                    <h2>Psyche Day/Night Cycle</h2>
                    <p>Rotation Period (Day Length): ~4.2 Earth hours</p>
                    <p>Orbital Period (Year Length): ~5 Earth years</p>
                    <p>Distance from Sun: ~3 AU (Astronomical Units)</p>
                `;
                planetContainer.appendChild(infoDiv);
                
                // Create Psyche
                const loader = new GLTFLoader();
                let psyche;
                loader.load(
                    'models/psyche/Psyche.glb',
                    function (gltf) {
                        psyche = gltf.scene;
                        psyche.scale.set(1, 1, 1); // Scale the model to appropriate size
                        dayNightScene.add(psyche);
                    },
                    undefined,
                    function (error) {
                        console.error('Error loading Psyche model:', error);
                    }
                );

                // Add lighting for day/night cycle
                const ambientLight = new THREE.AmbientLight(0x111111);
                dayNightScene.add(ambientLight);

                const sunLight = new THREE.DirectionalLight(0xFFFFFF, 1);
                sunLight.position.set(50, 0, 0);
                dayNightScene.add(sunLight);

                dayNightCamera.position.z = 15;
                
                const controls = new OrbitControls(dayNightCamera, dayNightRenderer.domElement);

                let time = 0;
                const dayLength = 4.2; // 4.2 Earth hours
                const yearLength = 1825; // 5 Earth years in days

                function animateDayNight() {
                    requestAnimationFrame(animateDayNight);
                    
                    time += 0.01;
                    
                    // Rotate for day/night cycle (faster)
                    psyche.rotation.y = time * (2 * Math.PI / dayLength);
                    
                    // Orbit around sun (slower)
                    sunLight.position.x = Math.cos(time * (2 * Math.PI / yearLength)) * 50;
                    sunLight.position.z = Math.sin(time * (2 * Math.PI / yearLength)) * 50;
                    
                    controls.update();
                    dayNightRenderer.render(dayNightScene, dayNightCamera);
                }
                animateDayNight();
            } else if (planet.name === 'gravity') {
                // Create gravity visualization scene
                const gravityScene = new THREE.Scene();
                const gravityCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                
                const gravityRenderer = new THREE.WebGLRenderer({ antialias: true });
                gravityRenderer.setSize(window.innerWidth, window.innerHeight);
                planetContainer.appendChild(gravityRenderer.domElement);

                // Add gravity info text
                const gravityInfoDiv = document.createElement('div');
            } else if (planet.name === 'temperature') {
                // Create temperature visualization scene
                const tempScene = new THREE.Scene();
                const tempCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                
                const tempRenderer = new THREE.WebGLRenderer({ antialias: true });
                tempRenderer.setSize(window.innerWidth, window.innerHeight);
                planetContainer.appendChild(tempRenderer.domElement);

                // Load the Psyche GLB model
                const loader = new GLTFLoader();
                let psyche;
                loader.load('models/psyche/Psyche.glb', function(gltf) {
                    psyche = gltf.scene;
                    psyche.scale.set(1, 1, 1);

                    // Create temperature gradient using a custom shader material
                    const temperatureMaterial = new THREE.ShaderMaterial({
                        uniforms: {
                            sunDirection: { value: new THREE.Vector3(1, 0, 0) },
                            time: { value: 0 }
                        },
                        vertexShader: `
                            varying vec3 vNormal;
                            varying vec3 vPosition;
                            
                            void main() {
                                vNormal = normalize(normalMatrix * normal);
                                vPosition = position;
                                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                            }
                        `,
                        fragmentShader: `
                            uniform vec3 sunDirection;
                            uniform float time;
                            varying vec3 vNormal;
                            varying vec3 vPosition;
                            
                            // Pseudo-random function
                            float random(vec2 st) {
                                return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
                            }
                            
                            void main() {
                                // Calculate distance from equator (using y coordinate)
                                float latitude = asin(normalize(vPosition).y);
                                float poleEffect = abs(latitude) / (3.14159 / 2.0);
                                
                                // Add some random variation
                                vec2 randomCoord = vPosition.xz * 0.5;
                                float noise = random(randomCoord) * 5.0;
                                
                                // Temperature in Kelvin (88K to 98K)
                                float temperature = mix(88.0, 98.0, (1.0 - poleEffect)) + noise;
                                
                                vec3 tempColor;
                                if(temperature > 95.0) {
                                    tempColor = mix(vec3(1.0, 0.0, 0.0), vec3(1.0, 0.5, 0.0), (temperature - 95.0) / 3.0);
                                } else if(temperature > 92.0) {
                                    tempColor = mix(vec3(0.0, 0.0, 1.0), vec3(0.5, 0.5, 1.0), (temperature - 92.0) / 3.0);
                                } else {
                                    tempColor = mix(vec3(0.0, 0.0, 0.5), vec3(0.0, 0.0, 1.0), (temperature - 88.0) / 4.0);
                                }
                                
                                gl_FragColor = vec4(tempColor, 1.0);
                            }
                        `
                    });

                    // Apply temperature material to all meshes in the model
                    psyche.traverse((child) => {
                        if (child.isMesh) {
                            child.material = temperatureMaterial;
                        }
                    });

                    tempScene.add(psyche);
                }, undefined, function(error) {
                    console.error('Error loading Psyche model:', error);
                });

                // Add temperature legend
                const legendDiv = document.createElement('div');
                legendDiv.style.position = 'absolute';
                legendDiv.style.top = '80px';
                legendDiv.style.right = '20px';
                legendDiv.style.color = 'white';
                legendDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                legendDiv.style.padding = '20px';
                legendDiv.style.borderRadius = '10px';
                legendDiv.innerHTML = `
                    <h2>Psyche Temperature Map</h2>
                    <div style="display: flex; align-items: center; margin: 10px 0;">
                        <div style="background: linear-gradient(to bottom, #ff0000, #ff8000, #0000ff, #000080); width: 20px; height: 200px; margin-right: 10px;"></div>
                        <div>
                            <div>98K (Warmest)</div>
                            <div style="margin-top: 80px;">93K</div>
                            <div style="margin-top: 80px;">88K (Coldest)</div>
                        </div>
                    </div>
                    <p>Psyche's temperature variations are due to:</p>
                    <ul>
                        <li>Distance from Sun (3 AU)</li>
                        <li>Equatorial vs Polar regions</li>
                        <li>Local surface variations</li>
                        <li>Metallic heat conductivity</li>
                    </ul>
                `;
                planetContainer.appendChild(legendDiv);

                // Add sun light
                const sunLight = new THREE.DirectionalLight(0xFFFFFF, 2);
                sunLight.position.set(50, 0, 0);
                tempScene.add(sunLight);

                // Add ambient light
                const ambientLight = new THREE.AmbientLight(0x333333);
                tempScene.add(ambientLight);

                tempCamera.position.z = 15;

                const controls = new OrbitControls(tempCamera, tempRenderer.domElement);

                function animateTemp() {
                    requestAnimationFrame(animateTemp);
                    if (psyche) {
                        psyche.rotation.y += 0.005;
                    }
                    
                    // Update sun direction in shader
                    const time = Date.now() * 0.001;
                    sunLight.position.x = Math.cos(time * 0.2) * 50;
                    sunLight.position.z = Math.sin(time * 0.2) * 50;
                    
                    controls.update();
                    tempRenderer.render(tempScene, tempCamera);
                }
                animateTemp();

            } else if (planet.name === 'psyche') {
                // Create new scene for Psyche model
                const psycheScene = new THREE.Scene();
                const psycheCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                
                const psycheRenderer = new THREE.WebGLRenderer({ antialias: true });
                psycheRenderer.setSize(window.innerWidth, window.innerHeight);
                planetContainer.appendChild(psycheRenderer.domElement);
                
                // Load the Psyche GLB model
                const loader = new GLTFLoader();
                loader.load('models/psyche/Psyche.glb', function(gltf) {
                    const psycheModel = gltf.scene;
                    psycheModel.scale.set(1, 1, 1); // Scale the model to appropriate size
                    psycheScene.add(psycheModel);
                }, undefined, function(error) {
                    console.error('Error loading Psyche model:', error);
                });
                
                // Add lighting
                const psycheAmbientLight = new THREE.AmbientLight(0x333333);
                const psychePointLight = new THREE.PointLight(0xFFFFFF, 2, 300);
                psycheScene.add(psycheAmbientLight);
                psycheScene.add(psychePointLight);
                psychePointLight.position.set(50, 50, 50);
                
                psycheCamera.position.z = 15;
                
                const psycheControls = new OrbitControls(psycheCamera, psycheRenderer.domElement);
                
                function animatePsyche() {
                    requestAnimationFrame(animatePsyche);
                    psycheModel.rotation.y += 0.005;
                    psycheControls.update();
                    psycheRenderer.render(psycheScene, psycheCamera);
                }
                animatePsyche();
            }
            
            event.stopPropagation();
        });

        menuContainer.appendChild(icon);
    });

    // Create scene for Psyche in main container
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    container.appendChild(renderer.domElement);

    // Create Psyche model for main container
    const loader = new GLTFLoader();
    let psycheModel;
    loader.load(
        'models/psyche/Psyche.glb',
        function (gltf) {
            psycheModel = gltf.scene;
            psycheModel.scale.set(1, 1, 1);
            scene.add(psycheModel);
        },
        undefined,
        function (error) {
            console.error('Error loading Psyche model:', error);
        }
    );

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x333333);
    const pointLight = new THREE.PointLight(0xFFFFFF, 2, 300);
    scene.add(ambientLight);
    scene.add(pointLight);
    pointLight.position.set(50, 50, 50);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enablePan = true;
    controls.minDistance = 5;
    controls.maxDistance = 100;

    // Handle window resize
    window.addEventListener('resize', () => {
        // Update base sizes
        const newVw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const newVh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        const newBaseSize = Math.min(newVw, newVh) * 0.02;
        const newAdjustedBaseSize = newBaseSize * Math.max(1, dpr/2);

        // Update camera
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();

        // Update renderer
        renderer.setSize(container.clientWidth, container.clientHeight);

        // Update icon positions and sizes
        const newRadius = Math.min(container.clientWidth, container.clientHeight) * 0.4;
        const newCenterX = container.clientWidth / 2;
        const newCenterY = container.clientHeight / 2;
        const newIconSize = newAdjustedBaseSize * 5;

        document.querySelectorAll('.planet-icon').forEach((icon, index) => {
            const angle = (index / planetIcons.length) * 2 * Math.PI;
            const x = newCenterX + newRadius * Math.cos(angle);
            const y = newCenterY + newRadius * Math.sin(angle);

            icon.style.width = `${newIconSize}px`;
            icon.style.height = `${newIconSize}px`;
            icon.style.left = `${x - newIconSize/2}px`;
            icon.style.top = `${y - newIconSize/2}px`;
        });
    });

    function animate() {
        requestAnimationFrame(animate);
        if (psycheModel) {
            psycheModel.rotation.y += 0.005;
        }
        controls.update();
        renderer.render(scene, camera);
    }
    animate();
});
