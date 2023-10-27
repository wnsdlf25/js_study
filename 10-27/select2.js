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

var pants = [28, 30, 32];
$(".form-select")
  .eq(0)
  .on("input", function() {
    var value = $(".form-select")
      .eq(0)
      .val();
    if (value == "셔츠") {
      $(".form-select")
        .eq(1)
        .removeClass("form-hide");
      $(".form-select")
        .eq(1)
        .html("");

      pants.forEach(function(b, i) {
        $(".form-select")
          .eq(1)
          .append(`<option>${b}</option>`);
      });
    } else if (value == "바지") {
      $(".form-select")
        .eq(1)
        .removeClass("form-hide");
      $(".form-select")
        .eq(1)
        .html("");
      //forEach 콜백함수 안에 있는 코드가 실행됩니다.
      // pants 안의 데이터 갯수만큼 실행됨
      //     첫 파라미터는 반복문 돌 때 마다 array 안에 있던 하나하나의 데이터가 되고
      // 둘 째 파라미터는 반복문 돌 때 마다 0부터 1씩 증가하는 정수가 됩니다.
      pants.forEach(function(a, i) {
        $(".form-select")
          .eq(1)
          .append(`<option>${a}</option>`);
      });
    }
  });

var obj = { name2: "kim", age: 20, asd: "asd" };

// for in 은 object 갯수만큼 반복문 돌림
for (var key in obj) {
  //   console.log(2); // 2가 3번 출력됨
  //   console.log(key); // key가 출력됨
  console.log(obj[key]); // value가 출력됨
}

// 반복문의 용도
// 코드반복
// array, object 데이터 정보 꺼낼 때
