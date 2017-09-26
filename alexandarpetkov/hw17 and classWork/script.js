
var inputField = document.getElementsByTagName('p')[0];

        // BUTTONS
$('#number > div:first-child').click(
    function () {
        inputField.innerHTML += 1;
    }
);
$('#number > div:nth-of-type(2)').click(
    function () {
        inputField.innerHTML += 2;
    }
);
$('#number > div:nth-of-type(3)').click(
    function () {
        inputField.innerHTML += 3;
    }
);
$('#number > div:nth-of-type(4)').click(
    function () {
        inputField.innerHTML += 4;
    }
);
$('#number > div:nth-of-type(5)').click(
    function () {
        inputField.innerHTML += 5;
    }
);
$('#number > div:nth-of-type(6)').click(
    function () {
        inputField.innerHTML += 6;
    }
);
$('#number > div:nth-of-type(7)').click(
    function () {
        inputField.innerHTML += 7;
    }
);
$('#number > div:nth-of-type(8)').click(
    function () {
        inputField.innerHTML += 8;
    }
);
$('#number > div:nth-of-type(9)').click(
    function () {
        inputField.innerHTML += 9;
    }
);
$('#number > div:nth-of-type(11)').click(
    function () {
        inputField.innerHTML += 0;
    }
);

        //CLEAR
$('#number > div:nth-of-type(10)').click(
    function () {
        inputField.innerHTML = '' ;
    }
);

        // OPERATORS

$('#operators > div:nth-of-type(1)').click(
    function () {
        inputField.innerHTML += '*';
    }
);
$('#operators > div:nth-of-type(2)').click(
    function () {
        inputField.innerHTML += '/';
    }
);
$('#operators > div:nth-of-type(3)').click(
    function () {
        inputField.innerHTML += ' + ';
    }
);
$('#operators > div:nth-of-type(4)').click(
    function () {
        inputField.innerHTML += '-';
    }
);

            // EVAL

$('#number > div:nth-of-type(12)').click(
    function () {
        inputField.innerHTML = eval(inputField.innerHTML) ;
    }
);

        // DECIMAL point

$('#point').click(
    function () {
        inputField.innerHTML += '.';
    }
);




// function () {
//     for (i=0; i<10; i++) {
//         console.log(i);
//         $('#wrapper p').text(writeNumber*[++i]);
//     }
// }