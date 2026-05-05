const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (nums) {
  return nums.reduce(((acc, num) => acc + num), 0);
};

const multiply = function (nums) {
  return nums.reduce(((acc, num) => acc * num), 1);
};

const power = function (base, exp) {
  return base ** exp;
};

const factorial = function (num) {
  const arr = Array.from({ length: num }, (_, i) => i + 1);
  return multiply(arr);
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
