/**
 * Created by sashopetkov on 11/22/16.
 */
// Чък Норис решил да си направи secret key, такъв че никой да не може да му го познае.
//     Само че, докато го писал, нещо се зазяпал в методите, те се изплашили и се разбягали.
//     Скрили се в един array с име methods, а на местата им останали само питанки..
//
//     Помогни на Чък Норис да си върне методите по местата, за да може да си гнерира ключа!
//     Той ще ти бъде много благодарен, защото така ще има повече време за спасяване на света! :)
'use strict';
var methods = ['charAt', 'reverse', 'round', 'join', 'split', 'charAt'];
var myName = "Chuck Norris";
var myBirthYear = 1940;
var myImmortalityIndex = 99.99;
var myAge = Math.round(myBirthYear*myImmortalityIndex);
var mySecretCode = myName.charAt(0) + myAge + myName.charAt(6);
var result = mySecretCode.split('').reverse().join('');
// console.log(mySecretCode);


// var myResult = document.getElementById('result');
// myResult.innerHTML = result;
// var myKey = document.getElementById('key');
// myKey.innerHTML = 1479745728;

// Изпрати ми резултата на url http://zenlabs.pro/api/game/complete.
    // Използвай параметър result за решението и key за твоя персонален код.
    //
    // Заявката трябва да е в get формат!

