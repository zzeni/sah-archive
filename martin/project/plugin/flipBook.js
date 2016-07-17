$(document).ready(function(){
    $("#flipbook").turn({
		width: 880,
		height: 580,
		autoCenter: true,
        
        when: {
      start: function (event, pageObject, corner) {
          if (corner != null) {
              $(this).turn('data').hover = true;
              return event.preventDefault();
          }
       },
        turning: function (event, page, newView) {
            if ($(this).turn('data').hover) {
                $(this).turn('data').hover = false;
                event.preventDefault();
            }
        }
    }
    });
});

$(document).ready(function(){
    $(".step-back").click(function(){
      $("#flipbook").turn("previous");
      });
});

$(document).ready(function(){
    $(".step-forward").click(function(){
      $("#flipbook").turn("next");
      });
});
    

