	$(function(){
		var $ad = $('.exhibit_fade_pic a.ad'),
			showIndex = 0,			
			fadeOutSpeed = 2000,	
			fadeInSpeed = 3000,		
			defaultZ = 10,			
			isHover = false,
			timer, speed = 2000;	
		
		$ad.css({
			opacity: 0,
			zIndex: defaultZ - 1
		}).eq(showIndex).css({
			opacity: 1,
			zIndex: defaultZ
		});
		
		var str = '';
		for(var i=0;i<$ad.length;i++){
			str += '<a href="#">' + (i + 1) + '</a>';
		}
		var $controlA = $('.exhibit_fade_pic').append($('<div class="control">' + str + '</div>').css('zIndex', defaultZ + 1)).find('.control a');
 
		$controlA.click(function(){
			showIndex = $(this).text() * 1 - 1;
			
			$ad.eq(showIndex).stop().fadeTo(fadeInSpeed, 1, function(){
				if(!isHover){
					timer = setTimeout(autoClick, speed);
				}
			}).css('zIndex', defaultZ).siblings('a').stop().fadeTo(fadeOutSpeed, 0).css('zIndex', defaultZ - 1);
			$(this).addClass('on').siblings().removeClass('on');
 
			return false;
		}).focus(function(){
			$(this).blur();
		}).eq(showIndex).addClass('on');
 
		$ad.hover(function(){
			isHover = true;
			clearTimeout(timer);
		}, function(){
			isHover = false;
			timer = setTimeout(autoClick, speed);
		})
		
		function autoClick(){
			if(isHover) return;
			showIndex = (showIndex + 1) % $controlA.length;
			$controlA.eq(showIndex).click();
		}
		
		timer = setTimeout(autoClick, speed);
	});