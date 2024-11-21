// // const coding = ["js","ruby","python","cpp"]

// const value = coding.forEach( (item) => {
//     // console.log(item); //undefined
//     // return item // undefined
    
// } )
// console.log(value);

// //**both same  */
// // const myNums = [1 ,2,3, 4, 5, 6, 7, 8 ,9 ,10]
// // const newNums = myNums.filter((num )=>  num > 4)
// // console.log(newNums);

// const newNums = []
// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }

// })
// console.log(newNums);
// //**************** */

const products = [
    {
        id: 1,
        name: 'Apple iPhone 15 Pro Max',
        price: 1299,
        category: 'Smartphones'
    },
    {
        id: 2, 
        name: 'Samsung Galaxy S24 Ultra',
        price: 1199,
        category: 'Smartphones'
    },
    {
        id: 3,
        name: 'Dell XPS 15',
        price: 1499,
        category: 'Laptops'
    },
    {
        id: 4, 
        name: 'MacBook Pro 16"',
        price: 1999,
        category: 'Laptops'
    },
    {
        id: 5,
        name: 'Sony PlayStation 5',
        price: 499,
        category: 'Gaming Consoles'
    },
    {
        id: 6,
        name: 'Microsoft Xbox Series X',
        price: 499,
        category: 'Gaming Consoles'
    },
    {
        id: 7,
        name: 'Nintendo Switch OLED',
        price: 349,
        category: 'Gaming Consoles'
    },
    {
        id: 8,
        name: 'Apple Watch Series 9',
        price: 399,
        category: 'Smartwatches'
    },
    {
        id: 9, 
        name: 'Samsung Galaxy Watch 6 Classic',
        price: 349,
        category: 'Smartwatches'
    },
    {
        id: 10,
        name: 'Sony WH-1000XM5',
        price: 399,
        category: 'Headphones'
    },
    {
        id: 11,
        name: 'Bose QuietComfort 45',
        price: 329,
        category: 'Headphones'
    },
    {
        id: 12,
        name: 'Apple AirPods Pro (2nd Gen)',
        price: 249,
        category: 'Earbuds'
    },
    {
        id: 13,
        name: 'Sony WF-1000XM5',
        price: 299,
        category: 'Earbuds'
    },
    {
        id: 14,
        name: 'LG OLED C3 Series',
        price: 1299,
        category: 'TVs'
    },
    {
        id: 15,
        name: 'Samsung Neo QLED 8K',
        price: 2999,
        category: 'TVs'
    },
    {
        id: 16,
        name: 'Nikon Z9',
        price: 5999,
        category: 'Cameras'
    },
    {
        id: 17,
        name: 'Canon EOS R5',
        price: 3999,
        category: 'Cameras'
    },
    {
        id: 18,
        name: 'Dyson V15 Detect Absolute',
        price: 699,
        category: 'Home Appliances'
    },
    {
        id: 19,
        name: 'iRobot Roomba j7+',
        price: 799,
        category: 'Home Appliances'
    },
    {
        id: 20,
        name: 'Instant Pot Duo Nova',
        price: 99,
        category: 'Kitchen Appliances'
    }
];

const user = products.filter( (laptop) => laptop.id == 20)
const use = products.filter( (laptop) => { return laptop.id >= 10})
// console.log(user);
console.log(use);

const myNumber = [1,2,3,4,5,6,7,8,9,10] // ADD 10 in evrey number
const newNUm = myNumber.map( (num)=> { return num+10} )
// console.log(newNUm);


//**** chaining ***********/
const newNums = myNumber
                        .map((num)=> num*10)
                        .map( (num) => num+1 )
                        .filter ( (num) => num>=40)
console.log(newNums);
