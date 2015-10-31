function createFunctions(n) {
    var callbacks = [];

    for (var i = 0; i < n; i++) {
        callbacks[i] = function (j) {
            return function () {
                return j
            };
        }(i);
    }

    return callbacks;
}