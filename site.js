(function ($, undefined) {
  $(document).ready(function() {
		// sticky product page navigation bar
		
		$(window).scroll(function(e) {
			if (getScrollXY() > 201) {
				$('.product-nav').addClass('sticky');
			} else {
				$('.product-nav').removeClass('sticky');
			}
		});
		
		function getScrollXY() {
		  var scrOfX = 0, scrOfY = 0;
		  if( typeof( window.pageYOffset ) == 'number' ) {
		    //Netscape compliant
		    scrOfY = window.pageYOffset;
		    scrOfX = window.pageXOffset;
		  } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
		    //DOM compliant
		    scrOfY = document.body.scrollTop;
		    scrOfX = document.body.scrollLeft;
		  } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
		    //IE6 standards compliant mode
		    scrOfY = document.documentElement.scrollTop;
		    scrOfX = document.documentElement.scrollLeft;
		  }
		  return scrOfY;
		}
	});
}(jQuery));
