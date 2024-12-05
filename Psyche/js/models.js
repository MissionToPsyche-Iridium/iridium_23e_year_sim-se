import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('containerOne');
    if (!container) {
        console.error("Container element with ID 'containerOne' not found.");
        return;
    }

    // Calculate initial menu dimensions based on screen size
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const menuWidth = Math.min(screenWidth * 0.25, 350); // 25% of screen width up to 350px max

    // Adjust container to make room for menu
    container.style.marginLeft = `${menuWidth}px`;
    container.style.width = `calc(100% - ${menuWidth}px)`;

    // Create side menu overlay with updated styling
    const sideMenu = document.createElement('div');
    sideMenu.style.position = 'fixed';
    sideMenu.style.left = '0';
    sideMenu.style.top = '0';
    sideMenu.style.width = `${menuWidth}px`;
    sideMenu.style.height = '100vh';
    sideMenu.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    sideMenu.style.backdropFilter = 'blur(20px)';
    sideMenu.style.padding = '20px';
    sideMenu.style.boxSizing = 'border-box';
    sideMenu.style.zIndex = '1500';
    sideMenu.style.boxShadow = '0 0 40px rgba(255, 255, 255, 0.15)';
    sideMenu.style.borderRight = '2px solid rgba(255, 255, 255, 0.1)';
    sideMenu.style.transform = 'translateX(0)';
    sideMenu.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    sideMenu.style.display = 'flex';
    sideMenu.style.flexDirection = 'column';
    sideMenu.style.justifyContent = 'flex-start';
    sideMenu.style.alignItems = 'stretch';

    // Create sticky header with CSS sticky positioning
    const stickyHeader = document.createElement('div');
    stickyHeader.style.position = 'sticky';
    stickyHeader.style.top = '0';
    stickyHeader.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    stickyHeader.style.backdropFilter = 'blur(10px)';
    stickyHeader.style.padding = '10px 20px';
    stickyHeader.style.marginBottom = '10px';
    stickyHeader.style.marginLeft = '-20px';
    stickyHeader.style.marginRight = '-20px';
    stickyHeader.style.marginTop = '-20px';
    stickyHeader.style.borderBottom = '2px solid rgba(255, 255, 255, 0.1)';
    stickyHeader.style.zIndex = '1600';
    stickyHeader.style.transition = 'all 0.3s ease';
    stickyHeader.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';

    // Add menu title with enhanced mobile-friendly styling to sticky header
    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Year On Psyche Simulation';
    menuTitle.style.color = 'white';
    menuTitle.style.margin = '0';
    menuTitle.style.fontSize = `${Math.min(20, screenWidth * 0.018)}px`; // Slightly smaller for mobile
    menuTitle.style.fontWeight = '700';
    menuTitle.style.textTransform = 'uppercase';
    menuTitle.style.letterSpacing = '1px';
    menuTitle.style.textAlign = 'center';
    menuTitle.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.3)';
    menuTitle.style.padding = '10px 0';
    menuTitle.style.whiteSpace = 'nowrap';
    menuTitle.style.overflow = 'hidden';
    menuTitle.style.textOverflow = 'ellipsis';

    // Add enhanced smooth scroll behavior
    let lastScrollTop = 0;
    let scrollTimeout;
    const scrollThreshold = 50; // Threshold for scroll direction change
    const scrollDuration = 500; // Duration of smooth scroll in ms

    const smoothScroll = (target, duration) => {
        const start = sideMenu.scrollTop;
        const distance = target - start;
        let startTime = null;

        const animation = currentTime => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            // Easing function for smoother animation
            const ease = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            
            sideMenu.scrollTop = start + distance * ease(progress);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    };

    // Enhanced scroll behavior with momentum and direction detection
    sideMenu.addEventListener('scroll', () => {
        const scrollTop = sideMenu.scrollTop;
        const scrollDelta = scrollTop - lastScrollTop;
        
        // Update header appearance based on scroll
        if (scrollTop > 0) {
            stickyHeader.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
            stickyHeader.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        } else {
            stickyHeader.style.boxShadow = 'none';
            stickyHeader.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        }

        // Detect rapid direction changes
        if (Math.abs(scrollDelta) > scrollThreshold) {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                // Snap to nearest menu item when rapid scrolling stops
                const menuItems = Array.from(menuContent.children);
                const closestItem = menuItems.reduce((closest, item) => {
                    const itemTop = item.offsetTop;
                    const distance = Math.abs(itemTop - scrollTop);
                    return distance < Math.abs(closest.offsetTop - scrollTop) ? item : closest;
                });
                
                smoothScroll(closestItem.offsetTop, scrollDuration);
            }, 150);
        }

        lastScrollTop = scrollTop;
    }, { passive: true });

    // Add mobile-friendly toggle button
    const toggleButton = document.createElement('button');
    toggleButton.style.position = 'fixed';
    toggleButton.style.left = `${menuWidth}px`;
    toggleButton.style.top = '10px';
    toggleButton.style.width = '44px'; // Larger touch target
    toggleButton.style.height = '44px';
    toggleButton.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    toggleButton.style.border = '1px solid rgba(255, 255, 255, 0.2)';
    toggleButton.style.borderRadius = '8px';
    toggleButton.style.color = 'white';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.zIndex = '1600';
    toggleButton.innerHTML = '☰';
    toggleButton.style.fontSize = '24px';
    toggleButton.style.transition = 'all 0.2s ease';
    toggleButton.style.padding = '0';
    toggleButton.style.display = 'flex';
    toggleButton.style.alignItems = 'center';
    toggleButton.style.justifyContent = 'center';
    toggleButton.style.WebkitTapHighlightColor = 'transparent';

    // Enhanced touch feedback
    toggleButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        toggleButton.style.transform = 'scale(0.95)';
        toggleButton.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });

    toggleButton.addEventListener('touchend', () => {
        toggleButton.style.transform = 'scale(1)';
        toggleButton.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    });

    // Mouse feedback
    toggleButton.addEventListener('mousedown', () => {
        toggleButton.style.transform = 'scale(0.95)';
        toggleButton.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });

    toggleButton.addEventListener('mouseup', () => {
        toggleButton.style.transform = 'scale(1)';
        toggleButton.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    });

    let isMenuOpen = true;
    toggleButton.addEventListener('click', () => {
        if (isMenuOpen) {
            sideMenu.style.transform = 'translateX(-100%)';
            container.style.marginLeft = '0';
            container.style.width = '100%';
            toggleButton.style.left = '10px';
            toggleButton.innerHTML = '☰';
        } else {
            sideMenu.style.transform = 'translateX(0)';
            container.style.marginLeft = `${menuWidth}px`;
            container.style.width = `calc(100% - ${menuWidth}px)`;
            toggleButton.style.left = `${menuWidth}px`;
            toggleButton.innerHTML = '×';
        }
        isMenuOpen = !isMenuOpen;
    });

    document.body.appendChild(toggleButton);

    // Create scrollable content container optimized for mobile
    const menuContent = document.createElement('div');
    menuContent.style.flex = '1';
    menuContent.style.display = 'flex';
    menuContent.style.flexDirection = 'column';
    menuContent.style.gap = '8px';
    menuContent.style.padding = '10px';
    menuContent.style.overflowY = 'auto';
    menuContent.style.WebkitOverflowScrolling = 'touch';
    menuContent.style.scrollbarWidth = 'none';
    menuContent.style.msOverflowStyle = 'none';
    menuContent.style.height = 'calc(100vh - 60px)';
    menuContent.style.scrollBehavior = 'smooth'; // Enable native smooth scrolling

    // Hide scrollbar but keep functionality
    menuContent.addEventListener('touchstart', (e) => {
        e.stopPropagation();
    }, { passive: true });

    sideMenu.appendChild(menuContent);

    // Mobile-optimized menu items
    const menuItems = [
        { 
            name: 'Sun', 
            icon: 'images/icons/sun.png',
            description: 'Explore the Sun\'s influence on Psyche'
        },
        { 
            name: 'Solar System', 
            icon: 'images/icons/solarsystem.png',
            description: 'View Psyche\'s position in our solar system'
        },
        { 
            name: 'Day/Night Cycles', 
            icon: 'images/icons/daynight.png',
            description: 'Experience Psyche\'s 4.2 hour day/night cycle'
        },
        { 
            name: 'Mission', 
            icon: 'images/icons/mission.png',
            description: 'Learn about the NASA Psyche mission'
        },
        { 
            name: 'Gravity', 
            icon: 'images/icons/gravity.png',
            description: 'Compare gravity effects between Earth and Psyche'
        },
        { 
            name: 'Mining', 
            icon: 'images/icons/pickaxe.png',
            description: 'Explore potential mining operations'
        },
        { 
            name: 'Disk', 
            icon: 'images/icons/disk.png',
            description: 'Study Psyche\'s unique disk-like features'
        },
        { 
            name: 'Equipment', 
            icon: 'images/icons/helmet.png',
            description: 'View specialized equipment for Psyche exploration'
        },
        { 
            name: 'Observation', 
            icon: 'images/icons/telescope.png',
            description: 'See how we observe Psyche from Earth'
        },
        { 
            name: 'Temperature Map', 
            icon: 'images/icons/thermometer.png',
            description: 'Visualize temperature variations across Psyche'
        }
    ];

    // Add responsive design handler
    window.addEventListener('resize', () => {
        const newScreenWidth = window.innerWidth;
        const newMenuWidth = newScreenWidth < 768 ? newScreenWidth * 0.8 : Math.min(newScreenWidth * 0.25, 350);
        
        if (isMenuOpen) {
            container.style.marginLeft = `${newMenuWidth}px`;
            container.style.width = `calc(100% - ${newMenuWidth}px)`;
            toggleButton.style.left = `${newMenuWidth}px`;
        } else {
            container.style.marginLeft = '0';
            container.style.width = '100%';
            toggleButton.style.left = '10px';
        }
        
        sideMenu.style.width = `${newMenuWidth}px`;
        menuTitle.style.fontSize = `${Math.min(20, newScreenWidth * 0.018)}px`;
        
        document.querySelectorAll('.menu-item').forEach(item => {
            item.style.padding = `${Math.min(16, newScreenWidth * 0.015)}px`;
        });
    });

    // Create mobile-optimized menu items
    menuItems.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.style.display = 'flex';
        menuItem.style.flexDirection = 'column';
        menuItem.style.padding = '12px';
        menuItem.style.margin = '2px 0';
        menuItem.style.cursor = 'pointer';
        menuItem.style.transition = 'all 0.2s ease';
        menuItem.style.borderRadius = '12px';
        menuItem.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        menuItem.style.backdropFilter = 'blur(8px)';
        menuItem.style.WebkitBackdropFilter = 'blur(8px)';
        menuItem.style.position = 'relative';
        menuItem.style.userSelect = 'none';
        menuItem.style.WebkitTapHighlightColor = 'transparent';

        // Create header container
        const headerContainer = document.createElement('div');
        headerContainer.style.display = 'flex';
        headerContainer.style.alignItems = 'center';
        headerContainer.style.gap = '12px';

        // Add icon with mobile optimization
        const icon = document.createElement('img');
        icon.src = item.icon;
        icon.style.width = '24px';
        icon.style.height = '24px';
        icon.style.filter = 'brightness(0) invert(1)';
        icon.style.transition = 'transform 0.2s ease';
        icon.style.flexShrink = '0';
        headerContainer.appendChild(icon);

        // Add text optimized for mobile
        const text = document.createElement('span');
        text.textContent = item.name;
        text.style.color = 'white';
        text.style.fontSize = '16px';
        text.style.fontWeight = '500';
        text.style.letterSpacing = '0.5px';
        headerContainer.appendChild(text);

        menuItem.appendChild(headerContainer);

        // Add description with mobile optimization
        const description = document.createElement('div');
        description.textContent = item.description;
        description.style.color = 'rgba(255, 255, 255, 0.7)';
        description.style.fontSize = '14px';
        description.style.marginTop = '6px';
        description.style.marginLeft = '36px';
        description.style.lineHeight = '1.4';
        menuItem.appendChild(description);

        // Add touch-friendly hover effects
        menuItem.addEventListener('mouseover', () => {
            menuItem.style.backgroundColor = 'rgba(100, 149, 237, 0.2)';
            menuItem.style.transform = 'translateX(4px)';
            icon.style.transform = 'rotate(5deg)';
        });

        menuItem.addEventListener('mouseout', () => {
            menuItem.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            menuItem.style.transform = 'translateX(0)';
            icon.style.transform = 'rotate(0)';
        });

        // Add click/tap animations with enhanced feedback
        menuItem.addEventListener('mousedown', () => {
            menuItem.style.transform = 'scale(0.95) translateX(5px)';
            menuItem.style.backgroundColor = 'rgba(100, 149, 237, 0.5)';
            icon.style.transform = 'scale(0.9) rotate(5deg)';
        });

        menuItem.addEventListener('mouseup', () => {
            menuItem.style.transform = 'translateX(5px)';
            menuItem.style.backgroundColor = 'rgba(100, 149, 237, 0.3)';
        });

        menuItem.addEventListener('touchstart', (e) => {
            e.preventDefault();
            
            // Get device width
            const deviceWidth = window.innerWidth;
            
            // Apply different transformations based on screen size
            if (deviceWidth < 768) { // Mobile
                menuItem.style.transform = 'scale(0.98) translateX(3px)'; // Smaller scale for better touch targets
                menuItem.style.backgroundColor = 'rgba(100, 149, 237, 0.6)'; // Higher opacity for better visibility
            } else if (deviceWidth >= 768 && deviceWidth < 1024) { // Tablet
                menuItem.style.transform = 'scale(0.95) translateX(4px)';
                menuItem.style.backgroundColor = 'rgba(100, 149, 237, 0.5)';
            } else { // Desktop
                menuItem.style.transform = 'scale(0.95) translateX(5px)';
                menuItem.style.backgroundColor = 'rgba(100, 149, 237, 0.5)';
            }
        });

        menuItem.addEventListener('touchend', () => {
            const deviceWidth = window.innerWidth;
            
            if (deviceWidth < 768) {
                menuItem.style.transform = 'translateX(3px)';
                menuItem.style.backgroundColor = 'rgba(100, 149, 237, 0.4)';
            } else if (deviceWidth >= 768 && deviceWidth < 1024) {
                menuItem.style.transform = 'translateX(4px)';
                menuItem.style.backgroundColor = 'rgba(100, 149, 237, 0.3)';
            } else {
                menuItem.style.transform = 'translateX(5px)';
                menuItem.style.backgroundColor = 'rgba(100, 149, 237, 0.3)';
            }
        });

        // Add click handler with responsive behavior
        menuItem.addEventListener('click', () => {
            const deviceWidth = window.innerWidth;
            const planetName = planetIcons[index].name;
            const planetContainer = containers[planetName].container;
            showLoading();
            
            // Adjust container display based on screen size
            if (deviceWidth < 768) {
                planetContainer.style.display = 'block';
                planetContainer.style.width = '100%';
                planetContainer.style.height = '100%';
            } else if (deviceWidth >= 768 && deviceWidth < 1024) {
                planetContainer.style.display = 'block';
                planetContainer.style.width = '90%';
                planetContainer.style.height = '90%';
                planetContainer.style.margin = 'auto';
            } else {
                planetContainer.style.display = 'block';
                planetContainer.style.width = '80%';
                planetContainer.style.height = '80%';
                planetContainer.style.margin = 'auto';
            }
            
            const planetIcon = document.getElementById(`button-${planetName}`);
            if (planetIcon) {
                planetIcon.click();
            }
        });

        menuContent.appendChild(menuItem);
    });

    document.body.appendChild(sideMenu);

   
    const loadingOverlay = document.createElement('div');
    loadingOverlay.style.position = 'fixed';
    loadingOverlay.style.top = '0';
    loadingOverlay.style.left = '0';
    loadingOverlay.style.width = '100%';
    loadingOverlay.style.height = '100%';
    loadingOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    loadingOverlay.style.display = 'none';
    loadingOverlay.style.justifyContent = 'center';
    loadingOverlay.style.alignItems = 'center';
    loadingOverlay.style.zIndex = '2000';

    const loadingSpinner = document.createElement('div');
    loadingSpinner.style.width = '50px';
    loadingSpinner.style.height = '50px';
    loadingSpinner.style.border = '5px solid #f3f3f3';
    loadingSpinner.style.borderTop = '5px solid #3498db';
    loadingSpinner.style.borderRadius = '50%';
    loadingSpinner.style.animation = 'spin 1s linear infinite';

    const loadingText = document.createElement('div');
    loadingText.style.color = 'white';
    loadingText.style.marginTop = '20px';
    loadingText.style.fontSize = '20px';
    loadingText.textContent = 'Loading...';

    const spinnerContainer = document.createElement('div');
    spinnerContainer.style.display = 'flex';
    spinnerContainer.style.flexDirection = 'column';
    spinnerContainer.style.alignItems = 'center';
    spinnerContainer.appendChild(loadingSpinner);
    spinnerContainer.appendChild(loadingText);

    loadingOverlay.appendChild(spinnerContainer);
    document.body.appendChild(loadingOverlay);

    // Add spinner animation
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(styleSheet);

    // Function to show/hide loading screen
    const showLoading = () => {
        loadingOverlay.style.display = 'flex';
        setTimeout(() => {
            hideLoading();
        }, 200); // Hide after 3 seconds
    };

    const hideLoading = () => {
        loadingOverlay.style.display = 'none';
    };

    // Calculate base size unit based on viewport size
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const baseSize = Math.min(vw, vh) * 0.02; // Base size unit is 2% of smallest viewport dimension
    const dpr = window.devicePixelRatio || 1; // Get device pixel ratio for high DPI displays

    // Adjust base size for high DPI displays
    const adjustedBaseSize = baseSize * Math.max(1, dpr/2);

    const containers = {};
    let containerCount = 1;
    
    // Make menuContainer clickable by removing pointer-events: none
    const menuContainer = document.createElement('div');
    menuContainer.style.position = 'absolute';
    menuContainer.style.width = '100%';
    menuContainer.style.height = '100%';
    menuContainer.style.pointerEvents = 'auto';
    menuContainer.style.zIndex = '100';
    container.appendChild(menuContainer);

    // Create initial Psyche display with responsive design
    const psycheInitialContainer = document.createElement('div');
    psycheInitialContainer.style.position = 'absolute';
    psycheInitialContainer.style.width = '100%';
    psycheInitialContainer.style.height = '100%';
    psycheInitialContainer.style.display = 'flex';
    psycheInitialContainer.style.justifyContent = 'center';
    psycheInitialContainer.style.alignItems = 'center';
    container.appendChild(psycheInitialContainer);

    const planetIcons = [
        { 
            name: 'sun', 
            image: 'images/icons/sun.png',
            scrollbarStyle: {
                track: 'linear-gradient(to right, #000000, #1a1a1a)',
                thumb: 'linear-gradient(to right, #ffd700, #ff8c00)',
                width: '8px',
                radius: '4px'
            }
        },
        { 
            name: 'mercury', 
            image: 'images/icons/solarsystem.png', 
            displayName: 'Solar System',
            scrollbarStyle: {
                track: 'linear-gradient(to right, #000000, #1a1a1a)', 
                thumb: 'linear-gradient(to right, #c0c0c0, #808080)',
                width: '8px',
                radius: '4px'
            }
        },
        { 
            name: 'venus', 
            image: 'images/icons/daynight.png', 
            displayName: 'Day/Night Cycles',
            scrollbarStyle: {
                track: 'linear-gradient(to right, #000000, #1a1a1a)',
                thumb: 'linear-gradient(to right, #ffa500, #ff4500)',
                width: '8px', 
                radius: '4px'
            }
        },
        { 
            name: 'earth', 
            image: 'images/icons/mission.png',
            scrollbarStyle: {
                track: 'linear-gradient(to right, #000000, #1a1a1a)',
                thumb: 'linear-gradient(to right, #4169e1, #000080)',
                width: '8px',
                radius: '4px'
            }
        },
        { 
            name: 'gravity', 
            image: 'images/icons/gravity.png',
            scrollbarStyle: {
                track: 'linear-gradient(to right, #000000, #1a1a1a)',
                thumb: 'linear-gradient(to right, #9932cc, #4b0082)',
                width: '8px',
                radius: '4px'
            }
        },
        { 
            name: 'psyche', 
            image: 'images/icons/pickaxe.png',
            scrollbarStyle: {
                track: 'linear-gradient(to right, #000000, #1a1a1a)',
                thumb: 'linear-gradient(to right, #daa520, #8b4513)',
                width: '8px',
                radius: '4px'
            }
        },
        { 
            name: 'jupiter', 
            image: 'images/icons/disk.png',
            scrollbarStyle: {
                track: 'linear-gradient(to right, #000000, #1a1a1a)',
                thumb: 'linear-gradient(to right, #cd853f, #8b4513)',
                width: '8px',
                radius: '4px'
            }
        },
        { 
            name: 'saturn', 
            image: 'images/icons/helmet.png',
            scrollbarStyle: {
                track: 'linear-gradient(to right, #000000, #1a1a1a)',
                thumb: 'linear-gradient(to right, #f0e68c, #daa520)',
                width: '8px',
                radius: '4px'
            }
        },
        { 
            name: 'psycheView', 
            image: 'images/icons/telescope.png', 
            displayName: 'View of Psyche from Earth',
            scrollbarStyle: {
                track: 'linear-gradient(to right, #000000, #1a1a1a)',
                thumb: 'linear-gradient(to right, #4682b4, #191970)',
                width: '8px',
                radius: '4px'
            }
        },
        { 
            name: 'temperature', 
            image: 'images/icons/thermometer.png', 
            displayName: 'Temperature Map',
            scrollbarStyle: {
                track: 'linear-gradient(to right, #000000, #1a1a1a)',
                thumb: 'linear-gradient(to right, #ff4500, #8b0000)',
                width: '8px',
                radius: '4px'
            }
        }
    ];



    planetIcons.forEach(planet => {
        const planetContainer = document.createElement('div');
        planetContainer.id = `container${containerCount}`;
        planetContainer.style.display = 'none';
        planetContainer.style.position = 'fixed';
        planetContainer.style.top = '0';
        planetContainer.style.left = '0';
        planetContainer.style.width = window.innerWidth < 768 ? '100%' : '90%';
        planetContainer.style.height = window.innerWidth < 768 ? '100%' : '90%';
        planetContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        planetContainer.style.zIndex = '1000';
        planetContainer.style.border = `${adjustedBaseSize * 0.2}px solid #fff`;
        planetContainer.style.borderRadius = `${adjustedBaseSize}px`;
        planetContainer.style.padding = `${adjustedBaseSize * 2}px`;
        planetContainer.style.boxSizing = 'border-box';
        planetContainer.style.boxShadow = `0 0 ${adjustedBaseSize * 2}px rgba(255, 255, 255, 0.3)`;

        const headerContainer = document.createElement('div');
        headerContainer.style.display = 'flex';
        headerContainer.style.justifyContent = 'space-between';
        headerContainer.style.alignItems = 'center';
        headerContainer.style.marginBottom = `${adjustedBaseSize * 2}px`;

        const title = document.createElement('h1');
        title.textContent = planet.displayName || planet.name.charAt(0).toUpperCase() + planet.name.slice(1);
        title.style.color = '#fff';
        title.style.margin = '0';
        title.style.fontSize = `${adjustedBaseSize * 3}px`;
        title.style.fontWeight = 'bold';
        headerContainer.appendChild(title);

        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = `${adjustedBaseSize}px`;

        const fullscreenBtn = document.createElement('button');
        fullscreenBtn.innerHTML = '&#x26F6;';
        fullscreenBtn.style.background = 'none';
        fullscreenBtn.style.border = 'none';
        fullscreenBtn.style.color = '#fff';
        fullscreenBtn.style.fontSize = `${adjustedBaseSize * 2}px`;
        fullscreenBtn.style.cursor = 'pointer';
        fullscreenBtn.style.padding = `${adjustedBaseSize * 0.5}px`;
        fullscreenBtn.style.width = `${adjustedBaseSize * 4}px`;
        fullscreenBtn.style.height = `${adjustedBaseSize * 4}px`;
        fullscreenBtn.onclick = () => {
            if (!document.fullscreenElement) {
                planetContainer.requestFullscreen();
                fullscreenBtn.innerHTML = '&#x26F7;';
            } else {
                document.exitFullscreen();
                fullscreenBtn.innerHTML = '&#x26F6;';
            }
        };
        buttonContainer.appendChild(fullscreenBtn);

        const closeBtn = document.createElement('button');
        closeBtn.textContent = '×';
        closeBtn.style.background = 'none';
        closeBtn.style.border = 'none';
        closeBtn.style.color = '#fff';
        closeBtn.style.fontSize = `${adjustedBaseSize * 3}px`;
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.padding = `${adjustedBaseSize * 0.5}px`;
        closeBtn.style.width = `${adjustedBaseSize * 4}px`;
        closeBtn.style.height = `${adjustedBaseSize * 4}px`;
        closeBtn.onclick = () => {
            planetContainer.style.display = 'none';
        };
        buttonContainer.appendChild(closeBtn);

        headerContainer.appendChild(buttonContainer);
        planetContainer.appendChild(headerContainer);

        document.body.appendChild(planetContainer);
        containers[planet.name] = {
            container: planetContainer,
            id: containerCount++
        };
    });

    const radius = Math.min(container.clientWidth, container.clientHeight) * 0.4;
    const centerX = container.clientWidth / 2;
    const centerY = container.clientHeight / 2;
    const iconSize = adjustedBaseSize * 5; // Make icons 5x the adjusted base size
    planetIcons.forEach((planet, index) => {
        const angle = (index / planetIcons.length) * 2 * Math.PI;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        const icon = document.createElement('div');
        const img = document.createElement('img');
        img.src = planet.image;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.pointerEvents = 'auto';
        img.style.objectFit = 'contain'; // Ensure icon fits properly
        icon.appendChild(img);
        
        icon.style.position = 'absolute';
        icon.style.width = `${iconSize}px`;
        icon.style.height = `${iconSize}px`;
        icon.style.left = `${x - iconSize/2}px`;
        icon.style.top = `${y - iconSize/2}px`;
        icon.style.cursor = 'pointer';
        icon.style.pointerEvents = 'auto';
        icon.style.borderRadius = '50%';
        icon.style.transition = 'transform 0.2s';
        icon.style.zIndex = '200';
        icon.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        icon.style.padding = `${adjustedBaseSize}px`;
        icon.style.boxShadow = `0 0 ${adjustedBaseSize}px rgba(255, 255, 255, 0.3)`;
        icon.id = `button-${planet.name}`;
        icon.classList.add('planet-icon');

        // Add tooltip
        const tooltip = document.createElement('div');
        tooltip.textContent = planet.displayName || planet.name.charAt(0).toUpperCase() + planet.name.slice(1);
        tooltip.style.position = 'absolute';
        tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        tooltip.style.color = 'white';
        tooltip.style.padding = `${adjustedBaseSize * 0.5}px ${adjustedBaseSize}px`;
        tooltip.style.borderRadius = `${adjustedBaseSize * 0.5}px`;
        tooltip.style.fontSize = `${adjustedBaseSize * 1.5}px`;
        tooltip.style.whiteSpace = 'nowrap';
        tooltip.style.opacity = '0';
        tooltip.style.transition = 'opacity 0.2s';
        tooltip.style.pointerEvents = 'none';
        icon.appendChild(tooltip);
        // Create night sky view function
        const createPsycheView = (container) => {
            // Clear any existing content
            container.innerHTML = '';

            // Create night sky background
            const skyCanvas = document.createElement('canvas');
            skyCanvas.style.position = 'absolute';
            skyCanvas.style.top = '0';
            skyCanvas.style.left = '0';
            skyCanvas.style.width = '100%';
            skyCanvas.style.height = '100%';
            container.appendChild(skyCanvas);

            // Set canvas size to match container
            const updateCanvasSize = () => {
                skyCanvas.width = container.clientWidth;
                skyCanvas.height = container.clientHeight;
            };
            updateCanvasSize();
            window.addEventListener('resize', updateCanvasSize);

            const ctx = skyCanvas.getContext('2d');

            // Create stars for background
            const stars = [];
            for(let i = 0; i < 800; i++) {
                stars.push({
                    x: Math.random() * skyCanvas.width,
                    y: Math.random() * skyCanvas.height,
                    size: Math.random() * 3 + 1, // Increased star size
                    brightness: Math.random(),
                    speed: Math.random() * 2 + 1,
                    color: `rgb(255,255,${Math.random() * 55 + 200})` // Slightly blue-white stars
                });
            }

            // Create planet labels
            const planetLabels = [
                {name: 'Mars', x: skyCanvas.width * 0.8, y: skyCanvas.height * 0.2},
                {name: 'Jupiter', x: skyCanvas.width * 0.15, y: skyCanvas.height * 0.7},
                {name: 'Saturn', x: skyCanvas.width * 0.7, y: skyCanvas.height * 0.85}
            ];

            // Create planet label elements
            planetLabels.forEach(planet => {
                const label = document.createElement('div');
                label.textContent = planet.name;
                label.style.position = 'absolute';
                label.style.left = `${planet.x}px`;
                label.style.top = `${planet.y}px`;
                label.style.color = '#e0e0ff';
                label.style.padding = '10px 20px';
                label.style.backgroundColor = 'rgba(0,0,0,0.8)';
                label.style.borderRadius = '15px';
                label.style.fontSize = '20px';
                label.style.pointerEvents = 'none';
                container.appendChild(label);
            });

            // Create Psyche label
            const psycheLabel = document.createElement('div');
            psycheLabel.textContent = 'Psyche';
            psycheLabel.style.position = 'absolute';
            psycheLabel.style.color = '#e0e0ff';
            psycheLabel.style.padding = '15px 30px';
            psycheLabel.style.backgroundColor = 'rgba(0,0,0,0.8)';
            psycheLabel.style.borderRadius = '25px';
            psycheLabel.style.fontSize = '28px';
            psycheLabel.style.fontWeight = 'bold';
            psycheLabel.style.textShadow = '0 0 15px rgba(255,255,255,0.7)';
            psycheLabel.style.cursor = 'pointer';
            psycheLabel.style.transition = 'all 0.3s ease';
            container.appendChild(psycheLabel);

            // Position Psyche label at 1/3 from left initially
            psycheLabel.style.left = `${skyCanvas.width/3 - psycheLabel.offsetWidth/2}px`;
            psycheLabel.style.top = `${skyCanvas.height/2 - psycheLabel.offsetHeight/2}px`;

            // Add hover effect
            psycheLabel.addEventListener('mouseover', () => {
                psycheLabel.style.color = '#00ffff';
                psycheLabel.style.transform = 'scale(1.1)';
                psycheLabel.style.boxShadow = '0 0 20px rgba(0,255,255,0.5)';
            });

            psycheLabel.addEventListener('mouseout', () => {
                psycheLabel.style.color = '#e0e0ff';
                psycheLabel.style.transform = 'scale(1)';
                psycheLabel.style.boxShadow = 'none';
            });

            // Add click handler for warp speed and model
            psycheLabel.addEventListener('click', async () => {
                // Create 3D scene early but don't display yet
                const scene = new THREE.Scene();
                scene.background = new THREE.Color('#000022'); // Match star background
                const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
                const renderer = new THREE.WebGLRenderer({ antialias: true });
                renderer.setSize(container.clientWidth, container.clientHeight);
                
                // Load Psyche model before starting warp effect
                const loader = new GLTFLoader();
                const gltf = await loader.loadAsync('models/psyche/Psyche.glb');
                scene.add(gltf.scene);
                camera.position.z = 45; // Start 3x further out
                
                // Add lighting
                const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
                const pointLight = new THREE.PointLight(0xffffff, 1);
                pointLight.position.set(5, 5, 5);
                scene.add(ambientLight, pointLight);

                // Start warp speed effect
                let warpSpeed = 0;
                const warpStart = Date.now();
                const warpDuration = 3000; // 3 seconds

                const warpAnimation = setInterval(() => {
                    const elapsed = Date.now() - warpStart;
                    if (elapsed >= warpDuration) {
                        clearInterval(warpAnimation);
                        container.innerHTML = '';
                        container.appendChild(renderer.domElement);
                        
                        // Smooth camera zoom animation
                        const zoomDuration = 1000; // 1 second zoom
                        const startZ = camera.position.z;
                        const targetZ = 15;
                        const zoomStart = Date.now();
                        
                        function zoomIn() {
                            const zoomElapsed = Date.now() - zoomStart;
                            if (zoomElapsed < zoomDuration) {
                                const progress = zoomElapsed / zoomDuration;
                                camera.position.z = startZ + (targetZ - startZ) * progress;
                                requestAnimationFrame(zoomIn);
                            } else {
                                camera.position.z = targetZ;
                            }
                            gltf.scene.rotation.y += 0.005;
                            renderer.render(scene, camera);
                        }
                        zoomIn();
                        return;
                    }

                    warpSpeed = elapsed / warpDuration;
                    stars.forEach(star => {
                        // Create tunnel effect by moving stars from center outward
                        const dx = star.x - skyCanvas.width/3; // Move warp center to 1/3 from left
                        const dy = star.y - skyCanvas.height/2;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        const speed = (distance / 100) * warpSpeed * 15;
                        
                        star.x += (dx / distance) * speed;
                        star.y += (dy / distance) * speed;
                        
                        if (star.x < 0 || star.x > skyCanvas.width || 
                            star.y < 0 || star.y > skyCanvas.height) {
                            // Reset stars to center when they go off screen
                            star.x = skyCanvas.width/3 + (Math.random() - 0.5) * 100; // Reset to 1/3 from left
                            star.y = skyCanvas.height/2 + (Math.random() - 0.5) * 100;
                        }
                    });
                }, 16);
            });

            // Animation function
            let angle = 0;
            function animate() {
                // Clear canvas
                ctx.fillStyle = '#000022';
                ctx.fillRect(0, 0, skyCanvas.width, skyCanvas.height);

                // Draw and animate stars with sparkle effect
                stars.forEach(star => {
                    const twinkle = 0.7 + Math.sin(Date.now() * 0.003 + star.brightness * 10) * 0.3;
                    ctx.globalAlpha = twinkle;
                    
                    // Draw stars with glow effect
                    const gradient = ctx.createRadialGradient(
                        star.x, star.y, 0,
                        star.x, star.y, star.size * 2
                    );
                    gradient.addColorStop(0, star.color);
                    gradient.addColorStop(1, 'rgba(255,255,255,0)');
                    
                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                    ctx.fill();
                });
                ctx.globalAlpha = 1;

                // Move Psyche label in elliptical path more slowly
                const x = skyCanvas.width/3 + Math.cos(angle) * (skyCanvas.width/4); // Center around 1/3 from left
                const y = skyCanvas.height/2 + Math.sin(angle) * (skyCanvas.height/5);
                psycheLabel.style.left = `${x - psycheLabel.offsetWidth/2}px`;
                psycheLabel.style.top = `${y - psycheLabel.offsetHeight/2}px`;

                angle += 0.001; // Reduced from 0.002 to 0.001 for slower movement
                requestAnimationFrame(animate);
            }
            animate();
        };

        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.2)';
            icon.style.cursor = 'pointer';
            tooltip.style.opacity = '1';
        });

        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1)';
            tooltip.style.opacity = '0';
        });

        icon.addEventListener('click', async (event) => {
            console.log(`Clicked ${planet.name} icon`);
            showLoading();
            const planetContainer = containers[planet.name].container;
            planetContainer.style.display = 'block';
            
            if (planet.name === 'earth') {
                createPsycheView(planetContainer);
            } else if (planet.name === 'mercury') {
                // Create solar system scene
                const solarSystemScene = new THREE.Scene();
                const solarSystemCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                
                const solarSystemRenderer = new THREE.WebGLRenderer({ antialias: true });
                solarSystemRenderer.setSize(window.innerWidth, window.innerHeight);
                planetContainer.appendChild(solarSystemRenderer.domElement);

                // Create Sun
                const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
                const sunTexture = await new THREE.TextureLoader().loadAsync('images/textures/sun.jpg');
                const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
                const sun = new THREE.Mesh(sunGeometry, sunMaterial);
                solarSystemScene.add(sun);

                // Create planets
                const planets = [
                    { name: 'Mercury', size: 0.8, distance: 10, texture: 'mercury.jpg', speed: 0.01 },
                    { name: 'Venus', size: 1.2, distance: 15, texture: 'venus.jpg', speed: 0.008 },
                    { name: 'Earth', size: 1.3, distance: 20, texture: 'earth.jpg', speed: 0.006 },
                    { name: 'Mars', size: 0.9, distance: 25, texture: 'mars.jpg', speed: 0.004 },
                    { name: 'Jupiter', size: 3, distance: 35, texture: 'jupiter.jpg', speed: 0.002 },
                    { name: 'Saturn', size: 2.5, distance: 45, texture: 'saturn.jpg', speed: 0.001 },
                    { name: 'Uranus', size: 1.8, distance: 55, texture: 'uranus.jpg', speed: 0.0008 },
                    { name: 'Neptune', size: 1.7, distance: 65, texture: 'neptune.jpg', speed: 0.0006 }
                ];

                // Create orbit paths
                planets.forEach(planetData => {
                    const orbitGeometry = new THREE.RingGeometry(planetData.distance - 0.1, planetData.distance + 0.1, 128);
                    const orbitMaterial = new THREE.MeshBasicMaterial({ 
                        color: 0x666666,
                        side: THREE.DoubleSide,
                        transparent: true,
                        opacity: 0.3
                    });
                    const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
                    orbit.rotation.x = Math.PI / 2;
                    solarSystemScene.add(orbit);
                });

                // Create asteroid belt
                const asteroidBelt = new THREE.Group();
                const asteroidGeometry = new THREE.SphereGeometry(0.1, 8, 8);
                const asteroidMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });
                
                // Create 1000 asteroids in a belt between Mars and Jupiter
                for(let i = 0; i < 1000; i++) {
                    const distance = Math.random() * (35 - 25) + 25; // Between Mars and Jupiter's orbits
                    const angle = Math.random() * Math.PI * 2;
                    const asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial);
                    
                    // Position in orbital ring
                    asteroid.position.x = Math.cos(angle) * distance;
                    asteroid.position.z = Math.sin(angle) * distance;
                    
                    // Add some vertical spread
                    asteroid.position.y = (Math.random() - 0.5) * 2;
                    
                    // Random rotation
                    asteroid.rotation.x = Math.random() * Math.PI;
                    asteroid.rotation.y = Math.random() * Math.PI;
                    asteroid.rotation.z = Math.random() * Math.PI;
                    
                    asteroidBelt.add(asteroid);
                }
                solarSystemScene.add(asteroidBelt);

                // Create Kuiper Belt
                const kuiperBelt = new THREE.Group();
                const kuiperObjectGeometry = new THREE.SphereGeometry(0.08, 8, 8);
                const kuiperObjectMaterial = new THREE.MeshStandardMaterial({ color: 0x666666 });
                
                // Create 2000 Kuiper Belt objects beyond Neptune
                for(let i = 0; i < 2000; i++) {
                    const distance = Math.random() * (90 - 65) + 65; // Beyond Neptune's orbit
                    const angle = Math.random() * Math.PI * 2;
                    const kuiperObject = new THREE.Mesh(kuiperObjectGeometry, kuiperObjectMaterial);
                    
                    // Position in orbital ring
                    kuiperObject.position.x = Math.cos(angle) * distance;
                    kuiperObject.position.z = Math.sin(angle) * distance;
                    
                    // Add more vertical spread for Kuiper Belt
                    kuiperObject.position.y = (Math.random() - 0.5) * 4;
                    
                    // Random rotation
                    kuiperObject.rotation.x = Math.random() * Math.PI;
                    kuiperObject.rotation.y = Math.random() * Math.PI;
                    kuiperObject.rotation.z = Math.random() * Math.PI;
                    
                    kuiperBelt.add(kuiperObject);
                }
                solarSystemScene.add(kuiperBelt);

                // Load all planet textures concurrently
                const textureLoader = new THREE.TextureLoader();
                const texturePromises = planets.map(planetData => 
                    textureLoader.loadAsync(`images/textures/${planetData.texture}`)
                );
                const textures = await Promise.all(texturePromises);

                const planetMeshes = planets.map(planetData => {
                    const geometry = new THREE.SphereGeometry(planetData.size, 32, 32);
                    const texture = new THREE.TextureLoader().load(`images/textures/${planetData.texture}`);
                    const material = new THREE.MeshStandardMaterial({ map: texture });
                    const planet = new THREE.Mesh(geometry, material);
                    planet.position.x = planetData.distance;
                    solarSystemScene.add(planet);
                    return { mesh: planet, data: planetData };
                });

                // Add lighting
                const ambientLight = new THREE.AmbientLight(0x333333);
                const pointLight = new THREE.PointLight(0xFFFFFF, 2, 300);
                solarSystemScene.add(ambientLight);
                solarSystemScene.add(pointLight);
                pointLight.position.set(0, 0, 0);

                solarSystemCamera.position.z = 100;
                solarSystemCamera.position.y = 50;

                const controls = new OrbitControls(solarSystemCamera, solarSystemRenderer.domElement);

                function animateSolarSystem() {
                    requestAnimationFrame(animateSolarSystem);
                    
                    sun.rotation.y += 0.002;
                    
                    planetMeshes.forEach(({ mesh, data }) => {
                        // Orbit around sun
                        const time = Date.now() * data.speed;
                        mesh.position.x = Math.cos(time) * data.distance;
                        mesh.position.z = Math.sin(time) * data.distance;
                        // Self rotation
                        mesh.rotation.y += 0.01;
                    });

                    // Rotate asteroid belt and Kuiper belt
                    asteroidBelt.rotation.y += 0.0005;
                    kuiperBelt.rotation.y += 0.0003;

                    controls.update();
                    solarSystemRenderer.render(solarSystemScene, solarSystemCamera);
                }
                animateSolarSystem();
            } else if (planet.name === 'venus') {
                // Create day/night cycle scene
                const dayNightScene = new THREE.Scene();
                const dayNightCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                
                const dayNightRenderer = new THREE.WebGLRenderer({ antialias: true });
                dayNightRenderer.setSize(window.innerWidth, window.innerHeight);
                planetContainer.appendChild(dayNightRenderer.domElement);

                // Add info text
                const infoDiv = document.createElement('div');
                infoDiv.style.position = 'absolute';
                infoDiv.style.top = '80px';
                infoDiv.style.left = '20px';
                infoDiv.style.color = 'white';
                infoDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                infoDiv.style.padding = '20px';
                infoDiv.style.borderRadius = '10px';
                infoDiv.innerHTML = `
                    <h2>Psyche Day/Night Cycle</h2>
                    <p>Rotation Period (Day Length): ~4.2 Earth hours</p>
                    <p>Orbital Period (Year Length): ~5 Earth years</p>
                    <p>Distance from Sun: ~3 AU (Astronomical Units)</p>
                `;
                planetContainer.appendChild(infoDiv);
                
                // Create Psyche
                const loader = new GLTFLoader();
                let psyche;
                loader.load(
                    'models/psyche/Psyche.glb',
                    function (gltf) {
                        psyche = gltf.scene;
                        psyche.scale.set(1, 1, 1); // Scale the model to appropriate size
                        dayNightScene.add(psyche);
                    },
                    undefined,
                    function (error) {
                        console.error('Error loading Psyche model:', error);
                    }
                );

                // Add lighting for day/night cycle
                const ambientLight = new THREE.AmbientLight(0x111111);
                dayNightScene.add(ambientLight);

                const sunLight = new THREE.DirectionalLight(0xFFFFFF, 1);
                sunLight.position.set(50, 0, 0);
                dayNightScene.add(sunLight);

                dayNightCamera.position.z = 15;
                
                const controls = new OrbitControls(dayNightCamera, dayNightRenderer.domElement);

                let time = 0;
                const dayLength = 4.2; // 4.2 Earth hours
                const yearLength = 1825; // 5 Earth years in days

                function animateDayNight() {
                    requestAnimationFrame(animateDayNight);
                    
                    time += 0.01;
                    
                    // Rotate for day/night cycle (faster)
                    psyche.rotation.y = time * (2 * Math.PI / dayLength);
                    
                    // Orbit around sun (slower)
                    sunLight.position.x = Math.cos(time * (2 * Math.PI / yearLength)) * 50;
                    sunLight.position.z = Math.sin(time * (2 * Math.PI / yearLength)) * 50;
                    
                    controls.update();
                    dayNightRenderer.render(dayNightScene, dayNightCamera);
                }
                animateDayNight();
            } else if (planet.name === 'gravity') {
                // Create gravity visualization scene
                const gravityScene = new THREE.Scene();
                const gravityCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                
                const gravityRenderer = new THREE.WebGLRenderer({ antialias: true });
                gravityRenderer.setSize(window.innerWidth, window.innerHeight);
                planetContainer.appendChild(gravityRenderer.domElement);

                // Add gravity info text with improved styling
                const gravityInfoDiv = document.createElement('div');
                gravityInfoDiv.style.position = 'absolute';
                gravityInfoDiv.style.top = '20px';
                gravityInfoDiv.style.left = '20px';
                gravityInfoDiv.style.color = 'white';
                gravityInfoDiv.style.fontSize = '18px';
                gravityInfoDiv.style.backgroundColor = 'rgba(0,0,0,0.8)';
                gravityInfoDiv.style.padding = '20px';
                gravityInfoDiv.style.borderRadius = '10px';
                gravityInfoDiv.style.maxWidth = '400px';
                planetContainer.appendChild(gravityInfoDiv);

                // Create Earth sphere with texture
                const earthGeometry = new THREE.SphereGeometry(2.5, 64, 64); // Increased size from 1.5 to 2.5
                const textureLoader = new THREE.TextureLoader();
                const earthTexture = textureLoader.load('images/textures/earth.jpg');
                const earthMaterial = new THREE.MeshStandardMaterial({
                    map: earthTexture,
                    metalness: 0.2,
                    roughness: 0.8
                });
                const earth = new THREE.Mesh(earthGeometry, earthMaterial);
                earth.position.set(-8, 0, 0); // Moved from -4 to -8

                // Load Psyche model
                const loader = new GLTFLoader();
                let psyche;
                loader.load(
                    'models/psyche/Psyche.glb',
                    function (gltf) {
                        psyche = gltf.scene;
                        psyche.scale.set(1, 1, 1);
                        psyche.position.set(8, 0, 0); // Moved from 4 to 8
                        gravityScene.add(psyche);
                    },
                    undefined,
                    function (error) {
                        console.error('Error loading Psyche model:', error);
                    }
                );

                // Add labels for each body
                const createLabel = (text, position) => {
                    const label = document.createElement('div');
                    label.style.position = 'absolute';
                    label.style.color = 'white';
                    label.style.fontSize = '16px';
                    label.style.fontWeight = 'bold';
                    label.style.padding = '5px';
                    label.style.background = 'rgba(0,0,0,0.7)';
                    label.style.borderRadius = '5px';
                    label.textContent = text;
                    planetContainer.appendChild(label);
                    return label;
                };

                const earthLabel = createLabel('Earth', earth.position);
                const psycheLabel = createLabel('Psyche', new THREE.Vector3(8, 0, 0)); // Updated to match new position

                gravityScene.add(earth);

                // Enhanced lighting setup with more lights for better visibility
                const ambientLight = new THREE.AmbientLight(0x404040, 1.2); // Increased intensity
                const directionalLight = new THREE.DirectionalLight(0xffffff, 2.0); // Increased intensity
                directionalLight.position.set(5, 5, 5);
                const pointLight1 = new THREE.PointLight(0x00ff00, 1.5, 15); // Increased intensity and range
                pointLight1.position.set(-8, 3, 2); // Updated position
                const pointLight2 = new THREE.PointLight(0xff00ff, 1.5, 15); // Increased intensity and range
                pointLight2.position.set(8, 3, 2); // Updated position
                
                // Add new lights for better earth visibility
                const earthSpotlight = new THREE.SpotLight(0xffffff, 1.5);
                earthSpotlight.position.set(-8, 5, 2); // Updated position
                earthSpotlight.target = earth;
                
                gravityScene.add(ambientLight);
                gravityScene.add(directionalLight);
                gravityScene.add(pointLight1);
                gravityScene.add(pointLight2);
                gravityScene.add(earthSpotlight);

                gravityCamera.position.z = 20; // Increased to show wider view

                const controls = new OrbitControls(gravityCamera, gravityRenderer.domElement);

                // Constants for gravity calculation
                const G = 6.67430e-11;
                const earthMass = 5.972e24;
                const psycheMass = 2.72e19;
                const earthRadius = 6371000;
                const psycheRadius = 113000;

                const earthGravity = (G * earthMass) / (earthRadius * earthRadius);
                const psycheGravity = (G * psycheMass) / (psycheRadius * psycheRadius);
                const gravityRatio = psycheGravity / earthGravity;

                // Update info text with more relatable comparisons
                gravityInfoDiv.innerHTML = `
                    <h2 style="color: #00ff00; margin-bottom: 15px;">Gravity Comparison</h2>
                    <p><b>Earth:</b> 9.81 m/s² (normal gravity you experience)</p>
                    <p><b>Psyche:</b> ${(psycheGravity).toFixed(4)} m/s²</p>
                    <h3 style="color: #00ff00; margin-top: 15px;">Fun Facts on Psyche:</h3>
                    <ul style="list-style-type: none; padding-left: 0;">
                        <li>🍎 An apple would take ${(1/gravityRatio).toFixed(1)}x longer to fall!</li>
                        <li>🏋️ A 100 lb person would weigh only ${(gravityRatio * 100).toFixed(1)} lbs</li>
                        <li>🦘 You could jump ${(1/gravityRatio).toFixed(1)}x higher</li>
                        <li>🎈 A helium balloon would rise ${(1/gravityRatio).toFixed(1)}x faster</li>
                        <li>☔️ Rain would fall ${gravityRatio.toFixed(1)}x slower</li>
                        <li>🎾 A tennis serve would travel ${(1/gravityRatio).toFixed(1)}x further</li>
                        <li>⚡ Walking would feel like being in slow motion</li>
                    </ul>
                `;

                // Create basic geometric shapes for gravity demonstration
                const objects = [];
                
                // Create sphere geometry for apple representation
                const appleGeometry = new THREE.SphereGeometry(0.3, 32, 32);
                const appleMaterial = new THREE.MeshPhongMaterial({ 
                    color: 0xff0000,
                    shininess: 100
                });

                function createFallingApple(startPos) {
                    const apple = new THREE.Mesh(appleGeometry, appleMaterial);
                    apple.position.copy(startPos);
                    apple.userData.startY = startPos.y;
                    apple.userData.velocity = 0;
                    apple.userData.startTime = Date.now();
                    apple.userData.rotationSpeed = {
                        x: Math.random() * 0.05,
                        y: Math.random() * 0.05,
                        z: Math.random() * 0.05
                    };
                    return apple;
                }

                let time = 0;
                function animateGravity() {
                    requestAnimationFrame(animateGravity);
                    
                    time += 0.016;

                    // Rotate bodies
                    earth.rotation.y += 0.005;
                    if (psyche) {
                        psyche.rotation.y += 0.005;
                    }

                    // Animate point lights
                    pointLight1.position.y = 3 + Math.sin(time) * 0.5;
                    pointLight2.position.y = 3 + Math.cos(time) * 0.5;

                    // Create new apples periodically
                    if (time % 2 < 0.016) {
                        const earthApple = createFallingApple(new THREE.Vector3(-8, 3, 0)); // Updated position
                        const psycheApple = createFallingApple(new THREE.Vector3(8, 3, 0)); // Updated position
                        objects.push(earthApple, psycheApple);
                        gravityScene.add(earthApple, psycheApple);
                    }

                    // Animate existing objects
                    objects.forEach((obj, index) => {
                        const elapsed = (Date.now() - obj.userData.startTime) / 1000;
                        const gravity = obj.position.x < 0 ? 9.81 : psycheGravity;
                        obj.position.y = obj.userData.startY - (0.5 * gravity * elapsed * elapsed);
                        
                        obj.rotation.x += obj.userData.rotationSpeed.x;
                        obj.rotation.y += obj.userData.rotationSpeed.y;
                        obj.rotation.z += obj.userData.rotationSpeed.z;
                        
                        if (obj.position.y < -3) {
                            gravityScene.remove(obj);
                            objects.splice(index, 1);
                        }
                    });

                    // Update labels
                    const vector = new THREE.Vector3();
                    
                    vector.setFromMatrixPosition(earth.matrixWorld);
                    vector.project(gravityCamera);
                    earthLabel.style.left = (vector.x * .5 + .5) * window.innerWidth + 'px';
                    earthLabel.style.top = (-vector.y * .5 + .5) * window.innerHeight + 'px';
                    
                    if (psyche) {
                        vector.setFromMatrixPosition(psyche.matrixWorld);
                        vector.project(gravityCamera);
                        psycheLabel.style.left = (vector.x * .5 + .5) * window.innerWidth + 'px';
                        psycheLabel.style.top = (-vector.y * .5 + .5) * window.innerHeight + 'px';
                    }

                    controls.update();
                    gravityRenderer.render(gravityScene, gravityCamera);
                }
                
                animateGravity();
            } else if (planet.name === 'temperature') {
                // Create temperature visualization scene
                const tempScene = new THREE.Scene();
                const tempCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                
                const tempRenderer = new THREE.WebGLRenderer({ antialias: true });
                tempRenderer.setSize(window.innerWidth, window.innerHeight);
                planetContainer.appendChild(tempRenderer.domElement);

                // Load the Psyche GLB model
                const loader = new GLTFLoader();
                let psyche;
                loader.load('models/psyche/Psyche.glb', function(gltf) {
                    psyche = gltf.scene;
                    psyche.scale.set(1, 1, 1);
                    const temperatureMaterial = new THREE.ShaderMaterial({
                        uniforms: {
                            sunDirection: { value: new THREE.Vector3(1, 0, 0) },
                            time: { value: 0 }
                        },
                        vertexShader: `
                            varying vec3 vNormal;
                            varying vec3 vPosition;
                            
                            void main() {
                                vNormal = normalize(normalMatrix * normal);
                                vPosition = position;
                                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                            }
                        `,
                        fragmentShader: `
                            uniform vec3 sunDirection;
                            uniform float time;
                            varying vec3 vNormal;
                            varying vec3 vPosition;
                            
                            // Pseudo-random function
                            float random(vec2 st) {
                                return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
                            }
                            
                            void main() {
                                // Calculate distance from equator (using y coordinate)
                                float latitude = asin(normalize(vPosition).y);
                                float poleEffect = abs(latitude) / (3.14159 / 2.0);
                                
                                // Add some random variation
                                vec2 randomCoord = vPosition.xz * 0.5;
                                float noise = random(randomCoord) * 5.0;
                                
                                // Temperature in Kelvin (88K to 98K)
                                float temperature = mix(88.0, 98.0, (1.0 - poleEffect)) + noise;
                                
                                vec3 tempColor;
                                if(temperature > 95.0) {
                                    tempColor = mix(vec3(1.0, 0.0, 0.0), vec3(1.0, 0.5, 0.0), (temperature - 95.0) / 3.0);
                                } else if(temperature > 92.0) {
                                    tempColor = mix(vec3(0.0, 0.0, 1.0), vec3(0.5, 0.5, 1.0), (temperature - 92.0) / 3.0);
                                } else {
                                    tempColor = mix(vec3(0.0, 0.0, 0.5), vec3(0.0, 0.0, 1.0), (temperature - 88.0) / 4.0);
                                }
                                
                                gl_FragColor = vec4(tempColor, 1.0);
                            }
                        `
                    });

                    // Apply temperature material to all meshes in the model
                    psyche.traverse((child) => {
                        if (child.isMesh) {
                            child.material = temperatureMaterial;
                        }
                    });

                    tempScene.add(psyche);
                }, undefined, function(error) {
                    console.error('Error loading Psyche model:', error);
                });

                // Add temperature legend
                const legendDiv = document.createElement('div');
                legendDiv.style.position = 'absolute';
                legendDiv.style.top = '80px';
                legendDiv.style.right = '20px';
                legendDiv.style.color = 'white';
                legendDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                legendDiv.style.padding = '20px';
                legendDiv.style.borderRadius = '10px';
                legendDiv.innerHTML = `
                    <h2>Psyche Temperature Map</h2>
                    <div style="display: flex; align-items: center; margin: 10px 0;">
                        <div style="background: linear-gradient(to bottom, #ff0000, #ff8000, #0000ff, #000080); width: 20px; height: 200px; margin-right: 10px;"></div>
                        <div>
                            <div>98K (Warmest)</div>
                            <div style="margin-top: 80px;">93K</div>
                            <div style="margin-top: 80px;">88K (Coldest)</div>
                        </div>
                    </div>
                    <p>Psyche's temperature variations are due to:</p>
                    <ul>
                        <li>Distance from Sun (3 AU)</li>
                        <li>Equatorial vs Polar regions</li>
                        <li>Local surface variations</li>
                        <li>Metallic heat conductivity</li>
                    </ul>
                `;
                planetContainer.appendChild(legendDiv);

                // Add sun light
                const sunLight = new THREE.DirectionalLight(0xFFFFFF, 2);
                sunLight.position.set(50, 0, 0);
                tempScene.add(sunLight);

                // Add ambient light
                const ambientLight = new THREE.AmbientLight(0x333333);
                tempScene.add(ambientLight);

                tempCamera.position.z = 15;

                const controls = new OrbitControls(tempCamera, tempRenderer.domElement);

                function animateTemp() {
                    requestAnimationFrame(animateTemp);
                    if (psyche) {
                        psyche.rotation.y += 0.005;
                    }
                    
                    // Update sun direction in shader
                    const time = Date.now() * 0.001;
                    sunLight.position.x = Math.cos(time * 0.2) * 50;
                    sunLight.position.z = Math.sin(time * 0.2) * 50;
                    
                    controls.update();
                    tempRenderer.render(tempScene, tempCamera);
                }
                animateTemp();

            } else if (planet.name === 'psyche') {
                // Create new scene for Psyche model
                const psycheScene = new THREE.Scene();
                const psycheCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                
                const psycheRenderer = new THREE.WebGLRenderer({ antialias: true });
                psycheRenderer.setSize(window.innerWidth, window.innerHeight);
                planetContainer.appendChild(psycheRenderer.domElement);
                
                // Load the Psyche GLB model
                const loader = new GLTFLoader();
                loader.load('models/psyche/Psyche.glb', function(gltf) {
                    const psycheModel = gltf.scene;
                    psycheModel.scale.set(1, 1, 1); // Scale the model to appropriate size
                    psycheScene.add(psycheModel);
                }, undefined, function(error) {
                    console.error('Error loading Psyche model:', error);
                });
                
                // Add lighting
                const psycheAmbientLight = new THREE.AmbientLight(0x333333);
                const psychePointLight = new THREE.PointLight(0xFFFFFF, 2, 300);
                psycheScene.add(psycheAmbientLight);
                psycheScene.add(psychePointLight);
                psychePointLight.position.set(50, 50, 50);
                
                psycheCamera.position.z = 15;
                
                const psycheControls = new OrbitControls(psycheCamera, psycheRenderer.domElement);
                
                function animatePsyche() {
                    requestAnimationFrame(animatePsyche);
                    psycheModel.rotation.y += 0.005;
                    psycheControls.update();
                    psycheRenderer.render(psycheScene, psycheCamera);
                }
                animatePsyche();
            }
            
            event.stopPropagation();
        });

        menuContainer.appendChild(icon);
    });

    // Create scene for Psyche in main container
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    container.appendChild(renderer.domElement);
    // Create quiz card container with futuristic design
    const quizContainer = document.createElement('div');
    quizContainer.style.position = 'absolute';
    quizContainer.style.right = '20px';
    quizContainer.style.top = '20px';
    quizContainer.style.width = '350px';
    quizContainer.style.zIndex = '1000';
    container.appendChild(quizContainer);

    // Quiz data with card templates
    const quizCards = [
        {
            template: 'basic',
            question: "What is Psyche's estimated diameter?",
            answer: "About 226 kilometers (140 miles)",
            style: {
                backgroundColor: 'rgba(0, 20, 40, 0.9)',
                accentColor: '#00ffff',
                highlightColor: '#00ff00'
            }
        },
        {
            template: 'basic',
            question: "How far is Psyche from the Sun?", 
            answer: "About 3 AU (Astronomical Units)",
            style: {
                backgroundColor: 'rgba(0, 20, 40, 0.9)', 
                accentColor: '#00ffff',
                highlightColor: '#00ff00'
            }
        },
        {
            template: 'basic',
            question: "What is Psyche primarily made of?",
            answer: "Mostly metal, primarily nickel and iron",
            style: {
                backgroundColor: 'rgba(0, 20, 40, 0.9)',
                accentColor: '#00ffff', 
                highlightColor: '#00ff00'
            }
        }
    ];

    // Card template styles
    const cardTemplates = {
        basic: {
            container: {
                backgroundColor: 'rgba(0, 20, 40, 0.9)',
                padding: '25px',
                borderRadius: '20px',
                color: '#00ffff',
                cursor: 'pointer',
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
                transition: 'all 0.4s ease',
                border: '2px solid rgba(0, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)'
            },
            question: {
                fontSize: '1.3em',
                fontWeight: 'bold',
                marginBottom: '15px',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                letterSpacing: '1px'
            },
            answer: {
                fontSize: '1.2em',
                margin: '15px 0',
                padding: '10px',
                borderRadius: '10px'
            },
            navigation: {
                marginTop: '20px',
                fontSize: '1em',
                textTransform: 'uppercase',
                letterSpacing: '2px'
            }
        }
    };

    // Create and display quiz card with template styling
    let currentCardIndex = 0;
    let showingAnswer = false;
    const card = document.createElement('div');

    // Apply template styles
    const template = cardTemplates.basic;
    Object.assign(card.style, template.container);

    function updateCard() {
        const currentCard = quizCards[currentCardIndex];
        const style = currentCard.style;
        
        card.innerHTML = `
            <div style="text-align: center;">
                <div class="question" style="
                    ${Object.entries(template.question).map(([key, value]) => `${key}: ${value}`).join(';')};
                    color: ${style.accentColor}
                ">
                    ${currentCard.question}
                </div>
                ${showingAnswer ? `
                    <div class="answer" style="
                        ${Object.entries(template.answer).map(([key, value]) => `${key}: ${value}`).join(';')};
                        color: ${style.highlightColor};
                        border: 1px solid ${style.highlightColor}
                    ">
                        ${currentCard.answer}
                    </div>
                ` : ''}
                <div style="
                    ${Object.entries(template.navigation).map(([key, value]) => `${key}: ${value}`).join(';')};
                    color: ${style.accentColor}
                ">
                    <span class="blink" style="
                        animation: blink 1.5s infinite;
                        font-family: 'Courier New', monospace;
                    ">▶</span>
                    ${showingAnswer ? 'Next Question' : 'Show Answer'}
                </div>
            </div>
        `;
    }

    // Add blinking animation style
    const style = document.createElement('style');
    style.textContent = `
        @keyframes blink {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    updateCard();
    quizContainer.appendChild(card);

    // Click handler for showing answer and next question
    card.addEventListener('click', () => {
        card.style.transform = 'scale(0.95)';
        card.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.3)';
        
        setTimeout(() => {
            if (showingAnswer) {
                currentCardIndex = (currentCardIndex + 1) % quizCards.length;
                showingAnswer = false;
            } else {
                showingAnswer = true;
            }
            updateCard();
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.2)';
        }, 150);
    });

    // Hover effects
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.02)';
        card.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.3)';
        card.style.border = '2px solid rgba(0, 255, 255, 0.5)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.2)';
        card.style.border = '2px solid rgba(0, 255, 255, 0.3)';
    });

    // Create Psyche model for main container
    const loader = new GLTFLoader();
    let psycheModel;
    let isDragging = false;
    let isAutoRotating = true;
    let previousMousePosition = {
        x: 0,
        y: 0
    };

    // Calculate initial scale based on screen size
    const calculateModelScale = () => {
        const screenSize = Math.min(container.clientWidth, container.clientHeight);
        return screenSize * 0.0008; // Adjust this multiplier to fine-tune the scale
    };

    loader.load(
        'models/psyche/Psyche.glb',
        function (gltf) {
            psycheModel = gltf.scene;
            const initialScale = calculateModelScale();
            psycheModel.scale.set(initialScale, initialScale, initialScale);
            
            // Add rotation controls
            psycheModel.rotation.x = 0;
            psycheModel.rotation.y = 0;
            psycheModel.rotation.z = 0;

            // Add mouse controls
            renderer.domElement.addEventListener('mousedown', function(e) {
                isDragging = true;
                isAutoRotating = false; // Stop auto rotation when dragging starts
                previousMousePosition = {
                    x: e.clientX,
                    y: e.clientY
                };
            });

            renderer.domElement.addEventListener('mousemove', function(e) {
                if(isDragging) {
                    const deltaMove = {
                        x: e.clientX - previousMousePosition.x,
                        y: e.clientY - previousMousePosition.y
                    };

                    psycheModel.rotation.y += deltaMove.x * 0.01;
                    psycheModel.rotation.x += deltaMove.y * 0.01;

                    previousMousePosition = {
                        x: e.clientX,
                        y: e.clientY
                    };
                }
            });

            renderer.domElement.addEventListener('mouseup', function(e) {
                isDragging = false;
                isAutoRotating = true; // Resume auto rotation when mouse is released
            });

            renderer.domElement.addEventListener('mouseleave', function(e) {
                isDragging = false;
                isAutoRotating = true; // Resume auto rotation if mouse leaves the element
            });

            // Add resize listener specific to model
            window.addEventListener('resize', () => {
                const newScale = calculateModelScale();
                psycheModel.scale.set(newScale, newScale, newScale);
            });

            scene.add(psycheModel);
        },
        undefined,
        function (error) {
            console.error('Error loading Psyche model:', error);
        }
    );

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x333333);
    const pointLight = new THREE.PointLight(0xFFFFFF, 2, 300);
    scene.add(ambientLight);
    scene.add(pointLight);
    pointLight.position.set(50, 50, 50);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enablePan = true;
    controls.minDistance = 5;
    controls.maxDistance = 100;

    // Handle window resize
    window.addEventListener('resize', () => {
        // Update base sizes
        const newVw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const newVh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        const newBaseSize = Math.min(newVw, newVh) * 0.02;
        const newAdjustedBaseSize = newBaseSize * Math.max(1, dpr/2);

        // Update camera
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();

        // Update renderer
        renderer.setSize(container.clientWidth, container.clientHeight);

        // Update icon positions and sizes
        const newRadius = Math.min(container.clientWidth, container.clientHeight) * 0.4;
        const newCenterX = container.clientWidth / 2;
        const newCenterY = container.clientHeight / 2;
        const newIconSize = newAdjustedBaseSize * 5;

        document.querySelectorAll('.planet-icon').forEach((icon, index) => {
            const angle = (index / planetIcons.length) * 2 * Math.PI;
            const x = newCenterX + newRadius * Math.cos(angle);
            const y = newCenterY + newRadius * Math.sin(angle);

            icon.style.width = `${newIconSize}px`;
            icon.style.height = `${newIconSize}px`;
            icon.style.left = `${x - newIconSize/2}px`;
            icon.style.top = `${y - newIconSize/2}px`;
        });
    });

    function animate() {
        requestAnimationFrame(animate);
        if (psycheModel) {
            psycheModel.rotation.y += 0.005;
        }
        controls.update();
        renderer.render(scene, camera);
    }
    animate();
});
