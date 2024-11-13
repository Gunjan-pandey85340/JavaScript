let score = "33abc"
let score1 = null


console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33
//"33abc" => Nan
//true => 1;false =>0

let islogged = ""
let booleanisloggedin = Boolean(islogged)
console.log(booleanisloggedin);

// 1 = > true
// 0=> false
//"gunj" => true
//"" => false

let someNum = 33
let StringNum = String(someNum)
console.log(typeof StringNum); 

//*************Operations*************************/

let value  = 3
let negValue = -value
console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%3);
// console.log(2**3);


let str1 = "hello"
let str2 = "there"
let str3 = str1+str2
console.log(str3);



// more on ecma toprimitive----
// console.log("1"+2); //12
// console.log(1+"2"); //12
// console.log("1"+2+2); //122
// console.log(1+2+"2"); //32

// console.log(true); // true
// console.log(+true); // 1
// //console.log(true+); // unexpected error 
// console.log(+""); // 0

// let num1, num2 , nume3

// num1 = num2 = num3 = 2+2 // not readable do not write this way

let gameCounter = 100
++gameCounter; // prefix n postfix opr
console.log(gameCounter); // 101






