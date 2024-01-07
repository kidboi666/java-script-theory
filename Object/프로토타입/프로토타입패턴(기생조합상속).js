function SuperType(name) { // 슈퍼타입 생성자에 프로퍼티 작성
  this.name = name;
  this.colors = ['red','yellow','green'];
}
SuperType.prototype.sayName = function() { // 슈퍼타입 프로토타입에 sayName 메서드 생성(공용메서드)
  alert(this.name);
}
function SubType(name,age) { // 서브타입에 슈퍼타입 콜로 this와 name 매개변수 받기
  SuperType.call(this, name);
  this.age = age;
}

function inheritPrototype(SubType, SuperType) {
  let prototype = object(SubType.prototype); // 서브타입의 프로토타입을 새 객체에 할당하고
  prototype.constructor = SubType; // 할당한 새객체의 constructor를 prototype에 할당해서 
  // 프로토타입을 덮어쓸 때 기본 constructor 프로퍼티가 사라지는 현상에 대비하고
  SubType.prototype = prototype; // 하위타입의 프로토타입에 새로 할당한 객체를 할당한다.
}

SubType.prototype.sayAge = function() { // 서브타입 프로토타입에 sayAge 메서드 생성 (공용메서드)
  alert(this.age);
}

// 이제는 슈퍼타입 생성자를 단 한번만 호출하므로 불필요한 서브타입 프로토타입의 프로퍼티를 만들지
// 않는다는 장점이 있다.