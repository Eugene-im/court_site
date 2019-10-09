const conf = '.obl__3,.obl__0,.obl__2,.obl__1';
const conf2 = '.logo__3,.logo__0,.logo__2,.logo__1';
const color1 = '#3D5798';
const color2 = '#ffffff';
const color3 = '#F3E3C4';
const slider = $("#slickGlobal");
const slider_news = '.news__slider';
const slider_news_trial = '.news__trial__slider';
const menu = '.side__menu__block_v2';
const slider_court = '.court__info__slider__block';
const slickconf = {
    infinite: false,
    arrows: false,
    autoplay: false,
    vertical: true,
    verticalSwiping: true
};
const conf_court = {
    infinite: true,
    arrows: false,
    autoplay: true
};
const conf_news = {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    autoplay: true,
    responsive: [{
            breakpoint: 1080,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 670,
            settings: {
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1
            }
        }

    ]
};

function hov(part) {
    $(slider_court).slick('slickGoTo', part);
    $('.obl__' + part).attr("fill", color1);
    $('.logo__' + part).attr("fill", color2);
};

function unhov(part) {
    $('.obl__' + part).attr("fill", color3);
    $('.logo__' + part).attr("fill", color1);
};

function unhov_all() {
    $(conf).attr("fill", color3);
    $(conf2).attr("fill", color1);
};

function mouseWheel(slider) {
    $(window).on('wheel', {
        slider: slider
    }, mouseWheelHandler);
};

function mouseWheelHandler(event) {
    event.preventDefault();
    const slider = event.data.slider;
    const delta = event.originalEvent.deltaY;
    if (slider.slick('slickCurrentSlide') != 0 || slider.slick('slickCurrentSlide') != 5) $(menu).addClass('top');
    if (delta > 0) {
        if (slider.slick('slickCurrentSlide') == 5) $(menu).removeClass('top')
        slider.slick('slickNext');
    } else {
        if (slider.slick('slickCurrentSlide') == 0) $(menu).removeClass('top');
        slider.slick('slickPrev');
    }
}

function change_obl() {
    var x = $(this).slick('slickCurrentSlide');
    var y = conf.split(',');
    for (var i = 0; i < y.length; i++) {
        unhov(i);
    }
    hov(x);
};

slider.on('swipe',function(){
    if (slider.slick('slickCurrentSlide') != 0 || slider.slick('slickCurrentSlide') != 5) $(menu).addClass('top');
    if (slider.slick('slickCurrentSlide') == 0) $(menu).removeClass('top');
    if (slider.slick('slickCurrentSlide') == 5) $(menu).removeClass('top');
});


$(conf).mouseover(function () {
    $(slider_court).slick('slickPause');
    var part = $(this).attr('class').substr(-1);
    unhov_all();
    hov(part);
});
$(conf).mouseenter(function () {
    $(slider_court).slick('slickPause');
    var part = $(this).attr('class').substr(-1);
    hov(part);
});

$(conf).mouseleave(function () {
    $(slider_court).slick('slickPlay');
});

// slider.on('init', () => {
//     mouseWheel(slider)
// }).slick(slickconf);

$(slider_court).on('afterChange', change_obl).slick(conf_court);

$(slider_news).slick(conf_news);
$(slider_news_trial).slick(conf_news);