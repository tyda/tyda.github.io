$(function() {
	resizewindow();
	hovertext();
	infinitescroll();
	$.pjax({
		area: 'div#contents',
		load: {
			css: true,
			script: true
		},
		link: 'a.pjax',
		scrollTop: 1,
		callback: function() {
			$('body,html').animate({
				scrollTop: 0
			}, 100, "easeInOutQuart");
			$('div.loading').fadeOut(500);
			isotopewide();
			isotopedetail01();
			infinitescroll();
			hovertext();
			checkmain();
			//hovernavi();
		},
		callbacks: {
			before: function() {
				$('div.loading').fadeIn(200);
			}
		},
		ajax: {
			timeout: 8000
		},
		wait: 400
	});
});

function infinitescroll() {
	var $container = $('#grid-wrapper');
	$container.infinitescroll({
		itemSelector: '.grid-item',
		loading: {
			msgText: "",
			finishedMsg: '',
			img: '/images/89.png'
		}
	}, function(newElements) {
		if ($(window).width() > 768) {
			var $columnWidth = 320;
			var $gutter = 20;
		} else if ($(window).width() > 480) {
			var $columnWidth = 320;
			var $gutter = 20;
		} else {
			var $columnWidth = 320;
			var $gutter = 20;
		}
		$container.imagesLoaded(function() {
			$container.isotope('appended', $(newElements)).isotope({
				itemSelector: '.grid-item',
				masonry: {
					columnWidth: $columnWidth,
					gutter: $gutter,
					isFitWidth: true,
					isAnimated: true
				}
			});
			hovertext();
		});
	});
}
/*$(window).resize(function() {
	resizewindow();
});*/

function hovertext() {
	$(".grid-item").hover(function() {
		$(this).find(".slidetext").fadeIn();
	}, function() {
		$(this).find(".slidetext").fadeOut();
	});
}

function resizewindow() {
	if ($(window).width() > 1069) {
		$(document.body).addClass('wide');
		$(document.body).removeClass('narrow');
		$(document.body).removeClass('for-sp');
		$(document.body).removeClass('for-tablet');
		isotopewide();
		isotopedetail01();
	} else if ($(window).width() > 768) {
		$(document.body).addClass('narrow');
		$(document.body).removeClass('wide');
		$(document.body).removeClass('for-sp');
		$(document.body).removeClass('for-tablet');
		isotopewide();
		isotopedetail01();
	} else if ($(window).width() > 480) {
		$(document.body).addClass('for-tablet');
		$(document.body).removeClass('wide');
		$(document.body).removeClass('for-sp');
		$(document.body).removeClass('narrow');
		isotopewide();
		isotopedetail01();
	} else {
		$(document.body).addClass('for-sp');
		$(document.body).removeClass('wide');
		$(document.body).removeClass('narrow');
		$(document.body).removeClass('for-tablet');
		isotopewide();
		isotopedetail01();
	}
}
function isotopewide() {
	var $container = $('#grid-wrapper');
	$container.imagesLoaded(function() {
		$container.isotope({
			itemSelector: '.grid-item',
			masonry: {
				columnWidth: 320,
				gutter: 20,
				isFitWidth: true,
				isAnimated: true
			}
		}).fadeTo("slow", 1);
		$('.loading').fadeOut(300);
	});
	$('.filters').on('click', 'a', function() {
		var filterValue = $(this).attr('data-filter');
		$container.isotope({
			filter: filterValue
		});
	});
	$('.filters_sub').on('click', 'a', function() {
		var filterValue = $(this).attr('data-filter');
		$container.isotope({
			filter: filterValue
		});
	});
}

function isotopedetail01() {
	var $container = $('#photo-grid-wrapper01,#photo-grid-wrapper02');
	if ($(window).width() > 768) {
		var $columnWidth = 343;
		var $gutter = 20;
	} else if ($(window).width() > 480) {
		var $columnWidth = 343;
		var $gutter = 20;
	} else {
		var $columnWidth = 280;
		var $gutter = 20;
	}
	$container.imagesLoaded(function() {
		$container.isotope({
			itemSelector: '.photo-item',
			masonry: {
				columnWidth: $columnWidth,
				gutter: $gutter,
				isFitWidth: true,
				isAnimated: true
			}
		}).fadeTo("slow", 1);
	});
}


/* =========================================================
Scroll to top
============================================================ */
jQuery(document).ready(function(){

    jQuery("#back-top").hide();

    jQuery(function () {
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 200) {
                jQuery('#back-top').fadeIn();
            } else {
                jQuery('#back-top').fadeOut();
            }
        });

        jQuery('#back-top a').click(function () {
            jQuery('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});



/* =========================================================
search
============================================================ */
$(document).ready(init)
function init(){
	$(".search").click(ShowInHandler);
	$(".searchclose").click(ShowOutHandler);
	}
function ShowInHandler(){
	$(".search_inner").animate({top:0},500)
	}

function ShowOutHandler(){
	$(".search_inner").animate({top:"-250px"},500)
	}



/* =========================================================
 nav
============================================================ */
   $(function () {
	        var oHead = document.getElementsByTagName('HEAD').item(0);
	        if ($(document).width() < 767) {

	            var oScript = document.createElement("script");
	            oScript.type = "text/javascript";
	            oScript.async = false;
                oScript.src = "js/nav_mobile.js";
                oScript.setAttribute("charset", "utf-8");
                oHead.appendChild(oScript);

	        } else {

	            var oScript4 = document.createElement("script");
	            oScript4.type = "text/javascript";
	            oScript4.src = "js/nav_web.js";
	            oScript4.setAttribute("charset", "utf-8");
	            oHead.appendChild(oScript4);
	        }

	        /*$(window).resize(function () {
	            window.location.href = window.location.href;
	        });*/

	    })
