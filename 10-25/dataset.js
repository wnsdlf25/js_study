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
  // 지금 누른게 버튼 0이면 버튼 0에 orange 박스 0 show

  if (e.target == document.querySelectorAll(".tab-button")[0]) {
    탭열기(e.target.dataset.id);
  }
});

// html 태그에 몰래 정보숨기기 가능
// data-자료이름="값"
// document.querySelector('.tab-button').dataset.id
