$('#menu a').click(function(){
  $('#menu a').css("text-decoration", "none"); 
  $(this).css('text-decoration', "underline");
  return false;
});