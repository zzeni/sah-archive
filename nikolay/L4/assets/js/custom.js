
/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% Free To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */

(function ($) {
    "use strict";
    var mainApp = {
        scrollAnimation_fun: function () {

            /*====================================
             ON SCROLL ANIMATION SCRIPTS 
            ======================================*/
           
            
            window.scrollReveal = new scrollReveal();

        },
        specification_fun: function () {

            /*====================================
             SPECIFICATION  SCRIPTS 
            ======================================*/
           
            $('#specifications').carousel({
                interval: 3000 //TIME IN MILLI SECONDS
            })

        },
        scroll_fun: function () {

            /*====================================
                 EASING PLUGIN SCRIPTS 
                ======================================*/
            $(function () {
                $('.move-me a').bind('click', function (event) { //just pass move-me in design and start scrolling
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000, 'easeInOutQuad');
                    event.preventDefault();
                });
            });

        },

      
        custom_fun:function()
        {
            /*====================================
             WRITE YOUR   SCRIPTS  BELOW
            ======================================*/




        },

    }
   
   
    $(document).ready(function () {
        mainApp.scrollAnimation_fun();
        mainApp.specification_fun();
        mainApp.scroll_fun();
        mainApp.custom_fun();
    });
}(jQuery));


