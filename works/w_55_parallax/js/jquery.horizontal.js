
function goToByScroll(dataslide) {
    if ($.browser.msie) {   
        if (eval(parseInt($.browser.vezzrsion)) < 9) {
            if (dataslide > 0) {
                dataslide = dataslide + 1;
            }            
        }
    }
    switch (dataslide) {
		case 1:
		case "1":
			htmlbody.animate({
				scrollTop: $('.dummy-slide[data-slide="' + dataslide + '"]').offset().top - 2400
			}, 3000, 'easeInOutQuint');
			break;
		case 2:
		case "2":
			htmlbody.animate({
				scrollTop: $('.dummy-slide[data-slide="' + dataslide + '"]').offset().top - 0
			}, 3000, 'easeInOutQuint');
			
			break;
		case 3:
		case "3":
			htmlbody.animate({
				scrollTop: $('.dummy-slide[data-slide="' + dataslide + '"]').offset().top + 2000
			}, 3000, 'easeInOutQuint');
			break;
		case 4:
		case "4":
			htmlbody.animate({
				scrollTop: $('.dummy-slide[data-slide="' + dataslide + '"]').offset().top + 1900
			}, 3000, 'easeInOutQuint');
			break;
		case 5:
		case "5":
			htmlbody.animate({
				scrollTop: $('.dummy-slide[data-slide="' + dataslide + '"]').offset().top - 700
			}, 3000, 'easeInOutQuint');
			break;
		case 6:
		case "6":
			htmlbody.animate({
				scrollTop: $('.dummy-slide[data-slide="' + dataslide + '"]').offset().top + 100
			}, 3000, 'easeInOutQuint');
			break;
		case 7:
		case "7":
		    if ($.browser.msie) {              
		        if (eval(parseInt($.browser.version)) < 9) {
		            htmlbody.animate({
		                scrollTop: $('.dummy-slide[data-slide="' + dataslide + '"]').offset().top + 3000
		            }, 3000, 'easeInOutQuint');
		            break;
		        }
		    } else {
		        htmlbody.animate({
		            scrollTop: $('.dummy-slide[data-slide="' + dataslide + '"]').offset().top + 5000
		        }, 3000, 'easeInOutQuint');
		        break;
            }

	}
}


