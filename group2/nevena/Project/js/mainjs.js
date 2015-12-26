var boxHolder = $('.box-holder');
var row = null;
$.getJSON("data/books.json", function(data){
	var categories = data.categories;
	generateMenu(categories);
	var booksCount = -1;
	$.each(categories, function(index, category){
		var categoryId = category.id;
		$.each(category.books, function(index, book){
			booksCount++;
			if (booksCount == 0 || booksCount % 4 == 0) {
				boxHolder.append('<div class="row"></div>');
				if(row == null){
					row = $('.box-holder .row');
				}
			};
			var sufix = '?' + categoryId + '&' + book.id;
			var box = '<div class="col-md-3 box"><div class="box-inner"><a href="book.html' + sufix + '"><h4>' + book.title + '</h4><p>' + book.author + 
			'</p><img class="img-responsive" src="' + book.coverImageUrl + '" /></a></div></div>';
			row.last().append(box);
		})
	})
});


