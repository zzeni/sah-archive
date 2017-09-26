'use strict';
/**
 * Created by sashopetkov on 11/21/16.
 */

//Задача 4 - how old am I ?
//    Напишете функция,

// която да смята възрастта ми по подадена дата на раждане, като датата е стринг с формат 'DD-MM-YYYY'

//Пример:
//    console.log(howOldAmI('13-02-1956')); // "You are 60 years old"

//Предвидете, че трябва да се смятат навършени години спрямо днешна дата.
//Измислете резултат за случаите на прекалено далечна дата или пък дата в бъдещето.
//Също така изпишете "Happy birthday!" ако ивмам рожден ден.;

function tellAge(years, months, days) {
    return  'you are on: ' + years + ' years ' + months + ' months ' + 'and ' + days + ' days';
}

function howOldAmI(searchAge) {

    var myArray = searchAge.split('-');
    // console.log(myArray);
    var myDay = parseInt(myArray[0]);
    var myMonth = parseInt(myArray[1]);
    var myYear = parseInt(myArray[2]);

    var myDate = new Date((myYear), (myMonth+1), (myDay));
    var nowDate = new Date();
    var standYears = nowDate - myDate;
    // var years = Math.round(standYears/(1000*60*60*24*7*52));
    var years = nowDate.getFullYear() - myYear;
    var months = (nowDate.getMonth()+1) - myMonth;
    var days = nowDate.getDate() - myDay;

    var myAge;

    // HOW to DRY code ????

    if (days < 0) {
        myAge = tellAge(years, months, days);
        days = 30 + days;
        years = years - 1;
        months = 12 + months -1;

        if (months < 0) {
            months = 12 + Math.round((nowDate.getMonth()+1) - myMonth);
            years = years - 1;

            myAge = tellAge(years, months, days);
            // console.log(myAge)
        } else {

            myAge = tellAge(years, months, days);
            // console.log(myAge)
        }
    }else if (months < 0) {
        months = 12 + months;
        years = years - 1;

        myAge = tellAge(years, months, days);
        // console.log(myAge)
    } else {
        myAge = tellAge(years, months, days);
        // console.log(myAge)
    }
    // BIRTH-DAY
    if (months == 0 && days == 0) {
        console.log(myAge = tellAge(years, months, days) + '   Happy birthday!!!')
    }
        return myAge;

}
console.log(howOldAmI('12-09-1958'));
//
console.log(howOldAmI('17-05-1988'));
// console.log(howOldAmI('21-11-1984'));
console.log(howOldAmI('26-11-1986'));
console.log(howOldAmI('03-05-1986'));

console.log(howOldAmI('23-11-1946'));



// new Date().setFullYear(parseInt(myArray[2]))

