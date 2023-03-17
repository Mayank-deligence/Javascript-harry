console.log(document.cookie)
document.cookie="name=mayank0401299"
document.cookie="name2=mayank0401299"
document.cookie="name=mayank"
let key=prompt("Enter your key")
let value=prompt("Enter your value")
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)