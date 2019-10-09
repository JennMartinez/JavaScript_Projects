// Switch Case = the switch statement is used to perform different actions based on different conditions
// The Expression is compared to the Value of each Case.
// If there is a match between the expression and case, the code block will execute, because it is TRUE.

// syntax:
//      switch(expression) {
//          case 1:
//              code block 1
//              break;
//          case 2:
//              code block 2
//              break;
//          default:
//              code block 3
// }

let games = 'waterpolo';
switch(games) {
    case 'baseball':
    console.log('I like baseball.');
    break;
    case 'basketball':
    console.log('I love basketball');
    break;
    case 'soccer':
    console.log('Soccer is not my favorite sport.');
    break;
    case 'waterpolo':
    console.log('Waterpolo is my sport!');
    break;
    default:
    console.log('I prefer other sports.');
    break;
}