// 반올림 메서드
alert(Math.ceil(25.9)); // 26
alert(Math.ceil(25.5)); // 26
alert(Math.ceil(25.1)); //26

alert(Math.round(25.9)); // 26
alert(Math.round(25.5)); // 26
alert(Math.round(25.1)); // 25

alert(Math.floor(25.9)); // 25
alert(Math.floor(25.5)); // 25
alert(Math.floor(25.1)); // 25


// 난수 메서드
let num = Math.floor(Math.random() * 원하는경우의수 + 그중가장작은값);
let num2 = Math.floor(Math.random() * 10 + 1); // 1부터 10까지의 난수를 원하는 경우: 경우의 수는 10가지, 그중 작은 숫자는 1
let num3 = Math.floor(Math.random() * 9 + 2); // 2부터 10까지의 난수를 원하는 경우: 경우의 수는 9가지, 그중 작은 숫자는 2


// 경우의 수를 세는 것보다 범위만 제공하면 그 사이의 난수를 반환하는 함수를 만드는것도 편하다
function selectFrom(lowerValue, upperValue) {
  let choices = upperValue - lowerValue + 1;
  return Math.floor(Math.random() * choices + lowerValue);
}