function resetNav(dataslide) {    
	$('.header .nav .nav_ul li .item').removeClass('active');
	$('.header .nav .nav_ul li[data-slide="' + dataslide + '"] div.item').addClass('active');

	$('.page_link .page_ul li .item').removeClass('active');
	$('.page_link .page_ul li[data-slide="' + dataslide + '"] div.item').addClass('active');
	

	switch(dataslide){
		case "0":
		case 0:
		    $(".header").fadeIn();
			$(".page_link").fadeIn();
			$('.page_link .page_ul li .item1').show().addClass('item_right');
			$('.page_link .page_ul li .item2, .page_link .page_ul li .item3, .page_link .page_ul li .item4, .page_link .page_ul li .item5, .page_link .page_ul li .item6').hide();
		    break;            		

		case "1":
		case 1:
			$('.page_link .page_ul li .item2').show().addClass('item_right');
			$('.page_link .page_ul li .item1, .page_link .page_ul li .item3, .page_link .page_ul li .item4, .page_link .page_ul li .item5, .page_link .page_ul li .item6').hide();
			break;

		case "2":
		case 2:
			$('.page_link .page_ul li .item1').show().removeClass('item_right');
			$('.page_link .page_ul li .item3').show().addClass('item_right');
			$('.page_link .page_ul li .item2, .page_link .page_ul li .item4, .page_link .page_ul li .item5, .page_link .page_ul li .item6').hide();
			break;

		case "3":
		case 3:
			$('.page_link .page_ul li .item2').show().removeClass('item_right');
			$('.page_link .page_ul li .item4').show().addClass('item_right');
			$('.page_link .page_ul li .item1, .page_link .page_ul li .item3, .page_link .page_ul li .item5, .page_link .page_ul li .item6').hide();
			$('.island_brown').removeClass('island_black', 1000);
			$('.stone_brown01').removeClass('stone_black01', 1000);
			$('.stone_brown02').removeClass('stone_black02', 1000);
			$('.stone_brown03').removeClass('stone_black03', 1000);
			break;

		case "4":
		case 4:
			$('.page_link .page_ul li .item3').show().removeClass('item_right');
			$('.page_link .page_ul li .item5').show().addClass('item_right');
			$('.page_link .page_ul li .item1, .page_link .page_ul li .item2, .page_link .page_ul li .item4, .page_link .page_ul li .item6').hide();
			$('.island_brown').addClass('island_black', 1000);
			$('.stone_brown01').addClass('stone_black01', 1000);
			$('.stone_brown02').addClass('stone_black02', 1000);
			$('.stone_brown03').addClass('stone_black03', 1000);
			break;

		case "5":
		case 5:
			$('.page_link .page_ul li .item4').show().removeClass('item_right');
			$('.page_link .page_ul li .item6').show().addClass('item_right');
			$('.page_link .page_ul li .item1, .page_link .page_ul li .item2, .page_link .page_ul li .item3, .page_link .page_ul li .item5').hide();
			$('.island_btn_island').delay(-800).fadeOut(200);
			$('.island_all').delay(-1000).fadeIn(200).animate({ right:"50%" , bottom:"50%" , width:"460px" , height:"400px" ,  marginBottom:"-200px" , marginRight:"-230px"});
			$('.pipeline').delay(0).fadeIn("slow");
			$('.stone').delay(0).fadeIn("slow");
			$('.dripping').delay(0).fadeIn("slow");
			$('.island_btn').delay(1000).fadeIn("slow");
			$('.island_brown').addClass('island_black', 1000);
			$('.stone_brown01').addClass('stone_black01', 1000);
			$('.stone_brown02').addClass('stone_black02', 1000);
			$('.stone_brown03').addClass('stone_black03', 1000);
			break;

		case "6":
		case 6:
			$('.page_link .page_ul li .item5').removeClass('item_right').show();
			$('.page_link .page_ul li .item1, .page_link .page_ul li .item2, .page_link .page_ul li .item3, .page_link .page_ul li .item4, .page_link .page_ul li .item6').hide();
			$('.island_brown').removeClass('island_black', 300);
			$('.stone_brown01').removeClass('stone_black01', 300);
			$('.stone_brown02').removeClass('stone_black02', 300);
			$('.stone_brown03').removeClass('stone_black03', 300);
			$('.island_all').delay(540).animate({ width:"280px" , height:"243px" , marginBottom:"-121.5px" , marginRight:"-140px"});
			$('.pipeline').delay(540).fadeOut("slow");
			$('.stone').delay(540).fadeOut("slow");
			$('.dripping').delay(540).fadeOut("slow");
			$('.island_btn').delay(620).fadeOut("slow");
			$('.island_all').delay(620).animate({ right:"440px" , bottom:"65px"}, 360).fadeOut(200);
			$('.island_btn_island').delay(2300).fadeIn(200);
			break;
	}
}


