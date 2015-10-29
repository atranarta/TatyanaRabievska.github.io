function unique(arr) {
    var result = [];

    nextItem:

        for (var i = 0; i < arr.length; i++) {
            var string = arr[i];

            for (var j = 0; j < result.length; j++) {
                if (result[j] == string) continue nextItem;
            }

            result.push(string);

        }

    return result;
}

var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()'];

console.log(unique(strings));
