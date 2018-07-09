var widthCorrection = function() {
  $('.dropdown-content').width($('.dropdown').width() + 40);
};
widthCorrection();
$(window).on('resize', function() { 
	if($(window).width() < 1200) {
		window.location = "http://localhost:8080/mobile";
	} else {
		widthCorrection(); 
	}
});