$('.row').slick({
    dots: true,
    dotsClass: 'slick-dots',
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnFocus: true,
    mobileFirst: true,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 993,
            settings: 'unslick',
        }
        ,]
});
$(window).on('resize', function () {
    $('.row').slick('setPosition');
    if ($(window).width() < 992) {
        $('.row').slick('refresh');
    }
})
