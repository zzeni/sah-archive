$('input[name=username]').blur(function() {
    var username = $('input[name=username]').val();

    var ajax = $.ajax({
        method: "get",
        url: "http://zenifytheweb.com/api/examples/check_username",
        data: {
            username: username
        }
    });

    ajax.done(function(response) {
        var result = JSON.parse(response);
        console.log(result);

        if (result['available'] === true) {
            alert("ok!");
        } else {
            alert("username is taken!")
        }
    });

    //    console.log("we have to check if " + username + " is available");
//    za domashno -> da ukrasim formata, da se ocvetqvat poletata...
});