function printnumber(num){
    console.log("printing A number : ",num);
}

printnumber(5);

function getaverage(num1,num2){
    let avg = (num1 + num2)/2;
    console.log("Printing average : ",avg);
}

getaverage(3,7);

function printcounting(){
    for(let i=1; i<=100; i++){
        console.log(i);
    }
}

printcounting();

function fullname(firstname, lastname){
    let fullname = firstname + " " + lastname;
    return fullname;

    // unreachable code
    // let a = 10;
    // let b = 100;
    // console.log(a+b);
}

let fullName = fullname("Vishal", "Luhar");
console.log("Printing Full name : ",fullName);

const getMultiplication = function(a, b){
    return a*b;
}

let ans = getMultiplication(2,20);
console.log(ans);

let getExp = (x,y) => {
    let ans = x**y;
    return ans;
}

console.log(getExp(2,5));