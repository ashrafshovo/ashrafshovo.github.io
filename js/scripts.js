/*Toggle menu starts*/

$(document).ready(function(){
	$('#menu').click(function(){
		$(this).toggleClass('fa-times');
		$('header').toggleClass('toggle');
	});

	$(window).on('scroll load', function(){
		$('#menu').removeClass('fa-times');
		$('header').removeClass('toggle');
	});

});

/*Toggle menu ends*/

/*Loader starts*/

$(window).on("load",function(){
     $(".loader-wrapper").fadeOut("slow");
});

/*Loader ends*/