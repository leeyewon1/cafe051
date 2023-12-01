$(function () {
    $('.main').fullpage({
        anchors: ['01', '02', '03', '04'],
        afterLoad: function (a, b, c) {
            console.log(a, b, c);
            $('.section').removeClass('on');
            $('.section').eq(b - 1).addClass('on');
        },
        responsiveWidth: 768,
    });

    var swiper = new Swiper(".loop-swiper", {
        direction: "vertical",
        slidesPerView: 3,
        //spaceBetween: 30,
        loop: true,
        speed: 2000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

})