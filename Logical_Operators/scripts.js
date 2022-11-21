'use strict';

/**
 * Logical Operators
 */

// &&(AND), ||(OR), !(NOT)

const hasHtmlNCSSKnowl = true;
const hasJSKnow = true;

    // console.log(hasHtmlNCSSKnowl && hasJSKnow)
    // console.log(hasHtmlNCSSKnowl || hasJSKnow)
    // console.log(hasHtmlNCSSKnowl && !hasJSKnow)



const hasReactKnow = false;


// !(NOT) operator has the highest precedence than the other logical operators

if(hasHtmlNCSSKnowl && hasJSKnow && !hasReactKnow) {   
    console.log("Person knows React Concepts")
} else {
    console.log("Person is not a React Developer")
}