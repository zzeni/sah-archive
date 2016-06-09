$(document).ready(function(){
  var count = 10;
  var timer;
  var paused = false;
  function countdown(){
    if (count > 0){
      count = count -1;
      $("#timerdiv").html(count);
    } else {
      $(window).attr('location','http://www.efbet.com');
    }
  }

  function pausedf(){
	if (paused){
      timer = setInterval(countdown, 1000);
      paused = false;
  	}
    
  }
  
  timer = setInterval(countdown, 1000);
  
  $("#Pause").click(function(){
    timer = clearInterval(timer);
    paused = true;
  });
  
  
  $("#Reset").click(function(){
    count = 10;
    $("#timerdiv").html(count);
    pausedf();
  });
  
  $("#Resume").click(function(){  
  pausedf(); 
  });
  
  
});