/*
$('form').find('[name=username]').blur(function (e) {
    e.preventDefault();
    var ajaxProperties = {
        url: "http://zenifytheweb.com/api/examples/check_username",
        method: "get",
        data: {
            username: $(this).val()
        }
    }
    var ajax = $.ajax(ajaxProperties);

    ajax.done(function (response) {
        if (response === "available") {
            console.log(succ);
        };
    });

    ajax.fail(function (error) {
        console.log(error);
    });
});
*/


$('input[name="username"]').blur(function (e) {
    e.preventDefault();
    var ajaxProperties = {
        url: "http://zenifytheweb.com/api/examples/check_username",
        method: "get",
        data: {
            username: $(this).val()
        }
    }
    var ajax = $.ajax(ajaxProperties);

    ajax.done(function (response) {
        var label = $('label[for="username"]');
        var span = label.find('span');
        var box = $('input[name="username"]');

        if (response === "available") {
            box.addClass("success");
            if (span.length > 0) {
                span.text('OK!');
            } else {
                label.append('<span>Username is available!</span>');
            }
        } else {
             box.addClass("error")
             box.removeClass("success")
            if (span.length > 0) {
                span.text('Username is taken!');
            } else {
                label.append('<span>Username is taken!</span>');
            }
        }
    });
});