var arr = [];

for (var i = 0; i < 5; i++) {
    arr[i] = prompt('Введите имя');
}

console.log(arr);

var userName = prompt('Введите имя пользователя');
var  flag = false;

for (i = 0; i < arr.length; i++) {
    if (arr[i] === userName) {
        flag = true;
    }
}

if (flag) {
    alert(userName + ' вы успешно вошли')
} else {
    alert('Ошибка! Такого пользователя не существует!')
}


