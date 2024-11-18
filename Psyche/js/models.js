import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('containerOne');
    if (!container) {
        console.error("Container element with ID 'containerOne' not found.");
        return;
    }

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
        planetContainer.style.border = '2px solid #fff';
        planetContainer.style.borderRadius = '10px';
        planetContainer.style.padding = '20px';
        planetContainer.style.boxSizing = 'border-box';
        planetContainer.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.3)';

        const headerContainer = document.createElement('div');
        headerContainer.style.display = 'flex';
        headerContainer.style.justifyContent = 'space-between';
        headerContainer.style.alignItems = 'center';
        headerContainer.style.marginBottom = '20px';

        const title = document.createElement('h1');
        title.textContent = planet.displayName || planet.name.charAt(0).toUpperCase() + planet.name.slice(1);
        title.style.color = '#fff';
        title.style.margin = '0';
        headerContainer.appendChild(title);

        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px';

        const fullscreenBtn = document.createElement('button');
        fullscreenBtn.innerHTML = '&#x26F6;';
        fullscreenBtn.style.background = 'none';
        fullscreenBtn.style.border = 'none';
        fullscreenBtn.style.color = '#fff';
        fullscreenBtn.style.fontSize = '20px';
        fullscreenBtn.style.cursor = 'pointer';
        fullscreenBtn.style.padding = '5px';
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
        closeBtn.style.fontSize = '24px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.padding = '5px';
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
        icon.appendChild(img);
        
        icon.style.position = 'absolute';
        icon.style.width = '40px';
        icon.style.height = '40px';
        icon.style.left = `${x - 20}px`;
        icon.style.top = `${y - 20}px`;
        icon.style.cursor = 'pointer';
        icon.style.pointerEvents = 'auto';
        icon.style.borderRadius = '50%';
        icon.style.transition = 'transform 0.2s';
        icon.style.zIndex = '200';
        icon.id = `button-${planet.name}`;
        icon.classList.add('planet-icon');

        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.2)';
            icon.style.cursor = 'pointer';
        });

        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1)';
        });

        icon.addEventListener('click', (event) => {
            console.log(`Clicked ${planet.name} icon`);
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
                const sunTexture = new THREE.TextureLoader().load('images/textures/sun.jpg');
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
                const psycheGeometry = new THREE.SphereGeometry(5, 32, 32);
                const psycheTexture = new THREE.TextureLoader().load('images/textures/mercury.jpg');
                const psycheMaterial = new THREE.MeshStandardMaterial({ 
                    map: psycheTexture,
                    metalness: 0.7,
                    roughness: 0.3
                });
                const psyche = new THREE.Mesh(psycheGeometry, psycheMaterial);
                dayNightScene.add(psyche);

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

                // Create base Psyche sphere
                const psycheGeometry = new THREE.SphereGeometry(5, 64, 64);
                
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

                const psyche = new THREE.Mesh(psycheGeometry, temperatureMaterial);
                tempScene.add(psyche);

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
                    psyche.rotation.y += 0.005;
                    
                    // Update sun direction in shader
                    const time = Date.now() * 0.001;
                    sunLight.position.x = Math.cos(time * 0.2) * 50;
                    sunLight.position.z = Math.sin(time * 0.2) * 50;
                    temperatureMaterial.uniforms.sunDirection.value.copy(sunLight.position).normalize();
                    
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
                
                // Create a sphere geometry for Psyche with Mercury's texture
                const psycheGeometry = new THREE.SphereGeometry(5, 32, 32);
                const psycheTexture = new THREE.TextureLoader().load('images/textures/mercury.jpg');
                const psycheMaterial = new THREE.MeshStandardMaterial({ map: psycheTexture });
                const psycheModel = new THREE.Mesh(psycheGeometry, psycheMaterial);
                psycheScene.add(psycheModel);
                
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
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Create Psyche model for main container
    const psycheGeometry = new THREE.SphereGeometry(5, 32, 32);
    const psycheTexture = new THREE.TextureLoader().load('images/textures/mercury.jpg');
    const psycheMaterial = new THREE.MeshStandardMaterial({ map: psycheTexture });
    const psycheModel = new THREE.Mesh(psycheGeometry, psycheMaterial);
    scene.add(psycheModel);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x333333);
    const pointLight = new THREE.PointLight(0xFFFFFF, 2, 300);
    scene.add(ambientLight);
    scene.add(pointLight);
    pointLight.position.set(50, 50, 50);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true; // Enable zooming
    controls.enablePan = true;  // Enable panning
    controls.minDistance = 5;   // Set minimum zoom distance
    controls.maxDistance = 100; // Set maximum zoom distance

    function animate() {
        requestAnimationFrame(animate);
        psycheModel.rotation.y += 0.005;
        controls.update();
        renderer.render(scene, camera);
    }
    animate();
});
