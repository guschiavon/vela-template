$(document).ready(function (){
  $('#burger').click(function () {
    $(this).toggleClass('open');
    $('.mobile-nav').toggleClass('reveal');
  });
}); 
