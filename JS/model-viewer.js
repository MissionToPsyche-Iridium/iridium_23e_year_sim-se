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

        this.init();
    }

    init() {
        // Setup renderer
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);

        // Setup camera
        this.camera.position.z = this.isPreview ? 8 : 12;

        // Setup controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        
        // Disable controls for preview mode
        if (this.isPreview) {
            this.controls.enabled = false;
        }

        // Add lights
        const ambientLight = new THREE.AmbientLight(0x333333);
        this.scene.add(ambientLight);

        this.sunLight = new THREE.DirectionalLight(0xFFFFFF, 2);
        this.sunLight.position.set(50, 0, 0);
        this.scene.add(this.sunLight);

        // Load model
        this.loadModel();

        // Start animation loop
        this.animate();

        // Handle window resize
        window.addEventListener('resize', () => this.onWindowResize(), false);
    }

    loadModel() {
        const loader = new GLTFLoader();
        loader.load(
            'models/psyche/Psyche.glb',
            (gltf) => {
                this.model = gltf.scene;
                
                // Scale model based on mode
                const scale = this.isPreview ? 0.8 : 1;
                this.model.scale.set(scale, scale, scale);
                
                this.scene.add(this.model);
                
                // Add temperature visualization if not in preview
                if (!this.isPreview) {
                    this.addTemperatureVisualization();
                }
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            (error) => {
                console.error('Error loading model:', error);
            }
        );
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
        this.model.traverse((child) => {
            if (child.isMesh) {
                child.material = temperatureMaterial;
            }
        });

        // Add temperature legend
        this.createTemperatureLegend();
    }

    createTemperatureLegend() {
        const legendDiv = document.createElement('div');
        legendDiv.style.cssText = `
            position: absolute;
            top: 80px;
            right: 20px;
            color: white;
            background-color: rgba(0, 0, 0, 0.7);
            padding: 20px;
            border-radius: 10px;
            font-family: Arial, sans-serif;
        `;
        legendDiv.innerHTML = `
            <h2 style="margin-top: 0;">Psyche Temperature Map</h2>
            <div style="display: flex; align-items: center; margin: 10px 0;">
                <div style="background: linear-gradient(to bottom, #ff0000, #ff8000, #0000ff, #000080); width: 20px; height: 200px; margin-right: 10px;"></div>
                <div>
                    <div>98K (Warmest)</div>
                    <div style="margin-top: 80px;">93K</div>
                    <div style="margin-top: 80px;">88K (Coldest)</div>
                </div>
            </div>
            <p style="margin-bottom: 5px;">Psyche's temperature variations are due to:</p>
            <ul style="margin-top: 5px;">
                <li>Distance from Sun (3 AU)</li>
                <li>Equatorial vs Polar regions</li>
                <li>Local surface variations</li>
                <li>Metallic heat conductivity</li>
            </ul>
        `;
        this.container.appendChild(legendDiv);
    }

    onWindowResize() {
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        
        if (this.model) {
            // Auto-rotate in preview mode
            if (this.isPreview) {
                this.model.rotation.y += 0.01;
            }
            
            // Update sun direction and time for temperature visualization
            if (!this.isPreview) {
                this.time = Date.now() * 0.001;
                this.sunLight.position.x = Math.cos(this.time * 0.2) * 50;
                this.sunLight.position.z = Math.sin(this.time * 0.2) * 50;
                
                // Update shader uniforms
                this.model.traverse((child) => {
                    if (child.isMesh && child.material.uniforms) {
                        child.material.uniforms.time.value = this.time;
                        child.material.uniforms.sunDirection.value.copy(this.sunLight.position).normalize();
                    }
                });
            }
        }
        
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize the viewer when the page loads
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
