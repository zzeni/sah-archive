/**
 * Created by STEVIS on 5/13/2017.
 */

/*globals document */


(function() {

    "use strict";

    function Movie(title, year, url, imgUrl) {

        this.title = title;
        this.year = year;
        this.url = url;
        this.imgUrl = imgUrl;

    }

    Movie.prototype.toHTML = function () {

        var container = document.createElement("div");
        container.className = "col-sm-6 col-md-4";
        container.innerHTML = "<div class=\"thumbnail text-center\"><img class=\"img-responsive\" src=\"" + this.imgUrl + "\"><div class=\"caption\"><h3>" + this.title + "</h3><h4>" + this.year + "</h4><a href=\"" + this.url + "\" target=_blank class=\"btn btn-default btn-block\" role=\"button\">IMDB</a><button id=\"delete\"  class=\"btn btn-danger btn-xs\">delete</button>";

        var collection = document.getElementById("collection");
        collection.appendChild(container);


        container.querySelector("#delete").addEventListener("click", function () {
            collection.removeChild(container);
        });
    };


    var moviesDB = [];

    $.getJSON('movies.json', function (data) {

        data.forEach(function (obj) {
            var movie = new Movie(obj.title, obj.year, obj.url, obj.imgUrl);
            moviesDB.push(movie);
        });

        printMovie(moviesDB);
    });


    function printMovie(movies) {

        movies.forEach(function (movie) {

            movie.toHTML();

        });
    }

    $("#add_movie").on("click", function () {

        $("#form_container").load("_searchMovie.html", function () {

        });
    });

    function onFormSubmit(event) {

        event.preventDefault();

        var title = document.filmGenerator.title.value;
        var year = document.filmGenerator.year.value;
        var url = document.filmGenerator.url.value;
        var imgUrl = document.filmGenerator.imgUrl.value;
        var movie = new Movie(title, year, url, imgUrl);

        movie.toHTML();
    }


    var form = document.filmGenerator;

    form.addEventListener("submit", onFormSubmit);

})();





