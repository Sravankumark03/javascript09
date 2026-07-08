const myObject = {
    js :'java script',
    cpp : "C++",
    rb : "ruby",
    swift :"swift by apple"
}



for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${key} shorcut is for ${myObject[key]}`);
    
    
}

const programming = ["js","python","java","cpp","rb"]

for (const key in programming) {
    // console.log(programming[key]);
    
}
// 0
// 1
// 2
// 3
// 4  - if only key is used 

// js
// python
// java
// cpp
// rb --- if we use the obj name (obj[key])


const map = new Map()
map.set('IN',"India")
map.set("US","UNited States")
map.set('FR',"France")
map.set('IN',"India")


// for (const key in map) {
//     console.log(key);
    
// }
// map is not iterable with for in 

// 20.22