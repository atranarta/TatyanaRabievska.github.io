var arr = [];
do {
    var value = prompt('Введите число');
    if (isNaN(value) || value == null) {
        break;
    }
    arr.push(+value);

} while (true);

var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

