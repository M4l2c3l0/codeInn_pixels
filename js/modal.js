$('document').ready(function() {
  
  //change close button colour on hover
  $('#close-button img').mouseover(function() {
    this.src='../images/close-button_grey.png';
  }).mouseout(function() {
    this.src='../images/close-button_white.png';
  });
  
  // When the user clicks the button, open the modal 
  $('#modal-link').click(function() {
    $('#modal-background').css('display', 'block');
  });

  // When the user clicks on <span> (x), close the modal
  $('#close-button').click(function() {
    $('#modal-background').css('display', 'none');
  });

  var modal = document.getElementById('modal-background');
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if(event.target == modal) {
      modal.style.display='none';
    }
  }
 
});