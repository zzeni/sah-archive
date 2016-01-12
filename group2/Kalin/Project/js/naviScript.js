$('.navig li').click(function (e) {
	e.preventDefault();

	$('.navig li').removeClass('active');
	$(this).addClass('active');

	var target = $(this).attr('data-target');

	$('.best-seller > div').hide();
	$('.' + target).show();

});