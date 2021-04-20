		$(document).ready(init);
		function init(){
			$(".menu_show").hide();
			$(".nav_more").click(MenuclickHandler);
			}
		function MenuclickHandler(){
			$(".menu_show").slideToggle("fast");	
			}

		function initMenu() {
			$('ul.menu .sub-nav-wrapper').hide();
			$('ul.menu li a').click(
				function() {
				$(this).next().slideToggle('normal');	
				}
			);
		}
		$(document).ready(function() {initMenu();});