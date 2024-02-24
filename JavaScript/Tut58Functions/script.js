function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your course is good too!")
}

nice("Vishal");
nice("Nilesh");

function sum(a, b, c=3){
    console.log(a, b, c);
    return a + b + c;
}

result1 = sum(3, 2);
result2 = sum(7, 5);
result3 = sum(3, 13, 1);

console.log("The sum of these numbers is: ", result1);
console.log("The sum of these numbers is: ", result2);
console.log("The sum of these numbers is: ", result3);

const func1 = (x) => {
    console.log("I am An Arrow Function ",x);
}

func1(23);
func1(90);
func1(45);
