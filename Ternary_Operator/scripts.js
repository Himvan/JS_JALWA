'use strict';

/**
 * Ternary Operator
 */


let userName = 'Himvan';

// console.log(userName ? userName : 'NOT FOUND');


let greeting = 'Hello ' + (userName ? userName : 'There');

console.log(greeting)


// console.log(`Hello ${userName ? userName : 'There'}`)


let greetings = 'Hello ';

if(userName) {
 greetings += userName
} else {
    greeting += 'There'
}

console.log(greetings)







