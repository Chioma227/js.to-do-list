let input = document.getElementById("input1");
let button = document.getElementById("button1");
let toDo = document.getElementById("toDoItems")


button.addEventListener("click", function () {
    let para = document.createElement("p");
    para.style.backgroundColor = "wheat";
    para.style.padding = "15px"
    para.style.color = "black"
    para.style.borderRadius = "50px"
    para.classList.add("paragraph-styling")
    toDo.appendChild(para);
    para.innerHTML = input.value;
    input.value = "";

    para.addEventListener("click", function(){
        para.style.textDecoration = "line-Through"
     })
     para.addEventListener("dblclick", function () {
         toDo.removeChild(para);
     })
})






