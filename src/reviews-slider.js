/**
 * Код кастомного слайдера с отзывами
 * Разработка: Данил Савченко
 */

$(document).ready(function() {
    
    /**
     * Настройки
     */

    // ID блока с отзывами
    var reviews_block_id = 'rec236909284';
    // ID блока с попапом
    var reviews_popup_id = 'rec237710500';

    /**
     * Настройки скрипта
     */

    var _POPUP_TYPES = {
        text: 'text',
        video: 'video',
    }
    var MORE_LINK_SELECTOR = 'a[href^="#review"]'

    /**
     * Код скрипта
     */

    var URL_REGEX = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

    var r_popupLink = $('#reviews-popup-link');
    
    var r_block = $('#' + reviews_block_id);
    var r_popup_block = $('#' + reviews_popup_id);

    var r_container = r_block.find('.t-container').last().hide();

    var r_items = r_block.find('.t533__col');

    r_items
    .each(function(idx) {
        var $this = $(this),
            text_wrapper = $this.find('.t533__descr');

        var popup_link = text_wrapper.find(MORE_LINK_SELECTOR);

        if (!popup_link[0]) return;

        var type = popup_link.attr('href').split('-')[1];
        var data = text_wrapper.html().split(popup_link[0].outerHTML);

        var popup_data = data[1] &&
            type === _POPUP_TYPES.text ? data[1] :
            type === _POPUP_TYPES.video ? '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="' + data[1].match(URL_REGEX)[0] + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>' :
            null;

        text_wrapper.on('click', MORE_LINK_SELECTOR, function(e) {
            e.preventDefault();

            console.log(popup_data);
            
            r_popup_block.find('.t390__uptitle')
                .html($this.find('.t533__uptitle').html());

            r_popup_block.find('.t390__title')
                .html($this.find('.t533__title').html());

            var c_wrapper = r_popup_block.find('.t390__wrapper');
            c_wrapper.prevAll().remove();

            if (type === _POPUP_TYPES.text) {
                r_popup_block.find('.t390__descr').html(popup_data);
            } else if (type === _POPUP_TYPES.video) {
                c_wrapper.before(popup_data);
            } else {
                return;
            }

            r_popupLink.click();
        })

        text_wrapper.empty().append(data[0], popup_link);
    })
    .css({
        display: 'block',
        float: 'none',
        maxWidth: '100%',
        margin: 0,
    });

    var slider = $('<div class="reviews-slider t-container" style="overflow: hidden;"></div>');

    r_items.appendTo(slider).wrap('<div style="padding: 0 5px; outline: none;"></div>');
    r_container.after(slider);

    slider.slick({
        dots: true,
        dotsClass: 'slick-dots review-dots',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
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