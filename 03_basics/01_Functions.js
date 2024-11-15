function sayMyName(){
    console.log("g");
    console.log("u");
    console.log("n");
    console.log("j");
    console.log("a");
    console.log("n");
}
// sayMyName()

// function addTwoNum(num1 , num2) { 
//    console.log(num1 + num2);
// }


function addTwoNum(num1 , num2) { 
//    let result = num1 + num2
//    return result
//    console.log("xsckj"); // after return this line is not executed
    return num1+num2
   
}
const result = addTwoNum(3,5) //arguments
console.log("Result : " , result); 


function loginUserMsg(username = "sam"){
    if(username === undefined){
        console.log(" please enter a username ");
        return 
    }
    return `${username} just logged in`
}
// console.log(loginUserMsg("hello"))
// console.log(loginUserMsg()) //undefined not null 




// function calculateCartPrice(...num1){ //... rest operator 
//     return num1 
// }



function calculateCartPrice(val1,val2,...num1){ //... rest operator 
    return num1 
}
// console.log(calculateCartPrice(200,400,500,2000)); 

const user ={
    username:"sam",
    prices:199
}

function handleObject(anyObj){
    console.log(`username is ${anyObj.username} and the price is ${anyObj.price}`);
    
}
// handleObject(user)
handleObject({
    username : "sam",
    price:399
})

const myNewArr = [200,40,100,6000]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200,400,500,1000]));

