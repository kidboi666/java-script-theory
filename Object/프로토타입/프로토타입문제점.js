
// 프로토타입의 문제점

function Person() {
}

Person.prototype = {
  constructor: Person,
  name: "nicholas",
  age: 29,
  job: 'software engineer',
  friends: ['shelby', 'court'],
  sayName : function() {
    alert(this.name);
  }
}

let person1 = new Person();
let person2 = new Person();
person1.friends.push('van');
alert(person1.friends) // shelby,court,van
alert(person2.friends) // shelby,court,van
alert(person1.firends === person2.friends) // true

// 프로토타입에 존재하는 프로퍼티는 모두 인스턴스에서 공유되는데 이런 특징은 함수에는 이상적이나,
// 프로퍼티가 참조값을 포함하는 경우.
// person1.friends 배열에 문자열같은 값을 추가하는 경우 이 결과값이 person2와도 공유된다.
// 배열을 모든 인스턴스에 공유해도 된다면 상관없지만 보통 인스턴스는 각자의 특징을 구분지어 쓰려고
// 하기에 유효한 기능은 아니다.
