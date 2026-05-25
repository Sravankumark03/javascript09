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
    
    two()       // Sravan K
}
one()

