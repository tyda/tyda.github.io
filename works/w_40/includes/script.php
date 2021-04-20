    <script src="js/jquery-1.7.1.min.js" type="text/javascript" charset="utf-8"></script>
	<script type="text/javascript" src="js/jquery.bgpos.js"></script><!--- nav -->    
	<script type="text/javascript" src="js/exhibit_fade_pic.js"></script><!-- exhibit_fade -->
	<script type="text/javascript"><!--  left_menu -->
		function initMenu() {
			$('#left_menu ul').hide();
			$('#left_menu ul:first').show();
			$('#left_menu li a').click(
			function() {
				$(this).next().slideToggle('normal');	
				}
			);
		}
		$(document).ready(function() {initMenu();});
	</script>
	<link rel="stylesheet" href="css/prettyPhoto.css" type="text/css" media="screen" charset="utf-8" /><!-- pretty -->
	<script type="text/javascript"  src="js/jquery.prettyPhoto.js"charset="utf-8"></script>
	<script>
		$(function(){
			$("a[rel^='prettyPhoto']").prettyPhoto({social_tools:false, slideshow:5000/*, autoplay_slideshow: true*/});
		});
	</script>
	<script type="text/javascript" src="js/jquery.wookmark.js" charset="utf-8"></script><!-- wookmark -->
	<script>
		$(document).ready(new function() {
			var options = {
				autoResize: false,/*true*/
				container: $('#index_work_main'),
				offset: 7,
				itemWidth: 178
			};
			var handler = $('#tiles li');
			handler.wookmark(options);
			handler.click(function(){
				var newHeight = $('img', this).height() + Math.round(Math.random()*300+30);
				$(this).css('height', newHeight+'px');
				handler.wookmark();
			});
		});
	</script>