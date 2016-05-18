// TASK 6,7,8
//NOTE: Code taken from the example and it has minor changes.

(function() {			
  
  "use strict";

  function Bike(name, price) {
	// prototype of Bike  
	  
    this.name = name;
    this.price = price;
    this.distanceCovered = 0;    
  }
  
  //TASK 7.
  // I have moved the methods to the prototype of Bikes, so that we have only one such method loaded in the memory.
  Bike.prototype.toString = function () {
      return "    " + this.name + ": " + this.price + " $";
    };
  
  
  Bike.prototype.move = function (kilometers) {
      this.distanceCovered += kilometers;
    };
   
  
  Bike.prototype.toHtml = function () {
      //return this.toString() + "<br />" + "please add some html content here";
	  
	  /*
	  ///////////////////////////This is the string solution.////////////////////////
	  
	  var resultingString = "";
	  var opening = "<ul>";
	  var closing = "</ul>";
	  var bikePicture = "<img class=\"bike_image\" src=\"img/" + this.name + ".jpg\">";
	  var bikePrice = "<li>Price: " + this.price + "</li>";
	  var bikeDistance = "<li>Distance: " + this.distanceCovered + "</li>";
	  
	  resultingString = opening + bikePrice + bikeDistance + closing;
	  
	  return resultingString;
	  */
	  
	  
	  ///////////////////////////This is the object solution. The loadBikes function is modified.////////////////////////
	  var properties = $("<ul class=\"bike_info\"></ul>");
	  var bikePicture = $("<img class=\"bike_image\" src=\"img/" + this.name + ".jpg\">");
	  var bikePrice = $("<li>Price: " + this.price + "</li>");
	  var bikeDistance = $("<li>Distance: " + this.distanceCovered + "</li>");
	  
	  
	  // Appending all the LIs to the UL. Keep in mind that .append is a jQuery method.
	  properties.append(bikePicture, bikePrice, bikeDistance);
	  
	  return properties;
	  
    };
  

  var bikes = [
    new Bike("Drag", 200),
    new Bike("RAM", 500),
    new Bike("Scott", 1200),
    new Bike("cross", 150),
  ];
  
  // This is a normal function, but I'm self-invoking it, to save one line of code
  (function loadBikes(bikes) {
    bikes.forEach(function(bike) {
      var panel = $("<div class=\"panel panel-info\"></div>");
      var panelHeading = $("<div class=\"panel-heading\"><h3>" + bike.name + "</h3></div>");
      var panelBody = $("<div class=\"panel-body\"></div>");	// Slightly modified this row to fit with the object solution;
	  panelBody.append(bike.toHtml());							// change to: $("<div class=\"panel-body\">" + bike.toHtml() + "</div>"); to work with the string solution;
																// and remove panelBody.append(bike.toHtml());
      
      panel.append(panelHeading).append(panelBody);
      
      var panelContainer = $("<div class=\"col-md-3\"></div>").append(panel);
      
      $(".bikes-container").append(panelContainer);
    });
  })(bikes);
  
  
//  Uncomment the lines below, if you want to see the output in the console
//  function logBikes(bikesList) {
//    bikesList.forEach(function (bike) {
//      bike.toString();
//    });
//  }
//
//  logBikes("Logging all bikes", bikes);
//
//  // ===========================================
//
//  var filteredBikes = bikes.filter(function (bike) {
//    return bike.price < 1000;
//  });
//
//  logBikes("Logging filtered bikes (where price is < 1000 $)",filteredBikes);
  
})();

