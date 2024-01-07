function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  if (typeof this.sayName != "function") { // 생성자 내부에 sayName 메서드가 없다면 생성하는 코드
    Person.prototype.sayName = function() {
      alert(this.name)
    }
  }
}
let friend = new Person('nicholas',29,'software engineer')
friend.sayName(); // nicholas

// 프로토타입을 초기화 하기 이전에 내부에 사용할 메서드가 있는지, 없다면 최초에 한해 생성한다.
// 동적 프로토타입 패턴을 사용할땐 객체 리터럴을 통해 프로토타입을 덮어씌울 수 없다.
// 생성자 호출로 인스턴스를 생성할때, 생성된 인스턴스가 가리키는 프로토타입에만 sayName이 생성된다.
// 위 동작은 최초 생성자 호출 시에만 작동되고 한번 프로토타입에 sayName이 만들어지면 그 이후는 if 문은 무시된다