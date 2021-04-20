(function ($, win, Modernizr, doc) {
	
	//"use strict";

	// DOM READY
	$(function () {

		(function () {
			if ($('.block-link').length) {
				$(".block-link").on("click",function(){
					var url = $(this).find(".target-link").attr("href");
					var target = $(this).find(".target-link").attr("target");
					if(url && target == "_blank"){
						window.open(url);
					}else if(url){
						location.href = url;
					}
					return false;
				})
			}
		}());

	});





/* --------------------------------------------------
/* Back to Top
/* -------------------------------------------------- */
	(function () {

		var extend = {
			button      : '#back-top',
			text        : 'Back to Top',
			min         : 200,
			fadeIn      : 400,
			fadeOut     : 400,
			speed		: 800,
			'class'     : 'active'
		}, oldiOS     = false, oldAndroid = false;

		// Detect if older iOS device, which doesn't support fixed position
		if (/(iPhone|iPod|iPad)\sOS\s[0-4][_\d]+/i.test(navigator.userAgent)) {
			oldiOS = true;
		}

		// Detect if older Android device, which doesn't support fixed position
		if (/Android\s+([0-2][\.\d]+)/i.test(navigator.userAgent)) {
			oldAndroid = true;
		}

		$('body').append('<a href="#" id="' + extend.button.substring(1) + '" title="' + extend.text + '">' + extend.text + '</a>');

		$(win).scroll(function () {
			var pos = $(win).scrollTop();

			if (oldiOS || oldAndroid) {
				$(extend.button).css({
					'position' : 'absolute',
					'top'      : pos + $(win).height()
				});
			}

			if (pos > extend.min) {
				$(extend.button).addClass(extend['class']);
			} else {
				$(extend.button).removeClass(extend['class']);
			}

		});

		$(extend.button).click(function () {
			$('html, body').animate({scrollTop : 0}, extend.speed);
			return false;
		});

	}());

	/* end Back to Top */



}(jQuery, window, Modernizr, document));





