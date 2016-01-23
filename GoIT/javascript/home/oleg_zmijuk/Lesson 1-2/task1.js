var x = +prompt ('Введите любое целое число');
var n = +prompt ('Введите степень');

function pow (a, b) {
    var result = 1;

    for ( var i = 0; i < b; i++ ) {
        result = result * a;
    }

    return result;
}

var powResult = pow(x, n);

console.log(powResult);