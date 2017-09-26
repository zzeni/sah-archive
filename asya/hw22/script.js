(function() {

function Movie(title, year, url, imgUrl){

    this.title = title;
    this.year = year;
    this.url = url;
    this.imgUrl = imgUrl;
}

Movie.prototype.toHTML = function () {

    var container = document.createElement("div");
    container.classList.add("col-sm-4");
    container.classList.add("col-md-3");
    container.innerHTML = "<div class=\"thumbnail text-center\"><img src=\"" + this.imgUrl + "\"><div class=\"caption\"><h3>" + this.title + "</h3><h3>" + this.year + "</h3><a href=\"" + this.url + "\" target=_blank class=\"btn btn-success btn-space btn-block\" role=\"button\">URL</a><button id=\"delete\"  class=\"btn btn-primary btn-space btn-sm\">Delete</button>";

    var collection = document.getElementById("collection");
    collection.appendChild(container);
};

function onFormSubmit(event) {
    event.preventDefault();

    var title = document.listCreator.title.value;
    var year = document.listCreator.year.value;
    var url = document.listCreator.url.value;
    var imgUrl = document.listCreator.imgUrl.value;
    var movie = new Movie(title, year, url, imgUrl);

    movie.toHTML();
}

$.getJSON('movies.json', function (data) {
    var nextMovie;
    
    for (var first = 0; first < data.length; first++) {
        nextMovie = new Movie(data[first].title, data[first].year, data[first].url, data[first].img);
        nextMovie.toHTML();
    }
});

$("#fetch-well").on("click", function () {
    fetch("well");
});

$("#fetch-services").on("click", function () {
    fetch("services");
});

$("#fetch-about").on("click", function () {
    fetch("about");
});

function fetch(partial) {
    var template = "template/_%partial%.html".replace("%partial%", partial);
    $("#dynamic-part").load(template);
    }
})();
