$(document).ready(function() {
    products = [];
    $.getJSON("./data-factory/male.json", function (data) {
        data.forEach(function (element) {
            var product = new Product(element.id, element.type, element.brand, element.price, element.color, element.img, element.inStock, element.size);
            products.push(product);
            product.toHtml();
        });
    });
});


//# sourceURL=male.js