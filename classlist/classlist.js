const H1 = document.getElementById("hello");

H1.classList.add("disabled")

const btn = document.getElementById("btn");

btn.addEventListener("mouseover", event=>{

    event.target.classList.add("hover")

})
btn.addEventListener("mouseout", event=>{

    event.target.classList.remove("hover")

})

btn.classList.add("enabled");
btn.addEventListener("click", event =>{
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "boom";

    }else{

        event.target.classList.replace("enabled", "disabled")
    }


    
    
})