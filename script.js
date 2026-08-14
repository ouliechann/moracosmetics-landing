/* =========================
   HERO SLIDER
========================= */

const sliderTrack = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

const currentSlide = document.getElementById("currentSlide");

let currentIndex = 0;


/* SHOW SLIDE */

function showSlide(index) {

    currentIndex = index;

    sliderTrack.style.transform =
        `translateX(-${currentIndex * 100}%)`;

    currentSlide.textContent =
        String(currentIndex + 1).padStart(2, "0");
}


/* NEXT */

function nextSlide() {

    currentIndex++;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    showSlide(currentIndex);
}


/* PREVIOUS */

function previousSlide() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    showSlide(currentIndex);
}


/* BUTTONS */

nextButton.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
});

prevButton.addEventListener("click", () => {
    previousSlide();
    resetAutoSlide();
});


/* AUTO SLIDE */

let autoSlide = setInterval(nextSlide, 5000);


function resetAutoSlide() {

    clearInterval(autoSlide);

    autoSlide = setInterval(nextSlide, 5000);
}


/* =========================
   PRODUCT BUTTONS
========================= */

const buyButtons = document.querySelectorAll(".buy-button");

buyButtons.forEach((button) => {

    button.addEventListener("click", () => {

        alert(
            "The MORA online store is launching soon."
        );

    });

});