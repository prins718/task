console.log("string match")
let text = "Visit W3Schools!"; 
const myArr = text.match(/W3Schools/);
console.log(myArr)
console.log("--------------------------------------------")

console.log("string replace")
let text1="prins desai"
console.log("text1")
text2 = text1.replace(/desai/, "patel");
console.log(text2)
console.log("--------------------------------------------")

console.log("string search")
let text3="prins desai"
console.log("text1")
text4 = text3.search("desai");
console.log(text4)
console.log("--------------------------------------------")

console.log("or ")
let text5 = "Black, white, red, green, blue, yellow.";
let result = text5.match(/red|green|blue/g);
console.log(result)
console.log("--------------------------------------------")

console.log("G flag")
let text6 = "Is this all there is?";
const pattern = /is/g;

let result1 = text.match(pattern);
console.log(result1)
console.log(result)
console.log("--------------------------------------------")

console.log("G flag")

let text7 = "Visit bk zalavdiya";
const pattern1 = /zalavdiya/i;

let result2 = text.match(pattern1);

console.log(result2)
console.log("--------------------------------------------")

console.log("^ Metacharacter")
const pattern2 = /^prins/;
let text8 = "Hello Prins";
let result3 = pattern2.test(text8);
console.log(result3)
console.log("--------------------------------------------")

console.log("$ Metacharacter")
const pattern3 = /Prins$/;
let text9 = "Hello Prins";
let result4 = pattern3.test(text9);
console.log(result4)

