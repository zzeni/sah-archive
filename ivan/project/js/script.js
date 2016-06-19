$(document).ready(function () {

    // My namespace.
    var common = {};

    // browser window scroll (in pixels) after which the "back to top" link is shown
    common.offset = 300;
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    common.offset_opacity = 1200;
    //duration of the top scrolling animation (in ms)
    common.scroll_top_duration = 700;
    //grab the "back to top" link
    common.$back_to_top = $('.cd-top');

    common.appendItems = function (parent, itemsList) {

        itemsList.forEach(function (item) {
            parent.append(item.generateHTML());
        });

    };


    function carouselControls() {
        $("#myCarousel").carousel({
            interval: 5000
        });

        $("#carousel-pause").click(function () {
            $("#myCarousel").carousel('pause');
        });

        $("#carousel-play").click(function () {
            $("#myCarousel").carousel('cycle');
        });
    }



    // Add smooth scrolling to all links in navbar + footer link
    $("a[href*='#']").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;


            /*$('.navbar a').each(function () {
                $(this).parent().removeClass('active');
            })
            $(this).parent().addClass('active');*/


            if ($('.navbar-nav li.active').length === 0) {
                $('.navbar-nav li').eq(0).addClass("active");
            }


            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });



    // For gallery modal.
    function callModal() {
        $('.gallery-item').click(function (event) {
            event.preventDefault();
            $('.imagepreview').attr('src', $(this).attr('src'));
            $("#modalAltText").text($(this).attr('alt'));
            $('#imagemodal').modal('show');
        });
    }


    // For closing gallery modal with mouse click.
    $("#imagemodal").click(function () {
        $(this).modal("hide");
    });



    (function GalleryHandler() {


        function GalleryItemClass(url, alt) {
            this.url = url;
            this.alt = alt;
        }

        GalleryItemClass.prototype.generateHTML = function () {


            var galleryElementWrapper = '<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 thumb">' +
                '<div class="thumbnail">' +
                '<img class="img-responsive gallery-item" src="' + this.url + '" alt="' + this.alt + '">' +
                '</div>' +
                '</div>'

            return galleryElementWrapper;
        };


        $.getJSON('js/datanew.json', function (data) {

            var galleryDB = [];
            var galleryParent = $("#galleryContainer");



            data.forEach(function (obj) {


                var thumbnailObj = new GalleryItemClass(obj.url, obj.alt);
                galleryDB.push(thumbnailObj);
            });

            common.appendItems(galleryParent, galleryDB);

        }).then(callModal);







        /* Every time the window is scrolled ... */
        $(window).scroll(function () {

            /* Check the location of each desired element */
            $('.hideme').each(function (i) {

                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                /* If the object is completely visible in the window, fade it it */
                if (bottom_of_window > bottom_of_object) {

                    $(this).animate({
                        'opacity': '1'
                    }, 500);

                }

            });

        });



    }()); // galleryHandler    



    /////////////// Menu handler

    (function menuHandler() {
        function MenuItemClass(title, description) {
            this.title = title;
            this.description = description;
        }

        MenuItemClass.prototype.generateHTML = function () {


            var menuElementWrapper = '<div class="col-sm-6 col-md-12 menuItem">' +
                '<h4 class="dishTitle">' + this.title + '</h4>' +
                '<p>' + this.description + '</p>' +
                '</div>'

            return menuElementWrapper;
        };


        $.getJSON('js/datamenu.json', function (data) {

            var menuDBs = [[], [], []];
            var menuParents = [$("#menucol1"), $("#menucol2"), $("#menucol3")];



            data.forEach(function (objwrapper) {

                objwrapper.forEach(function (obj) {

                    var menuItemObject = new MenuItemClass(obj.title, obj.description);
                    menuDBs[data.indexOf(objwrapper)].push(menuItemObject);
                });
            });

            common.appendItems(menuParents[0], menuDBs[0]);
            common.appendItems(menuParents[1], menuDBs[1]);
            common.appendItems(menuParents[2], menuDBs[2]);

        });

    }());






    // Date picker in Reservations
    $(function () {
        var today = new Date();


        $('#datetimepicker12').datetimepicker({
            inline: true
            , sideBySide: true
            , minDate: today.toISOString()
        });
    });

    // Fade in animation
    /*$(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();

            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });*/





    //hide or show the "back to top" link
    $(window).scroll(function () {
        ($(this).scrollTop() > common.offset) ? common.$back_to_top.addClass('cd-is-visible'): common.$back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > common.offset_opacity) {
            common.$back_to_top.addClass('cd-fade-out');
        }
    });


}); // end