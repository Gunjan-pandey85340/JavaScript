const userEmail = "h@zxcv.ai"
// const userEmail = "" //dont have user email
if(userEmail){
    console.log("got user email");
    
}else{
    console.log("dont have user email");
    
}

//falsy value 
// false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy value
// "0" ,'false' , " " , [] , {}, function(){}

// if (userEmail.length === 0){
//     console.log("array is empty :");
    
// }


// false == 0 //true
// false == '' //true
// 0 ==''//true

//*******nullish coalescing operator (??) : null defined*************

let val1;
val1 = 5 ?? 10 //5
val2 = null ?? 10; // 10
val3 = undefined ?? 15 //15
val4 = null ?? 10 ?? 20 //10
console.log(val1);

// terniary operator 
// condition ? true :false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
;

