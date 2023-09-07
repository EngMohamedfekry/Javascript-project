//first line in website
let slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("firstLine");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

////////////////////////////////////////

var slideShowIndex = 0;
var slideImages = [
    "./images/one.jpg",
    "./images/second.png",
    "./images/third.jpg",
    "./images/four.jpg",
    "./images/five.jpg",
    "./images/six.jpg",
    "./images/seven.avif",
    "./images/eight.png",
    "./images/nine.jpeg",
    "./images/ten.jpeg",
    "./images/eleven.jpeg",
    "./images/twelve.jpeg",
    "./images/thieteen.avif",
    "./images/fortten.avif",
    "./images/fifteen.avif",
    "./images/sixteen.avif",
    "./images/seventeen.avif",
    "./images/twenty.avif"
];
showImagesSlides();

function showImagesSlides() {

    var slideImage = document.getElementById("slideImage");

    slideShowIndex++

    if (slideShowIndex >= slideImages.length) {
        slideShowIndex = 0;
    }

    slideImage.src = slideImages[slideShowIndex];

    // Change slide every 1 seconds 
    setTimeout(showImagesSlides, 750);
}































// function showImagesSlides() {
//     var currentSlide = document.getElementById("currentSlide");
//     var nextSlide = document.getElementById("nextSlide");

//     slideIndex++;

//     if (slideIndex >= slideImages.length) {
//         slideIndex = 0;
//     }

//     nextSlide.src = slideImages[slideIndex];

//     // Animate the vertical slide
//     nextSlide.classList.remove("hidden");
//     nextSlide.style.transform = "translateY(100%)";

//     setTimeout(function () {
//         nextSlide.style.transform = "translateY(0%)";
//         currentSlide.style.transform = "translateY(-100%)";
//     }, 100);

//     setTimeout(function () {
//         currentSlide.src = slideImages[slideIndex];
//         currentSlide.style.transform = "translateY(0%)";
//         nextSlide.classList.add("hidden");
//     }, 200);

//     // Change slide every 3 seconds (adjust the duration as needed)
//     setTimeout(showImagesSlides, 1500);
// }
