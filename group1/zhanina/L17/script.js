$('input[name=username]').blur(function () {
    //    alert("something");
    var value = $('input[name=username]').val();
    var ajax = $.ajax({
        method: "get",
        url: "http://zenifytheweb.com/api/examples/check_username",
        data: {
            username: value
        }

    });
    ajax.done(function (response) {
        //        console.log(response);
        var result = JSON.parse(response);
        if (result['available'] === true) {
            alert('oki');
        } else {
            alert('username is taken');
        }
    });
});