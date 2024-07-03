const box = document.getElementById("box");

let move = 10;
x = 0;
y = 0;

document.addEventListener("keydown",event=>{
    if(event.key.startsWith("Arrow")){
        event.preventDefault();

        switch(event.key){

    case "ArrowUp":

    y -=move;
    break;

    case "ArrowDown":
        y +=move;
        break;
        
    case "ArrowLeft":
        x -=move;
        break;
    
        case "ArrowRight":
            x+=move;
            break;
        }

        box.style.top = `${y}px`;
        box.style.left= `${x}px`;

    }


})
