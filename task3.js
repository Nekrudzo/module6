function sum(x) {
  return function(y) {
      return x + y;
  };
}
let a = sum(5);

console.log(a(0), a(1), a(2) );
console.log( sum(1)(2), sum(30)(12), sum(100)(23) );