/*	$(function(){
		$('.qaContent ul').addClass('accordionPart').find('li div:nth-child(1)').addClass('qa_title').hover(function(){
			$(this).addClass('qa_title_on');
		}, function(){
			$(this).removeClass('qa_title_on');
		}).click(function(){
			var $qa_content = $(this).next('div.qa_content');
			if(!$qa_content.is(':visible')){
				$('.qaContent ul li div.qa_content:visible').slideUp();
			}
			$qa_content.slideToggle();
		}).siblings().addClass('qa_content').hide();*/

	$(function(){

		$('.qaContent ul.accordionPart li div.qa_title').hover(function(){
			$(this).addClass('qa_title_on');
		}, function(){
			$(this).removeClass('qa_title_on');
		}).click(function(){
			$(this).next('div.qa_content').slideToggle();
		}).siblings('div.qa_content').hide();

		
		$('.qaContent .qa_showall').click(function(){
			$('.qaContent ul.accordionPart li div.qa_content').slideDown();
			return false;
		});
 
		
		$('.qaContent .qa_hideall').click(function(){
			$('.qaContent ul.accordionPart li div.qa_content').slideUp();
			return false;
		});
	});