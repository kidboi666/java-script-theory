
// 생성자 패턴과 프로토타입 패턴의 조합.
// 생성자 패턴으로 인스턴스 프로퍼티를 정의하고 프로토타입 패턴으로 공유 프로퍼티를 정의하는 방법.

function Person1(name,age,job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.friends = ['shelby', 'court'];
}

Person1.prototype = {
  constructor: Person1,
  sayName: function() {
    alert(this.name);
  }
}

let mike = new Person1('mike', 28, 'software engineer')
let paul = new Person1('paul', 31, 'doctor')
mike.friends.push('paul')
paul.friends.push('mike')
alert(mike.friends) // shelby, court, paul
alert(paul.friends) // shelby, court, mike
// 인스턴스 프로퍼티는 순전히 생성자에서만 정의했고 공유 프로퍼티 constructor와 메서드sayName은 프로토타입
// 에서 정의했다. mike.friends에 새 문자열을 추가해도 paul에게는 영향을 주지 못한다. 둘은 따로 존재하는 배열이기 때문.
