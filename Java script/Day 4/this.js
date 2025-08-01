const person = {
  firstName: "Prins",
  lastName: "Desai",
  id: 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName())


console.log("--------------------------------------")

const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person2 = {
  firstName:"Utsav",
  lastName: "Desai",
}

let x = person1.fullName.call(person2); 
console.log(x)