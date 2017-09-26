/* global $ */

(function () {
    "use strict";

    var dresses;

    console.log("dress ");

    $.getJSON('js/dress.json', function (data) {
        console.log("yeap!", data);
        dresses = data;
        displayDresses(dresses);
    });

    console.log("after the json call", dresses);

    var DressTemplate =
        '<div class="col-sm-4 col-lg-4 col-md-4">\n' +
        '  <div class="thumbnail">\n' +
        '    <img src="PUT-HERE-DRESS-IMAGE" alt="">\n' +
        '    <div class="caption">\n' +
        '      <h4 class="pull-right">$PUT-HERE-DRESS-PRICE</h4>\n' +
        '      <h4><a href="#">PUT-HERE-DRESS-TITLE</a></h4>\n' +
        '      <p>PUT-HERE-DRESS-DESCRIPTION</p>\n' +
        '    </div>\n' +
        '    <div class="ratings">\n' +
        '      <p class="pull-right">PUT-HERE-DRESS-RATING reviews</p>\n' +
        '      <p class="rating-background">\n' +
        '        <span class="rating-stars" style="width: PUT-HERE-RATING-PERCENTAGE%"></span>\n' +
        '      </p>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</div>';

    function filterByCategory(dresses, category) {
        return dresses.filter(function (dress) {
            return dress.category === category;
        });
    }

    function displayDresses(dressesList) {
        $('#dresses-container').empty();

        dressesList.forEach(function (dress) {
            //    var rating = Math.round(dress.rating*20);
            var dressHTML = DressTemplate
                .replace("PUT-HERE-DRESS-IMAGE", dress.url)
                .replace("PUT-HERE-DRESS-TITLE", dress.title)
                .replace("PUT-HERE-DRESS-PRICE", dress.price)
                .replace("PUT-HERE-DRESS-DESCRIPTION", dress.description)
                .replace("PUT-HERE-DRESS-RATING", dress.rating);


            $('#dresses-container').append(dressHTML);
        });
    }

    $("#filterCategories a").on("click", function (event) {
        event.preventDefault();
        var category = this.getAttribute("data-category");
        var filteredDresses = filterByCategory(dresses, category);
        displayDresses(filteredDresses);
    });

    //  displayDress(dresses);
})();
