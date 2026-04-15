//  Dates

let myDate = new Date()

console.log(myDate);        // 2026-04-15T06:26:01.230Z

console.log(myDate.toDateString());     //   Wed Apr 15 2026

console.log(myDate.toString());     //   Wed Apr 15 2026 06:27:29 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toISOString());     //   2026-04-15T06:28:39.148Z

console.log(myDate.toJSON());     //   2026-04-15T06:28:39.148Z

console.log(myDate.toLocaleString());     //   4/15/2026, 6:29:52 AM

console.log(typeof(myDate));        // object
console.log(typeof myDate);        // object

let myCreatedDate = new Date(2004, 7, 27 )      
console.log(myCreatedDate.toDateString());      // Fri Aug 27 2004 ---- takes first as year , then month (0-11) , day of the month .

let myCreatedDate1 = new Date("2004-08-27")     
console.log(myCreatedDate1.toLocaleString());       // 8/27/2004, 12:00:00 AM


let myTimestamp = Date.now()
console.log(myTimestamp);       // 1776235366158----------millisecond values

console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));       // 1776235610

let newDate = new Date()
console.log(newDate);       // 2026-04-15T06:47:39.215Z
console.log(newDate.getDay());       // 3 --- which indicated wednesday 
console.log(newDate.getMonth());       // 3 --- which indicated april (0-11) 
console.log(newDate.getMonth()+1);       // 4 --- which indicated april 
console.log(newDate.getHours());       // 6


let five = newDate.toLocaleString('default', {
    weekday : "short",
    month : "short"
})


console.log(five);      // Apr Wed




 

