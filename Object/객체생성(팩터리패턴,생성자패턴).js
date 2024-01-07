// factory Pattern

function createPerson(name, age, job) {
  let o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function() {
    alert(this.name);
  }
  return o;
}

let person1 = createPerson("Nicholas", 29, "Shoftware Engineer")
let person2 = createPerson("Greg", 31, "None")


// constructor pattern

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() {
    alert(this.name)
  }
}

let person3 = new Person("Nicholas", 29, "Shoftware Engineer")
let person4 = new Person("Greg", 31, "None")
alert(person3.constructor === Person) // true
alert(person4.constructor === Person) // true
alert(person3 instanceof Object) // true
alert(person3 instanceof Person) // true
alert(person4 instanceof Object) // true
alert(person4 instanceof Person) // true

// 팩토리 패턴과 차이점
// 1. 명시적으로 객체를 생성하지 않음
// 2. 프로퍼티와 메서드는 this객체에 직접적으로 할당
// 3. return문이 없음
// 생성자는 항상 첫글자를 대문자로 쓰는 국룰이 있음
// js 에서 생성자는 단순히 함수를 만들 뿐이라 국룰에 따를 이유가 있음

// 생성자의 문제점
// 인스턴스마다 메서드가 생성되어 자원낭비가 심함
// 예제의 경우 sayName 함수가 각 인스턴스마다 따로 생겨나 중복되는 함수가 여러개가 되버림.
alert(person1.sayName == person2.sayName) // false
alert(person3.sayName == person4.sayName) // false
// 물론 회피방법은 있음. 메서드를 빼내면 됨

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = sayName; // 이젠 인스턴스마다 생성되지 않고 sayName을 가리키는 포인터가 되 자원낭비없음
}
function sayName() {
  alert(this.name)
}

// 문제는 전역 스코프가 더러워짐. 많이 쓰이는 함수도 아니라면 더더욱. 
// 메서드가 하나가 아니라 여러개가 필요해지면 답이 없어짐.
// 그럼 이제 프로토타입을 생성해볼 차례임