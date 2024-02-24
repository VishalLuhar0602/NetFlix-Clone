console.log("JavaScript Randome Color GEnarator")

let boxes = document.querySelector(".container").children;
console.log(boxes)

function getRandomcolor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1} , ${val2} , ${val3})`;
}

// Array.from(boxes).forEach(e=>{
//     e.style.backgroundColor = getRandomcolor()
//     e.style.color = getRandomcolor()
// })

setInterval(() => {
    document.querySelector(".box1").style.backgroundColor = getRandomcolor();
}, 500);

setInterval(() => {
    document.querySelector(".box2").style.backgroundColor = getRandomcolor();
}, 500);

setInterval(() => {
    document.querySelector(".box3").style.backgroundColor = getRandomcolor();
}, 500);

setInterval(() => {
    document.querySelector(".box4").style.backgroundColor = getRandomcolor();
}, 500);


setInterval(() => {
    document.querySelector(".box5").style.backgroundColor = getRandomcolor();
}, 500);