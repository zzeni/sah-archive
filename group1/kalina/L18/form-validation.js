$("input[name=username]").blur(function () {
    var username = $("input[name=username]").val();
    alert(username);

    var ajax = $.ajax({
        method: "get",
        url: "http://zenifytheweb.com/api/examples",
        data: {
            username: username
        }
    });

    ajax.done(function (response) {

        var result = JSON.parse(response);
        console.log(response);

        if (result["available"] === true) {
            alert("user name is free");
        } else {
            alert("user name is already taken, please try again...");
        }
    });
});