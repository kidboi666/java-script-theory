let colors = [];
let count = colors.push('red','green');
alert(count); // 2

count = colors.push('black');
alert(count); // 3

let item = colors.shift(); // 첫번째 데이터 꺼냄
alert(item); // 'red'
alert(colors.length) // 2


// 큐는 데이터 입출력을 FIFO(first in first out)로 제한하는 데이터 구조.
// 큐는 목록 마지막에 데이터를 추가하며 목록 맨 앞에서 데이터를 꺼낸다.
//push 메서드는 배열 마지막에 데이터를 추가하므로 배열이 큐처럼 동작하게 하려면 
//배열의 첫번째 데이터를 꺼내는 메서드만 있으면 된다.
// shift() 배열의 첫번째 데이터를 꺼내서 반환하며 배열 길이는 1만큼 줄어듬


// shift() 메서드의 반대인 unshift()도 있다.
// 매개변수로 넘겨받은 데이터를 배열의 처음에 추가하며 그에 맞게 변한 배열 길이를 반환한다.


let colors2 = [];
let count2 = colors2.unshift('red','green'); // ['red','green']
alert(count2); // 2

count2 = colors2.unshift('black'); // ['black', 'red', 'green']
alert(count2); // 3

let item2 = colors2.pop(); // []
alert(item2); // 'green'
alert(colors2.length); // 2