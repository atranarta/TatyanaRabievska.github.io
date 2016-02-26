// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};
 
  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
     
      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
       
        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +
       
        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
   
    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();
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
$(function() {
	var html = $('#templateHtml').html();
	
	var images = [
		{
			url: 'http://lorempixel.com/100/100/food/',
			content: 'Описание 1',
		},
		{
			url: 'http://lorempixel.com/100/100/animals/',
			content: 'Описание 2'
		},
		{
			url: 'http://lorempixel.com/100/100/city/',
			content: 'Описание 3'
		},
		{
			url: 'http://lorempixel.com/100/100/abstract/',
			content: 'Описание 4'
		},
		{
			url: 'http://lorempixel.com/100/100/people/',
			content: 'Описание 5'
		},
	];

	var content = tmpl(html, {
		data: images
		});

	$('body').append(content);
});
$(function() {
	$(".slider").slider();
});