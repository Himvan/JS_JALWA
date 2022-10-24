'use strict'

/**
 * OPERATORS PRECEDENCE
 */

const currentYear = 2022;
console.log(currentYear - 1997 < currentYear - 1996)

const operPrec = (2 + 3) * 4;
console.log(operPrec);

console.log(10 - 5 - 2)


let x, y;

x = y = 10 + 5 + 5;  // x = y = 20
console.log(x, y)


const operation = 1 + 2 ** 3 * 4;
// 1. 1 + (2 ** 3) * 4
// 2. 1 + ((2 ** 3) * 4)
// 3. (1 + ((2 ** 3) * 4)

console.log(operation)

