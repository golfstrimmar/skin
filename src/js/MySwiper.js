import Swiper from 'swiper/swiper-bundle.min.js';
import 'swiper/swiper-bundle.min.css';

const swiperNew = new Swiper(".slider__wrapper", {
    navigation: {
        prevEl: '.content-slider-prev',
        nextEl: '.content-slider-next',
    },
    slidesPerView: 1,
    loop: 'true',
    spaceBetween: 10,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: 'true',
            speed: 800,
        },
    },

})