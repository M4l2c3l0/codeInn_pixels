$('document').ready(function() {
  
  /* auto-scroll to #info-anchor on #moreinfo click */
  $('#journey-start').click(function () {
    $('html, body').animate({
      scrollTop: $("#journey-image").offset().top
    }, 800);
  });
    
});