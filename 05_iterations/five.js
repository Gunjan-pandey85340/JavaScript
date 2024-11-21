// reduce for shopping cart

const arr = [1 ,2, 3, 4]
const initialValue = 0;
// const myTotal = arr.reduce(function (acc,currval){
//     console.log(`acc : ${acc} and currval :${currval}`);
//     return acc + currval
// },0) // 0 is initial value 
// console.log(myTotal);


//using arrow function
const myTotal = arr.reduce( (acc,curr) => acc+curr , 0)
// console.log(myTotal);
 

const shoppingCart = [
    {
        itemName : "JS course",
        price : 2999
    },
    {
        itemName : "python",
        price : 299
    },
    {
        itemName : "Java",
        price : 4999
    },
    {
        itemName : "html course",
        price : 3999
    },
    {
        itemName : "css course",
        price : 5999
    },
    {
        itemName : "data science course",
        price : 69999
    },
    {
        itemName : "mobile dev course",
        price : 29999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item)=> acc + item.price,0)
console.log(priceToPay);
