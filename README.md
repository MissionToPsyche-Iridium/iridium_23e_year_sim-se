# Iridium 23e Year Simulation

## GitHub Pages Deployment

This project is configured for easy deployment to GitHub Pages from the dist directory.

### Deployment Options

#### Option 1: Automatic Deployment with GitHub Actions
The project includes a GitHub Actions workflow that automatically builds and deploys the site when you push to the merge2-Armandov3 branch:

1. Push your changes to the merge2-Armandov3 branch
2. GitHub Actions will automatically build the site and deploy the dist directory to the same branch
3. Your site will be available at `https://missiontopsyche-iridium.github.io/iridium_23e_year_sim-se/`

#### Option 2: Manual Deployment
You can also deploy manually using the npm scripts:

1. Install the required dependencies:
   ```
   npm install
   ```

2. Deploy to GitHub Pages (this will deploy the dist directory to the merge2-Armandov3 branch):
   ```
   npm run deploy
   ```

### Local Development

1. Start the development server:
   ```
   npm run dev
   ```

2. Build the project locally:
   ```
   npm run build
   ```

3. Clean build artifacts:
   ```
   npm run clean
   ```

### Testing with serve and test-links.js

The project includes a link testing utility that works with the `serve` package to verify that all website resources are loading correctly.

1. Start the server using the serve package:
  ```
  npx serve dist
  ```
  Note the port number in the output (e.g., `http://localhost:49347`).

2. Update the port number in the `test-links.js` file:
  ```javascript
  // Base URL of the website (using the actual port from the serve output)
  const baseUrl = 'http://localhost:49347';
  ```

3. Run the link testing script:
  ```
  node test-links.js
  ```

4. Review the results to identify any broken links or resources.

The `serve.json` file in the dist directory contains rewrite rules that ensure paths like `/public/website` correctly redirect to the appropriate files. If you encounter 404 errors, you may need to update the rewrite rules in `serve.json`.

## Project Structure

- `src/` - Source code
- `public/` - Static assets
- `css/` - Stylesheets
- `img/` - Images
- `res/` - Resources (fonts, models, shaders, textures)
- `dist/` - Build output directory

## Known Issues

The following items need attention:  
(Identified after ThreeScene-merge2 update to thickelbinch on 3/26/2025)

* Games section. Playing different games is broken. When opening a game, then exiting the game, the view doesn't return to game select screen. If "try games" is selected again, the last played game opens. 

* Coordinates - Adjusted coordinates cause sun to appear in disruptive locations - "explore mission" text

* 2d page content loads in vite server. fails to load in live server

* iFrames do not close when navigating away from a section.

* Some font files referenced in the website HTML are missing from the project, resulting in 404 errors for:
  - subset-RobotoMono-Light.woff2
  - subset-RobotoMono-Regular.woff2
  - subset-Helvetica-Light.woff2
  - subset-TradeGothicLTStd-BdCn20.woff2
  - subset-TradeGothicLTStd-Cn18.woff2
  These errors don't affect the website's functionality but will appear in browser console logs.
