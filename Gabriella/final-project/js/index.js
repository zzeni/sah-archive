function Product(id, type, brand, price, color, img, inStock, size) {
    this.id = id;
    this.type = type;
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.img = img;
    this.inStock = inStock;
    this.size = size;
}

Product.prototype.toHtml = function () {
    var container = document.createElement("div");
    container.classList.add("col-md-2");
    container.classList.add("mb-5");
    container.classList.add("productContainer");
    container.innerHTML = "<h4>" + this.brand + " (" + this.price.toFixed(2) + " $)</h4><img class='img-thumbnail' src='" + this.img + "' >" +
    "<button class='btn btn-success' id='buy-button' item-id='" + this.id +"'>Add to basket</div>";
    document.getElementById('productsLib').appendChild(container);
};

var products = [];
var itemCount = 0;

PNotify.prototype.options.delay = 3000;

var isUserLogged = false;

$(document).ready( function() {

    $("#main-content").load("pages/main.html");

    $.getJSON("./data-factory/users.json", function (data) {
        localStorage.setItem("users", JSON.stringify(data));
    })

    var loggedUser;

    $("#login-form").validate({
        rules: {
            username : {
                required: true
            },
            password : {
                required: true
            }
        }
    })

    $.validator.addMethod('validUsername', function (value, element) {
       if (/^[A-Za-z0-9_]+$/i.test(value)) {
            return true;
       }
       return false;
    }, "Only letters (either case), numbers, and the underscore; 3 symbols minimum");

    $.validator.addMethod('validPassword', function (value, element) {
        if (/^(?=.*[A-Z])[0-9a-zA-Z]\S{5,27}$/.test(value)) {
            return true;
        }
        return false;
    }, "Please input 6 or more symbol and at least one upper case character without whitespaces");

    $.validator.addMethod('passMatch', function (value, element) {
        var password = $("#reg-password").val();
        return value === password;
    }, "Passwords don't match");

    $.validator.addMethod('unavailableUsername', function (value, element) {
        var data = JSON.parse(localStorage.getItem("users"));
        var valid = true;
        data.forEach(function (user) {
           if (user.username == value) {
               valid = false;
           }
        })
        return valid;
    }, "Username already taken");

    $.validator.addMethod('validEmail', function (value, element) {
        if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
            return true;
        }
        return false;
    }, "Email does not seem valid");

    $("#register-form").validate({
        rules: {
            reg_username: {
                required: true,
                validUsername: true,
                unavailableUsername: true
            },
            reg_password: {
                required: true,
                validPassword: true
            },
            passwordRepeat: {
                required: true,
                passMatch: true
            },
            reg_email: {
                required: true,
                validEmail: true
            },
            gender: {
                required: true
            }
        },
        errorPlacement: function(error, element) {
          if (element.attr("name") == "gender") {
             error.insertAfter(element.closest(".form-field-group"));
          } else {
             error.insertAfter(element);
          }
        }
    })

    $("#login-button").click(function (e) {
        e.preventDefault();
        if ($("#login-form").valid()) {
            var data = JSON.parse(localStorage.getItem("users"));
            var valid = false
            data.forEach(function (user) {
                if (user.username == $("#username").val() && user.password == $("#password").val()) {
                   loggedUser = user;
                   valid = true;
                   $("#greeting-text").html("Hello, " + user.username);
                }
            })
            if (valid) {
                $("#non-logged-nav-right").hide();
                $("#logged-nav-right").show();
                $("#login-modal").modal("hide");
                localStorage.setItem("basket", JSON.stringify([]));
                isUserLogged = true;
            } else {
                $("#bad-credentials-error").show();
            }
        }
    })

    $("#register-button").click(function (e) {
        e.preventDefault();
        if ($("#register-form").valid()) {
            var newUser = {};
            newUser.username = $("#reg-username").val();
            newUser.password = $("#reg-password").val();
            newUser.email = $("#reg-email").val();
            newUser.gender = $('input[name = "gender"]:checked').val();
            var data = JSON.parse(localStorage.getItem("users"));
            data.push(newUser);
            localStorage.setItem("users", JSON.stringify(data));
            $("#register-modal").modal("hide");
        }
    })

    $("#logout-button").click(function () {
        $("#non-logged-nav-right").show();
        $("#logged-nav-right").hide();
        $("#main-content").load("pages/main.html");
        isUserLogged = false;
        $('#itemCount').html(itemCount).css('display', 'none');
        itemCount = 0;
    })

    $("#contacts-link").click(function () {
        $("#main-content").load("pages/contacts.html");
    })

    $("#home-link").click(function () {
        $("#main-content").load("pages/main.html");
    })

    $("#about-link").click(function () {
        $("#main-content").load("pages/about_us.html");
    })

    $("#male-products-link").click(function () {
        $("#main-content").load("pages/male_products.html");
    })

    $("#female-products-link").click(function () {
        $("#main-content").load("pages/female.html");
    })

    $("#outlet-link").click(function () {
        $("#main-content").load("pages/outlet.html");
    })

    $("#show-all-link").click(function () {
        $("#main-content").load("pages/show_all.html");
    })

    $("#shopping-card-icon").click(function () {
        $("#main-content").load("pages/basket.html");
    })

    $('body').on("click", "#buy-button", function (e) {
        if (isUserLogged) {
            var basket = JSON.parse(localStorage.getItem('basket'));
            basket.push(getProduct($(this).attr('item-id')));
            localStorage.setItem("basket", JSON.stringify(basket));
            itemCount ++;
            $('#itemCount').html(itemCount).css('display', 'block');
            new PNotify({
                title: 'Done !',
                text: 'Item successfully added into basket',
                type: 'success',
                styling: 'fontawesome'
            });

        } else {
            new PNotify({
                title: 'Oops !',
                text: 'Please login to shop',
                type: 'error',
                styling: 'fontawesome'
            });
        }
    })

    function getProduct(id) {
        var result;
        products.forEach(function (product) {
            if (product.id == id) {
                result = product;
            }
        })
        return result;
    }
})