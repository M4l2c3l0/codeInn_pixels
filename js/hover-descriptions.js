$('document').ready(function() {

  $('.description-points').mouseover(function() {
    $(this).css({'background-color': '#fff', 'border-color': '#ddd'});
    $('h2', this).css('color', '#75b5f0');
    $('img', this).css('display', 'none');
    $('p', this).css('display', 'inherit');
  }).mouseout(function() {
    $(this).css({'background-color': '#75b5f0', 'border-color': '#75b5f0'});
    $('h2', this).css('color', '#fff');
    $('img', this).css('display', 'inherit');
    $('p', this).css('display', 'none');
  });
  
  $('.art-imgs').mouseover(function() {
    $(this).css('background-color', '#fff');
    $('img', this).css('display', 'none');
    $('p', this).css('display', 'inherit');
  }).mouseout(function() {
    $(this).css('background-color', '#84bef4');
    $('img', this).css('display', 'inherit');
    $('p', this).css('display', 'none');
  });
  
});