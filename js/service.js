let slideIndex = 1;
console.log("Initial slide index:", slideIndex);
showSlides(slideIndex);

function plusSlides(n) {
    console.log("Moving slides by:", n);
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    console.log("Setting current slide to:", n);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    let descriptions = document.getElementsByClassName("slide-desc");
    console.log("Total slides:", slides.length);
    console.log("Total dots:", dots.length);

    if (n > slides.length) { 
        slideIndex = 1;
        console.log("Resetting to first slide");
    }
    if (n < 1) { 
        slideIndex = slides.length;
        console.log("Wrapping to last slide");
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        descriptions[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";  
    descriptions[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    console.log("Now showing slide:", slideIndex);
}
