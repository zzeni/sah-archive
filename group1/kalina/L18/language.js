$("#selectLanguage").change(function () {
    var lang = $(this).val();
    $("[class*=lang-]").hide();
    $(".lang-" + lang).show();
});

document.cookie = "language=" + lang;

var allCookies = document.cookie.split("; ");

for (var i = 0; i < allCookies.length; i++) {
    var cookie = allCookies[i].split("=");
    if (cookie[0] === "language") {
        $("#selectLanguage").val(cookie[1]);
        $("#selectLanguage").trigger("change");
    }
}