//counter
 $('.number').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
//slick slider for screen sections
$('.screen_multiple').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow:'<button type="button" class="secreen_prev"><i class="fas fa-dot-circle"></i></button>',
  	nextArrow:'<button type="button" class="secreen_next"><i class="fas fa-dot-circle"></i></button>',
  	arrows:true

});
//testimonial js

$('.testimonial_slider').slick({
	inifinite:true,
  prevArrow:'<button type="button" class="testimonial_prev"><i class="fas fa-arrow-left"></i></button>',
  	nextArrow:'<button type="button" class="testimonial_next"><i class="fas fa-arrow-right"></i></button>',
  	arrows:true
}); 
//Magnific popup js
$(document).ready(function() {
  $('.youtube_link').magnificPopup({
  	type:'iframe',
  	iframe: {
  patterns: {
    youtube: {
      index: 'youtube.com/',

      id: 'v=', 

      src: 'http://www.youtube.com/embed/%id%?autoplay=1'
    },
    vimeo: {
      index: 'vimeo.com/',
      id: '/',
      src: '//player.vimeo.com/video/%id%?autoplay=1'
    },
    gmaps: {
      index: '//maps.google.',
      src: '%id%&output=embed'
    }

  },

  srcAction: 'iframe_src', 
}


  });
});
