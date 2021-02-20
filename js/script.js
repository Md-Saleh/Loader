$(document).ready(function(){
	$(window).on('load', function() { // makes sure the whole site is loaded 
	  $('#loading-area span').fadeOut(); // will first fade out the loading animation 
	  $('#loading-area').delay(500).fadeOut('slow'); // will fade out the white DIV that covers the website. 
	  $('body').delay(500).css({'overflow':'visible'});
	})
});