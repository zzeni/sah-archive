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
    // Container for the cookies after they are processed.
    common.cookies = {};
    // Contains the current language set by the cookie.
    common.cookieLanguage = "";
    // Translations cashes.
    common.englishTranslation = {};
    common.bulgarianTranslation = {};
    // Common function for adding the generated elements by the menu and the gallery.
    common.appendItems = function (parent, itemsList) {
        itemsList.forEach(function (item) {
            parent.append(item.generateHTML());
        });
    };




    (function cookieManagementAndGenerate() {


        function GalleryItemClass(url, alt) {
            this.url = url;
            this.alt = alt;
        }
        GalleryItemClass.prototype.generateHTML = function () {
            var galleryElementWrapper = '<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 thumb">' + '<div class="thumbnail">' +
                '<img class="img-responsive gallery-item" src="' + this.url + '" alt="' + this.alt + '">' + '</div>' + '</div>';
            return galleryElementWrapper;
        };


        function MenuItemClass(title, description) {
            this.title = title;
            this.description = description;
        }
        MenuItemClass.prototype.generateHTML = function () {
            var menuElementWrapper = '<div class="col-sm-6 col-md-12 menuItem">' + '<h4 class="dishTitle">' + this.title + '</h4>' + '<p>' + this.description +
                '</p>' + '</div>';
            return menuElementWrapper;
        };






        // Cookie management code

        loadCookies(common.cookies);
        common.cookieLanguage = common.cookies.language;


        if (common.cookieLanguage && (common.cookieLanguage === "bg" || common.cookieLanguage === "en")) {
            $('html').attr('lang', common.cookieLanguage);

            $(".lang_select").removeClass("active_lang");
            $('#' + common.cookieLanguage).addClass("active_lang");
        } else {
            common.cookieLanguage = "en";

            $('html').attr('lang', common.cookieLanguage);
            $(".lang_select").removeClass("active_lang");
            $('#' + common.cookieLanguage).addClass("active_lang");
        }



        /* if ((localStorage.getItem("englishTranslationObj") !== null) && (localStorage.getItem("bulgarianTranslationObj") !== null)) {


             //common.englishTranslation = localStorage.getItem("englishTranslationObj");
             //common.bulgarianTranslation = localStorage.getItem("bulgarianTranslationObj");



             applyTranslation();
         } else {*/

        $.getJSON('js/langs.json', function (data) {

            common.englishTranslation = data.en;
            common.bulgarianTranslation = data.bg;

            //localStorage.setItem("englishTranslationObj", data["en"]);
            //localStorage.setItem("bulgarianTranslationObj", common.bulgarianTranslation);

        }).then(applyTranslation);




        // Event handler for switching the language.
        $(".lang_select").click(function () {
            var lang = $(this).attr("id");

            $(".lang_select").removeClass("active_lang");
            $(this).addClass("active_lang");

            $('html').attr('lang', lang);
            setCookie('language', lang);
            common.cookieLanguage = lang;

            if (common.englishTranslation) {
                applyTranslation();
            }

        });



        // Load and check the the previously applied cookie.
        function loadCookies(cookieHash) {
            document.cookie.split('; ').forEach(function (keyvalStr) {
                var keyval = keyvalStr.split('=');
                cookieHash[keyval[0]] = keyval[1];
            });
        }



        function setCookie(key, val) {
            var timeNow = new Date();
            timeNow.setTime(timeNow.getTime() + (7 * 24 * 60 * 60 * 1000));
            var expires = timeNow.toGMTString();

            document.cookie = key + "=" + val + "; expires=" + expires + "; path=/";

            //console.log(document.cookie);
        }





        // Code for reading the json and applying the translation

        function applyTranslation() {

            var typesOfDataTags = ["data-nav-ts", "data-carousel-ts", "data-shortinfo-ts",
                                   "data-header-ts", "data-menu-ts", "data-reservations-ts", "data-about-ts", "data-contact-ts"];

            var sources = ["navigation", "carousel", "shortinfo", "section_headers", "menu", "reservations", "about_us", "contact"];


            if (common.cookieLanguage === "bg") {

                applyAndGenerate(common.bulgarianTranslation);


            } else {

                applyAndGenerate(common.englishTranslation);

            }

            function applyAndGenerate(languageSource) {
                for (var i = 0; i < typesOfDataTags.length; i++) {
                    applyTranslationForType(typesOfDataTags[i], languageSource[sources[i].toString()]);
                }

                generateGallery(languageSource.gallery);

                generateMenu(languageSource.menu.breakfast, languageSource.menu.lunch, languageSource.menu.dinner);
            }



            function applyTranslationForType(dataTag, source) {

                $("[" + dataTag + "]").each(function () {
                    $(this).html(source[$(this).attr(dataTag).toString()]);
                });
            }

            function generateGallery(source) {
                var galleryDB = [];
                var galleryParent = $("#galleryThumbsContainer");

                galleryParent.html("");



                source.forEach(function (obj) {
                    var thumbnailObj = new GalleryItemClass(obj.url, obj.alt);
                    galleryDB.push(thumbnailObj);
                });

                $.when(common.appendItems(galleryParent, galleryDB)).done(callModal);
            }

            function generateMenu(source1, source2, source3) {
                var menuDBs = [[], [], []];


                var menuParents = [$("#menucol1"), $("#menucol2"), $("#menucol3")];

                menuParents[0].html("");
                menuParents[1].html("");
                menuParents[2].html("");


                function createMenuObjects(obj) {
                    var menuItemObject = new MenuItemClass(obj.title, obj.description);
                    return menuItemObject;
                }

                source1.forEach(function (obj) {
                    menuDBs[0].push(createMenuObjects(obj));
                });
                source2.forEach(function (obj) {
                    menuDBs[1].push(createMenuObjects(obj));
                });
                source3.forEach(function (obj) {
                    menuDBs[2].push(createMenuObjects(obj));
                });

                common.appendItems(menuParents[0], menuDBs[0]);
                common.appendItems(menuParents[1], menuDBs[1]);
                common.appendItems(menuParents[2], menuDBs[2]);
            }

        }

    }());


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

    // Add smooth scrolling to all links in navbar + floating button
    $("a[href*='#']").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;

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

    // For sliding in elements.
    $(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });


        ($(this).scrollTop() > common.offset) ? common.$back_to_top.addClass('cd-is-visible'): common.$back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > common.offset_opacity) {
            common.$back_to_top.addClass('cd-fade-out');
        }
    });


    // For gallery modal.
    function callModal() {
        $('.gallery-item').click(function (event) {
            event.preventDefault();
            $('.imagepreview').attr('src', $(this).attr('src'));
            $("#modalAltText").text($(this).attr('alt'));
            $('#imagemodal').modal('show');
        });

        // For closing gallery modal with mouse click.
        $("#imagemodal").click(function () {
            $(this).modal("hide");
        });
    }


    // Date picker in Reservations
    $(function () {
        var today = new Date();
        $('#datetimepicker12').datetimepicker({
            inline: true,
            sideBySide: true,
            minDate: today.toISOString()
        });
    });

    //hide or show the "back to top" link
    $(window).scroll(function () {

    });


    // Google Maps
    function initMap() {
        var mapDiv = $("map");
        var map = new google.maps.Map(mapDiv, {
            center: {
                lat: 44.540,
                lng: -78.546
            },
            zoom: 8
        });
    }


	(function contactFormHandler(){
		
		function checkInput(id, value){
			var nameRE =  /\b([A-Z]{1}[a-z]{1,30}[- ]{0,1}|[A-Z]{1}[- \']{1}[A-Z]{0,1}[a-z]{1,30}[- ]{0,1}|[a-z]{1,2}[ -\']{1}[A-Z]{1}[a-z]{1,30}){2,5}/  // old /^[a-zA-Z0-9_-]{4,10}$/;
			var phoneRE = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
			var emailRE = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
			
			var everythingOk = true;
			
			if (id === "sender_name") {
				if ( !Boolean(value.match(nameRE)) ) {
					everythingOk = false;
				}
			}
			else if (id === "telnum" && value !== "") {
				if ( !Boolean(value.match(phoneRE)) ) {
					everythingOk = false;
				}
			}
			else if (id === "emailid") {
				if ( !Boolean(value.match(emailRE)) ) {
					everythingOk = false;
				}
			}
			else if (id === "contact_message") {
				if (value.length < 3) {
					everythingOk = false;
				}
			}
			
			return everythingOk;
		}
		
		
		
		
		function setError(parent) {
			parent.addClass('has-error');
			parent.find('.error').show();
			$("#contact_submit_btn").prop('disabled', true);
		}

		function good2go(parent) {
			parent.addClass('has-success');
			parent.find('.error').hide();
		}

		function cleanClass(parent) {
			$("#contact_submit_btn").prop('disabled', false);
			
			if (parent.hasClass("has-error")) {
				parent.removeClass("has-error");
				parent.find(".error").hide();
			}
			if (parent.hasClass("has-success")) {
				parent.removeClass("has-success");
			}
		}
		

		
		$("#contact_form input, #contact_message").blur(function(){
			var value = $(this).val();
			var id = $(this).attr("id");
			var inputParent = $(this).parent();
			
			
			
			if (checkInput(id, value) === true && value !== "") { // if everything is ok
				cleanClass(inputParent);
				good2go(inputParent);
			}
			else if (checkInput(id, value) === false && value !== "") {
				cleanClass(inputParent);
				setError(inputParent);
			}
			else {
				cleanClass(inputParent);
			}
			
		});	
		
		
		function contactSubmitHandler() {
		
			$.ajax({
				url: $("#contact_form").attr("action"),
				type: $("#contact_form").attr("method"),
				data: $("#contact_form").serialize(),
				cache: false,
				error: function (e) {
					console.log(e);
				}
			});
		}

		$("#contact_form").on('submit', function (ev) {
			
			//if ( $("#contact_form").find('.error').length !== 0  ) { // if there are no errors
			
				contactSubmitHandler();
				ev.preventDefault();	

				document.getElementById("contact_form").reset();
				
				$(".has-success, .has-error").removeClass("has-success has-error");
				$("#message_sent").addClass("message_sent_animation");
				
			
			
			ev.preventDefault()
			

		});
			
	}());
	
	

	
	





}); // end
