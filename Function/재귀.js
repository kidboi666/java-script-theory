function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * arguments.callee(num-1);
  }
}

// 엄격 모드에선 arguments.callee가 동작하지 않는다.


let factorial = (function f() {
  if (num <= 1) {
    return 1;
  } else {
    return num * f(num-1);
  }
})

// 이름 붙은 함수 표현식을 써서 엄격 모드에서도 작동하게 할 수 있다.
// f라는 함수는 다른 이름의 변수에 할당해도 그대로 동작하므로 어느 변수에 갖다 붙혀도 정상 작동한다.
