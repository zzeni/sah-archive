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

		var label = $('label[for="name"]');
		var span = label.find('span');
		var input = $('input[name="username"]');
		if (input.val() !== "") {
			if (response === "available") {
				if (span.length > 0) {
					span.removeClass("errorSpan");
					input.removeClass("error");
					span.addClass("successSpan");
					input.addClass("success");
					span.text('OK!');
				} else {
					label.append('<span class="successSpan">OK!</span>');
					input.addClass("success");
				}
			} else {
				if (span.length > 0) {
					span.removeClass("successSpan");
					input.removeClass("success");
					span.addClass("errorSpan");
					input.addClass("error");
					span.text('Username is taken!');
				} else {
					label.append('<span class="errorSpan">Username is taken!</span>');
					input.addClass("error");
				}
			}
		}
	});
});