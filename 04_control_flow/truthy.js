// const userEmail = "s@sravan.ai"
// const userEmail = " "

// if (userEmail){
//     console.log("Got the user email");
    
// }
// else {
//     console.log("Dont have the user mail");
    
// }

const userEmail = []

if (userEmail){
    console.log("Got the user email");
    
}
else {
    console.log("Dont have the user mail");
    
}


// falsye value

// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN 

// truthy values
//  "0" , 'false' , " " , [] ,{} , function (){} 


if (userEmail.length === 0){
    console.log("Array is empty");
    
}
const emptyObj = {}

if (Object.keys(emptyObj).length===0){

console.log('Object is empty ');

}

// Nullish Coalecsing Operator (??): null undefined ------- for fall back 

let val1 ;
// val1 = 5 ?? 10 
// val1 = null ?? 10 
// let var1;
val1 = undefined ?? 15 

console.log(val1);


// null and ternary operator are different 


// consition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");

