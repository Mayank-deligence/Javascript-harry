// // // closure is a function that bind together with its lexical Environement or function along with its lexical Scope 
// // // it is the refrence to variable
// // message="Good Global"
// // function hello1(){
// //    let message="Good Morning"
// //     // {
// //     //    let message="Good Afternoon"
// //         console.log("Hello 1: " + message)
// //     // }
// //     let c= function hello2(){
// //         console.log("I am C " + message)
// //     }
// //     return c;
// // }
// // c=hello1();
// // c();

// function init() {
//   var name = 'Mozilla'; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   name = "Mayank"
//   return displayName;
// }
// let c = init();
// c()


// function returnFunc() {
//     const x = () => {
//       let a = 1
//       console.log(a)
//       const y = () => {
//         // let a = 2
//         console.log(a)
//         const z = () => {
//           // let a = 3
//           console.log(a)
//         }
//         z()
//       }
//       a = 999
//       y()
//     }
//     return x
//   }
  
//   let a = returnFunc()
//   a()
  

function x(){
    // var i=1;
    // for (let i = 0; i <=5; i++) {
        
    //     setTimeout(() => {
    //         console.log(i)
    //     },i* 1000);
    // }
    for (var i = 0; i <=5; i++) {
        function close(i){

            setTimeout(() => {
                console.log(i)
            },i* 1000);
        }
        close(i)
    }
    console.log("ha pdhai chl ri h")
}
  x();  