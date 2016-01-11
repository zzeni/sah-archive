var app = app || {};

$(document).ready(function(){
    (function(){

        var model = app.model.loadProduct('https://www.parse.com/1/classes/');

        app.viewModel.products = new app.viewModel.loadView(model);

        app.viewModel.products.showAllProducts();


    })();

});