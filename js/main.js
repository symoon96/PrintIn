let visualImg;
let portfolioSwiper = undefined;

$(window).on('load',function(){
    visualImg = $('.main .visual img');
});

$(document).ready(function(){
    visualImg = $('.main .visual img');
    imgChange(visualImg);

    let visualSwiper = new Swiper(".main .visual .swiper", {
        navigation: {
            nextEl: ".main .visual .swiper-button-next",
            prevEl: ".main .visual .swiper-button-prev",
        },
        pagination: {
            el: ".main .visual .swiper-pagination",
        },
        loop: true,
    });

    responsivePortfolio()
})

/* 반응형 */
$(window).resize(function () {
    imgChange(visualImg);
    responsivePortfolio();
});

/* 이미지 자동변환 */
function imgChange(object) {
    $(object).each(function () {
        let srcName = $(this).attr('data-pc');
        let newSrc = $(this).attr('data-mobile');
        if ($(window).width() < 720) {
            $(this).attr('src', newSrc);
        } else {
            $(this).attr('src', srcName);
        }

    });
}

function responsivePortfolio(){
    if ($(window).width() < 720 && portfolioSwiper == undefined) {
        portfolioSwiper = new Swiper(".main .portfolio .swiper", {
            slidesPerView: 'auto',
            grid: {
                rows: 2,
            },
            spaceBetween: 15,
        });
    } else {
        portfolioSwiper.destroy();
        portfolioSwiper = undefined;
    }
    
}