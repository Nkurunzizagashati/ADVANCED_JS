
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
// we can return a function inside a function
// ===========================================


function outerFunction() {
    let counter = 0;

    function innerFunction() {
        counter++;
        console.log(counter)
    }

    return innerFunction;
}


let myFunction = outerFunction();

myFunction(); // logs: 1
myFunction(); // logs: 2