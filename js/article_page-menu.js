$('document').ready(function() {
  
  //when hover html page menu, change to grey
  $('#html_page-menu #arrow-left').mouseover(function() {
    this.src = '../images/arrow-left_grey.png';
  //when mouse out, put green back
  }).mouseout(function() {
    this.src = '../images/arrow-left.png';
  });
  $('#html_page-menu #menu-burger').mouseover(function() {
    this.src = '../images/menu-burger_grey.png';
  }).mouseout(function() {
    this.src = '../images/menu-burger.png';
  });
  $('#html_page-menu #arrow-right').mouseover(function() {
    this.src = '../images/arrow-right_grey.png';
  }).mouseout(function() {
    this.src = '../images/arrow-right.png';
  });
  
  //when hover css page menu img, change to white
  $('#css_page-menu #arrow-left').mouseover(function() {
    this.src = '../images/arrow-left_white.png';
  //when mouse out, put blue back
  }).mouseout(function() {
    this.src = '../images/arrow-left_blue.png';
  });
  $('#css_page-menu #menu-burger').mouseover(function() {
    this.src = '../images/menu-burger_white.png';
  }).mouseout(function() {
    this.src = '../images/menu-burger_blue.png';
  });
  $('#css_page-menu #arrow-right').mouseover(function() {
    this.src = '../images/arrow-right_white.png';
  //when mouse out replace with gray
  }).mouseout(function() {
    this.src = '../images/arrow-right_blue.png';
  });
    
});