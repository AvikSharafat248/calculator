class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    display() {
        console.log(`Product: ${this.name}`)
            ;
        console.log(`Price: ${this.price}`)
            ;

    }

    tax(salestax) {
        return this.price + (this.price * tax)
    }
}

const tax = 0.05


const Product1 = new Product("Shirt", 19.99);
const Product2 = new Product("Pants", 22.35);
const Product3 = new Product("Shoe", 30);
Product1.display()

const total = Product1.tax(tax)
console.log(total)



class User {
    static usercount = 0;

    constructor(username) {
        this.username = username;
        User.usercount++;
    }

    sayHello() {
        console.log(`Hello my name is ${this.username}`)
    }
}

const user1 = new User("avik")
console.log(user1.username)
console.log(User.usercount)
user1.sayHello()

class Animal {
    constructor() {

    }

}

class Rabbit extends Animal {
    constructor(name, age, run) {
        this.name = name,
            this.age = age

    }
}

class Fish extends Animal {

}

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;

    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;

        }
        else {
            console.error("Width must be a positive number")
        }

    }
}

    set height(newHeight){
    if (newHeight > 0) {
        if (newHeight > 0) {
            this._height = newHeight;
        }
    } else {
        console.error("Height must be a positive number")










const rectangle = new Rectangle(100000, "pizza")
console.log(rectangle.width);
console.log(rectangle.height)

