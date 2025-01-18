import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

class ModelViewer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.isPreview = containerId === 'preview-container';
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, this.container.clientWidth / this.container.clientHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.controls = null;
        this.model = null;
        this.sunLight = null;
        this.time = 0;
        this.temperatureUnit = 'K';
        this.cameraTarget = new THREE.Vector3();
        this.initialCameraPosition = new THREE.Vector3(0, 0, 3);

        this.init();
    }

    init() {
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setClearColor(0x000000);
        this.container.appendChild(this.renderer.domElement);

        // Setup camera with initial position
        this.camera.position.copy(this.initialCameraPosition);
        if (this.isPreview) {
            this.camera.position.z = 7.5; // Closer zoom for preview
        }

        // Setup controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.autoRotate = !this.isPreview;
        this.controls.autoRotateSpeed = 0.5;
        
        if (this.isPreview) {
            this.controls.enabled = false;
        }

        const ambientLight = new THREE.AmbientLight(0x333333);
        this.scene.add(ambientLight);

        this.sunLight = new THREE.DirectionalLight(0xFFFFFF, 2);
        this.sunLight.position.set(50, 0, 0);
        this.scene.add(this.sunLight);

        if (!this.isPreview) {
            this.addLoadingAnimation();
        }

        this.loadModel();
        this.animate();

        window.addEventListener('resize', () => this.onWindowResize(), false);
    }

    addLoadingAnimation() {
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'loading-screen';
        loadingDiv.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #00ff00;
            font-family: 'Courier New', monospace;
            transition: opacity 0.5s;
            z-index: 1000;
        `;
        
        const spinnerSize = 100;
        const spinnerHTML = `
            <svg width="${spinnerSize}" height="${spinnerSize}" viewBox="0 0 ${spinnerSize} ${spinnerSize}">
                <circle cx="${spinnerSize/2}" cy="${spinnerSize/2}" r="${spinnerSize/2-10}"
                    stroke="#00ff00" stroke-width="4" fill="none"
                    style="animation: spin 2s linear infinite;">
                </circle>
            </svg>
            <style>
                @keyframes spin {
                    0% { stroke-dasharray: 0 ${spinnerSize*3}; }
                    50% { stroke-dasharray: ${spinnerSize*3} 0; }
                    100% { stroke-dasharray: 0 ${spinnerSize*3}; transform: rotate(360deg); }
                }
            </style>
        `;
        
        loadingDiv.innerHTML = `
            ${spinnerHTML}
            <div style="margin-top: 20px; font-size: 1.2em;">INITIALIZING TEMPERATURE VISUALIZATION</div>
            <div style="margin-top: 10px; font-size: 0.9em;" class="loading-progress">0%</div>
        `;
        
        this.container.appendChild(loadingDiv);
        this.loadingScreen = loadingDiv;
        this.loadingProgress = loadingDiv.querySelector('.loading-progress');
    }

    loadModel() {
        const loader = new GLTFLoader();
        loader.load(
            'models/psyche/Psyche.glb',
            (gltf) => {
                this.model = gltf.scene;
                
                const scale = this.isPreview ? 0.8 : 1;
                this.model.scale.set(scale, scale, scale);
                
                this.scene.add(this.model);
                
                this.addTemperatureVisualization();
                if (!this.isPreview) {
                    this.createTemperatureLegend();
                }

                if (this.loadingScreen) {
                    this.loadingScreen.style.opacity = '0';
                    setTimeout(() => {
                        this.loadingScreen.remove();
                    }, 500);
                }

                if (!this.isPreview) {
                    this.animateCameraToPosition(new THREE.Vector3(0, 0, 12), 2000);
                }
            },
            (xhr) => {
                if (this.loadingProgress) {
                    const progress = Math.floor((xhr.loaded / xhr.total) * 100);
                    this.loadingProgress.textContent = `${progress}%`;
                }
            },
            (error) => {
                console.error('Error loading model:', error);
            }
        );
    }

    animateCameraToPosition(targetPos, duration) {
        const startPos = this.camera.position.clone();
        const startTime = Date.now();
        
        const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            this.camera.position.lerpVectors(startPos, targetPos, eased);
            if (progress < 1) requestAnimationFrame(animate);
        };
        
        animate();
    }

    addTemperatureVisualization() {
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
                
                float random(vec2 st) {
                    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
                }
                
                void main() {
                    float latitude = asin(normalize(vPosition).y);
                    float poleEffect = abs(latitude) / (3.14159 / 2.0);
                    vec2 randomCoord = vPosition.xz * 0.5;
                    float noise = random(randomCoord) * 5.0;
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

        this.model.traverse((child) => {
            if (child.isMesh) {
                child.material = temperatureMaterial;
            }
        });
    }

    setTemperatureUnit(unit) {
        this.temperatureUnit = unit;
        const buttons = this.temperatureLegend.querySelectorAll('.temp-unit-btn');
        buttons.forEach(button => {
            button.style.background = button.textContent === unit ? '#00ff00' : '#333';
        });
        this.updateTemperatureLegend();
    }

    convertTemperature(kelvin, unit) {
        switch(unit) {
            case '°C': return (kelvin - 273.15).toFixed(1);
            case '°F': return ((kelvin - 273.15) * 9/5 + 32).toFixed(1);
            default: return kelvin.toFixed(1);
        }
    }

    createTemperatureLegend() {
        const legendDiv = document.createElement('div');
        legendDiv.className = 'temperature-legend';
        
        // Base styles
        const baseLegendStyle = `
            position: absolute;
            top: 20px;
            right: 20px;
            color: #00ff00;
            background-color: rgba(0, 0, 0, 0.8);
            padding: 15px;
            border-radius: 10px;
            font-family: 'Courier New', monospace;
            border: 1px solid #00ff00;
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
            z-index: 100;
            transition: all 0.3s ease;
            transform-origin: right;
            transform: scaleX(1);
        `;

        // Responsive styles based on container width
        const containerWidth = this.container.clientWidth;
        const fontSize = containerWidth < 600 ? '12px' : '14px';
        const headerSize = containerWidth < 600 ? '14px' : '16px';
        const gradientWidth = containerWidth < 600 ? '15px' : '20px';
        const gradientHeight = containerWidth < 600 ? '150px' : '200px';
        const padding = containerWidth < 600 ? '10px' : '15px';

        legendDiv.style.cssText = `
            ${baseLegendStyle}
            font-size: ${fontSize};
            padding: ${padding};
            max-width: ${containerWidth < 600 ? '250px' : '300px'};
        `;
        
        this.temperatureLegend = legendDiv;
        this.updateTemperatureLegend(headerSize, gradientWidth, gradientHeight);
        this.container.appendChild(legendDiv);
        this.updateLegendPosition();
        window.addEventListener('resize', () => this.updateLegendPosition());
    }

    updateLegendPosition() {
        const containerRect = this.container.getBoundingClientRect();
        const legendRect = this.temperatureLegend.getBoundingClientRect();
        const maxRight = containerRect.width - legendRect.width - 20;
        const right = Math.min(20, maxRight);
        this.temperatureLegend.style.right = `${right}px`;
    }

    updateTemperatureLegend(headerSize = '16px', gradientWidth = '20px', gradientHeight = '200px') {
        const unit = this.temperatureUnit;
        const warm = this.convertTemperature(98, unit);
        const mid = this.convertTemperature(93, unit);
        const cold = this.convertTemperature(88, unit);

        const unitButtons = ['K', '°C', '°F'].map(u => `
            <button class="temp-unit-btn" style="
                background: ${u === unit ? '#00ff00' : '#333'};
                color: white;
                border: none;
                padding: 4px 8px;
                margin: 0 2px;
                border-radius: 3px;
                cursor: pointer;
                font-family: 'Courier New', monospace;
                font-size: 0.9em;
                transition: background 0.3s;
            ">${u}</button>
        `).join('');

        this.temperatureLegend.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h2 style="margin: 0; color: #00ff00; font-size: ${headerSize};">PSYCHE TEMPERATURE MAP</h2>
                <div style="display: flex; gap: 4px;">${unitButtons}</div>
            </div>
            <button class="collapse-btn" style="
                position: absolute;
                right: 100%;
                top: 50%;
                transform: translateY(-50%);
                background: rgba(0, 0, 0, 0.8);
                color: #00ff00;
                border: 1px solid #00ff00;
                border-radius: 5px 0 0 5px;
                cursor: pointer;
                font-size: 16px;
                padding: 8px;
                margin-right: -1px;
                box-shadow: -2px 0 10px rgba(0, 255, 0, 0.3);
                transition: all 0.3s ease;
            ">◄</button>
            <div style="display: flex; align-items: center; margin: 10px 0;">
                <div style="background: linear-gradient(to bottom, #ff0000, #ff8000, #0000ff, #000080);
                            width: ${gradientWidth}; height: ${gradientHeight}; margin-right: 10px;
                            border: 1px solid #00ff00;"></div>
                <div>
                    <div>${warm}${unit}</div>
                    <div style="margin-top: ${parseInt(gradientHeight) * 0.4}px;">${mid}${unit}</div>
                    <div style="margin-top: ${parseInt(gradientHeight) * 0.4}px;">${cold}${unit}</div>
                </div>
            </div>
            <p style="margin-bottom: 5px;">TEMPERATURE VARIATIONS DUE TO:</p>
            <ul style="margin-top: 5px; list-style-type: none; padding-left: 0;">
                <li>► SOLAR DISTANCE (3 AU)</li>
                <li>► EQUATORIAL VS POLAR REGIONS</li>
                <li>► SURFACE VARIATIONS</li>
                <li>► METALLIC HEAT CONDUCTIVITY</li>
            </ul>
        `;

        this.temperatureLegend.querySelectorAll('.temp-unit-btn').forEach(button => {
            button.onclick = () => this.setTemperatureUnit(button.textContent);
        });

        // Add collapse button functionality
        const collapseBtn = this.temperatureLegend.querySelector('.collapse-btn');
        let isCollapsed = false;
        collapseBtn.onclick = () => {
            isCollapsed = !isCollapsed;
            this.temperatureLegend.style.transform = isCollapsed ? 'translateX(calc(100% + 20px))' : 'translateX(0)';
            collapseBtn.textContent = isCollapsed ? '►' : '◄';
            collapseBtn.style.borderRadius = isCollapsed ? '5px 0 0 5px' : '5px 0 0 5px';
        };
    }

    onWindowResize() {
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        
        if (this.temperatureLegend) {
            const containerWidth = this.container.clientWidth;
            const fontSize = containerWidth < 600 ? '12px' : '14px';
            const headerSize = containerWidth < 600 ? '14px' : '16px';
            const gradientWidth = containerWidth < 600 ? '15px' : '20px';
            const gradientHeight = containerWidth < 600 ? '150px' : '200px';
            const padding = containerWidth < 600 ? '10px' : '15px';

            this.temperatureLegend.style.fontSize = fontSize;
            this.temperatureLegend.style.padding = padding;
            this.temperatureLegend.style.maxWidth = containerWidth < 600 ? '250px' : '300px';
            
            this.updateTemperatureLegend(headerSize, gradientWidth, gradientHeight);
            this.updateLegendPosition();
        }
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        
        if (this.model) {
            this.time = Date.now() * 0.001;
            this.sunLight.position.x = Math.cos(this.time * 0.2) * 50;
            this.sunLight.position.z = Math.sin(this.time * 0.2) * 50;
            
            this.model.traverse((child) => {
                if (child.isMesh && child.material.uniforms) {
                    child.material.uniforms.time.value = this.time;
                    child.material.uniforms.sunDirection.value.copy(this.sunLight.position).normalize();
                }
            });

            if (this.isPreview) {
                this.model.rotation.y += 0.01;
            }
        }
        
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}

window.addEventListener('load', () => {
    const previewContainer = document.getElementById('preview-container');
    const modelContainer = document.getElementById('model-container');
    
    if (previewContainer) {
        new ModelViewer('preview-container');
    }
    
    if (modelContainer) {
        new ModelViewer('model-container');
    }
});