/* --------------------------------------------------
/* Footer
/* -------------------------------------------------- */
	$(function () {

		if ($(window).width() >= 1024) {

			$(function () {
				function showFooter() {
					$('#footer div.footerright').hide();
					$('.block1').animate({
						'width': '170px'
					}, 250);
					$('.block2').animate({
						'width': '240px'
					}, 250);
					$('#footer_menu h4').animate({
						'font-size': '16px'
					}, 250, function () {
					$('#footer').stop(false, false).animate({
						height: '270px',
						'padding-top': '15px'
					}, 250);
					$('#footer div.footerright').show().css({
						"bottom": "10px", "width": "100%","textAlign": "center"
						}).css("top", "auto");
					});
					$('.social-icons').show();
					$('.subblock').show();
					$("#footer_openclose").text("-");
					$("#footer").css({ "cursor": "default" });
				}

				function hideFooter() {
					$('#footer div.footerright').hide();

					$('.block1,.block2').animate({
						'width': '90px'
					}, 250);

					$('#footer_menu h4').animate({
						'font-size': '10px'
					}, 250, function () {
						$('#footer').stop(false, false).animate({
 							height: '40px',
							'padding-top': '5px'
							}, 250);
						$('#footer div.footerright').css({ "top": "5px", "width": "", "bottom": "", "textAlign": "right"}).show();
					});
					$('.social-icons').hide();
					$('.subblock').hide();
					$("#footer_openclose").text("+");
					$("#footer").css({ "cursor": "pointer" });
				}

				$("#footer").hoverIntent({
						interval: 200,
						over: showFooter,
						timeout: 0,
						out: hideFooter
				});
			});

		}

		if ($(window).width() <= 1023 && $(window).width() >= 768) {

			$(function () {
				$('#footer div.footerright').hide();
				function showFooter() {
					$('#footer div.footerright').hide();
					$('.block1').animate({
						'width': '110px'
					}, 250);
					$('.block2').animate({
						'width': '190px'
					}, 250);
					$('#footer_menu h4').animate({
						'font-size': '16px'
					}, 250, function () {
					$('#footer').stop(false, false).animate({
						height: '270px',
						'padding-top': '15px'
					}, 250);
					$('#footer div.footerright').show().css({
						"bottom": "10px", "width": "100%","textAlign": "center"
						}).css("top", "auto");
					});
					$('.social-icons').show();
					$('.subblock').show();
					$("#footer_openclose").text("-");
					$("#footer").css({ "cursor": "default" });
				}

				function hideFooter() {
					$('#footer div.footerright').hide();

					$('.block1,.block2').animate({
						'width': '90px'
					}, 250);

					$('#footer_menu h4').animate({
						'font-size': '10px'
					}, 250, function () {
						$('#footer').stop(false, false).animate({
 							height: '30px',
							'padding-top': '5px'
							}, 250);
						//$('#footer div.footerright').css({ "top": "5px", "width": "", "bottom": "", "textAlign": "right"}).show();
					});
					$('.social-icons').hide();
					$('.subblock').hide();
					$("#footer_openclose").text("+");
					$("#footer").css({ "cursor": "pointer" });
				}

				$("#footer").hoverIntent({
						interval: 200,
						over: showFooter,
						timeout: 0,
						out: hideFooter
				});
			});

		}

		if ($(window).width() <= 767 && $(window).width() >= 480) {

			$(function () {
				$('#footer div.footerright').hide();
				function showFooter() {
					$('#footer div.footerright').hide();
					$('.block1').animate({
						'width': '150px'
					}, 250);
					$('.block2').animate({
						'width': '200px'
					}, 250);
					$('#footer_menu h4').animate({
						'font-size': '16px'
					}, 250, function () {
					$('#footer').stop(false, false).animate({
						height: '360px',
						'padding-top': '15px'
					}, 250);
					$('#footer div.footerright').show().css({
						"bottom": "5px", "width": "100%","textAlign": "center"
						}).css("top", "auto");
					});
					$('.social-icons').show();
					$('.subblock').show();
					$("#footer_openclose").text("-");
					$("#footer").css({ "cursor": "default" });
				}

				function hideFooter() {
					$('#footer div.footerright').hide();

					$('.block1,.block2').animate({
						'width': '70px'
					}, 250);

					$('#footer_menu h4').animate({
						'font-size': '10px'
					}, 250, function () {
						$('#footer').stop(false, false).animate({
 							height: '30px',
							'padding-top': '5px'
							}, 250);
						//$('#footer div.footerright').css({ "top": "5px", "width": "", "bottom": "", "textAlign": "right"}).show();
					});
					$('.social-icons').hide();
					$('.subblock').hide();
					$("#footer_openclose").text("+");
					$("#footer").css({ "cursor": "pointer" });
				}

				$("#footer").hoverIntent({
						interval: 200,
						over: showFooter,
						timeout: 0,
						out: hideFooter
				});
			});

		}


		if ($(window).width() <= 479 ) {

			$(function () {
				$('#footer div.footerright').hide();
				function showFooter() {
					$('#footer div.footerright').hide();
					$('.block1').animate({
						'width': '100px'
					}, 250);
					$('.block2').animate({
						'width': '120px'
					}, 250);
					$('#footer_menu h4').animate({
						'font-size': '16px'
					}, 250, function () {
					$('#footer').stop(false, false).animate({
						height: '370px',
						'padding-top': '5px'
					}, 250);
					$('#footer div.footerright').show().css({
						"bottom": "5px", "width": "100%","textAlign": "center"
						}).css("top", "auto");
					});
					$('.social-icons').show();
					$('.subblock').show();
					$("#footer_openclose").text("-");
					$("#footer").css({ "cursor": "default" });
				}

				function hideFooter() {
					$('#footer div.footerright').hide();

					$('.block1,.block2').animate({
						'width': '50px'
					}, 250);

					$('#footer_menu h4').animate({
						'font-size': '9px'
					}, 250, function () {
						$('#footer').stop(false, false).animate({
 							height: '30px',
							'padding-top': '0px'
							}, 250);
						//$('#footer div.footerright').css({ "top": "5px", "width": "", "bottom": "", "textAlign": "right"}).show();
					});
					$('.social-icons').hide();
					$('.subblock').hide();
					$("#footer_openclose").text("+");
					$("#footer").css({ "cursor": "pointer" });
				}

				$("#footer").hoverIntent({
						interval: 200,
						over: showFooter,
						timeout: 0,
						out: hideFooter
				});
			});

		}


		/*$(window).resize(function () {
			window.location.href = window.location.href;
		});*/

	})


