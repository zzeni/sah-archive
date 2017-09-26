"use strict";

(function() {
  var bikes = [
    {
      title: 'Bike 1',
      url: 'img/bikes/1.jpg',
      price: 300,
      desc: 'This awesome bike will take you everywhere!!!',
      rating: 4.5,
      category: 'city'
    },
    {
      title: 'The coolest bike',
      url: 'img/bikes/2.jpg',
      price: 600,
      desc: 'This awesome bike will take you everywhere!!!',
      rating: 3.5,
      category: 'city'
    },
    {
      title: 'Bike for real men',
      url: 'img/bikes/3.jpg',
      price: 800,
      desc: 'This awesome bike will take you everywhere!!!',
      rating: 4.1,
      category: 'mtb'
    },
    {
      title: 'Bike 4',
      url: 'img/bikes/4.jpg',
      price: 300,
      desc: 'This awesome bike will take you everywhere!!!',
      rating: 4.5,
      category: 'city'
    },
    {
      title: 'The coolest bike',
      url: 'img/bikes/5.jpg',
      price: 600,
      desc: 'This awesome bike will take you everywhere!!!',
      rating: 3.5,
      category: 'city'
    },
    {
      title: 'Bike for real men',
      url: 'img/bikes/6.jpg',
      price: 800,
      desc: 'This awesome bike will take you everywhere!!!',
      rating: 4.1,
      category: 'country'
    }
  ];


  var bikeModel =
      '<div class="col-sm-4 col-lg-4 col-md-4">\n' +
      '  <div class="thumbnail">\n' +
      '    <img src="PUT-HERE-BIKE-IMAGE" alt="">\n' +
      '    <div class="caption">\n' +
      '      <h4 class="pull-right">$PUT-HERE-BIKE-PRICE</h4>\n' +
      '      <h4><a href="#">PUT-HERE-BIKE-TITLE</a></h4>\n' +
      '      <p>PUT-HERE-BIKE-DESCRIPTION</p>\n' +
      '    </div>\n' +
      '    <div class="ratings">\n' +
      '      <p class="pull-right">15 reviews</p>\n' +
      '      <p>\n' +
      '        <span class="glyphicon glyphicon-star"></span>\n' +
      '        <span class="glyphicon glyphicon-star"></span>\n' +
      '        <span class="glyphicon glyphicon-star"></span>\n' +
      '        <span class="glyphicon glyphicon-star"></span>\n' +
      '        <span class="glyphicon glyphicon-star"></span>\n' +
      '      </p>\n' +
      '    </div>\n' +
      '  </div>\n' +
      '</div>';


  var filteredBikes = filterByCategory(bikes, "city");

  filteredBikes.forEach(function(bike) {
    var model = bikeModel
      .replace("PUT-HERE-BIKE-IMAGE", bike.url)
      .replace("PUT-HERE-BIKE-TITLE", bike.title)
      .replace("PUT-HERE-BIKE-PRICE", bike.price)
      .replace("PUT-HERE-BIKE-DESCRIPTION", bike.description)

    $('#bikes-container').append(model);
  });

})();


function filterByCategory(bikes, category) {
  var result = bikes.filter(function(bike) {
    return bike.category === category;
  });

  return result;
}




