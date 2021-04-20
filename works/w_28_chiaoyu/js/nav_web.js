$(function(){
	$('nav ul li').hover(
		function () {
			$('ul', this).slideDown(150);
		}, 
		function () {
			$('ul', this).slideUp(150);	
		}
	);
});



/*** header ***/
	$(window).scroll(function() {
		var sT = $(window).scrollTop();

		if (sT > 220) {
			if ($('header').addClass('header_scrolled').is(':animated')) {
				return false;
			} else {
				$('header').addClass('header_scrolled').animate({
					top: 0,
					opacity: 1
				}, 500);
			}
		} else {
			$('header').removeClass('header_scrolled').stop().attr({
				style: ''
			});
		}
	});