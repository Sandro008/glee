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

    $('.select-style').styler()
})

$(function () {

    $(".catalog__star").rateYo({
        starWidth: "12px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true
    });

});
$(function () {

    $(".product-card__star").rateYo({
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
    $('.top-slider__inner').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,

    });
});

$(function () {
    $('.partners__slider').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        touchMove: true

    });

});


$(function () {
    var mixerOne = mixitup('.products__mixitup', {
        controls: {
            scope: 'local'
        }
    });

    var mixertwo = mixitup('.design__mixitup', {
        controls: {
            scope: 'local'
        }
    });
});