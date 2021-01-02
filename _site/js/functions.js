$(document).ready(function (){
  $('#burger').click(function () {
    $(this).toggleClass('open');
    $('.mobile-nav').toggleClass('reveal');
  });
  $('button.faq-btn').click(function () {
    $(this).parent('.faq-container').toggleClass('bg-accent');
    $(this).siblings('.faq-content').toggleClass('reveal');
    $('button.faq-btn').not(this).siblings('.faq-content').removeClass('reveal');
    $('button.faq-btn').not(this).parent('.faq-container').removeClass('bg-accent');
  })
});



