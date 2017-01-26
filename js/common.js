$(document).ready(function() {
  
  $('.toggle-button').click(function(e) {
    e.preventDefault();
    $('body').toggleClass('overflowhidden');
    $(this).toggleClass('active');
    $('.slidedown').slideToggle();
  });
  
  $(window).resize(function() {
    // width
    var width = $(document).width();
    
    if (width > 992) {
      $('.toggle-button').removeClass('active');
      $('body').removeClass('overflowhidden');
      $('.slidedown').slideDown();
    } else if (width < 992) {
      if ($('.toggle-button').attr('class') != 'toggle-button active') {
        $('.slidedown').hide();
      } else {
        $('.slidedown').slideDown();
      }
    }
  });

});