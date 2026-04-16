const myArr = [0,7,1,2,3,4,5]

console.log(myArr); // [ 0 ,1, 2, 3, 4, 5 ]

console.log(myArr[1]);      // 1


// when perform copy operation on arrays , they will do shallow copies
// when you perform any changes on the copy , the original will be effected 

const myArr2 = new Array(2,3,4,5)


console.log(myArr2[0]);     // 2


// Array methods 

myArr.push(6)
console.log(myArr);
// [
//   0, 1, 2, 3,
//   4, 5, 6
// ]

myArr.push(7)
myArr.push(7)
console.log(myArr);
myArr.pop(7)
console.log(myArr); // removed seven last occourance


myArr.unshift(9)        // adds the element at first 
console.log(myArr);

// [
    //   9, 0, 7, 1, 2,
    //   3, 4, 5, 6, 7
    // ]
    myArr.shift()    
      console.log(myArr);    // adds the element at first 
    myArr.shift(3)        // removes the element at first 
    console.log(myArr);

    console.log(myArr.includes(9));     // false
    console.log(myArr.indexOf(3));      // 3

    const newArr = myArr.join()
    console.log(myArr);
    console.log(typeof newArr);     // string

    // slice , splice

 console.log("A ",myArr);

 const myn1 = myArr.slice(1, 3)
 console.log((myn1));

 console.log("B ",myArr);
    
    
 const myn2 = myArr.splice(1, 3)
 console.log(myn2); // [ 1, 2, 3 ]  - last number got invovled
 console.log("c ",myArr);
 console.log((myn2));  // c  [ 7, 4, 5, 6, 7 ]
// [ 1, 2, 3 ] original array got divided 
 
 