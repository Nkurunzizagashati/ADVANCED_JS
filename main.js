// PROTOTYPAL INHERITANCE

function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const person1 = new Person('John', 'Doe');
const person2 = new Person('Jane', 'Smith');

console.log(person1.getFullName()); // Output: John Doe

console.log(person2.getFullName()); // Output: Jane Smith
