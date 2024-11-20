// for loop


for(let i = 0 ;i< 10 ;i++){
    const element = i;
}

for(let i = 0 ;i <= 10 ;i++){
    console.log(`outer loop value:${i}`);
    for(let j  = 0;j<= 10;j++){
        console.log(`inner loop value :${j}`);
        
    }
}

//break and continue 

for (let index = 1; index <= 20; index++) {
    if (i == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`value of i is ${i}`);
}

for (let index = 1; index <= 20; index++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of i is ${i}`);
}


// while or do- while loop
let idx = 0
while(idx <= 10){
    console.log(`Value of index is ${idx}`);
    idx = idx+2;
}


let arr = ['ironman','jenny','batsman']
let array = 0
while(array < arr.length){
    console.log(`Value is ${arr}`);
    array += 1
}

let score = 1
do{
    console.log(`Score is ${score}`);
    score++
    
}while (score<= 5)
