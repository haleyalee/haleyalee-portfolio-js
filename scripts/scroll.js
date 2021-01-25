var limit = 195;

if (document.body.classList.contains('casestudy')) {
  limit = 700;
}

$(window).scroll(function() {
  var height = $(window).scrollTop();
  // var limit = 195;

  if ($(window).width() < 600) {

  }
  else {
    if(height  > limit) {
      $("#side").fadeIn(250);
    }
    else {
      $("#side").fadeOut(250);
    }
  }
});