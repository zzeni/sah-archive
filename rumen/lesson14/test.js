function evenCheck(array) {
    var len = array.length,
        i;
    for (i = 0; i < len; i += 1) {
        if (!!(array[i] % 2)) {
            return false;
        }
    }
    return true;
}
array = [2, 1, 16, 3, 9];
document.write("<p>Резултатът, от проверка за четни числа с for цикъл в списка " + `[${array}]` + ", е: " + evenCheck(array) + "</p>");

function whileCheckEven(array) {
    var len = array.length,
        i = 0;
    while (i < len) {
        if (array[i] % 2 === 1) {
            return false;
        }
        i += 1;
    }
    return true;
}
document.write("<p>" + "Резултата от от проверка за четни числа с while цикъл в списъка " + `[${array}]` + " е: " + whileCheckEven(array) + "</p>");

function sum(array) {
    var len = array.length,
        i,
        sum = 0,
        sumEven = 0,
        sumOdd = 0;
    for (i = 0; i < len; i += 1) {
        sum += array[i];
        if (!!(array[i] % 2)) {
            sumOdd += array[i];
        } else {
            sumEven += array[i];
        }
    }
    return [sum, sumOdd, sumEven];
}
document.write("<p>Сумата на списъка е: " + `${sum(array)[0]}` + " <br> Сумата на нечетните е: " + `${sum(array)[1]}` + "<br> Сумата на четните е: " + `${sum(array)[2]}` + "</p>");
