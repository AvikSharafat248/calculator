// let a = 1;
// let b = 2;

// [a,b] = [b,a];
// console.log(a);
// console.log(b);

// const colors = ["red", "green", "blue","black","white"];
// [colors[0],colors[4]] =[colors[4],colors[0]]
// console.log(colors)

// const [firstcolor, secondcolor, thirdcolor,...extracolors] = colors;
// console.log(firstcolor)
// console.log(secondcolor)
// console.log(thirdcolor)
// console.log(extracolors)


// const person1 ={
//     firstName:"Avik",
//     lastName : "Sharafat",
//     age:321,
// }
// const person2 ={
//     firstName : "Tahmid",
//     lastName : "Ahmed",
//     age:20,
// }

// const {firstName,lastName,age} = person1;
// console.log(firstName)
// console.log(lastName)


// class Person{
//     constructor(name,age,...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);

//     }

// }

// class Address{
//     constructor(street,city,country){
//     this.street = street;
//     this.city = city;
//     this.country = country;
//     }
// }

// const person1 = new Person("Avik",30,"124 Mojumdari ","Airport Road","Sylhet")

// console.log(person1.address)
// console.log(person1.age)



const fruits = [{ name: "Apple", color: "Red" }, { name: "Orange", color: "orange" }, { name: "Banana", color: "yellow" }]

// fruits.forEach(fruits=>console.log(fruits));

// const yellowFruits = fruits.filter(fruits=> fruits.color==="yellow")
// console.log(yellowFruits)


const people = [{ name: "Avik", age: 21, gpa: 2.5 }, { name: "Tahmid", age: 20, gpa: 4.00 }];

people.sort((a, b) => a.name.localeCompare(b.name))
console.log(people)

const date = new Date();
console.log(date)

const year = date.getFullYear();
console.log(year)


function counter() {
    let count = 0;
    function increment() {
        count++;
        console.log(`count increase to ${count}`)
    }

    function getcount(){
        return count;
    }

    return { increment,getcount }
}

const counters = counter();

counters.increment()
counters.increment()

console.log(`the current count is ${counters.getcount()}`)


let TimeoutId;


function startTimer(){
    TimeoutId=setTimeout(()=> window.alert("hello"),3000)
    
}

function clearTimer(){
    clearTimeout(TimeoutId);
}




