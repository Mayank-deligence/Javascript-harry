let key=prompt("Enter Key you want to set");
let value =prompt("Enter Value you want to set");
localStorage.setItem(key,value);
console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

if(key=="blue" || key=="orange"){
    localStorage.removeItem(key)
}
if(key==0){
    localStorage.clear()
}