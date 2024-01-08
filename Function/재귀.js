
function fact(n) {
  if(n <= 1) {
    return 1;
  } else {
    return n*fact(n-1); // return 5 return 4 return 3 return 2 return 1
  }
}
fact(5) // 120

// 계승 함수라고도 한다.
//다음 코드 작성시 위 예제는 작동안됨

let anotherFact = fact;
fact = null;
alert(anotherFact(4)); // error

// anotherFact를 실행하려 하면 fact를 실행하려 하기에 다음과 같이 바꿔야 쓸 수 있다.
function fact(n) {
  if(n <= 1) {
    return 1;
  } else {
    return n*arguments.callee(n-1); // return 5 return 4 return 3 return 2 return 1
  }
}
fact(5) // 120

// 하지만 엄격 모드시엔 에러가 뜬다. arguments.callee자체가 엄격모드에선 사용이 안되기 때문이다.
// 그럼 이제 이름 붙은 함수 표현식 f()를 사용해 우회해보자.

let fact = (function f(n) {
  if(n <= 1) {
    return 1;
  } else {
    return n*f(n-1)
  }
});

let nFact = fact;
fact = null;
alert(nFact(5)); // 120

// 이제 어느 변수에 할당해도 내부 함수 f()는 정상 작동되기에 아무 문제가 없다.