var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function multiplyNumeric(obj) {

    for (var key in obj) {
        (!(isNaN(obj[key]))) ? obj[key] = obj[key]*2 : obj[key] = obj[key];
    }
    return obj;
}

console.log(multiplyNumeric(image));



