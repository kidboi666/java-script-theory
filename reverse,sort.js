// reverse() 메서드는 단순히 배열의 순서를 거꾸로 뒤집는 유연성 없는 메서드다.
// sort()는 데이터를 정순, 즉 가장 작은 값이 첫번째에 오고 가장 큰 값이 마지막에 오도록 정렬한다.

let values = [0, 1, 5, 10, 15];
values.sort();
alert(values) // 0,1,10,15,5

// sort메서드를 그대로 쓴 결과에 만족하긴 쉽지 않으므로 비교 함수를 넘겨서 사용해야한다.

function compare(value1, value2) {
  if (value1 < value2) {
    return -1; // 1로 바꾸고 아래 조건문을 -1로 바꾸면 역순으로 바꿀 수 있다.
  } else if (value1 > value2) {
    return 1;
  } else {
    return 0;
  }
}


let values2 = [0, 1, 5, 10, 15];
values2.sort(compare);
alert(values2) // 0,1,5,10,15

// reverse()와 sort()는 모두 자신을 호출한 배열에 대한 참조를 반환합니다.
// 즉 체인 형태로 쓸 수 있다는 뜻이다. ex) array.sort(compare).reverse();

// 숫자 타입처럼 valueOf메서드를 호출하면 숫자형 값을 반환하는 객체에서는 비교 함수를 더 단순하게 만들 수 있다.

function compare2(value1, value2) {
  return value2 - value1;
}

