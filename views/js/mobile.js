var navOpen = false;
var speed = 400;

var width = $('.navigation').width();
var offset = width + 30;

var moveHamburger = function(offset) {
	var opacity = navOpen ? 1 : 0.5;

	$('.hamburger').animate({
		right: offset,
		opacity: opacity
	}, speed).toggleClass('close');
}

$('.hamburger').click(function() {
	if (navOpen) {
		$('.navigation').animate({
			right: -offset
		}, speed);
		
		moveHamburger(20);
		
		$('div').css('opacity', 1);

	} else {
		$('.navigation').animate({
			right: 20
		}, speed, function() {
			$(this).animate({
				right: 0
			}, speed);
		});

		if ($(window).width() < 414) {
			moveHamburger(offset - 18);
		} else {
			moveHamburger(offset - 5);
		}

		$('div').css('opacity', 0.5);
	}

	navOpen = !navOpen;
});
