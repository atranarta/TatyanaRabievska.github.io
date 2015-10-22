var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function multiplyNumeric(obj) {
    var  multiplication = {};

    for (var key in obj) {
        if (!(NaN(obj[key]))) {
            multiplication[key] = (obj[key])*2;
        } else {
            multiplication[key] = obj[key];
        }
    }
    return multiplication;
}

console.log(multiplyNumeric(image));
