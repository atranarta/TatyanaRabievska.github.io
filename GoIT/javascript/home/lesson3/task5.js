var n, j;

function bordSize(x, y) {
    for (n = 0; n < x; n++) {
        if (n % 2 !== 0) {
            for (j = 0; j < y; j++) {
                if (j % 2 !== 0) {
                    document.write('#');
                } else {
                    document.write('&nbsp');
                }
            }
        } else {
            for (j = 0; j < y; j++) {
                if (j % 2 === 0) {
                    document.write('#');
                } else {
                    document.write('&nbsp');
                }
            }
        }
        document.write('<br/>');
    }
}
bordSize(8, 8);