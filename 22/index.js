// Exercise 1: Guess the number
let random_num = Math.floor(Math.random(1, 100) * 100) 
  
// console.log(random_num)

var n = 0;
function guess_num(){
  n = n +  1
  num = prompt("Enter a number")
  console.log(num)
  if ( num == random_num ){
    console.log("Guess is correct")
    console.log(n)
    return n;
    
  }else{
    if ( num < random_num ){
      console.log("Entered number is less than random number")
    }else{
      console.log("Entered number is greater than random number")
      
    } 
    guess_num();
  }
}

guess_num();
let score = (100 - n)
console.log(`Your score is ${score}`)
