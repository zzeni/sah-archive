/* globals document, Cookies, $ */
(function () {
  var COOKIE_NAME = 'logged-user';
  var loggedUser = Cookies.get(COOKIE_NAME);

  if (loggedUser) {
    onLogIn(loggedUser);
  }
  else {
    onLogOut();
  }

  document.loginForm.addEventListener("submit" ,function (event) {
    event.preventDefault();
    var username = this.username.value;
    Cookies.set(COOKIE_NAME, username, { expires: 14 });
    $("#login-modal").modal("hide");
    onLogIn(username);
  });

  document.querySelector('.logout-btn').addEventListener("click", function(event) {
    event.preventDefault();
    Cookies.remove(COOKIE_NAME);
    onLogOut();
  });

  function onLogIn(username) {
    $(".not-logged-in").hide();
    $(".logged-in").show();
    $(".username-placeholder").text(username);
  }

  function onLogOut() {
    $(".not-logged-in").show();
    $(".logged-in").hide();
  }
})();
