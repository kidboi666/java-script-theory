// Configurable - 삭제,속성수정,접근자 프로퍼티로 변환할 수 있음을 나타냄, 객체에서 정의한 모든 프로퍼티에서 true
// Enumerable - for-in 루프에서 해당 프로퍼티를 반환함을 나타냄. 기본적으로 true
// Writable - 프로퍼티의 값을 바꿀 수 있음을 나타냄. 기본적으로 true
// Value - 프로퍼티의 실제 데이터값을 포함. 프로퍼티의 값을 읽는 위치이며 새로운 값을 쓰는 위치. 기본적으로 undefined

// defineProperty (수정할객체, 프로퍼티이름, 서술자객체)
let person = {}; // 수정할객체,프로퍼티이름,  서술자객체
Object.defineProperty(person, "name", {
  writable: false, 
  value: "Nicholas"
})

alert(person.name); // Nicholas
person.name = "Greg"
alert(person.name); // Nicholas

// 한번 flase로 configurable은 이후에 바꿀수 없다.