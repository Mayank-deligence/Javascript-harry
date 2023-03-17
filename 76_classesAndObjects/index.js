class RailwayForm {
    submit() {
        alert(this.name + " : Your Form Submitted for train number " + this.trainNo)
    }
    cancel() {
        alert(this.name + " : This form is Cancelled for train number " + this.trainNo)
    }
    fill(givenName,trainNo){
        this.name=givenName
        this.trainNo=trainNo
    }
}
let mayank = new RailwayForm()
mayank.fill("Mayank",192412)
let arpit = new RailwayForm()
let arpit2 = new RailwayForm()

arpit.fill("Arpit",192420)
arpit2.fill("Arpit2",192111)


mayank.submit()
arpit.submit()
arpit2.submit()
arpit.cancel()