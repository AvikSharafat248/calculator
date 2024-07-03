const text = document.getElementById("text");
const farhenheit = document.getElementById("farhenheit");
const celsius = document.getElementById("celsius");
const result = document.getElementById("result");

let temp;

function convert(){
    if(farhenheit.checked){
        
        temp = Number(text.value);
        temp = temp * 9 / 5 + 32;

        result.textContent = temp.toFixed(1) + "°F";
    }else if(celsius.checked){
        
        temp = Number(text.value);
        temp = (temp - 32) * (5/9);

        result.textContent = temp.toFixed(1) + "°C";

    }else{
        result.textContent = "select a unit"
    }
}