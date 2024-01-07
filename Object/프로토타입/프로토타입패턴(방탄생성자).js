function Person(name,age,job) {
  let o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function() {
    alert(name);
  }
  return o;
}
let friend = Person('mike',29,'software engineer');
friend.sayName(); // mike

// 기생 생성자 패턴과의 차이점 2개
// 첫째. this를 쓰지 않음
// 둘째. new 연산자로 호출하지 않음

// 반환된 객체의 name값에 접근 할 방법이 없음.(뭔소린지)
// sayName메서드를 통해 값을 알수는 있지만 그 외엔 전혀 방법이
// 없음
// Person도 방탄 객체임. 객체 등록된 메서드를 호출하지 않고는
// 이 데이터에 접근할 방법이 전혀 없음 (뭔소린지)