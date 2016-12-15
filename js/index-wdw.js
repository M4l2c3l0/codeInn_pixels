$('document').ready(function() {

  /* change motto according to window size */
  //select window's width
  $(window).width(function() {
    //call mottoAdapt function
    mottoAdapt();
    //trigger function when window is resized
    $(window).on('resize', function() {
      //call mottoAdapt function
      console.log(window.innerWidth);
      mottoAdapt();
    });
  });



  function mottoAdapt() {
    if($(window).width() >= 450) {
      $('header button').css('width', '150px').html('blog-spot');
      $('#main-container button').css('width', '280px');
      
    } else {
      $('header button').css('width', '100px').html('blog');
      $('#main-container button').css('width', '220px');
    }
  }

});
