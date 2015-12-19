(function () {
	"use strict";

	$('#accordion1 a').click(function (e) {
		e.preventDefault();
		$("#products").empty();
		var products = $(this).attr("data-filter");
		for (var i in itemsRoom) {
			var item = itemsRoom[i];
			if (products === "all" || item.group === products || item.kind === products) {
				item.toHtml();
			}
		}
	});
	//$('#productsFilter').change(function(e) {
	//	e.preventDefault();
	//for (var i in
})();