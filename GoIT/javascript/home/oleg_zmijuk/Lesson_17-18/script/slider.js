(function ($) {

    $.fn.slider = function (options) {
        var slideWrap = $('.slide-wrap');
        var nextLink = $('.next-slide');
        var prevLink = $('.prev-slide');
        var slideWidth = $('.slide-item').outerWidth();
        var scrollSlider = slideWrap.position().left - slideWidth;

        function clickNextSlider() {
            nextLink.click(function () {
                if (!slideWrap.is(':animated')) {
                    slideWrap.animate({
                        left: scrollSlider
                    }, 50, function () {
                        slideWrap
                            .find('.slide-item:first')
                            .appendTo(slideWrap)
                            .parent()
                            .css({
                                'left': 0
                            });
                    });
                }
            });

            prevLink.click(function () {
                if (!slideWrap.is(':animated')) {
                    slideWrap
                        .css({
                            'left': scrollSlider
                        })
                        .find('.slide-item:last')
                        .prependTo(slideWrap)
                        .parent()
                        .animate({
                            left: 0
                        }, 50);
                }
            });

        }

        clickNextSlider();
    };


})(jQuery);