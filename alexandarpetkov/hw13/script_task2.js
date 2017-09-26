// TASK 2 (result 1) - Homework #13

function avarageAge(list) {
    var ourYear = new Date().getFullYear();
    var result;
    var total = 0;
    var age;

    for (var n = 0; n < list.length; n++) {
        var noDied;
        var born = list[n].born;
        var died = list[n].died;

        if (died === undefined) {
            noDied = ourYear;
            age = noDied - born;

            // console.log(ageNoDied);
            // console.log(typeof(ageNoDied)); //=>  FOUR number
        } else {
            age = died - born;
            // console.log(ageDied);
            //     console.log(typeof(ageDied));
        }
        total += age;                       // !!!!! JENI add TOTAL and change ageNoDied and ageDied to age !!!!!
    }
    result = Math.round((total)/list.length);
    // console.log(result);
    return result;
    // returns the average age of all artists
}
console.log(avarageAge(artists)); // => 50

var task2 = document.getElementById('Task_2');
task2.innerHTML = avarageAge(artists);







// TASK 2 (result 2 FROM JENI) - Homework #13

// function avarageAge(list) {
//     var result;
//     var total = 0;
//     var age;

//     for (var n = 0; n < list.length; n++) {
//         var born = list[n].born;
//         var died = list[n].died;

//         age = (died||2016) - born;

//         total += age;
//     }

//     result = Math.round((total)/list.length);
//     // console.log(result);
//     return result;
//     // returns the average age of all artists
// }
// console.log(avarageAge(artists)); // => 50

