let person = (function() {
  let _name = 'tom';
  return {
    get name() {
    return this._name;
    },
    set name(value) {  // 네임을 정의하는 프로퍼티로
      let str = value.charAt(0).toUpperCase() + value.substring(1) // 인수로 받은 문자열의 첫글자를 대문자로 하고 글자를 모두 출력하는 메서드를 작성
      _name = str; // _name에 할당
    }
  }
});
console.log(person.name); // Tom
person.name = 'huck'
console.log(person.name); // Huck

// 예제와 같이 즉시 실행 함수로 클로저를 생성하면 이제 외부에서 마음대로 값을 변경할 수 없고
// getter와 setter를 통해서만 함수에 접근할 수 있다.