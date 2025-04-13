/*
 * File: section0.js
 * Purpose: Loads and initializes the "References" section within the Three.js scene.
 * Author(s): 
 * Date: 20 FEB 2025
 * Version: 1.0
 *
 * Description:
 * This script sets up the "References" section, adding title text, interactive menu items,
 * and a badge element. It utilizes utility functions for creating text meshes, menus, and loading assets.
 *
 * Functions:
 * - loadSection0(): Initializes the "References" section with text, menu, and badge.
 */

import { createTextMesh, createMenu } from './utils.js';
import { showRefsViewport, loadRefContent } from './../../public/refsViewport/referencesViewport.js';

export function loadSection0(scene, camera, sections) {
  return new Promise(resolve => {
    const refCoords = sections[0]?.position;

    const textMeshPosition = {
      x: refCoords.x - 12,
      y: refCoords.y + 6, 
      z: refCoords.z - 13
    }
    console.log("TMP", textMeshPosition);

    const mainTextRotation = { x: 0, y: 0.1, z: 0 };

    createTextMesh("REFERENCES", 
      textMeshPosition, 
      mainTextRotation, 
      1, // size
      scene, // scene
      0.02, // bevel size
      '#FFA500', // color
      0.07,  //depth
      0.03); // bevel thickness

    const menuItems = [
      { text: "Disclaimer", onClick: () => loadRefContent("./../../public/refsViewport/disclaimer.html") },
      { text: "Dev & Contributors", onClick: () => loadRefContent("./../../public/refsViewport/dev.html") },
      { text: "Acknowledgments", onClick: () => loadRefContent("ifra./../../public/refsViewport/thanks.html") },
      { text: "Licensing", onClick: () => loadRefContent("./../../public/refsViewport/license.html") },
      { text: "Third-Party Assets", onClick: () => loadRefContent("./../../public/refsViewport/assets.html") },
      { text: "Technical References", onClick: () => loadRefContent("./../../public/refsViewport/technical.html") },
      { text: "Contact / Support", onClick: () => loadRefContent("./../../public/refsViewport/contact.html") },
    ];
      
    createMenu(menuItems, textMeshPosition, mainTextRotation, scene);

    resolve(); 
  });
}

