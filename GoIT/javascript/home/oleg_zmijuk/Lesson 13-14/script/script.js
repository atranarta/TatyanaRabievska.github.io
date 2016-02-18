$(function () {

    'use strict';

    var html = $('#test').html();

    var questions = [
        {
            'id': 1,
            'text': 'Какого тега НЕ существует:',
            'answers': [
                '&#60pre&#62;',
                '&#60p&#62;',
                '&#60adress&#62;'
                ],
            'correctAnswer': 3
    },
        {
            'id': 2,
            'text': 'Николаю захотелось добавить несколько подряд идущих пробелов в тексте. Он добавил их внутри тега &#60;p&#62;. Однако, они вырезались. Какой тег надо использовать Николаю, чтобы пробелы не вырезались?',
            'answers': [
                '&#60code&#62;',
                '&#60pre&#62;',
                '&#60span&#62;'
            ],
            'correctAnswer': 2
    },
        {
            'id': 3,
            'text': 'Какой тег является дочерним для &#60;!DOCTYPE&#62;:',
            'answers': [
                '&#60html&#62;',
                '&#60head&#62;',
                'Никакой.'
            ],
            'correctAnswer': 3
    }
    ];

    localStorage.setItem('questions', JSON.stringify(questions));

    var local = localStorage.getItem('questions');
    local = JSON.parse(local);

    var content = tmpl(html, {
        local: questions
    });

    $('[type=submit]').before(content);

    $('input:checkbox').on('click', function () {
        $(this).parent().siblings().children().filter(':checked').removeAttr('checked');
    });

    var submit = $('input[type="submit"]');
    submit.on('click', checkAnswer);

    function checkAnswer() {

        var choice = [];
        var testBlock = $('li');

        $('li input:checkbox:checked').each(function () {

            choice.push(+$(this).val());

        });



        var result = [];

        for (var i = 0; i < local.length; ++i) {

            if (choice[i] != questions[i].correctAnswer) {
                result[i] = '<span style="color:red">Ответ не правильный!</span>';
            } else {
                result[i] = '<span style="color:green">Правильно!</span>';
            };

        };




        var modal = $('<div class="modal"><h1>Результаты теста</h1></div>');
        var paranja = $('<div class="paranja"></div>');

        var wrap = $('.wrap');

        wrap.append(paranja);
        wrap.append(modal);

        for (var j = 0; j < testBlock.length; j++) {

            var questionsBox = $('<div class="questions-box">' + (j + 1) + '.' + local[j].text + '</div>');
            modal.append(questionsBox);
            var answersBox = $('<div class="answers-box">' + result[j] + '</div>');
            modal.append(answersBox);

        }

        var reset = $('<a href="" class="button" id="reset">Закрыть и очистить</a>');
        modal.append(reset);
        var exit = $('#reset');

        function resetTest() {

            $('input:checkbox').prop('checked', false); 
            modal.remove();
            paranja.remove();
            return false;

        };

        exit.on('click', resetTest);

        event.preventDefault();

    };

});