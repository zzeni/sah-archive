$('form').submit(function (event) {
	event.preventDefault();

	var form = event.target;

	try {
		fieldVal(form, "name");
		fieldVal(form, "email");
		fieldVal(form, "message");
		alert("Thank you for your time filling in the form!");
	} catch (error) {
		var field = error.target;
		field.addClass("error");
		field.focus();

		field.parent().append("<span class='error'>" + error.message + "</span>");
	}
});


function fieldVal(form, fieldName) {
	var fieldValue = $(form).find("[name =" + fieldName + "]");
	var fieldValue = field.val();

	field.removeClass("error");
	field.parent().find("span").remove();

	if (fieldValue === "") {
		var error = new Error(fieldName + "is required");
		error.target = field;
		throw error;
	}
}