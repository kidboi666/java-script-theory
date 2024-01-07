function SuperType() { // 슈퍼타입 인스턴스에 프로퍼티 작성
  this.property = true;
}
SuperType.prototype.getSuperValue = function() { // 슈퍼타입 프로토타입에 메서드 작성 (공용)
  return this.property;
}
function SubType() { // 서브타입 인스턴스에 프로퍼티 작성
  this.subProperty = false;
}
SubType.prototype = new SuperType; // 서브타입 프로토타입에 슈퍼타입 프로퍼티 상속
SubType.prototype.getSubValue = function() { // 서브타입 프로토타입에 메서드 작성 (공용)
  return this.subProperty;
}

let instance = new SubType(); // 서브타입 프로토타입을 향하는 인스턴스
alert(instance.getSuperValue()); // 서브타입인스턴스 ->서브타입프로토타입 -> 슈퍼타입 -> 슈퍼타입프로토타입(요기있네~)
// 어쨋든 true
// 이걸 시발 우째 정리하냐

// instance1 -> subtype -> subtypePrototype -> supertype -> supertypePrototype -> Object -> ObjectPrototype
