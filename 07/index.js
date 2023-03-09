let a=prompt("Hey whats your Age ?");
a=Number.parseInt(a) // converting a string to number;
if(a<0){
  alert("This is a invalid age");
}else if(a<9){
  alert("You are a kid ")
}else if(a<18 && a>=9){
  alert("You are a kid and you can think of driving after 18 ")
}else{
  alert("you can drive as you are above 18");
}
// ternary operators
console.log("you can ",a<18? "not drive " :"drive")
// console.log(typeof a);
// switch case
const action = "say_hello";
switch (action) {
  case "say_hello": {
    const message = "hello";
    console.log(message);
    break;
  }
  case "say_hi": {
    const message = "hi";
    console.log(message);
    break;
  }
  default: {
    console.log("Empty action received.");
  }
}