// for of loop

const arr = [1,2,3, 4, 5, 6]
for(const num of arr){
    console.log(num);
}

const str = "hello coders!!"
for(greet of str){
    console.log(`Each char is ${greet}`);
    
}

// Maps
const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('fr' , "France")
// map.set('IN' , "India") they are known for there unique values
console.log(map);

for(const i of map){
    console.log(i); // Array
    
}

for(const [key, value] of map){ 
    console.log(key ,':',value); // destucture of array
}

// const myObject = { // error will come if we apply for of loop on objects like this way
//     'game1' :'NFS',
//     'game2' :'spiderman'
// }
// for(const [key ,value] of myObject){
//     console.log(key ,':',value); //ERROR ***myObject is not iterable
// }

