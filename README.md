# Year on Psyche

Unveiling the Mysteries of Asteroid 16 Psyche and The Cosmic Discoveries Ahead Through An Immersive Experience

---

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Running the Project](#running-the-project)
4. [Build Process](#build-process)
5. [Project Structure](#project-structure)
6. [Adding/Changing Content](#addingchanging-content)


---

## Introduction

This project is a web-based interactive application designed to educate and engage the general public on the scientific and historical significance of 16 Psyche, an asteroid in our solar system. Developed as a team effort, the site combines informative text, interactive animations, videos, and games to deliver an immersive learning experience. Using HTML, CSS, JavaScript, and Three.js, the application visualizes how 16 Psyche fits into the broader context of the solar system, illustrating its influence on surface conditions such as day and night cycles, seasons, and temperatures, where relevant.

This collaborative team effort included research, design, and development to produce a cohesive and engaging final product aligned with the original project scope. The site also explores facts, common hypotheses, and the currently underway Mission to 16 Psyche, aimed at deepening public understanding.

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) (comes with Node.js)
  
### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/MissionToPsyche-Iridium/iridium_23e_year_sim-se.git
   cd iridium_23e_year_sim-se
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Running the Project

For **development**:

1. Start the development server:
   ```bash
   npm run dev
   ```
   The project will be available at `http://localhost:3000` (default Vite server).

For **production**:

1. Build the project:
   ```bash
   npm run build
   ```
   This will output a production-ready build in the `dist/` directory.

2. Preview the production build:
   ```bash
   npm run preview
   ```
   This will start a local server to preview the production build.

---

## Build Process

This project uses Vite to manage the build process. Here are the key scripts:

- `npm run dev`: Starts the development server with hot-reload.
- `npm run build`: Creates an optimized production build in the `dist/` folder.
- `npm run preview`: Launches a local server to preview the production build.

### Vite Configuration

The Vite config file is located at `vite.config.js`. You can adjust the build settings, such as output directories, plugin configurations, and more.

---

## Project Structure

Here's an overview of the folder structure:

```
├── public/
│   └── PsycheJR/             # JavaScript/HTML files for the mobile experience
│   └── balance/              # Balance game HTML, JS, and assets
│   └── css/                  # Global stylesheets
│   └── escapeVelocity/       # Escape Velocity game files
│   └── games/                # Temperature game files
│   └── img/                  # Image assets
│   └── psycheName/           # Name origin interactive experience
│   └── refsViewport/         # Reference section content and interactions
│   └── res/                  # Shared resources (icons, fonts, 3D models)
│   └── spacepic/             # Space picture viewer files
│   └── website/              # Psyche Mission website (static pages)
│   └── year/                 # Year on Psyche (Cosmic Comparison)
├── src/
│   └── landing/              # Three.js scene setup and related modules
│   └── imports.js            # Path imports for Vite bundling
├── index.html                # Root entry point that loads the app (desktop)
├── vite.config.js            # Configuration file for Vite build tooling
├── .gitignore                # Files/folders to be excluded from Git
├── README.md                 # Project overview and documentation
├── package-lock.json         # Exact versions of installed dependencies
├── package.json              # Project metadata and dependency declarations


```

---

## Adding/Changing Content

### Replacing 3D Models or Assets

1. Add your new assets (3D models, textures, etc.) into the `Public/res/models/` directory.

### Updating Mobile HTML Content

For the mobile-friendly version, the `PsycheJR/` folder contains the content for smaller screens. If you'd like to update the content for mobile, modify these HTML files.

---
