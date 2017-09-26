/**
 * Created by sashopetkov on 11/18/16.
 */

//Задача 3 - capitalizer

//Напишете функция,
// която да прави всяка дума от един текст да започва с главна буква.

//    Пример:

var text = "The quick brown fox jumps over the lazy dog";
var newText = 'The answer isn’t obvious now, but there are many potential applications for a ' +
    'fully-developed chemical communication system in the future.';

function capitalize(thisText) {
    var myNewArray = thisText.split(' ');
    // console.log(myNewArray);
    var newSentence = '';

    for (var i=0; i < myNewArray.length; i++) {
       // var capLetter = myNewArray[i].charAt(0).toUpperCase() + myNewArray[i];
       // console.log(capLetter);
       var capFirstLetter = myNewArray[i].charAt(0).toUpperCase();
       var capWord = capFirstLetter + myNewArray[i].slice(1, myNewArray[i].length);
        newSentence += capWord + ' ';
        // console.log(typeof (capWord));
        // console.log(typeof (newSentence));
        // console.log(capWord);
    }
        // console.log(newSentence);

    return newSentence;

}

console.log(capitalize(text)); // "The Quick Brown Fox Jumps Over The Lazy Dog"
console.log(capitalize(newText));