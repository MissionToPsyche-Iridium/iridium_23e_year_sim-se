const loadingScreen = document.createElement('div');
loadingScreen.id = 'loading-screen';
loadingScreen.innerHTML = `
  <div class="loading-content">
    <div class="space-ship"></div>
    <div class="loading-text">Loading Mission to Psyche...</div>
    <div class="loading-progress"></div>
  </div>
`;

document.body.appendChild(loadingScreen);

// Add CSS styles
const styles = document.createElement('style');
styles.textContent = `
  @font-face {
    font-family: 'Nasa';
    src: url('https://raw.githubusercontent.com/nasaworldwind/worldwindjs/develop/examples/fonts/Nasa.ttf') format('truetype');
  }

  #loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('images/main_images/nasatakeoff.gif') no-repeat center center fixed;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .loading-content {
    text-align: center;
  }

  .space-ship {
    width: 100px;
    height: 100px;
    // background: url('path/to/spaceship.png') no-repeat center;
    background-size: contain;
    margin: 0 auto;
    animation: float 2s ease-in-out infinite;
  }

  .loading-text {
    color: #ffffff;
    font-size: 32px;
    margin: 20px 0;
    font-family: 'Nasa', 'Arial', sans-serif;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    letter-spacing: 2px;
    font-weight: bold;
  }

  .loading-progress {
    width: 300px;
    height: 8px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .loading-progress::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, #00ff9d, #00ffcc);
    animation: progress 5s linear forwards;
    box-shadow: 0 0 10px rgba(0, 255, 157, 0.5);
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  @keyframes progress {
    0% { width: 0%; }
    100% { width: 100%; }
  }
`;

document.head.appendChild(styles);

// Remove loading screen after 5 seconds
setTimeout(() => {
  loadingScreen.style.opacity = '0';
  loadingScreen.style.transition = 'opacity 0.5s ease';
  setTimeout(() => {
    loadingScreen.remove();
  }, 500);
}, 5000);
