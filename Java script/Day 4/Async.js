
console.log("callback function")


 function myDisplayer(some) {
  console.log(some)
}

function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

mySecond();
myFirst();

console.log("-----------------------------------")


console.log("set time out")
setTimeout(myFunction, 3000);

function myFunction() {
  console.log("Hello World!!")
}

/*console.log("-----------------------------------")

console.log("set interval")
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
 console.log(d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds())
}*/

console.log("-----------------------------------")


console.log("promise then")

function myDisplayer(some1) {
confirm.log(some1)
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;



  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);

console.log("-----------------------------------")


console.log("async function")

function myDisplayer(some2) {
console.log(some2)
}

async function myFunction() {return "Hello";}

myFunction().then(
  function(value1) {myDisplayer(value1);},
  function(error1) {myDisplayer(error1);}
);
