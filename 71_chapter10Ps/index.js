let url = "https://kontests.net/api/v1/all"
// const imageUrls = [
//     "https://media.foundit.in/career-advice/wp-content/uploads/2021/10/Coding-and-programming-interview-questions.jpg",
//     "https://media.foundit.in/career-advice/wp-content/uploads/2021/10/Coding-and-programming-interview-questions-2.jpg",
//     "https://media.foundit.in/career-advice/wp-content/uploads/2021/10/Coding-and-programming-interview-questions-3.jpg"
//   ];
let response = fetch(url)
response.then((v) => {
    return v.json()
}).then((contests) => {
    console.log(contests)
    ihtml = ""
    for (item in contests) {
        console.log(contests[item])
        ihtml += `
        <div class="card mx-4 my-2" style="width: 20rem;">
        <img src="https://media.foundit.in/career-advice/wp-content/uploads/2021/10/Coding-and-programming-interview-questions.jpg" class="card-img-top" alt="...">
        <div class="card-body ">
          <h5 class="card-title">${contests[item].name}</h5>
          <p class="card-text"> Status is ${contests[item].status} and site is ${contests[item].site}</p>
          <p class="card-text"> In 24 Hours? ${contests[item].in_24_hours} </p>
          <p> Starts at :${contests[item].start_time}
          <p> Ends at :${contests[item].end_time}
          <a href="${contests[item].url}" class="btn btn-primary my-4" >Visit Contest</a>
        </div>
      </div>
        `
    }

    cardContainer.innerHTML = ihtml
})

// notes app
// let n = localStorage.getItem("note")
// alert("your note is " + n)
// let a = prompt("Enter your note")
// if (a) {
//     localStorage.setItem("note", a)

// }
// let c = confirm("Do you want to delete your note ")
// if (c) {
//     localStorage.removeItem("note")
//     alert("Note deleted successfully!")
// }