// let p1 = new Promise((resolve, reject) => {
//     console.log("Promise is pending")
//     setTimeout(() => {
//         console.log("Resolved after 2 seconds")
//         resolve(56)
//     }, 2000)
// })
// p1.then((value) => {
//     console.log(value)
//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Promise 2")
//         }, 2000)
//     })
//     return p2
// }).then((value) => {
//     console.log("we are done ")
//     return 2
// }).then((value) => {
//     console.log("Now we are pkka done ")
// })
const loadScript=(src)=>{
    return new Promise((resolve,reject) => {
        
        let script=document.createElement("script");
        script.type="text/javascript";
        script.src=src
        document.body.appendChild(script)
        script.onload=()=>{
            // console.log("Script Loaded")
            resolve("script has been loaded sirji ");
        }
        script.onerror=()=>{
            reject(0)}
    })
}
let p1 =loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
p1.then((value)=>{
    console.log(value)
    return loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")
}).then((value) => {
    console.log("Second script ready")
}).catch(()=>{
    console.log("We are sorry but we are having problems loading this script")
})