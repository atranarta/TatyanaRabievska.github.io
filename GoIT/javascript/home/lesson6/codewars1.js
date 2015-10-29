function getMissingElement(superImportantArray) {
    superImportantArray = superImportantArray.sort();
    for (var i = 0; i < 10; i++) {
        if (superImportantArray[i] != i) return i;
    }
}

getMissingElement( [0, 5, 1, 3, 2, 9, 7, 6, 4] );
