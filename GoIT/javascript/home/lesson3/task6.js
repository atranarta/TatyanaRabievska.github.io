function pow(x, n) {
    var result = 1;
    for (var i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

document.write(pow(3, 2));
