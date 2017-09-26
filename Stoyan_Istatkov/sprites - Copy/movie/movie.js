/**
 * Created by STEVIS on 5/6/2017.
 */

/*globals document */


"use strict";

function Movie(title, year, url, imgUrl){

    this.title = title;
    this.year = year;
    this.url = url;
    this.imgUrl = imgUrl;

}



Movie.prototype.toHTML = function () {

    var container = document.createElement("div");
    container.classList.add("col-sm-6");
    container.classList.add("col-md-4");
    container.innerHTML = "<div class=\"thumbnail text-center\"><img src=\"" + this.imgUrl + "\"><div class=\"caption\"><h3>" + this.title + "</h3><h4>" + this.year + "</h4><a href=\"" + this.url + "\" target=_blank class=\"btn btn-default btn-block\" role=\"button\">IMDB</a><button id=\"delete\"  class=\"btn btn-danger btn-xs\">delete</button>";

    var collection = document.getElementById("collection");
    collection.appendChild(container);

    function onDelete() {
        collection.removeChild(container);
    }
};

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

var removeItem = document.getElementById("delete");

removeItem.addEventListener("click", onDelete);
