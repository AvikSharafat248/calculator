const person = {
    firstName: "Avik",
    lastName: "Sharafat",
    age:21,
    isMarried:false,
}

console.log(person.firstName, person.lastName)
console.log(person.isMarried)


const human = {
    name:"Avik",
    favFood:"Pasta",
    sayHello: function(){
        console.log(`Hi my name is ${this.name}`)
    }
}

human.sayHello()