// If Statement
// conditional statement = a set of rules performed if a certain condition is met / true. It is like an 'if-then' statement. IF condition is met / true, THEN an action is performed. IF the condition is FALSE, exit the 'if' block
// syntax:
//      if(condition) {
//      statement;
// }

let number = [];
numbers = [1, 2, 7, 4, 1, 6, 7];
if(number[0] == number[4]) {
    console.log('Yes! Both numbers are the same!');
}

// If Else Statement
// The Else statement will execute when the If statement is FALSE
// syntax:
//      if(condition) {
//      statement a;
// } else (condition) {
// statement b;
// }

let digits = [];
digits = [1, 2, 7, 4, 1, 6, 7];
if(digits[1] == digits[6]) {
    console.log('Same numbers!');
}
else {
    console.log('The two numbers are different!');
}

// && operator
let numerics = [];
numerics = [1, 2, 7, 4, 1, 6, 7];
if(numerics[0] == numerics[4] && numerics[1] == numerics[6]) {
    console.log('All numerics are the same!');
}
else {
    console.log('One set of numerics is wrong!');
}

// || operator
let numero = [];
numero = [1, 2, 7, 4, 1, 6, 7];
if(numero[0] == numero[4] || numero[1] == numeo[6]) {
    console.log('At least one set of numbers match!');
}
else {
    console.log('Both sets of numbers is wrong!');
}