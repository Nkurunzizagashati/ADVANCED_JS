// call() method

const obj = {
  name: 'John',
  age: 30,
};

function callName(country, city) {
  console.log(
    `Iam : ${this.name}, I am ${this.age} years old, I am from ${country}`
  ); // Outputs: John
}

// method rendering

callName.call(obj, 'Rwanda', 'Kigali'); // Outputs: I am John, I am 30 years old, I am from Rwanda

// apply() method

callName.apply(obj, ['Rwanda', 'Kigali']); // Outputs: I am John, I am 30 years old, I am from Rwanda

// bind() method
// bind() method is similar to call() method but the difference is that bind method
// .. returns a function that can be called later whereas call() method immediately calls the function

const boundCallName = callName.bind(obj, 'Rwanda', 'Kigali');
boundCallName(); // Outputs: I am John, I am 30 years old, I am from Rwanda
