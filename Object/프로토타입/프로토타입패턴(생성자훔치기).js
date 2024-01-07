function SuperType() {
  this.colors = ['red','blue','green']
}
function SubType() {
  SuperType.call(this) // SuperType에서 상속
}

let instance1 = new SubType();
instance1.colors.push('black') // black
console.log(instance1.colors)
let instance2 = new SubType();
console.log(instance2.colors)

//기본 아이디어는 하위 타입 생성자 안에서 상위 타입 생성자를 호출하는 것.
// 생성자 훔치기에선 하위 타입 생성자가 상위 타입 생성자에게 매개변수를 전달해 줄 수 있다.

function SuperType(name) {
  this.name = name;
}
function SubType() {
  SuperType.call(this, 'nicolas') // SuperType에서 상속
  this.age = 29;
}

let instance = new SubType();
console.log(instance.name)
console.log(instance.age)

// 생성자 훔치기의 문제.
// 1. 메서드를 생성자 내부에서만 정의해야 하므로 함수 재사용이 불가능해진다.
// 2. 상위 타입 프로토타입에 정의된 메서드는 하위 타입에서 접근할 수 없는 문제가 생긴다.