"use strict";
$(document).ready(function () {
    $('.ScrollTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});