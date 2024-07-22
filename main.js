// FUNCTION CURRYING

// there are two ways to implement function currying in JavaScript:
// 1. Using bind() method
// 2. Using closures

// 1. Using bind() method

const multiply = (a, b) => a * b;

const multiplyByTwo = multiply.bind(null, 2); // curried function
console.log(multiplyByTwo(5)); // outputs: 10

const multiplyByThree = multiply.bind(null, 3); // curried function
console.log(multiplyByThree(5)); // outputs: 15
