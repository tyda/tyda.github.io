// JavaScript Document

$(document).ready(function(){
	$("#example a").blend();
	$("#example a").mouseover(MouseOverHandler);
	$("#Out").mouseover(MouseOutHandler);
			});
function MouseOverHandler(){
	$("#Area").animate({height : "225px"},"slow");
	$("#Product").fadeIn("slow");
	$("#Party").fadeIn("slow");
	$("#Evaluation").fadeIn("slow");
	$("#Links").fadeIn("slow");}
function MouseOutHandler(){
	$("#Area").animate({height : "10px"},"slow");
	$("#Area #Product").fadeOut("slow");
	$("#Area #Party").fadeOut("slow");
	$("#Area #Evaluation").fadeOut("slow");
	$("#Area #Links").fadeOut("slow");}