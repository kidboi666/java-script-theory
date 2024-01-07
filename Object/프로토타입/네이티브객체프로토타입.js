String.prototype.startsWith = function(text) {
  return this.indexOf(text);
}
let msg = "hello world";
alert(msg.startsWith("hello")) // true
// 주어진 텍스트를 문자열 처음에서 찾을 수 있는지 판단하는 메서드.
// 이 메서드는 String.prototype에 저장되어 있으므로 모든 문자열에서 사용가능하다.
