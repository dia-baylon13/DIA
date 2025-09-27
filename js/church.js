document.addEventListener("DOMContentLoaded", () => {
    const content1 = document.querySelector(".content1");
    const imageContainer = content1.querySelector(".image-container");
    const images = content1.querySelectorAll(".image");
    const totalImages = images.length;

    let currentIndex = 0;
    let interval;

    // Function to move the slideshow
    const moveSlide = () => {
        currentIndex = (currentIndex + 1) % totalImages; // Loop back to the start
        const offset = currentIndex * -900; // Calculate translateX offset based on image width
        imageContainer.style.transform = `translateX(${offset}px)`; // Use pixels for accuracy
    };

    // Start the slideshow
    const startSlideshow = () => {
        interval = setInterval(moveSlide, 3000); // Change slides every 3 seconds
    };

    // Stop the slideshow
    const stopSlideshow = () => {
        clearInterval(interval);
    };

    // Event listeners to pause/resume slideshow on hover
    content1.addEventListener("mouseover", stopSlideshow);
    content1.addEventListener("mouseout", startSlideshow);

    // Initialize the slideshow
    startSlideshow();
});