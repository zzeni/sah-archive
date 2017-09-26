/* globals $, document */
(function () {

  $(document).ready(function () {
    $(".logged-in").hide();

    var credentials;

    $.getJSON('./js/login.json', function (data) {
      credentials = data;
    });

    document.loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var username = this.username.value;
      var password = this.password.value;
      for (var i in credentials) {
        if (username != credentials[i].username) {
          $(".alert").removeClass("invisible");
        } else if (password != credentials[i].password) {
          $(".alert").removeClass("invisible");
        } else {
          $(".alert").addClass("invisible");
          $("#login-modal").modal("hide");
          $(".username-placeholder").text(username);
          onLogIn();
        }
      }
    });

    document.querySelector('.logout-btn').addEventListener("click", function (event) {
      event.preventDefault();
      onLogOut();
    });

    function onLogIn() {
      $(".not-logged-in").hide();
      $(".logged-in").show();
    }

    function onLogOut() {
      $(".not-logged-in").show();
      $(".logged-in").hide();
    }

  });

})();
