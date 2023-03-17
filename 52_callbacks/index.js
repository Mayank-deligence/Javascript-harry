// // synchronous programming line by line execute ho jaate h
// let a=prompt("what is your name ?");
// let b=prompt("what is your age ?");
// let c=prompt("what is your favourite colour ?")
// console.log(a + " is " + b + " years old and has " + c + " favorite color.   ");

// // Asynchronous programming certain set of time interval pr hi hnge execute mtlb execute tohh hnge kb hnge ptaa ni 
// console.log("start")
// setTimeout(function(){
//     console.log("hey i am good");
// },3000)
// console.log("end")

// callbacks
function loadScript(src, callback) {
    var script = document.createElement("script");
    script.onload = function () {
        console.log("Loaded script with SRC: " + src)
        callback(null,src);
    }
    script.onerror = function () {
        console.log("error loading script with src" + src)
        callback(new Error("Src got error"))
    }
    script.src = src;
    document.body.appendChild(script);
}
function hello(error,src) {
    if(error){
        console.log(error);
        return
    }
    alert("Hello Mayank kese ho " + src);
}
function goodMorning(error,src) {
    if(error){
        console.log(error);
        return
    }
    alert(" Good Morning " + src);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodMorning)     