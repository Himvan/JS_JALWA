'use strict';

/**
 * Expressions and Statements
 */

// Expressions (Which can be evaluated to produce some value)

    // Primary Expressions
        "JS JALWA"
        1997
        undefined
        true
        0
        null

    // Function Expressions
    
    let square = function () {return 2 * 2};

    // Class Expressions

    let Person = class {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName
        }
    }

// Statements (Sequence of actions, sequence of expressions)
   
   let name = "himvan"  // Statement Expressions

            // Types (Conditional, Loops, Break)

   // Compound Statements or empty Statements 

        // {
        //     let x = 10;
        //     x+=20;
        //     console.log(x);
        // }

        // let numArr = [1,2,3,4,5]

        // for(let i=0; i<numArr.length; numArr[i++] = 0);
        // console.log(numArr)
   
  
   // Conditional Statements (IF-ELSE)
     
                    // if(expression) {
                    //     statement1
                    // } else {
                    //     statement 2
                    // }

        // let userName = "Himvan Sharma";

        // if(!userName) {
        //     userName = "Himvan Sharma"
        // } else {
        //     console.log("You already have a username")
        // }

        // let username = "HS";
        // let address = "abc";
        // let mobileNumber;

        // if(!username) {
        //   console.log("Please enter userName")
        // } else if(!address) {
        //     console.log("Please enter address")
        // }



  // Conditional Statements (SWITCH CASE)

                // switch(expression){
                //     case statements
                // }

        // const currentDay = new Date().getDay()
        // console.log(currentDay)
        // let day;

        // switch(currentDay) {
        //     case 0: 
        //     day="Sunday"
        //     break;
        //     case 1: 
        //     day="Monday";
        //     break;
        //     case 6:
        //         day="Saturday";
        //         break;
        //     default:
        //         console.log("Not Found")
        // }
        // console.log(day)
                
