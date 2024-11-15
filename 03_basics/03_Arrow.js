const user = {
    username : "sammy",
    price:999,
    welcomeMsg : function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this); // this ref to current contest 
        
    }

}

// user.welcomeMsg()
// user.username="sam"
// user.welcomeMsg()
// console.log(this); // o/p => {} 

// function one(){
//     console.log(this);
    
// }
// one()


const fun =  () => { // arrow func
    let username = "kitty"
    // console.log(this.username);
    
}
fun()

//syntax 
// const addTwo = (num1, num2) => {
//     return num1+num2 // explicit return
// }
// console.log(addTwo(3,4));


// const addTwo = (num1, num2) =>  num1+num2 //implicit return 
// const addTwo = (num1 ,num2) => (num1+num2) 


//object return
const addTwo = (num1 ,num2) => ({username:"kitty"})
console.log(addTwo(3,4));

