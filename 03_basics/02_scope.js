var c = 300
let a = 200
if (true){ 
    let a = 10
    const b = 20
    var c = 30 
    // c = 30 
    
}
// console.log(a); 
// console.log(b);
// console.log(c);

function one(){
    const username = "sam"

    function two(){
        const website = "chrome"
        // console.log(username);
        
    }
    // console.log(website);
    two()
}

// one()

if(true){
    const username = "sam"
    if(username ==="sam"){
        const website = "Utube"
        // console.log(username+website);
        
    }
    // console.log(website); //1 error scope is limited
    
}
// console.log(username); //2 error scope is limited


//+++++++++++++++++++++++++++++Interesting+++++++++++++++++++++++
// addone 1 type of declaration using fun in which we can access addone before declaration
addone(5);
function addone(value){
    return value+1
}

// addTwo is 2 type of declaration using fun in which we can not access 
//hoisting error will come
addTwo(5)
const addTwo = function(num){
    return num +2
}

