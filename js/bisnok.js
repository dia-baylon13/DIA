const content1 = document.querySelector(".content1");
const imageContainer = document.querySelector(".image-container");
const imageContainer1 = document.querySelector(".image-container1");s

content1.addEventListener("mouseenter", () => {
    imageContainer.style.transform = "translateX(-100%)";
});

content1.addEventListener("mouseleave", () => {
    imageContainer.style.transform = "translateX(0)";
});

content1.addEventListener("mouseleave", () => {
    imageContainer1.style.transform = "translateX(0)";
});
