// 접근자 프로퍼티에서는 데이터값 대신 getter와 setter가 들어있다. 
// 접근자 프로퍼티를 읽을 때는 getter함수가 호출되며 유효한 값을 반환할 책임은 이 함수에 있다.

// Configurable - 삭제,속성수정,접근자 프로퍼티로 변환할 수 있음을 나타냄, 객체에서 정의한 모든 프로퍼티에서 true
// Enumerable - for-in 루프에서 해당 프로퍼티를 반환함을 나타냄. 기본적으로 true
// Get - 프로퍼티를 읽을때 호출할 함수. 기본적으로 undefined
// Set - 프로퍼티를 바꿀때 호출할 함수. 기본적으로 undefined

let book = {
  _year: 2004,
  edition: 1,
}

Object.defineProperty(book, "year", {
  get: function() {
    return this._year;
  },
  set: function(newValue) {
    if (newValue > 2004) {
      this._year = newValue;
      this.edition += newValue - 2004;
    }
  }
})

// getter 함수만 지정시 프로퍼티는 읽기전용이 됨
// setter만 지정하고 getter가 지정되지 않은 상태로 값을 불러오면 undefined

let person = {
  _name: 'tom',
  get name() {
    return this._name;
  },
  set name(value) {  // 네임을 정의하는 프로퍼티로
    let str = value.charAt(0).toUpperCase() + value.substring(1) // 인수로 받은 문자열의 첫글자를 대문자로 하고 글자를 모두 출력하는 메서드를 작성
    this._name = str; // _name에 할당
  }
}
console.log(person.name); // Tom
person.name = 'huck'
console.log(person.name); // Huck