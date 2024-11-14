// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toISOString());//india standard time
// console.log(myDate.toJSON()); // 2024-11-14T03:29:13.919Z
// console.log(myDate.toDateString()); //Thu Nov 2024
// console.log(myDate.toLocaleString()); // 14/11/2024
// console.log(myDate.toUTCString());//Thu, 14 Nov 2024 03:30:16 GMT



let myCreatedDate = new Date("01-14-2024") 
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay()); 

// `${newDate.getDay()}` 

newDate.toLocaleString('default',{
    weekday:"long"
    // timeZone:''
})



