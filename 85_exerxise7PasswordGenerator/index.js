class Password{
    constructor(){
        console.log("Welcome To Password Generator")
        this.pass = ""

    }
    generatePassword(len){
        let chars= "abcdefghijklmnopqrstuvwxyz"
        let numbers="1234567890"
        let specialChars="!@#$%&*^()"
        if(len < 5){
            console.log("Your password should be atleast 5 characters long")
        }else{
            let i = 0
            while (i < len) {
              this.pass += chars[Math.floor(Math.random() * chars.length)]
              this.pass += numbers[Math.floor(Math.random() * numbers.length)]
              this.pass += specialChars[Math.floor(Math.random() * specialChars.length)]
              i += 3
            }
            this.pass = this.pass.substr(0, len)
            return this.pass
        }
    }
}

let p= new Password();
console.log(p.generatePassword(6))