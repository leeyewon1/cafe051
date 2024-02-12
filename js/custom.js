$(function () {
    $('.main').fullpage({
        anchors: ['01', '02', '03', '04', '05', '06'],
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

    $('.tab_menu li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.tab_menu li').removeClass('on');
        $('.tab_menu li').eq(idx).addClass('on');

        $('.tab_content li').removeClass('on')
        $('.tab_content li').eq(idx).addClass('on')
    });


    var sl = new Swiper('.mm', {
        slidesPerView: 5,

        spaceBetween: 30,
        loop: true,
        autoplay: false,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    })

    $('.main_tab_solution .bt_left').on('click', function () {
        $('.main_tab_solution .tab_left_slide').slick('slickPrev');
    });
    $('.main_tab_solution .bt_right').on('click', function () {
        $('.main_tab_solution .tab_right_slide').slick('slickNext');
    });

})