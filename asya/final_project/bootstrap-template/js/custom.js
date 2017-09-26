/*globals document, window, $ */
(function () {
  "use strict";

  var books = [];
  var defaultScreen = "collection";

  var TEMPLATE = "" +
    "  <article id=\"%BOOK-ID-1%\" class=\"book-item\">\n" +
      "    <div class=\"col-sm-4 col-lg-4 col-md-4 book-poster\">\n" +
      "      <a href=\"https://www.waterstones.com/book/%BOOK-ID%\" target=\"blank\">\n" +
    "        <img src=\"%IMAGE-URL%\" title=\"%BOOK-TITLE%\" alt=\"%BOOK-TITLE%\">\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-8 book-info\">\n" +
    "      <h3>\n" +
    "        <a href=\"#\">%BOOK-TITLE%</a>\n" +
    "      </h3>\n" +
    "      <h4>\n" +
    "      <span class=\"author\">%AUTHOR%</span>\n" +
    "      </h4>\n" +
    "      <div class=\"year-genre\">\n" +
    "        <div>\n" +
    "          <i class=\"fa fa-calendar\"></i>\n" +
    "          <span class=\"year\">%YEAR%</span>\n" +
    "        </div>\n" +
    "        <div class=\"genre elipsis\">\n" +
    "          %GENRE%\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"description\">\n" +
    "        <p>%DESCRIPTION%</p>\n" +
      "        <a class=\"read-more\" https://www.waterstones.com/book/%BOOK-ID%\" target=\"blank\">more</a>\n" +
    "      </div>\n" +
    "      <div class=\"year-genre\">\n" +
    "        <div class=\"rating\">\n" +
    "          <span class=\"rating-value\">%RATING%</span>\n" +
    "          <i class=\"fa fa-star\"></i>\n" +
    "        </div>\n" +
    "        <div class=\"genre price\">\n" +
    "            %PRICE%\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </article>\n";


  initialize();
    

  document.querySelectorAll("a[data-toggle=tab]").forEach(function(link) {
    link.addEventListener("click", function () {
      var main = document.querySelector("main");
      main.classList.add(this.getAttribute("data-info") + "-page");
      window.location.hash = this.getAttribute("data-info");
      document.body.scrollTop = 0;
    });
  });


  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 200) {
      document.querySelector("#header nav").classList.add("slim");
    } else {
      document.querySelector("#header nav").classList.remove("slim");
    }
  });


  function initialize() {
    var screens = ["collection"];
    var screen = window.location.hash.replace("#", "");

    if (screens.indexOf(screen) < 0) { screen = defaultScreen; }

      $("#collection-container").load("./template/_collection.html", function () {
          loadDb();
          loadFiltersEvents();
      });
      
      
    $("#" + screen + "-container").tab('show');
    document.querySelector(".navbar-nav a[href='#" + screen + "-container']").click();
  }

  function loadDb() {
    $.getJSON("./js/books.json", function (data) {
      books = data;
      displayBooks(sort(books, "title"));
    });
  }

  function displayBooks(list) {
    var collection = document.querySelector("#collection");
    collection.innerHTML = "";

    list.forEach(function (book) {
      var html = TEMPLATE
      .replace("%YEAR%", book.release_date)
      .replace("%IMAGE-URL%", book.book_img)
      .replace("%DESCRIPTION%", book.overview)
      .replace("%RATING%", book.vote_average)
      .replace(/%BOOK-TITLE%/g, book.title)
      .replace("%AUTHOR%", book.author)
      .replace("%PRICE%", book.price)
      .replace("%GENRE%", book.genres);
      var div = document.createElement("div");
      div.className = "col-md-6";
      div.innerHTML = html;
      collection.appendChild(div);
    });
  }
    
    
  document.filtersForm.sortGenres.addEventListener("change", function () {
    var sortGenres = this.value;
    var sorted = books;

    switch (sortGenres) {
        case "bestsellers":
            sorted = sort(books, "genres");
            break;
        case "childrens":
            sorted = sort(books, "genres");
            break;
        case "fiction":
            sorted = sort(books, "genres");
            break;
        case "non-fiction":
            sorted = sort(books, "genres");
            break;
                  }
     displayBooks(sorted);
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

  function loadFiltersEvents () {


    document.filtersForm.year.addEventListener("change", function () {
      var year = this.value;
      var filtered = books;

      if (year) {
        filtered = books.filter(function (book) {
          return book.release_date.indexOf(year) === 0;
        });
      }
      displayBooks(filtered);
    });

    document.filtersForm.sortBy.addEventListener("change", function () {
      var sortBy = this.value;
      var sorted = books;

      switch (sortBy) {
        case "title-asc":
          sorted = sort(books, "title");
          break;
        case "title-desc":
          sorted = sort(books, "title").reverse();
          break;
        case "date-asc":
          sorted = sort(books, "release_date");
          break;
        case "date-desc":
          sorted = sort(books, "release_date").reverse();
          break;
        case "rating-asc":
          sorted = sort(books, "rating");
          break;
        case "rating-desc":
          sorted = sort(books, "rating").reverse();
          break;
                    }
      displayBooks(sorted);
    });

    document.filtersForm.keywords.addEventListener("keyup", function () {
      var searchText = this.value;
      var filtered = books;

      if (searchText && searchText.length > 2) {
        filtered = books.filter(function (book) {
            var searchable = [book.author, book.overview].join(":::").toLowerCase();
          return searchable.indexOf(searchText.toLowerCase()) >= 0;
        });
      }
      displayBooks(filtered);
    });
  }
})();
