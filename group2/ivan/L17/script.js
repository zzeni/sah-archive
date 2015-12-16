$('input[name="username"]').blur(function (e) {
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
		var label = $('label[for="username"]');
		var span = label.find('span');

		if (response === "available") {
			if (span.length > 0) {
				span.removeClass("error");
				span.addClass("success");
				span.text('OK!');
			} else {
				label.append('<span class="success">OK!</span>');
			}
		} else {
			if (span.length > 0) {
				span.removeClass("success");
				span.addClass("error");
				span.text('Username is taken!');
			} else {
$('label[for="username"]').append('<span class="error">Username is taken!</span>');
			}
		}
	});
});