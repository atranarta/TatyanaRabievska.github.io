jQuery(document).ready(function () {

    jQuery('#form').submit(function () {

        var urlFull = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q=' + encodeURIComponent(jQuery('#question').val()) + '&callback=GoogleCallback&context=?';

        jQuery.ajax({
            url: urlFull,
            dataType: "jsonp",
            success: function (data, textStatus) {
                var ul = document.createElement("ul");
                jQuery.each(data.results,
                    function (i, val) {
                        var li = document.createElement("li");
                        li.innerHTML = '<a href="' + val.url + '" title="' + val.url + '" target="_blank">' + val.title + "</a> - " + val.content;
                        ul.appendChild(li);
                    }
                );
                jQuery('#results').html(ul);
            }
        });
        return false;
    });

});

function GoogleCallback(func, data) {
    window[func](data);
}





var Human = {
    name: 'Valeriy',
    age: 28,
    sex: 'male',
    height: 178,
    weight: 73
};

var Worker = {
    job: 'Flixbus',
    salary: 75000,
    toWork: function () {
        alert('Give me my computer! I need some work!');
    }
};

var Student = {
    university: 'LP',
    payment: 500,
    toWatch: function () {
        alert('I don`t want to study!');
    }
};

Worker.__proto__ = Human;
Student.__proto__ = Human;

var Tanya = Object.create(Worker, {
    name: {
        value: 'Tanya'
    },
    salary: {
        value: 30000
    },
    age: {
        value: 26
    },
});

var Katya = Object.create(Student);
Katya.name = 'Katya';
Katya.age = 18;
Katya.weight = 58;

console.log('Human ', Human);
console.log('Worker ', Worker);
console.log('Student ', Student);

console.log(Tanya.name + ' is ' + Tanya.age + ' years old and she wants to work in ' + Tanya.job + ' and receive ' + Tanya.salary + ' €/month');
console.log(Katya.name + ' is a student. She is ' + Katya.age + ' and she studies at the ' + Katya.university + '. She receives ' + Katya.payment + ' UAH/month. ' + Katya.name + ' is poor but happy.');