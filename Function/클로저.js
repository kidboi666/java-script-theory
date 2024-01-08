// 익명 함수와 클로저는 자주 잘못 혼용된다. 
// 클로저란 다른 함수의 스코프에 있는 변수에 접근 가능한 함수이다.


function createComparisonFunction(propertyName) {

  return function(object1, object2) { // 익명함수
    let value1 = object1[propertyName];
    let value2 = object1[propertyName];

    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  }
}

// 내부 함수 이면서 외부 함수의 변수에 접근한다. 내부 함수가 반환되어 다른 컨텍스트에서 실행되는
// 동안에도 propertyName에 접근할수 있다. 이런 일이 가능한것은 내부 함수의 스코프 체인에
// createComparisonFunction()의 스코프가 포함되기 때문이다.

// 함수를 호출하면 실행 컨텍스트와 스코프 체인이 생성된다. 함수의 활성화 객체는 arguments 및 이름 붙은
// 매개변수로 초기화 된다. 외부 함수의 활성화 객체는 스코프 체인의 두번째 객체이다.
// 이 과정이 포함 관계에 있는 함수에서 게속 발생하여 스코프 체인이 전역 실행 컨텍스트에서 종료될
// 때까지 게속 이어진다.

function compare(value1,value2) {
  if (value1 < value2) {
    return -1;
  } else if (value1 > value2) {
    return 1;
  } else {
    return 0;
  }
}
let result2 = compare(5, 10);

// 1. compare 함수를 정의하면 스코프 체인이 생성, js 인터프리터는 이를 전역 변수 객체와 함께
// 미리 읽어 함수 내부의 [[Scope]] 프로퍼티에 저장한다.
// 2. compare 함수를 호출하면 실행 컨텍스트가 생성되며 함수의 [[Scope]] 프로퍼티에 들어있는
// 객체를 복사하여 스코프 체인이 생성된다. 
// 3. 변수 객체로 동작하기도 하는 활성화 객체가 생성되어 컨텍스트의 스코프 체인 맨 앞에 위치한다.
// 즉 compare 함수의 실행 컨텍스트는 스코프 체인 내에 변수객체를 두개, 로컬 활성화 객체와 전역
// 변수 객체를 갖는다는 것. (스코프 체인은 변수 객체를 가리키는 포인터임, 직접 포함은 x)
// 함수에서 변수에 접근할 때마다 스코프 체인에서 해당 이름의 변수를 검색.
// 함수 실행이 끝나면 로컬 활성화 객체는 파괴되고 메모리에는 전역 스코프만 남게됨.
// but! 클로저는 이와 좀 다르게 작동함.

let compare = createComparisonFunction('name');
let result = compare({ name: 'nicholas' }, { name: 'greg' })

// 외부 함수가 실행을 마치고 익명 함수를 반환하면 익명 함수의 스코프 체인은 외부 함수의 활성화 객체와
// 전역 변수 객체를 포함하도록 초기화 된다. 때문에 익명 함수는 외부 함수의 변수 전체에 접근가능해짐
// 부수 효과로, 외부 함수가 실행을 마쳐도 활성화 객체가 파괴되지 않는점인데, 아직 익명 함수의
// 스코프 체인에서 이를 참조하기 때문이다. 외부 함수가 실행을 마치면 실행 컨텍스트의 스코프 체인은
// 파괴되지만 활성화 객체는 익명 함수가 파괴될 때까지 메모리에 남는다.

let compareNames = createComparisonFunction('name'); // 함수 생성
let result3 = compareNames({name:'nicholas'},{name:'greg'}); // 함수 호출
compareNames = null; // 함수 파괴 = 메모리 회수 가능

// null을 이용해서 함수의 참조를 없애므로 가비지 콜렉션에서 메모리 회수가 가능해진다.
// 클로저는 외부 함수의 스코프를 보관해야 하므로 다른 함수에 비해 메모리를 많이 요구한다.


// 또한 클로저에는 눈에 띄는 부작용이 하나 있다.
// 바로 외부 함수의 변수에 마지막 저장 값만 알 수 있다는 점.

function createFunctions() {
  var result = new Array();
  for (var i=0; i < 10; i++) {
    result[i] = function() {
      return i
    }
  }
  return result;
}


function makeCounter() {
  let count = 0;
  return count++;
}
let counter = makeCounter();
console.log(counter())




