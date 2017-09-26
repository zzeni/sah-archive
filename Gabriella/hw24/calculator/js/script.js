(function () {
    "use strict";

    var buttonsNumContainer = $('#buttons .numbers');

    "1234567890".split("").forEach(function (num) {
        var numHtml = "<li><input type=\"button\" class=\"btn number\" value=\"" + num + "\"></li>";
        if (num === "0") {
            // on the last row, we need to add two special buttons
            var plusmin = numHtml.replace(num, "&plusmn;");
            var decimal = numHtml.replace(num, ".");
            buttonsNumContainer.append(plusmin);
            buttonsNumContainer.append(numHtml);
            buttonsNumContainer.append(decimal);
        } else {
            buttonsNumContainer.append(numHtml);
        }

    });

    var currentOperator = "";
    var num1 = "";
    var num2 = "";
    var delimiterUsed = false;

    $(".number").unbind().click(function () {
        if (delimiterUsed && $(this).val() == "." ||
            $(this).val() == "\xB1" && $(".result").html() == "0") {
            return;
        } else if ($(this).val() == ".") {
            delimiterUsed = true;
        } else if ($(".result").html() == "0" && $(this).val() != ".") {
            $(".result").html("");
        } else if ($(this).val() == "\xB1") {
            $(".result").html($(".result").html() * (-1));
            return;
        }
        $(".result").html($(".result").html() + $(this).val());

    })

    $("#clear").click(function () {
        $(".result").html("0");
    })

    $(".operator").click(function () {
        if ($(".result").html() == 0) {
            return;
        }
        currentOperator = $(this).attr("operator");
        num1 = $(".result").html();
        $(".result").html("");
        delimiterUsed = false;
    })

    $("#calc").click(function () {
        if (currentOperator == "") {
            return;
        }
        num2 = $(".result").html();
        $(".result").html(calculate(num1, num2, currentOperator));
        currentOperator = "";
        num1 = "";
        num2 = "";
        delimiterUsed = false;
    })

    function calculate(num1, num2, operator) {
        var result;
        switch (operator) {
        case "plus":
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case "minus":
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case "multiply":
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case "divide":
            result = parseFloat(num1) / parseFloat(num2);
            break;
        case "intDivision":
            result = parseFloat(num1) % parseFloat(num2);
            break;
        default:
            result = "error";
            break;
        }
        return result;
    }
})();