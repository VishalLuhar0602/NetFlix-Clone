let button = document.getElementById("btn");

button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your clicking !"
})

button.addEventListener("contextmenu",()=>{
    alert("Dont hack us by right clicking please");
})

document.addEventListener("keydown",(e)=>{
    console.log(e.key);
})