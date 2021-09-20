$(function() {
  let button = $("#button"),
      photo = $("#photo").innerHeight(),
      nav = $("#nav")
      scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if(scrollOffset >= photo/2) {
      button.addClass("fixed");
      nav.addClass("fixed");
    } else {
      button.removeClass("fixed");
      nav.removeClass("fixed");
    }
  };


  $("#button").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $("#nav").toggleClass("active")
  });

});