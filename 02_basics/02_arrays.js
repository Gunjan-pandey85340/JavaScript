const marvel_heros = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

// marvel_heros.push(dc)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allH = marvel_heros.concat(dc)
// console.log(allH);

//spread operator for merge array
const all_newH = [...marvel_heros,...dc]
// console.log(all_newH);

const arr1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realArr = arr1.flat(Infinity)
console.log(realArr);


console.log(Array.isArray("Gunjan"))

console.log(Array.from("Gunjan"))
console.log(Array.from({name:"Gunjan"})) //interesting

let score = 100
let score1 = 200
let score2 = 300
console.log(Array.of(score, score1, score2));
