// Reference data types: objects, arrays, functions 

// array = data structure containing a list of elements (integer or string)
// syntax:
//      let arr[];
//      let arr = new Array();
let shopping = [];
shopping = ['painBrush', 'colorPalette', 'canvas'];
console.log(shopping);
console.log(shopping[2]);
console.log(shopping[0]);
console.log(shopping[1]);

let numbers = [];
numbers = [1, 7, 11, 5, 3, 9];
console.log(numbers[0] + numbers[4]);
console.log(numbers[1] - numbers[0]);
console.log(numbers[5] * numbers[2]);
console.log(numbers[3] / numbers[2]);

// predefined sort() function for elements
console.log(numbers.sort());

// add element to array using push() function
numbers.push(2);
console.log(numbers);
