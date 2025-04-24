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

import { createTextMesh, createMenu, resolvePath, triggerButton3D } from '../utils/utils.js';
import { loadRefContent } from '../ui/referencesViewport.js';

export function loadSection0(scene, camera, sections) {
  return new Promise(resolve => {
    const refCoords = sections[0]?.position;

    const textMeshPosition = {
      x: refCoords.x - 12,
      y: refCoords.y + 6, 
      z: refCoords.z - 13
    }

    const menuButtonPos = {
      x: refCoords.x - 3,
      y: refCoords.y + 6, 
      z: refCoords.z - 13
    }
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
        { text: "Disclaimer", onClick: () => loadRefContent(resolvePath("refsViewport/disclaimer.html")) },
        { text: "Dev & Contributors", onClick: () => loadRefContent(resolvePath("refsViewport/dev.html")) },
        { text: "Acknowledgments", onClick: () => loadRefContent(resolvePath("refsViewport/thanks.html")) },
        { text: "Licensing", onClick: () => loadRefContent(resolvePath("refsViewport/license.html")) },
        { text: "Third Party Assets", onClick: () => loadRefContent(resolvePath("refsViewport/assets.html")) },
        { text: "Technical References", onClick: () => loadRefContent(resolvePath("refsViewport/technical.html")) },
        { text: "Contact / Support", onClick: () => loadRefContent(resolvePath("refsViewport/contact.html")) },
      ];
      
    // createMenu(menuItems, textMeshPosition, mainTextRotation, scene);

      // menuItems.forEach()
      // triggerButton3D(menuItems[0].text, textMeshPosition, mainTextRotation, 0.5, scene, menuItems[0].onClick);
      menuItems.forEach((item, index) => {
        const menuPosition = {
          x: menuButtonPos.x,
          y: menuButtonPos.y - index * 1.2 - 1.25,
          z: menuButtonPos.z
        };
      
        triggerButton3D(item.text, menuPosition, mainTextRotation, 0.5, scene, item.onClick, "right");
      });
      
    resolve(); 
  });
}

