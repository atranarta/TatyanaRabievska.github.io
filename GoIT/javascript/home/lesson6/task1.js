obj = {
  className: 'my menu menu'
};

function removeClass(obj, cls) {
    var newLine = obj.className.split(' ');
    var arr = [];

    for (var i = 0; i < newLine.length; i++) {
        if (newLine[i] !== cls) {
            arr.push(newLine[i]);
        }
    }

    obj.className = arr.join(' ');
}

removeClass(obj, 'menu');

console.log(obj.className);
