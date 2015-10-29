function getVillainName(birthday){
    var monthPhrase = ['The Evil', 'The Vile', 'The Cruel', 'The Trashy', 'The Despicable', 'The Embarrassing',
        'The Disreputable', 'The Atrocious', 'The Twirling', 'The Orange', 'The Terrifying', 'The Awkward'];

    var daysPhrase = ['Mustache', 'Pickle', 'Hood Ornament', 'Raisin', 'Recycling Bin', 'Potato', 'Tomato', 'House Cat',
        'Teaspoon', 'Laundry Basket'];

    var monthString = monthPhrase[birthday.getMonth()];

    var day = birthday.getDate();

    var dayString = daysPhrase[day.toString().slice(-1)];

    return monthString + ' ' + dayString;

}

var date = new Date(1984, 10, 18);

console.log(getVillainName(date));