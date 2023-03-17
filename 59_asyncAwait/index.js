async function mayank() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 degree")
        }, 2000)
    })
    let bangloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 degree")
        }, 5000)
    })
    // delhiWeather.then(alert)
    // bangloreWeather.then(alert)
    console.log("Fethching Delhi weather please wait... ")
    let delhiW=await delhiWeather
    console.log("Fethched Delhi weather : "+ delhiW)

    console.log("Fethching Banglore weather please wait... ")
    let bangloreW=await bangloreWeather
    console.log("Fethched Banglore weather : "+ bangloreW)

    return[delhiW,bangloreW]


}
const cherry=async()=>{
    console.log("hey i am cherry and i am not waiting ")
}
const main=async()=>{

    console.log("Welcome to weather control room")
    let a=await mayank();
    let b= await cherry();
    // a.then((value)=>{
    //     console.log(value)
    // })
}
main();



// console.log(a);
// async function mayank(){
//     return 5
// }
// mayank().then((x)=>{
//     alert(x)
// })