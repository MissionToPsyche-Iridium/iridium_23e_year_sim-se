
    // Find the toggle button and references list
const toggleButton = document.getElementById('toggleReferences');  // The button
const referencesList = document.getElementById('referencesList');  // The list of references

toggleButton.addEventListener('click', function() {
    referencesList.classList.toggle('hide');  // Toggle the "hide" class
    referencesList.classList.toggle('show');  // Toggle the "show" class
});


/**const toggleButton = document.getElementById('toggleReferences');
const references = document.getElementById('references');

/**function toggleReferences() {
    const referencesList = document.getElementById('referencesList');
    referencesList.classList.toggle('hide');
  }

  document.getElementById('toggleReferences').addEventListener('click', function() {
    const referencesList = document.getElementById('referencesList');
    referencesList.classList.toggle('hide'); // Toggle visibility
});
 /**  toggleButton.addEventListener('click', function() {
    if (references.style.display == 'none' || references.style.display == '') {
        references.style.display = 'block'; 
    } else {
        references.style.display = 'none';
    }
    });
*/