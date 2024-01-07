// 모든 함수는 prototype 프로퍼티를 가진다. 이 프로퍼티는 해당 참조 타입의 인스턴스가 가져야할
// 프로퍼티와 메서드를 담고 있는 객체이다. 이 객체는 생성자를 호출할 때 생성되는 객체의 문자 그대로
// 프로토 타입이다.
// 프로토타입의 프로퍼티와 메서드는 객체 인스턴스 전체에서 공유된다는 점이 장점.\

function Person() { // prototype
  Person.prototype.name = "Nicholas";
  Person.prototype.age = 29;
  Person.prototype.job = "Software Engineer";
  Person.prototype.sayName = function() {
    alert(this.name);
  }
}
let person1 = new Person(); // [[prototype]]
person1.sayName();

let person2 = new Person(); // [[prototype]]
person2.sayName();
alert(person1.sayName == person2.sayName) // true

alert(Person.prototype.isPrototypeOf(person1)) // true
alert(Person.prototype.isPrototypeOf(person2)) // true
// isPrototypeOf는 [[prototype]]이 자신을 호출하는 프로토타입을 가리킬때 true를 반환
alert(Object.getPrototypeOf(person1) == Person.prototype) // true
alert(Object.getPrototypeOf(person1).name) // "Nicholas"
// getPrototypeOf는 [[porototype]]의 값을 반환

// 프로퍼티 찾기 순서도
// 시작 -> 객체 인스턴스 -> 프로토타입

person1.name = "greg";
alert(person1.name) // "greg"
alert(person1.hasOwnProperty("name")) // true
delete person1.name;
alert(person1.hasOwnProperty("name")) // false
// 객체 인스턴스에 프로토타입에 있는 프로퍼티를 추가시 프로토타입에 프로퍼티는 가려진다.
// delete 연산자로 삭제하지 않는한 null로 값을 바꿔도 가려진다.
// hasOwnProperty() 메서드는 해당 프로퍼티가 객체 인스턴스에 존재할 때만 true를 반환.

function hasPrototypeProperty(object, name) {
  return !object.hasOwnProperty(name) && (name in object);
}
// in연산자는 객체에서 프로퍼티에 접근할 수 있기만 하면 항상 true를 반환
// hasOwnProperty는 객체 인스턴스에서 프로퍼티에 접근할 수 있으면 true를 반환
// 반환값이 false면 프로토타입 프로퍼티, true면 객체 인스턴스 프로퍼티

let o = {
  toString: function() {
    return "my Object";
  }
}
for (let prop in o) {
  if (prop == "toString") {
    alert("found toString");
  }
}
// o 객체의 인스턴스 프로퍼티 toString은 프로토타입의 toString 메서드를 가림.
// for-in 루프를 사용할땐 객체에서 접근할 수 있고 나열(enumerate) 가능한 프로퍼티를 반환. 여기에는
// 프로토타입 프로퍼티와 인스턴스 프로퍼티가 모두 포함

