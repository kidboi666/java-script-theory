let friend = new Person();
Person.prototype.sayHi = function() {
  alert(`hi`);
}
friend.sayHi(); // hi

// firend 인스턴스는 sayHi가 추가되기 전에 만들어졌는데도 호출이 가능해진다.
// 이러한 이유는 인스턴스와 프로토타입의 느슨한 연결 때문입니다.
// 인스턴스는 프로토타입을 가리키는 포인터를 가질 뿐. 생성자와 연결된 것이 아니다.

function Person() {
}

let friend2 = new Person();

Person.prototype = {
  constructor: Person,
  name: "nicholas",
  age: 29,
  job: 'software engineer',
  sayName : function() {
    alert(this.name);
  }
}

friend2.sayName(); // Error
// 프로토타입 객체를 덮어쓰기 전에 Person의 인스턴스를 생성했다.
// friend2에서 Person의 인스턴스를 생성한 뒤에 프로토타입 객체를 덮어씌웠으므로 현재 friend2가 가리키는
// 프로토타입은 다른 객체의 프로토타입이다.
// 생성자의 프로토타입을 바꾸면 그 이후에 생성한 인스턴스는 새로운 프로토타입을 참조하지만 ,
// 그 이전에 생성한 인스턴스는 바꾸기 전의 프로토타입을 참조한다.