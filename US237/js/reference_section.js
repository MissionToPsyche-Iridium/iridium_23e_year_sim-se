function referenceSection() {
    const referenceDiv = document.getElementById('reference-section');
    referenceDiv.id = 'reference-section';
    referenceDiv.style.position = 'absolute';
    referenceDiv.style.bottom = '0';
    referenceDiv.style.left = '0';
    referenceDiv.style.width = '100%';
    referenceDiv.style.padding = '10px';
    referenceDiv.style.background = 'rgba(0, 0, 0, 0.7)';
    referenceDiv.style.color = 'white';
    referenceDiv.style.fontFamily = 'Arial, sans-serif';
    referenceDiv.style.fontSize = '14px';

    referenceDiv.innerHTML =    `
        <p>References:</p>
        <ul>
            <li><a href="https://threejs.org/docs/" target="_blank" style="color: #00ccff; text-decoration: none;">Three.js Documentation</a></li>
            <li><a href="https://github.com/mrdoob/three.js/" target="_blank" style="color: #00ccff; text-decoration: none;">Three.js GitHub Repository</a></li>
            <li>Asteroid model by a <a href="https://nasa.gov" target="_blank" style="color: #00ccff; text-decoration: none;">NASA</a><li>
            <li>Simulation inspired by a <a href="https://blender.org" target="_blank" style="color: #00ccff; text-decoration: none;">Blender</a></li>
    </ul>
  `;
    referenceSection.innerHTML = referenceContent;
    document.body.appendChild(referenceDiv);

}
loader.load(
    `models/${objToRender}/psyche.glb`,
    function (gltf) {
        object = gltf.scene;
        object.scale.set(3, 3, 3);
        object.position.set(0, 0, 0);
        scene.add(object);
        console.log('Object loaded and added to scene');
        referenceSection();
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.error(error);
    }
);
 // window.onload = referenceSection;