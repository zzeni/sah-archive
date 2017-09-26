/*global CoffeeMachine,document*/
(function () {
  "use strict";

  var machine = new CoffeeMachine();

  function displayStatus() {
    var statusContainer = document.getElementById("statusContainer");
    statusContainer.innerHTML = machine.htmlStatus();
  }

  document.getElementById("smallLoad").addEventListener("click", function () {
    machine.smallLoad();
    displayStatus();
  });
  document.getElementById("mediumLoad").addEventListener("click", function () {
    machine.mediumLoad();
    displayStatus();
  });
  document.getElementById("bigLoad").addEventListener("click", function () {
    machine.bigLoad();
    displayStatus();
  });

  var buttons = document.getElementsByClassName("order-btn");

  for (var i=0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      var beverage = this.getAttribute("data-beverage");
      var errorContainer = document.getElementById("error");

      errorContainer.classList.add("hidden"); // hide the error container

      try {
        machine.order(beverage);
        displayStatus();
      }
      catch (error) {
        errorContainer.classList.remove("hidden"); // show the error container
        errorContainer.querySelector(".panel-body").innerHTML = error.message;
      }
    });
  }
})();
