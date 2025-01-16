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
        this.temperatureOverlay = null;

        this.init();
    }

    init() {
        // Setup renderer
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);

        // Setup camera
        this.camera.position.z = this.isPreview ? 8 : 12; // Increased camera distance

        // Setup controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        
        // Disable controls for preview mode
        if (this.isPreview) {
            this.controls.enabled = false;
        }

        // Add lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5);
        this.scene.add(directionalLight);

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
                
                // Add temperature overlay
                this.addTemperatureOverlay();
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            (error) => {
                console.error('Error loading model:', error);
            }
        );
    }

    addTemperatureOverlay() {
        // Create temperature gradient texture
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 1;
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        
        // Temperature gradient colors (blue for cold to red for hot)
        gradient.addColorStop(0, '#0000ff');   // Cold
        gradient.addColorStop(0.5, '#00ff00'); // Moderate
        gradient.addColorStop(1, '#ff0000');   // Hot
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const texture = new THREE.CanvasTexture(canvas);
        
        // Apply temperature overlay to model
        if (this.model) {
            this.model.traverse((child) => {
                if (child.isMesh) {
                    child.material = new THREE.MeshPhongMaterial({
                        map: child.material.map,
                        emissiveMap: texture,
                        emissive: new THREE.Color(0xffffff),
                        emissiveIntensity: 0.5,
                        transparent: true,
                        opacity: 0.8
                    });
                }
            });
        }
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
