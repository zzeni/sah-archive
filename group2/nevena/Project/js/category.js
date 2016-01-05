var boxHolder = $('.box-holder');
var row = null;
var params = location.search;
params = params.slice(1);
var generateBox = function(categoryId, book){
	var sufix = '?' + categoryId + '&' + book.id;
	var box = '<div class="col-md-3 box"><div class="box-inner"><a href="book.html' + sufix + '"><h4>' + book.title + '</h4><p>' + book.author + 
		'</p><img class="img-responsive" src="' + book.coverImageUrl + '" /></a></div></div>';
	boxHolder.append(box);
}

if (params == 99) {
	$.getJSON("data/books.json", function(data){
		var categories = data.categories;
		generateMenu(categories);
	});
	$.getJSON("data/comingbooks.json", function(data){
	var newBooks = data.newbooks;
	var booksCount = -1;
		$.each(newBooks, function(index, book){
			//var sufix = '?99' + '&' + book.id;
			booksCount++;
			if (booksCount == 0 || booksCount % 4 == 0) {
				boxHolder.append('<div class="row"></div>');
				if(row == null){
					row = $('.box-holder .row');
				}
			};
			generateBox("99", book);
		});
	});
}
else{
	$.getJSON("data/books.json", function(data){
		var categories = data.categories;
		generateMenu(categories);
		var booksCount = -1;
		$.each(categories, function(index, category){
			if(category.id == params){
				var header = $('h4');
				header.text(category.categoryName);
				$.each(category.books, function(index, book){
					booksCount++;
					if (booksCount == 0 || booksCount % 4 == 0) {
						boxHolder.append('<div class="row"></div>');
						if(row == null){
						row = $('.box-holder .row');
						}
					};
					generateBox(category.id, book);
				});
				return false;
			}	
		})
	});
}