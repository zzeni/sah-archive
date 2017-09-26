$(function () {
    $('#fade').fadeToggle(1000).fadeToggle(1000);

    $(document).ready(function () {
        var cookieLanguage = $.cookie('language');
        if (cookieLanguage && ['bg', 'en'].indexOf(cookieLanguage) > -1)
            $('html').attr('lang', cookieLanguage);

        $('#LangSelect').change(function () {
            var lang = $(this).val();
            $('html').attr('lang', lang);
            $.cookie('language', lang, {
                expires: 7
            });
        });
    });

});
(function (document) {
    var _bars = [].slice.call(document.querySelectorAll('.bar-inner'));
    _bars.map(function (bar, index) {
        setTimeout(function () {
            bar.style.width = bar.dataset.percent;
        }, index * 1000);

    });
})(document)