/*$(function () {

    function showFooter() {
        $('#footer div.footerright').hide();
        $('.block1').animate({
            'width': '170px'
        }, 250);
        $('.block2').animate({
            'width': '240px'
        }, 250);
        $('#footer_menu h4').animate({
            'font-size': '16px'
        }, 250, function () {
            $('#footer').stop(false, false).animate({
                height: '270px',
                'padding-top': '15px'
            }, 250);
            $('#footer div.footerright').show().css({
                "bottom": "10px", "width": "100%","textAlign": "center"
            }).css("top", "auto");
        });
        $('.social-icons').show();
        $('.subblock').show();
       // $('#footer_menu .block5').animate({
            'margin-top': '0px'
        }, 200);//
        $("#footer_openclose").text("-");
        $("#footer").css({ "cursor": "default" });
    }

    function hideFooter() {
        $('#footer div.footerright').hide();

        $('.block1,.block2').animate({
            'width': '90px'
        }, 250);

        $('#footer_menu h4').animate({
            'font-size': '10px'
        }, 250, function () {
            $('#footer').stop(false, false).animate({
                height: '40px',
                'padding-top': '5px'
            }, 250);
            $('#footer div.footerright').css({ "top": "5px", "width": "", "bottom": "", "textAlign": "right"}).show();
        });
        $('.social-icons').hide();
        $('.subblock').hide();
        $("#footer_openclose").text("+");
        $("#footer").css({ "cursor": "pointer" });
    }

    $("#footer").hoverIntent({
        //sensitivity: 7,
        interval: 200,
        over: showFooter,
        timeout: 0,
        out: hideFooter
    });

    //$("#footer").hoverIntent(showFooter, hideFooter);

});*/





/* --------------------------------------------------
/* Product List
/* -------------------------------------------------- */
/* var zoom = 16;
var latitude = 41.040585;
var longitude = 28.970257;

$(window).bind("load", function() {
    var timeout = setTimeout(function() {
        $(".product-mini-gallery img").trigger("loadImagesNow");
        $(".brands-slider img").trigger("loadImagesNow");

    }, 1000);
});
*/

/*
$(document).ready(function() {

//Mini Gallery Controller "in products"
var miniGallerySliders = new Array();

function checkMiniGalleries() {

    indx = $('.tab-pane.active').attr('id');

    if ($('.tab-pane.active .product-mini-gallery').length > 0) {
        if (miniGallerySliders[indx] === undefined || miniGallerySliders[indx] === false) {
            $('.tab-pane.active .product-mini-gallery').carouFredSel({
                auto: false
            });
            miniGallerySliders[indx] = true;
        }
    }
}

//Product mini gallery
    if ($(".product-mini-gallery").length > 0) {

        allminigalleries = $(".product-mini-gallery img").length;
        $(".product-mini-gallery img").each(function(i) {

            src = $(this).attr('src');
            $(this).attr('data-original', src);
            $(this).attr('src', "http://placehold.it/212x218/ffffff/dddddd/&text=Loading...");

            if (i + 1 >= allminigalleries) {
                checkMiniGalleries();
            }
        });
        $(".product-mini-gallery img").lazyload({
            event: "loadImagesNow",
            effect: "fadeIn"
        });
    }


    $(".product-mini-gallery").parent().parent().parent().find('.mini-prev').click(function(event) {
        event.preventDefault();
        $(this).parent().find('.product-mini-gallery').trigger("prev", 1);
    });


    $(".product-mini-gallery").parent().parent().parent().find('.mini-next').click(function(event) {
        event.preventDefault();
        $(this).parent().find('.product-mini-gallery').trigger("next", 1);
    });


});*/





