let person = {
  name: 'nicholas',
  friends: ['shelby', 'court', 'van'],
}

let anotherPerson = Object.create(person);
anotherPerson.name = 'greg'
anotherPerson.friend.push('rob')
let yetAnotherPerson = Object.create(person);
anotherPerson.name = 'marbin'
anotherPerson.friend.push('joseph')

// Object.create(생성할 객체의 프로토타입, 생성할 객체의 프로퍼티)
//                                           얘는 선택사항

let person1 = {
  name: "tom",
  sayHello: function() { alert(`hello ${this.name}`)}
}
let person2 = Object.create(person1); // person2는 person1의 프로토타입을 상속받음
person2.name = "huck"; // name을 프로퍼티에 직접 작성하면서 person1의 name을 가림
person2.sayHello(); // hello huck


let blankObject = Object.create(null);
// 인수에 null을 넘기면 프로토타입도 프로퍼티도, 아무것도 없는 빈 객체를 생성할 수 있다.
// 이를 활용하면 순수한 프로퍼티 집합(해시 테이블)을 만들 수 있다.
let obj = Object.create(Object.prototype);
// 빈 객체열과 똑같은 객체를 생성하는 코드
