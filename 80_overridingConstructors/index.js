// method overriding
class Employee{
    constructor(name){
        console.log(`${name} Employee's constructor is here `)
        this.name=name;
    }
    login(){
        console.log(`Employee has logged in`)
    }
    logout(){
        console.log(`Employee has logged out`)
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves - Auto approved `)
    }
}

class Programmer extends Employee{

    constructor(name){
        super(name)
        console.log(`${name} Programmer's constructor is here. This is a newly written constructor `)
        this.name=name;
    }
    // without making constructor it is invoked
    // constructor(...args){
    //     super(...args)
    // }
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees`)
    }
    requestLeaves(leaves){
        super.requestLeaves(4)
        console.log("One extra is granted")
        // console.log(`Employee has requested ${leaves+1} leaves (One extra)`)
    }
}
let e=new Programmer("Mayank")
e.login()
e.requestLeaves(3)