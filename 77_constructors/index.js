// class RailwayForm {

//     constructor(givenName,trainNo){
//         console.log("CONSTRUCTOR called...." + givenName + " " + trainNo)
//         this.name=givenName
//         this.trainNo=trainNo
//     }
    
//     submit() {
//         alert(this.name + " : Your Form Submitted for train number " + this.trainNo)
//     }
//     cancel() {
//         alert(this.name + " : This form is Cancelled for train number " + this.trainNo)
//     }
    
// }
// let mayank = new RailwayForm("mayank",192222)
// // mayank.fill()
// let arpit = new RailwayForm("Arpit",192420)
// let arpit2 = new RailwayForm("Arpit",192111)

// // arpit.fill("Arpit",192420)
// // arpit2.fill("Arpit2",192111)


// mayank.submit()
// arpit.submit()
// arpit2.submit()
// arpit.cancel()

class RailwayForm {

    constructor(givenName,trainNo,address){
        console.log("CONSTRUCTOR called...." + givenName + " " + trainNo)
        this.name=givenName
        this.trainNo=trainNo
        this.address=address
    }
    
    preview() {
        alert(this.name + " : Your Form is for train number " + this.trainNo  + " and your address is " + this.address)
    }
    submit() {
        alert(this.name + " : Your Form Submitted for train number " + this.trainNo)
    }
    cancel() {
        alert(this.name + " : This form is Cancelled for train number " + this.trainNo)
        this.trainNo=0;
    }
    
}

let mayankForm=new RailwayForm("Mayank Somani",1134960,"17/12 Nehru Vihar 311001")
mayankForm.preview()
mayankForm.submit()
mayankForm.cancel()
mayankForm.preview()
