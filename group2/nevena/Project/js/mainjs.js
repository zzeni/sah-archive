var boxHolder = $('.box-holder');
var categories = {};

var generateBooks = function (categories, search) {
	$(boxHolder).empty();
	var booksCount = 0;

	$.each(categories, function(index, category){
		var categoryId = category.id;
		$.each(category.books, function(index, book){
			var titile = book.title.toLowerCase();
			var author = book.author.toLowerCase();
			if (search === undefined || titile.indexOf(search) > -1 || author.indexOf(search) > -1) {
				addBook(categoryId, book, booksCount);
				booksCount++;
			}
		});
	});
	boxHolder.append('<div class="row"></div>');
};

var addBook = function (categoryId, book, count){
		if (count % 4 === 0) {
			boxHolder.append('<div class="row"></div>');
		};
		var sufix = '?' + categoryId + '&' + book.id;
		var box = '<div class="col-md-3 box"><div class="box-inner"><a href="book.html' + sufix + '"><h4>' + book.title + '</h4><p>' + book.author + 
		'</p><img class="img-responsive" src="' + book.coverImageUrl + '" /></a></div></div>';
		$('.box-holder .row').last().append(box);
};

$.getJSON("data/books.json", function(data){
	categories = data.categories;
	generateMenu(categories);
	generateBooks(categories);
});

$('.form-control').keyup(function(){
	var inp = $(this).val().toLowerCase();
	generateBooks(categories, inp);
});

