document.addEventListener("DOMContentLoaded", function() {
    const reference_button = document.getElementById('reference-button'); // Selects the button element that triggers the popup

    function createPopup() {
        // Create overlay
        const overlay = document.createElement('div'); // Creates a div element to house the overlay
        overlay.id = 'overlay';


        // Overlay styling (CSS) -- this provides a transparent background to make it a modal
        overlay.style.position = 'fixed'; // Fixed positioning keeps it in place when scrolling
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%'; // Full viewport width
        overlay.style.height = '100%'; // Full viewport height
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Semi-transparent black background
        overlay.style.display = 'flex'; // Flex layout to center the popup
        overlay.style.justifyContent = 'center'; // Horizontally centers popup
        overlay.style.alignItems = 'center'; // Vertically centers popup
        overlay.style.zIndex = '1000'; // Large number to ensure it is on top of other elements

        // Create popup
        const popup = document.createElement('div'); // Creates a div element to house the popup content
        popup.id = 'reference-popup';
        popup.style.position = 'relative'; // Allows elements inside the popup to be positioned relative to this container
        popup.style.backgroundColor = 'black';
        popup.style.color = 'black';
        popup.style.padding = '20px';
        popup.style.borderRadius = '10px';
        popup.style.textAlign = 'center';
        popup.style.width = '90%'; // Leaves a margin on the left and right 
        popup.style.height = '90%'; // Leaves a margin on the top and bottom

        // Create the close button
        const closeButton = document.createElement('button'); // Button to close the popup
        closeButton.textContent = ' X '; // Sets the button text to 'X'
        closeButton.style.position = 'absolute'; // Positioned relative to the popup
        closeButton.style.top = '10px';
        closeButton.style.right = '10px';
        closeButton.style.padding = '5px 10px';
        closeButton.style.backgroundColor = 'red';
        closeButton.style.color = 'white';
        closeButton.style.border = 'none';
        closeButton.style.borderRadius = '5px';
        closeButton.style.cursor = 'pointer'; // Changes cursor to pointer on hover for better user experience

        // Add hover effect in JavaScript
        closeButton.addEventListener('mouseover', function() {
            closeButton.style.backgroundColor = 'black';
            closeButton.style.color = 'red';
        });

        closeButton.addEventListener('mouseout', function() {
            closeButton.style.backgroundColor = 'red';
            closeButton.style.color = 'white';
        });


        // Create the HTML content inside the popup
        popup.innerHTML = `
            <h1>References</h1>
            <p>Developers</p> 
            <span>Arratia, Armando</span>
            <span>McNeil, Dan</span>
            <span>Potocki, Jenny</span>
            <span>Anselm, Josh</span>
            <span>Brown, Tyler</span>
            <li><a href="https://psyche.asu.edu" target="_blank">NASA Psyche Mission</a></li>
            <li><a href="https://threejs.org/docs/" target="_blank">Three.js Documentation</a></li>
            <li>Asteroid model by <a href="https://nasa.gov" target="_blank">NASA</a></li>
            <li>Simulation inspired by <a href="http://blender.org" target ="_blank">Blender</a></li> -->
            <p>This is a paragraph with references used</p>
            <ul>
                <li>Reference 1</li>
                <li>Reference 2</li>
                <li>Reference 3</li>
                <li>Reference 4</li>
                <li>Reference 5</li>
                <li>Reference 6</li>
            </ul>
            <p>This is another paragraph</p>
            <ul>
                <li>Something Else 1</li>
                <li>Something Else 2</li>
                <li>Something Else 3</li>
                <li>Something Else 4</li>
                <li>Something Else 5</li>
                <li>Something Else 6</li>
            </ul>

        `;

        // Select all <ul> elements and apply styles
        const lists = popup.querySelectorAll('ul');
        lists.forEach(list => {
            list.style.display = 'inline-block'; // Only takes the necessary width
            list.style.margin = 'auto'; // Centers each UL in the popup
        });
        /*
            The above is equivalent to this enhanced for loop in Java
            String[] items = {"item1", "item2", "item3"};
            for (String item : items) {
                System.out.println(item);
            }
        */


        // Append close button and popup to overlay
        popup.appendChild(closeButton); // Adds the close button inside the popup
        overlay.appendChild(popup); // Adds the popup inside the overlay

        // Append overlay to the body
        document.body.appendChild(overlay); // Adds the overlay to the HTML body

        // Close popup on close button click
        closeButton.addEventListener('click', function() {
            document.body.removeChild(overlay); // Removes the overlay (and popup) from the DOM
        });
    }

    // Show popup when the main button is clicked
    reference_button.addEventListener("click", function() {
        console.log("Reference Popup Opening"); // Logs to console for debugging
        createPopup(); // Calls function to create and display the popup
    });
});
