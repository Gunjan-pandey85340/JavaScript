// const tinderUser = new Object() // it is a singleton obj
const tinderUser = {} // both are same internally , it's a non-singleton-obj
tinderUser.id = "abc"
tinderUser.name ="sam"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email:"some@google.com",
    fullname: {
        userfullname :{
            firstname:"sam",
            lastname:"pan"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 =  {...obj1,...obj2} //spread opr
// const obj3 = Object.assign({},obj1,obj2) // {} => destination -- sources
// console.log(obj3);

const users = [
    {
        id:1,
        email:"g@gmail.com",

    },
    {

    },
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // imm.. => array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName : "js ",
    price:"999",
    courseInstructor : "hitesh"
}
// course.courseInstructor

const {courseInstructor : instructor} = course // object destructure
// console.log(courseInstructor);
console.log(instructor);

// const navBar = ({company}) => {

// } // object destructure
// navBar(company = "zxc")

// { //JSON
//     "name":"asdg",
//     "CourseName" :"js",
//     "price":999

// }

// [ //Array 
//     {},
//     {},
    
// ]











