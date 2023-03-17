let p1=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("value 1")
    },11000)
})
let p2=new Promise((resolve, reject) => {
    setTimeout(()=>{
        // resolve("value 2")
        reject(new Error("Error"));
    },2000)
})
let p3=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("value 3")
    },3000)
})
// p1.then((value)=>{
//     console.log(value)
// })
// p2.then((value)=>{
//     console.log(value)
// })
// p3.then((value)=>{
//     console.log(value)
// })


// let promiseAll= Promise.all([p1,p2,p3])
// let promiseAll= Promise.allSettled([p1,p2,p3])
// let promiseAll= Promise.race([p1,p2,p3])// the one who got resolved first will be printed
// let promiseAll= Promise.any([p1,p2,p3])
// let promiseAll= Promise.resolve(6)
let promiseAll= Promise.reject(new Error("hey Mayank"))




promiseAll.then((value)=>{
    console.log(value)
})