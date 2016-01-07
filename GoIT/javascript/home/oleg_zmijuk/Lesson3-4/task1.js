var app = {
    createElement: function(params) {
        var element = document.createElement(params.tagName);
        
        if (params.inputType) {
            element.setAttribute('type', params.inputType)
        } 
        
        if (params.value) {
            element.setAttribute('value', params.value)
        } 
    
        if (params.className) {
            element.className = params.className;
        }
        
        if (params.content) {
            element.innerHTML = params.content;
        }
    
        if (params.parentElement) {
            params.parentElement.appendChild(element);
        }

        return element;   
    },
    
    generateQuestions: function(questionsAmount, answerAmount) {
        for (var i = 1; i <= questionsAmount; i++) {
            var li = this.createElement({
                tagName: 'li',
                content: 'Вопрос №' + i,
                parentElement: ol
            })
        
            for (var j = 1; j <= answerAmount; j++) {
                var label = this.createElement({
                    tagName: 'label',
                    className: 'checkbox block',
                    content: '<input type="checkbox" class="checkbox" /> Вариант ответа №' + j,
                    parentElement: li
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

var form = app.createElement({
    tagName: 'form',
    parentElement: body
});

var ol = app.createElement({
    tagName: 'ol',
    parentElement: form
});

app.generateQuestions(3, 3);      

app.createElement({
    tagName: 'input',
    inputType: 'submit',
    className: 'check-results btn btn-default',
    value: 'Проверить мои результаты',
    parentElement: form
});