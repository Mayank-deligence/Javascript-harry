const sayHello= (name, greeting)=>console.log(greeting + " " + name)

const x={
    name:"Mayank",
    role:"Js Developer",
    experience:22,
    show:function(){
        
        setTimeout(() => {
            
            console.log(`The name is ${this.name}\nThe role is ${this.role}`)
    }, 1000);
}
}
// sayHello("Mayank","Good Morning")
// console.log(x.name,"is having " + x.experience + " years of experience")
x.show()