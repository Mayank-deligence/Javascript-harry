let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
        // console.log("I am a promise and i am fullfilled")
        resolve(true)
    }, 5000)
})
// console.log(p1);
let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
        // console.log("I am a promise and i am rejected")
        reject(new Error("I am an error"))
    }, 5000)
})
// console.log(p1, p2);
// p1.then(alert);
// to get the value
p1.then((value) => {
    console.log(value)
})
// to catch the error
// p2.catch((error)=>{
//     console.log("some error occured in p2")
// })
p2.then((error)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})