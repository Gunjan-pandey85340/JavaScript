// if

const isUserloggedIn = true;
const temperature = 41

// if(temperature<50){
//     console.log("less than 50");
    
// }else{
//     console.log("temp is greater than 50");
    
// }

// const score = 200
// if(score > 100){
//     const power ="fly" 
//     console.log(`user power:${power}`);
    
// }

// if(2 !=="2"){
//     console.log("excuted"); //true
    
// }


const balance = 1000
if(balance > 500) console.log("test"); //implicit scope


//nesting 
// if(balance < 500){
//     console.log("less than");
    
// }else if(balance <750){
//     console.log("less than 750");
    
// }else if(balance < 900){
//     console.log("less than 900");
    
// }else{
//     console.log("less than 1200");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedFromEmail = true
if(userLoggedIn && debitCard  && 2==3){
    console.log("allow to buy:");
    
}
if(loggedInFromGoogle || loggedFromEmail){
    console.log("user logged in:");
    
}