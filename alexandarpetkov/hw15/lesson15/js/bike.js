
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


function Bike(title, pic, price, desc, rating, category) {
    this.title = title;
    this.pic = pic;
    this.price = price;
    this.desc = desc;
    this.rating = rating;
    this.category= category;

    // this.toHTML = function (pic) {
    //     var newMyBike = bikeModel.replace("PUT-HERE-BIKE-IMAGE", Bike.pic);
    //
    //     $('#bikes-container').append(bikeModel);
    // }

}

var myFreeStyleBike = new Bike ('LEGION L60', 'img/bikes/LegionL60.jpg', 209,
    'A unified saddle and post along with a mid-sealed bearing', 4.9, 'FreeStyle');

Bike.prototype.toHTML = function () {
    var newMyBike = bikeModel.replace("PUT-HERE-BIKE-IMAGE", Bike.pic);
    var newMyBike = bikeModel.replace("PUT-HERE-BIKE-TITLE", Bike.title);

    $('#bikes-container').append(bikeModel);
}

$('#bikes-container').append(bikeModel);



console.log(myFreeStyleBike);

//console.log(myFreeStyleBike instanceof Bike);


var ShopItem = function () {

}

