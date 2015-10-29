function isPal(str) {
    str = str.toLowerCase().split("").join("").split(" ").join("");
    var strReverse = str.reverse().join("").split(" ").join("");
    if (strReverse == str) {
        return 'true';
    } else {
        return 'false';
    }
}

test = isPal('Anna');
test2 = isPal('А роза упала на лапу Азора');
test3 = isPal('Вася');
test4 = isPal('1234321');

console.log(test);
console.log(test2);
console.log(test3);
console.log(test4);
