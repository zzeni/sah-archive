var generateMenu = function(categories){
	var menu = $(".dropdown-menu");
	$.each(categories, function(index, category){
		var categoryName = category.categoryName;
		var li = '<li><a href="category.html?' + category.id + '">' + categoryName + '</a></li>';
		menu.append(li);
	})
}