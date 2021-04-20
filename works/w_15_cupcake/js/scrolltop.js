		$(window).scroll(function() {
			var sT = $(window).scrollTop();
			if (sT > 120) {
				if ($('.gotop_wrap_inner').addClass('gotop_scrolled').is(':animated')) {
					return false;
				} else {
					$('.gotop_wrap_inner').addClass('gotop_scrolled').animate({
						bottom: 20,
						right:20,
						opacity: 1
					}, 500);
				}
			} else {
				$('.gotop_wrap_inner').removeClass('gotop_scrolled').stop().attr({
					style: ''
				});
			}
		});
		$(function(){
			$('#top').click(function(){
				$('html,body').animate({scrollTop: '0px'}, 800);
			}); 
		});