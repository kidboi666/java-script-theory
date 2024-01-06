// 감소 메서드 reduce(), reduceRight() 두 메서드는 모두 배열을 순회하며 콜백 함수를 실행하고 
// 값을 하나 만들어 반환한다.
// reduce는 이 작업을 배열의 첫번째 데이터에서 시작해 마지막까지 진행하고,
// reduceRight는 반대로 배열의 마지막 데이터에서 시작해 첫번째까지 진행한다.
// 두 메서드의 매개변수로는 (각데이터에서실행할콜백함수, 감소작업을시작할초기값) 를 받으며
// 콜백함수는 (이전 값, 현재 값, 현재값의 인덱스, 현재 배열) 네 가지 이다.
// 콜백함수가 반환하는 값은 자동으로 다음 데이터에서 실행하는 콜백 함수의 첫번째 매개변수가 된다.



// reduce메서드는 배열의 숫자를 모두 더하는 것 같은 작업에 쓸 수 있다.

{

let values = [1,2,3,4,5]; //      1,   2
//            그 다음 리터럴은     3,   3
let sum = values.reduce(function(prev, cur, index, array) {
  return prev + cur;
})
alert(sum) // 15

}

// reduceRight 메서드는 같은 방식이나 동작하는 방향만 반대이다.

{

let values = [1,2,3,4,5]; //          5,   4
//                그 다음 리터럴은     9,   3
let sum = values.reduceRight(function(prev, cur, index, array) {
  return prev + cur;
})
alert(sum) // 15
  
}
  