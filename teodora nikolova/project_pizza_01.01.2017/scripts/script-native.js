"use strict";
$(document).ready(function () {

    $.getJSON("../scripts/pizza.json", function (pizzas) {
        window.pizzas = pizzas;
        searchByText("");
        render(pizzas);

    });
    $("#search").keyup(function(evt){
        var searchTerm = $(this).val();
        searchByText(searchTerm);
    });

    $("#byPrice").click(function(){
        sortByField("price");
    });
    $("#byName").click(function(){
        sortByField("name");
    });
    $("#byType").click(function(){
        sortByField("type");
    })

});



var template_Pizza = '<div class="pizza">\
    <div class="box box-info">\
    <div class="box-heading">\
    <h3 class="pizza-title">{name}</h3>\
    </div>\
    <div class="box-body">\
    <div class="col-sm-4">\
    <img class="img-responsive" src="../images/food/pizza/{photo}">\
    </div>\
    <div class="col-sm-8">\
    <ul class="pizza-items">\
    <li><h5 class="products"><span class="newLine">Продукти:</span> {products}</h5></li>\
<li><h5 class="products"><span class="newLine">Алергени:</span> {allergens}</h5></li>\
<li><h5 class="products"><span class="newLine">Тип: </span>{type}</h5></li>\
 <li><h5 class="products">Цена: <span class="price">{price}<button   id="addToBag">Добави \
 <i class="fa fa-shopping-bag" aria-hidden="true"></i></button></span></h5></li>\
</ul>\
</div>\
</div>\
</div>\
</div>';


function render(pizzas) {
    $("#pizzas").empty();
    $.each(pizzas, function (byte, pizza) {
        var rendered = template_Pizza.replace("{name}", pizza.name)
            .replace("{photo}", pizza.photo)
            .replace("{products}", pizza.products)
            .replace("{allergens}", pizza.allergens)
            .replace("{type}", pizza.type)
            .replace("{price}", pizza.price);
        $("#pizzas").append(rendered);

    })
}
function searchByText(text) {
    var filtered = pizzas;
    if(text.length > 0){
        filtered = pizzas.filter(function(pizza){
            return JSON.stringify(pizza).toLowerCase().indexOf(text.toLowerCase()) > 0;
        });
    }

    window.filtered = filtered;
    render(filtered);
}


function sortByField(fieldName) {
    var sorted = filtered.sort(function(item1, item2){

        var field1 = item1[fieldName];
        var field2 = item2[fieldName];
        if(typeof field1 == "number"){
            return field1-field2;
        } else { //string assumed
            return field1.localeCompare(field2);
        }
    });
    render(sorted);

}

//това за сега не работи-за пълнене на количката с артикули

var theTotal = 0;
$('addToBag').click(function(){
    theTotal = Number(theTotal) + Number($(this).val());
    $('.priceAll').text(+theTotal);
});