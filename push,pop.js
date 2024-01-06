let colors = [];
let count = colors.push('red','green');
alert(count); // 2

count = colors.push('black')
alert(count); // 3

let item = colors.pop(); // 배열의 마지막 데이터를 제거하고 length 프로퍼티를 그에 맞게 줄여서 반환
alert(item) // black 배열 마지막에 값을 제거하고 반환
alert(colors.length) // 2

// 배열 객체는 데이터 삽입과 제거에 제한이 있는 데이터 구조인 스택처럼 동작할 수 있다.
// 스택은 LIFO('last in first out') 구조라고 불리는데 이 말의 의미는 
// 데이터를 삭제할 때는 마지막에 추가된 데이터가 제일 먼저 삭제된다는 뜻이다.
//스택 메서드 -> push() pop()
// push() 메서드의 매개 변수 숫자에는 제한이 없으며 받은 매개변수를 그대로 배열에 추가한 후 
// 이에 맞게 늘어난 배열 길이를 반환한다.
// pop() 배열의 마지막 데이터를 제거하고 length프로퍼티를 그에 맞게 줄여서 반환한다.