//=require jquery.min.js

// to inlude bootstrap plugins add "=" sign below
// require javascripts/bootstrap/*.*
//=require javascripts/bootstrap.min.js

//=require slick.min.js
//=require isotope.pkgd.min.js
//=require map.js

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


    var workGrid = $(".ba-portfolio");
    $(window).on('load', function () {

        workGrid.isotope({
            // options
            itemSelector: '.ba-portfolio-item',
            percentPosition: true
        });
        // filter items on button click
        $('.ba-portfolio__filter').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            workGrid.isotope({ filter: filterValue });
            $('.ba-active[data-filter]').removeClass('ba-active');
            $(this).addClass('ba-active');
        });

    });


})(jQuery);






















