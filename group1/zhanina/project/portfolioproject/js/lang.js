"use strict"
$('#langSelect').change(function () {
    var lang = $(this).val();
    $('.lang-bg, .lang-en').hide(); //$('.lang-*).hide();
    $('.lang-' + lang).show();

    document.cookie = "language=" + lang;
    console.log(lang);
});

function getLangFromCookie() {
    var result;
    var allCookies = document.cookie.split(' ');
    for (var i = 0; i < allCookies.length; i++) {
        var cookie = allCookies[i];
        if (cookie.match(/^language=/)) {
            result = cookie.split('=')[1];
        }
    }
    return result;
}

var language = getLangFromCookie();
if (language === undefined) language = "en";

$('#langSelect').val(language);
$('#langSelect').change();