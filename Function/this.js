// 함수의 실행 문맥, 렉시컬 환경, 환경 레코드가 생성되면 실행 문맥에 있는 디스 바인딩 컴포넌트에 
// 그 함수를 호출한 객체의 참조를 저장하며 이것으로 this값을 결정

// 이 this는 동적이며 함수를 호출하는 상황에 따라 가리키는 객체가 바뀐다.
// 다시말하면 this값은 함수가 호출되었을 때 그 함수가 속해 있던 객체의 참조이다.

let tom = {
  name: 'tom',
  sayHello: function() {
    console.log('hello' + this.name);
  }
}




var name = 'the window';

var object = {
  name: 'my object',

  getNameFunc : function() {
    return function() {
      return this.name; // 가장 가까운 this.name인 'my object'가 아닌 전역 변수인 'the window'를 가져온다
    }
  }
};

alert(object.getNameFunc()())

//모든 함수는 호출되는 순간 자동으로 this와 arguments 두 특별한 변수를 갖게됨을 상기하자.
// (단 화살표 함수일땐 arguments는 없어지고 this는 함수를 정의할때를 기준으로 결정된다.)


var object2 = {
  name: 'my object',

  getNameFunc: function() {
    var that = this; // getNameFunc의 지역변수 that에 this값 자체를 할당하여 
    return function() { // 익명 함수가 그 변수를 통해 this에 접근하는 방식도 존재한다.
      return that.name;
    }
  }
};

alert(object2.getNameFunc()())

// 내부 함수는 결코 외부 함수의 this와 arguments에 직접적으로 접근할 수 없다. 하지만 화살표 함수가 나옴으로써
// 위 예제처럼 변수에 this를 할당하는 우회 수단을 행할 필요는 없게됬다.

var object2 = {
  name: 'my object',

  getNameFunc: function() {
    return () => { // 화살표 함수를 쓰면 이제 이 익명 함수의 this는 외부 함수를 가리키기에 'my object'를 반환한다
      return this.name;
    }
  }
};

alert(object2.getNameFunc()())
