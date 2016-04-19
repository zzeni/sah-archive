/*
	Miniport 1.0 by HTML5 Up!
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

_5grid.ready(function() {

	var	_bh = $('body, html'),
		_window = $(window),
		_nav = $('#nav');

	// Links
		$('a').click(function(e) {
			var h = $(this).attr('href');
			if ($('article#' + h.substring(1)).length > 0)
			{
				var article = $(h), pos = Math.max(article.parent().offset().top - _nav.height() + 15, 0);
				e.preventDefault();
				_bh.animate({ scrollTop: pos }, 'slow', 'swing');
			}
		});

	// Forms (IE <= 9 only)
		if ($.browser.msie && $.browser.version <= 9)
			$('form').formerize();
	
});

///////////////////////////////////////////////////
// Formerize 1.0 | MIT + GPLv2 | n33.co | @n33co //
///////////////////////////////////////////////////

(function(jQuery) {
	jQuery.fn.disableSelection_formerize = function() { return jQuery(this).css('user-select', 'none').css('-khtml-user-select', 'none').css('-moz-user-select', 'none').css('-o-user-select', 'none').css('-webkit-user-select', 'none'); }
	jQuery.fn.formerize = function(options) {
		// Settings
			var settings = jQuery.extend({
				usePlaceholders:		true,
				baseZIndex:				1000
			}, options);
		// Init
			var _form = jQuery(this), _document = jQuery(document), _window = jQuery(window), _fakes = new Array();
			var _isTouch = !!('ontouchstart' in window), _eventType = (_isTouch ? 'click' : 'click');
			var _isDegraded = (jQuery.browser.msie && jQuery.browser.version < 9);
			// Attempt to use built-in browser placeholder support whenever possible
				if (settings.usePlaceholders
				&&	'placeholder' in (document.createElement('input')))
					settings.usePlaceholders = false;
		// Feature: Inline Labels
			if (settings.usePlaceholders)
			{
				// Text, TextArea
					_form
						.find('input[type=text],textarea')
							.each(function() {
								var e = jQuery(this);
								if (e.val() == '' || e.val() == e.attr('placeholder')) {
									e.addClass('formerize-placeholder');
									e.val(e.attr('placeholder'));
								}
							})
							.blur(function() {
								var e = jQuery(this);
								if (e.attr('name').match(/_fakeformerizefield$/))
									return;
								if (e.val() == '') {
									e.addClass('formerize-placeholder');
									e.val(e.attr('placeholder'));
								}
							})
							.focus(function() {
								var e = jQuery(this);
								if (e.attr('name').match(/_fakeformerizefield$/))
									return;
								if (e.val() == e.attr('placeholder')) {
									e.removeClass('formerize-placeholder');
									e.val('');
								}
							});
				// Password
					_form
						.find('input[type=password]')
							.each(function() {
								var e = jQuery(this);
								var x = jQuery(jQuery('<div>').append(e.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, 'type=text'));
								if (e.attr('id') != '')
									x.attr('id', e.attr('id') + '_fakeformerizefield');
								if (e.attr('name') != '')
									x.attr('name', e.attr('name') + '_fakeformerizefield');
								x.addClass('formerize-placeholder').val(x.attr('placeholder')).insertAfter(e);
								if (e.val() == '')
									e.hide();
								else
									x.hide();
								e.blur(function(event) {
									event.preventDefault();
									var e = jQuery(this);
									var x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]');
									if (e.val() == '') {
										e.hide();
										x.show();
									}
								});
								x.focus(function(event) {
									event.preventDefault();
									var x = jQuery(this);
									var e = x.parent().find('input[name=' + x.attr('name').replace('_fakeformerizefield', '') + ']');
									x.hide();
									e.show().focus();
								});
								// just in case :P
								x.keypress(function(event) {
									event.preventDefault();
									x.val('');
								});
							});
				// Events
					_form
						// Submit
							.submit(function() {
								jQuery(this)
									.find('input[type=text],input[type=password],textarea')
										.each(function(event) {
											var e = jQuery(this);
											if (e.attr('name').match(/_fakeformerizefield$/))
												e.attr('name', '');
											if (e.val() == e.attr('placeholder')) {
												e.removeClass('formerize-placeholder');
												e.val('');
											}
										});
							})
						// Reset
							.bind("reset", function(event) {
								event.preventDefault();
								// temporary: just set all SELECTs to their first options
								jQuery(this)
									.find('select')
										.val(jQuery('option:first').val());
								jQuery(this)
									.find('input,textarea')
										.each(function() {
											var e = jQuery(this);
											var x;
											e.removeClass('formerize-placeholder');
											switch (this.type) {
												case 'submit':
												case 'reset':
													break;
												case 'password':
													e.val(e.attr('defaultValue'));
													x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]');
													if (e.val() == '') {
														e.hide();
														x.show();
													}
													else {
														e.show();
														x.hide();
													}
													break;
												case 'checkbox':
												case 'radio':
													e.attr('checked', e.attr('defaultValue'));
													break;
												case 'text':
												case 'textarea':
													e.val(e.attr('defaultValue'));
													if (e.val() == '') {
														e.addClass('formerize-placeholder');
														e.val(e.attr('placeholder'));
													}
													break;
												default:
													e.val(e.attr('defaultValue'));
													break;
											}
										});
								window.setTimeout(function() {
									for (x in _fakes)
										_fakes[x].trigger('formerize_sync');
								}, 10);
							});
			}
		return _form;
	};
})(jQuery);