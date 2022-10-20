$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1200,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplaySpeed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/solid_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/solid_right.svg"></button>',
    });
});