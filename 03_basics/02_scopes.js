// let a = 300

// if(true){
//     let a = 10
//     const b = 20
//     console.log("Inner : ", a);
    
    
// }

// console.log(a);
// console.log(b);
// console.log(c);     // 30 


// Inner :  20
// 300

// -------------------------------------------------------------------------------------------


function one(){
    const userName = "Sravan K"

    function two(){
        const website = "youtube"
        console.log(userName); 
        
             
        
    }
    // console.log(website); --------------- website is not defined  
    
    // two()       // Sravan K
    // console.log(website); // out of scope !!
    
}
one()


  if(true){
    const username = "Sravan"
    if (username === "Sravan"){
        const website = " youtube"
        console.log(username+website);          // Sravan youtube
    }
    // console.log(website); // out of scope
    
  }

//   console.log(username);  // out of scope
  


// ++++++++++++++++++++++ Intresting +++++++++++++++++++++++++

// console.log(addone(5)); // 6 -------------- no problem of function declaration 

function addone(num){
    return num+1
}

// console.log(addone(5));     // 6


// console.log(addTwo(3));     // ReferenceError: Cannot access 'addTwo' before initialization


const addTwo = function(num){
    return num+2
}


console.log(addTwo(3));         // 5
