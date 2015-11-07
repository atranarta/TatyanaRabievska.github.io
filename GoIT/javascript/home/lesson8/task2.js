function Calculator() {
    {
        var expression = {
            '-': function (a, b) {
                return a - b;
            },

            '+': function (a, b) {
                return a + b;
            }
        };


        this.calculate = function (str) {

            var split = str.split(' '),
                a = +split[0],
                op = split[1],
                b = +split[2];

            if (!expression[op] || isNaN(a) || isNaN(b)) {
                return NaN;
            }

            return expression[op](+a, +b);
        };

        this.addMethod = function (name, func) {
            expression[name] = func;
        };
    }
}

var calc = new Calculator;

calc.addMethod("*", function (a, b) {
    return a * b;
});
calc.addMethod("/", function (a, b) {
    return a / b;
});
calc.addMethod("**", function (a, b) {
    return Math.pow(a, b);
});

var result = calc.calculate("2 ** 3");
alert(result);