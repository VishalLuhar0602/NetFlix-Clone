let students = ["Vishal" , "Mihir" , "Aniket" , "Mahendra" , "Yug" , "Meet" , "Shravan" , "Girish" , "Hitesh" , "Abhishek" , "Shailesh" , "Havesh" , "Mukesh" , "Dilip"]

let House = [];

for (const student of students) {

    if(student.length < 6){
        House.push("GarudDwar");
    }

    else if(student.length < 8){
        House.push("NagShakti");
    }

    else if(student.length < 12){
        House.push("CheelGhat");
    }

    else{
        House.push("MahenatKash");
    }  
}

console.log(House);