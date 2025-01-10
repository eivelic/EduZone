// Get the image element by its ID
console.log('script.js loaded');
const image = document.getElementById('logo');

// Add an event listener to handle the click event

image.addEventListener('click', () => {
    // Redirect to home.html when the image is clicked
    window.location.href = 'index.html';
});