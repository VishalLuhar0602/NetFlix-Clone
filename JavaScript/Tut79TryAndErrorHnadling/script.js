let a = prompt("Enter First Number ");

let b = prompt("Enter Second Number ");

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry bhai this is not allowed ");
}

let sum = parseInt(a) + parseInt(b);


function main(){

    let x = 1;

    try {

        console.log("The Sum is ",sum * x);
        return true;
        
    } catch (error) {

        console.log("Error Aa Gaya Bhai ");
        return false;
    
    }
    finally{
        console.log("Files Are Being Closed And Ab Conaction is Being Closed ");
    }
}

let c = main();
