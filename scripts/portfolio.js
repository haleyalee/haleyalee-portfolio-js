// start with design section in view
$("#design-caret-show").removeClass("hidden");
$("#game-caret-hide").removeClass("hidden");
$("#sustain-caret-hide").removeClass("hidden");
$("#design-section").removeClass("hidden");
$("#game-section").addClass("hidden");
$("#sustain-section").addClass("hidden");


// if design-caret-hide is clicked
  // show design-section
  // hide game-section
  // hide sustain-section
$("#design-caret-hide").on("click", function() {
  $("#design-caret-show").removeClass("hidden");
  $("#design-caret-hide").addClass("hidden");
  $("#game-caret-show").addClass("hidden");
  $("#game-caret-hide").removeClass("hidden");
  $("#sustain-caret-show").addClass("hidden");
  $("#sustain-caret-hide").removeClass("hidden");
  $("#design-section").removeClass("hidden");
  $("#game-section").addClass("hidden");
  $("#sustain-section").addClass("hidden");
});

// if design-caret-show is clicked
$("#design-caret-show").on("click", function() {
  $("#design-caret-show").addClass("hidden");
  $("#design-caret-hide").removeClass("hidden");
  $("#design-section").addClass("hidden");
});


// if game-caret-hide is clicked
  // hide design-section
  // show game-section
  // hide sustain-section
$("#game-caret-hide").on("click", function() {
  $("#design-caret-show").addClass("hidden");
  $("#design-caret-hide").removeClass("hidden");
  $("#game-caret-show").removeClass("hidden");
  $("#game-caret-hide").addClass("hidden");
  $("#sustain-caret-show").addClass("hidden");
  $("#sustain-caret-hide").removeClass("hidden");
  $("#design-section").addClass("hidden");
  $("#game-section").removeClass("hidden");
  $("#sustain-section").addClass("hidden");
});

// if game-caret-show is clicked
$("#game-caret-show").on("click", function() {
  $("#game-caret-show").addClass("hidden");
  $("#game-caret-hide").removeClass("hidden");
  $("#game-section").addClass("hidden");
});

// if sustain-caret-hide is clicked
  // hide design-section
  // hide game-section
  // show sustain-section
$("#sustain-caret-hide").on("click", function() {
  $("#design-caret-show").addClass("hidden");
  $("#design-caret-hide").removeClass("hidden");
  $("#game-caret-show").addClass("hidden");
  $("#game-caret-hide").removeClass("hidden");
  $("#sustain-caret-show").removeClass("hidden");
  $("#sustain-caret-hide").addClass("hidden");
  $("#design-section").addClass("hidden");
  $("#game-section").addClass("hidden");
  $("#sustain-section").removeClass("hidden");
});

// if sustain-caret-show is clicked
$("#sustain-caret-show").on("click", function() {
  $("#sustain-caret-show").addClass("hidden");
  $("#sustain-caret-hide").removeClass("hidden");
  $("#sustain-section").addClass("hidden");
});