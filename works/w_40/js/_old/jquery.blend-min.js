// Blend 2.1 for jQuery 1.3+
// Copyright (c) 2010 Jack Moore - jack@colorpowered.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
(function(a,b){a.fn.blend=function(f,c){var e=this,d=["backgroundColor","backgroundImage","backgroundRepeat","backgroundAttachment","backgroundPosition","backgroundPositionX","backgroundPositionY","paddingTop","paddingLeft","paddingRight","paddingBottom","width","height"];f=parseInt(f,10)||a.fn.blend.speed;c=c||a.fn.blend.callback;e[0]&&!e.find(".jsblend")[0]&&!(a.browser.mozilla&&parseFloat(a.browser.version)<1.9)&&e.each(function(){var g='<span style="position:absolute;top:0;left:0;display:block"/>',h=this,e,k=h.currentStyle||b.getComputedStyle(h,null),i=a(g),j=a(g);if(h.style.position!=="absolute")h.style.position="relative";for(e=0;d[e];e+=1)if(k[d[e]])j[0].style[d[e]]=i[0].style[d[e]]=k[d[e]];i[0].style.backgroundImage=i[0].style.backgroundColor="";a(h).wrapInner(i).addClass("hover").prepend(j);a(h).bind("mouseenter mouseleave",function(a){a.type==="mouseenter"?j.stop().fadeTo(f,0,function(){c&&typeof c==="function"&&c()}):j.stop().fadeTo(f,1)})});return e};a.fn.blend.speed=400;a.fn.blend.callback=null})(jQuery,this)


/*********************************************************************/
		$(document).ready(function(){
			//$("ul.HistoryList li a").blend();
			$(".blend a").blend();
		});