/**
 * Код кастомного слайдера для блока ST301N - "Карточки продуктов с кнопками и фоном + Popup с подробной информацией"
 * Разработка: Данил Савченко
 */

$(document).ready(function() {
    
    /**
     * Настройки
     */

    // ID блока с отзывами
    var spikers_block_id = 'rec236909276';

    /**
     * Код скрипта
     */

    var s_block = $('#' + spikers_block_id);

    var s_container = s_block.find('.t-container').last().hide();

    var s_items = s_block.find('.t-col');

    s_items.css({
        display: 'block',
        float: 'none',
        maxWidth: '100%',
        margin: 0,
    });

    var slider = $('<div class="t-container" style="overflow: hidden;"></div>');

    s_items.appendTo(slider).wrap('<div style="padding: 0 5px; outline: none;"></div>');
    s_container.after(slider);

    slider.slick({
        dots: false,
        dotsClass: 'slick-dots review-dots',
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="t-slds__arrow t-slds__arrow-left t-slds__arrow-withbg" style="z-index: 99; box-shadow: 0 0 20px rgba(0,0,0, .2); cursor: pointer; width: 30px; height: 30px;background-color: rgba(255,255,255,1);"> <div class="t-slds__arrow_body t-slds__arrow_body-left" style="width: 7px;"> <svg style="display: block" viewBox="0 0 7.3 13" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <desc>Left</desc> <polyline fill="none" stroke="#222" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="1" points="0.5,0.5 6.5,6.5 0.5,12.5"></polyline> </svg> </div> </div>',
        nextArrow: '<div class="t-slds__arrow t-slds__arrow-right t-slds__arrow-withbg" style="z-index: 99; box-shadow: 0 0 20px rgba(0,0,0, .2); cursor: pointer; width: 30px; height: 30px;background-color: rgba(255,255,255,1);"> <div class="t-slds__arrow_body t-slds__arrow_body-right" style="width: 7px;"> <svg style="display: block" viewBox="0 0 7.3 13" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <desc>Right</desc> <polyline fill="none" stroke="#222" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="1" points="0.5,0.5 6.5,6.5 0.5,12.5"></polyline> </svg> </div> </div>',
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            },
        ]
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide){
        // TODO: Solve lazy load avatars problem
        // $(document).scrollTop($(document).scrollTop() + (currentSlide % 2 || -1))
    });;

});