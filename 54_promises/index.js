let promise=new Promise((resolve, reject) => {
    alert("I am an alert in promise");
    resolve(22)
})

console.log("Hello");
setTimeout(function(){
    console.log("Hello in 3 seconds");

},3000)
console.log("My name is "+"Mayank")
console.log(promise);
// promises are used basically for parallel execution