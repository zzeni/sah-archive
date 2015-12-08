class nav nav - tabs /*class for nav bootstrap*/
class box tabs - body /*body of nav tabs*/


$('.nav-tabs li').click(function () {
	$('.nav-tabs li').removeClass('active');
	$(this).addClass('active');
	//	$('.nav-tabs li')[0].getAttribute('data-target'); 
	var target = $(this).attr('data-target');

	$('.tabs-body > div').hide();
	$('#' + target).show;

}); /*event on click*/


data - target = "about-aboutme" /*of the id that is connected to it*/
data - target = "about-projects"
data - target = "about-contacts"