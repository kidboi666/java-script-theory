// 다중프로퍼티정의.
// Object.defineProperties(수정할객체, 프로퍼티이름, 대응하는객체) 메서드는 객체가 가진
// 프로퍼티 여러 개에 각각의 프로퍼티 디스크립터를 설정

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

//혹은

let person = Object.defineProperties({}, {
  _name: {
    value: 'Tom',
    writable: true,
    enumerable: true,
    configurable: true
  },
  name: {
    get: function() { 
      return this._name 
    },
    set: function(value) {
      let str = value.charAt(0).toUpperCase() + value.substring(1);
      this._name = str;
    },
    enumerable: true,
    configurable: true
  }
});
Object.getOwnPropertyDescriptor(person, 'name');
// enumerable: true, configurable: true

//프로퍼티 속성읽기 Object.getOwnPropertyDescriptor(프로퍼티가포함된객체, 서술자를가져올프로퍼티이름)
let descriptor = Object.getOwnPropertyDescriptor(book, "_year");
alert(descriptor.value); // 2004
alert(descriptor.configurable); // false
alert(typeof descriptor.get); // undefined

let descriptor2 = Object.getOwnPropertyDescriptor(book, "year");
alert(descriptor2.value); // undefined
alert(descriptor2.configurable); // false
alert(typeof descriptor2.get); // function - getter함수를 가리키는 포인터


// 