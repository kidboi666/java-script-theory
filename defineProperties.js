// 객체의 프로퍼티는 두 종류로 나뉜다.
// 하나는 데이터 프로퍼티
// 또 하나는 접근자 프로퍼티(accessor property)이다
// 접근자 프로퍼티의 본질은 함수인데, 이 함수는 값을 획득(get)하고 설정(set)하는 역할을 담당한다
// 그런데 외부 코드에서는 함수가 아닌 일반적인 프로퍼티처럼 보인다.


let book = {
  _year: 2004,
  edition: 1,
};

Object.defineProperties(book, 'year', {
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