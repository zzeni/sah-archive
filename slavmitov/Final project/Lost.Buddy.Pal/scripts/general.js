$(document).ready(function(){
    $("a.mobile").click(function(){
        $(".sidebar").slideToggle('fast');
    });
    
    window.onresize = function(event) {
        if($(window).width()>321) {
            $(".sidebar").show();
        }
    };
});


