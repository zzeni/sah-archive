var cart = [];
(function () {
	//==================================================================================//
	// Items in Cart start
	$("#products").on("click", ".cart", function (e) {
		e.preventDefault();
		var num = $(this).attr("data-cart");
		for (var i in itemsRoom) {
			var item = itemsRoom[i];
			if (num == item.id) {
				cart.push(item);
				item.toCart();
			}
		}
	});
	// Items in Cart end
	//=================================================================================//
	// open Cart start
	$("#openCart").click(function (e) {
		e.preventDefault();
		$('#cartModal').modal();
	});
	// open Cart end
	//================================================================================//
	// remove Items from Crart start
	$("#cartModal").on("click", ".remove", function (e) {
		e.preventDefault();
		$(this).closest('.row').remove();
		var num = $(this).attr("data-cart");
		for (var i in cart) {
			var item = cart[i];
			if (num == item.id) {
				var index = cart.indexOf(item);
				if (index > -1) {
					cart.splice(index, 1);
				}
			}
		}
	});
	// remove Items from Crart end
	//================================================================================//
})();