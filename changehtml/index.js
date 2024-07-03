const list = document.createElement("li")
list.textContent ="Mango";
list.style.fontWeight = "bold";
list.style.backgroundColor = "tomato";



const boxes = document.querySelectorAll("#fruits li")
document.getElementById("fruits").insertBefore(list, boxes[2])

document.getElementById("fruits").removeChild(list); 
