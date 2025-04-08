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
