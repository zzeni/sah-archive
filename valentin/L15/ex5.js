$(document).ready(function(){
  var timer;
  function countdown(){
    $( "body" ).append( "<p>Do you know how to stop me?</p>" );
  }

  timer = setInterval(countdown, 2000);
});
