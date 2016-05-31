/**
 * jQuery Mobile Menu
 * Turn unordered list menu into dropdown select menu
 * version 1.1(27-JULY-2013)
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Documentation
 *   http://github.com/mambows/mobilemenu
 */
(function ($) {
    $.fn.mobileMenu = function (options) {

        var defaults = {
                defaultText: 'Navigate to...',
                containerName: 'select-menu',
                className: 'select',
                subMenuClass: 'sub-menu',
                subMenuDash: '&ndash;'
            },
            settings = $.extend(defaults, options),
            el = $(this);

        this.each(function () {
            var $el = $(this),
                $select_menu;

            // ad class to submenu list
            $el.find('ul').addClass(settings.subMenuClass);

            // Create base menus

            var $select_container = $('<div />', {
                    'class': settings.containerName
                }).insertAfter($el),
                $select_menu = $('<select />', {
                    'class': settings.className
                }).appendTo($select_container);

            // Create default option
            $('<option />', {
                "value": '#',
                "text": settings.defaultText
            }).appendTo($select_menu);

            // Create select option from menus
            $el.find('a').each(function () {



                var $this = $(this),
                    optText = '&nbsp;' + $this.text(),
                    optSub = $this.parents('.' + settings.subMenuClass),
                    len = optSub.length,
                    dash;

                if ($(this).hasClass('fa-home')) {
                    optText = '&nbsp;Home';
                }

                // if menus has sub menus
                if ($this.parents('ul').hasClass(settings.subMenuClass)) {
                    dash = Array(len + 1).join(settings.subMenuDash);
                    optText = dash + optText;
                }

                // Now build menus and append it
                $('<option />', {
                    "value": this.href,
                    "html": optText,
                    "selected": (this.href == window.location.href)
                }).appendTo($select_menu);

            }); // End el.find('a').each

            // Change event on select element
            $select_menu.change(function () {
                var locations = $(this).val();
                if (locations !== '#') {
                    window.location.href = $(this).val();
                }
                ;
            });
        }); // End this.each

        return this;

    };
})(jQuery);
$(document).ready(function () {
    $('.sf-menu').mobileMenu();
});