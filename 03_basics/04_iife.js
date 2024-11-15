// Immediately Invoked Function Expressions (IIFE)

(function data(){
    //named iife
    console.log(`DB CONNECTED`);
    
})();

//global scope created problems sometimes so to overcome this we have to use iife

( (name) => {
    console.log(`DB CONNECTED ${name}`);
    
} )('kitty');//** semicolon is imp..