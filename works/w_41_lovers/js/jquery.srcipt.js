
$(function() {
	$(".banner_index ul li a").hover(function() {
		$(this).find(".pic").animate({"opacity": 0.7},"fast");
		//$(this).find("span").animate({'backgroundColor':'#000000',color: 'rgba(42, 47, 76, 0.1)'}, 1000);
	},
	function() {
		$(this).find(".pic").animate({"opacity": 1},"fast");
	})
});




$(function() {
	$(".banner_index .room_style a").hover(function() {
		$(this).find(".pic").animate({"opacity": 0.7},"fast");
	},
	function() {
		$(this).find(".pic").animate({"opacity": 1},"fast");
	})

	$(".listarea").hover(function() {
		$(this).find(".listpic img").animate({"opacity": 0.7},"fast");
	},
	function() {
		$(this).find(".listpic img").animate({"opacity": 1},"fast");
	})

	$(".listarea").hover(function() {
		$(this).find(".listphoto img").animate({"opacity": 0.8},"fast");
	},
	function() {
		$(this).find(".listphoto img").animate({"opacity": 1},"fast");
	})




});





	<!-- nav -->
$(function() {
	$(".nav>ul>li").hover(function() {
		$(this).addClass("sfhover");
		$(".nav ul ul").slideUp("fast");
		$(this).find("a:first").animate({"top": "8px"},"fast");
		$(this).find("span").animate({"top": "-35px"},"fast");
		if (!$(this).find("ul").is(":animated")) $(this).find("ul").slideDown("fast")
	},
	function() {
		$(this).removeClass("sfhover");
		$(this).find("a:first").animate({"top": "0px"},"fast");
		$(this).find("span").animate({"top": "0px"},"fast");
		if (!$(this).find("ul").is(":animated")) $(this).find("ul").slideUp("fast");
		$("#nav ul ul").slideUp("fast")
	})
});





	<!-- news_marquee -->
	$(function(){
		var $marqueeUl = $('.news_marquee ul'),
			$marqueeli = $marqueeUl.append($marqueeUl.html()).children(),
			_height = $('.news_marquee').height() * -1,
			scrollSpeed = 600,
			timer,
			speed = 3000 + scrollSpeed,
			direction = 0,	// 0 表示往上, 1 表示往下
			_lock = false;
 
		$marqueeUl.css('top', $marqueeli.length / 2 * _height);
		
		$marqueeli.hover(function(){
			clearTimeout(timer);
		}, function(){
			timer = setTimeout(showad, speed);
		});
		
		/*$('.news_marquee .marquee_btn').click(function(){
			if(_lock) return;
			clearTimeout(timer);
			direction = $(this).attr('id') == 'marquee_next_btn' ? 0 : 1;
			showad();
		});*/
		
		function showad(){
			_lock = !_lock;
			var _now = $marqueeUl.position().top / _height;
			_now = (direction ? _now - 1 + $marqueeli.length : _now + 1)  % $marqueeli.length;
			
			$marqueeUl.animate({
				top: _now * _height
			}, scrollSpeed, function(){
				if(_now == $marqueeli.length - 1){
					$marqueeUl.css('top', $marqueeli.length / 2 * _height - _height);
				}else if(_now == 0){
					$marqueeUl.css('top', $marqueeli.length / 2 * _height);
				}
				_lock = !_lock;
			});
			
			timer = setTimeout(showad, speed);
		}
		
		timer = setTimeout(showad, speed);
 
		$('a').focus(function(){
			this.blur();
		});
	});





	<!-- banner_fade -->	
	$(function(){
		var $ad = $('.banner_fade_pic a.ad'),
			showIndex = 0,			// 預設要先顯示那一張
			fadeOutSpeed = 1600,	// 淡出的速度
			fadeInSpeed = 2000,		// 淡入的速度
			defaultZ = 1,			// 預設的 z-index
			isHover = false,
			timer, speed = 4600;	// 計時器及輪播切換的速度
		
		// 先把其它圖片的變成透明
		$ad.css({
			opacity: 0,
			zIndex: defaultZ - 1
		}).eq(showIndex).css({
			opacity: 1,
			zIndex: defaultZ
		});
		
		// 組出右下的按鈕
		var str = '';
		for(var i=0;i<$ad.length;i++){
			str += '<a href="#">' + (i + 1) + '</a>';
		}
		var $controlA = $('.banner_fade_pic').append($('<div class="control">' + str + '</div>').css('zIndex', defaultZ + 1)).find('.control a');
 
		// 當按鈕被點選時
		// 若要變成滑鼠滑入來切換時, 可以把 click 換成 mouseover
		$controlA.click(function(){
			// 取得目前點擊的號碼
			showIndex = $(this).text() * 1 - 1;
			
			// 顯示相對應的區域並把其它區域變成透明
			$ad.eq(showIndex).stop().fadeTo(fadeInSpeed, 1, function(){
				if(!isHover){
					// 啟動計時器
					timer = setTimeout(autoClick, speed);
				}
			}).css('zIndex', defaultZ).siblings('a').stop().fadeTo(fadeOutSpeed, 0).css('zIndex', defaultZ - 1);
			// 讓 a 加上 .on
			$(this).addClass('on').siblings().removeClass('on');
 
			return false;
		}).focus(function(){
			$(this).blur();
		}).eq(showIndex).addClass('on');
 
		$ad.hover(function(){
			isHover = true;
			// 停止計時器
			clearTimeout(timer);
		}, function(){
			isHover = false;
			// 啟動計時器
			timer = setTimeout(autoClick, speed);
		})
		
		// 自動點擊下一個
		function autoClick(){
			if(isHover) return;
			showIndex = (showIndex + 1) % $controlA.length;
			$controlA.eq(showIndex).click();
		}
		
		// 啟動計時器
		timer = setTimeout(autoClick, speed);
	});



	<!-- news -->
	$(function(){
		// 幫 div.qa_title 加上 hover 及 click 事件
		// 同時把兄弟元素 div.qa_content 隱藏起來
		$('.newsarea ul.accordionPart li div.news_title').hover(function(){
			$(this).addClass('news_title_on');
		}, function(){
			$(this).removeClass('news_title_on');
		}).click(function(){
			// 當點到標題時，若答案是隱藏時則顯示它；反之則隱藏
			$(this).next('div.news_content').slideToggle();
		}).siblings('div.news_content').hide();

		$('.newsarea ul.accordionPart li div.news_content:first').show();
	});




	<!-- blend -->
