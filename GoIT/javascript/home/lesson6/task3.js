var arr = [1, 2, 3, 4, 5];

function sortRandom() {
    return Math.round(Math.random());
}

arr.sort(sortRandom);

console.log(arr);