$(document).ready(function() {

	$('.main_btna, .main_btn, .main nav a:eq(1)').click(function() {
		$('.overlay').show(1000);
		$('.modal').slideDown(2000);
	});

	$('.close').click(function() {
		$('.modal').slideUp(1000);
		$('.overlay').hide(2000);
	});

});