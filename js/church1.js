// Initialize the slide index
let slideIndex = 0;

// Show the first slide on page load
window.onload = () => {
    showSlides(slideIndex);
};

// Function to move slides left or right
function moveSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

// Function to show the current slide and hide others
function showSlides(index) {
    const slides = document.querySelectorAll(".slide");

    // Wrap around when out of bounds
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    // Hide all slides
    slides.forEach(slide => (slide.style.display = "none"));

    // Show the current slide
    slides[slideIndex].style.display = "block";
}

