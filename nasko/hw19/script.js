/*globals document */


"use strict";

function Movie(title, year, url, imgUrl){

    this.title = title;
    this.year = year;
    this.url = url;
    this.imgUrl = imgUrl;

}

Movie.prototype.toHtml = function () {
    var container = document.createElement("div");
    container.classList.add("col-lg-2");
    container.innerHTML = "<h4>" + this.title + " (" + this.year + ")</h4><img class='img-thumbnail' src='" + this.imgUrl + "' alt='html 5 image'><a href='";
}
    

var collection = document.getElementById("collection");
collection.appendChild(container);

function onFormSubmit(event) {
    event.preventDefault();

    var title = document.filmGenerator.title.value;
    var year = document.filmGenerator.year.value;
    var url = document.filmGenerator.url.value;
    var imgUrl = document.filmGenerator.imgUrl.value;
    var movie = new Movie(title, year, url, imgUrl);

    addMovie(title, year, url);
    movie.toHTML();
}

var form = document.filmGenerator;
form.addEventListener("submit", onFormSubmit);

