console.log("from method")
const myArr = Int16Array.from("1234567890");

console.log(myArr)
console.log("-------------------------------")

console.log("of method")
const myArr1 = Int32Array.of(1,2,3,4,5,6)

console.log(myArr1)
console.log("-------------------------------")

console.log("Byte per element method")
const myArr2 = new Int32Array(10);

console.log(myArr2.BYTES_PER_ELEMENT)
console.log("-------------------------------")

console.log("fill method")
const myArr3 = new Int16Array(10);
myArr3.fill(200);
console.log(myArr3)
console.log("-------------------------------")

console.log("find method")
const myArr4 = Int16Array.from([10,15,19,20,25,30,35,40,45,50]);
console.log(myArr4.find((x) => x > 18))
console.log("-------------------------------")

console.log("some method")
const myArr5 = Int16Array.from([10,15,20,25,30,35,40,45,50]);
console.log(myArr5.some((x) => x > 18))