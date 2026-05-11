// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id ="123abc"
tinderUser.name = "Swami"
tinderUser.isLoggedIn = false

// console.log(tinderUser);    // { id: '123abc', name: 'Swami', isLoggedIn: false }

const regUser = {
    email : "swami@gmail.com" ,
    fullname : {
        userFullname : {
            firstName : "Sravan",
            lastName : "kokkirala"

        }
    }
}

// console.log(regUser.fullname.userFullname.firstName); // Sravan

const obj1 = {1:"a" ,2 : "b"}

const obj2 ={3 :"a" ,4 : "b"}

// const obj3 = {obj1,obj2}

// console.log(obj3);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign(obj1,obj2)  //----------------------------------
// console.log(obj3);      // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1,...obj2}
// console.log(obj3);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users =[
    {
        id :1 ,
        email : "h@gmail.com"
    } ,
    {
        id :2 ,
        email : "S@gmail.com"
    }
]

// console.log(users[1].email);        // S@gmail.com


// console.log(tinderUser);


// console.log(Object.keys(tinderUser));       // [ 'id', 'name', 'isLoggedIn' ]


// console.log(Object.values(tinderUser));      // [ '123abc', 'Swami', false ]

// console.log(Object.entries(tinderUser));        // [ [ 'id', '123abc' ], [ 'name', 'Swami' ], [ 'isLoggedIn', false ] ] ---------converts key value pair to array


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));       // true -------works only to find whether an obj has the particular key or not 



// ---------------------------------------------------Destructuring Objects ----------------------------------------------

const course = {
    coursename : "js in hindi",
    price : 999,
    courseInstructor : "Hitesh"
}

// course.courseInstructor = "Sravan"

// console.log(course);

// console.log(course.courseInstructor);

const {courseInstructor} = course ;
const {courseInstructor: instructor} = course ;         // --------------------------------------------------alias

// console.log(courseInstructor);      // Hitesh

// console.log(instructor);    // Hitesh


// {
//     "name" : "sravan",
//     "coursename" : "js in hindi ",
//     "price" : "Free"
// }