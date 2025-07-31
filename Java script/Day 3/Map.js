console.log("map method")
const fruits = new Map();

fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

let numb = fruits.get("apples");
console.log("There are " + numb)
console.log("---------------------------------------------")

console.log("instanceOf Map")
const fruits1 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits1 instanceof Map)
console.log("---------------------------------------------")

console.log("size of Map")
const fruits2 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits2.size)
console.log("---------------------------------------------")

console.log("delete of Map")
const fruits3 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

fruits3.delete("apples");

console.log(fruits3)
console.log("---------------------------------------------")

console.log("clear of Map")
const fruits4 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

fruits4.clear();

console.log(fruits4)
console.log("---------------------------------------------")

console.log("Has of Map")
const fruits5 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits5.has("apples"))
console.log("---------------------------------------------")

console.log("entries of Map")
const fruits6 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let text = "";
for (const x of fruits6.entries()) {
  text += x ;
}

console.log(text)
console.log("---------------------------------------------")

console.log("keys of Map")
const fruits7 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let text2 = "";
for (const x of fruits7.keys()) {
  text2 += x + "<br>";
}

console.log(text2)
console.log("---------------------------------------------")

console.log("object of keys")
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};


const fruits8 = new Map();

fruits8.set(apples, 500);
fruits8.set(bananas, 300);
fruits8.set(oranges, 200);

console.log(fruits8.get(apples))
console.log("---------------------------------------------")

console.log("map group by")
const fruits9 = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];


function myfunction({ quantity }) {
  return quantity > 200 ? "High" : "low";
}

const result = Map.groupBy(fruits9, myfunction);

let text3 ="These fruits are High: ";
for (let x of result.get("High")) {
  text3 += x.name + " " + x.quantity+" ";
}
text3 += "-----These fruits are low: ";
for (let x of result.get("low")) {
  text3 += x.name + " " + x.quantity + " ";
}
console.log(text3)
