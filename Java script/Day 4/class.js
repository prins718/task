class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const myCar1 = new Car("S Cross", 2014);
const myCar2 = new Car("Swift", 2019);


console.log(myCar1.name + " " + myCar2.name)

console.log("----------------------------------------------")

class Car11 {
constructor(name, year) {
    this.name = name;
    this.year = year;

  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car11("Ford", 2014);
console.log("My car is " + myCar.age() + " years old.")
console.log("----------------------------------------------")


console.log("class Inheritance")
class Car16 {
  constructor(brand) 
  {
    this.carname = brand;
  }
  present() 
  {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car16 
{
  constructor(brand, mod) 
  {
    super(brand);
    this.model = mod;
  }
  show() 
  {
    return this.present() + ', it is a ' + this.model;
  }
}

const myCar3 = new Model("Ford", "Mustang");
 console.log(myCar3.show())
