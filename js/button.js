$(document).ready(function() {
  let button = $('#button-down');
  $(window).scroll (function () {
    if ($(window).scrollTop () <1000) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });
  button.on('click', function(){
    $('body, html').animate({
      scrollTop: 3000
    }, 1000);
  });
});


