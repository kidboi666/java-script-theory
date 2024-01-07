function Person() {

}

Person.prototype = {
  name: "nicholas",
  age: 29,
  job: 'software engineer',
  sayName: function() {
    alert(this.name);
  }
}

// Person.prototype 프로퍼티에 객체 리터럴로 생성한 객체를 덮어씌움. (인스턴스가 이미 존재할 때 프로토타입을 
 // 덮어쓰면 기존의 인스턴스와새 프로토타입 사이의 연결은 끊어진다)
// constructor 프로퍼티가 Person을 가리키지않음
// 기본 prototype객체를 완전히 덮어쓰는데 결과적으로 constructor 프로퍼티는 함수 자체가 아니라
// 완전히 새로운 객체의 생성자(Object 생성자)와 같습니다.
let friend = new Person();
alert(friend instanceof Object) // true
alert(friend instanceof Person) // true
alert(friend.constructor == Object) // true
alert(friend.constructor == Person) // false
// 