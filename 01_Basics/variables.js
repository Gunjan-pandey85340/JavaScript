const accountId = 144553 //not changeable, this is used to declare the constants only
let accountEmail = "xyz@google.com" //scope is limited
var accountPassword ="1234"
accountCity = "Jaipur" 
// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword ="123456"
accountCity = "Mathura"
let accountState //undefined value

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
// console.log(accountId);
 

/*
prefer not to use var 
because of issue in block scope and functional scope
*/