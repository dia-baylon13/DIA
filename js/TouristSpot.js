// Slideshow functionality for Container 1
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});

// Image Hover functionality for Container 3
const imageContainers = document.querySelectorAll('.image-container');
imageContainers.forEach(container => {
    const images = container.querySelectorAll('.image');
    
    images.forEach((img, index) => {
        img.addEventListener('mouseenter', function () {
            images.forEach((innerImg, innerIndex) => {
                if (innerIndex !== index) {
                    innerImg.style.opacity = '0'; // Hide other images
                }
            });
        });
        
        img.addEventListener('mouseleave', function () {
            images.forEach(innerImg => {
                innerImg.style.opacity = '1'; // Reset all images to be visible
            });
        });
    });
});

// Optional: Add event listener to initialize both features after DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Slideshow initialization
    showSlides(slideIndex);

    // Image hover effect is already set up above, no need for additional code here
});
