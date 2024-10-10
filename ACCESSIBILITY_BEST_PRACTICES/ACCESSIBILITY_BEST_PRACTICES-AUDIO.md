# Best practices for audio descriptions of 3D models  
### Year On Psyche Team   
## SER401 FALL 2024 
***

This document outlines the best practices for implementing audio descriptions for the 3D model being developed in Blender and posted on the website using Three.js. These guidelines ensure that the model complies with accessibility standards and is usable by people with visual impairments or other disabilities.

---

## 1. Provide Clear and Concise Descriptions
- Focus descriptions on the most important elements of the 3D model, such as shape, color, texture, size, and purpose.
- Avoid overwhelming the user with excessive details. Prioritize information that is essential for understanding the model.
- **Example**: "The sculpture stands on a square platform, with the figure's arm extended outward holding a torch."

## 2. Use Spatial and Orientation Cues
- Clearly describe the spatial relationships and positioning of objects in the model.
- Help users visualize the orientation of objects, mentioning whether they face forward, backward, are at an angle, or aligned with other objects.
- **Example**: "The main structure is located in the center, with smaller objects arranged symmetrically on either side."

## 3. Incorporate Interaction and Navigation Information
- Provide descriptions that inform users how they can interact with or manipulate the model (e.g., rotate, zoom, or explore specific parts).
- Describe what changes as the user navigates the model, giving perspective on how the view changes.
- **Example**: "As you rotate the model to the left, the backside of the statue reveals intricate carvings not visible from the front."

## 4. Support Different Levels of Detail
- Offer multiple layers of detail in the descriptions. Start with a high-level overview of the model and allow users to access more detailed descriptions of specific components if desired.
- Implement optional detailed descriptions, so users can choose when they want to hear additional information about specific parts of the model.
- **Example**: "For a detailed description of the dragon's scales, press the 'details' button."

## 5. Ensure Compatibility with Assistive Technology
- Ensure audio descriptions are compatible with screen readers and other assistive technologies.
- Provide text-based alternatives alongside audio descriptions to accommodate users who prefer text or cannot access audio.
- **Example**: Descriptions can be stored as metadata or linked to interactive points in the model.

## 6. Describe Movement and Animation
- If the model contains any animated elements or moving parts, provide real-time audio descriptions synchronized with those movements.
- Include descriptions of how the model changes or transforms over time if applicable.
- **Example**: "As the engine part rotates, the inner mechanisms become visible, revealing the gears in motion."

## 7. Consistency in Terminology
- Use consistent and familiar terminology throughout the descriptions.
- If technical terms are necessary, define them at the start and keep them uniform across all descriptions.
- **Example**: "The 'ridges' refer to the raised lines running along the surface of the object."

## 8. Add Audio Cues for Interactivity
- Provide users with audio cues that indicate interactive features within the model, such as clickable or draggable elements.
- **Example**: "Click on the door to open it and explore the inside of the building."

## 9. Test with Real Users
- Ensure the descriptions are tested with individuals who use assistive technologies to validate their clarity and effectiveness.
- Collect feedback from visually impaired users to ensure the descriptions provide value and are easy to follow.
- Make iterations based on feedback to improve accessibility and usability.

## 10. Sonification (Optional)
- Consider adding subtle sound effects (sonification) to complement the descriptions where appropriate.
- **Example**: A metallic "clink" sound when describing the interaction with a metal object, or a “swoosh” when an element moves quickly.

## 11. Provide Synchronized Descriptions for Real-Time Interaction
- If users can interact with the model in real-time, ensure the audio descriptions adjust dynamically to user interactions, such as rotating or zooming.
- Descriptions should trigger at the appropriate time, ensuring that users receive relevant information about what they are currently viewing or interacting with.
- **Example**: "You have zoomed in on the left wing, where the intricate feather patterns are now visible."

---

## Accessibility Standards

- **WCAG 2.1**: Audio descriptions should adhere to **WCAG 2.1 (Web Content Accessibility Guidelines)**, particularly guidelines related to multimedia and non-text content.
- **Section 508**: For U.S.-based projects, comply with **Section 508**, which mandates that all digital content be accessible to individuals with disabilities.

---

## Technical Considerations

- **Blender**: Ensure that the model is structured logically within Blender, grouping objects and components in a way that facilitates clear and efficient audio descriptions. Organize parts of the model in layers that correspond to different aspects of the descriptions.
- **Three.js**: When integrating the 3D model into the website using **Three.js**, make sure the audio descriptions can be triggered by interactive events such as zoom, rotation, or user interaction with specific model components. Use event handling in Three.js to sync the appropriate audio descriptions with user actions.

---

By following these best practices, the 3D model will be accessible and compliant with relevant accessibility standards, ensuring that all users, including those with disabilities, can fully engage with and understand the content.