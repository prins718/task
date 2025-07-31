console.log("The sort() Method")
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)
fruits.sort();
console.log(fruits)
console.log("-------------------------------------")

console.log("The reverse() Method")
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.reverse();
console.log(fruits1)
console.log("-------------------------------------")



console.log("The tosorted() Method")
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
console.log(sorted)
console.log("-------------------------------------")



console.log("The numerical sort Method")
const points = [40, 100, 1, 5, 25, 10];
console.log(points)

points.sort(function(a, b){return a - b});
console.log(points)
console.log("-------------------------------------")


console.log("The minimum Method")
const points2 = [40, 100, 1, 5, 25, 10];
console.log(myArrayMin(points2))

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}