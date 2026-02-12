// Primitive 

// 7 types : String , Number , Boolean , Null, undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null 

let userEmail ; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id);
console.log(anotherId);
console.log(id === anotherId);      // false

const bigNumber = 7862837423874782197192784n

console.log(typeof bigNumber);      // bigint


// Reference (Non primitive)

// Array , Objects , Functions 

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name :"Sravan",
    age : 22
}

const myfunction = function(){
    console.log("Hello World");
    
}
myfunction()    // Hello World

console.log((typeof outsideTemp));      // object
console.log((typeof myfunction));      // function
console.log((typeof heros));      // object
console.log((typeof anotherId));      // symbol


 