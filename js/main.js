//initialize WOW JS
new Window().init();

//initialize Swippers

var aboutSwiper = new Swiper(".aboutSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is <= 599px
        599: {
            slidesPerView: 2,
            spaceBetweenSlides: 50
        },
    }
});
var planeSwiper = new Swiper(".planeSwiper", {
    pagination: {
        el: ".swiper-pagination" ,
        clickable: true,
    },
    navigator: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//Get The Elements
const menu = document.queryCommandValue(".menu");
const menuBtn = document.querySelector(".menu-btn");