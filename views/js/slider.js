var slider = $('.slider');
var sliderItems = $('.item');
var slideTime = 700;
var itemSlideInterval = 3500;

var $left = "-700px";
var $right = "700px";

var animate = function(direction) {
	var item = $('.item').first();
	$(item).first().animate({
			left: direction,
			opacity: 0.25
		}, slideTime, function() {
			$(this).appendTo($(slider)).css({'left': 0, 'opacity': 1});
			setAutoSlide();
		}
	);
};

var interval;
var setAutoSlide = function() {
	clearInterval(interval);
	interval = setInterval(function() {
		animate($left);
	}, itemSlideInterval);
}
setAutoSlide();


$('.slider-control .right').click(function() {
	clearInterval(interval);
	animate($right);
});

$('.slider-control .left').click(function() {
	clearInterval(interval);
	animate($left);
});