let random=Math.floor(Math.random()*3);
let comp;
if(random==1){
    comp='s'
}
else if(random==2){
    comp='w'
}
else if(random==3){
    comp='g'
}

let user=prompt("Enter your choice ")
if(user=='s'){
    if(comp=='s'){
        alert("This is a tie")
    }else if(comp=='w'){
        alert("AMAZING you won!!!")
    }else if(comp=='g'){
        alert("You Lose")
    }
}else if(user=='w'){
    if(comp=='s'){
        alert("You Lose")
    }else if(comp=='w'){
        alert("This is a tie")
    }else if(comp=='g'){
        alert("AMAZING you won!!!")
    }
}else if(user=='g'){
    if(comp=='s'){
        alert("AMAZING you won!!!")
    }else if(comp=='w'){
        alert("You Lose")
    }else if(comp=='g'){
        alert("This is a tie")
    }
}else {
    prompt("Invalid Character!! Use small S,W or G only")
  }

//   let user = prompt("Enter S, W or G")
//   let cpuI = Math.floor(Math.random() * 3);
//   let cpu = ["S", "W", "G"][cpuI]
  
//   const match = (cpu, user)=>{
//     if(cpu === user){
//       return "Nobody"
//     }
//     else if(cpu === "S" && user==="W"){
//       return "cpu"
//     }
//     else if(cpu === "S" && user==="G"){
//       return "user"
//     }
//     else if(cpu === "G" && user==="W"){
//       return "user"
//     }
//     else if(cpu === "G" && user==="S"){
//       return "cpu"
//     }
//     else if(cpu === "W" && user==="S"){
//       return "user"
//     }
//     else if(cpu === "W" && user==="G"){
//       return "cpu"
//     }
//   }
//   let result = match(cpu, user)
//   document.write(`CPU:${cpu} <br> User:${user} <br>The winner is: ${result.toUpperCase()}` )