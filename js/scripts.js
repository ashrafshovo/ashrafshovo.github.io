/*Toggle menu starts*/

$(document).ready(function(){
	$('#menu').click(function(){
		$(this).toggleClass('fa-times');
		$('header').toggleClass('toggle');
	});

	$(window).on('scroll load', function(){
		$('#menu').removeClass('fa-times');
		$('header').removeClass('toggle');
		if($(window).scrollTop() > 0){
			$('.top').show();
		}else{
			$('.top').hide();
		}
	});

});

/*Toggle menu ends*/

/*Loader starts*/

$(window).on("load",function(){
     $(".loader-wrapper").fadeOut("slow");
});

/*Loader ends*/

/*Smooth scrolling starts*/

$('a[href*="#"]').on('click', function(e){
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top,
	},
		500,
		'linear'
	);

});

/*Smooth scrooling ends*/