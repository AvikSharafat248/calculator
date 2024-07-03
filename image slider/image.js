const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

initialSlider()

function initialSlider() {

    if (slides.length > 0) {
        if (slides.length > 0) {
            slides[slideIndex].classList.add("displaySlide");
        }


    }

    function showSlide(index) {



    }

    function prevSlide() {

    }

    function nextSlide() {
        slideIndex++;
        showSlide(slideIndex);


    }
