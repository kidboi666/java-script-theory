function Person(name,age,job) {
  let o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function() {
    alert(this.name);
  }
  return o;
}

let friend = new Person('mike',29,'none');
friend.sayName(); // mike

// 기생 생성자 패턴은 다른 패턴이 실패할때 폴백으로 쓴다.
// 일반적인 팩토리얼 생성자로 보이지만 사실은 다른 객체를 생성하고 반환하는 동작을 래퍼 생성자로
// 감싸는 것이다.


function SpecialArray() {
  let values = [];
  values.push.apply(values, arguments);
  values.toPipedString = function() {
    return this.join('|');
  }
  return values
}
let colors = new SpecialArray('red', 'blue', 'green')
alert(colors.toPipedString)
alert(colors instanceof Object)
alert(colors instanceof SpecialArray)

// 이 패턴에서는 반환된 객체와 생성자, 또는 생성자의 프로토타입 사이에 아무 연결고리가 없어
// instanceof로도 이 객체의 타입을 알 수가 없다.
