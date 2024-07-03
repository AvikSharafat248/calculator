// hello(leave);

// function hello(callback){
//     console.log("Hello");
//     callback();
// }

// function leave(callback){
//     console.log("leave")
    
// }

// function goodbye(){
//     console.log("Goodbye")
// }

// sum(displaypage,1,3)

// function sum(callback,x,y){
//     let result = x + y;
//     callback(result);
// }

// function display(result){
//     console.log(result)
// }

// function displaypage(result){
// document.getElementById("h1").textContent = result;
// }

// avik(fahim)

// function avik(callback){
//     console.log("Avik");
//     callback();
// }

// function fahim(){
//     console.log("fahim")
// }


// let numbers = [1,2,3,4,5];

// numbers.forEach(square);
// // numbers.forEach(double);
// numbers.forEach(display);

// function double(element,index,array){
//     array[index] = element * 2;
// }


// function square(element,index,array){
//     array[index] = Math.pow(element,2);
// }

// function display(element){
//     console.log(element)
// }



// let fruits = ["apple", "banana","orange","coconut"];

// // fruits.forEach(uppercase);
// fruits.forEach(capitalize);
// fruits.forEach(display);


// function uppercase(element,index,array){
// array[index] = element.toUpperCase();
// }

// function capitalize(element,index,array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);

// }

// function display(element){
//     console.log(element)
// }

// const Numbers = [1,2,3,4,5];

// const squares = Numbers.map(Square);
// console.log(squares)
// function Square(element){
//     return Math.pow(element,2)
// }


// const dates = ["2024-1-10", "2025-2-20", "2021-4-24"];
// const formatdates = dates.map(format);
// console.log(formatdates);

// function format(element){
//     const parts = element.split("-");
//     return `${parts[1]}/ ${parts[2]}/ ${parts[0]}`;
// }

// filter method

// let numbers = [1,2,3,4,5,6,7];

// let even = numbers.filter(isEven);
// console.log(even)

// function isEven(element){
//     return element % 2 === 0;


// }


// const ages = [16,17,18,18,20,60];
// const adult = ages.filter(isAdult);
// const children = ages.filter(isChild);
// console.log(children)
// console.log(adult)

// function isAdult(element){
//     return element >=18;

// }

// function isChild(element){
//     return element < 18;

// }


// const words = ["apple","orange","banana","kiwi","watermelon"];
// const shorts = words.filter(short);
// console.log(shorts)


// function short(element){
//     return element.length <=6

// }


// .reduce()

// const prices = [5,30,10,25,15,20];
// const total =prices.reduce(sum);
// console.log(`${total}`);

// function sum(accumulator,element){
//     return accumulator + element;
// }

// const grades = [75,50,90,80,65,95];
// const max = grades.reduce(getMax);
// console.log(max)


// function getMax(accumulator,element){
//     return Math.max(accumulator,element);
// }




const numbers = [2,4,6,8];
const cubes = numbers.map(function(element){
    return Math.pow(element,3)
})

const even = numbers.filter(function(element){
    return element % 2 === 0;
});


const total = numbers.reduce(function(accumulator,element){
    return accumulator + element;
})

console.log(even);
console.log(total)

console.log(cubes)


