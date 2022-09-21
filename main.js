/**
* Template Name: Laura - v2.0.0
* Template URL: https://bootstrapmade.com/laura-free-creative-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  $(document).ready(function() {
    $('a').click(function(e) {
      
      var targetHref = $(this).attr('href');
      
    $('html, body').animate({
      scrollTop: $(targetHref).offset().top
    }, 1000);
      
      e.preventDefault();
    });
  });

  // Hero typed
  if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }

  
  
})(jQuery);

function closeMenu() {
  document.getElementById("navbar").style.height = "0%";
}

function openMenu() {
  document.getElementById("navbar").style.height = "100%";
}

