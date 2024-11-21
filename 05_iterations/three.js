//for in loop 

const Object = {
    js:'JS',
    cpp :'C++',
    rb:'ruby',
    swift:'swift by apple'
}
for(const key in Object){
    console.log(`${key} shortcut is for ${Object[key]}`); //
    
}

for(const key in Object){
    console.log(Object[key]); //value
    
}
for(const key in Object){
    console.log(key); //key
    
}



//*******************For Each loop*********************************/
const coding = ["js","ruby","python","cpp"]
// coding.forEach(  function (item) {
//     console.log(item);
    
// })


// coding.forEach( (value) => {
//     console.log(value);
    
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach ( (item,index ,arr)=> {
//     console.log(item , index ,arr);
    
// })


const myCoding = [
    {
        langName : "JS",
        langFile :"java"
    },
    {
        langName : "CSS",
        langFile :"java"
    },
    {
        langName : "Ruby",
        langFile :"java"
    }
]
myCoding.forEach( (item)=> {
        console.log(item.langName);
        
})