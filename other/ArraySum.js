/**
 * 前一段时间面试，面试官希望能说出多种数组求和的方式
 */

// Array.prototype.reduce()
var total = [1, 5, 8, 7, 9, 0, 3, 4, 7].reduce(function (sum, value) {
  return sum + value;
}, 0);
console.log(total);

//eval
eval([1, 5, 8, 7, 9, 0, 3, 4, 7].join('+'));
