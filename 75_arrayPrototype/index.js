let a={
    name1:"Mayank",
    language:"Javascript",
        run:()=>{
            alert("Self Run")
    }
}
console.log(a)
let p={
    run:()=>{
        alert("Run")
    }
}
p.__proto__={
    name:"sonu"
}
a.__proto__=p
a.run()
console.log(a.name)