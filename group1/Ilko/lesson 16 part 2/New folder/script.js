$('input[name=username]').blur(function(){
   var value = $ ("input[name=username]").val();
    
    var ajax = $.ajax({
        
       method: "get",
       url: "http://zenifytheweb.com/api/examples",
       data: {username: value }
    });
    
    ajax.done(function(response) {
              var result = JSON.parse(response);
              conslole.log(response);
    
    if (response['available'] === true){
        alert("Ok");
              }
    else {
                alert("username is taken!");               
                               }
  });
