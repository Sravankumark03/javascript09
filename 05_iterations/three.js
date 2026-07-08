// for of 

// ["" , "" , ""]
// [{} ,{} ,{}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello world"

for (const greet of greetings) {
    // console.log(`Each character is ${greet}`);
    
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set("US","UNited States")
map.set('FR',"France")
map.set('IN',"India")

// console.log(map);

// i fwe only has key in the for loop no value mentioned 
// [ 'IN', 'India' ]
// [ 'US', 'UNited States' ]
// [ 'FR', 'France' ]

for (const [key, value] of map) {
    // console.log(key , ':- ' , value);
}
// DESTRUCTUROING OF THE MAP 
// if both the key , value is mentioned
// IN :-  India
// US :-  UNited States
// FR :-  France


// const myObject = {
//     game1: 'Cyber punk',
//     game2 :'Spider man'
// }

// for (const game of myObject) {
//     console.log(game);
    
// }

"NOTE" // for of - loop cannot be used to iterate the objects , there is an other way 
