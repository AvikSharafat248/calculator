function Car(make,model,year,color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}

const car1 = new Car("Ford","Mustang",2024,"Red")
console.log(car1.model)

const car2 = new Car("Ferrari","Spider",2008,"Black")
console.log(car2.color)
