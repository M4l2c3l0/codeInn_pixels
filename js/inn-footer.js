$('document').ready(function() {
  
  /* change footer logo on hover */
  //when mouse over #footer-logo img
  $('#footer-logo').mouseover(function() {
    //its src changes to colored one
    this.src = '../images/cip-rgb_s.png';
  //when mouse out of #footer-logo img
  }).mouseout(function() {
    //its src returns to gray one
    this.src = '../images/cip-footer_gray.png';
  });
    
});