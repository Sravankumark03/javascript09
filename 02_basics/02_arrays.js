const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","batman","flash"]

// marvel_heros.push(dc_heros)

// console.log((marvel_heros));        // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
// console.log(marvel_heros[3][0]);        // superman



// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);      // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]


// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);      // [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

// CONCAT - if we use concat , the array will be returned as 1 array , not as nested array , unlike push operation

const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);     // [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
// [
//   1, 2, 3, 4, 5,
//   6, 7, 6, 7, 4,
//   5
// ]

const L1_freq = ["hi","my","is","max"]

console.log(Array.isArray(L1_freq));       // false

console.log(Array.from(L1_freq));      // [ 'S', 'r', 'a', 'v', 'a', 'n' ]

console.log(Array.from({name:"sravan"}));       // 




let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));        // [ 100, 200, 300 ]

// ----------------- read about the arra.is ,Array.of -----
