// for


for (let index = 0; index < 10 ; index++) {
    const element = index ;
    if (element == 5){
        // console.log(' 5 is the best element ');
        
    }
    // console.log(element);
    
    
}

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9



for (let i=1 ; i<=10 ; i++){
    // console.log(`Outer loop value: ${i}`);
    
    for (let j = 0; j <=10 ; j++) {
        // console.log(`inner loop value: ${j} and outer loop ${i}`);
        // console.log(i + '*' + j +'='+ i*j);
        
        
        
    }
}

let myArray = ['flash','batman','superman']
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
    
}

// flash
// batman
// superman

// for (let index = 1; index < 20; index++) {
//     if (index == 5){
//         console.log(`Detected 5`);
//         break
        
//     }
//     console.log(`value of i is ${index}`);
    
    
// }
// value of i is 1
// value of i is 2
// value of i is 3
// value of i is 4
// Detected 5

for (let index = 1; index < 20; index++) {
    if (index == 5){
        console.log(`Detected 5`);
        continue
        
    }
    console.log(`value of i is ${index}`);
    
    
}

// value of i is 1
// value of i is 2
// value of i is 3
// value of i is 4
// Detected 5
// value of i is 6
// value of i is 7
// value of i is 8
// value of i is 9
// value of i is 10
// value of i is 11
// value of i is 12
// value of i is 13
// value of i is 14
// value of i is 15
// value of i is 16
// value of i is 17
// value of i is 18
// value of i is 19

