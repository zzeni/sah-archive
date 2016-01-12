$('form').find('[name=username]').blur(function(){
	$.ajax({
		url: "http://zenifytheweb.com/api/examples/check_username",
		method:'get',
		data: {username: $(this).val()}
	}).done(function(msg){
		showInfoMsg(msg);
	}).fail(function(error){
		console.log(error);
		var error = error.responseText;
		showErrorMsg(error);
	})
});

$('#register-form').submit(function(event){
	var dataToSend = $('#register-form').serialize();
	register(dataToSend);

	event.preventDefault();
})

var register = function(dataToSend){
	$.ajax({
	  url: "http://zenifytheweb.com/api/examples/register",
	  method: "post",
	  data: dataToSend
	}).done(function() {
    	console.log( "success" );
  	}).fail(function(error) {
		var error = error.responseText;
		showErrorMsg(error);
	}).always(function(result) {
	});
}

var showErrorMsg = function(error){
	var errorParts = error.split(",");
	var errorMsg = errorParts[1].slice(0, -1);
	$('#msg-holder').append('<div class="alert alert-danger">' + errorMsg + '</div>');
}

var showInfoMsg = function(text){
	$('#msg-holder').append('<div class="alert alert-info">' + text + '</div>');
}