/* globals window, $, document */
(function () {
    "use strict";
    var defaultScreen = "home";
    var stocks = [];
    var subTotal = 0;
    var filtered = [];
    initialize();
    $("#total").html(subTotal.toFixed(2) + "$");

    document.querySelectorAll("a[data-toggle=tab]").forEach(function (link) {
        link.addEventListener("click", function () {
            var main = document.querySelector("main");
            main.classList.add(this.getAttribute("data-info") + "-page");
            window.location.hash = this.getAttribute("data-info");
            document.body.scrollTop = 0;
        });
    });

    function initialize() {
        var screens = ["home", "rods", "reels", "lures", "lines", "hooks", "floats"];
        var screen = window.location.hash.replace("#", "$");

        if (screens.indexOf(screen) < 0) {
            screen = defaultScreen;
        }
        loadDB();
        $("#home-container").load("templates/_home.html", function () {
            loadEvent();
            $("#rods-container").load("templates/_rods.html");
            $("#reels-container").load("templates/_reels.html");
            $("#lure-container").load("templates/_lure.html");
            $("#lines-container").load("templates/_lines.html");
            $("#hooks-container").load("templates/_hooks.html");
            $("#floats-container").load("templates/_floats.html");
            $("#cart-container").load("templates/_cart.html");
        });
    }

    function Stock(obj) {
        this.stock_type = obj.stock_type;
        this.brand = obj.brand;
        this.model = obj.model;
        this.type = obj.type;
        this.length = obj.length || 0;
        this.weight = obj.weight || 0;
        this.image = obj.image;
        this.action = obj.action || 0;
        this.bearing = obj.bearing || 0;
        this.gear = obj.gear || 0;
        this.price = obj.price;
    }

    Stock.prototype.toHTML = function () {
        var TEMPLATE = "<div class=\"col-sm-6 col-md-4 col-lg-3 stock\" data-info=\"%STOCK%\">\n" +
            "    <div class=\"thumbnail\">\n" +
            "      <img src=\"%img%\" alt=\"...\">\n" +
            "      <div class=\"caption\">\n" +
            "        <h2>%BRAND%</h2>" +
            "        <h4>%Thumbnail label%</h4>\n" +
            "        <p>%PRICE% $</p>" +
            "      </div>\n" +
            "    </div>\n" +
            "  </div>\n";
        var htmlString = TEMPLATE.replace(/%img%/g, this.image)
            .replace(/%BRAND%/g, this.brand)
            .replace(/%Thumbnail label%/g, this.model)
            .replace(/%STOCK%/g, this.model)
            .replace(/%PRICE%/, this.price);
        return htmlString;
    };

    function displayStock(list, stype) {
        var stypeId = "" + stype + "-inner-container";
        document.getElementById(stypeId).innerHTML = "";
        list.forEach(function (stock) {
            document.getElementById(stypeId).innerHTML += stock.toHTML();
        });
    }

    function loadDB() {
        $.getJSON("stocks.json", function (data) {
            data.forEach(function (obj) {
                var stock = new Stock(obj);
                stocks.push(stock);
            });
        });
    }

    function loadEvent() {
        var selector;
        $(".banner, .banner>a").click(function (event) {
            event.preventDefault();
            selector = $(this).closest("div").attr("data-attr");
            filtered = stocks.filter(function (stock) {
                return stock.stock_type.indexOf(selector) === 0;
            });
            $("#" + selector + "-container").tab('show');
            document.querySelector(".navbar-nav a[href='#" + selector + "-container']").click();
            displayStock(filtered, selector);
            expandToSingle();
        });
        $(".nav a").click(function () {
            resetFilters();
            selector = this.getAttribute("data-info");
            if (selector === "home" || selector === "stock" || selector === "cart" || selector === "about") {
                return;
            } else {
                filtered = stocks.filter(function (stock) {
                    return stock.stock_type.indexOf(selector) === 0;
                });
                displayStock(filtered, selector);
            }
            loadfilters(filtered, selector);
            expandToSingle();
        });
    }

    function displaySingleStock(stock) {
        var SINGLE;
        var htmlSingle;
        if (stock.stock_type === "rods") {
            SINGLE = "<div class=\"custom\">\n" +
                "  <img src=\"%IMG%\" alt=\"\">\n" +
                "  <div>" +
                "    <h1>%BRAND%</h1>\n" +
                "    <h3>%NAME%</h3>\n" +
                "    <hr>" +
                "    <div>Length: %LENGTH% cm</div>" +
                "    <div>Weight: %WEIGHT% g</div>" +
                "    <div>Type: %TYPE%</div>" +
                "    <hr>" +
                "    <h4>Price: %PRICE% $</h4>" +
                "    <form class=\"inline-form\" name=\"submitForm\">" +
                "    <input type=\"number\" name=\"quantity\" value=\"1\">" +
                "       <button type=\"submit\" class=\"addto btn btn-danger\">Add to cart</button>" +
                "    </form>" +
                "</div>" +
                "</div>\n";
            htmlSingle = SINGLE.replace(/%IMG%/, stock.image)
                .replace(/%NAME%/, stock.model)
                .replace(/%BRAND%/, stock.brand)
                .replace(/%LENGTH%/, stock.length)
                .replace(/%WEIGHT%/, stock.weight)
                .replace(/%TYPE%/, stock.type)
                .replace(/%PRICE%/, stock.price);
        } else if (stock.stock_type === "reels") {
            SINGLE = "<div class=\"custom\">\n" +
                "  <img src=\"%IMG%\" alt=\"\">\n" +
                "  <div>" +
                "    <h1>%BRAND%</h1>\n" +
                "    <h3>%NAME%</h3>\n" +
                "    <hr>" +
                "    <div>Type: %TYPE%</div>" +
                "    <div>Action: %ACTION% </div>" +
                "    <div>Bearing: %BEARING%</div>" +
                "    <div>Gear: %GEAR%</div> " +
                "    <hr>" +
                "    <h4>Price: %PRICE% $</h4>" +
                "    <form class=\"inline-form\" name=\"submitForm\">" +
                "    <input type=\"number\" name=\"quantity\" value=\"1\">" +
                "       <button type=\"submit\" class=\"addto btn btn-danger\">Add to cart</button>" +
                "    </form>" +
                "</div>" +
                "</div>\n";
            htmlSingle = SINGLE.replace(/%IMG%/, stock.image)
                .replace(/%NAME%/, stock.model)
                .replace(/%BRAND%/, stock.brand)
                .replace(/%ACTION%/, stock.action)
                .replace(/%BEARING%/, stock.bearing)
                .replace(/%TYPE%/, stock.type)
                .replace(/%GEAR%/, stock.gear)
                .replace(/%PRICE%/, stock.price);

        } else if (stock.stock_type === "lure") {
            SINGLE = "<div class=\"custom\">\n" +
                "  <img src=\"%IMG%\" alt=\"\">\n" +
                "  <div>" +
                "    <h1>%BRAND%</h1>\n" +
                "    <h3>%NAME%</h3>\n" +
                "    <hr>" +
                "    <div>Type: %TYPE%</div>" +
                "    <hr>" +
                "    <h4>Price: %PRICE% $</h4>" +
                "    <form class=\"inline-form\" name=\"submitForm\">" +
                "    <input type=\"number\" name=\"quantity\" value=\"1\">" +
                "       <button type=\"submit\" class=\"addto btn btn-danger\">Add to cart</button>" +
                "    </form>" +
                "</div>" +
                "</div>\n";
            htmlSingle = SINGLE.replace(/%IMG%/, stock.image)
                .replace(/%NAME%/, stock.model)
                .replace(/%BRAND%/, stock.brand)
                .replace(/%TYPE%/, stock.type)
                .replace(/%PRICE%/, stock.price);
        } else if (stock.stock_type === "lines") {
            SINGLE = "<div class=\"custom\">\n" +
                "  <img src=\"%IMG%\" alt=\"\">\n" +
                "  <div>" +
                "    <h1>%BRAND%</h1>\n" +
                "    <h3>%NAME%</h3>\n" +
                "    <hr>" +
                "    <div>Type: %TYPE%</div>" +
                "    <div>Length: %LENGTH%</div>" +
                "    <hr>" +
                "    <h4>Price: %PRICE% $</h4>" +
                "    <form class=\"inline-form\" name=\"submitForm\">" +
                "    <input type=\"number\" name=\"quantity\" value=\"1\">" +
                "       <button type=\"submit\" class=\"addto btn btn-danger\">Add to cart</button>" +
                "    </form>" +
                "</div>" +
                "</div>\n";
            htmlSingle = SINGLE.replace(/%IMG%/, stock.image)
                .replace(/%NAME%/, stock.model)
                .replace(/%BRAND%/, stock.brand)
                .replace(/%TYPE%/, stock.type)
                .replace(/%LENGTH%/, stock.length)
                .replace(/%PRICE%/, stock.price);
        } else if (stock.stock_type === "hooks") {
            SINGLE = "<div class=\"custom\">\n" +
                "  <img src=\"%IMG%\" alt=\"\">\n" +
                "  <div>" +
                "    <h1>%BRAND%</h1>\n" +
                "    <h3>%NAME%</h3>\n" +
                "    <hr>" +
                "    <div>Type: %TYPE%</div>" +
                "    <hr>" +
                "    <h4>Price: %PRICE% $</h4>" +
                "    <form class=\"inline-form\" name=\"submitForm\">" +
                "    <input type=\"number\" name=\"quantity\" value=\"1\">" +
                "       <button type=\"submit\" class=\"addto btn btn-danger\">Add to cart</button>" +
                "    </form>" +
                "</div>" +
                "</div>\n";
            htmlSingle = SINGLE.replace(/%IMG%/, stock.image)
                .replace(/%NAME%/, stock.model)
                .replace(/%BRAND%/, stock.brand)
                .replace(/%TYPE%/, stock.type)
                .replace(/%PRICE%/, stock.price);
        } else if (stock.stock_type === "floats") {
            SINGLE = "<div class=\"custom\">\n" +
                "  <img src=\"%IMG%\" alt=\"\">\n" +
                "  <div>" +
                "    <h1>%BRAND%</h1>\n" +
                "    <h3>%NAME%</h3>\n" +
                "    <hr>" +
                "    <div>Type: %TYPE%</div>" +
                "    <div>Weight: %WEIGHT%</div>" +
                "    <hr>" +
                "    <h4>Price: %PRICE% $</h4>" +
                "    <form class=\"inline-form\" name=\"submitForm\">" +
                "    <input type=\"number\" name=\"quantity\" value=\"1\">" +
                "       <button type=\"submit\" class=\"addto btn btn-danger\">Add to cart</button>" +
                "    </form>" +
                "</div>" +
                "</div>\n";
            htmlSingle = SINGLE.replace(/%IMG%/, stock.image)
                .replace(/%NAME%/, stock.model)
                .replace(/%BRAND%/, stock.brand)
                .replace(/%TYPE%/, stock.type)
                .replace(/%WEIGHT%/, stock.weight)
                .replace(/%PRICE%/, stock.price);
        }
        document.getElementById("single-container").innerHTML = "";
        document.getElementById("single-container").innerHTML = htmlSingle;
        $(".addto").click(function (event) {
            event.preventDefault();
            addToCart(stock);
        });

    }

    function addToCart(stock) {
        var name = stock.model,
            price = stock.price,
            quantity = document.submitForm.quantity.value;
        var cartLineTemp = "    <tr class=\"stockLine %NAME%\">\n" +
            "        <td><img src=\"%IMG%\"></td>" +
            "        <td data-info=\"stock name\">%NAME%</td>\n" +
            "        <td data-info=\"quantity\" class=\"quantity\">%quantity%</td>\n" +
            "        <td data-info=\"price\" class =\"price\">%price%</td>\n" +
            "        <td>" +
            "           <button type=\"reset\" class=\"btn btn-danger removeStock\">Clear</button>\n" +
            "        </td>" +
            "    </tr>\n";
        var cartLineHTML = cartLineTemp.replace(/%NAME%/g, name)
            .replace(/%price%/, price)
            .replace(/%quantity%/, quantity)
            .replace(/%IMG%/, stock.image);
        document.getElementById("body").innerHTML += cartLineHTML;
        subTotal += +price * quantity;
        displaySum();
        $(".removeStock").click(function (event) {
            event.preventDefault();
            $(this).closest("tr").detach();
            quantity = $(this).closest("tr").children(".quantity").html();
            price = $(this).closest("tr").children(".price").html();
            subTotal -= price * quantity;
            displaySum();
        });
        $(".clear").click(function (event) {
            event.preventDefault();
            $("tbody").empty();
            subTotal = 0;
            displaySum();
        });
    }

    function loadfilters(list, selector) {
        var filtersForm = selector + "-filters";
        var listToFilter = [];
        document.getElementById(filtersForm).brand.addEventListener("change", function () {
            var brand = this.value.toLowerCase();
            listToFilter = (!!filtered[0]) ? filtered : list;
            filtered = listToFilter.filter(function (stock) {
                return stock.brand.toLowerCase().indexOf(brand) === 0;
            });
            displayStock(filtered, selector);
            expandToSingle();
            return filtered;
        });
        document.getElementById(filtersForm).type.addEventListener("change", function () {
            var type = this.value.toLowerCase();
            listToFilter = (!!filtered[0]) ? filtered : list;
            filtered = listToFilter.filter(function (stock) {
                return stock.type.toLowerCase().indexOf(type) !== -1;
            });
            displayStock(filtered, selector);
            expandToSingle();
            return filtered;
        });
        document.getElementById(filtersForm).price.addEventListener("change", function () {
            var type = this.value.toLowerCase();
            listToFilter = (!!filtered[0]) ? filtered : list;
            filtered = listToFilter.sort(priceCompare);
            if (type === "price-asc") {
                filtered = filtered;
            } else if (type === "price-desc") {
                filtered = filtered.reverse();
            } else {
                filtered = listToFilter;
            }
            displayStock(filtered, selector);
            expandToSingle();
            return filtered;
        });
        $(".reset").click(function (event) {
            event.preventDefault();
            resetFilters();
            displayStock(list, selector);
        });
    }

    function expandToSingle() {
        $(".stock").click(function (event) {
            event.preventDefault();
            var stockName = this.getAttribute("data-info");
            var singleStock = stocks.find(function (stock) {
                return stock.model === stockName;
            });
            displaySingleStock(singleStock);
            $("#single-container").tab('show');
            document.querySelector(".navbar-nav a[href='#single-container']").click();
        });
    }

    function priceCompare(a, b) {
        return (a.price < b.price ? -1 : 1);
    }

    function displaySum() {
        $("#stotal").html(subTotal.toFixed(2) + "$");
        $("#total").html(subTotal.toFixed(2) + "$");
    }

    function resetFilters() {
        $("select").val(null).trigger("change");
    }
})();
