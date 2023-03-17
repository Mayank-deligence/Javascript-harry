class Animal{
    constructor(name){
        this._name=name
    }
    fly(){
        // alert("Mai udd rha hu ")
        console.log("Mai udd rha hu ")
    }
    get name(){
        return this._name
    }
    set name(newName){
         this._name=newName
    }
}
class Rabbit extends Animal{
    eatCarrot(){
        console.log("eating carrot")

    }
}
let a = new Rabbit("Tuffy")
a.fly()
console.log(a.name)
a.name="jacky"
console.log(a.name)
let c=56

console.log(a instanceof Animal)
console.log(a instanceof Rabbit)

console.log(c instanceof Animal)