const name = "gunjan"
const repoCount = 50
//console.log(name+repoCount + " Value" );
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('temple-run')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,-5)
console.log(anotherString)

const newstr = "   gdsuh   "
console.log(newstr);
console.log(newstr.trim()); // remove extra space --mdn

const url = "https://xyz.com//xyz%20sharma"
console.log(url.replace('%20' , '-')) // replace 20 with -

console.log(url.includes('xyz')) 

console.log(gameName.split('-'));





