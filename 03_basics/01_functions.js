


function sayMyName(){
    console.log("S");
console.log("R");
console.log("A");
console.log("V");
console.log("A");
console.log("N");

}

// sayMyName()
// S
// R
// A
// V
// A
// N

// function addTwoNumbers(number1 , number2){
//     console.log(number1+number2);
    
    
// }

// addTwoNumbers(1,1)  // 2
// addTwoNumbers("1"+ 4)  // 14undefined
// addTwoNumbers("a"+ 4)  // a4undefined
// addTwoNumbers(1, "4")   // 14 

// const result = addTwoNumbers(3,5)
 
// console.log("result: " , result);       // result:  undefined


// function addTwoNumbers(number1 , number2){
    
//     return number1+number2
    
// }

// const result = addTwoNumbers(4 , false)
// console.log("result: " , result );    
// console.log(typeof result);


// function loginUserMessage(username){
//     // if(!undefined)
//     if(username === undefined){
//         console.log("please enter a username");
//         return
        
//     }
//     return `${username} just logged in`
// }

// function loginUserMessage(username="Mercury" ){
    
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("sravan"));        // sravan just logged in 

// console.log(loginUserMessage());            // undefined just logged in



function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,500,1300));      // [ 200, 500, 1300 ]


const user = {
    username : "sravan rao",
    price : 10
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price} `);
    
}

// handleObject(user)      // Username is sravan rao and price is 10 
handleObject({
    username : "Steve",
    price : 699
})      // Username is Steve and price is 699 

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return(getArray[1])
}

// console.log(returnSecondValue(myNewArray));     // 300
console.log(returnSecondValue([300,400,500,600]));     // 400
