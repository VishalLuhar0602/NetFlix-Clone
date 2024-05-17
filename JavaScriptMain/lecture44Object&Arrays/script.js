let obj = {
    name : "Vishal",
    age : 19,
    weight : 45,
    height : "5ft 10in",
    greet : function(){
        console.log("Hello jee kaise ho saare");
    } 
};

for(let key in obj){
    console.log(key, " ", obj[key]);
}

console.log(obj);
obj.greet();

console.log(typeof(obj));

// let obj2 = obj;

// creation of arrays
// let arr = [1,2,3,4,5];
// array constructor
let brr = new Array('Vishal',100,true);
brr.push('Luhar');
brr.pop();

brr.shift();
brr.unshift('Vishal Luhar');
brr.push(20);
brr.push(40);
brr.push(70);

brr.splice(1,2,'Nilesh');

console.log(brr);


// let arr = [10,20,30];

// arr.map((number,index) =>{
//     console.log(number);
//     console.log(index);
// })


// let arr = [10,20,30,11,21,44,51];

// let evenArray = arr.filter((number) =>{
//     if(number % 2 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// console.log(evenArray);


// let arr = [1,2,'Vishal','Nilesh',null];

// let ans = arr.filter((value) =>{
//     if(typeof(value) == 'string'){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// console.log(ans);


// let arr = [10,20,30,40];

// let ans = arr.reduce((acc,curr) =>{
//     return acc + curr;
// },0);

// console.log(ans);


// let arr = [3,4,5,1,2];
// arr.sort();

// console.log(arr);

// console.log(arr.indexOf(3));


// let arr = [10,20,30,40];

// let length = arr.length;
// console.log("Length : ",length);

// for(let index = 0; index < length; index++){
//     console.log(arr[index]);
// }

// arr.forEach((value, index) => {
//     console.log("Number: ",value, " Index :",index);
// })


// let arr = [10,20,30,40];

// for(let value of arr){
//     console.log(value);
// }

// let fullname = "Vishal";

// for(let val of fullname){
//     console.log(val);
// }


let arr = [10,20,30,40];

let getSum = (arr) => {
    let sum = 0;
    arr.forEach((value) =>{
        sum = sum + value;
    })
    return sum;
}

let total = getSum(arr);
console.log(total); 