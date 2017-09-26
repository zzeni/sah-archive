"use strict";

function Movie(name, year, url, imgUrl){

    this.name = name;
    this.year = year;
    this.url = url;
    this.imgUrl = imgUrl;
}

Movie.prototype.toHTML = function () {

    var container = document.createElement("div");
    container.classList.add("col-sm-4");
    container.classList.add("col-md-3");
    container.innerHTML = "<div class=\"thumbnail text-center\"><img src=\"" + this.imgUrl + "\"><div class=\"caption\"><h3>" + this.name + "</h3><h3>" + this.year + "</h3><a href=\"" + this.url + "\" target=_blank class=\"btn btn-success btn-space btn-block\" role=\"button\">URL</a><button id=\"delete\"  class=\"btn btn-primary btn-space btn-sm\">Delete</button>";
    

    var collection = document.getElementById("collection");
    collection.appendChild(container);

    function onDelete() {
        collection.removeChild(container);
    }
};

function onFormSubmit(event) {

    event.preventDefault();

    var name = document.listCreator.name.value;
    var year = document.listCreator.year.value;
    var url = document.listCreator.url.value;
    var imgUrl = document.listCreator.imgUrl.value;
    var movie = new Movie(name, year, url, imgUrl);

    movie.toHTML();
}


var form = document.listCreator;
form.addEventListener("submit", onFormSubmit);