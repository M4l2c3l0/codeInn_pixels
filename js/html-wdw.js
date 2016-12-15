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
      $('#canvas-title1').html('HTML/HyperText Markup Language');
      $('#canvas-title2').html('HTML/Elements');
      $('#canvas-title3').html('HTML/Attributes');
      $('#canvas-title4').html('HTML/Void Elements');
      $('#canvas-title5').html('HTML/Display Value');
      $('#window-start-title, #canvas-title1, #canvas-title2, #canvas-title3, #canvas-title4, #canvas-title5').css({'font-size': '2.5em',
                    'padding-top': '4px'});
      $('#html_article-canvas h2, #html_article-canvas p, #html_article-canvas table').css({'left': '6.9%',
                   'width': '87%'});
      $('.html_selection-bar').css({'width': '12.2%', 
                               'display': 'inline-block'});
      $('.html_selection-bar li').css('font-size', '1.4em');
      $('#html_article-canvas h2, #html_article-canvas p, #html_article-canvas table').css('left', '1%');
      $('#html_article-canvas p').css({'-webkit-column-count': '3',
                                  '-moz-column-count': '3',
                                  'column-count': '3', 
                                  'font-size': '1.3em'});
      $('#html_article-canvas table').css('font-size', '17px');
      $('.code_sample').css('width', '40%');
    } else if ($(window).width() >= 1100 && 
               $(window).width() < 1250) {
      $('#canvas-title1').html('HTML/HyperText Markup Language');
      $('#canvas-title2').html('HTML/Elements');
      $('#canvas-title3').html('HTML/Attributes');
      $('#canvas-title4').html('HTML/Void Elements');
      $('#canvas-title5').html('HTML/Display Value');
      $('#window-start-title, #canvas-title1, #canvas-title2, #canvas-title3, #canvas-title4, #canvas-title5').css({'font-size': '2.4em',
                    'padding-top': '6px'});
      $('#html_article-canvas h2, #html_article-canvas p, #html_article-canvas table').css({'left': '6.9%',
                   'width': '87%'});
      $('.html_selection-bar').css({'width': '13.2%', 
                               'display': 'inline-block'});
      $('.html_selection-bar li').css('font-size', '1.2em');
      $('#html_article-canvas p').css({'-webkit-column-count': '2',
                                  '-moz-column-count': '2',
                                  'column-count': '2', 
                                  'font-size': '1.3em'});
      $('#html_article-canvas table').css('font-size', '17px');
      $('#html_article-canvas h2, #html_article-canvas p, #html_article-canvas table').css('left', '2%');
      $('.code_sample').css('width', '45%');
    } else if ($(window).width() >= 1000 && 
               $(window).width() < 1100) {
      $('#canvas-title1').html('HTML/HyperText Markup Language');
      $('#canvas-title2').html('HTML/Elements');
      $('#canvas-title3').html('HTML/Attributes');
      $('#canvas-title4').html('HTML/Void Elements');
      $('#canvas-title5').html('HTML/Display Value');
      $('#window-start-title, #canvas-title1, #canvas-title2, #canvas-title3, #canvas-title4, #canvas-title5').css({'font-size': '2.3em',
                    'padding-top': '7px'});
      $('#html_article-canvas h2, #html_article-canvas p, #html_article-canvas table').css({'left': '6.9%',
                   'width': '87%'});
      $('.html_selection-bar').css({'width': '13.2%', 
                               'display': 'inline-block'});
      $('.html_selection-bar li').css('font-size', '1.2em');
      $('#html_article-canvas p').css({'-webkit-column-count': '2',
                                  '-moz-column-count': '2',
                                  'column-count': '2',
                                  'font-size': '1.2em'});
      $('#html_article-canvas table').css('font-size', '16px');
      $('#html_article-canvas h2, #html_article-canvas p, #html_article-canvas table').css('left', '2%');
      $('.code_sample').css('width', '50%');
    } else if ($(window).width() >= 800 && 
               $(window).width() < 1000) {
      $('#canvas-title1').html('HTML/HyperText Markup Language');
      $('#canvas-title2').html('HTML/Elements');
      $('#canvas-title3').html('HTML/Attributes');
      $('#canvas-title4').html('HTML/Void Elements');
      $('#canvas-title5').html('HTML/Display Value');
      $('#window-start-title, #canvas-title1, #canvas-title2, #canvas-title3, #canvas-title4, #canvas-title5').css({'font-size': '2.2em',
                    'padding-top': '8px'});
      $('#html_article-canvas h2, #html_article-canvas p, #html_article-canvas table').css({'left': '6.9%',
                   'width': '87%'});
      $('.html_selection-bar').css({'width': '15.2%', 
                               'display': 'inline-block'});
      $('.html_selection-bar li').css('font-size', '1em');
      $('#html_article-canvas p').css({'-webkit-column-count': '2',
                                  '-moz-column-count': '2',
                                  'column-count': '2',
                                  'font-size': '1.2em'});
      $('#html_article-canvas table').css('font-size', '16px');
      $('.code_sample').css({'width': '55%',
                             'font-size': '1.5em'});
    } else if ($(window).width() >= 650 && 
               $(window).width() < 800) {
      $('#canvas-title1').html('HyperText Markup Language');
      $('#canvas-title2').html('HTML/Elements');
      $('#canvas-title3').html('HTML/Attributes');
      $('#canvas-title4').html('HTML/Void Elements');
      $('#canvas-title5').html('HTML/Display Value');
      $('#window-start-title, #canvas-title1, #canvas-title2, #canvas-title3, #canvas-title4, #canvas-title5').css({'font-size': '2.1em',
                    'padding-top': '9px'});
      $('#html_article-canvas').css({'width': '87%',
                                'left': '6.9%'});
      $('.html_selection-bar').css({'width': '15.2%', 
                               'display': 'inline-block'});
      $('.html_selection-bar li').css('font-size', '0.9em');
      $('#html_article-canvas h2, #html_article-canvas p, #html_article-canvas table').css({'left': '4%',
                   'width': '80%'});
      $('#html_article-canvas p').css({'-webkit-column-count': '1',
                                  '-moz-column-count': '1',
                                  'column-count': '1',
                                  'font-size': '1.2em'});
      $('#html_article-canvas table').css('font-size', '16px');
      $('.code_sample').css({'width': '60%',
                             'font-size': '1.4em'});
    } else if ($(window).width() >= 520 && 
               $(window).width() < 650) {
      $('#canvas-title1').html('HTML');
      $('#canvas-title2').html('HTML/Elements');
      $('#canvas-title3').html('HTML/Attributes');
      $('#canvas-title4').html('HTML/Void Elements');
      $('#canvas-title5').html('HTML/Display Value');
      $('#window-start-title, #canvas-title1, #canvas-title2, #canvas-title3, #canvas-title4, #canvas-title5').css({'font-size': '2em',
                    'padding-top': '10px'});
      $('#html_article-canvas').css({'width': '100%',
                                'left': '0'});
      $('.html_selection-bar').css('display', 'none');
      $('#html_article-canvas h2, #html_article-canvas p, #html_article-canvas table').css({'left': '0',
                   'width': '90%'});
      $('#html_article-canvas p').css({'-webkit-column-count': '1',
                                  '-moz-column-count': '1',
                                  'column-count': '1',
                                  'font-size': '1.2em'});
      $('#html_article-canvas table').css('font-size', '16px');
      $('.code_sample').css({'width': '70%',
                             'font-size': '1.3em'});    
    } else {
      $('#canvas-title1').html('HTML');
      $('#canvas-title2').html('Elements');
      $('#canvas-title3').html('Attributes');
      $('#canvas-title4').html('Void Elements');
      $('#canvas-title5').html('Display Value');
      $('#window-start-title, #canvas-title1, #canvas-title2, #canvas-title3, #canvas-title4, #canvas-title5').css({'font-size': '1.9em',
                    'padding-top': '11px'});
      $('#html_article-canvas').css({'width': '100%',
                                'left': '0'});
      $('.html_selection-bar').css('display', 'none');
      $('#html_article-canvas h2, #html_article-canvas p, #html_article-canvas table').css({'left': '0',
                   'width': '90%'});
      $('#html_article-canvas p').css({'-webkit-column-count': '1',
                                  '-moz-column-count': '1',
                                  'column-count': '1',
                                  'font-size': '1.2em'});
      $('#html_article-canvas table').css('font-size', '16px');
      $('.code_sample').css({'width': '80%',
                             'font-size': '1.2em'});
    } 
  }//ends mottoAdapt()
 
});