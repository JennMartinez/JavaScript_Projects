// Reference data types: arrays, objects, functions 

// function = building block of code to perform a task
// functions and be predefined or user defined
// syntax: 
//      function nameoffunction(enter parameters here) {
//          alert('Hello World!');
// }
// the body of the function is the code written between the curly braces {}

function goodbye() {
    console.log('Hi, Captain!');
}
// calling the function
goodbye();

function numbers(a, b) {
    return a * b;
}
// call function
// pass values (2, 4) to variables (a, b)
// values (2, 4) are known as arguments, and pass the arguments to the function (numbers)
// when defining a function, parameters are passed to the function
// store the function name (numbers) in a variable (x)
let x = numbers(2, 4);
console.log(x);

function subtract(s, t) {
    return s - t;
}

let p = subtract(6, 2);
console.log(p);