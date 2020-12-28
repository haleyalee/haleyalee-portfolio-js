$(window).scroll(function() {
  var height = $(window).scrollTop();

  if ($(window).width() < 600) {
    
  }
  else {
    if(height  > 195) {
      $("#side").fadeIn(250);
    }
    else {
      $("#side").fadeOut(250);
    }
  }
});