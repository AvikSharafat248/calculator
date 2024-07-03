// window.alert('This is an alert')


// document.getElementById("myH1").textContent = 'Hello';

// document.getElementById("myP").textContent = 'I like pizza'

// let age = 25;
// console.log(`You are ${age} years old`)

// let firstName = "Avik"
// console.log(typeof firstName)
// console.log(firstName)
// console.log(`My name is ${firstName}`)

// let favouriteFood = "Pasta";
// console.log(`My favourite food is ${favouriteFood}`)

// let forSale = true;
// console.log(`Is this car for sale: ${forSale}`)

// let name = "Avik Sharafat";
// let age = 21;

// document.getElementById("p1").textContent = `My name is ${name}` 

// let students = 30;

// students = students +=6;
// console.log(students)

// let result = 12 % 5 + 8 / 2
// console.log(result)

// let username;
// username = window.prompt("what's username");
// console.log(username)

// let username;

// document.getElementById("mysubmit").onclick = function(){
//     username = document.getElementById("mytext").value;
//     document.getElementById("myh1").textContent = `Hello ${username}`23
// }

// let age = window.prompt("How old are you?");
// age = Number(age);
// age +=2;
// console.log(age);

// const PI = 3.14159;
// let radius;
// let circumference;

// radius=window.prompt("Enter the radius of a circle");
// radius = Number(radius);
// circumference = 2 * pi * radius

// console.log(circumference)

// document.getElementById("mysubmit").onclick=function(){
//     radius = document.getElementById("mytext").value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius;

//     document.getElementById("h3").textContent = circumference

// }


// math objects


// let x = 10;
// let y = 23;
// let z = 43;

// // z = Math.trunc(x);
// // console.log(z)

// // c = Math.pow(x,y)
// // console.log(c)
// // b = Math.sqrt(x)
// // console.log(b)

// console.log(Math.max(x,y,z))


// Random Method

// let min = 50;
// let max = 100;

// let random = Math.floor(Math.random()*(max - min)) + min;

// console.log(random)


// const btn = document.getElementById("btn");
// const label = document.getElementById("label");
// const min = 1;
// const max = 6;
// let random;

// btn.onclick = function(){
//     random = Math.floor(Math.random() * max) + min; 
//     label.textContent = random
// }


// let age = 17;
// if(age >=18){
//     console.log("You can enter this page")
// }else{
//     console.log("You cannot enter this site")
// }



// const text = document.getElementById("text");
// const submit = document.getElementById("submit");
// const result = document.getElementById("result");



// submit.onclick = function(){

//     age = text.value;
//     age = Number(age)
//     if(age >=100){
//         result.textContent = `You are too old to enter this site`;

// }else if (age ==0){
//     result.textContent = `you cannot enter`
// }else if(age >=18){
//     result.textContent = `you are old enough to enter this site`
// }else{
//     result.textContent = `you must be 18+ to enter the site`
// }
// }




// let time = 9;
// if (time < 12){
//     console.log("Good Morning")
// }else{
//     console.log("Good Afternoon")
// }

// let user = "AvikSharafat";
// let results = user.includes(" ");
// console.log(results);

// if(results){
//     console.log("Username cannot includes space")
// }else{
//     console.log(user)
// }


// let phone = "123-456-7890";
// phone = phone.padStart(15,"0")
// console.log(phone)

const name = "Broseph Code";

// let first = name.slice(0,4)
// let last = name.slice(4,8)

// let firstchar = name.slice(0,1);
// let lastchar = name.slice(-1)
// console.log(firstchar)
// console.log(lastchar)

// console.log(first);
// console.log(last)

// let firstName = name.slice(0, name.indexOf(" "))
// let lastName = name.slice(name.indexOf(" ") + 1 )

// console.log(firstName)
// console.log(lastName)

// const email = "aviksharafat@gmail.com";

// let username = email.slice(0, email.indexOf("@"));
// console.log(username);

// let extension = email.slice(email.indexOf("@")+1);
// console.log(extension)

// method chaining

// let username = window.prompt("Enter your name");
// username = username.trim();
// letter = username.charAt(0);

// letter = letter.toUpperCase();

// let extra = username.slice(1);
// extra = extra.toLowerCase();

// username = letter + extra;
// console.log(username)

// let username = window.prompt("Enter your name");

// username = username.trim().charAt(0).toUpperCase()+ username.trim().slice(1).toLowerCase();
// console.log(username)


// Topic-Logical Operators

const temp = -100;

if (temp > 0 && temp <= 30) {
    console.log("The weather is Good")
} else {
    console.log("The weather is not good")
}



const isSunny = false;

if (isSunny) {
    console.log("It is sunny")
} else {
    console.log("It is not sunny")
}



// while loop

// let username ="";
// while(username==="" || username===null){
//     username = window.prompt("Enter your name")
// }{
//     console.log(`Hello ${username}`)
// }

// for loop

// for (i = 1; i <= 20; i++) {

//     if (i == 7) {
//         continue;
//     }
//     console.log(i)
// }


// function hello(name, formality) {
//     console.log("hello")
//     console.log("hello")
//     console.log(`hello ${name}`)
//     console.log(`hello ${formality}`)
// }

// hello("Avik", "HOW ARE YOU?");

// function add(x, y) {
//     let result = x + y;
//     return result;

// }

// function subtract(x, y) {
//     return x - y
// }

// console.log(subtract(2, 3))

// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     } else
//         return false;

// }



// function isValidEmail(email){
//     if(email.includes("@")){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(isValidEmail("avik@gmail.com"))


// // spread operator

// let numbers = [1,2,3,4,5,6,7];
// maximum = Math.max(...numbers);
// console.log(maximum)


// function open(...foods){
//     console.log(foods)
// }

// const food1 = "Pizza";
// const food2 = "Pasta";
// const food3 = "Burger";
// const food4 = "Plater";
// const food5 = "Rice";

// open(food1,food2,food3,food4)

// function sum(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
// }
// return result;
// }

// const total = sum(1,2);
// console.log(`Your total is $${total}`)

// function getAverage(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result / numbers.length
// }

// const all = getAverage(70,74,75,89);
// console.log(all)


// function combinestrings(...strings){
//     return strings.join(" ")
// }

// fullname = combinestrings("Avik", "Carter");
// console.log(fullname)


// let no = [1,2,3,4,5];

// no.forEach(double);
// no.forEach(display);





// function double(element,index,array){
//     array[index] = 2 * element;
// }

// function display(element){
//     console.log(element)
// }


import {PI, getCircumference,getArea} from './mathUtil.js';

console.log(PI)

const circumference = getCircumference(100)
console.log(circumference)