/* --------------------------------------------------
/* Index Banner
/* -------------------------------------------------- */
	$(function () {

		if ($(window).width() >= 1570 ) {

			jQuery('#index_bannerRotator').allinone_bannerRotator({
				skin: 'universal',
				width: 1280,
				height: 630,
				//width100Proc:true,
				responsive:true,
				thumbsWrapperMarginBottom:35,				
				autoHideBottomNav:false,
				showPreviewThumbs:false
			});	

		}


		if ($(window).width() <= 1569 && $(window).width() >= 1280) {

			jQuery('#index_bannerRotator').allinone_bannerRotator({
				skin: 'universal',
				width: 1020,
				height: 502,
				responsive:true,
				thumbsWrapperMarginBottom:35,				
				autoHideBottomNav:false,
				showPreviewThumbs:false
			});	

		}


		if ($(window).width() <= 1279 && $(window).width() >= 1024) {

			jQuery('#index_bannerRotator').allinone_bannerRotator({
				skin: 'universal',
				width: 980,
				height: 482,
				responsive:true,
				thumbsWrapperMarginBottom:35,				
				autoHideBottomNav:false,
				showPreviewThumbs:false
			});	

		}


		if ($(window).width() <= 1023 && $(window).width() >= 768) {

			jQuery('#index_bannerRotator').allinone_bannerRotator({
				skin: 'universal',
				width: 750,
				height: 369,
				responsive:true,
				thumbsWrapperMarginBottom:35,				
				autoHideBottomNav:false,
				showPreviewThumbs:false
			});	

		}


		if ($(window).width() <= 767 && $(window).width() >= 480) {

			jQuery('#index_bannerRotator').allinone_bannerRotator({
				skin: 'universal',
				width: 450,
				height: 221,
				responsive:true,
				thumbsWrapperMarginBottom:35,				
				autoHideBottomNav:false,
				showPreviewThumbs:false
			});	

		}


		if ($(window).width() <= 479 ) {

			jQuery('#index_bannerRotator').allinone_bannerRotator({
				skin: 'universal',
				width: 320,
				height: 158,
				responsive:true,
				thumbsWrapperMarginBottom:35,				
				autoHideBottomNav:false,
				showPreviewThumbs:false
			});	

		}


		/*$(window).resize(function () {
			window.location.href = window.location.href;
		});*/

	    })





/* --------------------------------------------------
/* Index Banner
/* -------------------------------------------------- */
	$(function () {

		if ($(window).width() >= 1570 ) {

			jQuery('#mainlist_bannerRotator').allinone_bannerRotator({
				skin: 'universal',
				width: 995,
				height: 470,
				//width100Proc:true,
				responsive:true,
				thumbsWrapperMarginBottom:35,				
				autoHideBottomNav:false,
				showPreviewThumbs:false
			});	

		}


		if ($(window).width() <= 1569 && $(window).width() >= 1280) {

			jQuery('#mainlist_bannerRotator').allinone_bannerRotator({
				skin: 'universal',
				width: 770,
				height: 379,
				responsive:true,
				thumbsWrapperMarginBottom:35,				
				autoHideBottomNav:false,
				showPreviewThumbs:false
			});	

		}


		if ($(window).width() <= 1279 && $(window).width() >= 1024) {

			jQuery('#mainlist_bannerRotator').allinone_bannerRotator({
				skin: 'universal',
				width: 750,
				height: 369,
				responsive:true,
				thumbsWrapperMarginBottom:35,				
				autoHideBottomNav:false,
				showPreviewThumbs:false
			});	

		}


		if ($(window).width() <= 1023 && $(window).width() >= 768) {

			jQuery('#mainlist_bannerRotator').allinone_bannerRotator({
				skin: 'universal',
				width: 550,
				height: 271,
				responsive:true,
				thumbsWrapperMarginBottom:35,				
				autoHideBottomNav:false,
				showPreviewThumbs:false
			});	

		}


		if ($(window).width() <= 767 && $(window).width() >= 480) {

			jQuery('#mainlist_bannerRotator').allinone_bannerRotator({
				skin: 'universal',
				width: 450,
				height: 221,
				responsive:true,
				thumbsWrapperMarginBottom:35,				
				autoHideBottomNav:false,
				showPreviewThumbs:false
			});	

		}


		if ($(window).width() <= 479 ) {

			jQuery('#mainlist_bannerRotator').allinone_bannerRotator({
				skin: 'universal',
				width: 320,
				height: 158,
				responsive:true,
				thumbsWrapperMarginBottom:35,				
				autoHideBottomNav:false,
				showPreviewThumbs:false
			});	

		}


		/*$(window).resize(function () {
			window.location.href = window.location.href;
		});*/

	    })






