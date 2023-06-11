const degree = (x, n) => {
  var result = x;
  for (var i = 1; i < n; i++){
    result *= x;
  }
  return result
}

console.log(degree(4, 2))
console.log(degree(2, 2))
console.log(degree(3, 3))