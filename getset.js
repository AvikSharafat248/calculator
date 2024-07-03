class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height=height;

    }

    set width(newWidth){
        if(newWidth>0){
            this._width = newWidth;
        }
        else{
            console.error(`Width must be a positive number`)
        }

    }
    set height(newHeight){
        if(newHeight>0){
            this._height = newHeight;
        }
        else{
            console.error(`Height must be a positive number`)
        }

    }

    get width(){
        return this._width;
    }get height(){
        return this._height;
    }

    get area(){
        return this._width * this._height
    }

}




const rectangle = new Rectangle(30,100)
console.log(rectangle.width)
console.log(rectangle.height)
console.log(rectangle.area)


class Person{
    constructor(firstname,lastname,age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        

    }

    set firstname(newFirstname){
        if(typeof newFirstname ==="string" && newFirstname.length > 0){
            this._firstname = newFirstname;
    }else{
        console.error(`First name must be a non empty string`)
    }
}

get firstname(){
    return this._firstname;
}
}
const person = new Person("Avik",30,"pizza");
console.log(person.firstname)