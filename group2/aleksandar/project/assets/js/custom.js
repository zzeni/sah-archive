(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {
            /*====================================
             CUSTOM LINKS SCROLLING FUNCTION 
            ======================================*/

            $('a[href*=#]').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
               && location.hostname == this.hostname) {
                    var $target = $(this.hash);
                    $target = $target.length && $target
                    || $('[name=' + this.hash.slice(1) + ']');
                    if ($target.length) {
                        var targetOffset = $target.offset().top;
                        $('html,body')
                        .animate({ scrollTop: targetOffset }, 1000); //scroll speed
                        return false;
                    }
                }
            });
            /*====================================
            Vega slideshow
            ======================================*/
            $(function () {
                $.vegas('slideshow', {
                    backgrounds: [
                      { src: 'assets/img/NetflixandChill.jpg', fade: 1000, delay: 9000 }, 
                      { src: 'assets/img/fmn.jpg', fade: 1000, delay: 9000 }, 
                    ]
                })
				('overlay', {
                    /** SLIDESHOW OVERLAY IMAGE **/
                    src: 'assets/plugins/vegas/overlays/02.png' // THERE ARE TOTAL 01 TO 15 .png IMAGES AT THE PATH GIVEN, WHICH YOU CAN USE HERE
                })
				;

            });

            /*====================================
                NAV SCRIPTS
            ======================================*/
            $(window).bind('scroll', function () {
                var navHeight = $(window).height() -300;
                if ($(window).scrollTop() > navHeight) {
                    $('nav').addClass('fixed');
                }
                else {
                    $('nav').removeClass('fixed');
                }
            });

            /*====================================
               WRITE YOUR SCRIPTS BELOW 
           ======================================*/
          
        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));



