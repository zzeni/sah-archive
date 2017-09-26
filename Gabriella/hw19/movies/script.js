(function () {
    "use strict";

    function Movie(title, year, imdbUrl, imageUrl) {
        this.title = title;
        this.year = year;
        this.imdbUrl = imdbUrl;
        this.imageUrl = imageUrl;
    }

    Movie.prototype.toHtml = function () {
        var container = document.createElement("div");
        container.classList.add("col-md-2");
        container.innerHTML = "<h4>" + this.title + " (" + this.year + ")</h4><img class='img-thumbnail' src='" + this.imageUrl + "' alt='movie-default.jpg'><a href='" + this.imdbUrl + "'>Show in IMDB</a></div>";
        document.getElementById('movieLib').appendChild(container);
    }

    document.getElementById("submitMovie").addEventListener("click", function (e) {
        e.preventDefault()
        new Movie(document.getElementById("movieTitle").value,
            document.getElementById("releaseYear").value,
            document.getElementById("imdbLink").value,
            document.getElementById("imageUrl").value).toHtml();
    });
})();