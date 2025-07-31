console.log("The add() Method")
const letters = new Set(["a","b","c"]);


letters.add("d");
letters.add("e");
console.log("The set has " + letters.size)
console.log("-------------------------------------")

console.log("The size Method")
const mySet = new Set(["a","b","c"]);
console.log("The set size is: " + mySet.size)
console.log("-------------------------------------")

console.log("The has Method")
const letters1 = new Set(["a","b","c"]);
answer = letters1.has("d");
console.log("The answer is " + answer)
console.log("-------------------------------------")

console.log("the kyes methods")
const letters2 = new Set(["a","b","c"]);


const myIterator = letters2.keys();


let text = "";
for (const x of myIterator) {
  text += x;
}
console.log(text)
console.log("-------------------------------------")

console.log("the union methods")
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.union(B);

let text1 = "";
for (const x of C) {
  text1 += x;
}
console.log(text1)
console.log("-------------------------------------")

console.log("the difference methods")
const A1 = new Set(['a','b','c']);
const B1 = new Set(['b','c','d']);

const C1 = A1.difference(B1);

let text2 = "";
for (const x of C1) {
  text2 += x;
}
console.log("The difference is: " + text2)
console.log("-------------------------------------")

console.log("the symmetric difference methods")

const A2 = new Set(['a','b','c']);
const B2 = new Set(['b','c','d']);

const C2 = A2.symmetricDifference(B2);

let text4 = "";
for (const x of C2) {
  text4 += x;
}
console.log("Symmetric difference is: " + text4)
console.log("-------------------------------------")

console.log("the is subset method")
const A3 = new Set(['a','b','c']);
const B3 = new Set(['b','c','d']);

let answer3 = A3.isSubsetOf(B3);

console.log(answer3)
console.log("-------------------------------------")

console.log("the is superset method")
const A4 = new Set(['a','b','c']);
const B4 = new Set(['b','c','d']);

let answer1 = A4.isSupersetOf(B4);

console.log(answer1)
console.log("-------------------------------------")

console.log("the isDisjointFrom() Method")
const A5 = new Set(['a','b','c']);
const B5 = new Set(['b','c','d']);

answer2 = A5.isDisjointFrom(B5);

console.log(answer2)

