$(document).ready(function() {

	$('.fa-bars').on('click', function(){
		$('.menu').slideToggle('.active');
		$(this).css('display', 'none');
	});
	$('.close-btn').on('click', function(){
		$('.menu').slideToggle('.active');
		$('.fa-bars').css('display', 'block');
	});


	var e = $('li .plan-item');
		e.onmouseover = function() {
		  $('.popup-plan').css('display', 'block')
		}

	
});

