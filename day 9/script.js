document.getElementById("task1").innerHTML="Element select by id";

document.querySelector(".task2").style.background="red";

// Activity 2
let newelement=document.createElement("div");
newelement.innerHTML=("<h2>task 3</h2>");
document.body.appendChild(newelement);


let ligenrate=document.createElement("li");
ligenrate.innerText="new li add";
document.querySelectorAll(".task4")[0].appendChild(ligenrate);


// activity  3
document.getElementById("task5").remove();

document.querySelector(".task6").children[2].remove();

// Activity 4
document.getElementById("task7").setAttribute("src","https://media.istockphoto.com/id/147557453/photo/sports-car.jpg?s=612x612&w=is&k=20&c=L8Xr1Y-6GO-VtdDw3QiwOmB28Xl0-mGmY9-tl2m8b9o=")


document.querySelector(".task8").setAttribute("class","add");

// Activity 5
let p=document.getElementById("task9");
function chancontent(){
    
   
    p.innerHTML="Changingin content";
    p.setAttribute("class","add");
}
p.addEventListener("mouseover",()=>{
    p.style.border="2px solid red";
})
p.addEventListener("mouseout",()=>{
    p.style.border="none";
})

