console.log("Looping an Array")
const fruitss = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruitss.length;
for (let i = 0; i < fLen; i++) {
 console.log(fruitss)
}
console.log("-------------------------------------")


console.log("join method")
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" * "))
console.log("-------------------------------------")


console.log("at method")
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let fruit1 = fruits1.at(2);
console.log(fruit1)
console.log("-------------------------------------")


console.log("The pop() Method")
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2)
fruits2.pop();
console.log(fruits2)
console.log("-------------------------------------")


console.log("The shift() Method")
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3.shift())
console.log(fruits3)
console.log("-------------------------------------")


console.log("The unshift() Method")
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits4.unshift())
console.log(fruits4)
console.log("-------------------------------------")

console.log("The delete Method")
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits5)
delete fruits5[0];
console.log(fruits5)
console.log("-------------------------------------")

console.log("The concat() Method")
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren)
console.log("-------------------------------------")

console.log("The copyWithin() Method")
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits6.copyWithin(2,0))
console.log("-------------------------------------")

console.log("The flat() Method")
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr)
console.log("-------------------------------------")

console.log("The flatMap() Method")
const myArr1 = [1, 2, 3, 4, 5,6];
const newArr1 = myArr1.flatMap(x => [x, x * 10]);
console.log(newArr1)
console.log("-------------------------------------")

console.log("The splice() Method")
const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits7)

fruits7.splice(2, 0,  "Lemon", "Kiwi");
console.log(fruits7)
console.log("-------------------------------------")

console.log("The slice() Method")
const fruits8 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits8.slice(3);
console.log(fruits8) 
console.log(citrus)
console.log("-------------------------------------")

console.log("The includes() Method")
const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits9.includes("Mango"))
console.log("-------------------------------------")

console.log("The lastIndexOf() Method")
const fruits10 = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits10.lastIndexOf("Apple") + 1;
console.log("Apple is found in position " + position)
console.log("-------------------------------------")

console.log("The findIndex() Method")
const numbers = [4, 9, 16, 25, 29];
console.log(numbers.findIndex(x => x >18))
console.log("-------------------------------------")


console.log("The findLast() Method")
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
console.log("The last temperature over 40 was " + high)
console.log("-------------------------------------")
