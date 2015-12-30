var cart = [];
(function () {

	$("#products").on("click", ".cart", function () {
		var num = $(this).attr("data-cart");
		for (var i in itemsRoom) {
			var item = itemsRoom[i];
			if (num == item.id)
				cart.push(item);
		}
	});
	$("#openCart").click(function () {
		for (var i in cart) {
			var item = cart[i];
			item.toCart();
		}
	});
})();