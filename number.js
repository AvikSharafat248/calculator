const min = 1;
const max = 100;
const answer = Math.floor(Math.random() *(max - min + 1)) + min
console.log(answer) 

let attempts = 0;
let guess;
let running = true;

while(running){


guess = window.prompt(`Guess a number${min} - ${max}`)
guess =Number(guess)
console.log(typeof guess, guess);

if(isNaN(guess)){
    window.alert(`please enter a valid number`)
}else if(guess >max || guess < min){
    window.alert(`please enter a valid number`)
}else{
    attempts++;
    if(guess < answer){
        window.alert("Too low!")
    }else if (guess > answer){
        window.alert("Too high!")
    }else{
        window.alert(`Correct!It took you ${attempts}`)
        running = false;
    }
}

}



