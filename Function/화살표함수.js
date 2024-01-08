//함수 리터럴
var square = function(x) { return x*x };

//화살표 함수
var sqaure2 = (x) => { return x*x };

//인수가 여러개 있을때
var square3 = (x, y, z) => { return x*y+z };

//인수가 하나만 있으면 괄호 생략 가능
var square4 = x => { return x*x };

//인수가 없으면 생략 불가능
var sqaure5 = () => {}

//함수 몸통 안의 문장이 return 한줄이면 중괄호와 return 생략가능
var square6 = x => x*x;

//함수 몸통 안의 문장이 return 한줄이어도 반환값이 객체 리터럴이면 괄호로 묶어줘야함
var square7 = x => ({x: a, y: b});

//화살표함수도 즉시 실행함수로 사용가능
(x => x*x)(3); // 9

//화살표 함수의 특이점.
//1. this의 값이 함수를 정의할 때 결정된다. (화살표 함수 바깥이 this값이 된다. (call,apply메서드 안통함))

//2. arguments 변수가 없다. (화살표함수엔 arguments라는  변수가 정의자체가 안되있음)

//3. 생성자로 사용할 수 없다. (화살표 함수 앞에 new연산자 못붙힘)

//4. yield 키워드를 사용할 수 없다. (몰라시발뭐야이게 넌나중에보자)