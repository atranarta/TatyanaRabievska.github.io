//var body = document.querySelector('body');
//
//var newOl = document.createElement('ol');
//body.appendChild(newOl);
//
//for (var j = 1; j <= 3; j++) {
//    var li = document.createElement('li');
//    li.innerHTML = "Вопрос №" + j;
//
//    for (var i = 1; i <= 3; i++) {
//        var label = document.createElement('label');
//        li.appendChild(label);
//        var checkBox = document.createElement('input');
//        checkBox.type = 'checkbox';
//        var labelSpan = document.createElement('span');
//        label.appendChild(checkBox);
//        label.appendChild(labelSpan);
//        labelSpan.innerHTML = "Вариант ответа №" + i;
//    };
//    
//    newOl.appendChild(li);
//
//};
//
//var button = document.createElement('button');
//button.innerHTML = "Проверить мои результаты";
//body.appendChild(button);


var app = {
    createElement: function(params) {
        var element = document.createElement(params.tagName);
        
        if (params.inputType) {
            element.setAttribute('type', params.inputType)
        } 
    
        element.className = params.className;
        element.innerHTML = params.content;
    
        if (params.parentElement) {
            params.parentElement.appendChild(element);
        }

        return element;   
    },
    
    generateQuestions: function(questionsAmount, answerAmount) {
        for (var i = 1; i <= questionsAmount; i++) {
            this.createElement({
                tagName: 'h2',
                content: 'Вопрос №' + i,
                parentElement: body
            })
        
            for (var j = 1; j <= answerAmount; j++) {
                var label = this.createElement({
                    tagName: 'label',
                    content: 'Вариант ответа №' + j,
                    parentElement: body
                })
                this.createElement({
                    tagName: 'input',
                    inputType: 'checkbox',
                    parentElement: label
                })
            }
        }
    }
};


var body = document.querySelector('body');

app.createElement({
    tagName: 'h1',
    className: 'title',
    content: 'Тест по программированию',
    parentElement: body
});

app.generateQuestions(3, 3);      

app.createElement({
    tagName: 'input',
    inputType: 'submit',
    className: 'check-results',
    content: 'Проверить мои результаты',
    parentElement: body
});


