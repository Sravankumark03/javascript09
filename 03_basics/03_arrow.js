const user = {
    username : "Sravan Rao",
    price : 999 ,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()       // Sravan Rao ,welcome to website

// user.username = "shiva"
// user.welcomeMessage()       // shiva ,welcome to website


// console.log(this);      // {} 


// function chai(){
//     let username2 = "Ned Stark"
//     console.log(this.username2);        // undefined
    
// }

// chai()


// we can see the (this) is working only on the function which is in the the OBJECT 
// this - is not working in the function directly as you can see above examples . 


// ---------- Declaration of different functions -----------------

// const chai = () =>{
//     let username = "Sravan"
//     console.log(this.username);
    
// }

// chai()

// const addThree = (num1,num2,num3) =>{
//     return num1+num2+num3
// }

// console.log(addThree(1,2,3));       // 6


// ------------------- Implict way ------------

// const addThree = (num1, num2 , num3) => num1+num2+num3


const addThree = (num1, num2 , num3) => (num1+num2+num3)

console.log(addThree(3,4,5));       // 12

// Note1 - when you will use an {} in a function , you have to use return keyword
// Note2 - when you use () - there is no need to use return keyword

const paranthisis_example = (num1, num2) => ({username : "Black Clover"})

console.log(paranthisis_example(5,1));      // { username: 'Black Clover' }


const myArray = [2,3,4,5]

myArray.forEach()
