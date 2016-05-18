(function () {
    "use strict";

    function calcAge(day, month, year) {
        var age = 0,
            date = "16.5.2016",
            parts = date.split(".");

        if (month > parts[1]) {
            age = parts[2] - year - 1;
        }
        if (month < parts[1]) {
            age = parts[2] - year;
        }
        if (year >= 2016 && month > 5) {
            age = "This is in the future!";
        }
        return age;

    }


    function calcAge2(str) {
        var nowAdate = "16-05-2016",
            parts = nowAdate.split("-"),
            birthDay = str.split("-"),
            result = calcAge(birthDay[0], birthDay[1], birthDay[2]);
        return result;
    }


})();