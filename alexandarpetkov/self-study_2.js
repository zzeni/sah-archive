/**
 * Created by sashopetkov on 11/18/16.
 */
//Задача 2 - word counter

//Напишете функция,
// която смята колко думи има в даден текст.

    //Пример:

var newText = "The COGITO FIT with activity tracking and essential notifications " +
"that puts style first and does not require recharging. Created for You. " +
"COGITO combines fun and functionality to fit your lifestyle for a more " +
"natural connected experience."

var text = "The quick brown fox jumps over the lazy dog";

function wordCounter (countText) {
    var myArray = countText.split(' ');
    var numberWords = 0;
    // console.log(myArray);
    for (var i = 0; i < countText.length; i++) {

        if (myArray[i] !== undefined) {
            numberWords ++;
         }

    }

    return numberWords;
}

console.log('the words in text are : ' + wordCounter(newText));
console.log('the words in sentence are : ' + wordCounter(text)); // 9