function getAge(){
    return 150;
}

function utility(name = "Vishal" , age = getAge()){
    console.log(name , " ", age);
}

utility();


function solve(value = {age : 15, wt : 45, ht : 34}){
    console.log("Hello jee", value);
}

solve();


function sayName(fname = "Nilesh" , lname = fname.toUpperCase()){
    console.log("My name is : ", fname," ",lname);
}

sayName("Vishal");


class Human{
    // properties
    age; //public
    #wt = 80; //private
    ht = 180;

    // constructor
    constructor(newAge, newWeight){
        this.age = newAge;
        this.#wt = newWeight;
    }

    // behavioue

    walking(){
        console.log("I am wallking ", this.#wt);
    }

    running(){
        console.log("I am running");
    }

    get fetchWeight(){
        return this.#wt;
    }

    set takeWeight(val){
        this.#wt = val;
    }
}

let obj = new Human(50,78);
console.log(obj.fetchWeight);

obj.walking();