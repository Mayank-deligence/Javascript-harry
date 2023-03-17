const f = () => {

    try {
        let a = 0;
        // console.log(program)
        console.log("Program ran successfully")
        return
    } catch (error) {
        console.log("This is an error")
        console.log(p)

    }
    finally {
        console.log("I am a goood boy")
    }//finally runs in all the cases even if there is error or not in any of the try catch block 
}
f();
console.log("End")