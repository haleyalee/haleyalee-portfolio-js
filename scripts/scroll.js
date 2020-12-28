$(window).scroll(function() {
  var height = $(window).scrollTop();
  var top = $("#start").scrollTop();
  console.log("top")
  console.log(top)
  if(height  > 195) {
    $("#side").fadeIn(250);
  }
  else {
    $("#side").fadeOut(250);
  }
});