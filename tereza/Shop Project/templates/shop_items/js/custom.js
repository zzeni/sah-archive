/* globals $ */

(function () {
  "use strict";

  $("#about-link").on("click", function () {
    $("#page-content").load("../../templates/_about.html");
  });

  $("#contacts-link").on("click", function () {
    $("#page-content").load("./../_contacts.html");
  });

  $("#add-item").on("click", function () {
    $("#total").removeClass("invisible");
  });
  $("#remove-item").on("click", function () {
    $("#total").removeClass("invisible");
  });

})();
