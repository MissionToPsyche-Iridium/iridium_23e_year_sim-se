const axios = require('axios');

// Base URL of the website (using the actual port from the serve output)
const baseUrl = 'http://localhost:49347';
// Set to keep track of broken links
const brokenLinks = [];
// Set to keep track of successful links
const successfulLinks = [];

// List of paths to check
const pathsToCheck = [
  '/',
  '/assets/index-rgFOEOuc.css',
  '/assets/index-Cb_n608q.js',
  '/assets/psyche_badge-DgbJMAPd-DgbJMAPd.svg',
  '/assets/viewportspacepic-vBhYZtMZ-CaoZ_fz_.js',
  '/balance/balance',
  '/balance/balance.css',
  '/balance/balance.js',
  '/escapeVelocity/escape-velocity',
  '/games/games',
  '/games/balanceViewport.js',
  '/games/gamesViewport.js',
  '/games/temperature-game.js',
  '/games/viewportescapevelocity.js',
  '/games/viewportspacepic.js',
  '/games/viewporttemperaturegame.js',
  '/games/tempgame/index.html',
  '/img/Earth.jpg',
  '/img/psyche.jpg',
  '/img/asteroid.png',
  '/img/balance-preview.png',
  '/img/black_gear.png',
  '/img/calendar.jpeg',
  '/img/EarthTransparent.png',
  '/img/eat.jpg',
  '/img/psyche.svg',
  '/img/PsycheTransparent.png',
  '/img/relax.jpeg',
  '/img/school.jpeg',
  '/img/sleep.jpeg',
  '/img/work.jpeg',
  '/name/psycheName.js',
  '/PsycheJR/index2.html',
  '/PsycheJR/kids.html',
  '/PsycheJR/location2.html',
  '/PsycheJR/name.html',
  '/PsycheJR/surface2.html',
  '/PsycheJR/year.html',
  '/PsycheJR/CSS/index2.css',
  '/PsycheJR/CSS/kids.css',
  '/PsycheJR/CSS/location2.css',
  '/PsycheJR/CSS/psycheName.css',
  '/PsycheJR/CSS/surface2.css',
  '/PsycheJR/CSS/yearPage.css',
  '/PsycheJR/img/asteroid.png',
  '/PsycheJR/img/psychelogo.svg',
  '/PsycheJR/img/star-background.jpg',
  '/PsycheJR/img/psyche_surface2.svg',
  '/PsycheJR/JS/index2.js',
  '/PsycheJR/JS/kids.js',
  '/PsycheJR/JS/location.js',
  '/PsycheJR/JS/surface2.js',
  '/PsycheJR/JS/typewriter.js',
  '/PsycheJR/models/psyche_new.glb',
  '/psycheName/public/name/psycheName.html',
  '/psycheName/public/name/psycheName.css',
  '/psycheName/public/name/psycheName.js',
  '/res/font/GenosThin_Regular.json',
  '/res/font/Roboto_Regular.json',
  '/res/models/nasaLogo.glb',
  '/res/models/arcade_controller.glb',
  '/res/models/navigation_pin.glb',
  '/res/models/psyche_new.glb',
  '/res/shaders/textVertexShader.glsl',
  '/res/shaders/textFragmentShader.glsl',
  '/res/textures/8k_stars_milky_way.jpg',
  '/spacepic/photo.html',
  '/website/balance.html',
  '/website/charts.html',
  '/website/escape-velocity.html',
  '/website/index.html',
  '/website/metrics-dashboard.html',
  '/website/model-page.html',
  '/website/photo.html',
  '/website/timeline.html',
  '/website/css/favicon.ico',
  '/year/year.html',
  '/year/yearPage.css',
  '/year/yearviewport.js',
  // Add public/website paths to check
  '/public/website',
  '/public/website/index.html',
  '/public/css/style.min.css',
  '/public/css/index.css',
  '/public/css/styles.css',
  '/public/css/frontend.min.css',
  '/public/css/flatpickr.min.css',
  '/public/css/select2.min.css',
  '/public/css/main.css',
  '/public/js/jquery-3.5.1.min.js',
  '/public/js/flatpickr.min.js',
  '/public/js/select2.min.js',
  '/public/js/head.min.js',
  '/public/images/psyche.svg',
  '/public/images/facebook.svg',
  '/public/images/twitter.svg',
  '/public/images/instagram.svg',
  '/public/images/youtube.svg',
  '/public/models/Psyche.glb',
  '/public/js/temperature-game',
  '/public/js/temperature-game.js',
  '/public/css/model-page.css',
  '/public/css/timeline.css',
  '/public/model-page',
  '/public/model-page.html',
  '/public/timeline',
  '/public/timeline.html'
];

// Function to check a URL
async function checkUrl(path) {
  const urlToCheck = baseUrl + path;
  console.log(`Checking: ${urlToCheck}`);

  try {
    // Make HTTP request
    const response = await axios.get(urlToCheck, {
      maxRedirects: 5,
      validateStatus: function (status) {
        return status < 500; // Accept all status codes less than 500
      },
      timeout: 5000 // 5 second timeout
    });

    // Check for 404 or other error status codes
    if (response.status >= 400) {
      brokenLinks.push({ url: urlToCheck, status: response.status });
      console.log(`  ❌ Status: ${response.status}`);
    } else {
      successfulLinks.push({ url: urlToCheck, status: response.status });
      console.log(`  ✅ Status: ${response.status}`);
    }
  } catch (error) {
    brokenLinks.push({ url: urlToCheck, error: error.message });
    console.log(`  ❌ Error: ${error.message}`);
  }
}

// Main function
async function main() {
  console.log('Starting link checker...');
  console.log(`Base URL: ${baseUrl}`);
  console.log(`Total URLs to check: ${pathsToCheck.length}`);
  console.log('-----------------------------------');

  // Check each URL
  for (const path of pathsToCheck) {
    await checkUrl(path);
  }

  // Print results
  console.log('\n--- SUMMARY ---');
  console.log(`Total URLs checked: ${pathsToCheck.length}`);
  console.log(`Successful: ${successfulLinks.length}`);
  console.log(`Broken: ${brokenLinks.length}`);
  
  if (brokenLinks.length > 0) {
    console.log('\n--- BROKEN LINKS ---');
    brokenLinks.forEach((link, index) => {
      console.log(`${index + 1}. ${link.url}`);
      if (link.status) {
        console.log(`   Status: ${link.status}`);
      } else if (link.error) {
        console.log(`   Error: ${link.error}`);
      }
    });
  } else {
    console.log('\n✅ No broken links found. All links are working!');
  }
}

// Run the main function
main().catch(error => {
  console.error('An error occurred:', error);
});