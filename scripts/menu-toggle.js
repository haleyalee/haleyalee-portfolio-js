$('#x').click(function(){
  if ($("#overlay").css('display') == 'block') {
    // console.log("display is block")
    // $("#overlay").css("display", "none");
    $("#overlay").fadeOut(500);
  }
  else {
    // console.log("display is none")
    $("#overlay").css("display", "block");
  }

  $("#overlay").on("click", function() {
    // $("#overlay").css("display", "none");
    $("#overlay").fadeOut(500);
  });
});