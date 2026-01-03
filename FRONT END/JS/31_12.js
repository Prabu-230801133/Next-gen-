// function abc(){
//     console.log("This is function abc");
// }
// abc();

// const xyz =()=> {
//     console.log("This is function xyz using arrow function");
// }
// xyz();

// function createMultiplier(x) {
//     const multiply = (y) => x * y;
//     return multiply;
// }

// const double = createMultiplier(2);
// console.log(double(5)); // Output: 10


// const add = (a, b) => a + b;
// console.log(add(3, 4)); // Output: 7

var reg=[1,2,3,4,5,54,6,7,8,9];
console.log("Register no: "+reg);
console.log(reg[0]);
reg.push(10);
console.log("After push register no: "+reg);
console.log("popped number = "+reg.pop());
console.log("After pop register no: "+reg);
console.log("Length of register no array = "+reg.length);
console.log("Index of 5 in register no array = "+reg.indexOf(5));
console.log(reg.sort());
console.log(reg.reverse());



