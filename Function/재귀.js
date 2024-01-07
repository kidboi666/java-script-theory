
function fact(n) {
  if(n <= 1) return 1;
  return n*fact(n-1);
}
fact(5)


function fact(3) { // return 3
  if(n <= 1) return 1;
  return 3*fact(3-1);
}
function fact(2) { // return 2
  if(2 <= 1) return 1;
  return 2*fact(2-1);
}
function fact(1) { // return 1
  if(1 <= 1) return 1;
  return 1*fact(1-1);
}