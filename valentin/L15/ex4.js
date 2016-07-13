$(document).ready(function(){
  var timer;
  function countdown(){
    $(window).attr('location','http://www.google.com');
  }

  timer = setInterval(countdown, 30000);
});
