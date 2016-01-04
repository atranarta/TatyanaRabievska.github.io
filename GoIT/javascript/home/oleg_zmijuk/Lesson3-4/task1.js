var myBody = document.querySelector('body');

var newOl = document.createElement('ol');
myBody.appendChild(newOl);
console.log(myBody);

for (var j = 1; j <= 3; j++) {
    var li = document.createElement('li');
    li.innerHTML = "Вопрос №" + j;

    for (var i = 1; i <= 3; i++) {
        var label = document.createElement('label');
        li.appendChild(label);
        var checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        var labelSpan = document.createElement('span');
        label.appendChild(checkBox);
        label.appendChild(labelSpan);
        labelSpan.innerHTML = "Вариант ответа №" + i;
    };
    
    newOl.appendChild(li);

};

var button = document.createElement('button');
button.innerHTML = "Проверить мои результаты";
myBody.appendChild(button);

