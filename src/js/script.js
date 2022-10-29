// Jquery and Slick Slider

// const { on } = require("gulp");

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
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
                dots: true,
            }

        }]
    });
    // Функционал табов
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // Modal
    // Вытягиевает модальное окно 
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });
    // "Крестик" закрывает любое модальное окно
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
    // Модальное окно для кнопки купить 
    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });
    // Валидация формы

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                },

            },
            messages: {
                name: {
                    required: "Пожайлуста введите свое имя",
                    minlength: jQuery.validator.format("Введите минимум {0} символа")
                },

                phone: "Введите свой телефон",
                email: {
                    required: "Пожалуйста введите свою почту",
                    email: "Неправильно введен адрес почты"
                }
            }
        });
    }
    $('input[name=phone]').mask("+7 (999) 999-99-99");

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');
    // Отправка формы
    $('form').submit(function (e) {
        e.preventDefault();                 // отключает перезагрузку страницы

        // Валидация формы
        if (!$(this).valid()) {
            return;
        }

        $.ajax({
            type: "POST",                   // тип передачи данных
            url: "mailer/smart.php",        // путь куда передаем данные
            data: $(this).serialize()       // какие данные передаем
        }).done(function () {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');


            $("form").trigger("reset");
        });
        return false;
    });

    // Scroll and pageup
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1300) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    new WOW().init();
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


