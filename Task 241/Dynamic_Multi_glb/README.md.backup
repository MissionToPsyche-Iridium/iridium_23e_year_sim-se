## Sprint 2 Task 241: Scale Solar System in Blender
Feasibility of this task was determined to be low. Even at a deeply scaled values, the planet size and distance were much too large to be efficient or effective.     

This task did, however, highlight the alternative option of dynamically loading multiple glb files in a single three.js scene. The idea of loading a single sun.glb, loading a single planet (and pre-loading adjacent planets), and "cycling through" each planet in the solar system on demand is worth exploring during Sprint 3.   

Potential implementation would include dynamically scaling the loaded sun model to the current planet to give the perception of distance, while minimizing the actual grid distance of objects in the scene.  
 
---
## Planet Modeling Guide
### Setting Units:   
Default units in blender appear to be in meters. Model units can be modified by:  
* Go to the Properties panel (right side, bottom tabs).
* Go to the Scene Properties tab (it looks like a cone and sphere icon).
* Scroll down to the Units section.
* Set the following:
	- Unit System: Metric
	- Length: Kilometers:  
	- Unit Scale: 0.001 (sets each blender unit equal to 1km)
	

## Blender Workflow for Creating a Planet Model

## 1. Setting Units
Blender’s default units are in meters, but you can modify them to use kilometers:

1. Open the **Properties panel** (right side, bottom tabs).
2. Go to the **Scene Properties** tab (cone and sphere icon).
3. Scroll to the **Units** section and set:
   - **Unit System:** Metric  
   - **Length:** Kilometers  
   - **Unit Scale:** 0.001 (This sets **1 Blender unit = 1 kilometer**)

---

## 2. Adjusting Clipping for Large Objects in Blender

### 2.1 Adjust 3D Viewport Clipping (For Modeling in Blender)
1. Press **`N`** to open the side panel.
2. Go to the **View** tab.
3. Under **Clipping**, set:
   - **Clip Start:** 1.0 (or 0.1 if you need to see closer objects).
   - **Clip End:** 1,000,000 (or more, depending on your scene’s size).

**Explanation:**  
These settings control what you can see while working in the **3D viewport**. If objects disappear at large distances, increase the **Clip End** value.

---

### 2.2 Adjust Camera Clipping (For Renders in Blender)
1. **Select the camera** (or add one: `Shift + A` → Camera).
2. Go to the **Camera Properties** tab (camera icon).
3. Under **Clipping**, set:
   - **Clip Start:** 1.0  
   - **Clip End:** 1,000,000 (or more, as needed).

**Note:**  
This setting affects only **camera renders** from Blender. If you're using three.js for web rendering, Blender's camera clipping won’t matter.

**Note 2:**  
If you zoom in on an object and it disappears or cannot be seen, you may need to **lower the Clip Start** to `0.001` or more. The opposite is true for zooming out: you may need to **increase the Clip Start** to `1.0` and ensure the **Clip End** is large enough to cover the distance from `(0, 0, 0)` to the object. If the Clip End is smaller than the distance to your object, it will not be visible.

---

### 2.3 Set Camera Clipping in Three.js (For Web Usage)
When controlling the camera in three.js, set appropriate clipping values to ensure distant planets render correctly.

```javascript
const camera = new THREE.PerspectiveCamera(
    75, // Field of view
    window.innerWidth / window.innerHeight, // Aspect ratio
    0.1, // Near clipping plane
    1000000 // Far clipping plane (1 million units)
);
camera.position.set(0, 0, 500); // Example position
```
## 3. Create a Planet Mesh
1. **Add a Sphere:**  
   - In the 3D Viewport, press `Shift + A` → Mesh → UV Sphere.
2. **Adjust Sphere Properties:**  
   - In the popup menu (lower left), set:
     - **Segments:** 32  
     - **Rings:** 16  
3. **Scale the Sphere:**  
   - Select the sphere and press `S`.
   - Enter the **planet's radius** in kilometers (since Blender uses diameter, divide by 2).
     - Example: For Earth’s radius of 6,371 km, enter `6.371`.

**Note on Segments and Shade Smooth:**
- **Segments and rings cannot be modified once object creation is complete.**
- **Adding Segments**:  
  - Increases the number of **polygons**, making the sphere geometrically smoother.  
  - Best for **close-up objects** that need high detail.  
  - **Trade-off**: Higher polygon count can reduce performance.

- **Using Shade Smooth**:  
  - Smooths the **appearance** of the sphere without adding extra geometry.  
  - Ideal for **distant objects** or when optimizing performance.  
  - **Trade-off**: Blockiness may still appear on sharp edges or close-up views.

---

## 4. Apply Materials and Texture
1. Go to the **Material Properties** tab (circle icon).
2. Click **New** to create a new material.
3. In the **Shader Editor**:
   - Use a **Principled BSDF** shader.
   - Load a **planet texture** (albedo map) into the **Base Color** input.
   - **Optional:** Add a **Normal Map** for surface detail.
     - Connect the Normal Map node to the **Normal** input of the BSDF.

---

## 5. Set Smooth Shading
1. Select the sphere.
2. Right-click and choose **Shade Smooth**.
3. In the **Object Data Properties** (green triangle icon):
   - Under **Normals**, enable **Auto Smooth** (set the angle to 30°).

---

## 6. Add Rotation (Optional)
1. Select the sphere and press `R` to rotate.
2. **Add Keyframes:**
   - Go to **Frame 1**, press `I`, and select **Rotation**.
   - Move to a later frame (e.g., 250), rotate the sphere, press `I` again, and select **Rotation** to keyframe the new rotation.

---

## 7. Export to GLB
1. Go to **File** → **Export** → **glTF 2.0 (.glb)**.
2. In the **Export Settings**:
   - Check **Apply Modifiers**.
   - Choose **GLB Binary (.glb)**.
   - Enable **Include Normals** and **UVs**.
   - Check **Selected Objects** if only exporting the planet.
