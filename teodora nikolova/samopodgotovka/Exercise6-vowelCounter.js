"use strict";

var text = "Напишете функция, която да преброява гласните букви в даден текст (а, ъ, о, у, е, и, ю, я)";

function vowelCounter(text) {
    //var separator = text.split(' ');
    var counter = 0;
    for (var i = 0; i <= text.length; i++) {
        var symbol = text.charAt(i);
        console.log(symbol);
        if (symbol == 'а' || symbol == 'ъ' ||
            symbol == 'о' || symbol == 'у' ||
            symbol == 'е' || symbol == 'и' ||
            symbol == 'ю' || symbol == 'я')
        {
            counter += 1;
        }
    }
    return counter;
}
console.log(vowelCounter(text)); // 31