// due to hoisting it will run successfully
console.log(a)
greet()
function greet(){
    console.log("Good Morning")
}
// var greet =function(){
    //     console.log("Good Morning")
// }
// const greet=()=>{
//     console.log("Good Morning")
// }
// function expressions and class expressions can not be hoisted
let a=9// it goes in temporal dead jone 
// in case of let and const hoisting is not there
// var a=9; // declaration hoisted to the top but initialization does not
console.log(a)
