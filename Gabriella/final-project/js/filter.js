var rangepicker;
$(document).ready(function(){

    rangepicker = $("#double_number_range").rangepicker({
       type: "double",
       startValue: 0,
       endValue: 1000,
       translateSelectLabel: function(currentPosition, totalPosition) {
           return parseInt(1000 * (currentPosition / totalPosition));
       }
    });

    $("#do-filter").click(function () {
        var colorFilter = $("#color-filter").val();
        var brandFilter = $("#brand-filter").val();
        var sizeFilter = $("#size-filter").val();
        var filteredProducts = filterProducts(colorFilter, brandFilter, sizeFilter);
        drawProducts(filteredProducts);
    })

    $("#clear-filter").click(function () {
        $("#color-filter").val("");
        $("#brand-filter").val("");
        $("#size-filter").val("");
        rangepicker.updatePosition("100%", "0%");
        drawProducts(products);
    })

    function filterProducts(color, brand, size) {
        if (color == "" && brand == "" && size == "" && rangepicker.getSelectValue().startLabel == 0 &&
                rangepicker.getSelectValue().endLabel == 1000) {
            return products;
        }
        var filteredProducts = [];
        if (color != "") {
            filteredProducts = getCollectionToFilter(filteredProducts).filter(function (product) {
                return product.color == color;
            });
        }
        if (brand != "") {
            filteredProducts = getCollectionToFilter(filteredProducts).filter(function (product) {
                return product.brand == brand;
            });
        }
        if (size != "") {
            filteredProducts = getCollectionToFilter(filteredProducts).filter(function (product) {
                return $.inArray(size, product.size) > -1;
            });
        }
        if (rangepicker.getSelectValue().startLabel != 0 || rangepicker.getSelectValue().endLabel != 1000) {
            filteredProducts = getCollectionToFilter(filteredProducts).filter(function (product) {
                return rangepicker.getSelectValue().startLabel <= product.price && product.price <= rangepicker.getSelectValue().endLabel;
            });
        }
        return filteredProducts;
    }

    function getCollectionToFilter(filteredProducts) {
        if (filteredProducts.length > 0) {
            return filteredProducts;
        }
        return products;
    }

    function drawProducts(filteredProducts) {
        $("#productsLib").html("");
        filteredProducts.forEach(function (product) {
            product.toHtml();
        })
    }


});



//# sourceURL=filter.js
