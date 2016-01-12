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

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#myTabs a[href="#profile"]').tab('show') // Select tab by name
$('#myTabs a:first').tab('show') // Select first tab
$('#myTabs a:last').tab('show') // Select last tab
$('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)
//
//jQuery(document).ready(function ($) {
//        $('#tabs').tab();
//    });

$('#someTab').tab('show')