var cart = {};
(function () {
  //==================================================================================//
  // Items in Cart start
  $("#products").on("click", ".cart", function (e) {
    e.preventDefault();
    var num = $(this).attr("data-cart");
    if (cart[num] !== undefined) {
      cart[num].count++;
    } else {
      for (var i in itemsRoom) {
        var item = itemsRoom[i];
        if (num == item.id)
          cart[item.id] = new cartItem(item);
      }
    }
    updateCartTotal()
  });
  // Items in Cart end
  //=================================================================================//
  // open Cart start
  $("#openCart").click(function (e) {
    e.preventDefault();
    $(".modal-body").empty();
    for (var itemId in cart) {
      cart[itemId].toCart();
    }
    $('#cartModal').modal();

  });
  // open Cart end
  //================================================================================//
  // remove Items from Crart start
  $("#cartModal").on("click", ".remove", function (e) {
    e.preventDefault();
    $(this).closest('.row').remove();
    var num = $(this).attr("data-cart");
    if (cart[num] !== undefined) delete cart[num];
  });
  // remove Items from Crart end
  //================================================================================//
  // change quantity by input start
  $("#cartModal").on("change", "input", function (e) {
    e.preventDefault();
    var inp = $(this).attr("data-itemId");
    var val = $(this).val();
    if (cart[inp] !== undefined) {
      cart[inp].count = Number(val);
    }
    $(".modal-body").empty();
    for (var itemId in cart) {
      cart[itemId].toCart();
    }
    updateCartTotal()
  });
  // change quantity by input end
  //===============================================================================//	
})();

function getTotalCost() {
  var totalPrice = 0;
  for (var item in cart) {
    var amount = cart[item].amount();
    if (amount !== undefined)
      totalPrice += amount;
  }

  return totalPrice;
}

function updateCartTotal() {
  $("#cartSum").html(getTotalCost());
}