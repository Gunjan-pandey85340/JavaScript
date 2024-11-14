// singleton 
// Object.create
// object literals


const mySym = Symbol("Key1") //interesting

const JsUser = {
    name : "SuperHero",
    "full name ":"Gunjan Pandey",
    [mySym] : "mykey1",
    age:21,
    location : "Mathura",
    email:"xyz@google.com",
    isLoggedIn :false,
    lastLoginDays :["Monday","Saturday"]
}
 //how to access 
// console.log(JsUser.email); //m1
// console.log(JsUser["email"]); //m2
// console.log(JsUser[mySym]); //string but we need sym so write it in squre brackets


JsUser.email = "dsayg@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email ="bdh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
    
}

JsUser.greetingTwo = function(){
    console.log(`hello js user${this.name}`);
    
}
// console.log(JsUser.greeting); //undefined (anonymous)
console.log(JsUser.greeting());  
console.log(JsUser.greetingTwo());


