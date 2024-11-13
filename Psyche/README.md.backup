# Implementing a Loading Screen with Progress Bar in a Three.js Project

This guide provides a universal approach to implementing a loading screen with a rotating image and progress bar for different project structures in Three.js. The CSS, HTML, and image assets are consistent across implementations, while the JavaScript may vary slightly depending on the project setup.

## 1. HTML Structure

Add the following HTML structure for the loading screen to your main HTML file. This `<div>` structure should go inside your main `<body>` but outside any containers for your Three.js content to ensure it overlays the entire viewport.


```
<div id="loadingScreen" class="wrapper">
  <div class="image-container">
    <img src="/src/assets/images/main_images/Psyche_BadgeSolid_Color-PNG.png" alt="Rotating Image" class="rotating-image">
  </div>
  <div class="progress-bar-container">
    <div class="progress-bar" id="progress-bar"></div>
  </div>
</div>
```

The id="loadingScreen" and id="progress-bar" elements are essential for controlling the loading screen visibility and updating the progress bar.

## 2. CSS Styles

Add these CSS styles to your project’s main CSS file. These styles center the loading screen and animate the rotating image.


```
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Centers content vertically */
  position: fixed; /* Keeps it centered even on scroll */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent background */
  z-index: 10; /* Ensure it covers everything */
}

.image-container {
  perspective: 1000px;
  max-width: 100%;
  max-height: 80vh;
}

.rotating-image {
  width: 100%;
  height: auto;
  max-width: 200px;
  max-height: 200px;
  animation: rotateYAnimation 3s infinite linear;
  transform-style: preserve-3d;
}

@keyframes rotateYAnimation {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}

.progress-bar-container {
  width: 100%;
  height: 10px;
  background-color: #ddd;
  margin-top: 20px;
  max-width: 200px;
  border-radius: 5px;
  overflow: hidden;
}

.progress-bar {
  width: 0%;
  height: 100%;
  background: linear-gradient(to right, purple, yellow);
  border-radius: 5px;
}
```
## 3. JavaScript Integration

### Step 1: Display the Loading Screen

In your main JavaScript or `SceneBuilder.js` file, select the loading screen and progress bar elements so you can manipulate them during the loading process.

```
const loadingScreen = document.getElementById('loadingScreen');
const progressBar = document.getElementById('progress-bar');
```  
### Step 2: Update Progress During Model Loading

When loading models or assets asynchronously, update the progress bar as each asset loads. This often involves passing a progress callback to the loading function, which will update the progress bar based on how many assets have been loaded.

**Example Progress Update Function**
```function updateProgressBar(progress) {
  progressBar.style.width = `${progress}%`;
  progressBar.style.background = `linear-gradient(to right, purple, yellow ${progress}%)`;
}
```
### Step 3: Implement the Loading Logic Based on Project Structure

#### Scenario A: Loading in a Separate Loader File

If the loading logic is in a separate loader file, like `planetLoader.js`, modify it to accept an `onProgress` callback for updating the progress.

In your loader file, modify the loading function to accept an `onProgress` callback and call it with the current progress percentage after each model loads.

```
export async function loadPlanets(scene, onProgress) {
  const planets = [];
  let loaded = 0;

  for (const data of planetData) {
    // Load each planet asynchronously
    const planet = await loadModel(data, scene);

    // Calculate progress
    loaded++;
    const progress = (loaded / planetData.length) * 100;

    // Call the onProgress callback to update the progress bar
    if (onProgress) onProgress(progress);

    planets.push(planet);
  }

  return planets;
}
```
In the main file (e.g., `SceneBuilder.js`), pass `updateProgressBar` as the callback when calling the loader function.

```  
loadPlanets(scene, updateProgressBar).then((planets) => {
  // Hide loading screen when loading completes
  loadingScreen.style.opacity = '0';
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 500);
});
```
#### Scenario B: Inline Loading Logic

If the loading logic is in the main file (e.g., `SceneBuilder.js`), integrate the progress update directly within the asset loading loop.

```const planets = [];
let loaded = 0;

for (const data of planetData) {
  // Load each planet and calculate progress
  const planet = await loadModel(data, scene);

  // Update progress
  loaded++;
  const progress = (loaded / planetData.length) * 100;
  updateProgressBar(progress);

  planets.push(planet);
}

// Hide the loading screen after loading completes
loadingScreen.style.opacity = '0';
setTimeout(() => {
  loadingScreen.style.display = 'none';
}, 500);
```
### Step 4: Fade Out the Loading Screen After Loading Completes

After all assets are loaded, hide the loading screen.
```
loadingScreen.style.opacity = '0';
setTimeout(() => {
  loadingScreen.style.display = 'none';
}, 500); // Optional: 500ms fade-out delay
```
