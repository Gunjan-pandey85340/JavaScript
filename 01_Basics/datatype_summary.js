// primitive 

// 7type:String , Number ,Boolean , null ,undefined,Symbol,BigInt
 
//JS is dhynamically typed lang
const score = 100
const scoreval = 100.3
const isloggedin = false
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

const bigNumber = 3662782963186918961636196837963986n

// reference (non - primitive)

// Array , Objects , Functions

const arr = ["xyz","hbdusu","ediio"]
let myobj = {
    name:"gunjan",
    age: 22,
}

const myfun = function(){
    console.log("hello world");
    
}

console.log(typeof outsidetemp); 
//ecma doc 


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack [primitive] , Heap[Non-primitive]
let myUname = "hxbhcsb@.com"
let anothername = myUname
anothername = "codewithme"

console.log(myUname);
console.log(anothername);

let user = {
    userEmail :"user@google.com",
    upi :"code@rfijo"
}
let userTwo = userone
userTwo.email = "xyz@google.com"
console.log(user.userEmail)
console.log(userTwo.email);


