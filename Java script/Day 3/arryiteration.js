console.log("The forEach() Method")
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
console.log(txt)

function myFunction(value, index, array) {
  txt += value +=" "; 
}
console.log("-------------------------------------")

console.log("The map Method")
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

console.log(numbers2)

function myFunction(value, index, array) {
  return value * 2;
}
console.log("-------------------------------------")

console.log("The flatmap Method")
const myArr = [1, 2, 3, 4, 5,6];
const newArr = myArr.flatMap(x => [x, x * 10]);
console.log(newArr)
console.log("-------------------------------------")

console.log("The filter Method")
const numbers3= [45, 4, 9, 16, 25];
const over18 = numbers3.filter(myFunction);

console.log(over18)

function myFunction(value, index, array) {
  return value > 18;
}
console.log("-------------------------------------")

console.log("The reduce Method")
const numbers4 = [45, 4, 10, 16, 25];
let sum = numbers4.reduce(myFunction);

console.log("The sum is " + sum)

function myFunction(total, value, index, array) {
  return total + value;
}
console.log("-------------------------------------")

console.log("The every() Method")
const numbers5 = [45, 4, 9, 16, 25];
let allOver18 = numbers5.every(myFunction);

console.log("All over 18 is " + allOver18)

function myFunction(value, index, array) {
  return value > 18;
}
console.log("-------------------------------------")

console.log("The some() Method")
const numbers6 = [45, 4, 9, 16, 25];
let some18 = numbers6.some(myFunction);

console.log("some over 18 is " + some18)

function myFunction(value, index, array) {
  return value > 18;
}
console.log("-------------------------------------")

console.log("The keys() Method")
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + "<br>";
}

console.log(text)
console.log("-------------------------------------")

console.log("The entries() method")
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits1.entries();

for (let x of f) {
   console.log(x)
}
console.log("-------------------------------------")

console.log("The with method")
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");

 console.log(myMonths)
 console.log("-------------------------------------")

console.log("The ... Operator")
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3)
console.log("-------------------------------------")

console.log("The ... Operator")
const numbers7 = [23,55,21,87,56];
let minValue = Math.min(...numbers7);
let maxValue = Math.max(...numbers7);
console.log("Min = " + minValue +"Max = " + maxValue)
console.log("-------------------------------------")

console.log("Rest Elements")
let a, b, rest;
const arr5 = [1,2,3,4,5,6,7,8];
[a,b,c, ...rest] = arr5;
console.log("The rest is: " + rest)