// control flow / logic flow

// if

// if(true){

// }


// const isUserloggedIn = true

// if (isUserloggedIn){
//     console.log('the user loged in sucessfully');
    
// }


// < , >, <=, >=, ==, !=, ====(checks even the type) , !== , ----------------------------

// if (2=='2'){
//     console.log('executed');        // executed
    
// }


// if (2==='2'){
//     console.log('executed');       // ------------- nothing has returned because the data type is not same
    
// }

const temperature = 51


if (temperature<50){
    console.log('less than 50');
    
}
else{
    console.log('temperature is greater than 50 ');
}


const score = 200

if(score > 100){
    const power = 'fly'
    console.log(`user power : ${power}`);
    
}
// console.log(`user power : ${power}`); --------- power not defined 


const userLoggedIn = true
const debitCard = true


if (userLoggedIn && debitCard && 2=='2' ) {
    console.log("Allow to buy courses");
    
}

const loggedInFromGoogle = true
const logedInFromEmail = false

if (logedInFromEmail || loggedInFromGoogle){
    console.log('user logged in ');
    
}