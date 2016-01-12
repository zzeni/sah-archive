$('input[name="Name"]').blur(function (e) {
	e.preventDefault();
	var ajaxProperties = {
		url: "http://zenifytheweb.com/api/examples/check_username",
		method: "get",
		data: {
			username: $(this).val()
		}
	}
	var ajax = $.ajax(ajaxProperties);

	ajax.done(function (response) {
		var label = $('label[for="Name"]');
		var span = label.find('span');

		if (response === "available") {
			if (span.length > 0) {
				span.removeClass("error");
				span.addClass("success");
				span.text('(available)');
			} else {
				label.append('<span class="success">available</span>');
			}
		} else {
			if (span.length > 0) {
				span.removeClass("success");
				span.addClass("error");
				span.text('Username is taken!');
			} else {
				$('label[for="Name"]').append('<span class="error">Username is taken!</span>');
			}
		}
	});
});

$(form).submit(function (event) {
	var sentVal = $(form).serialize();
	register(sentVal);

	event.preventDefault();
})

var register = function (sentVal) {
	$.ajax({
		url: "http://zenifytheweb.com/api/examples/register",
		method: "post",
		data: sentVal
	}).done(function () {
		console.log("success");
	}).fail(function (error) {
		var error = error.responseText;
		errorMsg(error);
	}).always(function (result) {});
}

var errorMsg = function (error) {
	var errorParts = error.split(",");
	var errorMsgPts = errorParts[1].slice(0, -1);
	$('#errorLog').append('<div class="alert alert-danger">' + errorMsgPts + '</div>');
}

var showInfoMsg = function (text) {
	$('#errorLog').append('<div class="alert alert-info">' + text + '</div>');
}