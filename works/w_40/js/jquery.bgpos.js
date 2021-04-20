/**
 * @author Alexander Farkas
 * v. 1.02
 */
(function($) {
	$.extend($.fx.step,{
	    backgroundPosition: function(fx) {
            if (fx.state === 0 && typeof fx.end == 'string') {
                var start = $.curCSS(fx.elem,'backgroundPosition');
                start = toArray(start);
                fx.start = [start[0],start[2]];
                var end = toArray(fx.end);
                fx.end = [end[0],end[2]];
                fx.unit = [end[1],end[3]];
			}
            var nowPosX = [];
            nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
            nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];
            fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];

           function toArray(strg){
               strg = strg.replace(/left|top/g,'0px');
               strg = strg.replace(/right|bottom/g,'100%');
               strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
               var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
               return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
           }
        }
	});
})(jQuery);


/***************************************/


$(function(){
	$('#N01 a')
		.css( {backgroundPosition: "(-125px 0)"} )
		.mouseover(function(){
			$(this).stop().animate({backgroundPosition:"(0px 0)"}, {duration:500})
		})
		.mouseout(function(){
			$(this).stop().animate({backgroundPosition:"(-125px 0)"}, {duration:200, complete:function(){
				$(this).css({backgroundPosition: "(-125px 0)"})
			}})
		})
	$('#N02 a')
		.css( {backgroundPosition: "(-125px -40px)"} )
		.mouseover(function(){
			$(this).stop().animate({backgroundPosition:"(0px -40px)"}, {duration:500})
		})
		.mouseout(function(){
			$(this).stop().animate({backgroundPosition:"(-125px -40px)"}, {duration:200, complete:function(){
				$(this).css({backgroundPosition: "(-125px -40px)"})
			}})
		})
	$('#N03 a')
		.css( {backgroundPosition: "(-125px -80px)"} )
		.mouseover(function(){
			$(this).stop().animate({backgroundPosition:"(0px -80px)"}, {duration:500})
		})
		.mouseout(function(){
			$(this).stop().animate({backgroundPosition:"(-125px -80px)"}, {duration:200, complete:function(){
				$(this).css({backgroundPosition: "(-125px -80px)"})
			}})
		})
	$('#N04 a')
		.css( {backgroundPosition: "(-125px -120px)"} )
		.mouseover(function(){
			$(this).stop().animate({backgroundPosition:"(0px -120px)"}, {duration:500})
		})
		.mouseout(function(){
			$(this).stop().animate({backgroundPosition:"(-125px -120px)"}, {duration:200, complete:function(){
				$(this).css({backgroundPosition: "(-125px -120px)"})
			}})
		})
	$('#N05 a')
		.css( {backgroundPosition: "(-125px -160px)"} )
		.mouseover(function(){
			$(this).stop().animate({backgroundPosition:"(0px -160px)"}, {duration:500})
		})
		.mouseout(function(){
			$(this).stop().animate({backgroundPosition:"(-125px -160px)"}, {duration:200, complete:function(){
				$(this).css({backgroundPosition: "(-125px -160px)"})
			}})
		})
	$('#N06 a')
		.css( {backgroundPosition: "(-125px -200px)"} )
		.mouseover(function(){
			$(this).stop().animate({backgroundPosition:"(0px -200px)"}, {duration:500})
		})
		.mouseout(function(){
			$(this).stop().animate({backgroundPosition:"(-125px -200px)"}, {duration:200, complete:function(){
				$(this).css({backgroundPosition: "(-125px -200px)"})
			}})
		})
});
