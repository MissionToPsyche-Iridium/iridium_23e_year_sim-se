// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 4000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create starfield background
function createStarfield() {
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
        color: 0xFFFFFF,
        size: 0.1,
        transparent: true,
        opacity: 0.8
    });

    const starsVertices = [];
    for (let i = 0; i < 10000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    return starField;
}

// Function to create 3D gravitational grid
function createGravitationalGrid(radius, density) {
    const group = new THREE.Group();
    const lineCount = density; // Number of lines in each direction
    const size = radius * 2; // Total size of the grid
    
    // Create curved line material
    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.3
    });

    // Function to create a curved line
    function createCurvedLine(startPoint, endPoint, influencePoint, segments) {
        const points = [];
        for (let i = 0; i <= segments; i++) {
            const t = i / segments;
            const point = new THREE.Vector3();
            
            // Start position
            point.copy(startPoint);
            
            // Calculate distance to influence point
            const influenceVector = new THREE.Vector3();
            influenceVector.subVectors(influencePoint, point);
            const distance = influenceVector.length();
            
            // Calculate bending strength
            const maxBend = 0.5; // Maximum amount of bending
            const bendRadius = radius * 1.5; // Radius of influence
            let bendStrength = 0;
            
            if (distance < bendRadius) {
                bendStrength = Math.pow(1 - (distance / bendRadius), 2) * maxBend;
            }
            
            // Calculate intermediate position
            const straightPath = new THREE.Vector3();
            straightPath.subVectors(endPoint, startPoint);
            straightPath.multiplyScalar(t);
            point.add(straightPath);
            
            // Apply gravitational bending
            if (bendStrength > 0) {
                const bendVector = new THREE.Vector3();
                bendVector.subVectors(influencePoint, point);
                bendVector.normalize();
                bendVector.multiplyScalar(bendStrength * Math.sin(Math.PI * t));
                point.add(bendVector);
            }
            
            points.push(point.clone());
        }
        
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return new THREE.Line(geometry, lineMaterial);
    }

    // Create grid lines in all three dimensions
    for (let i = -lineCount; i <= lineCount; i++) {
        const offset = (i / lineCount) * size * 0.5;
        
        // Create lines in XY plane (vertical planes)
        for (let j = -lineCount; j <= lineCount; j++) {
            const offsetY = (j / lineCount) * size * 0.5;
            
            // X-direction lines at different Y,Z positions
            const startX = new THREE.Vector3(-size/2, offsetY, offset);
            const endX = new THREE.Vector3(size/2, offsetY, offset);
            const lineX = createCurvedLine(startX, endX, new THREE.Vector3(0, 0, 0), 50);
            group.add(lineX);
            
            // Y-direction lines at different X,Z positions
            const startY = new THREE.Vector3(offset, -size/2, offsetY);
            const endY = new THREE.Vector3(offset, size/2, offsetY);
            const lineY = createCurvedLine(startY, endY, new THREE.Vector3(0, 0, 0), 50);
            group.add(lineY);
            
            // Z-direction lines at different X,Y positions
            const startZ = new THREE.Vector3(offset, offsetY, -size/2);
            const endZ = new THREE.Vector3(offset, offsetY, size/2);
            const lineZ = createCurvedLine(startZ, endZ, new THREE.Vector3(0, 0, 0), 50);
            group.add(lineZ);
        }

        // Create spherical shells at different radii
        if (i > 0) {
            const shellRadius = Math.abs(offset);
            const segments = 32;
            const rings = 16;
            
            // Create latitude rings
            for (let lat = 0; lat < rings; lat++) {
                const phi = (lat / rings) * Math.PI;
                const circlePoints = [];
                
                for (let j = 0; j <= segments; j++) {
                    const theta = (j / segments) * Math.PI * 2;
                    const x = shellRadius * Math.sin(phi) * Math.cos(theta);
                    const y = shellRadius * Math.sin(phi) * Math.sin(theta);
                    const z = shellRadius * Math.cos(phi);
                    circlePoints.push(new THREE.Vector3(x, y, z));
                }
                
                const circleGeometry = new THREE.BufferGeometry().setFromPoints(circlePoints);
                const circleLine = new THREE.Line(circleGeometry, lineMaterial);
                group.add(circleLine);
            }
            
            // Create longitude rings
            for (let long = 0; long < segments; long++) {
                const theta = (long / segments) * Math.PI * 2;
                const circlePoints = [];
                
                for (let j = 0; j <= rings; j++) {
                    const phi = (j / rings) * Math.PI;
                    const x = shellRadius * Math.sin(phi) * Math.cos(theta);
                    const y = shellRadius * Math.sin(phi) * Math.sin(theta);
                    const z = shellRadius * Math.cos(phi);
                    circlePoints.push(new THREE.Vector3(x, y, z));
                }
                
                const circleGeometry = new THREE.BufferGeometry().setFromPoints(circlePoints);
                const circleLine = new THREE.Line(circleGeometry, lineMaterial);
                group.add(circleLine);
            }
        }
    }

    return group;
}

// Add starfield to scene
const starField = createStarfield();
scene.add(starField);

// Create a helper to display the axes (X: red, Y: green, Z: blue)
const axesHelper = new THREE.AxesHelper(100);  // Size of the axes
scene.add(axesHelper);

// OrbitControls for zooming, rotating, and panning
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;  // Smooth damping (inertia)
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;  // Don't allow camera to pan in 2D space
controls.maxPolarAngle = Math.PI;  // Allow full rotation in vertical axis

// Position the camera and set controls target
camera.position.set(200, 200, 200);  // Closer initial camera position to start zoomed in
controls.target.set(0, 0, 0);  // Look at the origin
controls.update();  // Update the controls

// Add lighting to the scene
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 500, 500).normalize();
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Create and add the 3D gravitational grid
const gridRadius = 200;
const gravitationalGrid = createGravitationalGrid(gridRadius, 10); // Reduced density for better visibility
scene.add(gravitationalGrid);

// Load the 3D model (PSYCHE.glb) using GLTFLoader
const loader = new THREE.GLTFLoader();
loader.load('PSYCHE.glb', function(gltf) {
    // Add the loaded model to the scene
    const model = gltf.scene;
    model.scale.set(10, 10, 10);
    // Position the model at the origin
    model.position.set(0, 0, 0);
    scene.add(model);

    console.log('Model loaded successfully');
}, undefined, function(error) {
    console.error('An error occurred while loading the model:', error);
});

// Animation loop
let time = 0;
function animate() {
    requestAnimationFrame(animate);
    
    // Update time for animation
    time += 0.01;

    // Animate the gravitational grid with subtle rotation
    gravitationalGrid.rotation.y = time * 0.02;
    gravitationalGrid.rotation.x = Math.sin(time * 0.1) * 0.1;
    
    controls.update();
    renderer.render(scene, camera);
}

// Start the animation loop
animate();