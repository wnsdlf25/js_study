for (let i = 0; i < $(".tab-button").length; i++) {
  var btn = $(".tab-button");

  btn.eq(i).on("click", function() {
    $(".tab-button").removeClass("orange");
    $(".tab-button")
      .eq(i)
      .addClass("orange");
    $(".tab-content").removeClass("show");
    $(".tab-content")
      .eq(i)
      .addClass("show");
  });
  btn.eq(i).on("click", function() {
    $(".tab-button").removeClass("orange");
    $(".tab-button")
      .eq(i)
      .addClass("orange");
    $(".tab-content").removeClass("show");
    $(".tab-content")
      .eq(i)
      .addClass("show");
  });
  btn.eq(i).on("click", function() {
    $(".tab-button").removeClass("orange");
    $(".tab-button")
      .eq(i)
      .addClass("orange");
    $(".tab-content").removeClass("show");
    $(".tab-content")
      .eq(i)
      .addClass("show");
  });
}

$("list").click(function(e) {
  if (e.target == document.querySelectorAll(".tab-button")[0]) {
    탭열기(e.target.dataset.id);
  }
});

$(".form-select")
  .eq(0)
  .on("input", function() {
    var value = $(".form-select")
      .eq(0)
      .val();
    if (value == "셔츠") {
      $(".form-select")
        .eq(1)
        .removeClass("formhide");
    }
  });
