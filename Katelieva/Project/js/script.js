"use strict";

(function () {



    var jewelryModel =
        '<div  class="item col-sm-4 col-xs-4 col-lg-2">\n' +
        '  <div class="thumbnail">\n' +
        '    <img src="PUT-HERE-jewelry-IMAGE" alt="">\n' +
        '    <div class="caption">\n' +
        '      <h4 class="pull-right">$PUT-HERE-jewelry-PRICE</h4>\n' +
        '      <h4><a href="#">PUT-HERE-jewelry-TITLE</a></h4>\n' +
        '   <p>PUT-HERE-jewelry-CATEGORY</p>\n' +
        '      <h4><p>PUT-HERE-jewelry-DESCRIPTION</p></h4>\n'
    '    </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>';

    function Jewelry(obj) {
        this.title = obj.title;
        this.price = obj.price;
        this.url = obj.url;
        this.desc = obj.desc;
        this.category = obj.category;
    }
    Jewelry.prototype.toHTML = function () {
        var model = jewelryModel
            .replace("PUT-HERE-jewelry-IMAGE", this.url)
            .replace("PUT-HERE-jewelry-TITLE", this.title)
            .replace("PUT-HERE-jewelry-PRICE", this.price)
            .replace("PUT-HERE-jewelry-DESCRIPTION", this.desc)
            .replace("PUT-HERE-jewelry-CATEGORY", this.category)

        return model;

    }


    function dsiplayJewelry(jewelriesList) {
        $('#jewelry-container').empty();
        jewelriesList.forEach(function (jewelry) {
            $('#jewelry-container').append(jewelry.toHTML());

        });
    }

    $.getJSON("data/jewelry.json", function (data) {
        var jewelries = [];

        data.forEach(function (obj) {
            var jewelry = new Jewelry(obj);
            jewelries.push(jewelry);
        })
        dsiplayJewelry(jewelries);

        $("#select-category").change(function (event) {
            var category = $(this).val();
            var filtered = filterByCategory(jewelries, category);
            dsiplayJewelry(filtered);
        });
    });

    function filterByCategory(jewelriesList, category) {
        if (category === "all") {
            return jewelriesList;
        } else {
            return jewelriesList.filter(function (jewelry) {
                return jewelry.category === category;
            });
        }
    }


})();