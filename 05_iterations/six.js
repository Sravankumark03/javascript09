// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach( (item) =>{
//     console.log(item);
//     return item     // undefined
    
// })

// console.log(values);


// forEach does not return anything (undefined)
// -------------------------------------------------------------------------------------------------
// Filter 

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=> num > 4)        // [ 5, 6, 7, 8, 9, 10 ]

// const newNums = myNums.filter( (num) =>{
//     return num >5       // [ 6, 7, 8, 9, 10 ]
// })

// when we use filter and then write the condition on the same linbe then there is no return keyword needed .
// But when you write the condition in a scope {} or in the function then , inorder to see the output the return keyword must be used .

// const newNums = []

// myNums.forEach( (num)=>{
//     if (num>6) {
//         newNums.push(num)           // [ 7, 8, 9, 10 ]
//     }
// })


// console.log(newNums);      




