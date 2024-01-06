// indexOf(), lastIndexOf()
// (검색할데이터, 검색을시작할인덱스)
// indexOf()는 검색을시작할인덱스부터 마지막까지 검색하고
// lastIndexOf()는 마지막에서 시작해 검색을시작할인덱스까지 검색한다.
// 데이터를 찾아냈다면 그 데이터의 인덱스를 반환한다. 데이터를 찾지못했다면 -1을 반환.
// 검색 기준은 연사자 기준으로 ===에 해당하는 엄격 비교를 한다.

let numbers = [1,2,3,4,5,6,7];

alert(numbers.indexOf(4)); // 3
alert(numbers.lastIndexOf(4)); // 3

alert(numbers.indexOf(4, 4)); // -1 인덱스 4부터는 4가 존재하지 않으므로
alert(numbers.lastIndexOf(4, 4)); // 3 거꾸로 검색하기에 4가 존재함.


// 이 아래 부분은 이해가 잘 안되네

let person = { name: 'nicholas' };
let people = [{ name: 'nicholas' }];
let morePeople = [person]

alert(people.indexOf(person)); // -1 일치하는 자료의 기준은 ===와 같은 엄격 비교이므로.
alert(morePeople.indexOf(person)); // 
