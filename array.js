"use strict";
// annatation
var arr = [];
arr.push(1);
console.log(arr);
// type inferance
var arr4 = [1, 2, 3, 4];
arr4.push(89);
console.log(arr4);
console.log(arr4[3]);
// tuples
var arr5;
arr5 = [23, 'nandhini', true];
console.log(arr5);
var rect2 = {
    width: 23,
    height: 45,
    area: 567,
    color: "red"
};
console.log(rect2);
// functions
function divide({ dividend, divisor }) {
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));
// TS casting
let x = 'hello';
console.log(x.length);
// class
