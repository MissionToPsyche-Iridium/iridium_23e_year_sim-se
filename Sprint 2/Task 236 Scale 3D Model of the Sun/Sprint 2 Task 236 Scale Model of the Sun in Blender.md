# Sprint 2, Task 236: Scale Model of the Sun in Blender

## Overview
This task involved building a **scaled 3D model of the Sun** in Blender, along with planets and objects like the **International Space Station (ISS)** for reference. Animations were added to depict the **Sun’s rotation** and the **orbits** of Mercury, Venus, and Earth.

---

## Model Specifications
- **Diameter of the Sun**: Approx. **865,000 miles** / **1.4 million kilometers**  
- **Scaled Sun in Blender**:  
  - **Blender Unit (BU)**: 1 BU = **100 kilometers**  
  - **Scaled Sun Diameter**: **14,000 BU**

- **International Space Station (ISS)**: Approx. **109 meters** end to end  
  - **Scaled ISS**: **0.00109 BU**

---

## Blender Scene Setup
1. **Unit System**: Metric  
2. **Length Units**: Kilometers  
3. **Scene Scale**: 0.01 (1 BU = 100 km)

---

## Animation Details
- **Sun Rotation**:  
  - One full rotation every **25 days**.

- **Planetary Orbits**:
  - **Earth**: Orbits the Sun every **365 days**.
  - **Mercury**: Orbits the Sun every **88 days**.
  - **Venus**: Orbits the Sun every **225 days**.

- **Earth Rotation**:  
  - Rotational speed at the equator: **1,600 kilometers per hour**.

---

## Free-Roaming Camera Configuration
To allow the user to explore the scene in a **web browser**, **OrbitControls** were added to the camera. This enables users to **rotate, pan, and zoom** freely.

---

## Textures and Materials
- **Sun Shader**:
  - **Emission Shader** with a strength of **6.3** to simulate the Sun’s glow.
  - **Noise Texture** and **Color Ramp** nodes for a dynamic, fiery surface.

- **Bloom Effect**:
  - Configured using Blender’s **Eevee render engine**.
  - **Note**: Bloom doesn’t export with GLB files, so the emission effect simulates it.

---

## Export Configuration (GLB)
- **Format**: GLB (Binary)
- **Apply Transforms**: Checked
- **Apply Modifiers**: Checked  
- **Materials and Textures**: Embedded  
- **Animations**: Enabled (Always Sample Animations)


## YouTube Link:  
https://youtu.be/AJoUNhl3rD4