$(function () {
    $('.details-tabs__link').on('click', function (e) {
        e.preventDefault();
        $('.details-tabs__link').removeClass('details-tabs__link--active');
        $(this).addClass('details-tabs__link--active');

        $('.details-tabs__box').removeClass('details-tabs__box--active');
        $($(this).attr('href')).addClass('details-tabs__box--active');

    });
});


$(function () {
    $('.catalog-content__btn').on('click', function () {
        $('.catalog-content__btn').removeClass('catalog-content__btn--active');
        $(this).addClass('catalog-content__btn--active');
    });

    $('.button-list').on('click', function () {
        $('.catalog-content__menu').addClass('catalog-content__menu--list');
    });
    $('.button-grid').on('click', function () {
        $('.catalog-content__menu').removeClass('catalog-content__menu--list');
    });

});

$(function () {
    $('.catalog__input').ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function (data) {
            $('.catalog__min').text(data.from),
                $('.catalog__max').text(data.to)
        },
        onChange: function (data) {
            $('.catalog__min').text(data.from);
            $('.catalog__max').text(data.to);
        },
    });
});

$(function () {

    $('.select-style ,.details-item__input').styler()
});

$(function () {

    $(".catalog__star").rateYo({
        starWidth: "12px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true
    });

});
$(function () {

    $(".product-card__star", ".details-item__star").rateYo({
        starWidth: "20px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true
    });

});

$(function () {
    $('.menu-nav__menu').on('click', function () {
        $('.menubar').removeClass('menubar--close');
    });
    $('.menubar__close').on('click', function () {
        $('.menubar').addClass('menubar--close');
    });
});



$(function () {
    var containerEl = document.querySelector('.products__mixitup');
    var mixer;

    if (containerEl) {
        mixer = mixitup(containerEl, {
            controls: {
                scope: 'local'
            }
        });
    }
});
$(function () {
    var containerEl = document.querySelector('.design__mixitup');
    var mixer;

    if (containerEl) {
        mixer = mixitup(containerEl, {
            controls: {
                scope: 'local'
            }
        });
    }
});

$(window).on('load', function () {

    AOS.init({
        disable: 'phone',
        duration: 1500,
        once: true,
    });

    $('.details-slider__list').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchMove: true,
        responsive: [{

                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }

            },
            {
                breakpoint: 575,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]


    });
    $('.partners__slider').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        touchMove: true,
        responsive: [{

                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }

            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]


    });
    $('.top-slider__inner').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,

    });
     $('.details-item__list').slick({
         asNavFor: '.details-item__top',
         focusOnSelect: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         vertical: true,
         draggable: false,
         arrows: false

     });
     $('.details-item__top').slick({
         asNavFor: '.details-item__list',
         draggable: false,
         arrows: false,
         fade: true,
         autoplay: true,
         autoplaySpeed: 1500

     });

    AOS.refresh();
});