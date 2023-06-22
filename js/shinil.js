$(function () {
    $(window).on('scroll', function(){
        let sct = $(window).scrollTop();
        if(sct>0) { 
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })


    $('.h_slide').slick({
        arrows: false,
        dots: true,
    })

    $('.main_home .left').on('click', function() {
        $('.h_slide').slick('slickPrev')
    })

    $('.main_home .right').on('click', function() {
        $('.h_slide').slick('slickNext')
    })

    $('.p_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
    })

    $('.main_product .left').on('click', function() {
        $('.p_slide').slick('slickPrev')
    })

    $('.main_product .right').on('click', function() {
        $('.p_slide').slick('slickNext')
    })

})