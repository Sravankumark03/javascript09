// Singleton
// object.create

// object literals 

const mySym = Symbol("Key1")


const JsUser = {
    "Full name" : "sravan rao",
    name : "Sravan",
    mySym : "myKey1",
    // [mySym2] : "myKey2" ,
    roll_no : 590 ,
    passed_out : true ,
    email : "sravan@hexagon.com",
    isLoggedIn : false ,
    lastLoginDays : ["Thrusday","Friday"]
}

console.log(JsUser);    // { name: 'Sravan', roll_no: 590, passed_out: true }

console.log(JsUser.name);
console.log(JsUser["email"]);

// Sravan
// sravan@hexagon.com


console.log(JsUser["Full name"]);   // sravan rao

console.log(JsUser.mySym);      // myKey1

console.log((typeof JsUser.mySym));      // string

console.log(mySym);      // Symbol(Key1)

// console.log(JsUser[mySym2]);     // myKey2
// console.log(typeof [mySym2]);     // object


JsUser.email = "sravan@microsoft.com"
// Object.freeze(JsUser)  //------------------------------------- Freeze

JsUser.email = "sravan@google.com"

console.log(JsUser.email);

JsUser.greeting = function (){
    console.log("Hello JS User - Please be consistent");
    
}

JsUser.greetingTwo = function (){
    console.log(`Hello JS User - Please be consistent, ${this.name}`);
    
}

console.log(JsUser.greeting);       // undefined



console.log(JsUser.greeting());       // undefined
// [Function (anonymous)]
// Hello JS User - Please be consistent

console.log(JsUser.greetingTwo());       // undefined
// Hello JS User - Please be consistent, Sravan
// undefined



