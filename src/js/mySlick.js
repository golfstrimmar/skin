import $ from "jquery";
// import "./slick.js";



$(Document).ready(function() {

    $(".slider-js-posts-side").slick({
        // dots: true,
        // arrows: false,
        slidesToShow: 3,
        speed: 1500,
        easing: "ease",
        // cssEase: "linear",
        centerMode: false,
        // autoplay: true,
        // autoplaySpeed: 5000,
        // centerMode: true,
        infinite: true,
        //  initialSlide: 1,
        // pauseOnFocus: true,
        // pauseOnHover: true,
        prevArrow: document.querySelector('.posts-slick-prev'),
        nextArrow: document.querySelector('.posts-slick-next'),
        responsive: [
            {
                breakpoint: 1420,
                settings: {
                    arrows: false,
                    dots: true,
                },
            },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true,
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,

            },
        },
    ],
    });


    $(".slider-js-posts-low").slick({
        // dots: true,
        // arrows: false,
        slidesToShow: 3,
        speed: 1500,
        easing: "ease",
        // cssEase: "linear",
        centerMode: false,
        // autoplay: true,
        // autoplaySpeed: 5000,
        // centerMode: true,
        infinite: true,
        //  initialSlide: 1,
        // pauseOnFocus: true,
        // pauseOnHover: true,

        prevArrow: document.querySelector('.posts-low-slick-prev'),
        nextArrow: document.querySelector('.posts-low-slick-next'),
        responsive: [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,

            },
        },
    ],
    });



    $(".slider-js-posts-num").slick({
        dots: true,
        // arrows: false,
        slidesToShow: 3,
        speed: 1500,
        easing: "ease",
        // cssEase: "linear",
        centerMode: false,
        // autoplay: true,
        // autoplaySpeed: 5000,
        // centerMode: true,
        infinite: true,
        //  initialSlide: 1,
        // pauseOnFocus: true,
        // pauseOnHover: true,
        prevArrow: document.querySelector('.num-slick-prev'),
        nextArrow: document.querySelector('.num-slick-next'),
        responsive: [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
            },
        },
    ],

  customPaging: function (slider, i) {
          var current = i + 1;
          current = current < 10 ? "" + current : current;

          var total = slider.slideCount;
          total = total < 10 ? "" + total : total;

          return (
            '<button type="button" role="button" tabindex="0" class="slick-dots-button">\
        		<span class="slick-dots-current">' +
            current +
            '</span>\
        		<span class="slick-dots-separator">/</span>\
        		<span class="slick-dots-total">' +
            total +
            "</span></button>"
          );
        },


    });

// -------------single-slider---галерея ---------------------
    $(".slider-single-bottom-js").slick({
        // dots: true,
        arrows: false,
        slidesToShow: 3,
        speed: 800,
        easing: "ease",
        // cssEase: "linear",
        // centerMode: false,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // centerMode: true,
        infinite: true,
        asNavFor: ".slider-single-top-js",

    });


    $(".slider-single-bottom-js .slick-slide").on("click", function () {
        const index = $(this).attr("data-slick-index");
        $(".slider-single-bottom-js").slick("slickGoTo", index);
    });


    $(".slider-single-top-js").slick({
        // dots: true,
        arrows: false,
        slidesToShow: 1,
        speed: 800,
        easing: "ease",
        centerMode: false,
        fade: true,
        // asNavFor: ".slider-single-bottom-js",
        responsive: [

            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: true
                },
            }
        ],

    });







// ----------------------------------------------------------------

    $(".slider-js-1").slick({
        // dots: true,
        // arrows: false,
        slidesToShow: 5,
        speed: 800,
        easing: "ease",
        centerMode: false,
        asNavFor: ".slider-js-2",
        prevArrow: document.querySelector('.duble-sliders-slick-prev'),
        nextArrow: document.querySelector('.duble-sliders-slick-next'),

    });

    $(".slider-js-1 .slick-slide").on("click", function () {
        const index = $(this).attr("data-slick-index");
        $(".slider-js-1").slick("slickGoTo", index);
    });




    $(".slider-js-2").slick({
        // dots: true,
        // arrows: false,
        slidesToShow: 2,
        speed: 800,
        easing: "ease",
        infinite: true,
        asNavFor: ".slider-js-1",
        prevArrow: document.querySelector('.duble-sliders-bottom-slick-prev'),
        nextArrow: document.querySelector('.duble-sliders-bottom-slick-next'),
    });














});