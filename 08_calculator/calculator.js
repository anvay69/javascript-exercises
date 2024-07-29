const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((acc, curr) => acc+curr, 0);
};

const multiply = function(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((acc, curr) => acc*curr, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
	res = 1;
  while (num > 1) res *= num--;
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
