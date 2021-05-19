$(function () {
    $('.top-slider__inner').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,

    })
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
        touchMove:true

    })

})

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