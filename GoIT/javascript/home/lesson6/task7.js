function anClean(originalWords) {
    var sortedWords = {};

    for (var i = 0; i < originalWords.length; i++) {
        var sortedWord = originalWords[i].toLowerCase().split('').sort().join('');

        sortedWords[sortedWord] = originalWords[i];

    }

    var result = [];

    for (var key in sortedWords) {
        result.push(sortedWords[key]);
    }

    return result;
}

var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

console.log(anClean(arr));
