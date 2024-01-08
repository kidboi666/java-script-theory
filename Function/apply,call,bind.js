// apply(선택한this, 배열객체인 인수) 
// call(선택한this, 인수)
// Function객체의 메서드에는 apply와 call이 있다. this값과 함수의 인수를 사용하여 함수를 실행하는 메서드이다.
// call과 apply는 본질적으로는 같다. 차이점은 함수에 인수를 넘기는 방법뿐이다.
// apply의 인수는 배열이고, call의 인수는 쉼표로 구분한 값의 목록이다.

function say(greeting, honorifics) {
  console.log(greetings + " " + honorifics + this.name);
}
var tom = {name:'tom sawyer'};
var becky = {name:'becky'};
say.apply(tom,['hello!','mr.']) // hello! mr. tom sawyer
say.apply(becky,['hi!','ms.']) // hi! ms. becky

say.call(tom,'hello!','mr') // hello! mr tom sawyer
say.call(becky,'hi!','ms') // hi! ms becky



// bind(선택한this, 인수) = 인수를 적용한 새로운 함수를 반환
// Function객체의 bind메서드는 객체에 함수를 바인드(묶다) 한다.

var sayToTom = say.bind(tom);
sayToTom('hello!','mr') // hello! mr tom sawyer
// 여기서 sayToTom 코드를 호출하면 항상 this가 객체 tom을 가리킨다. 이처럼 say.bind(tom)은 tom객체를 함수 say의
// this로 묶은 새로운 함수를 만들어 반환한다.