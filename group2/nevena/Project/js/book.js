var params = location.search;
params = params.slice(1);
var categoryid = params.split('&')[0];
var bookid = params.split('&')[1];
var currentBook;


if (categoryid == 99) {
	$.getJSON("data/books.json", function(data){
		var categories = data.categories;
		generateMenu(categories);
	});
	$.getJSON("data/comingbooks.json", function(data){
		$.each(data.newbooks, function(index, book){
			if (bookid == book.id) {
				currentBook = book;
				return false;
			};


		});
		$('.title').text(currentBook.title);
		$('.author').append(currentBook.author);
		$('.publishers').append(currentBook.publishers);
		$('.review').text(currentBook.review);
		$('.cover').attr("src", currentBook.coverImageUrl);
	})
}
else{
	$.getJSON("data/books.json", function(data){
		var categories = data.categories;
		generateMenu(categories);
		var currentCategory;
		$.each(categories, function(index, category){
			if(category.id == categoryid){
				currentCategory = category;
				return false;
			}	
		})
		$.each(currentCategory.books, function(index, book){
			if (bookid == book.id) {
				currentBook = book;
				return false;
			};

		})
		$('.title').text(currentBook.title);
		$('.author').append(currentBook.author);
		$('.publishers').append(currentBook.publishers);
		$('.review').text(currentBook.review);
		$('.cover').attr("src", currentBook.coverImageUrl);
	});
}
