(function() {
  
  "use strict";
  function Bike(name, price) {
    this.name = name;
    this.price = price;
    this.distanceCovered = 0;
  }
  Bike.prototype.move = function (kilometers) {
    this.distanceCovered += kilometers;
  };

  Bike.prototype.toString = function () {
    return this.name + ": " + this.price + " $"; 
  };

  Bike.prototype.toHtml = function () {
    var a = "<img class='img-responsive' src='img/" + this.name + ".jpg'>" +
            "<div>" + "Price: " + this.price + " $" + "</div>" + 
            "<div>" + "Distance Covered: " + this.distanceCovered + " km" + "</div>";
    return a;
  };

  var bikes = [
    new Bike("Drag", 200),
    new Bike("RAM", 500),
    new Bike("Scott", 1200)
  ];
  
  (function loadBikes(bikes) {
    bikes.forEach(function(bike) {
      var panel = $("<div class=\"panel panel-info\"></div>");
      var panelHeading = $("<div class=\"panel-heading\"><h3>" + bike.name + "</h3></div>");
      var panelBody = $("<div class=\"panel-body\">" + bike.toHtml() + "</div>");
      
      panel.append(panelHeading).append(panelBody);
      
      var panelContainer = $("<div class=\"col-md-4\"></div>").append(panel);
      
      $(".bikes-container").append(panelContainer);
    });
  })(bikes);
})();
