    sum = 0;
    let array = [1, 2, 3, 4, 5, 6];

    function sumum(array) {
        for (var i = 0; i < array.length; i++) {
            sum = sum + array[i];
        }
        return sum;
    }


    console.log(sumum(array));

    sum = 0;

    function sumEven(array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] % 2 == 0) {
                sum = sum + array[i];
            }
        }
        return sum;
    }

    console.log(sumEven(array));

    sum = 0;

    function sumOdd(array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] % 2 != 0) {
                sum = sum + array[i];
            }
        }
        return sum;
    }

    console.log(sumOdd(array));
