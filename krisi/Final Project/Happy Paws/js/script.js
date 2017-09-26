(function () {
    "use strict";

    var items;
    $.getJSON("js/items.json", function (data) {
        items = data;
        displayItems(items);
    });


    var ItemTemplate =
        '<div class="col-sm-4 col-lg-4 col-md-4">\n' +
        '  <div class="thumbnail">\n' +
        '    <img src="ITEM-IMAGE" alt="">\n' +
        '    <div class="caption">\n' +
        '      <h4 class="pull-right">$ITEM-PRICE</h4>\n' +
        '      <h4><a href="ITEM-LINK" target="_blank">ITEM-TITLE</a></h4>\n' +
        '      <p>ITEM-DESCRIPTION</p>\n' +
        '    </div>\n' +
        '    <div class="ratings">\n' +
        '      <p class="pull-right">Rating: ITEM-RATING </p>\n' +
        '      <p class="rating-background">\n' +
        '        <span class="rating-stars" style="width: RATING-PERCENTAGE%"></span>\n' +
        '      </p>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</div>';



    function displayItems(itemsList) {
        $("#items-container").empty();
        itemsList.forEach(function (item) {
            var rating = Math.round(item.rating * 20);
            var itemHTML = ItemTemplate
                .replace("ITEM-IMAGE", item.url)
                .replace("ITEM-PRICE", item.price)
                .replace("ITEM-TITLE", item.title)
                .replace("ITEM-LINK", item.link)
                .replace("ITEM-DESCRIPTION", item.description)
                .replace("ITEM-RATING", item.rating)
                .replace("RATING-PERCENTAGE", rating);

            $("#items-container").append(itemHTML);
        })
        sortingFunc(itemsList);
    }


    function filterByCategory(items, category) {
        return items.filter(function (item) {
            return item.category === category;
        })

    }


    function sort(list, property) {
        return list.sort(function (a, b) {
            if (a[property] > b[property]) {
                return 1;
            }
            if (a[property] < b[property]) {
                return -1;
            }
            return 0;
        });
    }

    function sortingFunc(array) {
        document.filtersForm.sortBy.addEventListener("change", function () {
            var sortBy = this.value;
            var sorted = items;

            switch (sortBy) {
                case "price-asc":
                    sorted = sort(array, "price");
                    break;
                case "price-desc":
                    sorted = sort(array, "price").reverse();
                    break;
                case "rating-asc":
                    sorted = sort(array, "rating");
                    break;
                case "rating-desc":
                    sorted = sort(array, "rating").reverse();
                    break;
            }
            displayItems(sorted);
        })
    };


    $("#filterCategories a").on("click", function (event) {
        event.preventDefault();
        var category = this.getAttribute("data-category");
        if (category === "all") {
            displayItems(items);
            sortingFunc(items);
        } else {
            var filteredItems = filterByCategory(items, category);
            displayItems(filteredItems);
            sortingFunc(filteredItems);
        }
    })
    $("#logo-container").on("click", function (event) {
        event.preventDefault();
        displayItems(items)
    })

    $("#search").on("keyup", function (event) {
        var value = event.target.value.toLowerCase();
        if (value.length > 2) {
            var filtered = items.filter(function (item) {
                return (item.title + " " + item.description).toLowerCase().indexOf(value) > -1;
            })
            displayItems(filtered);
            sortingFunc(filtered)
        } else {
            displayItems(items);
            sortingFunc(items);
        }
    });



})();