jQuery(document).ready(function ($) {
    $('body').jpreLoader({
        splashID: "#jSplash",
        loaderVPos: '35%',
        autoClose: true,
        splashFunction: function () {
            $('#jSplash').css({
                "text-align": "center",
                "margin": "110px auto 0 auto"
            });
        }
    }, function () {

        $("div#loading").slideToggle().hide();

        $("div.slide").fadeIn(3000);

        var s = skrollr.init();

        $(window).stellar();

        var nav_link = $('.nav_ul').find('li .item');
        slide = $('.dummy-slide');
        mywindow = $(window);
        htmlbody = $('html,body');

        slide.waypoint(function (event, direction) {
            dataslide = $(this).attr('data-slide');
            if ($.browser.msie) {
                if (eval(parseInt($.browser.version)) < 9) {
                    if (dataslide > 0) {
                        dataslide = dataslide - 1;
                    }
                    if (direction == 'down') {
                        resetNav(dataslide);
                    } else {
                        resetNav(dataslide - 1);
                    }
                } else {
                    if (direction == 'down') {
                        resetNav(dataslide);
                    } else {
                        resetNav(dataslide - 1);
                    }
                }
            } else {
                if (direction == 'down') {
                    resetNav(dataslide);
                } else {
                    resetNav(dataslide - 1);
                }
            }
        }, { offset: '300%' });

        mywindow.scroll(function () {
            if (mywindow.scrollTop() == 0) {
                resetNav("0");
            }
        });
        nav_link.click(function (e) {
            e.preventDefault();
            dataslide = $(this).parent().attr('data-slide');
            goToByScroll(parseInt(dataslide));
        });
        $(".header .nav .nav_ul li").each(function (index) {
            var that = $(this);
            $(this).children(".item").hover(function () {
                var now_active = that.parent().find(".item.active").parent().attr("data-slide");
                if (that.attr("data-slide") == now_active) {

                } else {
                }
            }, function () {
                var now_active = that.parent().find(".item.active").parent().attr("data-slide");
                if (that.attr("data-slide") == now_active) {

                } else {
                }
            });
        });


        /****/
        var page_link = $('.page_ul').find('li .item');
        slide = $('.dummy-slide');
        mywindow = $(window);
        htmlbody = $('html,body');

        slide.waypoint(function (event, direction) {
            dataslide = $(this).attr('data-slide');
            if ($.browser.msie) {
                if (eval(parseInt($.browser.version)) < 9) {
                    if (dataslide > 0) {
                        dataslide = dataslide - 1;
                    }
                    if (direction == 'down') {
                        resetNav(dataslide);
                    } else {
                        resetNav(dataslide - 1);
                    }
                } else {
                    if (direction == 'down') {
                        resetNav(dataslide);
                    } else {
                        resetNav(dataslide - 1);
                    }
                }
            } else {
                if (direction == 'down') {
                    resetNav(dataslide);
                } else {
                    resetNav(dataslide - 1);
                }
            }
        }, { offset: '300%' });

        mywindow.scroll(function () {
            if (mywindow.scrollTop() == 0) {
                resetNav("0");
            }
        });
        page_link.click(function (e) {
            e.preventDefault();
            dataslide = $(this).parent().attr('data-slide');
            goToByScroll(parseInt(dataslide));
        });
        $(".page_link .page_ul li").each(function (index) {
            var that = $(this);
            $(this).children(".item").hover(function () {
                var now_active = that.parent().find(".item.active").parent().attr("data-slide");
                if (that.attr("data-slide") == now_active) {

                } else {
                }
            }, function () {
                var now_active = that.parent().find(".item.active").parent().attr("data-slide");
                if (that.attr("data-slide") == now_active) {

                } else {
                }
            });
        });


        /****/

        $("#slide0").mousemove(function (event) {
            if (($(window).width() - event.pageX) <= 131) {
                $("#mouse_pointer").css({
                    position: "absolute",
                    right: "-" + ($(window).width() - event.pageX) + "px",
                    top: event.pageY + "px",

                    "display": "block"
                });
            } else {
                $("#mouse_pointer").css({
                    position: "absolute",
                    left: event.pageX + "px",
                    top: event.pageY + "px",

                    "display": "block"
                });
            }
        });

        $(window).on("scroll", function () {
            if ($(window).scrollTop() == '800') {
                resetNav("1");

            }
        });

        if (navigator.userAgent.match("Firefox")) {
        }

    });


    header_pos();
    $(window).on('resize', function () {
        $("div#slide0").css("width", "100%");
        header_pos();
    });

});



var header_pos = function(){
	if($(window).width() < 1280){
		$(".header").css("left", "50%");
	}else{
		$(".header").css("left", "50%");
	}
};




