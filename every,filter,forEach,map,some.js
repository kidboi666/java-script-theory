// 반복 메서드 every,filter,forEach,map,some (배열의각데이터에서실행할함수, 함수를실행할스코프객체) 스코프는 this의 값에 영향을 미침.
// 콜백 함수는 모두 (데이터,데이터의 인덱스, 배열 자체) 의 세가지 매개변수를 받음.



//filter() - 배열의 모든 데이터에서 콜백 함수를 호출하고 반환 값이 true인 데이터를 새 배열에 저장하여 반환

//forEach() - 배열의 모든 데이터에서 콜백 함수를 호출한다. 이 메서드는 반환 값이 없다.

//map() - 배열의 모든 데이터에서 콜백 함수를 호출하고 그 결과를 새 배열에 저장하여 반환

//every() - 배열의 모든 데이터에서 콜백 함수를 호출하고 반환 값이 전부 true이면 true를 반환

//some() - 배열의 모든 데이터에서 콜백 함수를 호출하고 그 반환 값중 하나라도 true이면 true를 반환.


// 이들 메서드는 원래 배열에 들어있던 데이터를 바꾸지는 않음.
{

let numbers = [1,2,3,4,5,4,3,2,1];
//                                       데이터,인덱스,배열자체
let everyResult = numbers.every((function(item, index, array) {
  return (item > 2);
}))
alert(everyResult); // false

let someResult = numbers.some((function(item, index, array) {
  return (item > 2);
}))
alert(someResult); // true

}


// filter()메서드는 콜백 함수의 결과에 따라 해당 데이터를 반환 배열에 포함할지 결정한다.
// 예를 들어 2보다 큰 수자만 반환 배열에 담으려면 다음과 같은 코드를 작성하면 된다.

{

let numbers = [1,2,3,4,5,4,3,2,1];

let filterResult = numbers.filter((function(item, index, array) {
  return (item > 2);
}))

alert(filterResult); // 3,4,5,4,3

}





// map() 메서드도 배열을 반환함. 결과 배열의 각 데이터는 원래 배열에서 해당 위치에 있던 데이터를 콜백 함수에
// 넣은 결과임.

{

let numbers = [1,2,3,4,5,4,3,2,1];

let mapResult = numbers.map((function(item, index, array) {
  return item * 2;
}))
alert(mapResult); // [2,4,6,8,10,8,6,4,2]

}

// 이 메서드는 원래 배열과 1:1로 대응하는 배열을 만들 때 유용하다.




// forEach() 단순히 배열의 각 데이터에서 콜백 함수를 실행한다. forEach는 반환값이 없으며 해당 배열에서 for 문을
// 실행한것과 마찬가지이다.

let numbers = [1,2,3,4,5,4,3,2,1];

numbers.forEach(function(item, index, array) {
  // 실행할 코드
})