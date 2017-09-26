(function () {
    "use strict;"

    function convert(r, g, b) {
        var result;
        result = r.toString(16) + g.toString(16) + b.toString(16);
        return result;

    }

    console.log(convert(255, 192, 203));

    function circle(radius) {

        var result;

        result = 2 * Math.PI * radius;

        return Math.round(result);

    }

    console.log(circle(8));
})();