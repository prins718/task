const myFunction = function (a, b) {return a * b}
console.log(myFunction(4, 3))

console.log("---------------------------")

console.log("Arrows function")
let hello = () => {
  return "Hello World!";
}
console.log(hello())

console.log("--------")
let hello1 = (val) => "Hello " + val;
console.log(hello1("Universe!"))

console.log("---------------------------")

console.log("argument function")
function findMax() {
  let max = -Infinity;
  for(let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
} 
console.log(findMax(4, 5, 6))
console.log("---------------------------")


console.log("function call")
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"Prins",
  lastName: "Desai"
}
const person2 = {
  firstName:"Utsav",
  lastName: "Desai"
}
console.log(person.fullName.call(person1))
console.log(person.fullName.call(person2))
console.log("---------------------------")


console.log("function bind")

const person3 = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person3.fullName.bind(member);
console.log(fullName())
console.log("---------------------------")


console.log("Nested function")
function add()
{
    let counter = 0;
    function plus(){counter += 5;}
    plus();
    return counter;
}
console.log(add())