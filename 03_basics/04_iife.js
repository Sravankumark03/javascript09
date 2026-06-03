// Immediately Invoked Function Expressionss (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
    
// }

// chai()

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
    
})() 

// ()() 1. function defination  2. invoking the function / function calling / exectution call

// - we use IIFE to prevent a function from global pollution 

console.log('panther');


(  () => {
    console.log(`DB CONNECTED IN ARROW FUNCTION `);
    
})() 

// NOTE : when you used a IIFE you should use ";" at end else the immediately next iife funcrtion will not execute

console.log("it will execute");

(  (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED IN ARROW FUNCTION ${name}`);
    
})('PANTHER') 


