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
        container.classList.add("movieContainer");
        container.innerHTML = "<h4>" + this.title + " (" + this.year + ")</h4><img class='img-thumbnail' src='" + this.imageUrl + "' alt='movie-default.jpg'><a href='" + this.imdbUrl + "'>Show in IMDB</a></div>";
        document.getElementById('movieLib').appendChild(container);
    };

   var movies = [];
	
	$.getJSON("movies.json", function (data) {
      $.each(data.items, function(i,item){
    		movies.push(new Movie(item.title, item.year, item.imdbUrl, item.imageUrl));
		});
        printMovies();
	});
	
	function printMovies() {
		movies.each(function(movie) {
			movie.toHtml();
		})
	}
    
    $(".movieContainer").on("click", function () {
        var infoUrl = $(this).find("a").attr("src");
        $("#movieInfoContainer").load(infoUrl, function () {

        });
    });
})();
