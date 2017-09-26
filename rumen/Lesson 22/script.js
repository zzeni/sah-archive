/*global $,document*/
(function () {
    function Movie(name, year, url, imgUrl) {
        this.name = name;
        this.year = year;
        this.url = url;
        this.img = imgUrl;
    }
    Movie.prototype.toHTML = function () {
        var container = document.createElement("div");
        container.classList.add("col-sm-6");
        container.classList.add("col-md-2");
        container.style.padding = "10px";
        container.innerHTML = "<div class=\"thumbnail\"><img src=\"" + this.img + "\"><div class=\"caption\"><h3>" + this.name + this.year + "</h3><p><a href=\"" + this.url + "\" class=\"btn btn-primary\" role=\"button\">Button</a></p>";
        var filmContainer = document.getElementById('filmContainer');
        filmContainer.appendChild(container);

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
    $.getJSON("movies.json", function (data) {
        var nextMovie;
        for (var i = 0; i < data.length; i += 1) {
            nextMovie = new Movie(data[i].name, data[i].year, data[i].imdb, data[i].picture);
            nextMovie.toHTML();
        }

    });

    var form = document.filmGenerator;
    form.addEventListener("submit", onFormSubmit);
    $("button").on("click", function () {
        fetch("batman");
    });

    function fetch(partial) {
        var template = "_%partial%.html".replace("%partial%", partial);
        $("#filmContainer").load(template);
    }
})();
