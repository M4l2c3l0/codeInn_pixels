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
    if($(window).width() >= 1250) {
      $('#tab-title1,#tab-title2, #tab-title3, #tab-title4, #tab-title5').css({'font-size': '1.6em', 
                                                                              'padding-top': '10px',
                                                                              'width': '300px'});
      $('#canvas-container').css('width', '85.7%');
      $('.css_selection-bar').css({'width': '12.2%', 
                               'display': 'block'});
      $('.css_selection-bar li').css({'font-size': '1.4em',
                                  'padding-top': '7px',
                                  'padding-bottom': '5px',
                                  'text-align': 'right',
                                  'right': '0'});
      $('#css_article-canvas h2, #css_article-canvas p, #css_article-canvas table').css('left', '1%');
      $('#css_article-canvas p').css({'-webkit-column-count': '3',
                                  '-moz-column-count': '3',
                                  'column-count': '3', 
                                  'font-size': '1.3em'});
      $('#css_article-canvas table').css('font-size', '17px');
      $('.code_sample').css('width', '40%');
    } else if ($(window).width() >= 1100 && 
               $(window).width() < 1250) {
      $('#tab-title1,#tab-title2, #tab-title3, #tab-title4, #tab-title5').css({'font-size': '1.6em', 
                                                                              'padding-top': '10px',
                                                                              'width': '290px'});
      $('#canvas-container').css('width', '85.7%');
      $('.css_selection-bar').css({'width': '13.2%', 
                               'display': 'block'});
      $('.css_selection-bar li').css({'font-size': '1.3em',
                                  'padding-top': '6px',
                                  'padding-bottom': '4px',
                                  'text-align': 'right',
                                  'right': '0'});
      $('#css_article-canvas p').css({'-webkit-column-count': '2',
                                  '-moz-column-count': '2',
                                  'column-count': '2', 
                                  'font-size': '1.3em'});
      $('#css_article-canvas table').css('font-size', '17px');
      $('#css_article-canvas h2, #css_article-canvas p, #css_article-canvas table').css('left', '2%');
      $('.code_sample').css('width', '45%');
    } else if ($(window).width() >= 1000 && 
               $(window).width() < 1100) {
      $('#tab-title1,#tab-title2, #tab-title3, #tab-title4, #tab-title5').css({'font-size': '1.5em', 
                                                                              'padding-top': '10px',
                                                                              'width': '280px'});
      $('#canvas-container').css('width', '84%');
      $('.css_selection-bar').css({'width': '13.2%', 
                               'display': 'block'});
      $('.css_selection-bar li').css({'font-size': '1.2em',
                                  'padding-top': '5px',
                                  'padding-bottom': '3px',
                                  'text-align': 'right',
                                  'right': '0'});
      $('#css_article-canvas p').css({'-webkit-column-count': '2',
                                  '-moz-column-count': '2',
                                  'column-count': '2',
                                  'font-size': '1.2em'});
      $('#css_article-canvas table').css('font-size', '16px');
      $('#css_article-canvas h2, #css_article-canvas p, #css_article-canvas table').css('left', '2%');
      $('.code_sample').css('width', '50%');
    } else if ($(window).width() >= 800 && 
               $(window).width() < 1000) {
      $('#tab-title1,#tab-title2, #tab-title3, #tab-title4, #tab-title5').css({'font-size': '1.5em', 
                                                                              'padding-top': '10px',
                                                                              'width': '270px'});
      $('#canvas-container').css('width', '82%');
      $('.css_selection-bar').css({'width': '15.2%', 
                               'display': 'block'});
      $('.css_selection-bar li').css({'font-size': '1.1em',
                                  'padding-top': '4px',
                                  'padding-bottom': '2px',
                                  'text-align': 'right',
                                  'right': '15px'});
      $('#css_article-canvas p').css({'-webkit-column-count': '2',
                                  '-moz-column-count': '2',
                                  'column-count': '2',
                                  'font-size': '1.2em'});
      $('#css_article-canvas table').css('font-size', '16px');
      $('.code_sample').css({'width': '55%',
                             'font-size': '1.5em'});
    } else if ($(window).width() >= 650 && 
               $(window).width() < 800) {
      $('#tab-title1,#tab-title2, #tab-title3, #tab-title4, #tab-title5').css({'font-size': '1.4em', 
                                                                              'padding-top': '10px',
                                                                              'width': '260px'});
      $('#canvas-container').css('width', '81%');
      $('.css_selection-bar').css({'width': '15.2%', 
                               'display': 'block'});
      $('.css_selection-bar li').css({'font-size': '1em',
                                  'padding-top': '3px',
                                  'padding-bottom': '1px',
                                  'text-align': 'right',
                                  'right': '35px'});
      $('#css_article-canvas h2, #css_article-canvas p, #css_article-canvas table').css({'left': '4%',
                                                                             'width': '80%'});
      $('#css_article-canvas p').css({'-webkit-column-count': '1',
                                  '-moz-column-count': '1',
                                  'column-count': '1',
                                  'font-size': '1.2em'});
      $('#css_article-canvas table').css('font-size', '16px');
      $('.code_sample').css({'width': '60%',
                             'font-size': '1.4em'});
    } else if ($(window).width() >= 520 && 
               $(window).width() < 650) {
      $('#tab-title1,#tab-title2, #tab-title3, #tab-title4, #tab-title5').css({'font-size': '1.4em', 
                                                                              'padding-top': '10px',
                                                                              'width': '250px'});
      $('#canvas-container').css('width', '100%');
      $('.css_selection-bar').css('display', 'none');
      $('#css_article-canvas h2, #css_article-canvas p, #css_article-canvas table').css({'left': '0',
                                                                             'width': '90%'});
      $('#css_article-canvas p').css({'-webkit-column-count': '1',
                                  '-moz-column-count': '1',
                                  'column-count': '1',
                                  'font-size': '1.2em'});
      $('#css_article-canvas table').css('font-size', '16px');
      $('.code_sample').css({'width': '70%',
                             'font-size': '1.3em'});    
    } else {
      $('#tab-title1,#tab-title2, #tab-title3, #tab-title4, #tab-title5').css({'font-size': '1.3em', 
                                                                              'padding-top': '10px',
                                                                              'width': '240px'});
      $('#canvas-container').css('width', '100%');
      $('.css_selection-bar').css('display', 'none');
      $('#css_article-canvas h2, #css_article-canvas p, #css_article-canvas table').css({'left': '0',
                                                                             'width': '90%'});
      $('#css_article-canvas p').css({'-webkit-column-count': '1',
                                  '-moz-column-count': '1',
                                  'column-count': '1',
                                  'font-size': '1.2em'});
      $('#css_article-canvas table').css('font-size', '16px');
      $('.code_sample').css({'width': '80%',
                             'font-size': '1.2em'});
    } 
  }//ends mottoAdapt()
 
});