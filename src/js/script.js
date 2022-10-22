// Jquery and Slick Slider

// Settings
$(document).ready(function () {
// Функциона карусели
    $('.carousel__inner').slick({
        speed: 1200,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplaySpeed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/solid_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/solid_right.svg"></button>',
    });
// Функционал табов
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('.catalog-item__link').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    });
});



// Tiny slider

// Settings
// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 'page',
//     controls: false,
//     nav: false,
//     responsive: {
//         575: {
//             nav: true
//         },
//         992: {
//             nav: false
//         }
//     }
// });

// document.querySelector('.tiny-prev').onclick = function () {
//     slider.goTo('prev');
// };

// document.querySelector('.tiny-next').addEventListener('click', function () {
//     slider.goTo('next');
// });

