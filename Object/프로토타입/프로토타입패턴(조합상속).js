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
SubType.prototype = new SuperType(); // 서브타입 프로토타입에 슈퍼타입 상속받아 슈퍼타입 프로퍼티 + 슈퍼타입 프로토타입 프로퍼티 가져오기
SubType.prototype.sayAge = function() { // 서브타입 프로토타입에 sayAge 메서드 생성 (공용메서드)
  alert(this.age);
}

let instance1 = new SubType('니꼴라스', 29); // age는 서브타입 인스턴스에서 그대로 받고 , name은 call의 매개변수를 타서 슈퍼타입에 name에서 받음?
instance1.colors.push('black') // 서브타입인스턴스 -> 서브타입프로토타입 -> 슈퍼타입프로토타입 -> 슈퍼타입 (여기있네~)
alert(instance1.colors)
alert(instance1.sayName()) // 서브타입인스턴스 -> 서브타입프로토타입 -> 슈퍼타입인스턴스 -> 슈퍼타입프로토타입(요기있네~)
alert(instance1.sayAge()) // 서브타입인스턴스 -> 서브타입프로토타입(요기있네)
let instance2 = new SubType('그렉', 27);
instance2.colors.push('purple')
alert(instance2.colors())
alert(instance2.sayName())
alert(instance2.sayAge())

// 조합 상속은 프로토타입 체인과 생성자 훔치기 패턴을 조합해 두 패턴의 장정만을 취하는 접근법
// 기본 아이디어는 프로토타입 체인을 써서 프로토타입에 존재하는 프로퍼티와 메서드를 상속받고
// 생성자 훔치기 패턴으로 인스턴스 프로퍼티를 상속받는것.
// 단점이라면 상위 타입 생성자가 두번이나 호출된다는것.
// 한번은 하위 타입의 프로토타입을 생성하기 위해 다른 한번은 하위 타입 생성자 내부에서.(call)