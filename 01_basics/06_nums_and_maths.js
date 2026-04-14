const score = 400
// console.log(score);     // 400

const balance = new Number(100)
// console.log(balance);       // [Number: 100]


// console.log(balance.toString().length);        // 3
// console.log(balance.toFixed(2));        // 100.00


const otherNumber = 123.8966

// console.log((otherNumber.toPrecision(3)));  //   2124

const hundereds = 1000000
// console.log(hundereds.toLocaleString());        //   1,000,000
// console.log(hundereds.toLocaleString('en-IN'));        //    10,00,000

//----------------------------------------------------MATHS-------------------------------------------------------------------------------

// console.log(Math);      // Object [Math] {}

// console.log(Math.abs(-4));  // 4 , converts negative values to positive

// console.log(Math.round(4.6));   // 5 round the nearest number  
// console.log(Math.round(4.3));   // 4 round the number  

// console.log(Math.ceil(4.3));    // 5 gives the upper / ceil value
// console.log(Math.floor(4.6));   // 4 gives the lower/ floor value

// console.log(Math.min(4,1,0,2,-1));      // -1 gives the lowest in the series 
// console.log(Math.max(4,1,0,2,-1));      // 4 gives the highest in the series 

console.log(Math.random()); // 0.9087654844962634 , 0.5143814316807434 - gives any random number between (0-1).

console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const mini = 10
const maxi = 20

console.log(Math.floor(Math.random() * (maxi - mini + 1)) + mini);      // 14





