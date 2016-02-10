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