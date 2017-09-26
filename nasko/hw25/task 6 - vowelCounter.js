var text = "Напишете функция, която да преброява гласните букви в даден текст (а, ъ, о, у, е, и, ю, я)";
//Loved this function. So neat and simple.
function vowelCounter(text){
    var countVowels =text.match(/[аъоуеиюя]/gi).length;
    return countVowels;
}

console.log(vowelCounter(text)); // 31