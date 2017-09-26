
(function () {
    "use strict";

    var watchesDB = [];

    function Watch(obj) {
        this.id = obj.id;
        this.brand = obj.brand;
        this.gender = obj.gender;
        this.movement = obj.movement;
        this.price = obj.price;
        this.image = obj.image;
    }

    Watch.prototype.toHTML = function() {

        var pattern ="<div class=\"col-sm-4 col-lg-4 col-md-4 text-center wow fadeInUp\" data-wow-delay=\"1.0s\">\n" +
            "               <div class=\"thumbnail\">\n" +
            "\n" +
            "                   <img class=\"img-thumbnail\" src=\"%IMAGE%\" alt=\"watch\" >\n" +
            "\n" +
            "                   <div class=\"caption\" >\n" +
            "                       <section >\n" +
            "                           <h4 class=\"pull-right\">%PRICE%$</h4>\n" +
            "                           <h4 class=\"pull-left\">%BRAND%</h4>\n" +
            "                           <div class=\"row\"></div>\n" +
            "                           <div class=\"list-group\" >\n" +
            "                               <h5><span>%GENDER%</span> watch</h5>\n" +
            "                               <h5>Movement: <span>%MOVEMENT%</span></h5>\n" +
            "                           </div>\n" +
            "                       </section>\n" +
            "                   </div>\n" +
            "\n" +
            "                   <button type=\"button\" class=\"btn btn-default\" data-toggle=\"modal\" data-target=\".bs-example-modal-lg\">More</button>\n";

        var htmlString = pattern
            .replace(/"%ID%"/g, this.id)
            .replace("%BRAND%", this.brand)
            .replace("%GENDER%", this.gender)
            .replace("%PRICE%", this.price)
            .replace("%MOVEMENT%", this.movement)
            .replace(/"%IMAGE%"/g, this.image);


        return htmlString;
    };

    $.getJSON('js/watches.json', function(data) {

        data.forEach(function(obj) {
            var watch = new Watch(obj);
            watchesDB.push(watch);
        });

        showWatches(watchesDB);
    });


    function showWatches(watches) {
        var dbContainer = $("#shop-container");
        dbContainer.empty();

        watches.forEach(function(watch) {
            dbContainer.append(watch.toHTML());
        });
    }

    $("#home").on("click", function () {
        showWatches(watchesDB)
    });

    $("#about").on("click", function () {
        $("#shop-container").load("./_about.html");
        $("#sidebar").addClass(" hidden-xs hidden-sm")
    });

    $("#contact").on("click", function () {
        $("#shop-container").load("./_contact.html");
        $("#sidebar").addClass("hidden-xs hidden-sm")

    });

    document.querySelector("#btn-search").addEventListener("click", function (event) {

        event.preventDefault();

        var searchText = document.querySelector("#search").value;
        var filtered = watchesDB;

        if (searchText && searchText.length > 2) {
            filtered = watchesDB.filter(function (watch) {
                var searchable = [watch.brand, watch.gender, watch.movement].join(":::").toLowerCase();
                return searchable.indexOf(searchText.toLowerCase()) >= 0;
            });
        }
        showWatches(filtered);
    });

    $("#all").on("click", function (event) {
        event.preventDefault();
        showWatches(watchesDB);
    });

    $(".gender").on("click", function (event) {
        event.preventDefault();
        var category = this.getAttribute("data-category");
        var filtered = watchesDB.filter(function(watch) {
            return watch.gender.toLowerCase() === category;
        });
        showWatches(filtered);
    });

    $(".movement").on("click", function (event) {
        event.preventDefault();
        var category = this.getAttribute("data-category");
        var filtered = watchesDB.filter(function(watch) {
            return watch.movement.toLowerCase() === category;
        });
        showWatches(filtered);
    });


    document.filtersForm.sortBybrand.addEventListener("change", function () {

        var value = this.value.toLowerCase();

        if (!value) {
            showWatches(watchesDB);
        }
        else {
            var filtered = watchesDB.filter(function(watch) {
                return watch.brand.toLowerCase().indexOf(value) > -1;
            });
            showWatches(filtered);
        }

    });

    function sort(list, property) {
        return list.sort(function (a,b) {
            if (a[property] > b[property]) {
                return 1;
            }
            if (a[property] < b[property]) {
                return -1;
            }
            return 0;
        });
    }

    document.filtersForm.sortBy.addEventListener("change", function () {
        var sortBy = this.value;
        var sorted = watchesDB;

        switch (sortBy) {
            case "name-asc":
                sorted = sort(watchesDB, "brand");
                break;
            case "name-desc":
                sorted = sort(watchesDB, "brand").reverse();
                break;
            case "price-asc":
                sorted = sort(watchesDB, "price");
                break;
            case "price-desc":
                sorted = sort(watchesDB, "price").reverse();
                break;
        }
        showWatches(sorted);
    });



})();
