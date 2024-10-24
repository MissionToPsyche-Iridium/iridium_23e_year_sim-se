const toggleButton = document.getElementById('toggleReferences');
const references = document.getElementById('references');

toggleButton.addEventListener('click', function() {
    if (references.style.display == 'none' || references.style.display == '') {
        references.style.display = 'block'; 
    } else {
        references.style.display = 'none';
    }
});