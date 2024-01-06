// 1. concat()
// 현재 배열을 복사한 다음 메서드의 매개변수를 새 배열 마지막에 추가해서 반환한다.
// 매개변수를 넘기지 않으면 단순히 현재 배열의 복사본을 반환한다.
// concat() 메서드에 매개변수로 배열을 넘기면 새 배열에 매개변수 배열의 데이터를 모두 추가해서 반환한다.
// 매개 변수가 배열이 아니면 단순히 해당 데이터를 새 배열 마지막에 추가한다.


{ 
let colors = ['red','green','blue']
let colors2 = colors.concat('yellow', ['black','brown']);

alert(colors); // red,green,blue
alert(colors2); // red,green,blue,yellow,black,brown
}

// 2. slice()
// 이 메서드는 배열에 포함된 데이터 일부를 가진 새 배열을 만든다.
// slice 메서드는 매개변수를 두개 받는데 각 매개변수는 원래 배열에서 가져올 데이터 범위의 시작과 끝을 의미.
// 매개변수를 하나만 넘기면 해당 인덱스에서 끝까지 모든 데이터를 가져옴
// 두 개를 넘기면 첫번째 매개변수에 해당하는 인덱스부터 두번째 매개변수에 해당하는 인덱스 '바로 앞' 까지 가져옴
// 역시 slice는 원본 배열은 전혀 건드리지 않는다.
{
let colors = ['red', 'green', 'blue', 'yellow', 'purple'];
let colors2 = colors.slice(1);
let colors3 = colors.slice(1,4);

alert(colors2); // green,blue,yellow,purple 
alert(colors3); // green,blue,yellow
}
// slice 매개변수로 음수를 넘기면 배열 길이 해당 값을 더한 숫자를 대신 사용한다.
// 길이가 5인 배열에서 slice(-2,-1)를 호출한 결과는 slice(3,4)를 호출한 결과와 같다.
// 두번째 매개변수가 첫번째 매개변수보다 작으면 빈 배열을 반환한다.


// 3. splice()
// 이 메서드는 3가지 방법으로 사용한다.
// 첫째로 삭제. 매개변수 (인덱스, 개수)  ex) splice(0,2) 처음 두개를 삭제
// 둘째로 삽입. 매개변수 (인덱스, 개수, '삽입할데이터') ex) splice(2,0,'red','green') 배열 인덱스2에 레드와 그린을 삽입
// 셋째로 대체. 위에 둘을 합하여 대체하는 기능도 가능. ex) splice(2,1,'red','green')

let colors = ['red','green','blue'];
let removed = colors.splice(0,1); // colors의 인덱스0에 데이터1개 제거한뒤 removed에 반환
alert(colors); // green,blue
alert(removed); // red 

removed = colors.splice(1, 0, 'yellow','orange');
alert(colors); // green,yellow,orange,blue
alert(removed); // 빈배열

removed = colors.splice(1,1,'red','purple');
alert(colors); // green,red,purple,orange,blue
alert(removed); // yellow