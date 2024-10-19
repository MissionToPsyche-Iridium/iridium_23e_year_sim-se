## Scale Sun Model:

### This sun model is built in Blender 4.2.   

Each **Blender Unit (BU)** is set to **100 km** for scaling. Therefore, the **Sun**, with a documented diameter of **1.4 million kilometers**, is modeled with a **radius of 7000 Blender Units (BU)**. Below is the process for adding and scaling the Sun sphere model.

![sunModel.png](https://github.com/MissionToPsyche-Iridium/iridium_23e_year_sim-se/blob/Task236/screenshots/scaleSun.png)

---
> ⚠️ **Important:**  
> It is critical in all Blender viewports to ensure **clipping is adjusted**.  
> **Adjusting clipping in the 3D Viewport will not transfer** to any other viewports or camera perspectives.  
---

### Scale Calculation

Given:
- **1 Blender Unit (BU)** = **100 km**
- **Sun's Diameter** = 1,400,000 km  
- **Sun's Radius** = 1,400,000 / 2 = 700,000 km

Therefore, in Blender Units: 700,000 km ÷ 100 km/BU = 7000 BU

---

### Steps to Add and Scale the Sun Model

- **Add a UV Sphere**:
  1. Press `Shift + A` → **Mesh** → **UV Sphere**.
  2. In the popup (bottom-left corner), adjust the **segments** and **rings** if needed.

- **Open the Transform Menu**:
  1. Press the `N` key to bring up the **Transform Menu**.
  2. In the **Item tab**, locate the **Dimensions** section.

- **Set the Radius**:
  1. Under **Scale** or **Dimensions**, enter **7000 BU** (representing 700,000 km radius).
  2. Ensure that the **scale is applied uniformly** (same value for X, Y, Z).



### A subdivision modifier was applied to smooth out the geometry of the sphere  

- **Select the Sun Sphere** in **Object Mode**.
- Go to the **Modifier Properties** tab (wrench icon).
- Click **Add Modifier** → **Subdivision Surface**.
- Adjust the settings:
  - **Levels Viewport**: Set to **2**.
  - **Levels Render**: Set to **2**.
  - **Optimal Display**: **Check** this option to reduce the wireframe density.
- Click **Apply** to finalize the modifier (optional if you don't need further edits).


### Then the image texture was applied in the Shading Editor

- **Select the Sun Sphere** in **Object Mode**.
- Go to the **Material Properties** tab (sphere icon) and click **New**.
- **Name the Material** (optional, e.g., "Sun_Material").
- In the **Shader Editor**:
  1. Press `Shift + A` → **Texture** → **Image Texture`.
  2. Click **Open** and select your **Sun texture** image file.
  3. **Connect** the **Color output** of the Image Texture node to the **Base Color input** of the **Principled BSDF shader**.
- Switch to **Material Preview Mode** (sphere icon in the top-right of the 3D Viewport) to confirm the texture is applied correctly.
---

## The model is exported as a .glb file. Most of the default export settings were unchanged. Added export options were:
- **Data > Mesh**:
  - **Apply Modifiers**: Ensures any subdivision or other modifiers are baked into the final mesh.
  - **UVs**: Exports the UV maps to preserve texture mapping.
  - **Normals**: Ensures proper shading and lighting calculations by including normal data.


## Bloom and Emission Effects were Added in Three.js with the functions:

### Bloom and Emission Effects in Three.js

### **Bloom Effect Implementation**

The **bloom effect** was added using the `UnrealBloomPass` from Three.js. This effect simulates a glowing appearance by amplifying bright areas, particularly enhancing the Sun's emissive properties.

```
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  1.5, // Strength of bloom
  0.4, // Radius
  0.85 // Threshold
);
composer.addPass(bloomPass);

```
The EffectComposer is used to handle post-processing effects like bloom. The bloom pass was configured with:

* Strength: Controls how intense the glow appears.
* Radius: Adjusts how far the glow extends from bright areas.
* Threshold: Sets the brightness level above which the bloom effect is applied.  

### **Emission Effect Function**
To complement the bloom, an emissive material was applied to the Sun. This gives the impression that the Sun emits light. The following code identifies the Sun mesh from the GLB model and applies an emissive material to it.
```
// ensure a reference to the sun mesh is created for use later
let sunMesh = null;

// Load GLB Model
const loader = new GLTFLoader();
loader.load(
  '/ImgTextureSun.glb',
  (gltf) => {
    const model = gltf.scene;
    console.log('Loaded model:', model);

    // Find and store the Sun mesh
    model.traverse((child) => {
      if (child.isMesh && child.name.toLowerCase().includes('sun')) {
        sunMesh = child; // Store the Sun mesh for later reference
        child.material = new THREE.MeshStandardMaterial({
          emissive: new THREE.Color(0xffffcc), // Soft yellow-white emission
          emissiveIntensity: 1.5, // Initial intensity
          map: child.material.map, // Use the original texture if available
          roughness: 0.5,
        });
      }
    });

    scene.add(model);
  },
  undefined,
  (error) => {
    console.error('Error loading model:', error);
  }
);
```


