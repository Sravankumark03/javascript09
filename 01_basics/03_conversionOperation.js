let value = 3
let negValue = - value
// console.log(negValue);
// console.log(2 + 2);
// console.log(2 - 2);
// console.log("2" + "2");
// console.log("2" - "2");


let str1 = "hello"
let str2 = "Sravan"
let str3 = str1 +" "+str2
// console.log(str3);

// console.log(1 + "2");  // convers into string 
// console.log("1"+2);      // convers into string 

let a = 1 - "2"
let b = 1 + "2"
// console.log(a);       // -1 
// console.log(b);       //  12 

// console.log(typeof a);  // number 
// console.log(typeof b);  // string 

// console.log(1 + 2 + "2");   //32
// console.log("1" + 2 + 2);   //122 

// console.log(+true);     // 1  tricky conversion - should not do    
// console.log(+"");       // 0   tricky conversion - should not do 


let num1 , num2 , num3 

num1 = num2 = num3 = 2 + 2



let gameCounter = 100
gameCounter++;
console.log(gameCounter);       // 101



let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let c = 3;
const d = ++c;

console.log(`a:${c}, b:${d}`);
// Expected output: "a:4, b:4"