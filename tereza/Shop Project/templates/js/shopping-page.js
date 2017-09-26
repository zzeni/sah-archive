/* globals $ */

(function () {
  "use strict";

  
  $("#about-link").on("click", function () {
    $("#page-content").load("_about.html");
   
  });

  $("#contacts-link").on("click", function () {
    $("#page-content").load("_contacts.html");
    
  });

})();
