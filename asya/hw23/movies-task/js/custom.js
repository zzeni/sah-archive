/*globals document*/
(function () {
    "use strict";

    var films = [];

    var TEMPLATE = " " +
        "        <article id=\"%FILM-ID-2%\" class=\"film-item\">\n" +
        "          <div class=\"col-xs-4 film-poster\">\n" +
        "            <a href=\"https://www.themoviedb.org/movie/%FILM-ID%\" target=\"blank\">\n" +
        "              <img src=\"%IMG%\" title=\"%FILM-TITLE%\" alt=\"%FILM-TITLE%\">\n" +
        "            </a>\n" +
        "          </div>\n" +
        "          <div class=\"col-xs-8 film-info\">\n" +
        "            <h3>\n" +
        "              <a href=\"#\">%FILM-TITLE%</a>\n" +
        "            </h3>\n" +
        "            <div class=\"year-genre\">\n" +
        "              <div>\n" +
        "                <i class=\"fa fa-calendar\"></i>\n" +
        "                <span class=\"year\">%YEAR%</span>\n" +
        "              </div>\n" +
        "              <div class=\"genre elipsis\">\n" +
        "                %GENRE%\n" +
        "              </div>\n" +
        "            </div>\n" +
        "            <div class=\"description\">\n" +
        "              <p>%DESCRIPTION%</p>\n" +
        "              <a class=\"read-more\" href=\"https://www.themoviedb.org/movie/%FILM-ID%\" target=\"blank\">more</a>\n" +
        "            </div>\n" +
        "            <div class=\"rating\">\n" +
        "              <span class=\"rating-value\">%RATING%</span>\n" +
        "              <i class=\"fa fa-star\"></i>\n" +
        "            </div>\n" +
        "          </div>\n" +
        "        </article>\n";

    $.getJSON("./db/movies.json", function (data) {
        films = data;
        displayFilms(films);
    });

    document.filtersForm.year.addEventListener("change", function () {
        var year = this.value;

        var filtered = films.filter(function () {
            for (var i = 0; i<= films.length; i++) {
                return films[i].release_date.substring(0, 4) === year;}
        });

        if (year === "") {
            displayFilms(films);
        } 
        else {
            displayFilms(filtered);
        }
    });

    $("#sort-by option").change(function () {
        var value = this.value;
        var sorted = films.sort (function (a,b) {
            if (a.original_title < b.original_title){
                return -1;}
            if (a.original_title > b.original_title){
                return 1;}
            return 0;
        });

        var date = films.sort (function (a,b) {
            if (a.release_date.substring(0, 4) < b.release_date.substring(0, 4)){
                return -1;}
            if (a.release_date.substring(0, 4) > b.release_date.substring(0, 4)){
                return 1;}
            return 0;
        });

        var raiting = films.sort (function (a,b) {
            if (a.vote_average < b.vote_average){
                return -1;}
            if (a.vote_average > b.vote_average){
                return 1;}
            return 0;
        });

        if (value === "title-asc"){
            displayFilms(sorted);
        }
        if (value === "title-desc") {
            displayFilms(sorted.reverse());
        } 
        if (value === "date-asc"){
            displayFilms(date);
        }
        if (value === "date-desc") {
            displayFilms(date.reverse());
        } 
        if (value === "raiting-asc"){
            displayFilms(raiting);
        }
        if (value === "raiting-desc") {
            displayFilms(raiting.reverse());
        } 
        else {
            displayFilms(films);
        }
    });

    $("#about-link").on("click", function () {
        $("#collection").load("./partials/_about.html");
        $("#filters").addClass("hidden");
        $(".pagination").addClass("hidden");
    });

    $("#home-link").on("click", function () {
        $("#collection").load("./partials/_home.html");
        $("#filters").addClass("hidden");
        $(".pagination").addClass("hidden");
    });


    function displayFilms(list) {
        var collection = document.querySelector("#collection");


        list.forEach(function (film) {

            var div = document.createElement("div");
            div.className = "col-md-6";
            div.innerHTML = TEMPLATE
                .replace("%FILM-ID%", film.id)
                .replace("%FILM-TITLE%", film.title)
                .replace("%FILM-TITLE%", film.title)
                .replace("%FILM-TITLE%", film.title)
                .replace("%IMG%", film.poster_path)
                .replace("%YEAR%", film.release_date)
                .replace("%GENRE%", film.genres)
                .replace("%DESCRIPTION%", film.overview)
                .replace("%RATING%", film.vote_average);

            collection.appendChild(div);
        });
    }

    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 200) {
            $("#header nav").addClass("slim");
        } else {
            $("#header nav").removeClass("slim");
        }
    });

})();