// array에서 이름을 찾아주는 함수를 만들고 있습니다.
// 함수 안에 파라미터로 이름을 집어넣으면
// 그 이름이 출석부에 있으면 콘솔창에 출력해주는 함수를 만들어봅시다.

var 출석부 = ["흥민", "영희", "철수", "재석"];

function nameFind(a) {
  if (출석부.includes(a)) {
    console.log(a);
  } else {
    console.log("그런사람 없습니다");
  }
}

nameFind("흥민");

// 철수는 구구단을 외우지 못하는 관계로
// 자바스크립트를 이용해 구구단을 2단부터 9단까지 콘솔창에 출력하고 싶어졌습니다.

for (let k = 2; k < 10; k++) {
  for (let i = 1; i < 10; i++) {
    console.log(k + "x" + i + "=" + k * i);
  }
}

// 어떤 함수에

// 기존 모의고사 성적들을 array 자료에 전부 담아 첫 파라미터로 입력하고

// 이번 11월 모의고사 성적을 둘 째 파라미터로 입력하면

// 11월 성적이 기존 성적들의 평균에 비해 얼마나 우수한지 결과를 알려주고 싶습니다.

function exam(arr, f) {
  var result2 = 0;

  for (let i = 0; i < arr.length; i++) {
    result2 = result2 + arr[i];
  }

  if (result2 / arr.length < f) {
    console.log("오르셨군요");
  } else {
    console.log("떨어지셨네요");
  }
}
exam([2, 3, 4], 2);
