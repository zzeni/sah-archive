(function() {
    
    $('#langSelect').change(function() {
        var lang = $(this).val();
        $('[class*=lang-]').hide();                //'.lang-en, .lang-bg' = '.lang-*'
        $('.lang-' + lang).show();
        
        document.cookie = "language" + lang;
    });
    
    var allCookies = document.cookie.split('; ');
    
    for(var i=0; i<allCookies.length; i++) {
        var cookie = allCookies[i].split('=');
        if (cookie[0] === "language") {
            $('#langSelect').val(cookie[1]);
            $('#langSelect').change();
        }
    }

})();