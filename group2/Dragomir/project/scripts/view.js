var app = app || {};


app.viewModel = (function(){

    function ViewModel(model){
        this.model = model;
        this.attachEventListeners();
        this.boughtProducts = [];
        this.buttons = [];
    }


    ViewModel.prototype.showAllProducts = function(){

        this.model.getAll(function(product){

                var allProducts = product.results;
                allProducts.forEach(function(e){

                    if(!e.isBought){
                        addProductToDom(e);
                    }

                    //console.log(e);
                });
            },
            function(error){
                console.log(error.responseText);
                return false;
            });
    };

    ViewModel.prototype.attachEventListeners = function(){


        var sum = 0;

        this.model.getAll(function(product){

            allProducts = product.results;


            },
            function(){
                console.log('cant take product');
                return false;
            });



        var addProduct = $('#addProduct');
        addProduct.click(function(){
            app.viewModel.products.addProduct();
        });

        // --------sortirane po kategorii --------
        var marks = $('.marks');
        marks.click(function(event){
            var selector = event.target.id;
            var phoneContainer = $('.phoneContainer');

            phoneContainer.empty();
            if(selector == 'All'){
                app.viewModel.products.showAllProducts();
                return;
            }

            app.viewModel.products.model.getAll(function(product){

                    var allProducts = product.results;
                    console.log(allProducts);

                    allProducts.forEach(function(element){
                        if(!element.isBought){

                            addProductToDom(element,null,selector);
                        }
                    });

                },
                function(error){
                    console.log(error.responseText);
                    return false;
                });


            console.log('READY');

        });

        //  -------show shopping card--------
        var shoppingCart = $('#shopping-cart');
        shoppingCart.click(function(event){
            $('#shoppingContainer').empty();

            sum = 0;
            app.viewModel.products.model.getAll(function(product){

                    var allProducts = product.results;

                    allProducts.forEach(function(element){

                        if(element.isBought){

                            sum += Number(element.price);
                            addToShoppingCard(element);           // dobavqme kum DOM markiranite produkti

                            var sumValue = $('#sum');
                            sumValue.text('in total: ' + sum + ' lv');

                        }

                    });
                },
                function(){
                    console.log('cant take product');
                    return false;
                });

        });
        function addToShoppingCard(product){


            var valProductName  = product.productName + '';
            var valIsNew        = product.isNew       == 'on' || true ? 'Yes' : 'No';
            var valInGuarantee  = product.inGuarantee == 'on' || true ? 'Yes' : 'No';
            var valPrise        = Number(product.price);
            var prID            = product.objectId ? product.objectId : timeAndId.objectId;
            var btnId           = prID + 2;

            var htmlEl = '\
                <div class="col-sm-3 col-lg-3 col-md-3" id= '+ prID +'>\
                <div class="thumbnail">\
                <img src="http://placehold.it/320x150" alt="">\
            <div class="caption" style="height: 155px">\
            <h4 class="pull-right"> '+valPrise      +' lv</h4>\
            <h4><a href="#">'        + valProductName       +'</a></h4>\
            <p>new: '                + valIsNew             +'</p>\
            <p>guarantee: '          + valInGuarantee       +'</p>\
            <button class="btn btn-danger removeFromCard" id=' + btnId + '>remove</button>\
            </div>\
            </div>\
            </div>';



            $('#shoppingContainer').append($(htmlEl))

        }

        // ------Remove from shopping card-------
        var shoppingContainer = $('#shoppingContainer');
        shoppingContainer.click(function(event){

            var elementId = event.target.id;

            app.viewModel.products.model.getAll(function(product){

                var allProducts = product.results;

                    allProducts.forEach(function(e){
                        var productId = e.objectId + 2;

                        if(elementId == productId){
                            console.log(e);


                            var totalSum = $('#sum ');
                            var ID =  e.objectId;
                            var obj = {isBought : false};
                            app.viewModel.products.model.put(ID, obj, function(obj){
                                var currentEl = $(event.target.parentNode.parentNode);

                                sum -= e.price;
                                console.log(sum + ' izvajdane' );

                                totalSum.text('in total: ' + sum);
                                currentEl.remove();


                                console.log(obj.responseText)
                            },function(error){
                                console.log(error.responseText)
                            });


                        }
                    })

                },
                function(error){
                    console.log('ne iska da stane');
                    return false;
                });

        });

        // ------Show all phones-----
        var allPhones = $('#allPhones');
        allPhones.click(function(event){
            var productContainer = $('#productContainer');

            productContainer.empty();

            app.viewModel.products.showAllProducts();
        });

        // -------Dobavqne v koli4kata -------

        var phoneContainer = $('.phoneContainer');
        phoneContainer.click(function(event){

            var buttons        = app.viewModel.products.buttons;
            var currentButton  = '#' + event.target.getAttribute('id');

            console.log('phone container ! ! !');

            buttons.forEach(function(e){

                if(currentButton == e.selector){
                    console.log('suvpadenie ! ! ! ! !');
                    console.log(event.target);
                    $(event.target).text('added');
                    $(event.target).addClass('added');

                }

            });


            app.viewModel.products.model.getAll(function(product){      // dobavqne na zaqvka
                console.log('dobavena zaqvka');
                var allProducts = product.results;

                allProducts.forEach(function(element){


                    if ('#' + element.objectId + 1 == currentButton){
                        element.isBought = true;
                        element.ownerPhone = element.ownerPhone + "";
                        element.price = element.price + '';

                        var ID =  element.objectId;
                        var obj = {isBought : true};
                        app.viewModel.products.model.put(ID, obj, function(obj){  // PUT Request for isBought = true

                            console.log('PUT ready');

                            console.log(obj.responseText)
                        },function(error){
                            console.log(error.responseText)
                        });

                    }
                })


                },function(error){
                console.log('ne iska da stane');
                return false;
            });



        });

        // ------ Buy Products -------

        var payNow = $('#payNow');
        payNow.click(function(event){
            app.viewModel.products.model.getAll(function(product){

                    var allProducts = product.results;
                    var boughtProducts = [];

                    allProducts.forEach(function(element){

                        if(element.isBought){
                            boughtProducts.push(element);
                        }

                    });
                    boughtProducts.forEach(function(element){

                        $('#shoppingContainer').empty();
                        app.viewModel.products.delete(element.objectId);

                    })
                },
                function(error){
                    console.log('ne iska da stane');
                    return false;
                });
        })


    };

    ViewModel.prototype.addProduct = function(){

        var ownerName   =  $('#ownerName').val();
        var ownerPhone  = +$('#ownerPhone').val();
        var productName =  $('#productName').val();
        var isNew       =  Boolean($('#isNew').val());
        var inGuarantee =  Boolean($('#inGuarantee').val());
        var city        =  $('#city').val();
        var price       = +$('#price').val();
        var pic         =  $('#img').val();

        console.log(pic);

        var checkName = ownerName.match(/[A-z]+/);
        var checkCity = city.match(/[A-z]+/);



        if(!checkName ||  !checkCity ){
            alert('Invalid, city or name');
            return;
        }
        if(ownerPhone == 0 || price == 0){
            alert('Invalid, number or price')
            return;
        }

        var newProduct = {
            ownerName   :ownerName,
            ownerPhone  :ownerPhone,
            productName :productName,
            isNew       :isNew,
            inGuarantee :inGuarantee,
            city        :city,
            price       :price,
            isBought    :false,
            pic         :pic
        };

        this.model.postProduct(newProduct, function(obj){
                var timeAndId = obj;
                addProductToDom(newProduct,timeAndId);
                console.log('ADDED PRODUCT');
                document.getElementById("addYourProduct").reset();

            },function(erorr){
                console.log(erorr.responseText);
                document.getElementById("addYourProduct").reset();
            }
        )
    };

    ViewModel.prototype.delete = function(id){

        this.model.deleteProduct(id,
            function(obj){
                console.log('DELETE');
                console.log(obj);
            },
            function(error){
                console.log(error.responseText);
                console.log('ne se trie');
            })

    };

    function addProductToDom(product,timeAndId, selector){


        if(!selector){
            createElement(product);

        }else if (selector && product.productName == selector){
            createElement(product);
            //console.log('IMA selektor');
        }


        function createElement(product){
            var product = product;


            var valOwnerName    = product.ownerName + '';
            var valOwnerPhone   = Number(product.ownerPhone);
            var valProductName  = product.productName + '';
            var valIsNew        = product.isNew       == 'on' || true ? 'Yes' : 'No';
            var valInGuarantee  = product.inGuarantee == 'on' || true ? 'Yes' : 'No';
            var valCity         = product.city + '';
            var valPrise        = Number(product.price);
            var prID            = product.objectId ? product.objectId : timeAndId.objectId;
            var createdAt       = product.createdAt ? product.createdAt : timeAndId.createdAt;
            var currentTime     = createdAt.match(/\d+-\d+-\d+/g);

            var buttonID        = prID + 1;



            var htmlEl = '\
                <div class="col-sm-4 col-lg-4 col-md-4" id= '+ prID +'>\
                <div class="thumbnail">\
                <img src="http://placehold.it/320x150" alt="">\
            <div class="caption">\
            <h4 class="pull-right"> '+valPrise      +' lv</h4>\
            <h4><a href="#">'+ valProductName       +'</a></h4>\
            <p>name: '       + valOwnerName         +'</p>\
            <p>phone:'       + valOwnerPhone        +'</p>\
            <p>new: '        + valIsNew             +'</p>\
            <p>guarantee: '  + valInGuarantee       +'</p>\
            <p>city: '       + valCity              +'</p>\
            <p>added in: '   + currentTime          +'</p>\
            <button id='     + buttonID             +' class="btn btn-primary buyButton">Add ot <span class="glyphicon glyphicon-shopping-cart"></span></button>\
            </div>\
            </div>\
            </div>';




            app.viewModel.products.buttons.push($('#'+buttonID));


            var phoneContainer = $('.phoneContainer');

            phoneContainer.append($(htmlEl));



        }

    }

    return {
        loadView : function(model){
            return new ViewModel(model);
        }
    }



})();
