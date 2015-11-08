$(document).ready(function() {
    var navTopOffset = $("#menu-wrap").offset().top;
    
    $("#menu-wrap").wrap('<div class="nav-placeholder"</div>');
    $(".nav-placeholder").height($("#menu-wrap"));
    
    $(window).scroll(function(){
        
        var scrollPosition = $(window).scrollTop();
        
        if (scrollPosition >= navTopOffset) {
            $("#menu-wrap").addClass("fixed");
        }   else {
              $("#menu-wrap").removeClass("fixed");  
        }
    });
 
});