// Loops = used to repeat a specific block until some end condition is met
// If the condition is FALSE, end loop.
// If the condition is TRUE, run conditional code
// Loops = for, while, do while

// While Loop = the while loop will execute code as long as the condition is true
// syntax: 
//      while(condition) {
//      loop code;
// }

// Do While Loop = varient of While Loop. The Do While Loop will first execute the code, then check 
// the condition and while the condition holds true, execute repeatedly.
// syntax:
//      do {
//      loop code;
// }
//      while(condition);

// While Loop
let i = 0;
while(i < 5) {
    console.log('The number is ' + i);
    i++;
}

// Do While Loop
let j = 2;
do {
    console.log('The number is ' + j);
    j++;
}
while(j > 5);

// For Loop = repeatedly executes the loop code while a given condtion is TRUE. 
// It tests the condition before executing the loop body.
// Once the variable is initialized (begin), then the condition is checked for TRUE. 
// If the condition code block is TRUE, the code will execute the statement, and the step will be executed, as well.
// syntax:
//      for(begin; condition; step) {
//      loop code;
// }

// For Loop
for(let k = 0; k < 5; k++) {
    console.log('The number is ' + k);
}

for(let l = 0; l < 50; l++) {
    console.log(l + '. I am sorry.');
}
