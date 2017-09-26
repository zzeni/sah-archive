$(document).ready(function(){
    var basket = JSON.parse(localStorage.getItem("basket"));
     printBasket();

    function printBasket() {
        var basketHtml = "<ul>";
        if (basket.length == 0) {
            basketHtml = "<div id='empty-basket=message'>Your basket is empty</div>"
        } else {
            var sum = 0;
            basket.forEach(function (product) {
                basketHtml += "<li><img src='" + product.img + "' class='basket-img'><div id='item-info'>" +
                            product.brand + "; price: " + product.price.toFixed(2) + " $    " +
                            "</div><button class='btn btn-warning' item-id='" + product.id +
                            "' id='remove-item'>Remove</button></li>";
                sum += product.price;
            })
            basketHtml += "<div id='overall-price'>Overall: " + sum.toFixed(2) +
            "$</div><div id='empty-basket'><button class='btn btn-danger' id='clear-basket'>Clear basket</button></ul>";
        }
        $('#basket-content').html(basketHtml);

    }

    $("body").on("click", "#remove-item", function () {
        var itemId = $(this).attr("item-id");
        basket.forEach(function (item, index) {
            if (itemId == item.id) {
                basket.splice(index, 1);
            }
        })
        itemCount--;
        checkBasketState();
        localStorage.setItem("basket", JSON.stringify(basket));
        printBasket();
        new PNotify({
            title: 'Done !',
            text: 'Item removed',
            styling: 'fontawesome'
        });
    })

    $("body").on("click", "#clear-basket", function () {
        basket = [];
        localStorage.setItem("basket", JSON.stringify(basket));
        itemCount = 0;
        checkBasketState();
        printBasket();
        new PNotify({
            title: 'Done !',
            text: 'Your basket was cleared',
            styling: 'fontawesome'
        });
    })

    function checkBasketState() {
        if (itemCount > 0) {
            $('#itemCount').html(itemCount).css('display', 'block');
        } else {
            $('#itemCount').html(itemCount).css('display', 'none');
        }
    }
});

//# sourceURL=basket.js