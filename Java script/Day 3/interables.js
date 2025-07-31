myNumbers = {};

myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}

let text = ""
for (const num of myNumbers) {
  text += num +"  "
}

console.log(text)


console.log("-------Iterators reduce method----")
function myFunc(total, num) {
  return total + num;
}

const myIterator1 = Iterator.from([175, 50, 25]);

let result = myIterator1.reduce(myFunc);

console.log("The sum of all items is: " + result)


console.log("for each method")
const myIterator2 = Iterator.from("123456789");

let text2 = "";
myIterator2.forEach (x => text2 +=  x);
console.log(text2)