$(document).ready(function(){
  var count = 10;
  var timer;
  function countdown(){
    if (count > 0){
      count = count -1;
      $("#timerdiv").html(count);
    } else {
      $(window).attr('location','http://www.efbet.com');
    }
  }
  
  timer = setInterval(countdown, 1000);
  
  $("#Pause").click(function(){
    timer = clearInterval(timer);
    $("#Resume").attr("disabled", false);
    $("#Reset").attr("disabled", true);
  });
  
  
  $("#Reset").click(function(){
    count = 10;
    $("#timerdiv").html(count);
    
  });
  
  $("#Resume").click(function(){
    timer = setInterval(countdown, 1000);
    $(this).attr("disabled", true);
    $("#Reset").attr("disabled", false);
  });
  
  
});