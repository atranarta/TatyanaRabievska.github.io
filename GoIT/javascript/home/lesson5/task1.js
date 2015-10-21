var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};

function taskMaster(obj) {
    var result = 0;
    for (var key in obj) {
        if (obj[key] > result) {
            result = obj[key];
        }
    }
    return key + ': ' + result;
}

document.write(taskMaster(tasksCompleted));
