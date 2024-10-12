// Define the buttons and image outside the functions
const devilsButton = document.getElementById('devilsButton');
const metsButton = document.getElementById('metsButton');
const image = document.getElementById('myImage');

// Disable the devils button on page load
devilsButton.disabled = true;

// Function to toggle text color by toggling the hidden class
function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    const button = document.getElementById('toggleButton');

    // Check if the element currently has the hidden class
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden'); // Remove hidden class, show text
        button.textContent = 'HIDE';  // Change button text to "HIDE"
        document.getElementById('demo2').style.color = "black";
    } else {
        element.classList.add('hidden'); // Add hidden class, hide text
        button.textContent = 'SHOW';  // Change button text to "SHOW"
        document.getElementById('demo2').style.color = "white";
    }
}

function increment() {
    var x = parseInt(document.getElementById('counter').innerHTML);
    document.getElementById('counter').innerHTML = x + 1;
}

function decrement() {
    var z = parseInt(document.getElementById('counter').innerHTML);
    document.getElementById('counter').innerHTML = z - 1;
}

function reset() {
    document.getElementById('counter').innerHTML = 0;
}

// Event listener for showing the date
document.getElementById('dateButton').addEventListener('click', function() {
    document.getElementById('demo').innerHTML = new Date();
});

// Event listeners for changing images
devilsButton.addEventListener('click', function() {
    // Set the Devils image
    image.src = 'njdevils.png';
    
    // Disable the Devils button and re-enable the Mets button
    devilsButton.disabled = true;
    metsButton.disabled = false;
});

metsButton.addEventListener('click', function() {
    // Set the Mets image
    image.src = 'nymets.png';
    
    // Disable the Mets button and re-enable the Devils button
    metsButton.disabled = true;
    devilsButton.disabled = false;
});

// Event listener for toggling the text color of demo2 paragraph
document.getElementById('toggleButton').addEventListener('click', function() {
    toggleVisibility('demo2');
});

document.getElementById('increment').addEventListener('click', function() {
    increment();
});

document.getElementById('decrement').addEventListener('click', function() {
    decrement();
});

document.getElementById('reset').addEventListener('click', function() {
    reset();
});
