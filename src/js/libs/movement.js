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


var conf_sm="#sm1,#sm2,#sm3,#sm4,#sm5"
var conf_smxs="#sm1s,#sm2s,#sm3s,#sm4s,#sm5s"

$(conf_sm).hover(function(){
    $(conf_smxs).css('display','none');
    var x = this.id + "s";
    $('#'+x).css('display','flex');
})

var conf_submSide = '#submenu1,#submenu2,#submenu3,#submenu4,#submenu5,#submenu6';
var conf_topS = '.sub1,.sub2,.sub3,.sub4,.sub5,.sub6';

$(conf_topS).click(function(e){
    e.preventDefault();
    $(conf_submSide).css('display','none');
    $('#topmenu').css('display','none');
    var x = $(this).attr('class').substr(-1);   
    $('#submenu'+x).css('display','block')
})