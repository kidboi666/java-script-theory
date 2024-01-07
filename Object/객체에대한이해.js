let person = new Object();
person.name = "Nicholas"
person.age = 29;
person.job = "Software Engineer"

person.sayName = function() {
  alert(this.name);
}

// Object에 인스턴스를 만들고 여기에 프로퍼티와 메서드를 추가하는 방법.


let person2 = {
  name: "Nicholas",
  age: 29,
  job: "Software Engineer",
  sayName: function() {
    alert(this.name);
  }
}

// 객체 리터럴표기법