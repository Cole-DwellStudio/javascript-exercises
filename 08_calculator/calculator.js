const add = function (numOne, numTwo) {
  return numOne + numTwo;
};

const subtract = function (numOne, numTwo) {
  return numOne - numTwo;
};

const sum = function (array) {
  let sum = 0;
  array.forEach((num) => {
    sum += num;
  });
  return sum;
};

const multiply = function (array) {
  let product = parseInt(array[0]);
  product = parseInt(array[0]);
  for (let i = 1; i < array.length; i++) {
    product = array[i] * product;
  }
  return product;
};

const power = function (numOne, numTwo) {
  let result = numOne;
  for (let i = 1; i < numTwo; i++) {
    result = numOne * result;
  }
  return result;
};

const factorial = function (num) {
  let factorial = num;
  if (num === 0) {
    return 1;
  }
  for (let i = num - 1; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
