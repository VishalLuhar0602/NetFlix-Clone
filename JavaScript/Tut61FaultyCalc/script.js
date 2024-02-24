let random = Math.random();
let a = prompt("Enter First Number");
let c = prompt("Enter Operation");
let b = prompt("Enter Second Number");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if(random > 0.1){
    // perform correct operation
    console.log(`The result is ${a} ${c} ${b}`);
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}

else{
    // perform wrong operation
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}