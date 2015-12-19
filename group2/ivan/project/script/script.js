(function () {
	$('#accordion1 a').click(function (e) {
		e.preventDefault();
		$("#products").empty();
		var products = $(this).attr("data-filter");
		var resultSet = [];
		for (var i in itemsRoom) {
			var item = itemsRoom[i];
			if (products === "all" || item.group === products || item.kind === products) {
				resultSet.push(item);
			}
		}
		
		/// sort the result set
		
		for (var i in resultSet) {
			resultSet[i].toHtml();
		}
	});
	//$('#productsFilter').change(function(e) {
	//	e.preventDefault();
	//for (var i in
})();