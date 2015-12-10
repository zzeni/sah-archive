$(document.registrationForm.username).blur(function () {
    var ajaxProperties = {
        url: "http://zenifytheweb.com/api/examples/check_username",
        method: "GET",
        data: {
            username: $(this).val()
        }

    };

    var ajax = $.ajax(ajaxProperties);

    ajax.done(function (response) {
     var usernameEl = $document.registrationForm.username;
        if (response == 'available') {
           usernameEl.className = "success";
          
           
        } else {
            $document.registrationForm.username = 
            alert("This username is already " + response);
        }
    });
   
});