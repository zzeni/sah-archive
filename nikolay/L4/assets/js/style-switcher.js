
/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% Free To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITs AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */

(function ($) {
    "use strict";
    var mainSSwitcher = {

        s_fun: function () {

            /*=====================================
             THEME SWITCHER SCRIPTS 
            ===================================*/

            //THE CALLING OF PANEL ON CLICKING  BUTTON 

            jQuery('#switch-panel').click(function () {
                if (jQuery(this).hasClass('show-panel')) {
                    jQuery('.switcher').css({ 'left': '-150px' });
                    jQuery('#switch-panel').removeClass('show-panel');
                    jQuery('#switch-panel').addClass('hide-panel');
                } else if (jQuery(this).hasClass('hide-panel')) {
                    jQuery('.switcher').css({ 'left': 0 });
                    jQuery('#switch-panel').removeClass('hide-panel');
                    jQuery('#switch-panel').addClass('show-panel');
                }
            });

            $('#yellow').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/yellow.css');  
            });
            $('#blue').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/blue.css');
            }); 
            $('#green').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/green.css');
            });
            $('#red').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/red.css');
            });
                  
            $('#black-bk').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/black-bk.css');
            });
            $('#grey-bk').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/grey-bk.css');
            });

            /*====================================
            WRITE YOUR SCRIPTS HERE
            ======================================*/











        },

        initialization: function () {
            mainSSwitcher.s_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainSSwitcher.s_fun();
    });

}(jQuery));
