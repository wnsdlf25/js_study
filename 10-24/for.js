// 버튼0 누르면
// - 모든 버튼에 붙은 orange 클래스명 제거
// - 버튼 0에 orange 클래스명 추가
// - 모든 div에 붙은 show 클래스명 제거
// - div0에 show 클래스명 추가

// document
//   .querySelectorAll(".tab-button")[0]
//   .addEventListener("click", function() {
//     document.querySelectorAll(".tab-button").classList.remove("orange");
//     document.querySelectorAll(".tab-button")[0].classname += "orange";
//     document.querySelectorAll(".tab-button").classList.remove("show");
//     document.querySelectorAll(".tab-button")[0].classname += "show";
//   });

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

// var btn = $(".tab-button");

// btn.eq(0).on("click", function() {
//   $(".tab-button").removeClass("orange");
//   $(".tab-button")
//     .eq(0)
//     .addClass("orange");
//   $(".tab-content").removeClass("show");
//   $(".tab-content")
//     .eq(0)
//     .addClass("show");
// });
// btn.eq(1).on("click", function() {
//   $(".tab-button").removeClass("orange");
//   $(".tab-button")
//     .eq(1)
//     .addClass("orange");
//   $(".tab-content").removeClass("show");
//   $(".tab-content")
//     .eq(1)
//     .addClass("show");
// });
// btn.eq(2).on("click", function() {
//   $(".tab-button").removeClass("orange");
//   $(".tab-button")
//     .eq(2)
//     .addClass("orange");
//   $(".tab-content").removeClass("show");
//   $(".tab-content")
//     .eq(2)
//     .addClass("show");
// });
