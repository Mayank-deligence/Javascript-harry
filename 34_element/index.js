const changeBgRed = () => {
    document.body.firstElementChild.style.background = "red"
  }
  
  let b = document.body
  console.log("First child of b is: ", b.firstChild)
  console.log("First Element child of b is: ", b.firstElementChild)
  console.log("next element child is : ",b.nextElementSibling);
  console.log("Last element child is : ",b.lastElementChild);
  console.log("parent element child is : ",b.parentElement);