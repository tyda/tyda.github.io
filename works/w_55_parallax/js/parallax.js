$(document).ready(function() {
	
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.area_A').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.area_B').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#area_B').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.area_C').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#area_C').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.area_D').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#area_D').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.area_E').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#area_E').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.area_F').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#area_F').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });


    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );
    
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.12))+'px');//.25
	$('#parallax-bg2').css('top',(0-(scrolled*.25))+'px');//.5
	$('#parallax-bg3').css('top',(0-(scrolled*.37))+'px');//.75
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#area_B').offset().top - (($('#area_C').offset().top - $('#area_B').offset().top) / 2);
	var section3Top =  $('#area_C').offset().top - (($('#area_D').offset().top - $('#area_C').offset().top) / 2);
	var section4Top =  $('#area_D').offset().top - (($('#area_E').offset().top - $('#area_D').offset().top) / 2);
	var section5Top =  $('#area_E').offset().top - (($('#area_F').offset().top - $('#area_E').offset().top) / 2);
	var section6Top =  $('#area_F').offset().top - (($(document).height() - $('#area_F').offset().top) / 40);
	$('nav#primary a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){ //AAA
		$('nav#primary a.area_A').addClass('active');
		$('.user_box').fadeOut(0);
		$(".btn_CC").fadeOut(0);
		$(".btn_DD").fadeOut(0);
		$(".btn_EE").fadeOut(0);
		$(".btn_FF").fadeOut(0);
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){ //BBB
		$('nav#primary a.area_B').addClass('active');
		$('.user_box').fadeOut("fast");
		$(".btn_CC").fadeOut("fast");
		$(".btn_DD").fadeOut(0);
		$(".btn_EE").fadeOut(0);
		$(".btn_FF").fadeOut(0);

		//島浮動
		//島色-藍綠
		$('.island_green').removeClass('island_brown', 1000);
		$('.stone_green01').removeClass('stone_brown01', 1000);
		$('.stone_green02').removeClass('stone_brown02', 1000);
		$('.stone_green03').removeClass('stone_brown03', 1000);

	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){ //CCC
		$('nav#primary a.area_C').addClass('active');
		$('.user_box').fadeIn(500);
		$(".btn_CC").fadeIn(500);
		$(".btn_DD").fadeOut("fast");
		$(".btn_EE").fadeOut(0);
		$(".btn_FF").fadeOut(0);
		//島浮動
		//島換色-咖啡
		$('.island_green').addClass('island_brown', 1000);
		$('.stone_green01').addClass('stone_brown01', 1000);
		$('.stone_green02').addClass('stone_brown02', 1000);
		$('.stone_green03').addClass('stone_brown03', 1000);
		//島縮小
		$('.island_all').removeClass('island_all_zoom', 1000);
		$('.island_wrap').removeClass('island_wrap_zoom', 1000);
		$('.pipeline').removeClass('pipeline_zoom', 1000);
		$('.stone').removeClass('stone_zoom', 1000);
		$('.toggle-btn').removeClass('toggle-btn_zoom', 1000);
		$('.drop').removeClass('drop_zoom', 1000);


	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){ //DDD
		$('nav#primary a.area_D').addClass('active');

		$(".btn_CC").fadeOut("fast");
		$(".btn_DD").fadeIn(500);
		$(".btn_EE").fadeOut("fast");
		$(".splat-toggle").fadeOut("fast");
		$(".btn_FF").fadeOut(0);

		//島浮動
		//島換色-咖啡
		$('.island_green').addClass('island_brown', 1000);
		$('.stone_green01').addClass('stone_brown01', 1000);
		$('.stone_green02').addClass('stone_brown02', 1000);
		$('.stone_green03').addClass('stone_brown03', 1000);
		//島放大
		$('.island_all').addClass('island_all_zoom', 2000);
		$('.island_wrap').addClass('island_wrap_zoom', 2000);
		$('.pipeline').addClass('pipeline_zoom', 2000);
		$('.stone').addClass('stone_zoom', 2000);
		$('.toggle-btn').addClass('toggle-btn_zoom', 2000);
		$('.drop').addClass('drop_zoom', 2000);

	} else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){ //EEE
		$('nav#primary a.area_E').addClass('active');

		$(".btn_CC").fadeOut(0);
		$(".btn_DD").fadeOut("fast");
		$(".btn_EE").fadeIn(500);
		$(".splat-toggle").fadeIn(5000);
		$(".btn_FF").fadeOut("fast");

		//島浮動
		//島換色-咖啡
		$('.island_green').addClass('island_brown', 1000);
		$('.stone_green01').addClass('stone_brown01', 1000);
		$('.stone_green02').addClass('stone_brown02', 1000);
		$('.stone_green03').addClass('stone_brown03', 1000);
		//島縮小
		$('.island_all').removeClass('island_all_zoom', 1000);
		$('.island_wrap').removeClass('island_wrap_zoom', 1000);
		$('.pipeline').removeClass('pipeline_zoom', 1000);
		$('.stone').removeClass('stone_zoom', 1000);
		$('.toggle-btn').removeClass('toggle-btn_zoom', 1000);
		$('.drop').removeClass('drop_zoom', 1000);


	} else if ($(document).scrollTop() >= section6Top){ //EEE
		$('nav#primary a.area_F').addClass('active');

		$(".btn_EE").fadeOut(0);
		$(".btn_CC").fadeOut(0);
		$(".btn_DD").fadeOut("fast");
		$(".splat-toggle").fadeOut("fast");
		$(".btn_FF").fadeIn(500);

		//島浮動
		//島換色-咖啡
		$('.island_green').addClass('island_brown', 1000);
		$('.stone_green01').addClass('stone_brown01', 1000);
		$('.stone_green02').addClass('stone_brown02', 1000);
		$('.stone_green03').addClass('stone_brown03', 1000);
		//島縮小
		$('.island_all').removeClass('island_all_zoom', 1000);
		$('.island_wrap').removeClass('island_wrap_zoom', 1000);
		$('.pipeline').removeClass('pipeline_zoom', 1000);
		$('.stone').removeClass('stone_zoom', 1000);
		$('.toggle-btn').removeClass('toggle-btn_zoom', 1000);
		$('.drop').removeClass('drop_zoom', 1000);


	}
}





		//島縮小
		/*$('.island_all').animate({width:"690px", height:"675px", margin:"-337.5px 0 0 -345px"},"slow");
		$('.island_wrap').animate({width:"460px", height:"245px", margin:"-50px 0 0 -230px"},"slow");
		$('.pipeline').animate({width:"42px", height:"42px"},"slow");
		$('.stone').animate({width:"170px", height:"116px"},"slow");
		$('.dripping .toggle-btn').animate({width:"6px", height:"6px"},"slow");
		$('.dripping .drop').animate({width:"6px", height:"6px"},"slow");*/

		//島放大
		/*$('.island_all').animate({width:"800px", height:"600px", margin:"-300px 0 0 -400px"},"slow");
		$('.island_wrap').animate({width:"800px", height:"427px", margin:"-213.5px 0 0 -400px"},"slow");
		$('.pipeline').animate({width:"74px", height:"74px"},"slow");
		$('.stone').animate({width:"294px", height:"201px"},"slow");
		$('.dripping .toggle-btn').animate({width:"10px", height:"10px"},"slow");
		$('.dripping .drop').animate({width:"10px", height:"10px"},"slow");*/
