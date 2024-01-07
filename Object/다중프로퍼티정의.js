// Object.defineProperties(수정할객체, 프로퍼티이름, 대응하는객체)

let book = {
  _year: {
    value: 2004
  },
  edition: {
    value: 1
  },
  year: {
    get: function() {
      return this._year;
    },
    set: function(newValue) {
      if (newValue > 2004) {
        this._year = newValue;
        this.edition += newValue - 2004;
      }
    }
  }
}

//프로퍼티 속성읽기 Object.getOwnPropertyDescriptor(프로퍼티가포함된객체, 서술자를가져올프로퍼티이름)
let descriptor = Object.getOwnPropertyDescriptor(book, "_year");
alert(descriptor.value); // 2004
alert(descriptor.configurable); // false
alert(typeof descriptor.get); // undefined

let descriptor2 = Object.getOwnPropertyDescriptor(book, "year");
alert(descriptor2.value); // undefined
alert(descriptor2.configurable); // false
alert(typeof descriptor2.get); // function - getter함수를 가리키는 포인터

