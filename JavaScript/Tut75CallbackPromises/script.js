console.log("Harry is a hacker");
console.log("Rohan is a hecker");

setTimeout(() => {
    console.log("I am inside settimeout");
}, 2000);

setTimeout(() => {
    console.log("I am inside settimeout 2");
}, 0);

console.log("The end");

const fn = () => {
    console.log("Nothing");
}

const callback = (arg , fn) => {
    console.log(arg);
    fn();
}

const loadscript = (src , callback) => {
    let sc = document.createElement("script");
    screen.src = src;
    sc.onload = callback("Harry", fn);
    document.head.append(sc);
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )

