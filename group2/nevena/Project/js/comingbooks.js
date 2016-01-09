$.getJSON("data/comingbooks.json", function(data){
	var newBooks = data.newbooks;
	$.each(newBooks, function(index, book){
		var sufix = '?99' + '&' + newBooks.id;
		var box = '<div class="col-md-3 box"><div class="box-inner"><a href="book.html' + sufix + '"><h4>' + newBooks.title + '</h4><p>' + newBooks.author + 
		'</p><img class="img-responsive" src="' + newBooks.coverImageUrl + '" /></a></div></div>';
		var boxHolder = $('.box-holder');
		boxHolder.append(box);
	});
});