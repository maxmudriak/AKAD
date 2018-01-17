//=require jquery.min.js

// to inlude bootstrap plugins add "=" sign below
// require javascripts/bootstrap/*.*
//=require javascripts/bootstrap.min.js

//=require slick.min.js

;(function($){

	$(document).ready(function(){
		var $slider = $('.ba-slider');

		$slider.slick({
		dots: true,
		infinite: false,
            arrows: false,
            infinite: true,
            autoplay: true
		});
	});

})(jQuery);






















