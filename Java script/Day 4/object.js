function Person(frist,last,age)
{
     this.firstName=frist;
     this.lastName=last;
     this.age=age;
}

const myself = new Person("Prins","Desai",20);

console.log("My name is "+myself.firstName);

console.log("---------------------------")

console.log("object prototype")
function Person1(frist1,last1,age1)
{
     this.firstName1=frist1;
     this.lastName1=last1;
     this.age1=age1;
}

Person1.prototype.village="Bhesan";

const myself1 = new Person1("Prins","Desai",20);

console.log("My village name is "+myself1.village);

console.log("---------------------------")

console.log("object assign/entries method")

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const person2 = {firstName: "Anne",lastName: "Smith"};


Object.assign(person1, person2);


let text = Object.entries(person1);
console.log(text)
console.log("---------------------------")

console.log("object values method")

const car={
    cname:"S cross",
    year:2018,
    company:"Maruti"
};

let text1=Object.values(car)
console.log(text1)
console.log("---------------------------")

console.log("object Gatter method")

const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  }
};
console.log(person.lang)
console.log("---------------------------")

console.log("object satter method")

const person3 = {
  firstName3: "John",
  lastName3: "Doe",
  language3: "NO",
  set lang3(value) {
    this.language1 = value;
  }
};

person3.lang3 = "en";

console.log(person3.language1)
console.log("---------------------------")

console.log("object preventExtensions/isExtensible method")

"use strict"

const person4 = {firstName4:"John", lastName4:"Doe"};

Object.preventExtensions(person4)

let text4 = "";
try {
  person4.nationality = "English";
}
catch (err) {
  text4 = err;
}

console.log(text4)
let answer =  Object.isExtensible(person4)
console.log(answer)
console.log("---------------------------")

console.log("object seal/issealed method")
"use strict"
const car1={
    cname1:"S cross",
    year1:2018,
    company1:"Maruti"
};

Object.seal(car1)

let print1 = "";
try {
  delete car1.year1;
  print1= Object.values(car1);
}
catch (err) {
  print1 = err;
}

console.log(print1)

let result=Object.isSealed(car1);
console.log(result)

