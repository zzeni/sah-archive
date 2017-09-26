$(document).ready(function(){
    products = [];
    $.getJSON("./data-factory/female.json", function (data) {
        data.forEach(function (element) {
            var product = new Product(element.id, element.type, element.brand, element.price, element.color, element.img, element.inStock, element.size);
            products.push(product);
            product.toHtml();
        });
    });
});


//# sourceURL=female.js