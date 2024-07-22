// ====================================
// SCOPING
// ====================================

// function outer() {
//     let counter = 0;

//     function inner() {
//         counter  ++;
//         console.log(counter)
//     }

//     inner();

//     console.log(counter)
// }

// outer()

// ===========================================
// CLOSURES IN JS
// we can return a function inside a function
// ===========================================

function outerFunction() {
  let counter = 0;

  function innerFunction() {
    counter++;
    console.log(counter);
  }

  function innerFunction2() {
    counter++;
    console.log(counter);
  }
  function innerFunction3() {
    innerFunction();
    innerFunction2();
  }

  return innerFunction3; // returning innerFunction3 instead of innerFunction2 to demonstrate closure
}

// The variable defined in the outer function when
// .. being referenced by the function defined in the outer function (this is when closure happens)
// ... is stored in the heap and will be remembered.

let myFunction = outerFunction();

myFunction(); // logs 1, 2
myFunction(); // logs 3, 4