/* --------------------------------------------------
/* Jq Zoom
/* -------------------------------------------------- */
	$(function(){
		// 設定 xzoom 及 yzoom 等值
		$(".jqzoom").jqueryzoom({
			xzoom: 300,
			yzoom: 300
		});
	});





/* --------------------------------------------------
/* Product List Scrollbar
/* -------------------------------------------------- */
		(function($){
			$(window).load(function(){
				/*$(".product_detail_box").mCustomScrollbar({
					scrollInertia:0
				});*/ //垂直滑動
				$(".product_detail_box").mCustomScrollbar({
					horizontalScroll:true,
					scrollButtons:{
						enable:true
					}
				});//水平滑動
			});
		})(jQuery);





/* --------------------------------------------------
/* Product Detail Show
/* -------------------------------------------------- */
		$(document).ready(init);
		function init()
		{
			$(".smallpic").click(smallPicClickHandler);
			$(".smallpic:gt(0)").addClass("product_focus");
			$(".smallpic:gt(0)").fadeTo("flast",0.5);
		}
		function smallPicClickHandler()
		{
			var imageUrl = $(this).attr("src");
			$("#pic_show").attr({src:imageUrl});
			$("#pic_show").attr({jqimg:imageUrl});
			$("#pic_show").hide().fadeIn("slow");
			$(".smallpic").addClass("product_focus");
			$(".smallpic").fadeTo("fast",0.5);
			$(this).removeClass("product_focus");
			$(this).fadeTo("fast",1);
		}





/* --------------------------------------------------
/* Tab
/* -------------------------------------------------- */
		$(function(){
			var _showTab = 0;
			$('ul.tabs li').eq(_showTab).addClass('active');
			$('.tab_content').hide().eq(_showTab).show();
		
			$('ul.tabs li:not(.out)').click(function() {
				var $this = $(this),
					_clickTab = $this.find('a').attr('href');
				$this.addClass('active').siblings('.active').removeClass('active');
				$(_clickTab).stop(false, true).fadeIn().siblings().hide();
 
				return false;
			}).find('a').focus(function(){
				this.blur();
			});
		});





/* --------------------------------------------------
/* Slide Menu
/* -------------------------------------------------- */
	$(function () {

		//var oHead = document.getElementsByTagName('HEAD').item(0);

		if ($(window).width() <= 767 ) {
			/* max-width:767px */
			(function() {
				var $body = document.body
				, $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

				if ( typeof $menu_trigger !== 'undefined' ) {
					$menu_trigger.addEventListener('click', function() {
						$body.className = ( $body.className == 'menu-active' )? '' : 'menu-active';
					});
				}

			}).call(this);
			/* end */

		} else {
			/* min-width:768px */
			function initMenu() {
				$('.menu ul').hide();
				$('.menu li a').click(
					function() {
					$(this).next().slideToggle('normal');	
					}
				);
			}
			$(document).ready(function() {initMenu();});
			/* end */

		}

		/*$(window).resize(function () {
			window.location.href = window.location.href;
		});*/

	})





/* --------------------------------------------------
/* Pretty Photo
/* -------------------------------------------------- */
$(function(){
    $("a[rel^='prettyPhoto']").prettyPhoto({social_tools:false, slideshow:5000, autoplay_slideshow: true});
	$("a[rel^='iframe']").prettyPhoto({social_tools:false});
});