(function(a,b){a.fn.blend=function(f,c){var e=this,d=["backgroundColor","backgroundImage","backgroundRepeat","backgroundAttachment","backgroundPosition","backgroundPositionX","backgroundPositionY","paddingTop","paddingLeft","paddingRight","paddingBottom","width","height"];f=parseInt(f,10)||a.fn.blend.speed;c=c||a.fn.blend.callback;e[0]&&!e.find(".jsblend")[0]&&!(a.browser.mozilla&&parseFloat(a.browser.version)<1.9)&&e.each(function(){var g='<span style="position:absolute;top:0;left:0;display:block"/>',h=this,e,k=h.currentStyle||b.getComputedStyle(h,null),i=a(g),j=a(g);if(h.style.position!=="absolute")h.style.position="relative";for(e=0;d[e];e+=1)if(k[d[e]])j[0].style[d[e]]=i[0].style[d[e]]=k[d[e]];i[0].style.backgroundImage=i[0].style.backgroundColor="";a(h).wrapInner(i).addClass("hover").prepend(j);a(h).bind("mouseenter mouseleave",function(a){a.type==="mouseenter"?j.stop().fadeTo(f,0,function(){c&&typeof c==="function"&&c()}):j.stop().fadeTo(f,1)})});return e};a.fn.blend.speed=400;a.fn.blend.callback=null})(jQuery,this)

/*******************************************/
	$(document).ready(function(){
		$(".blend a").blend();
	});


