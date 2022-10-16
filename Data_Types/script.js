'use strict'

/**
 * PRIMITIVE DATA TYPES
 */

 // Strings (single quotes, double quotes, backtick)
    // let channel = 'JS JALWA';
    // let channel1 = "JS JALWA";
    // let channel2 = `JS JALWA`;

 //  console.log(typeof channel)

  // IMMUTABILITY
    // let myChannel = 'JS JALWA';
    // myChannel[0] = 'A';

    // let myChannel = 'JS JALWA';
    // myChannel = 'JS JALWA BY HIMVAN';

// Numbers (respresents floating-point, integer, Infinity, -Infinity or NAN - NOT A NUMBER)

// let num = 3.4;
// let num1 = 3;
// let num2 = 3e4;
// console.log(typeof num1, typeof num2)

let numInfy = -3 / 0;
// console.log(typeof numInfy)

 // NAN (Not A Number)
    // let numNAN  = "abc"/1;
    // console.log(typeof numNAN)

// undefined
    // let num;
    // console.log(typeof num);

// null (respresents empty value or undefined value)
    // let num = null;
    // console.log(num)

// BigInt (represents value with arbitrary precision)
    // let largeNum = 137128351238n;
    // let num = 3 + largeNum
    // console.log(typeof largeNum)

// Symbol (represents a unique values. Symbol is factory function)

    // let channel = Symbol('JS JALWA');
    // let channel1 = Symbol('JS JALWA');
    // console.log(channel == channel1)


/**
 * NON-PRIMITIVE DATA TYPES
 */

 let intro = {
    firstName: "Himvan",
    lastName: "sharma"
 }


 // MUTABILITY
 let numArr = [1,2,3,4,5]
 numArr[0] = 10;
 console.log(numArr);
