$('.side__menu__call').click(function () {
    $('.global__overlay').toggle();
    $('.header__menu__side_h').css('display', 'flex');
})


$('.menu__item__link').click(function () {
    $('.global__overlay').toggle();
    $('.header__menu__top_h').toggle();
})


$('.header__menu__side_h .icon.icon_x_g').click(function () {
    $('.global__overlay').hide();
    $('.header__menu__side_h').hide();
})


$('.global__overlay,.header__menu__top_h .header__logo').click(function () {
    $('.global__overlay').hide();
    $('.header__menu__top_h').hide();
    $('.header__menu__side_h').hide();
})